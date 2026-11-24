# Alignment mode (a chat that already has coordinator instructions)

Run this when the chat is already a coordinator: it has coordinator instructions from an
earlier paste or an earlier `/coordinator` run, or its title starts with `Coordinator #`.
These instructions now replace the chat's current setup. Then:

1. Make sure the config is loaded (see `config-format.md`). If this chat's title isn't
   `Coordinator #<project-name>`, first ask the user what to call the project (unless the
   name came with `/coordinator <name>`) and retitle the chat. Insist on a name: if the
   user skips the question or says "you pick", suggest one name (for example from the
   folder) and ask them to confirm it with a yes; a name the user confirms isn't a guess.
   Until a name is confirmed, don't title the chat, create the standing chats or write the
   CLAUDE.md section, and keep asking in one short line. Only then ask the user
   whether this is a project for one of the configured companies, `mixed` (only if the config offers it),
   or `none`, and what its knowledge base output is (yes / only if something comes up /
   no; see `setup.md`). Don't guess from the project name or folder, and send nothing to
   any knowledge base until the user answers.
2. Re-check your other project settings against it (the list is in `setup.md`), and ask
   the user about anything now missing or inconsistent.
3. Create whichever of this project's standing chats are missing (see
   `standing-chats.md`), and keep any that already exist. Rename an existing
   `.open-questions` chat to `.open-questions #<project-name> (<n> open)`.
4. If the work lives in a repo, draft or update the "Coordinator and sub-chats" section of
   the project's CLAUDE.md (see `claude-md-section.md`), including the standing chats'
   session IDs and the line `Coordinator plugin version: <version>` (set to the installed
   version, since you are aligning to it), show it to the user, and write it only on their yes.
5. For each sub-chat that's still running, send it the "Rules every brief must include"
   (see `brief-rules.md`) with its company filled in, since its original brief doesn't
   have those rules.
6. Tell the user what you changed before doing any other work.
