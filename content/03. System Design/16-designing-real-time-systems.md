# Designing Real-time Systems

## Executive Summary
Real-time systems deliver bounded-latency updates for user or machine workflows. In interviews, senior candidates are expected to define what real-time means for the product, because strict real-time and near-real-time architectures are very different in cost and complexity.

TPMs should align freshness targets with business value and reliability constraints before committing to architecture.

## Why This Matters
- TPM relevance: Real-time requirements often inflate scope and cost.
- Architecture relevance: Event streams, state management, and backpressure handling are critical.
- System design relevance: Common in trading, monitoring, collaboration, and logistics domains.

## Core Concepts
### Definitions
- Hard real-time: Missing deadline is unacceptable.
- Soft/near real-time: Small delay tolerated.
- Event-time vs processing-time semantics.
- Backpressure: System behavior under producer-consumer mismatch.

### Internal Working
Core pipeline:
Producer -> Stream Broker -> Stateful Processing -> Serving Layer -> Client

### ASCII Flow
Events -> Queue/Stream -> Processor -> Materialized View -> WebSocket/API

### Trade-offs
- Lower latency vs higher cost/complexity
- Exactness vs timeliness in stream processing

## Real-world Example
Ride dispatch ETA updates:
- Needed sub-second updates in active trip state.
- Built stream processing for active trips only.
- Archived historical analytics asynchronously.

Outcome: Real-time where needed, lower cost elsewhere.

## TPM Perspective
Questions:
- Which user action requires strict freshness?
- What latency budget is acceptable per workflow?
- How is out-of-order data handled?
- What degradation behavior exists under overload?

## Interview Perspective
Strong answer:
"I define latency SLO per user workflow, design an event-driven pipeline with backpressure controls, and limit strict real-time processing to critical paths while offloading non-critical analytics asynchronously."

## Common Mistakes
- Calling everything real-time.
- No backpressure strategy.
- Ignoring ordering and duplicate events.
- No fallback behavior for degraded streams.

## 5-Minute Revision
- Define real-time requirement precisely.
- Design event pipeline with durability and ordering semantics.
- Apply strict freshness only where business-critical.

## Practice Interview Questions
1. How do you define near-real-time for a product?
2. How do you handle event ordering issues?
3. What backpressure controls would you use?
4. How do you design graceful degradation for stream outages?
5. How do you measure real-time system health?

## Key Takeaways
- Real-time design starts with explicit latency targets.
- Event architecture must handle disorder and overload.
- Not all workflows need strict real-time guarantees.