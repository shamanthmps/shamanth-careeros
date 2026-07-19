# API Design

## Executive Summary
API design defines how systems interact, evolve, and scale across teams. In interviews, API decisions reveal your thinking about usability, compatibility, reliability, and governance.

For TPM roles, API quality is a program-level concern because it shapes integration cost, release coordination, and incident blast radius.

## Why This Matters
- TPM relevance: API contracts are cross-team agreements.
- Architecture relevance: Good APIs enforce clear service boundaries.
- System design relevance: Most designs expose internal services through APIs.
- Common questions: REST vs gRPC, versioning strategy, idempotency, pagination.

## Core Concepts
### Definitions
- Contract-first API: Define schema and behavior before implementation.
- Idempotency: Repeated request has same effect.
- Backward compatibility: Existing clients keep working after changes.
- Pagination: Controlled retrieval of large datasets.

### Internal Working
API design checklist:
1. Define resources and verbs.
2. Define request/response schemas.
3. Set error model and status semantics.
4. Add auth, rate limits, idempotency.
5. Plan versioning and deprecation.

### ASCII Pattern
Client -> API Gateway -> Service -> Data
         |
         +-> Auth, Rate Limit, Validation

### Trade-offs
- REST simplicity vs gRPC efficiency
- Strict schema governance vs rapid iteration

## Real-world Example
Payments API for checkout:
- Added idempotency-key header to prevent duplicate charges.
- Standardized error codes for retryable vs non-retryable failures.
- Introduced versioned endpoint for new fields without breaking existing clients.

## TPM Perspective
Questions to ask:
- Which clients consume this API and on what release cadence?
- What compatibility guarantees are required?
- How will rate limits be tiered by tenant?
- What is the deprecation timeline?

Risks:
- Breaking change with no migration plan
- Ambiguous error semantics causing retry storms

## Interview Perspective
Strong answer:
"I design APIs contract-first with explicit versioning, idempotency for mutating calls, standardized error models, and pagination for scale. I optimize for client stability and operational predictability."

Interviewers evaluate compatibility thinking, resilience patterns, and cross-team operability.

## Common Mistakes
- Designing endpoints around DB tables.
- No versioning strategy.
- Non-idempotent create/update semantics.
- Inconsistent error handling.
- Returning unbounded list responses.

## 5-Minute Revision
- Contract-first, not implementation-first.
- Idempotency for write APIs.
- Standard errors and retry guidance.
- Versioning + deprecation plan.

## Practice Interview Questions
1. How do you decide between REST and gRPC?
2. Why is idempotency critical in distributed systems?
3. How do you version APIs safely?
4. What fields belong in error responses?
5. How do you prevent API abuse at scale?

## Key Takeaways
- API design is architecture governance.
- Stability and compatibility are senior-level concerns.
- Idempotency and error semantics protect reliability.
- Good APIs reduce long-term integration cost.