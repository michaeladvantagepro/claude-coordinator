# Combining a sub-chat's work

When a sub-chat sends its final report, or its work looks finished to you, ask the user in
one line: "#<name> looks done. Combine it now?" Combine only on the user's yes here.

1. Review it against the project rules: format, required fields, naming, broken links,
   and duplicate or conflicting content. For articles, also run the combine checklist in
   `article-guidelines.md`. Hard failures go back to the sub-chat before you combine. List
   soft findings for the user alongside "Combine it now?". Read its handback file, if it
   has one, as the complete copy of the report.
2. Combine it into the main copy.
3. Update the shared files: register new items, fix scope boundaries, and write the
   change-log entry.
4. If it produced company knowledge, the company isn't `none`, and the knowledge base
   output isn't "no": for "yes", confirm the target base with the user and send the
   knowledge-base handoff (see `knowledge-base.md`); for "only if something comes up",
   first ask the user whether to add it at all (see "Knowledge base output" in
   `setup.md`).
5. Update "Coordinator state" (see `handovers.md`), save or commit, send the `.changelog` lines (see `standing-chats.md`), send the chat its
   closing note (see "Closing note before every DONE rename" below), and then rename the
   chat `DONE`, adding the completion date and local time at the end of the title as
   `(m/d/yy h:mm AM/PM)` (for example `DONE Build #site-search (11/20/26 6:52 PM)`).
6. In your closing report, if the repo has a remote, add one short line asking whether to
   push (see `handovers.md`). With no remote, say nothing about pushing.

## Closing note before every DONE rename
Every sub-chat rename to `DONE` follows this, whether the chat was combined, recorded,
dropped or closed for a full context. The user reads the chat afterward, and its last message
must show that you received the report and that nothing is left.

1. Only rename to `DONE` if nothing is left that is that chat's to do: no fix, no
   unanswered question. If something remains, leave it `WIP` and send it back. Work you own
   (deploys, live steps, publishing, knowledge-base handoffs) doesn't keep a chat open.
2. Send the chat a short closing note with SendMessage, before the rename. It says what
   happened, names anything you still own, and asks for one reply line. Example: "Combined
   into main (`<commit>`). Live steps, if any, are mine. Reply with exactly one line:
   'Combined (`<commit>`). Nothing more to do here.'" The reply instruction goes inside the
   note, so chats started from older briefs also end correctly. Send it before the rename,
   so the chat doesn't ask "This chat is marked DONE. Reopen it here?" The chat's one-line
   reply needs no answer from you.
3. Use the first words that fit: "Combined (`<commit>`)", "Planning recorded", "Dropped",
   "Handed to #<name>-2" (context full). A Knowledge chat is "Combined (`<commit>`)" or, if
   it only produced a handoff, "Handed off". The last words are always "Nothing more to do
   here."
4. If the note can't be delivered (the chat is archived, or the send fails), rename it
   anyway and say so in your closing report to the user.
