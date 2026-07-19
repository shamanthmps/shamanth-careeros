# Release Engineering

## Executive Summary
Release engineering is the discipline of packaging, promoting, and validating software changes across environments with controlled risk. Interviewers expect TPMs to understand release process architecture, not just deployment mechanics.

Strong answers include release readiness criteria, dependency coordination, and rollback policy.

## Why This Matters
- TPM relevance: Release failures often stem from process gaps, not code defects alone.
- Architecture relevance: Release complexity increases with microservices and shared dependencies.
- Interview relevance: Common in execution-heavy rounds.

## Core Concepts
### Definitions
- Release train: Scheduled cadence for grouped changes.
- Release candidate: Build artifact approved for final validation.
- Release gate: Mandatory checkpoint before promotion.
- Roll-forward vs rollback: Two incident recovery strategies.

### Internal Working
Code complete -> RC build -> validation -> staged rollout -> production verification.

### ASCII Diagram
RC -> Stage Env -> Canary -> Full Release -> Post-Release Checks

### Trade-offs
- Frequent small releases reduce batch risk but increase coordination overhead.
- Large infrequent releases simplify cadence but raise blast radius.

## Real-world Example
Enterprise platform:
- Shifted from monthly big-bang releases to weekly incremental trains with canaries.
- Change-failure impact reduced and release predictability improved.

## TPM Perspective
Ask:
- What defines release readiness objectively?
- Which dependency teams are on critical path?
- What rollback trigger thresholds are set?

## Interview Perspective
Strong answer:
"I design release engineering with objective readiness gates, dependency orchestration, progressive rollout, and clear rollback criteria tied to SLO impact."

## Common Mistakes
- Subjective release approvals.
- No dependency readiness tracking.
- No post-release verification window.

## 5-Minute Revision
- Release engineering is risk-managed promotion.
- Readiness gates must be measurable.
- Progressive release and rollback policy are mandatory.

## Practice Interview Questions
1. How do you improve release predictability?
2. What should be in a release checklist?
3. How do you coordinate cross-team release windows?
4. Roll-forward vs rollback: when to choose?
5. What post-release checks are essential?

## Key Takeaways
- Release engineering is delivery reliability in practice.
- Objective gates and orchestration reduce failure risk.
- TPMs should own release governance rigor.
