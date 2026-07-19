# Microservices vs Monolith

## Executive Summary
Microservices vs monolith is a context decision, not a maturity badge. Interviewers expect you to explain organizational fit, complexity cost, and migration path rather than repeating generic pros and cons.

At TPM level, the correct choice depends on team topology, release cadence, domain boundaries, reliability needs, and platform maturity.

## Why This Matters
- TPM relevance: Architecture choice determines coordination overhead.
- Architecture relevance: Impacts deployment model, data ownership, and failure modes.
- System design relevance: Common prompt for scaling and org evolution.
- Common questions: "When should we split services?", "When is monolith better?"

## Core Concepts
### Definitions
- Monolith: Single deployable unit with shared code/runtime.
- Microservices: Independently deployable services with clear boundaries.
- Modular monolith: Monolith with strong internal domain separation.

### Internal Working
Decision heuristic:
- Early stage + small team + fast iteration: monolith or modular monolith.
- Large scale + independent domains + many teams: microservices can unlock velocity.

### ASCII Diagram
Monolith:
App -> Single Service -> Single DB (or few)

Microservices:
App -> API Gateway -> Service A / B / C -> Domain Datastores

### Trade-offs
- Monolith: simpler operations, tighter coupling risk.
- Microservices: team autonomy, higher distributed-system complexity.

## Real-world Example
A SaaS platform with 3 teams moved too early to 20 services.
- Result: release coordination and incident complexity increased.
- Correction: consolidated into modular core + selective service extraction.
- Outcome: faster releases and fewer integration defects.

## TPM Perspective
Questions to ask:
- Do teams truly need independent deployment?
- Are domain boundaries clear and stable?
- Is platform maturity ready (observability, CI/CD, SRE)?
- What is rollback strategy across dependencies?

Risks:
- Service sprawl without ownership
- Distributed transactions and data inconsistency

## Interview Perspective
Strong answer:
"I prefer modular monolith until domain and team boundaries justify microservices. I split services where independent scaling or release velocity is blocked, and I pair service decomposition with platform investments in observability, CI/CD, and reliability patterns."

Why strong: Pragmatic, staged, and execution-aware.

## Common Mistakes
- Treating microservices as default.
- Splitting by technical layer instead of domain.
- Shared database across all services.
- No platform readiness.
- Ignoring operational overhead.

## 5-Minute Revision
- Choose architecture by context and constraints.
- Modular monolith is often best starting point.
- Microservices need strong platform capabilities.
- Decompose by business domain, not tech stack.

## Practice Interview Questions
1. When should you stay monolithic?
2. What signals indicate service extraction is needed?
3. What are first platform prerequisites for microservices?
4. How do you avoid service sprawl?
5. How do you sequence monolith-to-microservices migration?

## Key Takeaways
- No universal winner between monolith and microservices.
- Team structure and domain boundaries should drive decision.
- Premature decomposition creates complexity debt.
- Senior answers include migration and operability strategy.