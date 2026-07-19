# Amazon SQS, SNS & EventBridge

## Executive Summary
SQS (Simple Queue Service), SNS (Simple Notification Service), and EventBridge are AWS's messaging and event-driven architecture primitives. For TPMs, these enable decoupling, asynchronous processing, and resilient multi-service systems.

## Why This Matters
- TPM relevance: Messaging patterns enable scaling and resilience impossible with synchronous coupling.
- Interview relevance: Event-driven and async architecture is a modern system design pattern.

## Core Concepts
### SQS (Queues)
- Pull model: Workers pull messages from queue.
- FIFO: Strict ordering or standard queues (best effort).
- Visibility timeout: Prevents multiple workers processing same message.
- Dead-letter queue: Captures failed messages.

### SNS (Publish-Subscribe)
- Push model: Messages pushed to subscribers.
- Multiple subscribers: Same message to multiple endpoints (email, HTTP, Lambda, SQS).
- Topics: Channels for publishers to send messages.

### EventBridge
- Event bus: Centralized event routing.
- Rules: Match event patterns and route to targets.
- Cross-account/cross-region: Native multi-account support.

### Internal Working
Producer -> SQS/SNS/EventBridge -> Consumer (pull or push) -> Processing -> Outcome.

### ASCII Diagram
Producer -> EventBridge Rules -> Multiple Targets (Lambda, SQS, SNS, HTTP)

### Trade-offs
- SQS for decoupling multiple workers; SNS for broadcast.
- EventBridge for complex routing; SQS/SNS for simple cases.

## Real-world Example
A monolithic system coupled all services synchronously. One slow dependency caused cascading failures. Decoupling with SQS allowed each service to scale independently and survive failures in other services.

## TPM Perspective
Ask:
- Is synchronous coupling creating bottlenecks or failure coupling?
- Do multiple services need to react to the same event?
- What is the tolerance for delayed processing?
- How do we handle failed messages?

## Interview Perspective
Strong answer:
"I use SQS to decouple services — producers write to queue, consumers process at their own pace. SNS for broadcast scenarios where multiple services need the event. EventBridge for complex routing rules across many services and accounts."

## Common Mistakes
- Everything synchronous (tight coupling, fragile).
- Not implementing dead-letter queues (lost failed messages).
- Not understanding visibility timeout (duplicate processing).

## 5-Minute Revision
- SQS: queue for decoupling producers and consumers.
- SNS: publish-subscribe for broadcasting.
- EventBridge: event bus for routing and filtering.
- Dead-letter queues capture failures for investigation.

## Practice Interview Questions
1. When would you use SQS vs SNS?
2. How do you handle a failed message in SQS?
3. How would you implement a multi-service event-driven system?
4. What is visibility timeout and why does it matter?
5. How does EventBridge enable multi-account architectures?

## Key Takeaways
- Messaging decouples services, enabling resilience and scaling.
- SQS for point-to-point; SNS/EventBridge for publish-subscribe.
- Dead-letter queues are critical for reliability.
