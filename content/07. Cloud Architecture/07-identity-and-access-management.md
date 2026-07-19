# Identity & Access Management

## Executive Summary
IAM controls who can access what resources and actions in cloud environments. Interviewers evaluate whether TPMs can design least-privilege access models and governance mechanisms for large teams.

Strong answers cover identity federation, role design, and access auditing.

## Why This Matters
- TPM relevance: IAM misconfiguration is a top source of cloud security incidents.
- Architecture relevance: Access boundaries define operational and security posture.
- Interview relevance: Mandatory cloud security topic.

## Core Concepts
### Definitions
- Principal: User, service, or workload identity.
- Role: Set of permissions assigned to principal.
- Least privilege: Minimum permissions required for task.
- Federation: Trusting external identity provider for authentication.

### Internal Working
Identity authenticated -> policy evaluated -> permission granted/denied -> action logged.

### ASCII Diagram
User/Service -> AuthN -> IAM Policy Engine -> Resource Access

### Trade-offs
- Fine-grained permissions improve security but increase policy complexity.
- Broad roles simplify management but increase risk.

## Real-world Example
A cloud platform moved from shared admin credentials to role-based access with short-lived tokens and centralized audit logging.

## TPM Perspective
Ask:
- Are service accounts scoped to specific actions?
- How are privileged access requests approved and reviewed?
- What is credential rotation and key management policy?

## Interview Perspective
Strong answer:
"I design IAM around least privilege, role-based access, and short-lived credentials, with continuous audit and periodic access review to prevent privilege creep."

## Common Mistakes
- Shared long-lived credentials.
- Overly broad wildcard permissions.
- No periodic permission review.

## 5-Minute Revision
- IAM is critical cloud control plane security.
- Use least privilege and short-lived credentials.
- Audit and review access continuously.

## Practice Interview Questions
1. How do you implement least privilege at scale?
2. Why are short-lived credentials preferred?
3. How do you prevent privilege creep?
4. What IAM controls should be automated?
5. How do you handle emergency privileged access?

## Key Takeaways
- IAM governance is foundational for cloud safety.
- Role design quality directly affects risk.
- TPMs should own IAM review and remediation programs.
