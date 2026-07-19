# JWT

## Executive Summary
JSON Web Tokens (JWTs) are a compact, self-contained format for transmitting identity and authorization claims. In interviews, TPMs should explain JWT structure, validation requirements, and common security mistakes.

Strong answers demonstrate understanding of signing, expiry, and safe storage — not just the token structure.

## Why This Matters
- TPM relevance: Improper JWT use is a top cause of auth bypass and data exposure.
- Architecture relevance: JWT design decisions affect scalability, revocation, and service-to-service trust.
- Interview relevance: Ubiquitous in API security questions.

## Core Concepts
### Definitions
- JWT: Base64-encoded header.payload.signature token.
- Claim: Key-value assertion in the JWT payload.
- Signing algorithm: Mechanism protecting token integrity (e.g., RS256, HS256).
- Expiry (exp): Claim limiting token validity window.

### Internal Working
Server issues signed JWT -> client stores and sends with requests -> server validates signature and claims.

### ASCII Diagram
Auth Server -> Signed JWT -> Client -> Bearer Header -> API -> Validate Signature + Claims

### Trade-offs
- Stateless JWT simplifies scale but complicates revocation.
- Symmetric vs asymmetric signing: simplicity vs non-repudiation.

## Real-world Example
An API platform switched to asymmetric JWT signing (RS256), allowing downstream services to validate tokens without sharing private keys — improving security across microservice boundaries.

## TPM Perspective
Ask:
- What signing algorithm is used and why?
- What is token expiry and refresh policy?
- How are tokens revoked before expiry?

## Interview Perspective
Strong answer:
"I use asymmetric signed JWTs with short expiry, server-side claim validation, and a token revocation strategy for logout and compromise scenarios. I avoid storing JWTs in localStorage in browser clients."

## Common Mistakes
- Using algorithm=none or weak symmetric keys.
- No expiry or very long expiry windows.
- Trusting JWT claims without server-side signature verification.

## 5-Minute Revision
- JWT = signed claim bundle, not encrypted by default.
- Short expiry + revocation = safe lifecycle.
- Always validate signature server-side.

## Practice Interview Questions
1. How does JWT signature verification work?
2. Why is the "alg: none" attack dangerous?
3. How do you revoke a JWT before expiry?
4. Where should JWTs be stored safely?
5. When should you use opaque tokens instead of JWTs?

## Key Takeaways
- JWTs are widely used but easily misimplemented.
- Signing, expiry, and revocation design are mandatory.
- TPMs should include JWT lifecycle controls in security reviews.
