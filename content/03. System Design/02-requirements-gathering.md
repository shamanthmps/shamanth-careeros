# Requirements Gathering

## Executive Summary
Requirements gathering is the highest-leverage step in system design. Senior candidates distinguish themselves by asking precise questions that uncover hidden constraints, risks, and success criteria.

Interviewers use this stage to test product thinking, stakeholder alignment, and technical prioritization. If requirements are vague, architecture quality will be random.

## Why This Matters
- TPM relevance: Prevents misalignment and rework across teams.
- Architecture relevance: Defines boundaries, interfaces, and SLA expectations.
- System design relevance: Strong requirement questions signal leadership maturity.
- Common questions: "What would you ask first?", "How do you handle ambiguous asks?"

## Core Concepts
### Requirement Categories
- Functional: Features and behaviors.
- Scale: QPS, DAU/MAU, data growth, burst patterns.
- Reliability: Availability target, recovery objectives.
- Security/compliance: PII, audit, regional constraints.
- Business: Launch date, cost budget, org constraints.

### Internal Working
Requirement discovery sequence:
1. Clarify users and top journeys.
2. Define success metrics.
3. Capture non-functional targets.
4. Identify hard constraints.
5. Prioritize MVP vs phase 2.

### ASCII Checklist
Who -> What -> Scale -> Reliability -> Security -> Cost -> Timeline

### Trade-offs
- Broad requirement exploration vs interview time-boxing
- Feature completeness vs MVP focus

## Real-world Example
A SaaS admin console request says: "Need real-time usage dashboard."
- Clarified: 5s freshness acceptable, 99.9% availability, top 20 enterprise tenants critical.
- Decision impact: Chose near-real-time pipeline instead of expensive strict real-time architecture.

## TPM Perspective
Questions to ask:
- Who are primary and secondary users?
- What is business-critical on day 1?
- What failure is unacceptable?
- What data cannot leave region?
- What cost envelope exists?

Risks:
- Missing compliance requirement discovered late
- Scale assumptions far below reality

## Interview Perspective
Strong answer:
"I gather requirements in layers: user journeys, success metrics, non-functional targets, and constraints. Then I prioritize must-haves and explicitly document assumptions before proposing architecture."

Interviewers evaluate clarity, prioritization, and product-technical balance.

## Common Mistakes
- Asking only technical questions.
- Not quantifying scale.
- Ignoring compliance or privacy.
- No prioritization of requirements.
- Confusing preferences with constraints.

## 5-Minute Revision
- Start with users and business goals.
- Quantify traffic, latency, and availability.
- Identify non-negotiables early.
- Separate MVP from future scope.

## Practice Interview Questions
1. What are your first five requirement questions in system design?
2. How do you prioritize conflicting requirements?
3. How do you document assumptions in an interview?
4. When do you challenge product requirements?
5. How does requirement quality influence architecture quality?

## Key Takeaways
- Requirements drive design quality.
- Good questions are a seniority signal.
- Prioritization and assumptions are mandatory.
- Missing constraints cause most architecture rework.