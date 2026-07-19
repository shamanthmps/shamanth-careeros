# High Availability

## Executive Summary
High availability in cloud architecture ensures critical services remain operational despite component or zone failures. Interviewers expect TPMs to connect availability targets to concrete architecture and operational practices.

Strong answers include redundancy, health checks, failover automation, and testing.

## Why This Matters
- TPM relevance: Availability is a direct customer trust and revenue metric.
- Architecture relevance: HA requires multi-zone design and resilient dependencies.
- Interview relevance: Core cloud reliability topic.

## Core Concepts
### Definitions
- Availability target: Uptime objective (e.g., 99.9%, 99.99%).
- Fault domain: Boundary where failure can occur independently.
- Active-active: Multiple live serving instances.
- Active-passive: Standby instance activated on failure.

### Internal Working
Requests routed to healthy instances across fault domains with automatic replacement and failover.

### ASCII Diagram
Users -> Global LB -> Zone A / Zone B services -> Replicated data layer

### Trade-offs
- Higher HA tiers increase cost and complexity.
- Strong consistency may reduce failover flexibility.

## Real-world Example
A checkout service adopted multi-zone deployment with zone-aware load balancing and automated health-based failover, reducing outage duration.

## TPM Perspective
Ask:
- Which user journeys require highest availability?
- What are RTO and RPO targets?
- Are failover drills performed regularly?

## Interview Perspective
Strong answer:
"I map availability targets to architecture with redundant fault domains, automated health checks, and tested failover procedures, then validate through game days."

## Common Mistakes
- Redundancy without failover testing.
- Single dependency bottlenecks.
- No graceful degradation strategy.

## 5-Minute Revision
- HA is architecture plus operations.
- Multi-zone redundancy is baseline for critical workloads.
- Drills validate readiness.

## Practice Interview Questions
1. How do you design for 99.99% availability?
2. Active-active vs active-passive trade-offs?
3. How do you identify SPOFs in cloud systems?
4. What should failover drills test?
5. How do you communicate HA costs to leadership?

## Key Takeaways
- HA must be engineered and tested.
- Availability targets should drive architecture choices.
- TPMs should align reliability investments with business impact.
