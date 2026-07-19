
## 1. Executive Summary
This lesson provides a decision framework to choose database architectures consistently across product domains. At Senior and Principal TPM levels, interviewers expect structure: not tool opinions, but a repeatable method to evaluate fit, risk, and execution cost.

Strong candidates show they can guide cross-functional decisions under uncertainty. The right framework balances correctness, latency, scale, cost, organizational capability, and migration path.

Database selection is rarely a one-time choice. It is an evolving architecture portfolio, and interviewers reward candidates who show phase-aware decision making.

## 2. Why This Matters
### TPM relevance
- Database choice affects roadmap velocity and long-term platform debt.
- Poor decisions create expensive migration programs later.
- TPMs are accountable for aligning product urgency with technical sustainability.

### Architecture relevance
- Selection determines consistency model, scaling path, and failure behavior.
- Impacts service boundaries, ownership, and operability.

### System Design relevance
- Most architecture interviews include technology selection trade-offs.
- A framework-based response signals seniority and leadership.

### Common interview questions
- How do you choose a database for a new system?
- Which factors matter most at early stage vs mature stage?
- How do you justify polyglot persistence?
- What is your migration strategy if initial choice fails?

## 3. Core Concepts
### Definitions
- Selection framework: Structured criteria and scoring process for architecture decisions.
- Workload profile: Read/write ratio, query shape, data growth, latency targets.
- Criticality tier: Business impact classification of data/workflow.
- Capability fit: Team operational readiness for chosen technology.
- Exit strategy: Migration path if assumptions break.

### Internal Working
Framework sequence:
1. Define domain and business criticality.
2. Capture workload and consistency requirements.
3. Evaluate candidate models against criteria.
4. Score risk, complexity, and migration cost.
5. Decide with explicit assumptions and review checkpoints.

Model:

Business Need
   |
   v
Technical Requirements
   |
   v
Option Evaluation Matrix
   |
   v
Decision + Guardrails + Exit Plan

### ASCII Diagrams
Decision funnel:

Use case
  |
  +--> Integrity critical? --> yes -> SQL/strong transactional core
  |
  +--> Schema highly dynamic? --> yes -> document candidate
  |
  +--> Relationship traversal core? --> yes -> graph candidate
  |
  +--> Key lookup ultra-low latency? --> yes -> key-value candidate
  |
  +--> Large analytics scans? --> yes -> columnar candidate

Portfolio architecture lens:

Core Transactions + Domain Stores + Analytics Layer + Cache + Search

### Examples
- Fintech app: relational core for ledger, KV for idempotency and session, columnar for reporting.
- Marketplace: relational orders/payments, document catalog, search index, analytics warehouse.
- Mobility platform: KV for active state, relational for billing, graph for fraud, warehouse for BI.
- SaaS enterprise: relational entitlement core, document configuration, columnar telemetry analytics.

### Comparisons
Selection matrix example:

| Criteria | Weight | SQL | Document | KV | Wide/Column | Graph |
|---|---:|---:|---:|---:|---:|---:|
| Integrity criticality | 25 | 5 | 3 | 2 | 2 | 3 |
| Query flexibility | 15 | 5 | 3 | 1 | 3 | 4 |
| Schema agility | 10 | 2 | 5 | 4 | 3 | 3 |
| Read latency fit | 10 | 3 | 4 | 5 | 4 | 3 |
| Write scalability fit | 10 | 3 | 4 | 5 | 5 | 3 |
| Team capability | 10 | 4 | 4 | 4 | 3 | 2 |
| Cost predictability | 10 | 4 | 3 | 3 | 3 | 2 |
| Migration risk | 10 | 3 | 3 | 3 | 2 | 2 |

Interpretation:
- Highest weighted criteria should drive decision, not aggregate score alone.

### Design Trade-offs
Pros of framework approach:
- Reduces bias and opinion-driven debates.
- Improves executive communication and decision traceability.
- Supports periodic reassessment as workload changes.

Cons:
- Adds upfront decision overhead.
- Can become bureaucratic if over-formalized.

When to use formal framework:
- Critical domains, multi-team dependencies, large expected scale.

When lightweight approach is enough:
- Low-risk internal tools with short lifecycle.

## 4. Real-world Example
Scenario: A global subscription business launches bundled offerings across media, commerce, and creator payouts.

