# Authorization

## Executive Summary
Authorization determines what an authenticated identity is permitted to do. In interviews, TPMs should explain access control models, least privilege, and policy enforcement patterns.

Strong answers distinguish authorization architectures by scale and complexity of access requirements.

## Why This Matters
- TPM relevance: Authorization flaws are a top source of data exposure and privilege abuse.
- Architecture relevance: Authorization models shape service design and API contracts.
- Interview relevance: Frequently paired with authentication questions.

## Core Concepts
### Definitions
- Authorization (AuthZ): Determining what actions are permitted.
- RBAC: Role-Based Access Control — permissions by role.
- ABAC: Attribute-Based Access Control — permissions by attributes/context.
- Least privilege: Minimum permissions needed for the task.

### Internal Working
Request authenticated -> policy engine evaluates permissions -> access granted or denied -> action logged.

### ASCII Diagram
Identity + Request -> Policy Engine -> Permit/Deny -> Audit Log

### Trade-offs
- Fine-grained ABAC improves precision but increases policy complexity.
- Broad RBAC is simpler but can over-grant permissions.

## Real-world Example
A multi-tenant SaaS moved from role-based to attribute-based authorization to enforce tenant isolation, preventing cross-tenant data access.

## TPM Perspective
Ask:
- Are permissions scoped to minimum required access?
- How are access policies reviewed and updated?
- What audit trail exists for authorization decisions?

## Interview Perspective
Strong answer:
"I implement authorization with least privilege as default, explicit deny for sensitive operations, and audit logging for all access decisions. I choose RBAC for simpler roles and ABAC when context-aware policies are required."

## Common Mistakes
- Default allow rather than default deny.
- No periodic access review.
- Missing authorization in internal service calls.

## 5-Minute Revision
- Authorization enforces what you can do.
- Least privilege and default deny are foundational.
- Audit every access decision for critical resources.

## Practice Interview Questions
1. RBAC vs ABAC: when do you choose each?
2. How do you enforce least privilege at scale?
3. What is privilege creep and how do you prevent it?
4. How do you audit authorization decisions?
5. How do you test authorization controls?

## Key Takeaways
- Authorization is distinct from authentication.
- Least privilege reduces blast radius of compromised accounts.
- TPMs should drive regular access reviews and policy governance.
