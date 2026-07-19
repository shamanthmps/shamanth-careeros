# CI/CD

## Executive Summary
CI/CD automates integration, testing, and deployment to reduce lead time and release risk. Interviewers expect TPMs to understand not just mechanics, but governance and reliability implications.

Strong answers include pipeline architecture, quality gates, and rollback strategy.

## Why This Matters
- TPM relevance: CI/CD maturity strongly correlates with delivery performance.
- Architecture relevance: Testability and deployability must be designed into services.
- Interview relevance: Frequent practical topic in DevOps interviews.

## Core Concepts
### Definitions
- CI: Automated build and test on code integration.
- CD: Automated release/deployment workflow.
- Pipeline gate: Validation stage that can block promotion.
- Artifact: Versioned deployable output.

### Internal Working
Commit -> Build -> Unit/Integration Tests -> Artifact -> Deploy Stage -> Production

### ASCII Diagram
Git Push -> CI -> Artifact Registry -> CD -> Environments

### Trade-offs
- More gates improve safety but increase cycle time.
- Fewer gates improve speed but raise defect risk.

## Real-world Example
A consumer app introduced parallelized test stages and canary deployment. Deployment frequency increased while production incidents decreased.

## TPM Perspective
Ask:
- Which tests are mandatory vs optional?
- How long is pipeline feedback cycle?
- What conditions trigger automatic rollback?

## Interview Perspective
Strong answer:
"I design CI/CD for fast feedback and safe promotion, with deterministic builds, risk-based test gates, progressive rollout, and automated rollback triggers."

## Common Mistakes
- Pipeline sprawl with inconsistent standards.
- Slow CI feedback reducing developer productivity.
- Deploying without verified rollback.

## 5-Minute Revision
- CI/CD = automation + governance.
- Fast feedback is as important as deployment automation.
- Progressive delivery reduces blast radius.

## Practice Interview Questions
1. What makes a CI pipeline high quality?
2. How do you speed up slow pipelines safely?
3. What gates are essential before production?
4. How do canary and blue/green differ?
5. How should rollback be automated?

## Key Takeaways
- CI/CD is core delivery infrastructure.
- Speed and safety must be co-designed.
- TPMs should define measurable pipeline SLAs.
