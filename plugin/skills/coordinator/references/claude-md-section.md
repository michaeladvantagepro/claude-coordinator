# Project rules file section

If the work lives in a repo, keep a short "Coordinator and sub-chats" section in the
project's rules file (CLAUDE.md). Every chat in the repo loads it, including sub-chats in
their worktrees and a replacement coordinator, so the rules don't depend only on briefs.

- At setup or alignment, draft the section, show it to the user, and write it only on
  their yes. It's a shared file: only you edit it afterwards.
- Keep it current whenever a setting changes, and log the change in the changelog.
- It covers: the project settings (company and its knowledge base, knowledge base
  output, main branch, where the work lives), the shared-files list, the standing chats'
  titles and session IDs, the sub-chat title format and types, the "Rules every brief must
  include" (see `brief-rules.md`), one line saying the coordinator runs `/coordinator`, and
  the line `Coordinator plugin version: <version>`, with the version this project was last
  set up or aligned with. Read that version from the `version` field of the plugin's own
  `.claude-plugin/plugin.json` (its path is given in `SKILL.md`). Setup and alignment write
  or update the line, and the plugin's update hook reads it (see `staying-current.md`).
- Keep the coordinator-only process (combining, handovers, handoff checks) out of it.
- A project with no repo skips this.
