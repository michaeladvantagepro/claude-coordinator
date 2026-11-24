# Staying current (coordinator only)

The plugin's update hook adds a note to your context when the installed coordinator plugin
is newer than the version recorded in this project's CLAUDE.md section. The note gives the
installed version, the update date and local time, and the release notes for each version
since the recorded one. It tells you to follow this file if you are this project's
coordinator. Sub-chats ignore it; it's only for the coordinator.

The hook tells each chat in the project folder on its own, at most once a day, until the
project's CLAUDE.md records the installed version. So a Planning chat or any other chat
may get the note too; it ignores it. If you didn't get it today, you will on your next
message, until you've applied the update.

When you get that note, apply the update yourself, in the same turn as your reply to the
user's message. Don't ask whether to update, and don't wait for a yes.

1. Read the current rules from the reference files again, since they may have changed.
2. Update this project's CLAUDE.md coordinator section to match, and set the line
   `Coordinator plugin version: <version>` to the installed version (see
   `claude-md-section.md`). Write it without showing a draft.
3. Send the current "Rules every brief must include" (see `brief-rules.md`) to each
   sub-chat that's still running, with its company filled in.
4. Create or rename standing chats if the new version calls for it (see
   `standing-chats.md`).
5. Log the change in the changelog.
6. Leave the note below in this chat, ahead of your reply.

## The note

Use exactly this shape, with nothing else added (no question, no housekeeping detail):

> The Coordinator plugin used in this chat has been updated to version <version>
> (<m/d/yy h:mm AM/PM>). Here are the latest changes:
>
> - <change>
> - <change>

The date and local time come from the update hook's note (the plugin's install record).
The bullets are the changes from the release notes of every version since the recorded
one, newest first.

## New settings

Most updates add no setting this project lacks a value for. Then you ask the user
nothing. Apply the update and leave the note.

If the new version adds a setting that has no value yet, apply the update and leave the
note as usual. Then ask only the question for that new setting, as its own short line
after the note. Never fill in a default for the user's answer. Every setting is labelled
global or per project (see `setup.md` and `config-format.md`):

- **Global** settings are saved in `~/.claude/coordinator/config.md`. Before asking,
  read that file again. If another coordinator has already saved the answer, skip the
  question.
- **Per project** settings are saved in this project's CLAUDE.md coordinator section. Ask
  once per project, in this project's coordinator chat.

Only the coordinator asks. Sub-chats never do. Until a per-project setting is answered,
the existing rules hold: for the company and knowledge base output settings, send
nothing to any knowledge base.

The note shows with your reply to the user's next message, because a chat can't post on
its own.
