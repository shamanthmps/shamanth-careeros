---
title: "Load Balancing"
description: "Learn how load balancers distribute traffic across multiple servers to improve scalability, availability, and fault tolerance."
lesson: 9
module: "Distributed Systems"
difficulty: "Intermediate"
estimated_time: "20 minutes"
---

# Load Balancing

## Executive Summary

Imagine a website receiving **1 million requests per minute**.

If all requests go to a single server, it quickly becomes overloaded.

A **Load Balancer** sits between users and application servers, intelligently distributing incoming requests so that no single server becomes a bottleneck.

Load balancing is one of the fundamental building blocks of scalable, highly available distributed systems.

As a TPM, you should understand why load balancers exist, how they improve reliability, and what trade-offs they introduce.

---

# Why This Matters

Load Balancing is frequently discussed in TPM and System Design interviews.

Typical questions include:

- What is a Load Balancer?
- Why is it needed?
- How does it improve availability?
- What happens when one server fails?
- How does load balancing support scalability?

Interviewers are looking for architectural understanding rather than networking expertise.

---

# Core Concepts

## What is a Load Balancer?

A Load Balancer receives incoming requests and distributes them across multiple backend servers.

Instead of:

```
Users
   │
Server
```

We use:

```
            Users
               │
        Load Balancer
         /     |     \
     Server1 Server2 Server3
```

The goal is to maximize performance and reliability.

---

## Why Use a Load Balancer?

Without load balancing:

- One server becomes overloaded.
- Performance degrades.
- Server failures impact all users.
- Scaling becomes difficult.

With load balancing:

- Traffic is shared.
- Failures are isolated.
- New servers can be added easily.
- Better customer experience.

---

## Benefits

### Scalability

As traffic grows,

simply add more application servers behind the load balancer.

---

### High Availability

If one server becomes unhealthy,

traffic automatically shifts to healthy servers.

Users often don't notice the failure.

---

### Fault Tolerance

Server failures don't bring down the application.

Healthy servers continue processing requests.

---

### Better Resource Utilization

Instead of one server running at 100% while others sit idle,

traffic is distributed evenly.

---

## Common Load Balancing Algorithms

### Round Robin

Requests are distributed sequentially.

Example:

```
Request 1 → Server A

Request 2 → Server B

Request 3 → Server C

Request 4 → Server A
```

Simple and widely used.

---

### Least Connections

Traffic goes to the server with the fewest active connections.

Useful when requests have different processing times.

---

### Weighted Round Robin

Servers receive traffic based on capacity.

Example:

| Server | Weight |
|---------|--------|
| A | 50% |
| B | 30% |
| C | 20% |

More powerful servers handle more traffic.

---

### IP Hash

The client's IP determines which server handles the request.

Useful for session persistence.

---

## Health Checks

Load balancers continuously monitor backend servers.

If a server:

- Crashes
- Stops responding
- Returns repeated errors

It is automatically removed from the traffic pool until it recovers.

This significantly improves availability.

---

# Real-world Example

## Video Streaming Platform

A streaming service launches a new movie.

Traffic increases from:

100,000 users

to

5 million users.

Instead of overwhelming one server:

- Load Balancer distributes traffic.
- Auto Scaling adds new servers.
- Failed servers are removed automatically.
- Users continue streaming without interruption.

The platform remains responsive despite the traffic surge.

---

# TPM Perspective

Questions a TPM should ask:

- Is there a single point of failure?
- What happens if one application server crashes?
- How are unhealthy servers detected?
- Can infrastructure scale automatically?
- Has failover been tested under production-like traffic?

These questions help identify scalability and reliability risks before launch.

---

# Interview Perspective

A strong interview response is:

> "A Load Balancer distributes incoming requests across multiple backend servers to improve scalability, availability, and fault tolerance. It prevents individual servers from becoming overloaded and automatically redirects traffic away from unhealthy instances."

Notice the focus is on **business outcomes**, not networking internals.

---

# Common Mistakes

- Assuming a load balancer improves application performance by itself.
- Confusing load balancing with Auto Scaling.
- Forgetting health checks.
- Creating a single point of failure by using only one load balancer.
- Assuming all requests require equal processing time.

---

# 5-Minute Revision

## Benefits

- Scalability
- High Availability
- Fault Tolerance
- Better Resource Utilization

---

## Common Algorithms

| Algorithm | Best For |
|------------|----------|
| Round Robin | Equal workloads |
| Least Connections | Variable workloads |
| Weighted Round Robin | Different server capacities |
| IP Hash | Session persistence |

---

## Interview Cheat Sheet

Remember:

```
Users

↓

Load Balancer

↓

Application Servers

↓

Database
```

Load Balancer:

- Distributes traffic
- Detects failures
- Improves uptime
- Supports scaling

---

# Practice Interview Questions

1. What is a Load Balancer?
2. Why is load balancing important?
3. Explain Round Robin and Least Connections.
4. How do health checks improve availability?
5. What's the difference between Load Balancing and Auto Scaling?

---

# Key Takeaways

- A Load Balancer distributes incoming traffic across multiple servers.
- It improves scalability, availability, fault tolerance, and resource utilization.
- Health checks ensure traffic is routed only to healthy servers.
- Load balancing works together with Auto Scaling to support growing workloads.
- Senior TPMs should understand load balancing because it directly impacts customer experience, resilience, and production scalability.
