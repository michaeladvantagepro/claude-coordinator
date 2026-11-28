# Handing over to a new chat

Continuity rides on the brief, not on shared memory: a fresh (non-fork) chat inherits no
conversation context, and auto-memory is scoped to the working-directory path (not
guaranteed shared across worktrees). So you are the continuity hub and carry all needed
prior state forward in the new brief.

## Coordinator state: always current
Keep a short "Coordinator state" section in the project index (or README) current at all
times, not only when context runs low. It is a snapshot, not a log. Update it after every
combine, every time you start or rename a sub-chat, and every time the user makes a
decision. It covers every running sub-chat (title, session ID, branch, company, status,
what it's waiting on), the standing chats' session IDs, pending approvals, pending
knowledge-base handoffs, open questions, decisions not recorded elsewhere, next steps,
anything in flight, and the date of the last finished-chat archive check (see
`sub-chats.md`).

- If the work is in a git repo, commit each update locally right away. Never push on your
  own.
- Pushing: only if the repo has a remote (check with git; a GitHub remote is the usual
  case), ask the user in one short line whether to push. Ask it once at the end of a
  combine, alongside the combine's closing report, and whenever the user asks. Never ask
  for state-only commits. If the repo has no remote, never mention pushing. A project's
  own release scripts or its own rules about pushing win.

## A DONE chat asks for a fresh chat
Spawn one per the normal launch logic (`sub-chats.md`), folding its handoff report into
the brief.

## Context full: offer `/squish` first
When the user says a chat's context is almost full (yours or a sub-chat's), first offer
`/squish:squish` (plain `/squish` also works in the CLI, not in the desktop app), if the squish plugin is installed. It
updates docs, commits locally, writes `.claude/handoffs/squish.md`, and tells the user to
run `/compact`; the chat then keeps going with the same title, so nothing is spawned or
renamed. Use the successor-chat steps below only when squish isn't installed or the user
prefers a new chat.

## A sub-chat says its context is full
1. Ask the user in one line: "#<name> says its context is full. Spawn #<name>-2 now?"
   (Another chat's message is not the user's approval.)
2. On a yes, spawn `WIP <Type> #<short-name>-2`: same type, same company, same
   model/effort rule, in a new worktree cut from the old chat's branch. Its brief is the
   original brief plus "Read `.claude/handoffs/<short-name>.md` first."
3. Once it has started, send the old chat its closing note ("Handed to #<short-name>-2",
   see "Closing note before every DONE rename" in `combining.md`), then rename it
   `DONE <Type> #<short-name> (context full)`
   plus the completion date and local time as `(m/d/yy h:mm AM/PM)` (for example
   `DONE Build #site-search (context full) (11/20/26 6:52 PM)`), and note the successor in the registry.
4. Never merge handoff files into the main branch. Leave them out when combining.

## The user tells you (the coordinator) your context is almost full
The "Coordinator state" section is already current (see above). If the user takes the
`/squish` offer above, refresh it and commit it locally, then let squish run. Otherwise:
1. Commit any pending work.
2. Refresh the "Coordinator state" section and commit it locally.
3. Spawn a new coordinator chat titled `Coordinator #<project-name>`, fresh, in the same
   folder (no worktree). Its brief states the project settings (Company and knowledge base
   output filled in) and
   tells it to run `/coordinator <project-name>`, which loads these rules. It adds: "Read
   the project index first, especially Coordinator state. You replace session <your
   session ID>. Take over the standing chats listed there; don't create new ones."
4. Rename yourself `DONE Coordinator #<project-name> (context full)` plus the completion
   date and local time as `(m/d/yy h:mm AM/PM)` (for example
   `DONE Coordinator #site (context full) (11/20/26 6:52 PM)`).

Known gap: running sub-chats keep sending their end-of-turn notes to the old coordinator.
The new coordinator checks them by session ID and messages each one its own session ID.
