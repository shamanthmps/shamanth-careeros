# Load Balancers

## Executive Summary
Load balancers distribute incoming traffic across service instances to improve availability, scalability, and performance. Interviewers expect TPMs to explain balancing strategies, health checks, and failure behavior.

Strong answers connect balancing choices to traffic patterns and user SLAs.

## Why This Matters
- TPM relevance: Load balancing directly impacts uptime and incident blast radius.
- Architecture relevance: Essential for horizontal scaling and resilience.
- Interview relevance: Core system design building block.

## Core Concepts
### Definitions
- Layer 4 LB: Transport-level balancing (IP/port).
- Layer 7 LB: Application-aware balancing (HTTP headers/routes).
- Health check: Probe to determine instance readiness.
- Sticky sessions: Routing same client to same backend.

### Internal Working
Request arrives -> LB selects healthy target by algorithm -> forwards request -> monitors response health.

### ASCII Diagram
Clients -> Load Balancer -> App1/App2/App3

### Trade-offs
- L4 simplicity and speed vs L7 routing intelligence.
- Sticky sessions convenience vs reduced distribution quality.

## Real-world Example
E-commerce flash sale:
- Uneven load caused instance overload.
- Tuned LB algorithm and health check thresholds.
- Stabilized p95 latency during peak.

## TPM Perspective
Ask:
- What balancing algorithm is used and why?
- How quickly are unhealthy nodes removed?
- What is failover behavior across zones/regions?

## Interview Perspective
Strong answer:
"I design load balancing with health-aware routing, zone redundancy, and algorithm choice based on workload profile, then validate behavior under burst and failure conditions."

## Common Mistakes
- Weak health checks causing slow failure detection.
- Single-zone LB design.
- Ignoring session affinity side effects.

## 5-Minute Revision
- LB is core scale and HA primitive.
- Health checks and routing policy are critical.
- Test LB behavior under failure and burst traffic.

## Practice Interview Questions
1. L4 vs L7: when to use each?
2. How do health checks affect reliability?
3. What is least-connections vs round-robin?
4. When is sticky session needed?
5. How do you design global load balancing?

## Key Takeaways
- Load balancing is both performance and reliability control.
- Algorithm and health check tuning matter at scale.
- TPMs should include LB behavior in readiness reviews.
