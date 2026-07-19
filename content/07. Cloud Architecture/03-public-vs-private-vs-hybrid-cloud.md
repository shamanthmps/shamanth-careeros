# Public vs Private vs Hybrid Cloud

## Executive Summary
Public, private, and hybrid cloud models provide different control, compliance, and scaling characteristics. In interviews, TPMs should frame this as a portfolio decision by workload sensitivity and business priorities.

Strong answers avoid ideology and focus on practical constraints.

## Why This Matters
- TPM relevance: Deployment model influences governance, spend, and delivery speed.
- Architecture relevance: Data locality, latency, and integration complexity vary by model.
- Interview relevance: Common enterprise architecture question.

## Core Concepts
### Definitions
- Public cloud: Shared provider infrastructure.
- Private cloud: Dedicated or internally managed cloud-like environment.
- Hybrid cloud: Combined public/private deployment.

### Internal Working
Workloads are placed by sensitivity, performance needs, and operational constraints.

### ASCII Model
Sensitive core workloads -> Private
Elastic variable workloads -> Public
Integration bridge -> Hybrid controls

### Trade-offs
- Public: agility and scale, less control.
- Private: control and isolation, higher cost/complexity.
- Hybrid: flexibility, higher integration overhead.

## Real-world Example
A healthcare platform kept PHI processing in private environments while analytics and burst workloads ran in public cloud.

## TPM Perspective
Ask:
- Which data classes require isolation?
- What network/data integration complexity does hybrid add?
- What is target operating model by domain?

## Interview Perspective
Strong answer:
"I segment workloads by regulatory sensitivity, latency, and scale variability, then place each in public, private, or hybrid environments with explicit integration and governance controls."

## Common Mistakes
- Treating hybrid as default without integration plan.
- Migrating sensitive data without compliance mapping.
- Ignoring operational duplication costs.

## 5-Minute Revision
- Choose cloud model by workload constraints.
- Hybrid offers flexibility but adds complexity.
- Governance and integration are first-class design concerns.

## Practice Interview Questions
1. When should hybrid cloud be preferred?
2. What risks arise in private cloud operations?
3. How do you classify workloads for placement?
4. What controls are needed for cross-cloud data flows?
5. How do you explain model choice to executives?

## Key Takeaways
- Cloud model selection is workload-specific.
- Hybrid architecture requires strong operating discipline.
- TPMs should lead placement governance and risk reviews.
