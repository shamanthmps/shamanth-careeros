# OSI vs TCP/IP

## Executive Summary
OSI and TCP/IP are conceptual models for understanding network communication layers. Interviewers do not expect deep textbook memorization; they expect practical mapping from architecture issues to the right layer.

Strong TPM responses explain problems using layer-based thinking, which helps debugging and decision-making.

## Why This Matters
- TPM relevance: Layered diagnosis accelerates incident triage.
- Architecture relevance: Security, transport reliability, and application protocols map to different layers.
- Interview relevance: Common foundational networking question.

## Core Concepts
### Definitions
- OSI model: 7-layer conceptual framework (Physical to Application).
- TCP/IP model: Practical 4-layer Internet stack (Link, Internet, Transport, Application).
- Encapsulation: Wrapping data with layer-specific headers.

### Internal Working
Data moves down layers at sender (encapsulation), across network, then up layers at receiver (decapsulation).

### ASCII Diagram
OSI: L7 App | L6 Present | L5 Session | L4 Transport | L3 Network | L2 Data Link | L1 Physical
TCP/IP: Application | Transport | Internet | Link

### Trade-offs
- OSI: better for conceptual clarity.
- TCP/IP: better for practical implementation mapping.

## Real-world Example
API timeout issue:
- Team suspected app bug.
- Layered analysis showed packet loss and retransmissions at transport level.
- Fix focused on network path and timeout policy, not application code.

## TPM Perspective
Ask:
- Which layer is failing: DNS, transport, or application?
- What telemetry exists per layer?
- Which team owns each layer in incident response?

## Interview Perspective
Strong answer:
"I use OSI for problem decomposition and TCP/IP for implementation reasoning. This helps isolate whether a failure is protocol, routing, transport, or application behavior."

## Common Mistakes
- Treating models as rote memorization only.
- Mixing transport and application concerns.
- No ownership mapping by layer.

## 5-Minute Revision
- OSI is conceptual, TCP/IP is practical.
- Layered thinking improves debugging.
- Map failures to layer before fixing.

## Practice Interview Questions
1. Why are both OSI and TCP/IP still useful?
2. How do you use layers in incident diagnosis?
3. Where do HTTP and TLS belong?
4. What problems usually occur at transport layer?
5. How does layered design help architecture governance?

## Key Takeaways
- Use models for clarity, not memorization contests.
- Layer mapping improves speed and accuracy in troubleshooting.
- TPMs should drive layer-aware incident communication.
