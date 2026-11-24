# Staying current (coordinator only)

The plugin's update hook adds a note to your context when the installed coordinator plugin
is newer than the version recorded in this project's CLAUDE.md section. The note gives the
installed version, the update date and local time, and the release notes for each version
since the recorded one. It tells you to follow this file if you are this project's
coordinator. Sub-chats ignore it; it's only for the coordinator.

When you get that note:

1. Leave a notice line in this chat: "Coordinator plugin auto-updated to version
   <version> on <date> at <local time>." Follow it with the one- or two-sentence
   description of that version from the plugin's release notes. If several versions
   arrived at once, list each one.
2. Then ask the user in one line: "Re-align now?" On their yes, run alignment (see
   `alignment.md`), then update the recorded version (see `claude-md-section.md`). On a
   no, carry on, and don't ask again until a newer version appears.

The notice shows with your reply to the user's next message, because a chat can't post on
its own.
