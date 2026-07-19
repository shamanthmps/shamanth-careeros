# Security Considerations

## Executive Summary
Security in system design interviews is about threat-aware architecture decisions, not checklist memorization. Senior TPM answers identify trust boundaries, sensitive data flows, abuse scenarios, and practical controls.

Interviewers evaluate whether you treat security as a first-class design property from day one.

## Why This Matters
- TPM relevance: Security incidents create legal, financial, and reputational damage.
- Architecture relevance: AuthN/AuthZ, encryption, secret handling, and auditability shape system boundaries.
- System design relevance: Security is expected in every senior architecture answer.

## Core Concepts
### Security Domains
- Identity and access control
- Data protection (at rest/in transit)
- Input validation and abuse prevention
- Secrets management
- Audit logging and incident response

### Internal Working
Security-by-design flow:
1. Classify sensitive assets.
2. Define trust boundaries.
3. Apply least privilege controls.
4. Add detection and response telemetry.

### ASCII Trust Boundary
Client --(untrusted)-> Edge -> App -> Data
                     |       |
                  WAF/Auth  Policy/ACL

### Trade-offs
- Strong controls vs developer velocity
- Detailed logging vs privacy/data minimization

## Real-world Example
Healthcare workflow:
- Segmented PII services from analytics domain.
- Tokenized identifiers for downstream usage.
- Added strict audit trails for privileged access.

Outcome: Improved compliance and reduced blast radius.

## TPM Perspective
Questions:
- What data is sensitive and where does it flow?
- Which roles need access, and who approves exceptions?
- How are secrets rotated?
- What is incident response workflow?

## Interview Perspective
Strong answer:
"I start with data classification and trust boundaries, enforce least privilege, encrypt sensitive paths, and include audit and abuse controls in the initial design rather than post-launch hardening."

## Common Mistakes
- Treating security as add-on.
- Broad internal service trust.
- Hardcoded secrets.
- Missing rate limits and abuse controls.
- No auditability for privileged operations.

## 5-Minute Revision
- Classify assets.
- Define trust boundaries.
- Enforce least privilege.
- Encrypt and audit critical paths.

## Practice Interview Questions
1. How do you apply least privilege in microservices?
2. What should always be encrypted?
3. How do you secure internal APIs?
4. What logs are required for investigations?
5. How do you balance security and velocity?

## Key Takeaways
- Security is architecture, not afterthought.
- Trust boundaries and access control are foundational.
- Auditability and incident readiness are mandatory.