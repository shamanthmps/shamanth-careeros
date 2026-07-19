# Infrastructure as Code

## Executive Summary
Infrastructure as Code (IaC) manages infrastructure through versioned, reviewable code instead of manual changes. Interviewers expect TPMs to explain IaC benefits for consistency, auditability, and delivery speed.

Strong answers include environment parity, drift prevention, and change governance.

## Why This Matters
- TPM relevance: IaC reduces operational risk and accelerates environment provisioning.
- Architecture relevance: Reliable infra changes are essential for scalable systems.
- Interview relevance: Common in DevOps maturity discussions.

## Core Concepts
### Definitions
- IaC: Declarative or imperative infra definitions in code.
- Drift: Difference between desired and actual infrastructure state.
- Plan/apply: Preview and execution cycle for infra changes.
- Immutable infra: Replace rather than mutate running infra.

### Internal Working
Code change -> review -> plan -> apply -> verify -> monitor.

### ASCII Diagram
IaC Repo -> CI Checks -> Plan -> Apply -> Cloud Resources

### Trade-offs
- Faster repeatability vs upfront module/template investment.
- Strong governance vs slower emergency changes.

## Real-world Example
A startup standardized environment setup with IaC modules. Onboarding and disaster recovery improved due to reproducible infrastructure.

## TPM Perspective
Ask:
- Are all infra changes routed through code review?
- How is drift detected and remediated?
- What approval policy applies to prod infra changes?

## Interview Perspective
Strong answer:
"I treat infrastructure changes like software: versioned, reviewed, tested, and auditable. IaC improves repeatability, reduces drift, and strengthens compliance posture."

## Common Mistakes
- Manual hotfixes without backport to IaC.
- No state management discipline.
- Large unsafe infra changes in one apply.

## 5-Minute Revision
- IaC improves repeatability and auditability.
- Drift control is a primary value.
- Use staged plans and policy gates.

## Practice Interview Questions
1. Why is IaC essential at scale?
2. How do you handle infra drift?
3. What controls are needed for prod applies?
4. How do you structure reusable IaC modules?
5. How do you recover from failed infra change?

## Key Takeaways
- IaC is foundational DevOps governance.
- Treat infra delivery like software delivery.
- TPMs should enforce policy-backed infra workflows.
