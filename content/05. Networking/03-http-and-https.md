# HTTP & HTTPS

## Executive Summary
HTTP is the foundational application protocol for web APIs; HTTPS adds TLS encryption for confidentiality, integrity, and trust. In interviews, senior TPMs should explain performance, security, and operational implications of HTTP choices.

Strong answers include protocol versions, connection reuse, TLS overhead, and API reliability behavior.

## Why This Matters
- TPM relevance: API performance and security posture are directly tied to HTTP behavior.
- Architecture relevance: Request semantics, retries, and caching depend on HTTP design.
- Interview relevance: Mandatory topic in system design rounds.

## Core Concepts
### Definitions
- HTTP: Stateless request-response protocol.
- HTTPS: HTTP over TLS.
- TLS handshake: Negotiation for secure communication.
- Keep-alive: Reusing connections to reduce setup overhead.

### Internal Working
Client sends request with method/headers/body. Server responds with status code, headers, and payload. HTTPS adds certificate validation and encrypted channel.

### ASCII Diagram
Client -> TLS Handshake -> Secure HTTP Request -> Response

### Trade-offs
- HTTPS security gain vs handshake latency overhead.
- Verbose payloads vs faster debugging simplicity.

## Real-world Example
Mobile API latency:
- Excessive short-lived HTTPS connections increased handshake cost.
- Enabled connection reuse and optimized payload compression.
- Improved p95 latency and battery usage.

## TPM Perspective
Ask:
- Are all endpoints HTTPS-only with modern TLS settings?
- Are idempotent methods used for safe retries?
- What cache headers are defined per endpoint?

## Interview Perspective
Strong answer:
"I design APIs around HTTP semantics and enforce HTTPS by default. I optimize latency with connection reuse and payload controls while preserving security and retry safety."

## Common Mistakes
- Treating HTTPS as optional for internal traffic.
- Ignoring idempotency semantics with retries.
- Overlooking cache-control and status code discipline.

## 5-Minute Revision
- HTTPS is non-negotiable for production traffic.
- HTTP method semantics affect reliability.
- Connection reuse and caching materially impact latency.

## Practice Interview Questions
1. Why is HTTPS critical beyond encryption?
2. How do HTTP methods influence retry strategy?
3. What causes TLS overhead and how to reduce it?
4. When should responses be cacheable?
5. How do you design API status code standards?

## Key Takeaways
- HTTP behavior drives API correctness and performance.
- HTTPS is core security baseline.
- TPMs should enforce protocol and caching standards.
