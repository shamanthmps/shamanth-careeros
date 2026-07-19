# DevSecOps

## Executive Summary
DevSecOps integrates security controls into the delivery lifecycle so security is continuous, automated, and testable. Interviewers expect TPMs to show how security shifts left without blocking developer flow.

Strong answers include policy-as-code, automated scanning, and risk-tiered gates.

## Why This Matters
- TPM relevance: Security late in lifecycle causes major release delays and incidents.
- Architecture relevance: Security controls must be embedded in pipelines and runtime.
- Interview relevance: Increasingly standard in enterprise DevOps conversations.

## Core Concepts
### Definitions
- Shift-left security: Early security validation in development lifecycle.
- SAST/DAST: Static and dynamic security testing.
- SBOM: Software bill of materials for dependency traceability.
- Policy-as-code: Automated enforcement of security rules.

### Internal Working
Commit -> security scans -> policy gates -> deploy -> runtime security monitoring.

### ASCII Diagram
Code -> CI Security Checks -> Artifact Sign -> Deploy -> Runtime Protection

### Trade-offs
- Stricter gates improve security but may increase cycle time.
- Risk-tiered controls preserve speed for low-risk changes.

## Real-world Example
A fintech platform added dependency scanning and image signing in CI/CD with risk-tiered approval gates. Vulnerability escape rates dropped.

## TPM Perspective
Ask:
- Which scans are blocking vs advisory?
- How are false positives handled?
- What is SLA for vulnerability remediation?

## Interview Perspective
Strong answer:
"I embed security into delivery pipelines with automated checks, signed artifacts, and risk-based enforcement so we improve security posture without freezing release velocity."

## Common Mistakes
- Security reviews only at release end.
- Unmanaged scanner noise.
- No ownership for remediation SLAs.

## 5-Minute Revision
- DevSecOps = security integrated into DevOps flow.
- Automate controls and enforce via policy.
- Tune gates by risk tier.

## Practice Interview Questions
1. How do you operationalize shift-left security?
2. What should block a deployment automatically?
3. How do you manage false positives in scans?
4. Why is SBOM important?
5. How do you measure DevSecOps effectiveness?

## Key Takeaways
- Security must be continuous and automated.
- Risk-tiered enforcement balances speed and protection.
- TPMs should own security-delivery alignment.
