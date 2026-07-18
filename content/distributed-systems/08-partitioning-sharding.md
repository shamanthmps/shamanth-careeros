---
title: "Partitioning (Sharding)"
description: "Learn how large-scale systems distribute data across multiple databases to improve scalability and performance."
lesson: 8
module: "Distributed Systems"
difficulty: "Intermediate"
estimated_time: "20 minutes"
---

# Partitioning (Sharding)

## Executive Summary

As applications grow, a single database eventually becomes a bottleneck.

Even with replication, every write still reaches the primary database.

The solution is **Partitioning (also called Sharding)**—splitting data across multiple databases so each handles only a subset of the workload.

Sharding is one of the most widely used techniques for scaling databases in large distributed systems.

As a TPM, you should understand **when sharding is needed, its benefits, and the trade-offs it introduces.**

---

# Why This Matters

Partitioning is a common topic in Senior TPM and System Design interviews.

Typical questions include:

- What is sharding?
- Why isn't replication enough?
- How do large companies scale databases?
- What are the challenges of sharding?
- When would you shard a database?

Interviewers want to know if you understand how systems scale beyond a single database.

---

# Core Concepts

## What is Partitioning?

Partitioning means dividing a large dataset into smaller, independent pieces called **partitions** or **shards**.

Instead of storing all users in one database:

```
All Users
     │
 Single Database
```

The data is distributed:

```
Shard 1   → Users A–F

Shard 2   → Users G–M

Shard 3   → Users N–Z
```

Each shard stores only part of the data.

---

## Why Shard?

As data grows, one database may experience:

- High CPU utilization
- Storage limitations
- Slow queries
- Write bottlenecks
- Increased latency

Sharding distributes both **storage** and **traffic** across multiple databases.

---

## Replication vs Sharding

These concepts solve different problems.

| Replication | Sharding |
|--------------|----------|
| Copies data | Splits data |
| Improves availability | Improves scalability |
| Helps read performance | Helps read and write performance |
| Same data everywhere | Different data on each shard |

Large-scale systems often use **both**.

---

## Common Sharding Strategies

### Range-Based Sharding

Data is divided by value ranges.

Example:

- Customers 1–10,000
- Customers 10,001–20,000
- Customers 20,001–30,000

Simple to implement, but some shards may become much larger than others.

---

### Hash-Based Sharding

A hash function determines which shard stores the data.

Benefits:

- Better distribution
- Balanced workload
- Reduced hotspots

This is one of the most common approaches.

---

### Geographic Sharding

Data is partitioned by region.

Example:

- India → Mumbai database
- Europe → Frankfurt database
- US → Virginia database

Benefits:

- Lower latency
- Better compliance
- Regional isolation

---

## Challenges of Sharding

Sharding improves scalability but increases complexity.

Common challenges include:

- Cross-shard queries
- Data rebalancing
- Uneven data distribution (hotspots)
- Operational overhead
- Backup and recovery

Scaling becomes easier.

Managing the system becomes harder.

---

# Real-world Example

## Global Ride-Sharing Platform

A ride-sharing company operates in 60 countries.

Instead of storing all ride data in one database:

- India rides → India shard
- Europe rides → Europe shard
- US rides → US shard

Benefits:

- Faster queries
- Reduced latency
- Better scalability
- Regional data compliance

As the business grows, new regions can be added without redesigning the entire database.

---

# TPM Perspective

As a TPM, ask questions such as:

- At what scale will the current database become a bottleneck?
- What's the sharding strategy?
- How will data be rebalanced as traffic grows?
- Are cross-region queries required?
- What are the operational risks of introducing sharding?

These questions help identify long-term scalability risks before they become production issues.

---

# Interview Perspective

A strong interview response is:

> "Sharding distributes data across multiple databases to improve scalability and write performance. Unlike replication, which creates multiple copies of the same data, sharding divides the dataset so that each database stores only a subset. The trade-off is increased operational complexity, especially around cross-shard queries and data management."

---

# Common Mistakes

- Confusing sharding with replication.
- Assuming sharding automatically improves availability.
- Ignoring cross-shard query complexity.
- Choosing a poor shard key, leading to uneven traffic distribution.
- Sharding too early before it's actually needed.

---

# 5-Minute Revision

## Replication vs Sharding

| Replication | Sharding |
|--------------|----------|
| Copies data | Splits data |
| Better availability | Better scalability |
| Read optimization | Read & write optimization |

---

## Common Sharding Strategies

- Range-Based
- Hash-Based
- Geographic

---

## Interview Cheat Sheet

Remember:

- Replication → High Availability
- Sharding → Scalability
- Many large systems use **both** together.

---

# Practice Interview Questions

1. What is database sharding?
2. How is sharding different from replication?
3. When should a database be sharded?
4. What challenges does sharding introduce?
5. Which sharding strategy would you choose for a global application?

---

# Key Takeaways

- Sharding divides data across multiple databases to improve scalability.
- Replication and sharding solve different problems and are often used together.
- Choosing the right shard key is critical for balanced performance.
- Sharding improves throughput but increases operational complexity.
- Senior TPMs should understand the business and architectural trade-offs before recommending database partitioning.
