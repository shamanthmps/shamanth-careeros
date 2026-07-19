# Containers (Docker)

## Executive Summary
Containers package applications and dependencies into portable units that run consistently across environments. In interviews, TPMs should explain container value in delivery consistency, scaling, and operational control.

Strong answers include image hygiene, runtime isolation, and orchestration integration.

## Why This Matters
- TPM relevance: Containers reduce environment drift and accelerate releases.
- Architecture relevance: Container boundaries influence deployment and scaling patterns.
- Interview relevance: Standard DevOps topic in system design and execution rounds.

## Core Concepts
### Definitions
- Container: Isolated runtime package sharing host kernel.
- Docker image: Immutable template for container instances.
- Container registry: Repository for versioned images.
- Base image hardening: Security and size optimization of image foundation.

### Internal Working
Dockerfile -> Build image -> Push to registry -> Deploy container runtime.

### ASCII Diagram
Code -> Docker Build -> Image Registry -> Runtime Cluster

### Trade-offs
- Portability and consistency vs image management complexity.
- Larger images simplify dependencies but slow startup and increase attack surface.

## Real-world Example
Legacy app deployment inconsistencies:
- Standardized on containerized builds.
- Eliminated "works on my machine" issues across environments.
- Improved release stability.

## TPM Perspective
Ask:
- Are images immutable and versioned?
- What vulnerability scanning exists in build pipeline?
- Are startup time and image size monitored?

## Interview Perspective
Strong answer:
"I use containers for reproducible deployment, enforce image immutability and security scanning, and optimize image size/startup to improve both reliability and cost."

## Common Mistakes
- Running mutable containers in production.
- No image vulnerability scanning.
- Oversized base images and root user runtime.

## 5-Minute Revision
- Containers provide environment consistency.
- Image governance is critical for security and reliability.
- Optimize for immutability, size, and startup efficiency.

## Practice Interview Questions
1. Why containers over VM-based deployments?
2. How do you secure container images?
3. What is immutable infrastructure in container context?
4. How do image sizes impact operations?
5. What metrics track container platform health?

## Key Takeaways
- Containers are core modernization enablers.
- Governance and security controls are non-optional.
- TPMs should treat image lifecycle as product-critical infrastructure.
