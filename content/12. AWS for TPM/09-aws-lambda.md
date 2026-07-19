# AWS Lambda

## Executive Summary
Lambda is AWS's serverless compute — code runs without managing servers, scaling automatically, and charging only for execution time. For TPMs, Lambda represents the simplicity extreme: you write code and AWS handles infrastructure completely.

## Why This Matters
- TPM relevance: Lambda enables fast iteration on certain workloads without infrastructure overhead.
- Interview relevance: Serverless architecture is increasingly common; Lambda literacy is expected.

## Core Concepts
### Lambda Basics
- Event-driven: Triggered by S3, API Gateway, SQS, DynamoDB, etc.
- Stateless: Each invocation is independent.
- Auto-scaling: Automatic and infinite; you can't run out of capacity.
- Cost model: Pay per invocation and GB-seconds of execution.

### Constraints
- Timeout: 15-minute maximum execution time (batch jobs unsuitable).
- Memory: 128 MB to 10 GB (drives CPU and network).
- Package size: 50 MB (larger code requires container images).

### Internal Working
Event -> Lambda Trigger -> Function invocation -> Execution -> Response/Logging.

### ASCII Diagram
API Request -> API Gateway -> Lambda -> Database/S3 -> Response

### Trade-offs
- Simplicity (no servers) vs limited execution time (no long jobs).
- Cost-per-invocation efficiency vs cold start latency.

## Real-world Example
A batch job running on EC2 24/7 cost $300/month for 1% utilization. Moving to Lambda reduced it to $50/month (pay only when running) with better performance (parallel invocations instead of sequential).

## TPM Perspective
Ask:
- Is the workload event-driven and stateless?
- How long does execution take? (>15 min means not Lambda)
- What is the expected invocation rate? (Cost model matters)
- Are there cold start latency requirements?

## Interview Perspective
Strong answer:
"I use Lambda for event-driven workloads: API backends, data processing, scheduled tasks. Cold starts are a consideration but usually acceptable. For workloads that exceed 15 minutes or need persistent state, I fall back to EC2 or ECS."

## Common Mistakes
- Trying to run long-running processes in Lambda (will timeout).
- Not accounting for cold start latency in latency-critical workloads.
- Inefficient code that results in high execution time and cost.

## 5-Minute Revision
- Lambda: serverless, event-driven, auto-scaling, per-invocation cost.
- 15-minute timeout, 10 GB max memory.
- Cold starts are usually acceptable; duration drives cost.
- Pair with API Gateway for web applications.

## Practice Interview Questions
1. When would you choose Lambda over EC2?
2. How do you handle cold start latency?
3. How would you implement a long-running job that exceeds Lambda timeout?
4. How do you minimize Lambda costs for high-volume workloads?
5. How does Lambda scale? Can it run out of capacity?

## Key Takeaways
- Lambda is the simplicity extreme: no infrastructure management.
- Event-driven architecture patterns leverage Lambda best.
- Cost model favors bursty workloads, not constant baseline load.
