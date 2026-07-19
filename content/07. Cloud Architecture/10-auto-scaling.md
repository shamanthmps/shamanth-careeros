# Auto Scaling

## Executive Summary
Auto scaling adjusts resource capacity based on demand to maintain performance and control cost. In interviews, TPMs should explain scaling policies, safety boundaries, and operational risks.

Strong answers include both horizontal and vertical scaling strategy and guardrails.

## Why This Matters
- TPM relevance: Scaling failures can cause outages or runaway cost.
- Architecture relevance: Application design must support elastic behavior.
- Interview relevance: Common cloud design and reliability question.

## Core Concepts
### Definitions
- Horizontal scaling: Add/remove instances.
- Vertical scaling: Increase/decrease resource size per instance.
- Scaling policy: Rule or metric-driven scaling trigger.
- Cooldown period: Delay between scaling actions to avoid thrash.

### Internal Working
Metrics (CPU, latency, queue depth) trigger scale-out/scale-in actions within configured limits.

### ASCII Diagram
Traffic Spike -> Metrics Threshold -> Scale Out -> Stabilize

### Trade-offs
- Aggressive scaling protects performance but can increase cost.
- Conservative scaling saves cost but risks SLA breaches.

## Real-world Example
A ticketing platform used queue-depth-based autoscaling for background workers, improving peak event processing without constant overprovisioning.

## TPM Perspective
Ask:
- Which metric best reflects user impact?
- What are min/max scaling boundaries?
- How do we prevent scale oscillation?

## Interview Perspective
Strong answer:
"I design autoscaling around user-impact metrics, set safe scaling boundaries, and tune cooldown plus predictive capacity to balance SLA and cost objectives."

## Common Mistakes
- Scaling on noisy metrics only.
- No upper cost guardrails.
- Application state blocking horizontal scale.

## 5-Minute Revision
- Autoscaling is SLA and cost control.
- Choose meaningful triggers.
- Add boundaries and anti-thrashing controls.

## Practice Interview Questions
1. What metrics should drive autoscaling?
2. How do you avoid scaling oscillation?
3. When is vertical scaling preferable?
4. How do you cap scaling cost risk?
5. How do you test autoscaling behavior pre-launch?

## Key Takeaways
- Effective autoscaling requires application and policy design.
- Scaling triggers must align to user experience.
- TPMs should enforce both performance and cost guardrails.
