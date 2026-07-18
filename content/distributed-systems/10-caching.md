---
title: "Caching"
description: "Learn how caching improves application performance, reduces latency, and decreases database load in distributed systems."
lesson: 10
module: "Distributed Systems"
difficulty: "Intermediate"
estimated_time: "20 minutes"
---

# Caching

## Executive Summary

Not every request needs to reach the database.

Many applications repeatedly access the same data, such as:

- Product details
- User profiles
- Home pages
- Configuration
- Trending content

Instead of querying the database every time, frequently accessed data is temporarily stored in a **cache**, allowing applications to respond much faster.

Caching is one of the simplest and most effective techniques for improving system performance and scalability.

As a TPM, understanding caching helps you evaluate architecture decisions, performance bottlenecks, and customer experience.

---

# Why This Matters

Caching is a common topic in System Design and Senior TPM interviews.

Typical questions include:

- What is caching?
- Why do applications use caches?
- What data should be cached?
- What happens when cached data becomes stale?
- When should caching be avoided?

Interviewers expect you to understand the business benefits and trade-offs.

---

# Core Concepts

## What is Caching?

A cache is a high-speed storage layer that temporarily stores frequently accessed data.

Instead of:

```
User

↓

Application

↓

Database
```

Applications use:

```
User

↓

Application

↓

Cache

↓

Database (only if needed)
```

If the requested data exists in the cache, the database is skipped.

---

## Why Use Caching?

Caching provides several benefits:

- Faster response times
- Reduced database load
- Improved scalability
- Lower infrastructure costs
- Better user experience

Instead of executing thousands of identical database queries, applications retrieve data directly from memory.

---

## Cache Hit vs Cache Miss

### Cache Hit

Requested data exists in the cache.

```
Request

↓

Cache

↓

Response
```

Fast response.

No database access.

---

### Cache Miss

Requested data isn't available.

```
Request

↓

Cache

↓

Database

↓

Cache Updated

↓

Response
```

Slightly slower.

Future requests become faster.

---

## Common Types of Caching

### Application Cache

Frequently used objects are stored within the application.

Examples:

- Configuration
- Feature flags
- Lookup tables

---

### Distributed Cache

A centralized cache shared by multiple application servers.

Popular technologies include:

- Redis
- Memcached

Suitable for large-scale applications.

---

### CDN (Content Delivery Network)

Caches static content closer to users.

Examples:

- Images
- Videos
- CSS
- JavaScript

Benefits:

- Lower latency
- Reduced server load
- Faster page loading

---

## What Should Be Cached?

Good candidates include:

- Product catalogs
- User profiles
- Frequently accessed dashboards
- Search results
- Session data
- Static configuration

Avoid caching:

- Frequently changing financial data
- Real-time inventory
- Critical payment information

---

## Cache Invalidation

One of the biggest challenges is ensuring cached data remains accurate.

Example:

A product price changes.

The cache still returns the old price.

Applications need a strategy to:

- Refresh the cache
- Remove outdated entries
- Set expiration times (TTL)

A common saying in engineering is:

> **"There are only two hard things in Computer Science: cache invalidation and naming things."**

---

# Real-world Example

## Online Shopping Platform

A product page receives **100,000 views per hour**.

Without caching:

Every request queries the database.

Result:

- High database load
- Increased latency
- Higher infrastructure costs

With caching:

The first request loads data from the database.

Subsequent requests are served directly from the cache until the data expires or changes.

Result:

- Faster page loads
- Lower database usage
- Improved customer experience

---

# TPM Perspective

Questions a TPM should ask:

- Which endpoints receive the highest traffic?
- What data changes frequently?
- How long can data remain cached?
- What's the impact of stale data?
- Is cache performance being monitored?

These questions help balance performance with data accuracy.

---

# Interview Perspective

A strong interview response is:

> "Caching stores frequently accessed data in a fast storage layer to reduce latency and database load. Cache hits return data immediately, while cache misses retrieve data from the database and populate the cache. The key trade-off is balancing performance with data freshness."

---

# Common Mistakes

- Caching everything.
- Ignoring cache invalidation.
- Assuming cached data is always current.
- Storing highly dynamic data in long-lived caches.
- Not monitoring cache hit rates.

---

# 5-Minute Revision

## Benefits of Caching

- Faster responses
- Reduced database load
- Better scalability
- Lower latency
- Improved user experience

---

## Cache Flow

```
Request

↓

Cache

↓

Hit → Return Data

Miss → Database → Update Cache → Return Data
```

---

## Interview Cheat Sheet

Think about:

- Cache Hit
- Cache Miss
- TTL (Time to Live)
- Cache Invalidation
- Redis / Memcached
- CDN

---

# Practice Interview Questions

1. What is caching?
2. Explain Cache Hit and Cache Miss.
3. What data is suitable for caching?
4. Why is cache invalidation difficult?
5. How does caching improve scalability?

---

# Key Takeaways

- Caching stores frequently accessed data in a fast storage layer to improve performance.
- Cache hits reduce latency and database load, while cache misses populate the cache for future requests.
- Effective caching improves scalability, reduces infrastructure costs, and enhances customer experience.
- Cache invalidation and stale data are the primary trade-offs.
- Senior TPMs should understand caching because it directly impacts application performance, scalability, and production readiness.
