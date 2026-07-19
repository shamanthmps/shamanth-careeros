# Security Fundamentals

## Executive Summary
Security fundamentals define the mindset, vocabulary, and operating model for protecting systems and data. In TPM interviews, security is evaluated as a cross-functional governance discipline, not a compliance checklist.

Senior TPMs should demonstrate that security is designed in, not bolted on, and that they can drive risk-based decisions across engineering, legal, product, and operations.

## Why This Matters
- TPM relevance: Security incidents create legal, financial, and reputational damage that TPMs are accountable for preventing through program governance.
- Architecture relevance: Security boundaries and trust models influence system design.
- Interview relevance: Foundational topic expected across all senior rounds.

## Core Concepts
### Definitions
- Threat: Potential cause of harm.
- Vulnerability: Weakness that a threat can exploit.
- Risk: Likelihood and impact of a threat exploiting a vulnerability.
- Control: Mechanism reducing risk.
- Defense in depth: Multiple overlapping security layers.

### Internal Working
Security posture is built through layered controls: prevention, detection, response, and recovery.

### ASCII Diagram
Threat -> Vulnerability -> Control Layer -> Asset

### Trade-offs
- Stronger controls vs developer velocity.
- Broad monitoring vs signal noise and privacy.

## Real-world Example
A SaaS platform experienced a credential exposure incident due to missing secrets management. Post-incident, the team established a secure SDLC, secrets rotation, and threat modeling as program-level requirements.

## TPM Perspective
Ask:
- Which assets require the highest protection?
- Where are current control gaps?
- How are security incidents detected and escalated?

## Interview Perspective
Strong answer:
"I treat security as a risk management program. I classify assets, define control requirements by risk tier, and embed security gates into delivery so vulnerabilities are caught before production."

## Common Mistakes
- Delegating security entirely to a separate security team.
- No asset classification or risk model.
- Security reviews only at launch, not throughout SDLC.

## 5-Minute Revision
- Security is prevention, detection, response, and recovery.
- Risk-based prioritization beats broad compliance coverage.
- TPMs drive governance; security teams enable it.

## Practice Interview Questions
1. How do you embed security into a delivery program?
2. What is defense in depth?
3. How do you classify security risk by asset?
4. What governance controls should exist for production changes?
5. How do you explain security trade-offs to executives?

## Key Takeaways
- Security is a shared ownership model.
- Risk-based controls are more effective than compliance theater.
- TPMs should lead security governance, not just facilitate it.
