# Amazon EC2

## Executive Summary
EC2 (Elastic Compute Cloud) is AWS's virtual machine service. For TPMs, EC2 is the workhorse compute option when you need flexibility, but it also requires operational investment. Understanding EC2 is understanding the trade-off between simplicity and control.

## Why This Matters
- TPM relevance: EC2 capacity planning affects program timeline and cost.
- Interview relevance: Common in architecture and scaling questions.

## Core Concepts
### Instance Types
- General Purpose (t3, m5): Balanced compute/memory/network for most workloads.
- Compute Optimized (c5): High CPU for batch processing, scientific computing.
- Memory Optimized (r5): High RAM for in-memory caches, databases.
- GPU Instances (p3, g4): Machine learning, graphics rendering.

### Pricing Models
- On-Demand: Pay per hour, no commitment, highest cost.
- Reserved Instances (RI): Commit to 1 or 3 years, 30-70% discount.
- Spot Instances: Spare capacity at 70-90% discount, but can be reclaimed anytime.
- Savings Plans: Flexible commitment across instance families.

### Internal Working
Choose instance type -> Pick availability -> Select OS -> Launch -> Connect via SSH -> Manage.

### ASCII Diagram
Application -> EC2 Fleet (Auto Scaling Group) -> Load Balancer -> User

### Trade-offs
- On-Demand simplicity vs Reserved Instance savings.
- Large instances fewer ops vs many small instances for resilience.
- General purpose simplicity vs optimized instances for specific workloads.

## Real-world Example
A team paid on-demand rates ($500/day) for a constant baseline load. Switching to Reserved Instances reduced it to $150/day — $127K annual savings for a 5-minute decision.

## TPM Perspective
Ask:
- Is the workload constant baseline or variable? (RI vs On-Demand vs Spot)
- What instance type optimizes for the workload? (CPU, memory, network?)
- How many instances and what's the operational overhead?

## Interview Perspective
Strong answer:
"EC2 is the flexible option when you need control. I think about instance type and pricing model together: Reserved Instances for predictable baseline, On-Demand for variable, Spot for batch jobs. I pair EC2 with Auto Scaling to avoid manual capacity management."

## Common Mistakes
- Defaulting to on-demand rates without considering RIs.
- Over-provisioning for peak rather than auto-scaling to it.
- Using EC2 when serverless (Lambda) would be simpler.

## 5-Minute Revision
- EC2 = virtual machines with instance type and pricing flexibility.
- Reserved Instances save 30-70% for predictable workloads.
- Auto Scaling adjusts capacity based on demand.

## Practice Interview Questions
1. How would you size an EC2 fleet for a variable workload?
2. When would you choose Reserved Instances over On-Demand?
3. How does Auto Scaling work with EC2?
4. What are the operational considerations of self-managing EC2?
5. How would you migrate from on-demand to reserved instances?

## Key Takeaways
- EC2 offers flexibility at the cost of operational complexity.
- Pricing model choice is as important as instance type.
- Pair EC2 with Auto Scaling to manage variable demand.
