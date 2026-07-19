# Reverse Proxy

## Executive Summary
A reverse proxy sits in front of backend services to route traffic, terminate TLS, apply policies, and improve performance/security. In interviews, TPMs should explain where reverse proxy fits relative to API gateways and load balancers.

Strong answers clarify role separation and operational benefits.

## Why This Matters
- TPM relevance: Reverse proxies are common control points for security and observability.
- Architecture relevance: Helps with TLS offload, caching, and request filtering.
- Interview relevance: Frequently appears in web-scale architecture prompts.

## Core Concepts
### Definitions
- Reverse proxy: Server receiving client requests and forwarding to internal services.
- TLS termination: Decrypting HTTPS at proxy layer.
- Upstream pool: Backend service targets.
- Request rewriting: Modifying headers/path before forwarding.

### Internal Working
Client request -> reverse proxy checks policy -> forwards to upstream -> returns response.

### ASCII Diagram
Client -> Reverse Proxy -> App Services

### Trade-offs
- Centralized controls vs single dependency risk.
- TLS offload savings vs additional hop.

## Real-world Example
Internal service hardening:
- Added reverse proxy for mTLS, header sanitization, and access logging.
- Reduced direct service exposure and improved auditability.

## TPM Perspective
Ask:
- What controls are enforced at proxy layer?
- How is proxy tier scaled and monitored?
- What is failure behavior if proxy layer degrades?

## Interview Perspective
Strong answer:
"I use reverse proxy for edge policy, TLS termination, and request routing while preserving clean backend service boundaries and designing proxy tier HA."

## Common Mistakes
- Confusing reverse proxy with forward proxy.
- Overloading proxy with business logic.
- No redundancy in proxy tier.

## 5-Minute Revision
- Reverse proxy fronts backend services.
- Key uses: TLS, routing, filtering, observability.
- Must be designed as highly available infrastructure.

## Practice Interview Questions
1. Reverse proxy vs API gateway: difference?
2. Why terminate TLS at proxy?
3. What controls belong at proxy layer?
4. How do you avoid proxy bottlenecks?
5. What logs should proxies emit?

## Key Takeaways
- Reverse proxy is a foundational edge pattern.
- It improves security and manageability when scoped correctly.
- TPMs should define proxy ownership and reliability standards.
