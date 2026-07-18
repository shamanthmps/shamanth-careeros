---
title: "Replication"
description: "Learn how replication improves availability, fault tolerance, and performance in distributed systems."
lesson: 7
module: "Distributed Systems"
difficulty: "Intermediate"
estimated_time: "20 minutes"
---

# Replication

## Executive Summary

Replication is the process of maintaining multiple copies of the same data across different servers.

If one server fails, another copy is available.

Replication improves:

- High Availability
- Fault Tolerance
- Read Performance
- Disaster Recovery

However, replication also introduces challenges around consistency and synchronization.

As a TPM, understanding replication helps you evaluate architecture decisions, disaster recovery strategies, and production readiness.

---

# Why This Matters

Replication is frequently discussed in System Design and Senior TPM interviews.

Typical questions include:

- Why is replication needed?
- What's the difference between replication and backup?
- What is Primary-Replica architecture?
- How does replication improve availability?
- What challenges does replication introduce?

Interviewers want to know if you understand both the benefits and trade-offs.

---

# Core Concepts

## What is Replication?

Replication means storing the same data on multiple servers.

Instead of:

```
Customer Data
      │
   One Database
```

We have:

```
           Primary
          Database
          /      \
 Replica 1     Replica 2
```

If one replica fails, another can continue serving requests.

---

## Why Do We Replicate Data?

Replication solves several business problems.

### High Availability

If one database becomes unavailable,

another replica continues serving users.

---

### Fault Tolerance

Hardware failures no longer result in complete service outages.

---

### Better Read Performance

Applications can distribute read traffic across multiple replicas.

Instead of one server handling:

100,000 reads/second

Three replicas can each handle approximately:

33,000 reads/second.

---

### Disaster Recovery

Replicas located in different regions protect against data center failures.

---

## Primary-Replica Architecture

This is the most common replication model.

```
             Write
              │
          Primary DB
          /        \
       Read      Read
     Replica1   Replica2
```

### Writes

All updates go to the Primary Database.

### Reads

Applications can read from replicas.

Benefits:

- Better scalability
- Reduced database load
- Higher availability

---

## Synchronous Replication

The primary waits until replicas acknowledge the update.

```
Write

↓

Primary

↓

Replica Updated

↓

Success Response
```

### Advantages

- Strong consistency
- No stale data

### Limitations

- Higher latency
- Slower writes

---

## Asynchronous Replication

The primary responds immediately.

Replicas receive updates afterward.

```
Write

↓

Primary Responds

↓

Replica Updates Later
```

### Advantages

- Faster writes
- Better performance
- Lower latency

### Limitations

- Temporary stale data
- Possible data loss if the primary fails before replication completes

---

## Synchronous vs Asynchronous

| Synchronous | Asynchronous |
|--------------|--------------|
| Strong consistency | Eventual consistency |
| Higher latency | Lower latency |
| Slower writes | Faster writes |
| Banking | Social Media |

---

# Real-world Example

## Global E-commerce Platform

Customers from India, Europe, and North America browse products.

Instead of sending every request to one database:

- India reads from an Indian replica.
- Europe reads from a European replica.
- US users read from a US replica.

Benefits:

- Lower latency
- Better customer experience
- Reduced load
- Improved availability

Meanwhile,

all product updates continue flowing from the Primary Database.

---

# TPM Perspective

Replication affects multiple program decisions.

Important questions include:

- Which services require replication?
- What Recovery Time Objective (RTO) is expected?
- How much stale data is acceptable?
- Is cross-region replication required?
- Have failover scenarios been tested?

Understanding these questions helps TPMs assess production readiness and operational risk.

---

# Interview Perspective

A strong interview response is:

> "Replication maintains multiple copies of data across servers to improve availability, fault tolerance, and read scalability. Most systems use a Primary-Replica architecture where writes go to the primary database while replicas handle read traffic. The main trade-off is balancing consistency against performance."

---

# Common Mistakes

- Confusing replication with backup.
- Assuming replicas always contain the latest data.
- Forgetting replication lag.
- Assuming replication eliminates the need for backups.
- Ignoring cross-region latency.

---

# 5-Minute Revision

## Replication Benefits

- High Availability
- Fault Tolerance
- Better Read Performance
- Disaster Recovery

---

## Interview Cheat Sheet

Remember:

```
Primary

↓

Writes

↓

Replicas

↓

Reads
```

Think about:

- Read scaling
- Failover
- Replication lag
- Consistency
- Regional deployment

---

# Practice Interview Questions

1. What is replication?
2. Why do distributed systems replicate data?
3. Explain Primary-Replica architecture.
4. Compare synchronous and asynchronous replication.
5. How does replication improve availability?

---

# Key Takeaways

- Replication stores multiple copies of data across servers.
- It improves availability, fault tolerance, read scalability, and disaster recovery.
- Primary-Replica architecture is widely used in modern distributed systems.
- Synchronous replication prioritizes consistency, while asynchronous replication prioritizes performance.
- Senior TPMs should understand replication because it influences scalability, resilience, operational readiness, and customer experience.

```

**Next Recommended Lesson:** `08-partitioning-sharding.md`

> **Why next?** Replication answers *"How do we copy data?"* while Partitioning/Sharding answers *"How do we split data?"* These two concepts are almost always discussed together in MAANG+ System Design and TPM interviews.