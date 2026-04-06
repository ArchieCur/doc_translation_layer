# Contributing — Claude for Non-Developers

This site is a collection of role-indexed translation layers for Claude's
capabilities. Each role lives in a single markdown file. Adding a new role
requires creating one file and does not require touching any layout, template,
or JavaScript.

---

## How to Add a New Role

### Step 1 — Create the role file

Add a new file to `_roles/` named after the role (lowercase, hyphenated):

```
_roles/your-role.md
```

### Step 2 — Write the front matter

The file must contain YAML front matter with the following structure.
The body of the file is unused by the layout — all content goes in front matter.

```yaml
---
layout: role
title: "Claude for [Role Name]"
role_id: your-role
tagline: "One sentence in the role's professional vocabulary."
role_short: "Role Name"
accent_color: "#HEX"       # Role-specific color used in card and page header
order: 3                    # Controls landing page card order (1 = first)

sections:
  - id: section-slug
    title: "Section Title"

capabilities:
  - id: capability-id       # See ID convention below
    section: section-slug   # Must match a section id above
    title: "Capability Title in Role Language"
    intro: >
      One or two sentences visible to both audiences — the hook that
      explains what this capability does before the role/developer split.
    role_description: >
      The role-language description. Written for the professional, not
      the engineer. Uses the role's vocabulary, fears, and standards.
      No technical jargon.
    developer_links:
      - label: "Link label"
        url: "https://..."
      - label: "Second link label"
        url: "https://..."
    developer_notes: ""     # Optional. Leave as "" if not needed.
                            # When present, appears as a collapsed
                            # "Developer notes" block in the Developer tab.
---
```

### Step 3 — Done

The landing page card, role page, and comparison view will pick up the new
role automatically on the next build. No layout files need to be edited.

---

## Capability ID Convention

Capability IDs are stable identifiers used to match capabilities across roles
in the comparison view. Use them consistently.

### Shared IDs — same underlying Claude feature across multiple roles

When a capability maps to the same underlying Claude feature in two or more
roles, use the same `id` in all role files. Examples:

| Capability ID | Underlying Feature |
|---|---|
| `hooks` | PreToolUse / PostToolUse hooks |
| `tool-allowlists` | Tool allowlist architecture |
| `structured-outputs` | Structured output schema enforcement |
| `ai-disclosure` | Session logging and output attribution |
| `data-retention` | API data retention and Zero Data Retention (ZDR) |
| `model-version-control` | Model versioning and change documentation |

Using the same ID in two role files causes that capability to appear in the
comparison view side by side automatically.

### Role-prefixed IDs — capabilities with no cross-role equivalent

When a capability is unique to a role with no equivalent elsewhere, prefix
the ID with the role name:

```
auditor-separation-of-duties
auditor-activity-logging
auditor-human-review-gates
marketer-brand-voice-examples
marketer-privacy-data-controls
marketer-cost-visibility
your-role-unique-capability
```

Role-prefixed capabilities appear in the comparison view with "Not yet
documented for this role" in the other role's panel.

---

## Field Reference

| Field | Required | Notes |
|---|---|---|
| `layout` | Yes | Always `role` |
| `title` | Yes | Displayed as page `<h1>` and browser tab title |
| `role_id` | Yes | Lowercase, hyphenated. Must match the filename. |
| `tagline` | Yes | Displayed below the title in the role page header |
| `role_short` | Yes | Used in tab labels: "For the [Auditor]" |
| `accent_color` | Yes | Hex color. Applied to card border, page header, tab active state |
| `order` | Yes | Integer. Controls landing page card order |
| `sections` | Yes | Array of `{id, title}` objects |
| `capabilities` | Yes | Array of capability objects (see above) |
| `developer_notes` | No | Leave as `""` to omit the collapsed notes block |

---

## Voice Notes

- The `intro` field is audience-neutral — seen by both the professional and
  the developer before they choose a tab. Write it in plain language.
- The `role_description` field is for the professional audience only. Use
  the role's vocabulary. Do not explain how the technology works.
- The `developer_links` labels are the link text — keep them concise and
  descriptive. The developer audience reads these as navigation, not prose.
- `developer_notes` is for implementation context that belongs in the
  developer view but is too detailed for the link list. Use sparingly.

---

## Internal Vocabulary Note

"Deputy Code" is an internal project term — it does not appear on the site.
Use "Developer notes" as the label for implementation notes blocks on the site.

---

*ArchieCur + Claude | MIT License | 2026*
