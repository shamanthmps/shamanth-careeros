---
title: "Idempotency"
description: "Learn why idempotency is essential in distributed systems and how it prevents duplicate processing during retries."
lesson: 16
module: "Distributed Systems"
difficulty: "Advanced"
estimated_time: "20 minutes"
---

# Idempotency

## Executive Summary

In distributed systems, failures are expected.

Requests may fail because of:

- Network timeouts
- Temporary service outages
- Client retries
- Message queue retries

When a request is retried, the system must ensure it **doesn't perform the same business operation multiple times**.

This property is called **Idempotency**.

Without idempotency, retries can create duplicate orders, charge customers multiple times, or send repeated notifications.

As a Senior TPM, understanding idempotency is critical because reliable distributed systems depend on safe retries.

---

# Why This Matters

Idempotency is one of the most frequently discussed reliability topics in Senior TPM and System Design interviews.

Typical questions include:

- What is idempotency?
- Why are retries dangerous?
- How do payment systems prevent duplicate charges?
- What is an Idempotency Key?
- How does idempotency improve reliability?

Interviewers want to know whether you understand how large-scale systems safely recover from failures.

---

# Core Concepts

## What is Idempotency?

An operation is **idempotent** if performing it multiple times produces the same final result as performing it once.

Example:

```
Charge Customer

↓

Retry

↓

Retry Again

↓

Customer Charged Once
```

The operation is processed only once, regardless of how many duplicate requests arrive.

---

## Why Do Retries Happen?

Distributed systems retry requests because failures are common.

Example:

```
Client

↓

Payment Service

↓

Payment Completed

↓

Response Lost
```

The client never receives the response.

It assumes the request failed and retries.

Without idempotency:

```
Charge ₹1,000

↓

Retry

↓

Charge ₹1,000 Again ❌
```

The customer is charged twice.

---

## Idempotency Key

The most common solution is an **Idempotency Key**.

The client generates a unique identifier for each business operation.

Example:

```
Idempotency-Key:

PAY-984732
```

Workflow:

```
Request

↓

Server Checks Key

↓

Already Processed?

↓

Yes → Return Previous Response

No → Process Request
```

Repeated requests with the same key never execute the business operation again.

---

## Example Timeline

### First Request

```
Client

↓

Create Order

↓

Order Created

↓

Response Lost
```

---

### Retry

```
Client

↓

Same Idempotency Key

↓

Server Detects Duplicate

↓

Returns Existing Order
```

No duplicate order is created.

---

# Common Use Cases

Idempotency is essential for operations where duplicates have business consequences.

Examples:

| Operation | Idempotency Needed? |
|-----------|---------------------|
| Payment | ✅ Yes |
| Order Creation | ✅ Yes |
| Flight Booking | ✅ Yes |
| User Registration | ✅ Yes |
| Sending Marketing Email | Usually Yes |
| Reading Product Details | Not Critical |

---

# Idempotent vs Non-Idempotent APIs

## Idempotent

```
Set Account Status = Active
```

Running it multiple times produces the same result.

---

## Non-Idempotent

```
Increase Balance by ₹100
```

Running it three times increases the balance three times.

Special handling is required to make this operation safe.

---

# Relationship with Message Queues

Message queues often guarantee:

- At-least-once delivery

This means consumers may receive the same message multiple times.

Example:

```
Queue

↓

Consumer

↓

Crash Before Acknowledgment

↓

Queue Delivers Again
```

Consumers must detect duplicates.

Idempotent consumers prevent repeated business operations.

---

# Real-world Example

## Online Payment Platform

A customer pays ₹2,500.

The payment succeeds.

However, the mobile application loses internet connectivity before receiving confirmation.

The customer presses **"Pay"** again.

Because both requests contain the same Idempotency Key:

- The payment is processed only once.
- The existing transaction is returned.
- The customer is not charged twice.

This protects both the customer experience and financial integrity.

---

# TPM Perspective

Questions a TPM should ask:

- Which APIs support retries?
- Are Idempotency Keys implemented?
- How long are keys retained?
- How are duplicate messages detected?
- What happens if the same request arrives after several minutes?
- Are downstream services also idempotent?

These questions help ensure safe recovery from failures without introducing duplicate business operations.

---

# Interview Perspective

A strong interview response is:

> "Idempotency ensures that repeated execution of the same operation produces the same result. It allows distributed systems to safely retry failed requests without creating duplicate business actions. Most payment and order processing systems achieve this using Idempotency Keys."

---

# Common Mistakes

- Assuming retries are always safe.
- Confusing idempotency with caching.
- Forgetting duplicate message delivery from queues.
- Using timestamps instead of unique request identifiers.
- Implementing idempotency only in the client while ignoring backend services.

---

# 5-Minute Revision

## Retry Problem

```
Request

↓

Success

↓

Response Lost

↓

Retry

↓

Duplicate Risk
```

---

## Solution

```
Idempotency Key

↓

Duplicate Check

↓

Already Processed?

↓

Return Existing Result
```

---

## Interview Cheat Sheet

Remember:

- Networks fail.
- Clients retry.
- Queues retry.
- Safe retries require idempotency.
- Payments and orders almost always require Idempotency Keys.

---

# Practice Interview Questions

1. What is idempotency?
2. Why is idempotency important in distributed systems?
3. What is an Idempotency Key?
4. How does idempotency work with message queues?
5. Which business operations require idempotency?

---

# Key Takeaways

- Idempotency ensures repeated requests produce the same business outcome.
- Retries are common in distributed systems, making idempotency essential for reliability.
- Idempotency Keys help detect and prevent duplicate processing.
- Message queue consumers should be designed to handle duplicate message delivery safely.
- Senior TPMs should understand idempotency because it directly impacts payment systems, order processing, customer trust, and operational resilience.