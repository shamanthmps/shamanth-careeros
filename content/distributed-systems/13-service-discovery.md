---
title: "Service Discovery"
description: "Learn how microservices locate and communicate with each other in dynamic cloud environments."
lesson: 13
module: "Distributed Systems"
difficulty: "Intermediate"
estimated_time: "20 minutes"
---

# Service Discovery

## Executive Summary

In a modern cloud environment, servers are constantly being:

- Created
- Destroyed
- Scaled
- Replaced

Their IP addresses frequently change.

So how does one microservice know where another service is running?

The answer is **Service Discovery**.

Service Discovery allows services to automatically find and communicate with each other without hardcoding network locations.

It is a foundational capability in Kubernetes, cloud platforms, and large-scale microservices architectures.

---

# Why This Matters

Service Discovery is a common discussion topic during System Design interviews.

Typical questions include:

- How do microservices communicate?
- Why can't services use static IP addresses?
- What happens when new servers are added?
- How does Kubernetes find services?
- What role does a Service Registry play?

Interviewers want to see that you understand how modern cloud-native systems operate.

---

# Core Concepts

## The Problem

Imagine an Order Service calling the Payment Service.

Initially:

```
Payment Service

10.1.1.25
```

Later,

Auto Scaling creates a new instance.

Now:

```
10.1.4.18
```

If Order Service stores the old IP,

communication fails.

Hardcoding addresses doesn't work in distributed systems.

---

## What is Service Discovery?

Service Discovery enables applications to locate services dynamically.

Instead of remembering IP addresses,

services ask a registry:

```
Where is Payment Service?
```

The registry responds with the current location.

---

## Service Registry

A Service Registry maintains information about running services.

Example:

| Service | Address |
|----------|----------|
| Orders | 10.1.2.15 |
| Payments | 10.1.4.18 |
| Inventory | 10.1.7.11 |

Whenever services start or stop,

the registry is updated automatically.

---

## Service Registration

When a service starts:

```
Payment Service

↓

Registers

↓

Service Registry
```

When it shuts down:

```
Payment Service

↓

Removed

↓

Registry Updated
```

Clients always receive valid endpoints.

---

## Service Lookup

When Order Service needs Payment Service:

```
Order Service

↓

Service Registry

↓

Payment Service Address

↓

Call Payment Service
```

No hardcoded IPs are required.

---

## Client-Side Discovery

The client queries the registry directly.

```
Order Service

↓

Registry

↓

Payment Service

↓

Request
```

Advantages:

- Flexible
- Popular in some distributed systems

Disadvantages:

- Clients become more complex.

---

## Server-Side Discovery

Clients send requests to a Load Balancer.

```
Client

↓

Load Balancer

↓

Registry

↓

Available Service

↓

Request
```

Advantages:

- Simpler clients
- Centralized routing

This approach is common in Kubernetes and cloud environments.

---

# Real-world Example

## Ride-Sharing Platform

Thousands of Driver Services are running globally.

Auto Scaling continuously creates and removes instances.

Instead of maintaining a list of server addresses,

Ride Service simply requests:

```
Find Driver Service
```

The Service Registry returns a healthy instance.

This enables continuous scaling without application changes.

---

# TPM Perspective

Questions a TPM should ask:

- How do services discover one another?
- What happens when an instance fails?
- Is health checking integrated with discovery?
- Can the platform support Auto Scaling?
- Is the registry itself highly available?

Understanding these questions helps ensure production resilience.

---

# Interview Perspective

A strong interview response is:

> "Service Discovery enables services to dynamically locate one another in environments where instances are constantly changing. A Service Registry tracks available service instances, allowing applications to communicate without hardcoded addresses. This is essential for cloud-native and microservices architectures."

---

# Common Mistakes

- Hardcoding service IP addresses.
- Assuming service locations never change.
- Ignoring health checks.
- Treating DNS and Service Discovery as identical concepts.
- Forgetting that the Service Registry must also be highly available.

---

# 5-Minute Revision

## Components

```
Service

↓

Registers

↓

Service Registry

↓

Client Lookup

↓

Communication
```

---

## Discovery Models

| Client-Side | Server-Side |
|--------------|-------------|
| Client queries registry | Load Balancer queries registry |
| More flexible | Simpler clients |
| More client logic | Centralized routing |

---

## Common Technologies

- Kubernetes Services
- Consul
- Eureka
- etcd
- ZooKeeper

For TPM interviews, focus on the concept rather than memorizing specific tools.

---

## Interview Cheat Sheet

Remember:

- Dynamic Infrastructure
- Service Registry
- Registration
- Discovery
- Health Checks
- Auto Scaling

---

# Practice Interview Questions

1. What problem does Service Discovery solve?
2. What is a Service Registry?
3. Compare Client-Side and Server-Side Discovery.
4. Why can't microservices use static IP addresses?
5. How does Kubernetes enable Service Discovery?

---

# Key Takeaways

- Service Discovery enables services to locate one another dynamically.
- A Service Registry maintains the current locations of running service instances.
- Dynamic discovery supports Auto Scaling, failover, and cloud-native architectures.
- Health checks ensure only healthy instances receive traffic.
- Senior TPMs should understand Service Discovery because it underpins scalable, resilient microservices deployments.
```

### Next Lesson (High ROI)
**`14-microservices-architecture.md`**

This is one of the most important lessons in the entire Distributed Systems module. We'll cover:

- Monolith vs Microservices
- Why companies migrate
- Benefits and trade-offs
- Service boundaries
- Conway's Law
- Organizational impact
- Common pitfalls
- MAANG+ interview questions

This is an extremely common Senior TPM interview topic and naturally builds on API Gateway, Service Discovery, Load Balancing, and Message Queues.