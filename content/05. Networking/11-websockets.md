# WebSockets

## Executive Summary
WebSockets provide persistent, bidirectional communication channels between client and server for low-latency real-time updates. Interviewers expect TPMs to understand when WebSockets are justified versus polling or server-sent events.

Strong answers address scale, connection management, and fallback behavior.

## Why This Matters
- TPM relevance: Real-time UX features often depend on connection architecture.
- Architecture relevance: Stateful connections change load balancing and scaling design.
- Interview relevance: Common in chat, collaboration, trading, and live dashboards.

## Core Concepts
### Definitions
- WebSocket: Full-duplex persistent protocol over a single TCP connection.
- Long polling: Repeated HTTP requests waiting for updates.
- SSE: One-way server-to-client streaming over HTTP.
- Connection fan-out: Delivering events to many active clients.

### Internal Working
Client upgrades HTTP connection to WebSocket, maintains session, receives/publishes events asynchronously.

### ASCII Diagram
Client <==== persistent WebSocket ====> Realtime Gateway -> Event Bus -> Services

### Trade-offs
- WebSockets: lower latency and push capability, higher connection-state complexity.
- Polling: simpler infra, higher overhead and latency.

## Real-world Example
Collaborative editor:
- Polling caused stale updates and server load.
- Moved to WebSockets with presence channels and reconnection logic.
- Improved collaboration smoothness.

## TPM Perspective
Ask:
- Does use case need bidirectional real-time updates?
- What is reconnect/backoff strategy on network drops?
- How are connection limits and tenant isolation handled?

## Interview Perspective
Strong answer:
"I use WebSockets when low-latency bidirectional updates are core product value. I design connection lifecycle management, pub-sub fan-out, and fallback paths for unstable networks."

## Common Mistakes
- Using WebSockets for mostly static request-response APIs.
- No reconnection strategy.
- Ignoring per-connection memory cost.

## 5-Minute Revision
- Use WebSockets for true real-time two-way use cases.
- Plan connection lifecycle, scale, and fallback.
- Monitor connection health and fan-out performance.

## Practice Interview Questions
1. When should WebSockets replace polling?
2. How do you scale millions of persistent connections?
3. What fallback should exist when WebSocket fails?
4. How do you secure real-time channels?
5. What metrics matter for WebSocket systems?

## Key Takeaways
- WebSockets are powerful but operationally complex.
- Connection management is the core scaling challenge.
- TPMs should tie real-time architecture to clear product value.
