## Executive Summary

A **Distributed System** is a collection of independent computers that work together to appear as a single system to users.

Instead of relying on one powerful machine, modern applications distribute computation, storage, and networking across multiple servers to achieve scalability, reliability, and fault tolerance.

Almost every MAANG+ product—from Google Search and Amazon.com to Netflix and WhatsApp—is built on distributed systems.

As a Senior TPM, you don't need to design every component, but you must understand the trade-offs, challenges, and architectural decisions involved.

---

# Why This Matters

Distributed Systems are one of the most common technical discussion areas in Senior TPM interviews.

Typical questions include:

- What is a distributed system?
- Why don't large companies use a single server?
- What challenges arise when services are distributed?
- What trade-offs exist between consistency and availability?
- How would you coordinate multiple services?

Interviewers are assessing whether you can effectively collaborate with architects and engineering teams while making informed program decisions.

---

# Core Concepts

## Definition

A distributed system consists of multiple independent computers (nodes) that communicate over a network to achieve a common goal.

To users, the system behaves like a single application.

Examples:

- Google Search
- Amazon Marketplace
- Microsoft Teams
- Uber
- Netflix
- WhatsApp

---

## Why Distributed Systems?

A single server eventually reaches its limits.

Large-scale applications require systems that can:

- Handle millions of users
- Scale horizontally
- Survive hardware failures
- Support global users
- Process massive amounts of data

Instead of buying one bigger server, companies add more servers.

This approach is known as **horizontal scaling**.

---

## Characteristics of Distributed Systems

Well-designed distributed systems typically provide:

- Scalability
- High Availability
- Fault Tolerance
- Reliability
- Elasticity
- Geographic Distribution

Each of these characteristics will be explored in later lessons.

---

## Simple Example

Consider an e-commerce platform.

Instead of one application handling everything:

```
                Customer
                    │
          ┌─────────┴─────────┐
          │                   │
     Web Application     Mobile App
                │
          API Gateway
                │
 ┌────────┬────────┬─────────┐
 │        │        │         │
Catalog  Orders  Payments  Inventory
Service  Service  Service   Service
```

Each service is developed, deployed, and scaled independently, but together they deliver a seamless customer experience.

---

## Benefits

| Benefit | Business Value |
|----------|----------------|
| Scalability | Support more users without redesigning the system |
| Fault Tolerance | One failure doesn't bring down the entire application |
| High Availability | Better uptime and customer experience |
| Independent Scaling | Scale only the services that need more capacity |
| Faster Development | Teams can work independently on different services |

---

## Challenges

Distributed systems introduce new complexities:

- Network failures
- Service communication
- Data consistency
- Latency
- Partial failures
- Distributed transactions
- Monitoring and debugging

These challenges explain why distributed systems require careful architectural decisions.

---

# Real-world Example

Imagine you're leading the launch of a global food delivery platform.

During peak dinner hours, order traffic increases by 10×.

With a single server, the application slows down or crashes.

With a distributed architecture:

- Order Service scales independently.
- Payment Service handles increased transaction volume.
- Notification Service sends delivery updates.
- Inventory Service processes restaurant availability.

Customers experience a responsive application even during peak demand because the workload is distributed across multiple services.

---

# TPM Perspective

A Senior TPM doesn't need to implement distributed systems but should understand:

- Why teams choose distributed architectures.
- The trade-offs involved.
- How architectural decisions affect delivery timelines, risks, and dependencies.
- The coordination required across multiple services and teams.

This knowledge enables meaningful conversations with engineering leaders and helps identify program risks early.

---

# Interview Perspective

Interviewers are not looking for textbook definitions.

A strong answer is:

> "A distributed system is a collection of independent computers working together as one system. Organizations adopt distributed systems to improve scalability, availability, and fault tolerance. While they solve large-scale business problems, they also introduce challenges like consistency, latency, and service coordination."

This demonstrates both technical understanding and business context.

---

# Common Mistakes

- Assuming distributed systems are only about microservices.
- Confusing horizontal scaling with vertical scaling.
- Ignoring network communication challenges.
- Believing distributed systems eliminate failures—they shift how failures are managed.
- Focusing only on technology instead of business benefits.

---

# 5-Minute Revision

### Remember:

- Multiple computers
- One logical system
- Horizontal scaling
- High availability
- Fault tolerance
- Independent services
- Network communication
- Trade-offs

---

# Practice Interview Questions

1. What is a distributed system?
2. Why do companies build distributed systems?
3. What problems do distributed systems solve?
4. What new challenges do they introduce?
5. Give an example of a distributed system you've worked with.

---

# Key Takeaways

- A distributed system consists of multiple independent computers working together as one application.
- The primary goals are scalability, availability, reliability, and fault tolerance.
- Distributed systems introduce new challenges such as latency, consistency, and coordination.
- Senior TPMs should understand the architectural trade-offs and their impact on program execution rather than low-level implementation details.
