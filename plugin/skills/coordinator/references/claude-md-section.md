# Project rules file section

If the work lives in a repo, keep a short "Coordinator and sub-chats" section in the
project's rules file (CLAUDE.md). Every chat in the repo loads it, including sub-chats in
their worktrees and a replacement coordinator, so the rules don't depend only on briefs.

- At setup, on a plugin update, and when the user types `/coordinator` in an existing
  coordinator chat, write or update the section without showing a draft or waiting for a
  yes. Then tell the user in a line or two what you wrote or changed. If the work is in a
  git repo, commit it locally and never push. It's a shared file: only you edit it
  afterwards.
- Keep it current whenever a setting changes, and log the change in the changelog.
- It covers: the project's per-project settings (company and its knowledge base,
  knowledge base output, main branch, where the work lives; see `setup.md`), the shared-files list, the standing chats'
  titles and session IDs, the sub-chat title format and types, the "Rules every brief must
  include" (see `brief-rules.md`), one line saying the coordinator runs `/coordinator`, and
  the line `Coordinator plugin version: <version>`, with the version this project was last
  set up or updated with. Read that version from the `version` field of the plugin's own
  `.claude-plugin/plugin.json` (its path is given in `SKILL.md`). Setup and updates write
  or update the line, and the plugin's update hook reads it (see `staying-current.md`).
- Keep the coordinator-only process (combining, handovers, handoff checks) out of it.
- A project with no repo skips this.