Problem:
- Teams argued for one standard database to reduce complexity.
- Workloads varied dramatically: ledger integrity, catalog flexibility, recommendation graphing, BI analytics.

Architecture decision:
- Applied weighted selection framework by domain.
- Chose relational core for billing and settlement.
- Chose document model for catalog metadata.
- Chose graph for fraud/risk linkage.
- Chose columnar warehouse for executive reporting.
- Set review gates every two quarters for fit reassessment.

Outcome:
- Faster cross-functional alignment and reduced architecture churn.
- Better domain fit without uncontrolled technology sprawl.
- Clear migration and ownership plans for each chosen store.

## 5. TPM Perspective
Why a TPM should understand this:
- TPMs must turn technical debate into accountable decision process.
- Frameworks improve confidence and reduce hidden assumptions.

What questions should a TPM ask?
- Which criteria are highest risk for this domain?
- Are we optimizing for current or future workload shape?
- Do we have team capability to operate this stack?
- What is the rollback/migration plan if assumptions fail?
- How frequently will fit be re-evaluated?

What trade-offs should a TPM understand?
- Standardization simplicity vs domain-specific optimization.
- Time-to-launch vs long-term migration risk.
- Fewer technologies vs lower workload fit.

What risks should a TPM identify?
- Decision by vendor familiarity rather than requirements.
- Missing exit strategy.
- Underestimating operational burden of new datastore types.

## 6. Interview Perspective
Strong interview answer:

I use a workload-first database selection framework. I classify the domain by integrity criticality, access patterns, consistency needs, and growth profile, then evaluate candidate stores using weighted criteria including team capability and migration risk. I prefer portfolio architectures with clear ownership boundaries rather than forcing one database type across incompatible workloads.

Why this is a good answer:
- Shows structured decision leadership.
- Balances technical and organizational factors.
- Demonstrates long-term architecture ownership mindset.

What interviewers are evaluating:
- Decision quality under ambiguity.
- Ability to explain and defend trade-offs.
- Practical governance and migration foresight.

## 7. Common Mistakes
- Choosing based on trend or prior-company default.
- Ignoring team operational capability.
- Treating early-stage decision as irreversible.
- Missing weighted criteria and explicit assumptions.
- Over-standardizing one database across all domains.
- No migration or exit strategy.
- Underestimating compliance requirements in selection.
- Failing to include cost predictability in scoring.
- Not documenting decision rationale for future teams.
- No cadence for reassessment as workload evolves.

## 8. 5-Minute Revision
### Quick summary
- Use a repeatable framework, not preference-based selection.
- Prioritize integrity, access patterns, scale, and team capability.
- Decide per domain; manage as portfolio.

### Cheat sheet

| Step | Outcome |
|---|---|
| Define domain criticality | Consistency baseline |
| Capture workload profile | Performance/scaling fit |
| Evaluate options with weighted criteria | Transparent trade-offs |
| Document assumptions + exit path | Future-proof decision |
| Reassess periodically | Avoid architecture drift |

### Decision framework

Domain scope
  |
Requirements and constraints
  |
Weighted options matrix
  |
Decision + guardrails
  |
Review cadence + migration plan

### Comparison snapshot

| Candidate style | Interview quality |
|---|---|
| "Use X, it scales" | Weak |
| "Use weighted framework with domain fit and exit strategy" | Strong |

## 9. Practice Interview Questions
1. What criteria do you use to select a database for a new domain?
2. How would you weight selection criteria for a payments workflow?
3. When is polyglot persistence justified?
4. How do you prevent uncontrolled datastore sprawl?
5. How do team capability constraints affect selection?
6. What does a good database exit strategy include?
7. How do you explain selection rationale to executives?
8. How often should architecture fit be reassessed?
9. What signals indicate a wrong initial database choice?
10. How do you balance platform standardization with domain-specific fit?

## 10. Key Takeaways
- Database selection should follow a structured framework.
- Workload and criticality should outweigh technology trends.
- Domain-specific portfolio architecture is often optimal.
- Team capability and operations matter as much as technical fit.
- Every decision needs an exit and migration plan.
- Periodic reassessment prevents long-term mismatch.
- Interviewers value explicit, weighted trade-off reasoning.
- TPMs should institutionalize selection governance.
