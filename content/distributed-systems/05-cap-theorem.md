---
title: "CAP Theorem"
description: "Understand the CAP Theorem, one of the most fundamental concepts in distributed systems, and how it influences architectural decisions."
lesson: 5
module: "Distributed Systems"
difficulty: "Intermediate"
estimated_time: "20 minutes"
---

# CAP Theorem

## Executive Summary

The CAP Theorem states that a distributed system cannot simultaneously guarantee all three of the following:

- **Consistency (C)**
- **Availability (A)**
- **Partition Tolerance (P)**

When a network partition occurs, architects must choose between maintaining **Consistency** or **Availability**.

Understanding this trade-off is one of the most important concepts for Senior TPM interviews because it explains why different systems make different architectural decisions.

---

# Why This Matters

CAP Theorem is a favorite interview topic because it tests whether you understand architectural trade-offs.

Typical questions include:

- What is CAP Theorem?
- Why can't distributed systems achieve all three?
- Why do some databases choose Availability while others choose Consistency?
- Which is more important for banking systems?
- Which is more important for social media?

Interviewers aren't looking for mathematical proofs.

They want to know whether you understand **business trade-offs**.

---

# Core Concepts

## The Three Components

### Consistency (C)

Every user sees the **same data** at the same time.

Example:

If you transfer ₹1,000 from Account A to Account B,

every server immediately reflects the updated balance.

No user sees stale data.

---

### Availability (A)

Every request receives a response,

even if some servers are unavailable.

The response may not always contain the latest data.

Example:

Instagram continues loading posts,

even if one region is temporarily disconnected.

---

### Partition Tolerance (P)

The system continues operating despite communication failures between servers.

Example:

Two data centers temporarily lose network connectivity.

The application should continue functioning rather than shutting down completely.

In modern cloud environments,

**network failures are inevitable.**

Therefore,

Partition Tolerance is generally considered mandatory.

---

## Why Can't We Have All Three?

Imagine two servers:

```
Server A      X      Server B
      Network Failure
```

A user updates data on Server A.

Server B cannot receive the update.

Now the system has two choices.

### Option 1

Reject requests until communication is restored.

Result:

✅ Consistency

❌ Availability

---

### Option 2

Continue serving users independently.

Result:

✅ Availability

❌ Consistency

This is the fundamental CAP trade-off.

---

## CP Systems

Choose:

- Consistency
- Partition Tolerance

Sacrifice:

Availability

Examples:

- Banking
- Financial transactions
- Inventory management

When correctness is more important than continuous availability.

---

## AP Systems

Choose:

- Availability
- Partition Tolerance

Sacrifice:

Strong consistency.

Examples:

- Social media
- Product catalogs
- News feeds

Users may briefly see stale data,

but the service remains available.

---

## CA Systems

In theory:

Consistency + Availability

Without Partition Tolerance.

In reality,

modern distributed cloud systems always assume network partitions can occur.

Therefore,

true CA systems are uncommon in large-scale distributed architectures.

---

# Real-world Example

## Online Banking

Suppose you transfer ₹10,000.

During the transaction,

communication between two database nodes fails.

The bank has two options.

### Prioritize Consistency

Temporarily reject the transaction.

The customer retries later.

Money is never duplicated.

---

### Prioritize Availability

Allow both servers to continue independently.

One server deducts the money.

The other doesn't.

Now account balances differ.

For banking,

this is unacceptable.

Banks usually choose **CP**.

---

## Social Media

You upload a profile picture.

One region updates immediately.

Another region takes a few seconds.

Some users temporarily see the old image.

The service remains available.

Most social media platforms prefer **AP**.

---

# TPM Perspective

As a TPM,

you don't decide CAP strategies,

but you should understand why engineering teams make these choices.

Questions to ask include:

- Is consistency more important than uptime?
- What's the customer impact of stale data?
- What happens during network failures?
- Which business capability drives this architectural decision?

CAP discussions are ultimately business discussions.

---

# Interview Perspective

A strong interview answer is:

> "CAP Theorem states that during a network partition, a distributed system must choose between consistency and availability. Financial systems usually prioritize consistency, while consumer applications like social media often prioritize availability. The correct choice depends on business requirements."

Notice that the answer focuses on **business trade-offs**, not theory.

---

# Common Mistakes

- Saying systems choose between C, A, and P under normal conditions.
- Forgetting that CAP applies **only during network partitions**.
- Assuming every system should maximize consistency.
- Ignoring business requirements.
- Believing one choice is universally better.

---

# 5-Minute Revision

## CAP

```
        CAP

Consistency
      ▲
      │
Availability ─── Partition Tolerance
```

When a network partition occurs:

Choose one:

- Consistency
- Availability

---

## Typical Examples

| System | Preference |
|---------|------------|
| Banking | CP |
| Payment Gateway | CP |
| Inventory | CP |
| Social Media | AP |
| News Feed | AP |
| Product Catalog | AP |

---

# Practice Interview Questions

1. What is the CAP Theorem?
2. Why can't distributed systems guarantee all three properties?
3. Why do banks usually choose CP?
4. Why do social media platforms often choose AP?
5. Does CAP apply all the time or only during network partitions?

---

# Key Takeaways

- CAP Theorem describes trade-offs in distributed systems during network partitions.
- Modern distributed systems assume Partition Tolerance because network failures are inevitable.
- Systems typically choose between Consistency and Availability based on business requirements.
- Financial systems usually prioritize Consistency, while consumer-facing applications often prioritize Availability.
- Senior TPMs should understand CAP as a business decision rather than a purely technical concept.

```