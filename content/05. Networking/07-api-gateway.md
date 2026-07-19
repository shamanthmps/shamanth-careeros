# API Gateway

## Executive Summary
An API gateway is the entry layer that centralizes routing, authentication, rate limiting, and policy enforcement for downstream services. In interviews, TPMs should frame it as control-plane architecture for reliability and governance.

Strong answers include what belongs in gateway vs service logic.

## Why This Matters
- TPM relevance: Gateway decisions affect security posture and release coordination.
- Architecture relevance: Enables cross-cutting concerns without duplicating code.
- Interview relevance: Frequent topic in microservices design rounds.

## Core Concepts
### Definitions
- API gateway: Front door for APIs.
- Routing: Mapping incoming requests to services.
- Rate limiting: Controlling request volume per client/tenant.
- AuthN/AuthZ enforcement: Identity verification and permission checks.

### Internal Working
Client request -> gateway policy checks -> route to backend -> response aggregation/transform.

### ASCII Diagram
Client -> API Gateway -> Service A/B/C
             |
             +-> Auth, Rate Limit, Logging

### Trade-offs
- Centralized policy control vs gateway as bottleneck risk.
- Faster service development vs added platform dependency.

## Real-world Example
Multi-tenant SaaS APIs:
- Inconsistent auth and rate limits across services.
- Standardized via gateway policies and tenant-aware throttling.
- Reduced security defects and abusive traffic incidents.

## TPM Perspective
Ask:
- Which controls are mandatory at gateway layer?
- What is fallback if gateway degrades?
- How are policy changes tested and rolled back?

## Interview Perspective
Strong answer:
"I use API gateway for cross-cutting controls like auth, throttling, routing, and observability while keeping domain logic in services to avoid gateway overreach and maintain clear ownership."

## Common Mistakes
- Putting business logic inside gateway.
- No high availability design for gateway tier.
- Weak policy versioning and rollback.

## 5-Minute Revision
- Gateway centralizes common API controls.
- Keep domain logic in services.
- Design gateway for HA and observability.

## Practice Interview Questions
1. What should never be placed in API gateway?
2. How do you scale gateway layer safely?
3. How do rate limits vary by tenant tier?
4. How do you handle gateway outages?
5. How do you version gateway policies?

## Key Takeaways
- API gateway is governance and security infrastructure.
- Centralization improves consistency but increases dependency criticality.
- TPMs should enforce clear boundary and reliability standards.
