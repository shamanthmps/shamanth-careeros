# Authentication

## Executive Summary
Authentication is the process of verifying the identity of a user, service, or device. In interviews, TPMs should explain authentication design decisions, credential security, and session management across product and platform contexts.

Strong answers connect authentication architecture to user trust, abuse risk, and compliance requirements.

## Why This Matters
- TPM relevance: Authentication failures are top causes of breaches and account takeover.
- Architecture relevance: Identity is the foundation of access control and audit trails.
- Interview relevance: Common in security and system design rounds.

## Core Concepts
### Definitions
- Authentication (AuthN): Proving who you are.
- MFA: Multiple verification factors.
- Session token: Credential issued after successful authentication.
- Credential stuffing: Automated attack using leaked username/password pairs.

### Internal Working
User provides identity proof -> system validates -> issues session credential -> subsequent requests authenticated via credential.

### ASCII Diagram
User -> Credentials -> AuthN Service -> Session Token -> Resource

### Trade-offs
- Stronger MFA improves security but adds user friction.
- Long session lifetime improves UX but increases exposure window.

## Real-world Example
A financial app moved from password-only to MFA with short-lived tokens, reducing account takeover incidents while maintaining acceptable friction for users.

## TPM Perspective
Ask:
- What MFA is required by user risk tier?
- How are session lifetimes and revocation managed?
- What detects and blocks credential stuffing?

## Interview Perspective
Strong answer:
"I design authentication with risk-tiered MFA, short-lived session tokens, and anomaly detection for suspicious login patterns. Session management and revocation are first-class requirements, not afterthoughts."

## Common Mistakes
- No MFA for high-privilege accounts.
- Long-lived non-revocable session tokens.
- Weak rate limiting on login endpoints.

## 5-Minute Revision
- Authentication verifies identity.
- MFA and short session lifetimes reduce risk.
- Revocation and anomaly detection are mandatory.

## Practice Interview Questions
1. How do you design MFA for different user risk tiers?
2. What makes session token design secure?
3. How do you defend against credential stuffing?
4. When should re-authentication be forced?
5. How do you balance security and UX in authentication?

## Key Takeaways
- Authentication is the first line of identity defense.
- Risk-tiered controls provide balanced security.
- TPMs should govern authentication standards across product teams.
