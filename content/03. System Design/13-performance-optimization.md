# Performance Optimization

## Executive Summary
Performance optimization is the systematic improvement of latency and throughput while preserving correctness. In interviews, senior candidates show a method: measure, diagnose, optimize, validate.

TPMs must prioritize optimizations by user impact and business value, not by engineering preference.

## Why This Matters
- TPM relevance: Performance affects conversion, retention, and support load.
- Architecture relevance: Bottlenecks can appear in API, DB, cache, network, and async paths.
- System design relevance: Performance deep dives are common in senior interviews.

## Core Concepts
### Optimization Layers
- Client and edge
- API/service logic
- Data access and caching
- Async processing and queues

### Internal Working
Optimization cycle:
1. Baseline metrics.
2. Identify top bottleneck.
3. Apply targeted fix.
4. Re-test under realistic load.

### ASCII Flow
Measure -> Profile -> Fix -> Load Test -> Guardrail

### Trade-offs
- Faster response vs higher infrastructure spend
- Aggressive caching vs data staleness

## Real-world Example
Search latency in marketplace:
- Added query-level caching and index tuning.
- Reduced p95 latency significantly.
- Added performance regression checks in CI.

## TPM Perspective
Questions:
- Which endpoint drives revenue-critical user journeys?
- What is p95 and p99 target?
- Is issue CPU, I/O, lock, or network bound?
- How do we prevent regression post-fix?

## Interview Perspective
Strong answer:
"I optimize by business-critical path, focus on tail latency, and validate improvements with production-like load. I combine code, data, and caching changes with guardrails to keep gains durable."

## Common Mistakes
- Optimizing without baseline.
- Focusing only on average latency.
- Over-caching mutable data.
- No post-release validation.
- Ignoring dependency latency.

## 5-Minute Revision
- Measure first.
- Target highest impact bottleneck.
- Optimize tail latency.
- Add regression guardrails.

## Practice Interview Questions
1. How do you prioritize performance work?
2. Why does p99 matter?
3. How do you choose caching TTL?
4. How do you validate optimization impact?
5. What anti-patterns cause performance regressions?

## Key Takeaways
- Performance optimization is iterative and evidence-based.
- Tail latency drives user experience.
- Durable improvements require measurement and governance.