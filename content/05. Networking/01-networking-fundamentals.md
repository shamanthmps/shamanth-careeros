# Networking Fundamentals

## Executive Summary
Networking fundamentals explain how systems communicate reliably across machines, regions, and providers. In TPM interviews, this topic tests whether you can reason about latency, throughput, failures, and protocol choices during architecture discussions.

Senior TPM answers should link network behavior to business impact, such as user experience, API reliability, and operational cost.

## Why This Matters
- TPM relevance: Many incidents are networking issues in disguise (timeouts, packet loss, DNS, misrouting).
- Architecture relevance: Service boundaries, retries, and resilience patterns depend on network assumptions.
- Interview relevance: Networking depth is expected in system design for Staff/Principal levels.

## Core Concepts
### Definitions
- Latency: Time for data to travel and return.
- Throughput: Amount of data transferred per unit time.
- Bandwidth: Maximum transfer capacity of a link.
- Packet loss: Data packets dropped in transit.
- Jitter: Variability in latency over time.

### Internal Working
Application data is split into packets, routed through multiple network hops, then reassembled at destination. Reliability and ordering depend on transport protocol and network conditions.

### ASCII Diagram
Client -> Router -> ISP -> Edge -> Service -> Database

### Trade-offs
- Low latency optimization vs higher infrastructure cost.
- Strong reliability controls vs higher protocol overhead.

## Real-world Example
Global checkout API:
- Users in APAC experienced high latency due to single-region backend.
- Added regional edge routing and optimized API payload size.
- Improved response times and conversion rates.

## TPM Perspective
Ask:
- What is expected p95 network latency by region?
- What retry strategy avoids overload?
- How do we detect packet loss and route instability?

## Interview Perspective
Strong answer:
"I treat networking as a first-class system dependency. I estimate latency budgets, choose protocol and timeout strategy accordingly, and design for regional variability and partial failures."

## Common Mistakes
- Ignoring network latency in architecture diagrams.
- Assuming stable links under peak load.
- No timeout/retry budget design.

## 5-Minute Revision
- Networking affects every service call.
- Latency, throughput, and loss drive protocol choices.
- Design with timeouts, retries, and regional awareness.

## Practice Interview Questions
1. How does network latency impact user-facing APIs?
2. What is the difference between bandwidth and throughput?
3. How do you budget timeouts across microservices?
4. Why does packet loss matter in distributed systems?
5. How do you design for regional network variability?

## Key Takeaways
- Networking fundamentals are core to system reliability.
- Latency and loss assumptions must be explicit.
- TPMs should connect network behavior to product outcomes.
