# Sub-chats

Pick the type before launching. Title format: `WIP <Type> #<short-name>`. Rename to
`DONE` only when the user says it's done, and add the completion date and local time at
the end of the title, as `(m/d/yy h:mm AM/PM)` (for example
`DONE Build #site-search (11/20/26 6:52 PM)`). Before every `DONE` rename, send the chat
its closing note (see "Closing note before every DONE rename" in `combining.md`).

- **Knowledge:** writes or updates the project's content (articles, docs, SOPs) as
  drafts, from confirmed facts only.
- **Build:** only for work that is already well scoped and ready to build. Anything still
  being decided goes to a Planning chat first.
- **Planning:** talks a topic through (questions, options, decisions) and changes no
  files. Use a strong model at moderate effort if you can choose. When the plan is
  settled, it reports back, and you turn the decisions into a Knowledge or Build chat.

## When you launch one

- If work happens in a repo, give each Knowledge or Build chat its own branch or worktree
  cut from the main branch. Save or commit your pending work first, so the new chat
  starts from the latest version. Make sure `.claude/handbacks/` is git-ignored before
  the first launch.
- **Model and effort.** Launch every Build and Knowledge chat on the configured minimum
  model or higher (`min_model_build_knowledge`, default Sonnet 5.5). You may always pin
  the model. For each chat, recommend an effort level sized to the task and state it when
  you launch. If `coordinator_picks_effort` is true, set it yourself (the user has
  authorized you to choose effort; they can override). If it is false, recommend it and
  set it only after the user agrees.
- **Mixed project.** Give each Knowledge chat one company where possible. Use "more than
  one" only when the work can't be split.
- **Brief.** Write a self-contained brief: the goal, the confirmed facts, what to ask the
  user, the rules, and what "done" means. A sub-chat knows only what you give it.
- **Rules.** Paste the "Rules every brief must include" (`brief-rules.md`) into every
  brief, with the sub-chat's company, the project's knowledge base output and the
  `.open-questions` session ID filled in. Knowledge chat briefs keep rule 7 (steps,
  screenshots, known gaps) and tell the chat to follow `article-guidelines.md` where the
  base's own guide is silent. Give its full path (`${CLAUDE_SKILL_DIR}/references/
  article-guidelines.md`, filled in), since a sub-chat doesn't load this skill; Build chat briefs may leave it out. Sub-chats never get their own standing chats
  (see `standing-chats.md`).
- **Shared files.** Sub-chats never edit the shared files. They list registrations and
  change-log details in their final report instead. One exception: a sub-chat that
  creates a new folder or section may write that folder's own index, so the user can
  test its drafts before they're combined.
- Record it. After you start or rename a sub-chat, update "Coordinator state" and
  commit it locally (see `handovers.md`).
- Starting chats is assumed; never ask. If you actually can't (no start tool, or the app
  refuses, such as over Remote Control; see `setup.md`), write the brief for the user to
  paste into a new chat.

## Archive finished chats after 10 days
Once a day, on your first reply of the day, check your own DONE sub-chats. Keep the date
of the last check in "Coordinator state" so it runs once a day.

- **Qualifies:** the title starts with `DONE` and the completion date in the title is 10
  or more days ago.
- **Never archive:** standing chats; other coordinator chats; a chat whose branch isn't
  combined into the main copy; a DONE chat the user has since sent a new message to; a
  chat you didn't start.
- **Do it yourself, without asking,** with the app's archive tool. Archiving can be
  undone; never delete. Then add one note line to your reply, for example: "Archived 3
  finished chats (DONE 10+ days): #site-search, #roles, #broadly. Unarchive any of them
  from the sidebar." If nothing qualifies, say nothing.
- **Record it:** mark each archived chat "archived <date>" in the project's sub-chat
  registry, keeping its session ID. Commit locally. Write one changelog line per batch,
  for example `YYYY-MM-DD #<area> Archived 3 finished chats (DONE 10+ days): #a, #b, #c`,
  and send it to `.changelog`.
- If the app refuses an archive or the tool isn't available, skip silently and try again
  the next day.
