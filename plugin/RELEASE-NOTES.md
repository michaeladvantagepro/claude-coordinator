# Coordinator plugin release notes

One entry per version, newest first. Each entry is a heading line, `## <version> - <date>`,
followed by one or two sentences for a non-technical reader. The update hook reads this
file, so keep that heading format.

## 0.4.3 - 2026-11-24
Knowledge chats now say where things are on a page and attach annotated screenshots with a plain backup. Chats ask you questions directly, and .open-questions only holds the ones you defer, with a live count in its title.

## 0.4.2 - 2026-11-19
When a chat's context is almost full, coordinators and sub-chats now offer /squish first, so the same chat keeps going after a /compact. Starting a new chat is still there if squish isn't installed or you prefer it.

## 0.4.1 - 2026-11-19
Coordinators insist on a project name before setting anything up, and sub-chats now hand their work back to the coordinator automatically. Finished chats show their completion date and time in the title, and the update check stays silent on computers without Node.

## 0.4.0 - 2026-11-20
Coordinators ask for the project name first; standing chats are titled .changelog #<project> and .open-questions #<project> and explain themselves; coordinators now tell you when the plugin updates and offer to re-align.

## 0.2.0 - 2026-11-20
Coordinators create their changelog and open-questions chats automatically.

## 0.1.0 - 2026-11-20
First version: /coordinator sets up or re-aligns a coordinator chat, with your own settings file, sub-chat briefs, handovers and company knowledge-base routing.
