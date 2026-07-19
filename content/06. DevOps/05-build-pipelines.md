# Build Pipelines

## Executive Summary
Build pipelines convert source code into validated, deployable artifacts. In TPM interviews, this topic evaluates your ability to design fast, reliable, and secure build systems.

Strong answers include deterministic builds, caching, parallelization, and artifact integrity.

## Why This Matters
- TPM relevance: Build instability blocks all downstream delivery.
- Architecture relevance: Monorepo/multirepo and dependency strategy affect build complexity.
- Interview relevance: Practical DevOps depth topic.

## Core Concepts
### Definitions
- Deterministic build: Same input produces same artifact.
- Build cache: Reusing previous outputs to reduce build time.
- Artifact repository: Secure storage of versioned build outputs.
- Build provenance: Traceability of source, dependencies, and build steps.

### Internal Working
Source -> Dependency resolution -> Compile/package -> Static checks/tests -> Artifact publish.

### ASCII Diagram
Code -> Build Agent -> Tests -> Artifact Registry -> Deployment

### Trade-offs
- Aggressive caching improves speed but can hide stale dependency issues.
- Broad parallelization improves throughput but increases infra cost.

## Real-world Example
Microservice fleet with slow builds:
- Added incremental build and dependency cache strategy.
- Build time reduced significantly and developer feedback loop improved.

## TPM Perspective
Ask:
- What is p50/p95 build duration?
- What are top causes of build failure?
- Are artifacts signed and traceable?

## Interview Perspective
Strong answer:
"I design build pipelines for repeatability and speed, with deterministic builds, dependency caching, parallel stages, and artifact provenance to support secure releases."

## Common Mistakes
- Non-deterministic builds.
- No artifact immutability policy.
- Build scripts differing by environment.

## 5-Minute Revision
- Build quality is pipeline quality.
- Determinism + speed + traceability are the core goals.
- Artifact governance is part of release security.

## Practice Interview Questions
1. How do you reduce build time safely?
2. Why are deterministic builds important?
3. What should artifact repositories enforce?
4. How do you identify flaky build steps?
5. How do build metrics inform roadmap priorities?

## Key Takeaways
- Build pipelines are foundational DevOps infrastructure.
- Fast and reproducible builds unlock delivery velocity.
- TPMs should track build reliability as a core KPI.
