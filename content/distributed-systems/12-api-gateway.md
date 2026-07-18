---
title: "API Gateway"
description: "Learn how API Gateways simplify client communication, improve security, and enable scalable microservices architectures."
lesson: 12
module: "Distributed Systems"
difficulty: "Intermediate"
estimated_time: "20 minutes"
---

# API Gateway

## Executive Summary

As applications evolve into microservices, clients often need to communicate with dozens of backend services.

Without an API Gateway, the client must know:

- Which service to call
- Where each service is located
- How authentication works
- How to aggregate responses

An **API Gateway** provides a single entry point for all client requests, hiding backend complexity while handling common concerns like authentication, routing, rate limiting, and monitoring.

Nearly every large-scale cloud application uses an API Gateway.

---

# Why This Matters

API Gateways frequently appear in System Design and Senior TPM interviews.

Typical questions include:

- Why do microservices need an API Gateway?
- What responsibilities belong in an API Gateway?
- How does it improve security?
- Can clients directly call microservices?
- What are the trade-offs?

Interviewers want to see that you understand how API Gateways simplify large distributed systems.

---

# Core Concepts

## Without an API Gateway

The client communicates directly with every service.

```
               User

     /      |      |      \

 Orders  Payments  Users  Inventory
```

Problems:

- Too many endpoints
- Client tightly coupled to backend
- Multiple authentication mechanisms
- Complex error handling
- Difficult API versioning

---

## With an API Gateway

The client communicates with only one endpoint.

```
              User

                │

          API Gateway

      /      |      |      \

 Orders  Payments  Users  Inventory
```

The gateway routes requests to the appropriate service.

---

## Responsibilities of an API Gateway

### Request Routing

Routes requests to the appropriate backend service.

Example:

```
/orders

↓

Order Service
```

```
/payments

↓

Payment Service
```

---

### Authentication & Authorization

Instead of every service validating users,

the API Gateway performs authentication once.

Examples:

- OAuth
- JWT
- API Keys
- SSO

Backend services trust the gateway.

---

### Rate Limiting

Prevents clients from overwhelming the system.

Example:

```
100 Requests / Minute / User
```

Benefits:

- Prevents abuse
- Protects backend services
- Improves stability

---

### Request Aggregation

Sometimes clients need data from multiple services.

Without Gateway:

```
Client

↓

Orders

↓

Payments

↓

Shipping
```

With Gateway:

```
Client

↓

Gateway

↓

Calls Multiple Services

↓

Single Response
```

This reduces client complexity.

---

### Logging & Monitoring

Since all requests pass through the gateway,

it becomes an ideal location for:

- Request logging
- Metrics
- Latency monitoring
- Error tracking
- Audit trails

---

## Benefits

### Simpler Clients

Clients communicate with one endpoint.

---

### Better Security

Authentication is centralized.

---

### Easier Versioning

Older API versions can continue working while newer versions are introduced.

---

### Improved Observability

All incoming traffic can be monitored consistently.

---

### Reduced Backend Complexity

Microservices focus on business logic instead of cross-cutting concerns.

---

## Challenges

API Gateways also introduce trade-offs.

### Additional Latency

Every request passes through another component.

---

### Single Point of Failure

If only one gateway exists,

the entire application becomes unavailable.

In production, multiple gateway instances are deployed behind a Load Balancer.

---

### Operational Complexity

Gateway configuration, routing rules, certificates, and policies must be managed carefully.

---

# Real-world Example

## Food Delivery Platform

The mobile app needs:

- User profile
- Active orders
- Payment methods
- Delivery status
- Restaurant details

Instead of making five API calls,

the app sends one request to the API Gateway.

The gateway:

- Authenticates the user
- Calls each backend service
- Aggregates the responses
- Returns a single response

Benefits:

- Faster development
- Simpler mobile application
- Consistent security
- Easier API evolution

---

# TPM Perspective

Questions a TPM should ask:

- Should all external traffic go through the gateway?
- Where is authentication handled?
- What rate limits protect the platform?
- How are API versions managed?
- Is the gateway highly available?
- How are gateway metrics monitored?

These decisions directly impact scalability, security, and customer experience.

---

# Interview Perspective

A strong interview response is:

> "An API Gateway acts as the single entry point for client requests in a microservices architecture. It handles routing, authentication, rate limiting, request aggregation, logging, and monitoring, allowing backend services to focus on business logic. The trade-off is additional infrastructure and potential latency."

---

# Common Mistakes

- Treating the API Gateway as a business logic layer.
- Assuming it replaces Load Balancers.
- Forgetting high availability.
- Putting every feature inside the gateway.
- Ignoring monitoring and rate limiting.

---

# 5-Minute Revision

## Responsibilities

- Request Routing
- Authentication
- Authorization
- Rate Limiting
- Request Aggregation
- Logging
- Monitoring

---

## Architecture

```
Users

↓

API Gateway

↓

Microservices

↓

Database
```

---

## Interview Cheat Sheet

Think:

- One Entry Point
- Centralized Security
- Routing
- Aggregation
- Rate Limiting
- Monitoring

---

# Practice Interview Questions

1. What is an API Gateway?
2. Why is an API Gateway useful in a microservices architecture?
3. What responsibilities belong in an API Gateway?
4. How is an API Gateway different from a Load Balancer?
5. What are the trade-offs of introducing an API Gateway?

---

# Key Takeaways

- An API Gateway provides a single entry point for client requests.
- It centralizes routing, authentication, rate limiting, logging, and monitoring.
- API Gateways simplify clients while allowing microservices to remain independent.
- High availability is critical because the gateway sits on the critical request path.
- Senior TPMs should understand API Gateways because they are fundamental to scalable, secure, and maintainable cloud architectures.