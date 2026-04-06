---
layout: role
title: "Claude for Marketers"
role_id: marketer
tagline: "Your brand. Your velocity. Your evidence of control."
role_short: "Marketer"
accent_color: "#B5451B"
order: 2

sections:
  - id: brand-integrity
    title: "Brand Integrity"
  - id: compliance-content-control
    title: "Compliance & Content Control"
  - id: brand-asset-protection
    title: "Brand Asset Protection"
  - id: model-governance
    title: "Model Governance & Change Management"

capabilities:
  - id: structured-outputs
    section: brand-integrity
    title: "Brand Voice That Holds at Volume"
    intro: >
      Structured output schemas enforce a fixed response format — including tone,
      vocabulary constraints, and output structure — so that the system produces
      on-brand content consistently whether it is generating ten pieces or ten
      thousand, without relying on the model's judgment about what "sounds like us."
    role_description: >
      This is the architectural answer to brand drift. The system does not decide
      what format to use — it follows a schema your team defined. What the schema
      does not permit, the system cannot produce.
    developer_links:
      - label: "Structured outputs (schema enforcement)"
        url: "https://platform.claude.com/docs/en/build-with-claude/structured-outputs"
      - label: "Increase output consistency"
        url: "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/increase-consistency"
    developer_notes: ""

  - id: marketer-brand-voice-examples
    section: brand-integrity
    title: "Examples That Teach Brand Voice, Not Just Describe It"
    intro: >
      Providing curated examples of on-brand and off-brand content inside the
      system configuration teaches the model what your brand actually sounds like
      — not just what your style guide says it should sound like — producing
      outputs that pass creative review rather than requiring it.
    role_description: >
      Abstract brand guidelines produce generic content. Concrete examples produce
      brand-consistent content. The more precise your examples, the less rewriting
      your team does.
    developer_links:
      - label: "Use examples effectively — Prompting best practices"
        url: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices"
    developer_notes: ""

  - id: marketer-skills
    section: brand-integrity
    title: "Brand Voice Packaged Once, Deployed Everywhere"
    intro: >
      Skills let you define a brand voice behavior — tone, vocabulary, output
      structure, examples — once, as a portable and reusable unit, so that the
      same behavior runs consistently across every campaign, workflow, and team
      without being rebuilt each time.
    role_description: >
      A brand voice that has to be re-described for every new campaign is a brand
      voice that will drift. A skill is the packaging that makes your brand voice
      a controlled asset rather than a set of instructions someone has to remember
      to include.
    developer_links:
      - label: "The Complete Guide to Building Skills for Claude (Anthropic)"
        url: "https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf"
      - label: "What are Skills — Agent Skills open standard"
        url: "https://agentskills.io/what-are-skills"
    developer_notes: ""

  - id: tool-allowlists
    section: brand-integrity
    title: "Approved Claims Only — No Freelancing"
    intro: >
      Tool allowlists restrict the system to defined data sources for factual
      product claims — so the model can only reference what your messaging
      framework says it can say, making unauthorized claims architecturally
      impossible rather than merely prohibited.
    role_description: >
      This is the control that keeps AI-generated content from inventing product
      capabilities, misrepresenting competitive positioning, or making claims Legal
      has not reviewed. The system cannot reach outside its approved sources
      regardless of what it is asked to produce.
    developer_links:
      - label: "Tool use overview and allowlist architecture"
        url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview"
      - label: "Strict tool use (schema enforcement)"
        url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/strict-tool-use"
    developer_notes: ""

  - id: hooks
    section: compliance-content-control
    title: "Pre-Publication Stops That Cannot Be Talked Around"
    intro: >
      Hooks intercept every content output before it can be passed downstream —
      creating a mandatory review gate for flagged content categories (regulatory
      claims, competitor mentions, audience data use) that executes in code, not
      in instructions that a user can override.
    role_description: >
      FTC disclosure requirements, industry advertising restrictions, and platform
      policy violations do not wait for someone to remember to check. This gate
      exists in the architecture. It fires before the content moves.
    developer_links:
      - label: "Hooks reference (PreToolUse / PostToolUse)"
        url: "https://code.claude.com/docs/en/hooks"
      - label: "Control execution with hooks (Agent SDK)"
        url: "https://platform.claude.com/docs/en/agent-sdk/hooks"
    developer_notes: ""

  - id: ai-disclosure
    section: compliance-content-control
    title: "AI Content Disclosure Built Into the Output Record"
    intro: >
      Every AI-assisted or AI-generated piece of content is identifiable in the
      session log — providing the provenance tracking that emerging FTC guidance
      and platform policies require, without depending on individual team members
      to remember to flag it.
    role_description: >
      Disclosure is becoming a legal requirement, not a best practice. The output
      record makes that disclosure automatic and auditable rather than dependent
      on human memory at campaign velocity.
    developer_links:
      - label: "Monitoring usage and output attribution"
        url: "https://code.claude.com/docs/en/monitoring-usage"
      - label: "Session management and traceability"
        url: "https://platform.claude.com/docs/en/agent-sdk/sessions"
    developer_notes: ""

  - id: marketer-privacy-data-controls
    section: compliance-content-control
    title: "Personalization That Knows Where the Privacy Line Is"
    intro: >
      Tool definitions and system configuration control exactly which audience
      data categories the system can access and use for personalization — so that
      behavioral signals, engagement history, and individual interaction data
      cannot be used without the consent framework your Legal team has approved.
    role_description: >
      GDPR, CCPA, and personalization at campaign scale are a collision waiting to
      happen without architectural controls. This is the control that keeps the
      personalization engine from reaching data it was not authorized to touch.
    developer_links:
      - label: "Define tools and tool access controls"
        url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools"
      - label: "Handle tool calls and enforce data boundaries"
        url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls"
    developer_notes: ""

  - id: data-retention
    section: brand-asset-protection
    title: "Your Brand Assets Stay Yours"
    intro: >
      Zero Data Retention agreements ensure that proprietary brand voice files,
      messaging frameworks, campaign assets, and tone guidelines fed into the
      system are not stored after the API response is returned — protecting
      intellectual property that Legal needs to review before it enters any
      external system.
    role_description: >
      Your brand voice is intellectual property. The question of whether it can
      be used to train a model that serves your competitors is a legal question,
      not a technical one. ZDR is the contractual and architectural answer that
      closes that exposure.
    developer_links:
      - label: "Zero Data Retention options"
        url: "https://platform.claude.com/docs/en/build-with-claude/api-and-data-retention"
      - label: "ZDR eligibility by feature"
        url: "https://platform.claude.com/docs/en/build-with-claude/api-and-data-retention"
    developer_notes: ""

  - id: model-version-control
    section: model-governance
    title: "A Content System That Knows When It Changed"
    intro: >
      Every model update, prompt revision, and configuration change is a
      documented event with before and after states — so when content quality
      shifts or brand voice drifts, the team can identify exactly what changed
      and when, rather than conducting a retrospective audit across thousands
      of outputs.
    role_description: >
      A model update that changes how your system writes campaign copy is a change
      event. It should be documented, tested against brand standards, and approved
      before it touches production output. This architecture supports that requirement.
    developer_links:
      - label: "Model overview and version documentation"
        url: "https://platform.claude.com/docs/en/about-claude/models/overview"
      - label: "Model deprecations and migration guidance"
        url: "https://platform.claude.com/docs/en/about-claude/model-deprecations"
      - label: "Admin API for organizational change tracking"
        url: "https://platform.claude.com/docs/en/build-with-claude/administration-api"
    developer_notes: ""

  - id: marketer-cost-visibility
    section: model-governance
    title: "Cost Visibility Before Campaign Scale Hits"
    intro: >
      The Usage and Cost API provides real-time token consumption and cost data by
      workspace, model, and API key — so that volume spikes from campaign launches
      are visible before they become budget surprises, and cost thresholds can be
      enforced programmatically rather than discovered after the fact.
    role_description: >
      A system that works beautifully in testing can become expensive in production
      when a global campaign runs through it at full volume. Cost visibility is a
      campaign planning requirement, not a developer concern.
    developer_links:
      - label: "Usage and Cost API"
        url: "https://platform.claude.com/docs/en/build-with-claude/usage-cost-api"
      - label: "Admin API overview"
        url: "https://platform.claude.com/docs/en/build-with-claude/administration-api"
    developer_notes: ""
---
