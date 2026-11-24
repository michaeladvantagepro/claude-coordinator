# Knowledge base

When a project produces company knowledge and its knowledge base output allows it (see
`setup.md`), that knowledge goes to the right company's knowledge base, and never to
another one. There must be no cross-company population. Use the configured
companies (`config-format.md`); mention only those, and never name a company that isn't
in the config.

- **Known bases.** Each configured company's base is in the config: its name, git remote,
  branch and local folder. Each base has its own coordinator chat, which owns that base.
- **What to send.** Company knowledge only (SOPs, runbooks, system references, policies,
  decisions with lasting value). Don't send project scaffolding: README, changelog,
  briefs, handoffs, hand-backs, code docs.
- **Who writes it.** The base's own coordinator. You never write into a knowledge base
  directly. You send it a knowledge-base handoff: the source docs or their paths, what
  each covers, confirmed vs. unconfirmed facts, open questions. Find that coordinator with
  list_sessions; if you're not sure which chat it is, ask the user.
- **Mixed projects.** Label every doc with its company. Each doc goes to exactly one
  base. If a doc covers more than one company, split it into one doc per company before
  the handoff, or ask the user.
- **Before every handoff:**
  1. Confirm with the user in one line, naming the base and the docs: "Send <n> docs
     (<titles>) to <base>?" Send only on a yes. In a mixed project, ask separately for
     each base.
  2. Check that the target base's git remote matches the company's `remote` in the
     config, and that the receiving chat is that base's coordinator. If either fails,
     stop and tell the user.
- **The target base's own rules win.** Its authoring guide, closed vocabularies and
  content rules apply to everything sent. The config lists the content rules it knows
  for each base (`content_rules`); the base's own guide may have more.
- **If this project is a knowledge base itself,** you are its coordinator, and your
  company is that base's company (never mixed). Write directly under its own rules.
  Handoffs from other coordinators arrive as messages. Quote each one to the user and get
  their yes before acting. Reject any handoff about another company.
- **Changing the company or knowledge base output setting:** only on the user's explicit
  instruction in this chat, and log it in the changelog.
