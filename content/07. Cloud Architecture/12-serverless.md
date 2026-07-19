# Serverless

## Executive Summary
Serverless architectures use managed execution where cloud providers handle infrastructure provisioning and scaling. Interviewers expect TPMs to discuss fit criteria, event design, and operational boundaries.

Strong answers include cold starts, observability, and cost-profile understanding.

## Why This Matters
- TPM relevance: Serverless can accelerate delivery and reduce ops burden.
- Architecture relevance: Event-driven patterns become central.
- Interview relevance: Common cloud modernization topic.

## Core Concepts
### Definitions
- Function-as-a-Service (FaaS): Event-triggered code execution.
- Event source: Trigger that invokes function.
- Cold start: Startup latency for inactive function.
- Stateless execution: No local persistent state between invocations.

### Internal Working
Event -> Function invocation -> Managed execution -> Response or downstream event.

### ASCII Diagram
Event/API -> Serverless Function -> Managed Services -> Output

### Trade-offs
- Faster delivery and elasticity vs runtime constraints and lock-in concerns.
- Pay-per-use cost efficiency vs unpredictable spikes at scale.

## Real-world Example
An image thumbnail pipeline moved to serverless triggers on object upload, reducing idle infrastructure cost and simplifying operations.

## TPM Perspective
Ask:
- Is workload event-driven and stateless enough?
- Are cold-start delays acceptable?
- What observability and debugging support is available?

## Interview Perspective
Strong answer:
"I use serverless for bursty, event-driven workloads where fast iteration and managed scaling matter, while avoiding it for long-running, latency-critical, or state-heavy paths unless mitigations exist."

## Common Mistakes
- Using serverless for unsuitable long-running tasks.
- Ignoring concurrency limits and cold starts.
- Weak tracing across chained functions.

## 5-Minute Revision
- Serverless excels for event-driven elastic workloads.
- Understand runtime limits and cold-start impact.
- Instrument observability across function flows.

## Practice Interview Questions
1. When is serverless the wrong choice?
2. How do you mitigate cold starts?
3. How do you design idempotent event handlers?
4. What costs are hidden in serverless systems?
5. How do you debug distributed serverless workflows?

## Key Takeaways
- Serverless is a strong accelerator for specific workload shapes.
- Operational visibility remains critical despite managed infrastructure.
- TPMs should enforce fit criteria before adoption.
