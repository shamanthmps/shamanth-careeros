# Cloud Fundamentals

## Executive Summary
Cloud architecture is about designing systems that are scalable, resilient, secure, and cost-aware using managed infrastructure. In TPM interviews, cloud fundamentals are evaluated as decision quality under constraints, not provider-specific trivia.

Strong senior answers connect technical architecture to business outcomes: reliability, speed of delivery, and unit economics.

## Why This Matters
- TPM relevance: Cloud decisions impact roadmap speed, compliance, and cost structure.
- Architecture relevance: Service decomposition and platform choice depend on cloud capabilities.
- Interview relevance: Core topic in system design and execution rounds.

## Core Concepts
### Definitions
- Cloud computing: On-demand access to compute, storage, and services.
- Elasticity: Ability to scale resources dynamically.
- Managed service: Provider operates infrastructure and core runtime.
- Shared responsibility: Security and operations ownership split between provider and customer.

### Internal Working
Application workloads run on cloud services across regions/zones with APIs for provisioning, scaling, and monitoring.

### ASCII Diagram
Users -> Edge -> Cloud Services -> Data Stores

### Trade-offs
- Managed speed vs platform lock-in.
- Elastic scale vs cost unpredictability.

## Real-world Example
A SaaS startup moved from fixed on-prem servers to cloud autoscaling. Availability improved and launch cycles shortened, but cost controls had to be introduced quickly.

## TPM Perspective
Ask:
- Which workloads need strict SLA guarantees?
- What shared responsibility controls are in place?
- How are cost and usage governed by team?

## Interview Perspective
Strong answer:
"I treat cloud as a strategic operating model: select services by workload, define reliability and security controls early, and manage cost as a first-class architecture constraint."

## Common Mistakes
- Choosing services by hype rather than workload fit.
- Ignoring shared responsibility boundaries.
- No cloud cost visibility model.

## 5-Minute Revision
- Cloud architecture = speed + resilience + governance.
- Match services to workload needs.
- Include security and cost controls from day one.

## Practice Interview Questions
1. What cloud principles matter most for TPMs?
2. How do you balance speed and lock-in risk?
3. What is shared responsibility in practice?
4. How do you govern cloud usage across teams?
5. What cloud anti-patterns do you see most?

## Key Takeaways
- Cloud fundamentals are architecture fundamentals at scale.
- Workload-fit and governance outperform provider feature memorization.
- TPMs should align cloud choices with business constraints.
