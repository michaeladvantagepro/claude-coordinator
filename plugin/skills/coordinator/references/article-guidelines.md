# Article guidelines

How knowledge base articles are written. Knowledge chats follow this wherever the base's
own guide is silent. Readers are non-technical, so write plainly.

## 1. Precedence

- The base's own authoring guide wins where it is stricter.
- Where the base merely does it differently (title style, folder layout, section names),
  the base keeps its own convention.
- This guide fills the gaps.

## 2. Types

Four default types: `how-to` (do a task), `reference` (look up facts), `troubleshooting`
(fix a problem), `policy` (a rule people follow).

- If the base has a closed type list, use its values. Its guide maps each value to one of
  these four shapes. A base type with no matching shape follows only the base's rules.
- A base without a Troubleshooting type adds one to its own list, through its own
  coordinator, and relabels its existing fix-it articles. A Knowledge chat never changes
  the list itself.

## 3. Shape

Leave out empty optional sections. Add Known gaps only if there are any.

- **How-to:** Purpose, Who it's for, Before you start, Steps, If something goes wrong,
  Known gaps, Related.
- **Reference:** Purpose, then facts in tables or lists under group headings, Known gaps,
  Related.
- **Troubleshooting:** Purpose, then one `## <symptom in the reader's words>` block per
  problem, each with Cause, Fix and Escalate if. Then Known gaps, Related.
- **Policy:** Purpose, Applies to, numbered Rules, Exceptions, Owner and how to ask, Known
  gaps, Related.

## 4. Writing steps

- One action per step, written as a command.
- Screen labels in bold, spelled as on screen.
- **Steps say where.** On a dense or unclear page or place, each step names where the
  target is: "Click **Start**, on the green rail on the left side of the page." Not just
  "Click **Start**". If you can't tell where something is, ask the user directly. (Same
  rule as `brief-rules.md` rule 7.)
- After a step that changes the screen or takes time, add "You should see…".
- More than about 10 steps: split into named stages.
- Branches go one level deep.
- A **Warning:** goes before the step it applies to. Tips go in a **Note:**.

Example:

```markdown
## Steps

1. Open **Settings**, from the gear icon at the top right of the page.
2. Click **Reset password**, in the left menu under **Security**.
   You should see a box asking for the customer's email.
3. Type the email and click **Send link**.
   **Warning:** Never read the new link back over the phone.
```

## 5. Language, glossary, titles

- **Language.** Write for a new hire. Short sentences, "you", active voice. Spell out an
  acronym the first time. One name per thing, taken from the base's glossary. No
  reading-level scores.
- **Glossary.** A base keeps one glossary, as a reference article: official term, meaning,
  names not to use. Until it exists, the term check only lists inconsistencies.
- **Titles.** Default is sentence case. A how-to starts with a verb, a reference names the
  thing, a troubleshooting article gives the symptom, a policy is "<Topic> policy". No
  dates or versions. A base keeps its own title style.

## 6. Images

Use an image only where words fall short. Crop it to the part that matters.

- **Pairs.** On dense or unclear pages, keep two copies: an annotated one and a plain one
  as backup. If you can open the page in the built-in browser, take the screenshot
  yourself. Otherwise ask the user directly for a screenshot or photo, then annotate it.
- **Annotations** are red: arrows, boxes, and numbered pins that match the step numbers.
  Labels are 3 words or fewer.
- **Files** sit next to the article, or where the base's guide says:
  `<article-slug>-<step>-annotated.png` and `<article-slug>-<step>-plain.png`. Commit
  them with the article; don't git-ignore them. Show the annotated one as the image and
  link the plain one as a backup.
- **Alt text is required.** Say what the image shows and where the target is.
- **Strip metadata. Blur** names, emails, phone numbers, addresses, account or customer
  numbers and secrets, plus anything the base's own rules add.

## 7. Frontmatter

For a base that uses OKF. A base with another format follows its own. The user's or
base's own rules set the OKF version; this guide doesn't pin one.

- Required: `type`, `title`, `description` (one sentence), `tags`, `generated`, and
  `x-owner`.
- `x-owner` is a role or team, never a person's name. A base's existing Owner line in the
  body counts as the owner.
- No `last_verified`. Use OKF's `verified` list of `{ by, at }`, added only once someone
  has checked the article. `by` is a `human:<id>` actor for a person's check (the id can
  be a role).
- Optional `stale_after`, for anything tied to a rate, vendor or regulation.
- Timestamps are quoted date-times with an offset.
- `status: draft` only while the article is unfinished. Known gaps live in the body.

```yaml
---
type: how-to
title: Reset a customer's portal password
description: How support resets a locked customer portal password.
tags: [portal, support]
x-owner: Support team
verified:
  - { by: "human:support-lead", at: "2026-11-24T15:00:00Z" }
generated: { by: claude-sonnet-5-5, at: "2026-11-24T20:02:00Z" }
---
```

## 8. Accuracy and Known gaps

- Write only facts the user confirmed or you saw yourself. Ask the user directly about
  anything else.
- Questions still open when you finish become a short "Known gaps" section at the end,
  plus a one-line note at each affected step. They also stay in `.open-questions`.
- Sources go in the handoff and change log, not in the article.
- A base's stricter rule still applies.

## 9. Splitting and linking

- One task or topic per article.
- Split for two readers or goals, or a how-to past about 25 steps.
- A sub-procedure used by several articles gets its own how-to and is linked.
- Links are bundle-relative, with the target's title as the link text.
- List every article in its folder's `index.md`.

## 10. Combine checklist

The coordinator runs this when combining a Knowledge chat's work.

**Hard checks.** Fix before the combine; the work goes back to the sub-chat.

- Required frontmatter is present, including the owner.
- `type` is in the base's list.
- Links resolve.
- The article is listed in its folder's `index.md`.
- Every image has its pair, alt text, and passes the blur check.
- No unconfirmed fact sits outside Known gaps.
- The base's own content rules pass.

**Soft checks.** List them for the user next to "Combine it now?"; they don't block.

- Title pattern.
- Section shape.
- Step style.
- Glossary terms.
- Likely duplicates.

## For the coordinator of a knowledge base

- **Starting a base's guide.** If the project is itself a knowledge base with no authoring
  guide, offer in one line to start one from this file, and do it on a yes. Offer it at
  first-time setup, or when the user types `/coordinator` in an existing coordinator
  chat. Never offer it during an automatic plugin update.
- **Glossary.** Have a Knowledge chat draft a starter glossary from the existing
  articles. It lists terms used two ways for the user to decide. The user approves it.
- **Existing articles.** Update them to these rules in batches, with the base's own
  conventions kept where they merely differ. A leftover to-do marker becomes a Known gaps
  entry plus a note at the affected step.
