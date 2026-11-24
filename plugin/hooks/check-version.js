#!/usr/bin/env node
// UserPromptSubmit hook: tells a project's coordinator when the installed coordinator
// plugin is newer than the version recorded in the project's CLAUDE.md.
// It must never block or slow a message: everything is wrapped in try/catch and the
// process always exits 0. No network access.
'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const crypto = require('crypto');

function parseVersion(v) {
  const m = /^(\d+)\.(\d+)\.(\d+)/.exec(String(v).trim());
  return m ? [Number(m[1]), Number(m[2]), Number(m[3])] : null;
}

// Returns <0, 0 or >0. Unparseable versions compare as equal.
function compareVersions(a, b) {
  const pa = parseVersion(a);
  const pb = parseVersion(b);
  if (!pa || !pb) return 0;
  for (let i = 0; i < 3; i++) {
    if (pa[i] !== pb[i]) return pa[i] - pb[i];
  }
  return 0;
}

function readText(file) {
  try {
    return fs.readFileSync(file, 'utf8');
  } catch (e) {
    return null;
  }
}

function readInput() {
  try {
    const raw = fs.readFileSync(0, 'utf8');
    return raw.trim() ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function localDate(d) {
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

// The version recorded in the project's CLAUDE.md, looked for in the project dir first,
// then in the hook's working directory.
function findRecorded(dirs) {
  for (const dir of dirs) {
    const text = readText(path.join(dir, 'CLAUDE.md'));
    if (!text) continue;
    const m = /Coordinator plugin version:\s*`?(\d+\.\d+\.\d+)/.exec(text);
    if (m) return { version: m[1], dir };
  }
  return null;
}

// Release-notes entries newer than `recorded` and up to `installed`, newest first.
function notesBetween(root, recorded, installed) {
  const text = readText(path.join(root, 'RELEASE-NOTES.md'));
  if (!text) return [];
  const entries = [];
  const re = /^##\s+(\d+\.\d+\.\d+)\s*-\s*(.*)$/gm;
  let m;
  while ((m = re.exec(text))) {
    const start = m.index + m[0].length;
    const next = text.indexOf('\n## ', start);
    const body = text.slice(start, next === -1 ? undefined : next).trim(); // keep line breaks: a bulleted entry stays one bullet per line
    entries.push({ version: m[1], date: m[2].trim(), description: body });
  }
  return entries
    .filter((e) => compareVersions(e.version, recorded) > 0 && compareVersions(e.version, installed) <= 0)
    .sort((a, b) => compareVersions(b.version, a.version));
}

// The install record's lastUpdated for the coordinator plugin, in local time.
function updateStamp(installed) {
  const text = readText(path.join(os.homedir(), '.claude', 'plugins', 'installed_plugins.json'));
  if (!text) return null;
  const plugins = (JSON.parse(text) || {}).plugins || {};
  const key = Object.keys(plugins).find((k) => k.startsWith('coordinator@'));
  if (!key) return null;
  const list = [].concat(plugins[key] || []);
  const entry = list.find((e) => e && e.version === installed) || list[0];
  if (!entry || !entry.lastUpdated) return null;
  const d = new Date(entry.lastUpdated);
  if (isNaN(d.getTime())) return null;
  return {
    date: d.toLocaleDateString('en-US', { year: '2-digit', month: 'numeric', day: 'numeric' }),
    time: d
      .toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
      .replace(/[  ]/g, ' '),
  };
}

// Per-chat state files pile up, so delete the ones not modified in the last 30 days.
// Never throws.
function cleanOldState(stateDir) {
  try {
    const cutoff = Date.now() - 30 * 24 * 60 * 60 * 1000;
    for (const name of fs.readdirSync(stateDir)) {
      if (!name.endsWith('.json')) continue;
      try {
        const file = path.join(stateDir, name);
        if (fs.statSync(file).mtimeMs < cutoff) fs.unlinkSync(file);
      } catch (e) {
        // skip this file
      }
    }
  } catch (e) {
    // no state folder yet, or unreadable: nothing to clean
  }
}

function main() {
  const input = readInput();
  const dirs = [process.env.CLAUDE_PROJECT_DIR, input.cwd, process.cwd()].filter(Boolean);

  const recorded = findRecorded(dirs);
  if (!recorded) return; // no CLAUDE.md or no version line: not a coordinator project

  const root = path.resolve(__dirname, '..');
  const manifest = readText(path.join(root, '.claude-plugin', 'plugin.json'));
  if (!manifest) return;
  const installed = JSON.parse(manifest).version;
  if (!installed || compareVersions(installed, recorded.version) <= 0) return;

  // Each chat is told independently, at most once a local day, until the project's
  // recorded version catches up (the check above then stays silent for every chat).
  // State is keyed by project folder and the chat's session_id (folder alone if the
  // input has none).
  const folder = path.resolve(recorded.dir).toLowerCase();
  const session = typeof input.session_id === 'string' ? input.session_id : '';
  const key = crypto
    .createHash('sha1')
    .update(session ? `${folder}\n${session}` : folder)
    .digest('hex')
    .slice(0, 16);
  const stateDir = path.join(os.homedir(), '.claude', 'coordinator', 'state');
  const stateFile = path.join(stateDir, `${key}.json`);
  const today = localDate(new Date());
  cleanOldState(stateDir);
  let state = {};
  try {
    state = JSON.parse(readText(stateFile) || '{}') || {};
  } catch (e) {
    state = {};
  }
  if (state.lastCheckDate === today) return;

  const stamp = updateStamp(installed);
  const notes = notesBetween(root, recorded.version, installed);

  const lines = [
    'Coordinator plugin update notice (sent by the plugin\'s version check).',
    `Installed coordinator plugin version: ${installed}.`,
    `Version recorded in this project's CLAUDE.md: ${recorded.version}.`,
  ];
  if (stamp) lines.push(`Updated on ${stamp.date} ${stamp.time} (local time).`);
  lines.push('Release notes for the versions since the recorded one, newest first:');
  if (notes.length) {
    for (const n of notes) lines.push(`${n.version} (${n.date}):`, n.description);
  } else {
    lines.push('(no release notes found)');
  }
  lines.push(
    'If you are this project\'s coordinator, apply the update yourself in this same turn and leave the note, as references/staying-current.md says. Do not ask the user whether to update. Otherwise ignore this.',
    `(File: ${path.join(root, 'skills', 'coordinator', 'references', 'staying-current.md')})`
  );

  // Record the notice before printing it, so a failure here can never repeat it.
  fs.mkdirSync(stateDir, { recursive: true });
  fs.writeFileSync(stateFile, JSON.stringify({ lastCheckDate: today }));

  process.stdout.write(
    JSON.stringify({
      hookSpecificOutput: { hookEventName: 'UserPromptSubmit', additionalContext: lines.join('\n') },
    })
  );
}

try {
  main();
} catch (e) {
  // Never block or slow a message.
}
process.exit(0);
