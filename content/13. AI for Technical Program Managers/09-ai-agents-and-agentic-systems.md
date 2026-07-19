# AI Agents & Agentic Systems

## Executive Summary
Agentic systems combine LLM reasoning, tool use, memory/context, and multi-step planning to execute tasks autonomously or semi-autonomously. TPM interview expectations center on control, safety, and reliability boundaries.

Strong answers describe where agents add value and where deterministic workflows should remain dominant.

## Why This Matters
- TPM relevance: Agent projects can create high upside and high operational risk.
- Architecture relevance: Requires orchestration, tool permissions, state tracking, and guardrails.
- Interview relevance: Increasingly common in AI platform discussions.

## Core Concepts
### Definitions
- Agent loop: Observe -> plan -> act -> evaluate -> repeat.
- Tool calling: Controlled execution of external actions.
- Memory: Session or persistent context retained across steps.
- Human-in-the-loop: Human approval gate before risky actions.

### Internal Working
User goal -> planner -> tool execution -> result evaluation -> next step or finalize.

### ASCII Diagram
Goal -> Agent Planner -> Tools/APIs -> Feedback -> Final Output
                    |
                    +-> Policy + Approval Gates

### Trade-offs
- Higher autonomy: better productivity, higher risk.
- More constraints: safer behavior, lower flexibility.

## Real-world Example
Incident triage assistant:
- Agent gathers logs, correlates alerts, drafts root-cause summary.
- Human approval required before any remediation command.
- Improved triage speed with controlled blast radius.

## TPM Perspective
Ask:
- What actions are fully automated vs approval-gated?
- What tool permissions are least-privilege?
- How are agent steps logged for audit?

## Interview Perspective
Strong answer:
"I deploy agents where multi-step tool orchestration creates clear value, but I enforce policy boundaries, least-privilege tool access, and human approval for high-impact actions."

## Common Mistakes
- Over-automating high-risk actions.
- No action audit trail.
- Unlimited tool permissions.

## 5-Minute Revision
- Agents are orchestration systems, not just prompts.
- Bound autonomy with policy and approval controls.
- Start narrow, then expand capability.

## Practice Interview Questions
1. What use cases are best for agentic systems?
2. How do you control agent blast radius?
3. What should always require human approval?
4. How do you evaluate agent reliability?
5. How do you debug multi-step agent failures?

## Key Takeaways
- Agent value comes from orchestrated action, not chat quality alone.
- Governance is mandatory for production autonomy.
- TPMs should define control boundaries early.
