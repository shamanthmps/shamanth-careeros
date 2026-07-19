---
title: "Scalability"
description: "Learn how modern systems scale to support millions of users and understand the trade-offs involved."
lesson: 2
module: "Distributed Systems"
difficulty: "Beginner"
estimated_time: "20 minutes"
---

# Scalability

## Executive Summary

Scalability is a system's ability to handle increasing workloads without degrading performance.

Every successful technology company eventually faces the same question:

> **"What happens if our users grow 10x tomorrow?"**

Scalable systems are designed to accommodate growth by efficiently utilizing additional resources rather than requiring complete redesigns.

As a TPM, understanding scalability helps you participate in architecture discussions, estimate infrastructure needs, identify program risks, and make informed trade-off decisions.

---

# Why This Matters

Scalability is one of the most common topics in System Design and TPM interviews.

Typical questions include:

- How would you scale a system?
- What's the difference between vertical and horizontal scaling?
- When would you add more servers instead of upgrading existing ones?
- What bottlenecks usually appear as traffic grows?
- How does scalability influence architecture decisions?

Interviewers want to know whether you understand **why systems evolve**, not just how they are implemented.

---

# Core Concepts

## What is Scalability?

Scalability is the ability of a system to support increased users, requests, or data while maintaining acceptable performance.

A scalable system should:

- Handle increasing traffic
- Maintain reliability
- Preserve user experience
- Avoid major architectural redesigns

---

## Vertical Scaling (Scale Up)

Vertical scaling means increasing the capacity of a single machine.

Examples:

- More CPU
- More Memory
- Faster Storage

```
Application
     │
 Bigger Server
```

### Advantages

- Easy to implement
- Minimal application changes
- Suitable for smaller systems

### Limitations

- Hardware limits
- Expensive upgrades
- Single point of failure

---

## Horizontal Scaling (Scale Out)

Horizontal scaling means adding more machines to distribute the workload.

```
          Load Balancer
          /     |     \
      Server1 Server2 Server3
```

Instead of buying a larger server, organizations add more servers.

This is the preferred approach for cloud-native applications.

### Advantages

- Almost unlimited growth
- Higher availability
- Better fault tolerance
- Lower infrastructure risk

### Challenges

- Data consistency
- Load balancing
- Distributed communication
- Operational complexity

---

## Which One Do MAANG Companies Use?

Most large technology companies primarily rely on **horizontal scaling** because it provides:

- Better resilience
- Global deployment
- Elastic infrastructure
- Cost optimization

Vertical scaling is still used for specific workloads, such as high-performance databases or specialized processing systems.

---

## Common Scalability Bottlenecks

Even well-designed systems encounter bottlenecks.

Typical bottlenecks include:

| Component | Example Issue |
|-----------|---------------|
| Database | Slow queries |
| API | High request volume |
| Network | Bandwidth saturation |
| Cache | Low hit ratio |
| Storage | Disk I/O limitations |
| Third-party APIs | Rate limits |

A TPM should recognize these bottlenecks early because they often become delivery risks.

---

## Scaling Isn't Just About Servers

Scalability also applies to:

- Databases
- Storage
- Message queues
- Engineering teams
- Deployment pipelines
- Monitoring systems

As systems grow, every layer must scale—not just compute resources.

---

# Real-world Example

## E-commerce Sale Event

An online retailer normally processes **5,000 requests per minute**.

During a festival sale, traffic increases to **100,000 requests per minute**.

Instead of upgrading one server, the architecture automatically:

- Adds additional application servers.
- Distributes traffic using a load balancer.
- Serves frequently accessed products from cache.
- Scales databases with read replicas.
- Processes non-critical tasks asynchronously.

Customers continue shopping without noticing the increase in demand.

This is scalability in action.

---

# TPM Perspective

A Senior TPM isn't responsible for implementing scaling strategies, but should ask questions such as:

- Can the platform support projected growth?
- Which component becomes the bottleneck first?
- What dependencies must scale together?
- Have scalability risks been tested before launch?
- Is there a rollback plan if scaling fails?

Understanding these questions helps prevent costly production failures.

---

# Interview Perspective

A strong interview answer should distinguish between the two approaches:

> "Vertical scaling increases the capacity of a single machine, while horizontal scaling distributes workload across multiple machines. Modern cloud platforms typically favor horizontal scaling because it improves scalability, availability, and fault tolerance, although it introduces additional architectural complexity."

---

# Common Mistakes

- Assuming adding servers automatically solves performance issues.
- Confusing scalability with performance.
- Ignoring database bottlenecks.
- Forgetting that scaling increases operational complexity.
- Believing horizontal scaling is always the right answer.

---

# 5-Minute Revision

## Vertical vs Horizontal Scaling

| Vertical Scaling | Horizontal Scaling |
|------------------|--------------------|
| Bigger server | More servers |
| Easier | More complex |
| Limited growth | Nearly unlimited growth |
| Lower availability | Higher availability |
| Single point of failure | Fault tolerant |

---

## Interview Cheat Sheet

When discussing scalability, think about:

1. Traffic growth
2. Bottlenecks
3. Load balancing
4. Caching
5. Database scaling
6. Fault tolerance
7. Monitoring

---

# Practice Interview Questions

1. What is scalability?
2. Explain vertical and horizontal scaling.
3. Why do cloud-native applications prefer horizontal scaling?
4. What are common scalability bottlenecks?
5. How would you prepare a platform for a 10x increase in traffic?

---

# Key Takeaways

- Scalability is the ability to support increasing workloads without sacrificing performance.
- Vertical scaling increases the capacity of a single machine, while horizontal scaling distributes work across multiple machines.
- Most large-scale systems use horizontal scaling for better availability and resilience.
- Successful scaling requires addressing bottlenecks across compute, storage, databases, networking, and supporting services.
- TPMs should understand scalability trade-offs to make better program, architecture, and risk management decisions.

```