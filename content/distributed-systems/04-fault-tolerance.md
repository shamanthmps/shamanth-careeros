---
title: "Fault Tolerance"
description: "Learn how distributed systems continue operating despite failures and why fault tolerance is a critical design principle."
lesson: 4
module: "Distributed Systems"
difficulty: "Beginner"
estimated_time: "20 minutes"
---

# Fault Tolerance

## Executive Summary

Failures are inevitable.

Servers crash, networks fail, disks become corrupted, services timeout, and cloud regions occasionally experience outages.

The question isn't:

> **"Will failures happen?"**

The question is:

> **"How does the system behave when failures happen?"**

Fault Tolerance is the ability of a system to continue operating—even when one or more components fail.

For a TPM, understanding fault tolerance helps assess launch readiness, production risks, disaster recovery, and customer impact.

---

# Why This Matters

Fault Tolerance is a common discussion topic in System Design and TPM interviews.

Typical questions include:

- What is fault tolerance?
- How is fault tolerance different from high availability?
- What happens when a service fails?
- How do modern systems recover from failures?
- How would you reduce production risk?

Interviewers want to know if you understand that failures are expected—and that resilient systems are designed with failure in mind.

---

# Core Concepts

## What is Fault Tolerance?

Fault Tolerance is the ability of a system to continue functioning even when individual components fail.

Instead of preventing failures,

the system:

- Detects failures
- Isolates failures
- Recovers automatically
- Minimizes customer impact

---

## Failure is Normal

Large distributed systems experience failures every day.

Examples:

- Server crashes
- Database failures
- Network partitions
- Service timeouts
- Cloud infrastructure issues
- Hardware failures

Modern systems assume these failures will occur.

They are designed accordingly.

---

## Fault Tolerance vs High Availability

Although related, they are different.

| Fault Tolerance | High Availability |
|-----------------|-------------------|
| Continues operating during failures | Maximizes uptime |
| Focuses on resilience | Focuses on accessibility |
| Handles component failures | Reduces downtime |
| Built into system design | Measured through uptime |

Think of fault tolerance as one way to achieve high availability.

---

## Common Fault Tolerance Techniques

### Redundancy

Maintain multiple instances of critical components.

Example:

Instead of one server,

run three.

If one fails,

others continue serving requests.

---

### Automatic Failover

Traffic automatically shifts to healthy instances.

```
Primary Server
      │
Fails ▼
Backup Server
```

Users often don't notice the transition.

---

### Retry Mechanisms

Temporary failures happen.

Instead of failing immediately,

applications retry operations after a short delay.

Common examples:

- Payment requests
- Database connections
- API calls

---

### Circuit Breakers

If a dependent service is repeatedly failing,

stop sending requests temporarily.

Benefits:

- Prevent cascading failures
- Protect system resources
- Allow services time to recover

---

### Graceful Degradation

When one feature fails,

the entire application shouldn't stop working.

Example:

An e-commerce site may:

- Continue accepting orders
- Temporarily disable recommendations

Core functionality remains available.

---

# Real-world Example

## Video Streaming Platform

A streaming platform consists of:

- Authentication Service
- Recommendation Service
- Streaming Service
- Billing Service

The Recommendation Service becomes unavailable.

Without fault tolerance:

The homepage crashes.

Users cannot watch videos.

---

With fault tolerance:

- Recommendations disappear temporarily.
- Streaming continues.
- Authentication continues.
- Billing continues.

Most users continue watching videos.

The failure is isolated.

---

# TPM Perspective

Fault tolerance directly affects:

- Launch readiness
- Risk assessments
- Disaster recovery planning
- Customer experience
- Executive confidence

Questions a TPM should ask include:

- What happens if this service fails?
- Is there a fallback strategy?
- How quickly can the system recover?
- Which customer journeys are affected?
- Have failure scenarios been tested?

These questions often reveal hidden risks before production.

---

# Interview Perspective

A strong interview response is:

> "Fault tolerance is a system's ability to continue operating despite component failures. Modern distributed systems assume failures will occur and use techniques such as redundancy, failover, retries, circuit breakers, and graceful degradation to minimize customer impact."

This demonstrates both technical understanding and practical application.

---

# Common Mistakes

- Assuming failures are rare.
- Confusing fault tolerance with high availability.
- Designing systems with a single point of failure.
- Ignoring dependency failures.
- Testing only success scenarios.

---

# 5-Minute Revision

## Key Techniques

- Redundancy
- Automatic Failover
- Retry Logic
- Circuit Breakers
- Graceful Degradation
- Health Checks

---

## Interview Cheat Sheet

When discussing fault tolerance, think about:

1. Failure detection
2. Failure isolation
3. Automatic recovery
4. Customer impact
5. Business continuity

---

# Practice Interview Questions

1. What is fault tolerance?
2. How is fault tolerance different from high availability?
3. What is graceful degradation?
4. Why are circuit breakers used?
5. How would you design a resilient system?

---

# Key Takeaways

- Failures are expected in distributed systems.
- Fault tolerance enables systems to continue operating despite failures.
- Techniques such as redundancy, failover, retries, circuit breakers, and graceful degradation improve resilience.
- Fault tolerance minimizes customer impact and reduces business risk.
- Senior TPMs should evaluate failure scenarios as part of architecture reviews, launch readiness, and production planning.

```