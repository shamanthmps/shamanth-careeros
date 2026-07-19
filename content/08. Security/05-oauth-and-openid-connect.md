# OAuth & OpenID Connect

## Executive Summary
OAuth 2.0 is a delegation framework for access authorization; OpenID Connect adds identity authentication on top. In interviews, TPMs should explain the flow, token types, and where each protocol fits.

Strong answers distinguish delegation from authentication and identify common security pitfalls.

## Why This Matters
- TPM relevance: Most consumer and enterprise identity integrations rely on these standards.
- Architecture relevance: Token design, scope management, and expiry affect both security and user experience.
- Interview relevance: Common in API security and identity system design rounds.

## Core Concepts
### Definitions
- OAuth 2.0: Framework for delegated authorization.
- OpenID Connect (OIDC): Identity layer on OAuth 2.0 for authentication.
- Access token: Credential for accessing protected resources.
- ID token: Credential asserting user identity.
- Scope: Permission set requested in authorization.

### Internal Working
User authorizes app -> authorization server issues tokens -> app uses access token to call APIs -> ID token validates user identity.

### ASCII Diagram
User -> App -> Auth Server -> Access Token + ID Token -> Protected API

### Trade-offs
- Short token lifetimes improve security but require more refresh operations.
- Broad scopes simplify integrations but over-grant permissions.

## Real-world Example
A developer platform used OIDC for SSO and OAuth 2.0 for scoped API access across partner applications, separating identity from resource authorization cleanly.

## TPM Perspective
Ask:
- Are token scopes the minimum necessary?
- What is token expiry and rotation policy?
- Are refresh tokens securely stored?

## Interview Perspective
Strong answer:
"I use OAuth 2.0 for delegated resource access and OIDC for identity assertion. I scope tokens minimally, enforce short expiry with secure refresh, and validate token claims server-side on every request."

## Common Mistakes
- Using OAuth 2.0 for authentication alone without OIDC.
- Over-broad token scopes.
- Storing tokens in insecure locations (localStorage, logs).

## 5-Minute Revision
- OAuth delegates authorization; OIDC adds authentication.
- Scope minimally and expire tokens aggressively.
- Validate tokens server-side, not just at login.

## Practice Interview Questions
1. What is the difference between OAuth and OIDC?
2. How do you design minimal token scopes?
3. What are risks in implicit OAuth flows?
4. How do you handle token revocation?
5. How do you secure refresh token storage?

## Key Takeaways
- OAuth + OIDC are the industry standards for modern identity.
- Token lifecycle governance is critical for security.
- TPMs should ensure identity architecture reviews include scope and expiry controls.
