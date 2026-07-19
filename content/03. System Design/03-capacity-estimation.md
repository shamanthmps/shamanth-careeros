# Capacity Estimation

## Executive Summary
Capacity estimation converts system design from opinion to engineering. Senior TPM candidates are expected to create back-of-the-envelope estimates for traffic, storage, throughput, and growth.

Interviewers care less about exact numbers and more about your method. Clear assumptions, reasonable calculations, and decision impact matter most.

## Why This Matters
- TPM relevance: Prevents under-provisioning and over-spend.
- Architecture relevance: Guides database, cache, queue, and compute sizing.
- System design relevance: Needed for scaling strategy and cost planning.
- Common questions: "Estimate QPS", "How much storage in 2 years?"

## Core Concepts
### Estimation Inputs
- DAU/MAU
- Requests per user per day
- Peak-to-average ratio
- Payload size
- Retention period
- Growth rate

### Internal Working
Basic formulas:
- QPS = (daily requests) / 86,400
- Peak QPS = average QPS x peak factor
- Daily storage = events/day x bytes/event
- Total storage = daily storage x retention days

### ASCII Example
10M users x 20 req/day = 200M req/day
Average QPS ~ 2,315
Peak (x5) ~ 11,575 QPS

### Trade-offs
- Overestimate: safer reliability, higher cost
- Underestimate: lower initial cost, higher outage risk

## Real-world Example
A media app expected 3x growth in live-event traffic.
- Estimated peak QPS and write throughput by event type.
- Chose queue-based buffering plus autoscaling thresholds.
- Avoided launch-day saturation.

## TPM Perspective
Questions to ask:
- What is peak traffic shape?
- How much burst tolerance is needed?
- What data can be archived?
- What is yearly growth assumption?

Risks:
- Using average QPS for peak-critical systems
- Ignoring retry amplification during incidents

## Interview Perspective
Strong answer:
"I state assumptions, calculate average and peak load, estimate storage growth and read/write mix, then map these numbers to architecture choices and scaling triggers."

Why strong: Quantitative, decision-oriented, and realistic.

## Common Mistakes
- No assumptions stated.
- Confusing DAU with concurrent users.
- Ignoring peak factors.
- Not estimating write amplification.
- No growth horizon.

## 5-Minute Revision
- Always estimate average and peak.
- Include payload size and retention.
- Tie numbers to architecture decisions.
- Add safety buffer and growth plan.

## Practice Interview Questions
1. How do you estimate QPS quickly?
2. What assumptions matter most for storage sizing?
3. How do retries affect capacity planning?
4. How do you estimate network bandwidth?
5. What triggers should initiate scaling?

## Key Takeaways
- Estimation is mandatory for credible system design.
- Method matters more than precision.
- Peak traffic and growth assumptions drive architecture.
- Capacity planning is both technical and business planning.