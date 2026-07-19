# ECS, EKS & Fargate

## Executive Summary
ECS (Elastic Container Service) and EKS (Elastic Kubernetes Service) are container orchestration platforms. Fargate is a serverless container runtime. For TPMs, these enable deployment of microservices at scale without managing the underlying infrastructure.

## Why This Matters
- TPM relevance: Containers are the dominant deployment pattern for microservices.
- Interview relevance: Container and Kubernetes knowledge is increasingly expected.

## Core Concepts
### ECS
- Task: A containerized application instance.
- Service: Manages multiple task instances, auto-scaling, load balancing.
- Cluster: The compute infrastructure (EC2 or Fargate).

### EKS
- Kubernetes: Open-source orchestration (AWS managed).
- Pods: Smallest deployable unit (one or more containers).
- Deployments: Manage replicas and rolling updates.

### Fargate
- Serverless container runtime: No underlying EC2 instances to manage.
- Cost: Pay per CPU/memory allocated to containers.

### Internal Working
Container image -> Task definition -> Service (multiple replicas) -> Load Balancer -> Users.

### ASCII Diagram
Container Image -> ECR Registry -> ECS/EKS -> Fargate (serverless) or EC2 (managed) -> Load Balancer

### Trade-offs
- ECS simplicity vs Kubernetes flexibility.
- Fargate serverless simplicity vs EC2 cost optimization and flexibility.

## Real-world Example
A monolithic application deployed on EC2 required manual scaling. Containerizing and deploying to ECS with Auto Scaling enabled automatic scale-to-demand, reducing average cost by 40% and eliminating manual scaling work.

## TPM Perspective
Ask:
- What is the deployment pattern? (Single app vs microservices?)
- Is Kubernetes complexity worth the flexibility?
- Should we use Fargate (simple, more expensive) or EC2 (complex, cheaper)?
- How do we handle database migrations in containerized systems?

## Interview Perspective
Strong answer:
"I start with ECS for simplicity, especially paired with Fargate to eliminate cluster management. Kubernetes/EKS is worth the complexity when I have a distributed team or need Kubernetes's advanced orchestration features like complex networking or multi-cloud deployment."

## Common Mistakes
- Over-architecturing with Kubernetes when ECS would suffice.
- No container image versioning or registry cleanup.
- Not understanding container startup time (affects scaling latency).

## 5-Minute Revision
- ECS: AWS container orchestration (simpler).
- EKS: AWS Kubernetes (flexible, complex).
- Fargate: Serverless container runtime.
- Container registries: ECR (AWS) or Docker Hub.

## Practice Interview Questions
1. When would you choose ECS vs EKS?
2. How do you handle stateful services in containers?
3. What is the difference between a task and a service in ECS?
4. How does container image versioning work in production?
5. How would you handle zero-downtime deployments with containers?

## Key Takeaways
- Containers enable fast, repeatable deployments.
- ECS + Fargate is the simplest path to containerized microservices.
- Kubernetes is powerful but complex; use it only when you need it.
