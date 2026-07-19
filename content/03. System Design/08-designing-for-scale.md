# Designing for Scale

## Executive Summary
Designing for scale means planning architecture evolution across growth stages, not overbuilding day one. Senior interview answers show a phased scaling strategy tied to measured bottlenecks.

Interviewers expect explicit decisions for read scaling, write scaling, and failure-domain reduction.

## Why This Matters
- TPM relevance: Scaling investments are multi-quarter and cross-team.
- Architecture relevance: Wrong sequencing increases complexity without value.
- System design relevance: Core senior interview competency.

## Core Concepts
### Scaling Dimensions
- Throughput scale
- Data volume scale
- Geographic scale
- Team/organizational scale

### Internal Working
Phased model:
1. Optimize query/path first.
2. Add caching and read replicas.
3. Isolate workloads.
4. Partition or shard when needed.

### ASCII Progression
Optimize -> Cache -> Replicate -> Partition -> Shard

### Trade-offs
- Early complexity vs future-proofing
- Strong consistency vs global low latency

## Real-world Example
Food delivery growth from 2 cities to 40 cities:
- Started with query/index tuning.
- Added regional read replicas and cache.
- Later sharded order events only.

Outcome: Controlled complexity and stable SLOs.

## TPM Perspective
Questions:
- What is current bottleneck?
- Which scaling lever gives best ROI now?
- What is rollback plan for each phase?
- How do costs scale with traffic?

## Interview Perspective
Strong answer:
"I scale in phases based on bottleneck evidence, minimizing complexity until required. I separate read and write scaling strategies and include reliability and cost guardrails in each phase."

## Common Mistakes
- Jumping directly to sharding.
- Scaling all layers simultaneously.
- No observability baseline.
- Ignoring cost impact.

## 5-Minute Revision
- Measure first, scale second.
- Read and write scale are different problems.
- Keep phased rollout and rollback gates.

## Practice Interview Questions
1. What should be scaled first in a growing system?
2. When is sharding justified?
3. How do you scale globally with consistency constraints?
4. What metrics trigger next scaling phase?
5. How do you prevent overengineering?

## Key Takeaways
- Scaling is staged bottleneck removal.
- Simpler fixes should come before structural complexity.
- Senior designs include cost and reliability controls.