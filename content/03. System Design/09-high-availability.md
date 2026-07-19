# High Availability

## Executive Summary
High availability (HA) is about keeping critical user journeys operational during failures. In interviews, HA questions evaluate your ability to design for fault isolation, failover, and graceful degradation.

Senior TPM-level answers connect uptime targets to architecture patterns and business impact.

## Why This Matters
- TPM relevance: Availability drives customer trust and revenue continuity.
- Architecture relevance: Requires redundancy, health checks, and failover design.
- System design relevance: Common in global service design interviews.

## Core Concepts
### Definitions
- Availability: Percentage of time system is operational.
- Redundancy: Duplicate components to avoid single points of failure.
- Failover: Switching traffic to healthy components.
- Graceful degradation: Reduced functionality instead of total outage.

### Internal Working
HA baseline:
1. Remove SPOFs.
2. Add active-passive or active-active redundancy.
3. Use health checks and automatic failover.
4. Test recovery regularly.

### ASCII Topology
Client -> LB -> Service A / Service B
              \-> DB primary + replicas

### Trade-offs
- Higher availability vs higher cost
- Strong consistency vs failover speed

## Real-world Example
Global checkout service:
- Added multi-AZ service redundancy.
- Built read-only fallback for account pages during partial outage.
- Reduced complete outage impact during infra failures.

## TPM Perspective
Questions:
- What user paths must remain available during incidents?
- What are target SLO/SLA values?
- What are RTO/RPO commitments?
- How often are failover drills executed?

## Interview Perspective
Strong answer:
"I design HA by identifying critical paths, eliminating single points of failure, defining failover behavior, and validating with regular game-day drills."

## Common Mistakes
- Confusing HA with backup.
- No failover testing.
- Assuming redundancy automatically works.
- Ignoring partial-failure user experience.

## 5-Minute Revision
- HA requires redundancy + failover + testing.
- Define critical journey availability separately.
- Design graceful degradation.

## Practice Interview Questions
1. How do you remove single points of failure?
2. What is active-active vs active-passive trade-off?
3. How do you test HA design?
4. How do you handle regional failure?
5. What user experience should degrade first?

## Key Takeaways
- HA is business continuity architecture.
- Redundancy without drills is incomplete.
- Graceful degradation reduces blast radius.