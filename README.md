# Coordinator plugin for Claude Code

`/coordinator` sets up or re-aligns a **coordinator chat**. The coordinator plans the
work with you, splits it into Knowledge, Build and Planning sub-chats, then reviews,
combines and records what they produce. You talk to the coordinator; the sub-chats hand
their work back to it automatically.

It works best in the Claude desktop app's Code tab, where a coordinator can start and
message its own sub-chats.

## Install

In Claude Code, run:

```
/plugin marketplace add https://github.com/michaeladvantagepro/claude-coordinator.git
/plugin install coordinator@claude-coordinator
```

Or from a terminal:

```
claude plugin marketplace add https://github.com/michaeladvantagepro/claude-coordinator.git
claude plugin install coordinator@claude-coordinator --scope user
```

Then fully quit and reopen Claude so the plugin loads.

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
