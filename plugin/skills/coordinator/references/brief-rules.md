# Rules every brief must include

Paste the block below into every sub-chat brief, and into a project's CLAUDE.md section.
Fill in the placeholders first:

- `<company>` in rule 4: the sub-chat's company name from the configured companies, or
  "more than one (mixed project)", or "none".
- `<kb-output>` in rule 4: the project's knowledge base output, "yes", "only if
  something comes up" or "no" (see `setup.md`).
- `<open-questions-session-id>` in rule 5: the session ID of this project's
  `.open-questions #<project-name>` chat (fill in the project name too).
- `<worktree>` and `<short-name>`: leave as written; the sub-chat fills them in.

The block is written in the user's voice ("ask me") because the sub-chat reads it as the
user's own rules. Paste it as is.

```text
1. Automatic handback: when the work reaches a natural end point (what was asked is
   drafted, built or decided, and nothing is waiting on me), don't ask me; end your turn
   with your final report in chat, which reaches the coordinator. That's the official
   channel. If you have your own worktree, also save the same report to
   `.claude/handbacks/<worktree>.md` there, because reports relayed between chats can
   arrive cut short. That folder is git-ignored; never commit it. Never rename this chat;
   the coordinator does that. (The one exception is the `.open-questions` chat, which
   keeps its own count in its title; see `standing-chats.md`.) The coordinator's "Combine it now?" is my only approval.
2. Reopening a DONE chat: if this chat is marked `DONE` and gets a new message, don't just
   continue. Ask me in one line: "This chat is marked DONE. Reopen it here, or hand back
   to the coordinator for a fresh chat?"
   - Reopen here: rename the prefix `DONE` -> `WIP`, drop the bracketed completion date and time from the end of the
     title, and proceed.
   - Fresh chat: send the coordinator a short handoff report (current state, key
     decisions, where you left off, what the successor needs) and ask it to create the new
     chat.
3. Context full: if I tell you your context is almost full, stop new work so nothing is
   lost. First offer `/squish:squish` (plain `/squish` also works in the CLI, not in the desktop app), if it's installed:
   it updates docs, commits locally, writes `.claude/handoffs/squish.md`, and I run
   `/compact`; this chat then keeps going. If squish isn't installed or I prefer a new
   chat:
   a. Commit your work in progress locally on your branch.
   b. Write a handoff file, `.claude/handoffs/<short-name>.md`, for a reader who knows
      nothing: the goal and brief, what's done, decisions made and why, current state of
      files, open questions, exact next steps, and gotchas. Commit it on your branch.
   c. End your turn with one line for the coordinator: context full, the handoff file
      path, your branch, please spawn a successor.
4. Company and knowledge base: this chat's company is <company>, and this project's
   knowledge base output is <kb-output>. Never read from or write to a company knowledge
   base outside your company, and don't write into any knowledge base yourself. Never put
   more than one company's information in one doc. Unless the knowledge base output is
   "no", list in your final report any company
   knowledge you produced (SOPs, runbooks, system references, policies, lasting
   decisions) and label each item with its company, so the coordinator can offer or
   hand it off.
5. Open questions: never guess. Ask me directly in this chat for anything you can't
   confirm from the files or other confirmed sources. Only if I can't answer now or I'm
   not sure, send the question to `.open-questions #<project-name>` (session
   <open-questions-session-id>), or through the coordinator, and carry on with what you
   can confirm.
6. Re-ask before handing back: before you hand back, ask me again, in this chat, any of
   your questions that are still open. I may leave them open.
7. Writing steps and articles (Knowledge chats; Build chats skip this):
   a. Steps say where. In any step-by-step process (on screen or physical), when the page
      or place is dense or unclear, each step names where the target is. For example:
      "Click **Start**, on the green rail on the left side of the page." Not just "Click
      Start". If you can't tell where something is, ask me directly in this chat.
   b. Screenshot pairs. On dense or unclear pages, make two copies of the screenshot: an
      annotated one (arrows, short text labels) and a plain one as backup. If you can open
      the page in the built-in browser, take the screenshot yourself. Otherwise (a login
      you lack, a desktop app, a physical task), ask me in this chat for a screenshot or
      photo, then annotate it with whatever image tool is available. Strip image
      metadata. Blur names, customer details and secrets.
   c. Images are stored, not git-ignored. Commit them with the article until the knowledge
      base site's storage exists. In the article, link the annotated one as the image
      (`![...](...)`) and the plain one as a backup link. Suggested names:
      `<article>-step-<n>.png` and `<article>-step-<n>-annotated.png`, in an `images/`
      folder next to the article. If the base's own authoring guide says where images
      live, follow that instead.
   d. Known gaps. Questions still open when you finish become known gaps: add a short
      "Known gaps" section at the end of the article, and a one-line note at each
      affected step. They also stay in `.open-questions`.
```
