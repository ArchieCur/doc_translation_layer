# Claude for Non-Developers

**Role-indexed translation layers for Claude's capabilities — written in your professional vocabulary.**

Live site: [archiecur.github.io/doc_translation_layer](https://archiecur.github.io/doc_translation_layer/)

---

## What This Is

The Claude documentation is written for developers. This site is written for everyone else.

Each page in this collection is a **translation layer** — a role-indexed guide that maps Claude's capabilities to the problems, fears, and professional standards of a specific role. Not a feature list. Not a tutorial. A door into Claude's capabilities, labeled in your vocabulary and described in terms of what it does for your work.

Current roles:
- **Auditor** — Control frameworks, evidence standards, audit trails
- **Marketer** — Brand integrity, compliance exposure, asset protection

Each capability entry has two views: one for the professional, one for the developer implementing it. Both are served by the same entry. Every claim links directly to Anthropic's documentation.

---

# Why It Exists

Three people are often in the same room when an organization decides whether
to deploy an AI system: the professional who owns the risk (an Auditor, a
Legal officer, a compliance lead), the developer who builds the controls,
and the business owner who needs it to work.

Right now, they are having three different conversations, in three different
vocabularies, with no common ground to stand on. The developer cannot explain
the controls in language the risk owner recognizes. The business owner cannot
demonstrate to Legal that the system is compliant.

This site gives all three of them the same verified reference. The claims are
grounded in Anthropic's documentation — followable by anyone in the room.
The Auditor can cite the entry. The developer can point to the implementation
reference. The CISO can follow the link and verify the control herself.

The **Compare view** makes the underlying structure visible: the same Claude
capability — hooks, structured outputs, tool allowlists — appears across
multiple roles because it solves a fundamentally different problem for each
of them. The Auditor needs structured outputs because she cannot verify what
she cannot reproduce. The Marketer needs structured outputs because brand
drift happens at volume. Same capability, different reason for walking through
the door.

This is a shared reference architecture for organizational AI adoption
conversations — not just helpful to individual roles, but to the governance
layer that has to sign off on deployment.

---

## Adding a Role

Each role lives in a single markdown file in `_roles/`. Adding Role 3 means creating one file. No layouts, templates, or JavaScript are touched.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full content operation, front matter schema, and capability ID convention.

---

## Running Locally

Requires Ruby and Bundler.

```
bundle install
bundle exec jekyll serve
```

Site runs at `http://127.0.0.1:4000/doc_translation_layer/`

---

## License

MIT License — see [LICENSE](LICENSE)

---

## Credits

ArchieCur &middot; Sonnet 4.6 (Anthropic) &middot; Claude Code &middot; 2026
