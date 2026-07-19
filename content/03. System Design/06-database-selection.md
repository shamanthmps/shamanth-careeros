# Database Selection

## Executive Summary
Database selection in system design is a workload-fit decision. Senior interview answers map data consistency, query patterns, and scale profile to the right storage model instead of choosing by trend.

For TPMs, this is also an organizational decision: ownership, migration cost, and operational capability must be considered.

## Why This Matters
- TPM relevance: Wrong choice creates long-term delivery drag.
- Architecture relevance: Data model drives service boundaries and reliability behavior.
- System design relevance: Database choice appears in almost every architecture interview.

## Core Concepts
### Evaluation Dimensions
- Consistency requirements
- Access patterns
- Scale profile (read vs write heavy)
- Schema volatility
- Compliance and audit needs

### Internal Working
Domain-first selection:
1. Classify domain criticality.
2. Identify dominant query/write patterns.
3. Choose store type per domain.
4. Define migration and fallback strategy.

### ASCII Lens
Critical transactional domain -> Relational
Flexible metadata domain -> Document
Low-latency key access -> Key-value
Large analytics scans -> Columnar
Deep relationship traversal -> Graph

### Trade-offs
- Standardization simplicity vs domain optimization
- Speed to launch vs migration risk

## Real-world Example
Marketplace architecture:
- Orders/payments on relational core.
- Product catalog metadata on document store.
- Sessions and idempotency in key-value.

Outcome: Better fit per domain with clear ownership boundaries.

## TPM Perspective
Questions:
- Which workflows require strict correctness?
- What growth profile is expected in 12-24 months?
- Does team have operational expertise for this datastore?
- What is the exit strategy if assumptions break?

## Interview Perspective
Strong answer:
"I pick databases per domain workload and consistency needs, not as one global standard. I optimize critical paths for correctness, high-scale paths for performance, and include migration checkpoints."

## Common Mistakes
- One database for all workloads.
- Ignoring migration cost.
- Selecting by popularity.
- No ownership model.

## 5-Minute Revision
- Workload first, technology second.
- Domain-level selection beats platform dogma.
- Include migration and governance in decision.

## Practice Interview Questions
1. How do you choose database for a new domain?
2. When is polyglot persistence justified?
3. How do you prevent datastore sprawl?
4. What is your migration fallback strategy?
5. How do you explain DB choice to executives?

## Key Takeaways
- Database choice is architecture plus operations.
- Domain fit matters more than tool standardization.
- Senior answers include migration and governance.