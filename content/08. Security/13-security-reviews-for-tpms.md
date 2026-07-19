# Security Reviews for TPMs

## Executive Summary
Security reviews are the structured process by which TPMs and engineering leaders evaluate whether architecture and implementation meet security standards before launch. This topic tests your ability to govern security without being a security engineer.

Strong interview answers show how to operationalize reviews at scale without creating bottlenecks.

## Why This Matters
- TPM relevance: TPMs own the review process, not just participation.
- Architecture relevance: Review criteria drive architecture decisions.
- Interview relevance: Practical leadership signal in senior rounds.

## Core Concepts
### Review Types
- Architecture Security Review: Threat model and design evaluation.
- Pre-launch Security Review: Controls checklist before release.
- Penetration Test: Adversarial testing of system defenses.
- Third-party Security Assessment: External vendor review.

### Internal Working
Request -> scoping -> evidence collection -> review panel -> findings -> remediation plan -> sign-off.

### ASCII Diagram
Feature/Release -> Security Review Criteria -> Findings -> Remediation SLA -> Approval

### Trade-offs
- Thorough reviews improve confidence but can delay releases.
- Risk-tiered reviews focus effort where it matters most.

## Real-world Example
A platform moved from ad-hoc security reviews to a tiered model: lightweight checklist for low-risk changes, architecture review for new services, and penetration test for customer-facing financial features.

## TPM Perspective
Ask:
- What risk tier triggers which review level?
- Are review findings tracked with owners and SLAs?
- How is review scope kept current as architecture evolves?

## Interview Perspective
Strong answer:
"I run security reviews as a risk-tiered program: lightweight self-service checklists for routine changes, architecture reviews for new systems, and adversarial testing for high-risk customer-facing launches."

## Common Mistakes
- Same review process for all features regardless of risk.
- No formal tracking of findings.
- Reviews without authority to block launches.

## 5-Minute Revision
- Tier reviews by risk, not uniformly.
- Track findings with owners and SLAs.
- Reviews should have real authority over launch gates.

## Practice Interview Questions
1. How do you decide what needs a security review?
2. What should a pre-launch security checklist include?
3. How do you handle disagreements between security and product on findings?
4. What metrics measure security review program effectiveness?
5. How do you keep security review criteria current?

## Key Takeaways
- Security reviews are a TPM governance responsibility.
- Tiered approach improves both safety and velocity.
- Findings without tracked remediation are not reviews — they are theater.
