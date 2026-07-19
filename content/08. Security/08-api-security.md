# API Security

## Executive Summary
API security protects interfaces from unauthorized access, abuse, and data exposure. In TPM interviews, this covers authentication, authorization, rate limiting, input validation, and monitoring for APIs at scale.

Strong answers frame API security as an architecture concern built into platform standards, not individual team decisions.

## Why This Matters
- TPM relevance: API security breaches are one of the highest-frequency enterprise attack vectors.
- Architecture relevance: API gateways, auth flows, and schema validation are security controls.
- Interview relevance: Frequent in platform and system design security rounds.

## Core Concepts
### Definitions
- Rate limiting: Throttling requests by client/tenant.
- Input validation: Rejecting malformed or malicious request data.
- mTLS: Mutual TLS for service-to-service authentication.
- CORS: Cross-origin resource sharing policy for browser clients.

### Internal Working
Request -> Auth check -> Rate limit check -> Input validation -> Business logic -> Sanitized response.

### ASCII Diagram
Client -> API GW (AuthN/AuthZ/Rate Limit) -> Service -> Validated Response

### Trade-offs
- Strict input validation improves security but requires schema maintenance.
- Per-endpoint rate limits protect precision but increase policy complexity.

## Real-world Example
A marketplace API suffered a scraping and data exfiltration incident from a public endpoint. Remediation added per-client rate limits, authentication for previously open endpoints, and anomaly-based blocking.

## TPM Perspective
Ask:
- Which APIs are publicly accessible and what authentication do they require?
- What rate limits exist per client tier?
- Are all request inputs validated at the API boundary?

## Interview Perspective
Strong answer:
"I secure APIs through platform-level controls: authenticated access, least-privilege scopes, rate limiting by client tier, validated input schemas, and anomaly monitoring — not API-by-API manual review."

## Common Mistakes
- Open endpoints without authentication.
- No rate limiting on high-value endpoints.
- Missing input validation allowing injection attacks.

## 5-Minute Revision
- API security is platform governance.
- Auth, rate limiting, and validation must be standardized.
- Monitor for anomalous usage patterns proactively.

## Practice Interview Questions
1. How do you secure internal vs external APIs differently?
2. What does a strong API rate limiting policy include?
3. How do you prevent IDOR vulnerabilities?
4. What should API security monitoring detect?
5. How do you enforce input validation standards at scale?

## Key Takeaways
- API security requires platform enforcement, not per-team awareness.
- Authentication, rate limiting, and validation are baseline controls.
- TPMs should drive API security standards and audit compliance.
