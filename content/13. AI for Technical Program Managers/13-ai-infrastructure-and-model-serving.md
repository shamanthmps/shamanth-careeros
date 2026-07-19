# AI Infrastructure & Model Serving

## Executive Summary
Model serving is the runtime discipline of delivering AI predictions under latency, reliability, and cost constraints. TPM interviews expect practical understanding of deployment patterns, scaling, and SLA management.

Strong candidates connect infrastructure choices to product performance and unit economics.

## Why This Matters
- TPM relevance: Serving costs can dominate AI feature economics.
- Architecture relevance: Batching, caching, autoscaling, and hardware strategy drive throughput.
- Interview relevance: Common follow-up after AI design proposals.

## Core Concepts
### Definitions
- Online inference: Real-time prediction per request.
- Batch inference: Offline large-volume processing.
- Throughput: Requests or tokens processed per second.
- Tail latency: p95/p99 response performance.

### Internal Working
Request routing -> model endpoint -> post-processing -> response, with autoscaling and monitoring.

### ASCII Diagram
Client -> Inference Gateway -> Model Endpoint Pool -> Response
                       |
                       +-> Cache/Batch Queue

### Trade-offs
- GPU quality/throughput gains vs high fixed cost.
- Centralized serving simplicity vs regional latency.

## Real-world Example
Internal coding assistant:
- Peak-time latency spikes due to cold starts.
- Added warm pools and request batching.
- Improved p95 and reduced cost per request.

## TPM Perspective
Ask:
- What SLA (latency/availability) applies per feature?
- What is cost per 1k requests/tokens?
- How do we handle traffic spikes and model endpoint degradation?

## Interview Perspective
Strong answer:
"I design serving with SLA tiers, right-size hardware, and combine caching, batching, and autoscaling to control p95 latency and unit cost under peak traffic."

## Common Mistakes
- No tail-latency planning.
- Over-provisioning without utilization targets.
- Missing load-test validation.

## 5-Minute Revision
- Serving = latency + reliability + cost.
- Optimize for p95/p99, not average only.
- Add scaling and fallback controls before launch.

## Practice Interview Questions
1. How do you choose online vs batch inference?
2. What serving metrics matter most?
3. How do you reduce model serving cost?
4. How do you design for traffic spikes?
5. What is a robust fallback when endpoint fails?

## Key Takeaways
- Model serving is core production engineering.
- Tail latency and cost should be co-optimized.
- TPMs should enforce SLA-driven serving design.
