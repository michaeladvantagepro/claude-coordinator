# Standing chats (never finished)

Every coordinator has exactly one of each, as its own sub-chats, for the life of the
project: `.changelog #<project-name>` and `.open-questions #<project-name> (<n> open)`
(created as `(0 open)`).

- Create both automatically at setup, without asking, before drafting the CLAUDE.md
  section, so their session IDs go into the first draft. At alignment, create whichever is
  missing and keep any that exist. A replacement coordinator (context full) takes over the
  existing pair and never creates new ones.
- Build, Knowledge and Planning chats never get their own; they use the coordinator's.
- Record both session IDs in the project index and in the CLAUDE.md coordinator section.
- Each one's brief starts with a short description of its purpose, and the chat states
  that description in its first reply, so the user can see what the chat is for. The brief
  also says where the chat's permanent record lives, with a clickable link to the file
  (full path):
  - `.changelog`: the project's change-log file. You write the file; the chat echoes the
    lines.
  - `.open-questions`: the project's open-questions file, if the project keeps one.
    Otherwise it says the questions live only in that chat.
- `.changelog` runs on a small model at low effort, since it only echoes. `.open-questions`
  runs on a mid-level model at low effort, since grouping questions takes a little
  judgment.
- If the user's message reaches you over Remote Control, you can't start them. Say so in
  one line, and create them as soon as the user's next message comes from the desktop app.

- **`.open-questions`:** a holding place only, for questions the user can't answer now
  or is unsure about. Chats never guess. They ask the user directly in their own chat
  first, and send a question here (through you or straight to this chat) only when the
  user defers or isn't sure, then carry on with what they can confirm. Before a sub-chat
  hands back, it re-asks the user any of its questions still open; the user may leave
  them open. In articles, questions left open become known gaps, and they also stay
  here. This chat collects and groups the questions by who should answer them. When a
  batch of answers is ready, it hands the batch to you automatically instead of asking
  the user.
- **Live count in the title:** the chat is titled `.open-questions #<project-name> (<n>
  open)`. It keeps the count current by renaming itself whenever the count changes. This
  is the one exception to "sub-chats never rename themselves". At alignment, rename an
  existing `.open-questions` chat to this form.
- **`.changelog`:** after every save, commit or merge to the main copy, send it one line
  per change: `YYYY-MM-DD #<area> <what changed> (<commit id, if any>)`. Agree the area
  tags with the user (for example #content, #app, #repo for setup and rules). It echoes
  the lines and nothing else.

## Brief templates

Start each brief like this, then add the usual brief rules (see `brief-rules.md`).

`.changelog #<project-name>`:

> Purpose: you keep the running change log for <project-name>. I send you one line per
> change; you echo each line and nothing else.
> Permanent record: [<file name>](<full path to the change-log file>). The coordinator
> writes that file; you only echo the lines.
> In your first reply, state this purpose in a sentence or two.

`.open-questions #<project-name>`:

> Purpose: you are a holding place for open questions for <project-name> that the user
> can't answer now or is unsure about, grouped by who should answer them.
> Keep a live count in your title: `.open-questions #<project-name> (<n> open)`. Rename
> yourself whenever the count changes. You are the one chat allowed to rename itself.
> Permanent record: [<file name>](<full path to the open-questions file>). *(If the project
> keeps no such file, write instead: "The questions live only in this chat.")*
> In your first reply, state this purpose in a sentence or two.
