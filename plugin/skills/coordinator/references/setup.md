# Setup mode (a fresh chat)

Run this when the chat has no coordinator instructions yet.

1. Make sure the config is loaded (see `config-format.md`).
2. Your first question, before anything else (including Company), is what to call the
   project, unless the name came with `/coordinator <name>` (`$ARGUMENTS`). Never infer it
   from the folder or the chat. The name never decides any other setting. Then title this
   chat `Coordinator #<project-name>`. The standing chats use the same name.
   Insist on a name. If the user skips the question or says "you pick", suggest one name
   (for example from the folder) and ask them to confirm it with a yes; a name the user
   confirms isn't a guess. Until a name is confirmed, don't title the chat, create the
   standing chats or write the CLAUDE.md section, and keep asking in one short line.
3. Ask for the other project settings below, grouped into as few questions as you can. Skip
   anything the user already told you, that the project rules file already states, or
   that a predecessor coordinator's brief states (a replacement coordinator gets the
   settings, Company included, in its brief). Ask
   the Company setting first and by itself, then Knowledge base output.
4. Create this project's standing chats, `.changelog #<project-name>` and
   `.open-questions #<project-name> (0 open)`, automatically and without asking (see
   `standing-chats.md`), so their session IDs are known before the next step.
5. If the work lives in a repo, draft the "Coordinator and sub-chats" section (see
   `claude-md-section.md`), including the standing chats' session IDs and the line
   `Coordinator plugin version: <version>`, show it, and write it only on a yes. Record
   both session IDs in the project index too.
6. Say what is settled and what is still open, in a few lines. Then start planning with
   the user.

## Project settings (ask at the start)

- **Project:** name and one-line description.
- **Company:** one of the configured companies, `mixed` (only if the config offers it),
  or `none`. Required, and ask at the start. There is no default: never infer it from the
  project name or folder. It says which company the work belongs to, and so where any
  company knowledge may go (see `knowledge-base.md`): a company -> that company's
  knowledge base; mixed -> each doc to one of the configured companies, routed doc by
  doc; none -> no company, nothing is sent. If no companies are configured, the options
  are the user adding one to the config, or `none`. Send nothing to any knowledge base
  until the user answers.
- **Knowledge base output:** yes / only if something comes up / no. Ask at the start;
  it's separate from Company. Not every project writes articles: many just build or fix
  something.
  - yes: writing knowledge base articles is part of the project's purpose.
  - only if something comes up: no articles are expected, but when combining produces
    something worth keeping (for example a fix that reveals a runbook), ask the user in
    one line: "This produced <title>. Add it to the <company> knowledge base?" Accept a
    no.
  - no: never ask, and send nothing.

  Suggest "only if something comes up" for build and fix projects, but let the user
  choose.
- **Where the work lives:** repo and path, folder, or "documents in this chat".
- **Main branch or master copy:** for example `integration`.
- **Shared files only you edit:** the list. A file is shared if it records, indexes or
  governs other chats' work: the rules file, plans of record, indexes, change logs,
  release notes. The work itself (articles, code, design docs) is not shared: sub-chats
  edit it on their branch, and you review it when combining. If two sub-chats need the
  same work file at once, run them one after the other instead of making the file shared.
  Write the final list into the project rules file so every brief can point to it.
- **Project rules file:** for example CLAUDE.md or a style guide. Read it first; it
  overrides anything in this skill.
- **Whether you can start other chats:** yes or no. If not, write each sub-chat's brief
  for the user to paste into a new chat, and treat what they paste back as its report.
  Even when yes: if the user's message reaches you over Remote Control, the app refuses to
  start a chat (it currently allows that only from a message typed in the desktop app).
  Don't attempt it and report a failure. Say so in one line and offer two options: the
  user resends from the desktop app, or you write the brief for the user to paste.
  (Messaging chats that are already running still works.)
