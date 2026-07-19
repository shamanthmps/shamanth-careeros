# Reliability Patterns

## Executive Summary
Reliability patterns are reusable design mechanisms that help distributed systems handle partial failures. Interviewers expect senior candidates to apply patterns such as retries, timeouts, circuit breakers, bulkheads, and idempotency with nuance.

For TPMs, reliability patterns are operational risk controls that must be standardized across teams.

## Why This Matters
- TPM relevance: Improves incident resilience and reduces repeated failures.
- Architecture relevance: Protects system under dependency degradation.
- System design relevance: Reliability deep-dive is common in senior rounds.

## Core Concepts
### Key Patterns
- Timeouts: Bound waiting time.
- Retries with backoff: Recover transient failures safely.
- Circuit breaker: Stop cascading failures.
- Bulkhead: Isolate failure domains.
- Idempotency: Safe duplicate processing.
- Dead-letter queue: Capture failed async messages.

### Internal Working
Pattern layering:
Client timeout -> Retry policy -> Circuit breaker -> Fallback

### ASCII Flow
Request -> Dependency
   | success -> Response
   | fail -> Retry(backoff)
   | repeated fail -> Circuit Open -> Fallback

### Trade-offs
- More retries can improve success or worsen overload.
- Aggressive fallback improves uptime but may reduce fidelity.

## Real-world Example
Payment authorization dependency became unstable.
- Added strict timeouts and jittered retries.
- Circuit breaker prevented thread pool exhaustion.
- Fallback allowed order reservation pending auth retry.

Outcome: Reduced cascading outage impact.

## TPM Perspective
Questions:
- Which dependencies are critical and fragile?
- What retry budget is safe?
- What fallback behavior is acceptable to product/legal?
- How is idempotency enforced end-to-end?

## Interview Perspective
Strong answer:
"I apply reliability patterns by failure mode, not as defaults. I define timeout and retry budgets, protect services with circuit breakers and bulkheads, and add idempotency for safe recovery."

## Common Mistakes
- Unlimited retries.
- No timeout defaults.
- Circuit breaker without observability.
- Fallback logic causing data inconsistency.

## 5-Minute Revision
- Reliability patterns must be composed, not isolated.
- Retries need budget and jitter.
- Idempotency is essential for distributed writes.

## Practice Interview Questions
1. How do retries cause cascading failures?
2. When should circuit breakers open?
3. How do you choose timeout values?
4. What is a safe fallback strategy for payments?
5. How do you operationalize reliability patterns across teams?

## Key Takeaways
- Reliability is engineered behavior under failure.
- Patterns must match failure modes and business constraints.
- Senior answers include policy, observability, and governance.