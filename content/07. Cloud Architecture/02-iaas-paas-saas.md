# IaaS, PaaS & SaaS

## Executive Summary
IaaS, PaaS, and SaaS represent increasing abstraction levels in cloud consumption. Interviewers expect TPMs to explain selection trade-offs in control, speed, compliance, and operational burden.

Strong answers are context-driven by workload and organizational maturity.

## Why This Matters
- TPM relevance: Abstraction level affects team velocity and operating cost.
- Architecture relevance: Platform control and customization options differ widely.
- Interview relevance: Common cloud strategy question.

## Core Concepts
### Definitions
- IaaS: Virtualized infrastructure (compute, storage, networking).
- PaaS: Managed runtime/platform for application deployment.
- SaaS: Ready-to-use software service.

### Internal Working
Higher abstraction shifts responsibility from customer to provider.

### ASCII Spectrum
IaaS -> PaaS -> SaaS
More control --------------------> Less control
More ops effort ----------------> Less ops effort

### Trade-offs
- IaaS: maximum control, maximum operational effort.
- PaaS: faster delivery, less low-level customization.
- SaaS: fastest adoption, least architectural flexibility.

## Real-world Example
A finance team used SaaS for CRM, PaaS for internal APIs, and IaaS for regulated workloads requiring custom hardening.

## TPM Perspective
Ask:
- What level of customization is truly required?
- Which compliance controls require lower-level access?
- What operational team capacity exists?

## Interview Perspective
Strong answer:
"I choose abstraction level by balancing control needs with delivery speed and compliance obligations, often mixing IaaS, PaaS, and SaaS across domains rather than enforcing one model globally."

## Common Mistakes
- Assuming PaaS always means vendor lock-in is unacceptable.
- Using IaaS everywhere by default.
- Ignoring total operational ownership cost.

## 5-Minute Revision
- IaaS for control-heavy workloads.
- PaaS for faster app delivery.
- SaaS for non-differentiating capabilities.

## Practice Interview Questions
1. How do you choose between IaaS and PaaS?
2. When is SaaS a better strategic choice?
3. What compliance scenarios favor IaaS?
4. How do you compare TCO across models?
5. Can mixed abstraction strategy work at scale?

## Key Takeaways
- Abstraction choice is a strategic architecture decision.
- Operational capacity and compliance are critical inputs.
- TPMs should optimize for value, not control for its own sake.
