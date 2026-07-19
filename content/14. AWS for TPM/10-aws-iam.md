# AWS IAM

## Executive Summary
IAM (Identity and Access Management) is how you control who can do what on AWS. For TPMs, IAM is not just a security concern — it is an operational necessity. Proper IAM design prevents security incidents, enables audit trails, and allows teams to operate safely with least privilege.

## Why This Matters
- TPM relevance: Every program needs access control; IAM is where that is enforced.
- Interview relevance: Security architecture questions always involve IAM.

## Core Concepts
### IAM Entities
- Users: Individual people accessing AWS.
- Roles: Temporary credentials for services or users.
- Groups: Collections of users with shared permissions.
- Policies: Documents defining permissions (allow/deny).

### Least Privilege Principle
- Grant minimum permissions needed for the job.
- Avoid wildcards (action: *) in production.
- Use roles rather than long-term credentials for services.

### Internal Working
User/Service -> Role assumption -> Temporary credentials -> STS tokens -> API calls.

### ASCII Diagram
Developer -> IAM User -> Assume Role -> Temporary Credentials -> S3 ReadOnly -> Access granted

### Trade-offs
- Detailed granular permissions prevent mistakes but are complex.
- Overly permissive IAM is simpler to implement but risky.

## Real-world Example
A service had administrative IAM permissions "to be safe." A bug in the code deleted all S3 buckets. Proper IAM limiting the service to only the S3 buckets it needed would have prevented the disaster.

## TPM Perspective
Ask:
- Who needs access to what resources?
- Is long-term credential leakage a risk? (Use roles instead)
- Can we audit who accessed what and when?
- Are we following least privilege consistently?

## Interview Perspective
Strong answer:
"I design IAM around least privilege: services get roles with only the permissions they need, users get temporary credentials via federation, and every action is auditable. I avoid wildcard permissions and long-term credentials for automated systems."

## Common Mistakes
- Root AWS account used for day-to-day work.
- Overly permissive policies for convenience ("allow: *").
- Long-term credentials stored in code.
- No audit trail of who did what.

## 5-Minute Revision
- IAM: identity, authentication, authorization, audit.
- Least privilege: grant minimum permissions needed.
- Roles for services; users via federation.
- Policies are JSON documents; deny is explicit.

## Practice Interview Questions
1. How would you design IAM for a multi-team organization?
2. What is the difference between IAM users and roles?
3. How do you implement least privilege IAM?
4. How do you audit who accessed what and when?
5. What is the risk of long-term credentials in code?

## Key Takeaways
- IAM is the foundation of AWS security.
- Least privilege prevents most security breaches.
- Roles are superior to long-term credentials for services.
