# Compute Services

## Executive Summary
Compute services execute application workloads in cloud environments across VMs, containers, and serverless runtimes. Interviewers expect TPMs to choose compute models by performance, scaling behavior, and operational control.

Strong answers include lifecycle, orchestration, and cost implications.

## Why This Matters
- TPM relevance: Compute choice affects release velocity and run cost.
- Architecture relevance: Service architecture and runtime model are tightly coupled.
- Interview relevance: Foundational cloud design topic.

## Core Concepts
### Definitions
- VM compute: Full OS-level virtualized instances.
- Container compute: Lightweight packaged workloads with orchestration.
- Serverless compute: Event-driven managed runtime with no server management.

### Internal Working
Workload requests route to compute layer, which scales based on policy and traffic profile.

### ASCII Diagram
Traffic -> Compute Layer (VM/Container/Serverless) -> Data Services

### Trade-offs
- VMs: high control, higher ops overhead.
- Containers: balance control and portability.
- Serverless: fast iteration, potential cold start and lock-in considerations.

## Real-world Example
A media processing service used containers for steady baseline load and serverless for burst event processing.

## TPM Perspective
Ask:
- What is workload pattern: steady, bursty, event-driven?
- What startup latency is acceptable?
- What ops team skills exist for runtime management?

## Interview Perspective
Strong answer:
"I match compute model to workload profile and team capability, often combining models to optimize baseline efficiency and burst elasticity while maintaining operational consistency."

## Common Mistakes
- One compute model for all workloads.
- Ignoring cold start and autoscaling behavior.
- No runtime standardization policy.

## 5-Minute Revision
- Compute choice is workload-shape dependent.
- Blend compute models when needed.
- Include operational ownership in design decisions.

## Practice Interview Questions
1. VM vs container vs serverless: how do you choose?
2. What workloads fit serverless best?
3. How do you manage compute costs under burst traffic?
4. How do you standardize runtime security across models?
5. What migration path exists between compute models?

## Key Takeaways
- Compute strategy should be deliberate and mixed where justified.
- Team capability and SLA constraints are core inputs.
- TPMs should prevent runtime sprawl through governance.
