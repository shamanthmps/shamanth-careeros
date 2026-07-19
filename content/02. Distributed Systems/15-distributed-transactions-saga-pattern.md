---
title: "Distributed Transactions & Saga Pattern"
description: "Learn how distributed systems maintain business consistency across multiple microservices using the Saga Pattern."
lesson: 15
module: "Distributed Systems"
difficulty: "Advanced"
estimated_time: "30 minutes"
---

# Distributed Transactions & Saga Pattern

## Executive Summary

In a monolithic application, a single database transaction ensures that either **all operations succeed or none do** (ACID transaction).

In a microservices architecture, each service owns its own database.

This raises an important question:

> **How do you complete a business transaction that spans multiple services?**

Traditional database transactions no longer work across independent services.

Instead, distributed systems often use the **Saga Pattern**, where each service completes its own local transaction, and failures are handled using **compensating transactions**.

Understanding this concept is essential for designing reliable distributed systems.

---

# Why This Matters

Distributed transactions are a favorite topic in Senior TPM and System Design interviews.

Typical questions include:

- Why can't we use a single database transaction?
- What is the Saga Pattern?
- What is a compensating transaction?
- How do Amazon or Uber coordinate multiple services?
- How do you maintain consistency across microservices?

Interviewers want to evaluate whether you understand business consistency—not just database theory.

---

# Core Concepts

## Traditional Transaction

In a monolithic application:

```
Begin Transaction

↓

Update Orders

↓

Update Inventory

↓

Update Payment

↓

Commit
```

If any step fails:

```
Rollback Everything
```

The database guarantees consistency.

---

## The Problem in Microservices

Suppose a customer places an order.

The following services are involved:

- Order Service
- Payment Service
- Inventory Service
- Shipping Service

Each owns a separate database.

```
Order DB

Payment DB

Inventory DB

Shipping DB
```

There is no single transaction manager across all databases.

---

## What Can Go Wrong?

Example:

```
Order Created ✅

↓

Payment Successful ✅

↓

Inventory Failed ❌

↓

Shipping Not Started
```

Questions:

- Should the payment be refunded?
- Should the order be cancelled?
- How is consistency restored?

This is where the Saga Pattern helps.

---

# What is the Saga Pattern?

A Saga breaks a large business transaction into a sequence of **local transactions**.

Each service:

1. Performs its own transaction.
2. Publishes an event.
3. Triggers the next service.

If one step fails,

previous successful steps are undone using **compensating transactions**.

---

## Example Flow

```
Customer Places Order

↓

Order Service

↓

Payment Service

↓

Inventory Service

↓

Shipping Service
```

Every step commits independently.

---

## Failure Scenario

Suppose Inventory fails.

```
Order Created ✅

↓

Payment Charged ✅

↓

Inventory Failed ❌
```

Instead of rolling back the database,

the system performs compensation.

```
Refund Payment

↓

Cancel Order
```

Business consistency is restored.

---

# Compensating Transactions

A compensating transaction reverses the business effect of a completed step.

Examples:

| Original Action | Compensation |
|-----------------|--------------|
| Charge Credit Card | Refund Payment |
| Reserve Inventory | Release Inventory |
| Book Flight | Cancel Reservation |
| Create Order | Cancel Order |

Notice:

Compensation is **not** a database rollback.

It is a new business operation.

---

# Saga Coordination Models

There are two common approaches.

---

## Choreography

Services communicate using events.

```
Order Created

↓

Payment Service

↓

Payment Completed

↓

Inventory Service

↓

Inventory Reserved

↓

Shipping Service
```

Advantages:

- Loose coupling
- Simple architecture
- Highly scalable

Challenges:

- Difficult to understand overall workflow
- Harder debugging
- Event chains become complex

---

## Orchestration

A central Saga Orchestrator coordinates the workflow.

```
Saga Orchestrator

↓

Order

↓

Payment

↓

Inventory

↓

Shipping
```

Advantages:

- Centralized control
- Easier monitoring
- Simpler debugging

Challenges:

- Orchestrator becomes critical infrastructure
- Additional operational complexity

---

# Real-world Example

## Food Delivery Platform

Customer places an order.

Workflow:

```
Create Order

↓

Reserve Restaurant Slot

↓

Charge Payment

↓

Assign Delivery Partner

↓

Confirm Order
```

Now suppose:

No delivery partner is available.

Compensation begins:

```
Refund Customer

↓

Release Restaurant Slot

↓

Cancel Order
```

The customer experiences a failed order, but the system remains consistent.

---

# TPM Perspective

Questions a TPM should ask:

- What happens if Service 3 fails?
- What is the compensation strategy?
- Is every step idempotent?
- How are failures monitored?
- What is the customer experience during partial failures?
- Can operations be retried safely?

These questions are critical for production readiness and business continuity.

---

# Interview Perspective

A strong interview response is:

> "In a microservices architecture, traditional ACID transactions don't work across multiple databases. The Saga Pattern maintains business consistency by breaking the workflow into local transactions. If one step fails, compensating transactions undo previously completed business actions rather than performing a database rollback."

---

# Common Mistakes

- Assuming Saga guarantees immediate consistency.
- Confusing compensation with database rollback.
- Forgetting failure monitoring.
- Ignoring idempotency during retries.
- Assuming every workflow requires a Saga.

---

# 5-Minute Revision

## Traditional Transaction

```
Begin

↓

Operations

↓

Commit

OR

Rollback
```

---

## Saga

```
Service A

↓

Service B

↓

Service C

↓

Failure

↓

Compensating Actions
```

---

## Choreography vs Orchestration

| Choreography | Orchestration |
|--------------|---------------|
| Event-driven | Central coordinator |
| Loose coupling | Better visibility |
| Harder debugging | Easier workflow management |

---

## Interview Cheat Sheet

Remember:

- One Database → ACID Transaction
- Multiple Databases → Saga Pattern
- Rollback → Monolith
- Compensation → Microservices

---

# Practice Interview Questions

1. Why don't traditional transactions work across microservices?
2. What is the Saga Pattern?
3. Explain compensating transactions.
4. Compare Choreography and Orchestration.
5. How would you design an order workflow across multiple services?

---

# Key Takeaways

- Distributed transactions span multiple independent services and databases.
- Traditional ACID transactions don't scale well across microservices.
- The Saga Pattern maintains business consistency through local transactions and compensating actions.
- Compensation reverses business operations rather than rolling back database changes.
- Senior TPMs should understand Saga workflows because they are fundamental to designing reliable, scalable, and resilient distributed systems.