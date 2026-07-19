# Security Case Study

## Executive Summary
This case study integrates security module topics into an interview-style scenario. Prompt: A fast-growing B2B SaaS platform handling financial data needs to improve security posture before entering enterprise sales deals requiring SOC 2 compliance.

Goal: propose a phased, risk-based security program.

## Why This Matters
- TPM relevance: Reflects real security transformation programs TPMs own.
- Architecture relevance: Requires auth, encryption, secrets, SDLC, and compliance integration.
- Interview relevance: End-to-end synthesis for senior security and platform rounds.

## Core Concepts
### Current State
- No MFA enforcement.
- Secrets stored in environment variables and some in source code.
- No dependency scanning in CI/CD.
- No formal security review process.
- SOC 2 audit targeted in 6 months.

### Proposed Plan

Phase 1 — Foundation (Weeks 1-6):
- Enforce MFA for all internal and customer accounts.
- Migrate secrets to centralized vault with rotation.
- Add SAST and dependency scanning to CI/CD.
- Implement encryption at rest for all sensitive data.

Phase 2 — Controls (Weeks 7-14):
- Complete access control audit and apply least privilege.
- Define risk-tiered security review process.
- Conduct threat modeling for top 3 product surfaces.
- Set up continuous compliance evidence collection.

Phase 3 — Audit Readiness (Weeks 15-24):
- Run internal SOC 2 readiness assessment.
- Remediate all critical and high findings.
- Engage auditor for Type I assessment.
- Establish ongoing security metrics and review cadence.

### ASCII Roadmap
Foundation Controls -> Governance Program -> Audit Readiness -> Continuous Compliance

### Trade-offs
- Aggressive timeline compresses security debt resolution.
- Centralized vault adoption requires app teams' integration effort.

## Real-world Outcome Model
Expected outcomes:
- SOC 2 Type I achieved within target window.
- Significantly reduced credential exposure and secrets risk.
- Security review process embedded into delivery workflow.

## TPM Perspective
Program governance:
- Weekly security program review with engineering, legal, and security leads.
- Risk register for open findings by severity.
- Launch gates enforced for compliance-scoped features.

## Interview Perspective
Strong answer:
"I would phase the security program: first fix highest-risk controls (MFA, secrets, encryption), then build governance (reviews, threat modeling, SDLC), then complete continuous compliance readiness for SOC 2."

Why strong: practical phasing, explicit risk prioritization, traceable to compliance goals.

## Common Mistakes
- Starting with documentation rather than control implementation.
- No ownership or SLAs for remediation.
- Treating SOC 2 as a one-time project rather than ongoing program.

## 5-Minute Revision
- Fix high-risk technical controls first.
- Build governance and review processes second.
- Establish continuous compliance last.

## Practice Interview Questions
1. How do you prioritize security investments?
2. What should be fixed first before an SOC 2 audit?
3. How do you maintain momentum in a multi-month security program?
4. How do you explain security trade-offs to product and sales teams?
5. What metrics show security program progress to leadership?

## Key Takeaways
- Security programs require phased execution, not big-bang fixes.
- Controls, governance, and compliance build on each other.
- TPMs should lead security programs with risk-based prioritization and measurable milestones.
