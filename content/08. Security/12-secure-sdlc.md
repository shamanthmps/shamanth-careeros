# Secure SDLC

## Executive Summary
Secure SDLC (Software Development Lifecycle) embeds security activities at every stage of delivery — from design through deployment. In interviews, TPMs should explain how security shifts left without creating bottlenecks.

Strong answers include threat modeling, security testing in CI/CD, and policy-controlled release gates.

## Why This Matters
- TPM relevance: Security debt compounds when found late; Secure SDLC reduces rework cost.
- Architecture relevance: Threat models inform design decisions early.
- Interview relevance: Senior-level execution topic combining delivery and security.

## Core Concepts
### Definitions
- Threat modeling: Structured analysis of potential threats and mitigations.
- SAST: Static Application Security Testing during build.
- DAST: Dynamic Application Security Testing on running systems.
- Security gate: Mandatory check before stage promotion.

### Internal Working
Security activities mapped to SDLC stages: design -> code -> build -> test -> release -> operate.

### ASCII Diagram
Design (threat model) -> Code (SAST) -> Build (dependency scan) -> Test (DAST) -> Release (gate) -> Operate (monitoring)

### Trade-offs
- Comprehensive security gates slow fast-moving teams if poorly tuned.
- Risk-tiered controls preserve velocity for low-risk changes.

## Real-world Example
A fintech platform introduced threat modeling for all new features above a defined risk threshold, reducing security defects found in production by detecting them at design stage.

## TPM Perspective
Ask:
- At which SDLC stage are security defects most commonly introduced?
- Are security gates blocking or advisory by default?
- Who owns remediation SLAs for security findings?

## Interview Perspective
Strong answer:
"I embed Secure SDLC through threat modeling at design, automated scanning in CI/CD, risk-tiered gates before production, and a tracked remediation program with SLAs by severity."

## Common Mistakes
- Security only at end-of-cycle review.
- Gates with no escalation path for urgent releases.
- Unowned remediation backlogs.

## 5-Minute Revision
- Secure SDLC moves security earlier in delivery.
- Threat modeling is highest-ROI activity.
- Automated scanning + tracked remediation are mandatory.

## Practice Interview Questions
1. How do you run threat modeling without slowing delivery?
2. What security gates are essential in CI/CD?
3. How do you prioritize remediation backlogs?
4. How do you measure Secure SDLC effectiveness?
5. How should security posture differ between risk tiers?

## Key Takeaways
- Secure SDLC pays back through reduced late-stage defects.
- Shift-left security is both culture and tooling.
- TPMs should own Secure SDLC governance and metrics.
