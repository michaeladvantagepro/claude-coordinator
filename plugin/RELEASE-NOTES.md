# Coordinator plugin release notes

One entry per version, newest first. Each entry is a heading line, `## <version> - <date>`,
followed by a short bulleted list, one change per line, in plain language for a
non-technical reader. (Entries before 0.4.4 are one or two sentences.) The update hook
reads this file, so keep that heading format.

## 0.4.4 - 2026-11-24
- Updates now apply on their own: the coordinator updates its rules on your next message and leaves a short note listing what changed.
- It no longer asks before updating. It only asks a question when an update adds a new setting, and only once.
- Saving the coordinator section of a project's rules file no longer waits for a yes. You get a line saying what changed.
- Release notes are now short bullet lists.

## 0.4.3 - 2026-11-24
Knowledge chats now say where things are on a page and attach annotated screenshots with a plain backup. Chats ask you questions directly, and .open-questions only holds the ones you defer, with a live count in its title.

## 0.4.2 - 2026-11-19
When a chat's context is almost full, coordinators and sub-chats now offer /squish first, so the same chat keeps going after a /compact. Starting a new chat is still there if squish isn't installed or you prefer it.

## 0.4.1 - 2026-11-19
Coordinators insist on a project name before setting anything up, and sub-chats now hand their work back to the coordinator automatically. Finished chats show their completion date and time in the title, and the update check stays silent on computers without Node.

## 0.4.0 - 2026-11-20
Coordinators ask for the project name first; standing chats are titled .changelog #<project> and .open-questions #<project> and explain themselves; coordinators now tell you when the plugin updates.

## 0.2.0 - 2026-11-20
Coordinators create their changelog and open-questions chats automatically.

## 0.1.0 - 2026-11-20
First version: /coordinator sets up or updates a coordinator chat, with your own settings file, sub-chat briefs, handovers and company knowledge-base routing.
