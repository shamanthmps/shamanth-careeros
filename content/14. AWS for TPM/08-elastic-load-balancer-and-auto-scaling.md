# Elastic Load Balancer & Auto Scaling

## Executive Summary
ELB (Elastic Load Balancer) distributes traffic across instances; Auto Scaling adjusts capacity based on demand. Together they are the foundation of resilient, scalable architectures. For TPMs, this is the mechanism for fault tolerance and cost optimization at scale.

## Why This Matters
- TPM relevance: Load balancing and auto-scaling prevent single points of failure and waste.
- Interview relevance: High-scale architecture fundamentals.

## Core Concepts
### Load Balancer Types
- Application LB (ALB): Layer 7 (HTTP/HTTPS), path and hostname-based routing.
- Network LB (NLB): Layer 4 (TCP/UDP), ultra-high performance, millions of requests/sec.
- Classic LB: Legacy, not recommended for new deployments.

### Auto Scaling
- Launch template: Defines the instance configuration.
- Auto Scaling Group: Min, desired, max capacity targets.
- Scaling policies: How to adjust capacity (target tracking, step, simple).

### Internal Working
Users -> ELB (distributes traffic) -> Auto Scaling Group (adjusts capacity) -> Instances.

### ASCII Diagram
Traffic Spike -> ELB -> Auto Scaling Group scales from 3 to 10 instances -> Cost optimized to demand

### Trade-offs
- Always-on instances (cost predictable) vs auto-scaled (cost variable).
- Simple scaling policies (fast, crude) vs target tracking (accurate, adaptive).

## Real-world Example
A service provisioned for peak capacity was idle 70% of the time. Implementing Auto Scaling reduced average cost by 65% with zero manual intervention, and actually improved response time by maintaining headroom.

## TPM Perspective
Ask:
- Is the workload constant baseline or variable?
- What is the minimum capacity required for SLA?
- What are the scaling triggers (CPU, custom metrics)?
- What is the cost of scaling delay vs the cost of over-provisioning?

## Interview Perspective
Strong answer:
"I use ALB for web applications with path-based routing, pair it with Auto Scaling Groups targeting 70% CPU utilization, and set min/max capacity based on SLA and cost constraints. This gives me resilience and cost efficiency without manual intervention."

## Common Mistakes
- No Auto Scaling, just provisioning for peak.
- Scaling too slowly (user experience degrades during spike).
- Not setting health checks properly (unhealthy instances remain in rotation).

## 5-Minute Revision
- ELB distributes traffic; Auto Scaling adjusts capacity.
- ALB for HTTP/HTTPS; NLB for ultra-high performance.
- Target tracking policies are the most reliable scaling mechanism.
- Min/max capacity enforces SLA and cost boundaries.

## Practice Interview Questions
1. How would you configure an Auto Scaling Group for a web service?
2. What is the difference between ALB and NLB?
3. How do you choose between scaling policies?
4. What happens when Auto Scaling hits max capacity?
5. How do you handle scale-down gracefully (connection draining)?

## Key Takeaways
- ELB + Auto Scaling is the foundation of cloud-native resilience.
- Target tracking policies adapt to demand automatically.
- Health checks are critical; misconfigured checks hide failures.
