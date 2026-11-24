# Coordinator config: format and first run

The plugin carries no personal or per-computer data. Everything that belongs to one user
or one computer lives in a config file outside the plugin.

**Location:** `~/.claude/coordinator/config.md` (on Windows,
`%USERPROFILE%\.claude\coordinator\config.md`). It is a plain text file. The user can
edit it by hand at any time.

## Format

Markdown with YAML frontmatter. The frontmatter holds every value. The body is free text
and is ignored.

```markdown
---
type: coordinator-config
title: Coordinator config
description: Per-user settings for the /coordinator skill.
tags: [coordinator, config]
generated:
  by: <who or what wrote it>
  at: <ISO8601 timestamp>
config_version: 1
companies:
  - name: <short label, e.g. the company name>
    knowledge_base: <the base's name>
    remote: <git remote, owner/repo>
    branch: <the base's main branch>
    folder: '<local folder of the base>'
    content_rules:
      - <a content rule of that base, e.g. "No personal names in articles">
offer_mixed: true
min_model_build_knowledge: Sonnet 5.5
coordinator_picks_effort: true
---
```

| Key | Meaning |
|---|---|
| `companies` | The companies whose knowledge bases this user routes to. One entry each. May be empty. |
| `companies[].name` | The label used in the Company setting, titles and briefs. |
| `companies[].knowledge_base` | The base's name, used when confirming a handoff. |
| `companies[].remote` | The git remote the base must have. Checked before every handoff. |
| `companies[].branch` | The base's main branch. |
| `companies[].folder` | The base's local folder. |
| `companies[].content_rules` | That base's content rules. They apply to everything sent to it. |
| `offer_mixed` | Whether "mixed" is offered as a Company choice. |
| `min_model_build_knowledge` | The lowest model for Build and Knowledge sub-chats. Default `Sonnet 5.5`. |
| `coordinator_picks_effort` | Whether the coordinator may set effort levels on sub-chats. |

Every key above is a **global** setting: it is about the person, not one project. The
per-project settings (the project's company, its knowledge base output and the rest) live
in the project's CLAUDE.md coordinator section (see `setup.md`). Note for future plugin
authors: each new setting must say which kind it is.

## Using it

Read the file at the start of every `/coordinator` run, in both modes. Later references
say "the configured companies", "the configured minimum model" and so on; they mean these
values. If the file is unreadable or a key is missing, treat it as a missing config and
run the first-run flow for what is missing.

## First run (config missing)

1. Tell the user in one line that no config exists yet and that you'll ask for each value.
2. Ask, one group at a time, and wait for each answer:
   - Companies: for each one, its name, knowledge base name, git remote, branch, local
     folder, and that base's content rules (for example "no personal names in
     articles"). Ask whether there is another company until the user says no. Zero
     companies is allowed.
   - Whether "mixed" is offered as a Company choice (ask only if there are two or more
     companies; otherwise record `false`).
   - The minimum model for Build and Knowledge sub-chats (default Sonnet 5.5).
   - Whether you may pick effort levels for sub-chats.
3. Draft the file in the format above and show it. Write it only on the user's yes. If
   the answer is no, ask what to change, or carry on this run without a saved config and
   say so.
4. Continue with the mode you were in.
