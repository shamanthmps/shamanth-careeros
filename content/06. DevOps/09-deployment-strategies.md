# Deployment Strategies

## Executive Summary
Deployment strategies define how changes reach production while controlling risk. In interviews, senior TPM answers should compare rollout patterns and choose based on service criticality and user impact.

Strong responses include rollback behavior and observability requirements.

## Why This Matters
- TPM relevance: Deployment strategy directly affects outage probability.
- Architecture relevance: Requires compatibility with traffic routing and data migration constraints.
- Interview relevance: Frequent reliability-depth topic.

## Core Concepts
### Strategies
- Blue/Green: Switch traffic between two full environments.
- Canary: Gradual traffic shift to new version.
- Rolling: Incremental instance replacement.
- Feature flags: Runtime enable/disable independent of deploy.

### Internal Working
Deploy candidate -> validate telemetry -> increase traffic -> full rollout or rollback.

### ASCII Diagram
v1 (100%) -> v2 (5%) -> v2 (25%) -> v2 (100%)

### Trade-offs
- Canary reduces blast radius, increases rollout complexity.
- Blue/Green simplifies rollback, increases infra cost.

## Real-world Example
Critical payment service:
- Switched from full rolling deploys to canary + feature flags.
- Change failure impact reduced significantly.

## TPM Perspective
Ask:
- Which strategy matches service risk tier?
- What metrics gate each rollout phase?
- How quickly can rollback occur?

## Interview Perspective
Strong answer:
"I map deployment strategy to risk profile, using progressive exposure and metric gates. I ensure rollback is automated and tested before every high-risk rollout."

## Common Mistakes
- One deployment strategy for all services.
- No automatic rollback thresholds.
- Ignoring schema migration compatibility.

## 5-Minute Revision
- Progressive delivery is safer for critical systems.
- Rollback readiness is mandatory.
- Strategy should match business risk.

## Practice Interview Questions
1. Blue/Green vs Canary: when to choose each?
2. What metrics should block rollout?
3. How do feature flags reduce deployment risk?
4. What are rollback anti-patterns?
5. How do data migrations affect deployment strategy?

## Key Takeaways
- Deployment strategy is a reliability decision.
- Progressive rollout plus observability reduces risk.
- TPMs should enforce risk-tiered release policies.
