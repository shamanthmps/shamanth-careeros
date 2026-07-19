# TCP vs UDP

## Executive Summary
TCP and UDP are transport-layer protocols optimized for different reliability and latency needs. Interviewers expect TPMs to choose protocol based on workload characteristics, not generic speed claims.

Strong answers explain delivery guarantees, ordering behavior, and operational consequences.

## Why This Matters
- TPM relevance: Protocol choice can make or break user experience for real-time and transactional systems.
- Architecture relevance: Retries, buffering, and error handling differ by transport model.
- Interview relevance: Common trade-off question in networking and system design rounds.

## Core Concepts
### Definitions
- TCP: Connection-oriented, reliable, ordered transport.
- UDP: Connectionless, best-effort, unordered transport.
- Retransmission: Resending lost packets (TCP behavior).
- Head-of-line blocking: Delays caused by ordered delivery requirements.

### Internal Working
TCP establishes connection, manages sequence numbers, ACKs, retransmissions, and flow control. UDP sends datagrams without connection state or delivery guarantees.

### ASCII Diagram
TCP: Connect -> Send/ACK -> Retransmit if lost -> Ordered delivery
UDP: Send datagrams -> No ACK required -> Best effort

### Trade-offs
- TCP: reliability and order, higher overhead/latency.
- UDP: low overhead/latency, app must handle loss/order concerns.

## Real-world Example
Live voice communication:
- TCP caused jitter due to retransmission delays.
- Moved media stream to UDP-based transport with app-level concealment.
- Improved real-time quality.

## TPM Perspective
Ask:
- Is strict ordering required?
- Is occasional packet loss acceptable?
- Where should recovery logic live: transport or application?

## Interview Perspective
Strong answer:
"I choose TCP for correctness-critical ordered delivery and UDP for latency-sensitive real-time traffic where occasional loss is acceptable and app-level recovery is designed."

## Common Mistakes
- Saying UDP is always faster without context.
- Using TCP for ultra-low-latency media by default.
- Ignoring app-level reliability design for UDP.

## 5-Minute Revision
- TCP: reliable and ordered.
- UDP: faster path with weaker guarantees.
- Protocol choice must map to product tolerance for loss and delay.

## Practice Interview Questions
1. When is UDP better than TCP?
2. What is head-of-line blocking?
3. How does TCP reliability impact latency?
4. How do real-time systems tolerate UDP loss?
5. How do you justify protocol choice to stakeholders?

## Key Takeaways
- Protocol selection is a product requirement decision.
- Reliability and latency are competing forces.
- TPMs should make tolerance boundaries explicit.
