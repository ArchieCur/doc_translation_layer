---
layout: role
title: "Claude for Auditors"
role_id: auditor
tagline: "Your control framework. Your evidence standards. Your language."
role_short: "Auditor"
accent_color: "#2B4590"
order: 1

sections:
  - id: control-enforcement
    title: "Control & Enforcement"
  - id: evidence-audit-trail
    title: "Evidence & Audit Trail"
  - id: human-oversight
    title: "Human Oversight & Accountability"
  - id: change-management
    title: "Change Management"

capabilities:
  - id: hooks
    section: control-enforcement
    title: "Programmatic Control Points That Cannot Be Bypassed"
    intro: >
      Every tool action is intercepted before execution — an architectural
      emergency brake that stops any operation outside your approved workflow,
      even if the AI was explicitly instructed to proceed.
    role_description: >
      This is the enforceable control point that separates a policy statement
      from a verified control. The gate exists in code, not in instructions.
    developer_links:
      - label: "Hooks reference (PreToolUse / PostToolUse)"
        url: "https://code.claude.com/docs/en/hooks"
      - label: "Control execution with hooks (Agent SDK)"
        url: "https://platform.claude.com/docs/en/agent-sdk/hooks"
    developer_notes: ""

  - id: auditor-separation-of-duties
    section: control-enforcement
    title: "Separation of Duties Enforced in Architecture, Not Policy"
    intro: >
      Role-based tool access structurally prevents the same identity from both
      initiating and approving a consequential action — not a guideline that
      depends on user behavior, but a control that holds under audit sampling.
    role_description: >
      The allowedTools parameter defines exactly which actions each agent or
      role can take. The system cannot be talked into exceeding those boundaries.
    developer_links:
      - label: "Define tools and tool access controls"
        url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools"
      - label: "Handle tool calls and enforce boundaries"
        url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls"
    developer_notes: ""

  - id: tool-allowlists
    section: control-enforcement
    title: "Scope Containment — The System Does Only What Was Approved"
    intro: >
      Tool allowlists define precisely where the AI lives and works — what
      databases it can touch, what systems it can reach, what it cannot access
      under any circumstance — making unauthorized data access architecturally
      impossible, not merely prohibited.
    role_description: >
      This is your documented boundary. What is not in the allowlist cannot be
      executed. The AI cannot wander outside its defined environment regardless
      of what it is asked to do.
    developer_links:
      - label: "Tool use overview and allowlist architecture"
        url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview"
      - label: "Strict tool use (schema enforcement)"
        url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/strict-tool-use"
    developer_notes: ""

  - id: auditor-activity-logging
    section: evidence-audit-trail
    title: "A Complete, Tamper-Evident Activity Record"
    intro: >
      Every input, tool call, output, and human review action is logged
      end-to-end with timestamps and session IDs — an unbroken chain of evidence
      that tells the complete story without requiring the developer to explain it.
    role_description: >
      Session IDs tie every action back to a single originating request. The log
      is the evidence. It does not need to be reconstructed after the fact.
    developer_links:
      - label: "Monitoring and OpenTelemetry logging"
        url: "https://code.claude.com/docs/en/monitoring-usage"
      - label: "API and data retention policies"
        url: "https://platform.claude.com/docs/en/build-with-claude/api-and-data-retention"
      - label: "Usage and Cost API"
        url: "https://platform.claude.com/docs/en/build-with-claude/usage-cost-api"
    developer_notes: ""

  - id: structured-outputs
    section: evidence-audit-trail
    title: "Consistent, Reproducible Outputs Under Identical Conditions"
    intro: >
      Structured output controls ensure the system produces the same result
      under the same conditions — making outputs independently verifiable by
      an auditor who was not present when they were generated.
    role_description: >
      If you cannot reproduce an output, you cannot verify it. Structured
      outputs enforce a fixed schema so that results are predictable,
      comparable, and defensible under scrutiny.
    developer_links:
      - label: "Structured outputs documentation"
        url: "https://platform.claude.com/docs/en/build-with-claude/structured-outputs"
      - label: "Increase output consistency"
        url: "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/increase-consistency"
    developer_notes: ""

  - id: data-retention
    section: evidence-audit-trail
    title: "Evidence Integrity — The System Cannot Audit Itself"
    intro: >
      Logging architecture separates what the AI produced from the evidence
      used to evaluate it — AI-generated outputs cannot be used as evidence
      of the AI's own compliance, eliminating the circular logic that would
      compromise any finding.
    role_description: >
      Your evidence sources and your AI system are architecturally separate.
      The system being evaluated does not control the record of its own behavior.
    developer_links:
      - label: "API and data retention (separation of logs from outputs)"
        url: "https://platform.claude.com/docs/en/build-with-claude/api-and-data-retention"
      - label: "Zero Data Retention options"
        url: "https://platform.claude.com/docs/en/build-with-claude/api-and-data-retention"
    developer_notes: ""

  - id: auditor-human-review-gates
    section: human-oversight
    title: "Human Review Gates That Are Visible When Skipped"
    intro: >
      Human approval workflows create an accountable record of every review —
      and every instance where review did not occur — so the gap between
      documented policy and actual practice is measurable, not invisible.
    role_description: >
      A control that was skipped sixty percent of the time is a finding. This
      architecture makes skipped reviews visible in the log — they cannot be
      hidden by the system or by user behavior.
    developer_links:
      - label: "Handling permissions and user approvals (Agent SDK)"
        url: "https://platform.claude.com/docs/en/agent-sdk/permissions"
      - label: "Control execution with hooks"
        url: "https://platform.claude.com/docs/en/agent-sdk/hooks"
    developer_notes: ""

  - id: ai-disclosure
    section: human-oversight
    title: "AI Assistance Disclosure Built Into the Methodology"
    intro: >
      Every AI-assisted analysis is identifiable in the output record —
      providing the full transparency needed when findings are challenged, and
      the documented methodology defense an auditor needs when legal
      admissibility is questioned.
    role_description: >
      Emerging audit standards require disclosure of AI involvement in findings
      and recommendations. This is not optional. The output record makes that
      disclosure automatic and consistent rather than dependent on human memory.
    developer_links:
      - label: "Monitoring usage and output attribution"
        url: "https://code.claude.com/docs/en/monitoring-usage"
      - label: "Session management and traceability"
        url: "https://platform.claude.com/docs/en/agent-sdk/sessions"
    developer_notes: ""

  - id: model-version-control
    section: change-management
    title: "Model Version Control as a Change Event"
    intro: >
      Every model update, prompt change, and configuration modification is a
      documented change event with before and after states — unlike spreadsheets
      or standard software that overwrite without record, giving auditors a
      versioned history of exactly what the system was doing and when.
    role_description: >
      A model update that changes system behavior is a change event under any IT
      governance framework. It must be documented, tested, approved, and logged
      — and this architecture supports exactly that requirement.
    developer_links:
      - label: "Model overview and version documentation"
        url: "https://platform.claude.com/docs/en/about-claude/models/overview"
      - label: "Model deprecations and migration guidance"
        url: "https://platform.claude.com/docs/en/about-claude/model-deprecations"
      - label: "Admin API for organizational change tracking"
        url: "https://platform.claude.com/docs/en/build-with-claude/administration-api"
    developer_notes: ""
---
