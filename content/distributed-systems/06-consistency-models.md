---
title: "Consistency Models"
description: "Learn the different consistency models used in distributed systems and understand the trade-offs between correctness, latency, and user experience."
lesson: 6
module: "Distributed Systems"
difficulty: "Intermediate"
estimated_time: "20 minutes"
---

# Consistency Models

## Executive Summary

In a distributed system, data is often replicated across multiple servers.

The challenge is ensuring users see the correct data at the right time.

Different applications require different levels of consistency.

For example:

- A banking application cannot show an incorrect account balance.
- A social media feed can tolerate a few seconds of stale data.

Consistency models define **when updates become visible to users** and help architects balance correctness, availability, and performance.

---

# Why This Matters

Consistency models are commonly discussed in System Design and Senior TPM interviews.

Typical questions include:

- What is eventual consistency?
- Why don't all systems use strong consistency?
- Which consistency model is suitable for banking?
- When is eventual consistency acceptable?

Interviewers want to see whether you understand **business-driven architectural decisions**.

---

# Core Concepts

## What is Consistency?

Consistency determines **how quickly all users observe the same data after an update.**

Example:

A user changes their profile picture.

Questions to ask:

- Does every user immediately see the new picture?
- Or do some users continue seeing the old picture for a few seconds?

The answer depends on the chosen consistency model.

---

## Strong Consistency

Every read returns the **most recent successful write.**

Example:

```
Update Balance → ₹5,000

Immediately

Every user sees ₹5,000
```

### Characteristics

- Latest data
- High correctness
- Higher latency
- More coordination between servers

### Typical Use Cases

- Banking
- Payments
- Financial transactions
- Inventory management

---

## Eventual Consistency

Updates propagate gradually.

For a short period,

different users may see different values.

Eventually,

all replicas become consistent.

Example:

```
Update Profile Picture

↓

User A sees new picture

↓

User B sees old picture

↓

Few seconds later

↓

Everyone sees new picture
```

### Characteristics

- Faster responses
- Better scalability
- Lower latency
- Temporary stale data

### Typical Use Cases

- Social Media
- Product Catalogs
- News Feeds
- DNS

---

## Strong vs Eventual Consistency

| Strong Consistency | Eventual Consistency |
|--------------------|----------------------|
| Latest data immediately | Data converges over time |
| Higher latency | Lower latency |
| More coordination | Better scalability |
| Higher correctness | Temporary stale data |

---

## Choosing the Right Model

The correct consistency model depends on business requirements.

| Business Scenario | Preferred Model |
|-------------------|-----------------|
| Bank Account | Strong |
| Payment Gateway | Strong |
| Shopping Cart | Usually Strong |
| Product Reviews | Eventual |
| Social Media Feed | Eventual |
| Profile Pictures | Eventual |

A good TPM understands **why** a team chooses one over the other.

---

# Real-world Example

## E-commerce Platform

A customer purchases the last available laptop.

### Strong Consistency

Inventory updates immediately.

No other customer can purchase the same item.

Correctness is preserved.

---

### Eventual Consistency

Inventory updates across regions after a short delay.

Another customer may briefly see the item as available.

Additional handling is required to prevent overselling.

The business accepts this trade-off to improve scalability.

---

# TPM Perspective

As a TPM, ask questions such as:

- How much stale data is acceptable?
- What's the customer impact of inconsistent data?
- Does the business prioritize correctness or responsiveness?
- Which services require stronger consistency guarantees?

These discussions influence architecture, customer experience, and operational risk.

---

# Interview Perspective

A strong interview response is:

> "Strong consistency guarantees that every user sees the latest data immediately, while eventual consistency allows temporary differences between replicas to improve scalability and availability. The right choice depends on business requirements—for example, banking systems prioritize strong consistency, while social media platforms commonly use eventual consistency."

---

# Common Mistakes

- Assuming eventual consistency means incorrect data.
- Believing every application needs strong consistency.
- Ignoring the latency introduced by strong consistency.
- Choosing a consistency model without considering business impact.

---

# 5-Minute Revision

## Remember

| Strong | Eventual |
|--------|----------|
| Latest data | Data converges over time |
| Higher correctness | Better scalability |
| Higher latency | Lower latency |
| Banking | Social Media |

---

## Interview Cheat Sheet

Ask yourself:

- Is stale data acceptable?
- What's the business impact?
- How quickly must updates be visible?
- What customer experience are we optimizing for?

---

# Practice Interview Questions

1. What is a consistency model?
2. Explain Strong Consistency and Eventual Consistency.
3. Why do social media platforms often choose eventual consistency?
4. Why is strong consistency critical for banking systems?
5. How would you decide which consistency model to use?

---

# Key Takeaways

- Consistency models define when users observe updates in distributed systems.
- Strong consistency prioritizes correctness, while eventual consistency prioritizes scalability and responsiveness.
- There is no universally "best" consistency model—the right choice depends on business needs.
- Senior TPMs should understand consistency as a product and business trade-off, not just a database concept.
```