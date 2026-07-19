# Multi-Region Architecture

## Executive Summary
Multi-region architecture distributes services across geographic regions to improve latency, resilience, and compliance posture. In interviews, TPMs should explain traffic routing, data consistency, and failure management trade-offs.

Strong answers distinguish regional expansion goals from true disaster resilience goals.

## Why This Matters
- TPM relevance: Multi-region programs are high-cost, high-risk strategic initiatives.
- Architecture relevance: Data replication and routing policies are central decisions.
- Interview relevance: Frequent Staff/Principal cloud design topic.

## Core Concepts
### Definitions
- Region: Physically separated cloud geography.
- Geo-routing: Direct users to nearest or healthiest region.
- Active-active: Multiple regions serve traffic simultaneously.
- Active-passive: Primary region with standby failover region.

### Internal Working
Global traffic manager routes requests based on latency/health; data synchronized per consistency policy.

### ASCII Diagram
Users -> Global DNS/LB -> Region A / Region B -> Replicated Data

### Trade-offs
- Active-active improves resilience and latency but increases consistency complexity.
- Active-passive is simpler but slower regional failover.

## Real-world Example
A global commerce platform moved to active-active read architecture with active-passive writes, improving global read latency while limiting write conflict risk.

## TPM Perspective
Ask:
- Which workloads require multi-region by business need?
- What consistency model is acceptable per domain?
- How are failover and failback rehearsed?

## Interview Perspective
Strong answer:
"I adopt multi-region architecture where latency, resilience, or compliance requires it, and explicitly define traffic policy, data consistency posture, and failover operations by workload tier."

## Common Mistakes
- Multi-region without consistency strategy.
- No runbook for regional failover.
- Assuming multi-region automatically solves all outage scenarios.

## 5-Minute Revision
- Multi-region is a strategic trade-off, not default.
- Routing and data policy are core decisions.
- Operational drills are mandatory.

## Practice Interview Questions
1. Active-active vs active-passive: how do you choose?
2. How do you handle cross-region data consistency?
3. What workloads should remain single-region?
4. How do you test regional failover safely?
5. How do you justify multi-region cost to leadership?

## Key Takeaways
- Multi-region improves resilience and latency when justified.
- Consistency and operations complexity must be managed explicitly.
- TPMs should lead risk-based adoption strategy.
