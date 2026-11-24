# Coordinator plugin for Claude Code

`/coordinator` sets up or re-aligns a **coordinator chat**. The coordinator plans the
work with you, splits it into Knowledge, Build and Planning sub-chats, then reviews,
combines and records what they produce. You talk to the coordinator; the sub-chats hand
their work back to it automatically.

It works best in the Claude desktop app's Code tab, where a coordinator can start and
message its own sub-chats.

## Install

From a terminal (PowerShell, Terminal, or any shell where `claude` works), run:

```
claude plugin marketplace add https://github.com/michaeladvantagepro/claude-coordinator.git
claude plugin install coordinator@claude-coordinator --scope user
```

Then fully quit and reopen Claude so the plugin loads. This works for the Claude desktop
app too, since it reads the same settings.

In the desktop app, typing `/plugin` opens the plugins window instead of running the
commands above. You can add the marketplace there, or ask Claude in a chat: "Run
`claude plugin marketplace add https://github.com/michaeladvantagepro/claude-coordinator.git`
and `claude plugin install coordinator@claude-coordinator --scope user`."

In the Claude Code terminal app, `/plugin marketplace add <url>` and
`/plugin install coordinator@claude-coordinator` also work.

**Updates:** turn on auto-update for the `claude-coordinator` marketplace
(`/plugin` → Marketplaces), and new versions install the next time Claude starts.
Coordinators that are already running tell you when a newer version arrives and offer
to re-align.

## Use

Open a chat in your project's folder and run:

```
/coordinator my-project
```

(If the short name doesn't show up, use `/coordinator:coordinator`.)

On first run it asks a few questions and saves your answers to
`~/.claude/coordinator/config.md`: which companies you work for, their knowledge bases
(if any), and a few standing choices. Nothing about your setup ships in the plugin.

The daily update check needs Node.js; without it, the check stays silent.

## What's new

See [`plugin/RELEASE-NOTES.md`](plugin/RELEASE-NOTES.md).

## License

MIT. See [`LICENSE`](LICENSE).
