## Executive Summary

Modern Technical Program Managers are expected to operate at the intersection of technology, execution, and business strategy. While TPMs are not expected to design every service or write production code, they are expected to understand system architecture deeply enough to drive technical programs, facilitate architectural discussions, identify risks, influence trade-offs, and communicate complex technical concepts to diverse stakeholders.

At Senior TPM levels, understanding how systems work is valuable. At Staff and Principal levels, it becomes essential. Large-scale engineering initiatives often involve distributed systems, cloud-native architectures, microservices, asynchronous communication, high availability, global deployments, and evolving infrastructure. A TPM who cannot reason about these concepts will struggle to make informed program decisions or earn the trust of engineering leaders.

This lesson introduces the architectural principles every TPM should master. Rather than teaching implementation details, it focuses on architectural thinking, engineering trade-offs, and the decision-making frameworks used by experienced software architects. Throughout the lesson, each concept is connected to real-world TPM responsibilities and the expectations commonly seen in MAANG+ interviews.

---

# Learning Objectives

By the end of this lesson, you should be able to:

- Explain the purpose of modern system design.
- Understand the major building blocks of distributed systems.
- Differentiate monolithic and microservices architectures.
- Explain common scalability strategies.
- Understand the trade-offs between consistency, availability, latency, and cost.
- Participate confidently in architecture reviews.
- Identify technical risks during large engineering programs.
- Ask meaningful architectural questions during design discussions.
- Evaluate architecture decisions from a program perspective.
- Demonstrate system design knowledge expected in Senior and Staff TPM interviews.

---

# Why This Matters
A common misconception is that only Software Engineers or Architects need to understand system design.

In reality, TPMs spend a significant portion of their time coordinating technical initiatives whose success depends on architectural decisions.

Consider a few examples:

- Migrating from a monolithic application to microservices.
- Scaling an application from one million to one hundred million users.
- Moving workloads to the cloud.
- Redesigning an authentication platform.
- Introducing event-driven communication across services.
- Building a globally distributed platform.
- Improving platform reliability from 99.5% to 99.99%.

Although engineers design the solution, TPMs are responsible for ensuring the work is planned, coordinated, executed, measured, and communicated effectively. Without a working understanding of system design, a TPM cannot accurately estimate effort, identify dependencies, assess risks, or challenge unrealistic assumptions.

System design knowledge allows TPMs to ask better questions, facilitate more productive technical discussions, and make decisions that align engineering execution with business goals.

---

# The TPM's Role in System Design

A TPM is not expected to replace an architect or make low-level implementation decisions.

Instead, a TPM acts as the technical orchestrator of complex programs.

Responsibilities typically include:

| Area | TPM Responsibility |
|------|--------------------|
| Architecture Reviews | Facilitate discussions, document decisions, and track action items |
| Cross-Team Alignment | Ensure service interfaces and dependencies are understood |
| Risk Management | Identify architectural risks and mitigation plans |
| Program Planning | Estimate work based on architectural complexity |
| Executive Communication | Translate technical decisions into business impact |
| Delivery Coordination | Sequence work across multiple engineering teams |
| Governance | Ensure architecture aligns with organizational standards |

The TPM's effectiveness often depends on asking insightful questions rather than providing technical answers.

---

# Core Concepts

# What Is a System?

A **system** is a collection of interconnected components that work together to achieve a business objective.

For example, an online retail platform is not a single application. It is a collection of services responsible for:

- User authentication
- Product catalog
- Search
- Shopping cart
- Payments
- Inventory
- Shipping
- Notifications
- Analytics
- Customer support

Each component performs a specialized function while collaborating with others to deliver a seamless customer experience.

```
                    Customer
                        │
                        ▼
                 Web / Mobile App
                        │
                API Gateway / Edge
                        │
 ┌──────────┬──────────┬──────────┬──────────┐
 │          │          │          │          │
Auth     Catalog    Orders    Payments   Notifications
 │          │          │          │          │
 └──────────┴──────────┴──────────┴──────────┘
                        │
                  Shared Business Goal
```

Understanding how these components interact is the foundation of system design.

---

# System Design Goals

Architects design systems to satisfy both current and future business needs. A well-designed system balances multiple objectives that often compete with one another.

Common goals include:

| Goal | Description |
|------|-------------|
| Scalability | Handle increasing traffic without degrading performance |
| Reliability | Continue operating despite failures |
| Availability | Remain accessible to users when needed |
| Performance | Deliver low-latency responses |
| Security | Protect data and services from threats |
| Maintainability | Enable teams to evolve the system efficiently |
| Cost Efficiency | Optimize infrastructure and operational expenses |
| Extensibility | Support future features with minimal disruption |

Improving one objective frequently affects another. For example, increasing redundancy improves reliability but also raises infrastructure costs. A core responsibility of engineering leadership is balancing these trade-offs.

---

# Functional vs Non-Functional Requirements

Before designing a system, engineers clarify two categories of requirements.

## Functional Requirements

Functional requirements describe **what** the system should do.

Examples include:

- Users can create accounts.
- Customers can place orders.
- Payments can be processed.
- Administrators can manage inventory.
- Notifications are sent after purchases.

These requirements define business capabilities.

---

## Non-Functional Requirements

Non-functional requirements describe **how well** the system should perform.

Examples include:

- Support one million concurrent users.
- Maintain 99.99% availability.
- Respond within 200 milliseconds.
- Encrypt all sensitive data.
- Recover from regional failures within five minutes.

These requirements shape the architecture.

---

## Why TPMs Should Care

Many large engineering programs fail because teams focus exclusively on functional delivery while overlooking non-functional expectations.

For example:

- A feature launches successfully but cannot handle production traffic.
- A service meets business requirements but introduces unacceptable latency.
- A migration completes on time but compromises availability.

TPMs must ensure that both categories of requirements are captured, prioritized, and validated throughout the program lifecycle.

---

# System Design Mindset

Effective system design is not about selecting technologies. It is about making informed trade-offs based on business goals.

Experienced architects ask questions such as:

- What problem are we solving?
- What scale must the system support?
- Which failures are acceptable?
- What are the latency expectations?
- Which data requires strong consistency?
- How quickly must the system recover from failures?
- What constraints exist around cost, compliance, or geography?

TPMs should adopt the same mindset. Understanding the reasoning behind architectural decisions enables better planning, communication, and risk management.

---

# Core Building Blocks of Modern Systems

Although modern architectures vary significantly, most distributed systems are composed of a common set of foundational components.

Understanding these building blocks allows TPMs to interpret architecture diagrams, identify dependencies, and coordinate technical initiatives effectively.

## Clients

Clients are the entry points into the system.

They include:

- Web browsers
- Mobile applications
- Desktop applications
- IoT devices
- Partner integrations
- Internal services

Clients initiate requests but typically contain minimal business logic.

```
Users
  │
  ▼
Web
Mobile
API Client
Partner System
```

For TPMs, client diversity influences compatibility testing, rollout strategy, and release coordination.

---

## API Gateway

The API Gateway acts as the front door for backend services.

Typical responsibilities include:

- Request routing
- Authentication
- Authorization
- Rate limiting
- Logging
- Request transformation
- API versioning

```
          Clients
             │
             ▼
      ┌─────────────┐
      │ API Gateway │
      └─────────────┘
        │     │     │
        ▼     ▼     ▼
     Orders Users Payments
```

By centralizing common concerns, the gateway simplifies service development and improves operational governance.

---

## Application Services

Application services contain the business logic that powers the platform.

Examples include:

- User Service
- Order Service
- Payment Service
- Inventory Service
- Recommendation Service

Each service is responsible for a specific business capability and communicates with other services through well-defined interfaces.

From a TPM perspective, services often map directly to engineering teams, making service boundaries critical for planning, ownership, and dependency management.

---

## Data Layer

The data layer is responsible for storing and retrieving application data.

Depending on workload characteristics, different storage technologies may be used:

- Relational databases
- NoSQL databases
- Object storage
- Data warehouses
- Distributed caches
- Search indexes

Choosing the appropriate storage solution involves trade-offs related to consistency, scalability, performance, and operational complexity.

TPMs should understand these trade-offs because database decisions often influence migration effort, testing strategy, and rollout risk.

---

## External Integrations

Modern systems rarely operate in isolation.

Typical integrations include:

- Payment gateways
- Identity providers
- Messaging platforms
- Email services
- Analytics providers
- Third-party APIs
- Government systems

Each integration introduces dependencies, potential failure points, and operational risks.

TPMs are responsible for coordinating external stakeholders, managing contractual timelines, and ensuring fallback strategies exist when integrations fail.

---

## Observability Components

Operating distributed systems requires visibility into their behavior.

Observability is typically achieved through three pillars:

| Component | Purpose |
|-----------|---------|
| Logs | Capture detailed application events |
| Metrics | Measure system health and performance |
| Traces | Follow requests across multiple services |

Together, these capabilities help engineering teams detect issues, troubleshoot incidents, and understand system behavior in production.

For TPMs, observability is essential for incident management, service reviews, postmortems, and measuring operational success.

---


# Monolith vs Microservices

One of the first architectural decisions organizations encounter is whether to build a **monolithic application** or adopt a **microservices architecture**.

This decision has profound implications for engineering productivity, deployment frequency, operational complexity, scalability, organizational structure, and long-term maintainability.

As a TPM, you are rarely responsible for making this architectural decision. However, you are responsible for understanding its impact, coordinating execution, identifying migration risks, and ensuring engineering teams can successfully implement the chosen architecture.

Understanding the strengths and weaknesses of both approaches is fundamental for participating in architecture reviews and leading large-scale engineering programs.

---

## Understanding Monolithic Architecture

A **monolithic application** packages all business functionality into a single deployable application.

Every feature typically shares:

- One codebase
- One deployment pipeline
- One runtime
- One database
- One release schedule

```
                    Users
                      │
                 Load Balancer
                      │
              ┌─────────────────┐
              │  Monolithic App │
              │                 │
              │ Authentication  │
              │ Orders          │
              │ Payments        │
              │ Inventory       │
              │ Notifications   │
              └─────────────────┘
                      │
              Relational Database
```

Although internally the application may contain modules, they cannot usually be deployed independently.

---

## Advantages of Monolithic Systems

For many organizations, especially startups and early-stage products, a monolith is the right choice.

### Simplicity

A single application is easier to understand, deploy, and operate.

Developers work in one repository with one deployment process.

---

### Faster Initial Development

When teams are small, engineers can rapidly add features without worrying about network communication, service discovery, or distributed transactions.

---

### Easier Debugging

Since all components execute within the same process, tracing execution paths is significantly simpler.

---

### Lower Infrastructure Cost

A monolith typically requires fewer servers, fewer deployment pipelines, and less operational tooling.

This reduces infrastructure complexity and operational overhead.

---

### Simpler Testing

Integration testing is often easier because all components run together.

---

## Challenges of Monolithic Systems

As organizations grow, the same simplicity becomes a limitation.

### Growing Codebase

Large monoliths often contain millions of lines of code.

Understanding dependencies becomes increasingly difficult.

---

### Slow Deployments

Even a minor change requires rebuilding and deploying the entire application.

Deployment times grow alongside application size.

---

### Limited Scalability

Suppose only the Search module experiences high traffic.

A monolith requires scaling the entire application, even if other modules receive little traffic.

This increases infrastructure costs.

---

### Technology Lock-In

Because every module shares the same runtime, adopting new languages or frameworks becomes difficult.

---

### Deployment Risk

A defect introduced into one module can impact the entire application.

Large deployments therefore carry greater operational risk.

---

## Understanding Microservices

Microservices divide an application into multiple independently deployable services.

Each service owns a specific business capability and communicates through APIs or asynchronous messaging.

```
                    Users
                      │
                API Gateway
                      │
      ┌──────┬──────┬──────┬────────┐
      │      │      │      │        │
   Auth   Orders Payments Inventory Search
      │      │      │      │        │
     DB     DB     DB     DB       DB
```

Each service has:

- Independent ownership
- Independent deployment
- Independent scaling
- Independent monitoring
- Independent lifecycle

This architecture aligns well with large engineering organizations.

---

## Advantages of Microservices

### Independent Deployment

Teams can deploy their services without waiting for organization-wide releases.

This enables continuous delivery.

---

### Independent Scaling

Only heavily used services require additional compute resources.

For example:

```
Search Service

100 instances

Inventory Service

5 instances

Authentication Service

10 instances
```

Infrastructure scales according to demand.

---

### Fault Isolation

Failures are often isolated to a single service rather than affecting the entire platform.

Proper resilience patterns further reduce blast radius.

---

### Team Autonomy

Different engineering teams can own separate services.

Ownership becomes clearer, enabling parallel development.

---

### Technology Flexibility

Different services may adopt different programming languages or storage technologies where appropriate.

For example:

- Java for Payments
- Go for Search
- Python for Machine Learning
- Node.js for Notification Services

Although flexibility exists, organizations usually establish governance standards to avoid unnecessary fragmentation.

---

## Challenges of Microservices

Microservices solve many scaling problems but introduce new complexity.

### Distributed Systems Complexity

Instead of one application, organizations now operate hundreds of services.

This introduces:

- Network failures
- Partial outages
- Distributed debugging
- Service discovery
- Version compatibility

---

### Operational Overhead

Each service requires:

- CI/CD pipelines
- Monitoring
- Logging
- Alerting
- Security
- Deployment automation

Operational maturity becomes essential.

---

### Data Management Challenges

Each service typically owns its own database.

This eliminates simple database joins across services.

Maintaining consistency becomes significantly harder.

---

### Increased Latency

Business workflows often involve multiple network calls.

Example:

```
Customer Checkout

↓

Authentication

↓

Inventory

↓

Pricing

↓

Payment

↓

Shipping

↓

Notification
```

Every additional service introduces network latency.

---

### Difficult Debugging

Tracing a request across twenty services is far more difficult than debugging a monolith.

Observability becomes a first-class engineering capability.

---

# Monolith vs Microservices Comparison

| Dimension | Monolith | Microservices |
|------------|----------|---------------|
| Codebase | Single | Multiple |
| Deployment | One deployment | Independent deployments |
| Scaling | Entire application | Individual services |
| Database | Shared | Service-owned |
| Fault Isolation | Low | High |
| Team Independence | Limited | High |
| Infrastructure Complexity | Low | High |
| Operational Cost | Lower | Higher |
| Release Velocity | Slower | Faster |
| Technology Choice | Limited | Flexible |

---

# Conway's Law

One of the most important organizational principles in software engineering is **Conway's Law**.

> Organizations design systems that mirror their communication structure.

Suppose an organization consists of:

```
Identity Team

Payments Team

Inventory Team

Recommendations Team
```

Over time, the architecture naturally evolves into:

```
Identity Service

Payments Service

Inventory Service

Recommendation Service
```

The architecture reflects organizational boundaries.

This insight is particularly important for TPMs because architecture and organizational design influence one another.

Reorganizing engineering teams often leads to architectural changes.

Likewise, architectural modernization frequently requires organizational restructuring.

---

# Choosing the Right Architecture

Neither architecture is universally superior.

The correct choice depends on business context.

### Choose a Monolith When

- Product is new
- Engineering team is small
- Requirements change rapidly
- Operational maturity is limited
- Deployment frequency is manageable

---

### Choose Microservices When

- Hundreds of engineers collaborate
- Teams require independent releases
- Platform traffic is large
- Multiple business domains exist
- Services require independent scaling
- Reliability and fault isolation are critical

---

# Evolution of Large Platforms

Many engineers assume successful technology companies began with microservices.

In reality, most followed a gradual evolution.

```
Small Monolith

        │

        ▼

Modular Monolith

        │

        ▼

Extract Critical Services

        │

        ▼

Hybrid Architecture

        │

        ▼

Microservices Platform
```

This progression minimizes disruption while allowing architecture to evolve alongside business growth.

Companies such as Amazon, Netflix, Uber, Spotify, and Airbnb followed variations of this journey.

---

# Migration Challenges

Migrating to microservices is one of the most complex engineering transformations an organization can undertake.

The technical work is only part of the challenge.

Common migration risks include:

| Technical Challenges | Organizational Challenges |
|----------------------|---------------------------|
| API redesign | Team restructuring |
| Database migration | Ownership changes |
| Distributed transactions | Skill development |
| Service discovery | Communication overhead |
| Observability | Governance |
| Deployment automation | Cross-team coordination |
| Version compatibility | Executive alignment |

Successful migrations require equal attention to technology, people, and process.

---

# TPM Responsibilities During Migration

Although architects define the target architecture, TPMs often own the migration program.

Typical responsibilities include:

- Create migration roadmap.
- Sequence service extraction.
- Identify cross-service dependencies.
- Coordinate engineering teams.
- Manage executive communication.
- Define success metrics.
- Maintain risk register.
- Plan deployment waves.
- Coordinate rollback strategies.
- Monitor migration progress.
- Facilitate architecture reviews.
- Drive production readiness.

Large-scale architectural transformations succeed through disciplined program execution as much as technical excellence.

---

# Real-world Example
A global e-commerce company has grown from one million to fifty million active users.

Its monolithic application now suffers from several problems:

- Four-hour deployment windows.
- Frequent production regressions.
- Long release approval cycles.
- Search traffic affecting checkout performance.
- Engineering teams blocking one another.
- Scaling costs increasing rapidly.

Engineering leadership proposes migrating to microservices.

Rather than attempting a complete rewrite, the TPM develops a phased migration program.

### Phase 1

- Identify business domains.
- Define service ownership.
- Establish API standards.

### Phase 2

Extract:

- Authentication
- Search
- Notifications

These services have minimal coupling and high scalability benefits.

### Phase 3

Extract higher-risk domains:

- Inventory
- Orders
- Payments

Additional governance is introduced because these services involve financial transactions and data consistency.

### Phase 4

Retire remaining monolith components after traffic stabilizes.

Throughout the migration, the TPM tracks:

- Deployment success rate
- Service latency
- Production incidents
- Rollback frequency
- Customer impact
- Team readiness
- Executive milestones

The success of the program depends as much on coordination, sequencing, communication, and risk management as it does on architecture itself.


# CAP Theorem

As organizations move from single-server applications to distributed systems, a new class of engineering challenges emerges.

Servers fail.

Networks become unreliable.

Data is replicated across regions.

Cloud infrastructure experiences temporary outages.

These realities introduce trade-offs that do not exist in traditional applications.

One of the most important principles that explains these trade-offs is the **CAP Theorem**.

Understanding CAP helps TPMs reason about architectural decisions, evaluate business risks, ask better questions during design reviews, and communicate technical trade-offs to stakeholders.

---

## Why CAP Theorem Exists

Imagine an application running on a single server.

```
        Client
          │
          ▼
     Single Server
          │
      Single Database
```

Life is relatively simple.

Every request reaches the server.

Every update is immediately visible.

There are no network partitions.

Now consider a global application.

```
        US Region

      Server A
          │
──────────┼──────────
          │
      Network
          │
──────────┼──────────
          │
      Server B

      Europe Region
```

Data must exist in multiple locations.

Servers communicate continuously.

Occasionally, communication breaks.

At that point, the system must decide how to behave.

CAP explains those decisions.

---

# The Three Properties

CAP stands for:

- **Consistency**
- **Availability**
- **Partition Tolerance**

These are not features.

They are guarantees that a distributed system may or may not provide under failure conditions.

---

## Consistency (C)

Consistency means that **every client sees the same data at the same time**.

After a successful write, all subsequent reads return the latest value.

Example:

```
Account Balance

₹5,000

↓

Deposit ₹1,000

↓

Every server returns

₹6,000
```

No user observes outdated information.

Consistency is particularly important for financial systems, inventory management, and identity services.

---

## Availability (A)

Availability means **every request receives a response**, even when parts of the system are experiencing failures.

The response may not always contain the most recent data.

However, the service remains operational.

```
User Request

↓

Server Responds

✓ Success

(Response may be slightly stale)
```

Availability focuses on maintaining service continuity.

---

## Partition Tolerance (P)

A partition occurs when distributed servers cannot communicate with one another.

```
       Region A

     Database A

         X

     Network Failure

         X

     Database B

       Region B
```

Although the databases continue running, synchronization becomes impossible until the network is restored.

Modern cloud systems assume that network partitions will inevitably occur.

Therefore, Partition Tolerance is considered mandatory for distributed architectures.

---

# Understanding the Trade-off

The most common misunderstanding about CAP is believing that systems choose any two of the three properties all the time.

That is not what CAP states.

The theorem specifically applies **during a network partition**.

When communication between nodes fails, a distributed system must choose between:

- Maintaining Consistency
- Maintaining Availability

It cannot fully guarantee both simultaneously.

```
              Consistency
                    ▲
                   / \
                  /   \
                 /     \
                /       \
               /         \
              /           \
 Availability────────────Partition Tolerance
```

Because cloud systems cannot ignore network failures, architects almost always assume Partition Tolerance.

The remaining decision becomes:

> During a partition, should the system prioritize correctness or responsiveness?

---

# CP Systems

CP systems prioritize:

- Consistency
- Partition Tolerance

If synchronization cannot be guaranteed, the system may reject requests until consistency is restored.

```
Write Request

↓

Network Partition

↓

Cannot synchronize

↓

Reject Request
```

Although users may temporarily experience failures, incorrect data is prevented.

---

## Where CP Makes Sense

Examples include:

- Banking systems
- Payment processing
- Securities trading
- Identity management
- Medical records
- Airline seat reservations

Incorrect information in these domains can have severe financial, legal, or safety consequences.

Correctness is more valuable than availability.

---

# AP Systems

AP systems prioritize:

- Availability
- Partition Tolerance

The application continues serving requests even if replicas temporarily disagree.

```
Write

↓

Replica A Updated

↓

Replica B Delayed

↓

Users Continue Reading
```

Some users may receive older information until synchronization completes.

---

## Where AP Makes Sense

Examples include:

- Social media feeds
- Product recommendations
- Analytics dashboards
- DNS
- News websites
- Search indexes
- Content Delivery Networks (CDNs)

These applications value responsiveness over immediate consistency.

Users rarely notice a few seconds of stale data.

---

# Eventual Consistency

Many large-scale distributed systems adopt **eventual consistency**.

Instead of synchronizing every update immediately, changes propagate asynchronously.

```
Write

↓

Primary Database

↓

Replication

↓

Replica 1

↓

Replica 2

↓

Replica 3
```

Eventually every replica converges to the same value.

The temporary period before synchronization completes is known as the **consistency window**.

---

## Real-World Example

Imagine you upload a profile picture.

Immediately afterward:

- Your phone displays the new image.
- Your laptop still shows the previous image.
- Your friend sees the old picture.
- Five seconds later, everyone sees the new picture.

Nothing is broken.

The system is eventually consistent.

The platform prioritized availability over immediate synchronization.

---

# Strong Consistency vs Eventual Consistency

| Strong Consistency | Eventual Consistency |
|--------------------|----------------------|
| Latest data is always returned | Data may temporarily be stale |
| Higher latency | Lower latency |
| Lower availability during failures | Higher availability during failures |
| More coordination required | Less coordination required |
| Best for financial systems | Best for internet-scale consumer systems |

---

# Business Perspective

The architectural decision should always begin with business requirements.

Consider these examples.

| Business Capability | Preferred Model | Reason |
|---------------------|-----------------|--------|
| Bank balance | Strong Consistency | Incorrect balances are unacceptable |
| Credit card payments | Strong Consistency | Prevent duplicate charges |
| Hospital records | Strong Consistency | Patient safety |
| Product catalog | Eventual Consistency | Minor delays acceptable |
| Product recommendations | Eventual Consistency | User experience prioritized |
| News Feed | Eventual Consistency | Freshness more important than precision |
| Analytics dashboards | Eventual Consistency | Small delays acceptable |

Notice that no database technology is mentioned.

Architecture follows business priorities, not technology preferences.

---

# CAP and Cloud Architecture

Every major cloud provider designs services around CAP trade-offs.

Examples include:

- Amazon DynamoDB
- Apache Cassandra
- Google Spanner
- Azure Cosmos DB
- MongoDB
- CockroachDB

Each database exposes different consistency models because different business problems require different trade-offs.

One of the responsibilities of architects is selecting the appropriate consistency model for the workload.

---

# TPM Perspective

Although TPMs rarely choose databases, they frequently lead programs whose success depends on architectural decisions.

Examples include:

- Global expansion
- Multi-region deployments
- Database migrations
- Disaster recovery
- Platform modernization
- Active-active architectures
- High availability initiatives

Understanding CAP enables TPMs to identify risks before they become production issues.

---

# Questions Great TPMs Ask

Instead of asking:

> "Which database are we using?"

Experienced TPMs ask:

- Is stale data acceptable for this workflow?
- Which customer journeys require strong consistency?
- What happens if regions lose connectivity?
- How long can replicas remain inconsistent?
- What is the acceptable recovery window?
- What customer impact occurs during synchronization delays?
- How are conflicts resolved after the partition heals?
- What business metrics validate this trade-off?

These questions connect technical architecture directly to customer outcomes.

---

# Common Mistakes
| Myth | Reality |
|------|---------|
| CAP means choosing any two properties. | CAP applies only during network partitions. |
| Eventual consistency means unreliable data. | Data eventually converges correctly. |
| Strong consistency is always better. | It depends on business requirements. |
| Availability means zero downtime. | Availability means the system continues responding to requests. |
| Partitions are rare. | Network failures are expected in distributed systems. |

---

# Interview Perspective

One of the most common TPM interview questions is:

> **"Would you choose a strongly consistent database or an eventually consistent database?"**

A weak answer focuses on technology.

> "I'd use SQL because it's consistent."

A strong answer starts with business requirements.

> "The choice depends on the business capability. For financial transactions, I would prioritize strong consistency because data correctness outweighs latency. For recommendations or product catalogs, eventual consistency is acceptable because users value responsiveness more than perfectly synchronized data."

Interviewers are evaluating whether you understand that architecture is driven by business priorities, customer experience, and engineering trade-offs rather than personal technology preferences.



---

## 5-Minute Revision

- Start with business outcomes, then define functional and non-functional requirements.
- Map core system components: clients, gateway, services, data, integrations, and observability.
- Evaluate architecture shape based on context: monolith for simplicity, microservices for independent scale and delivery.
- Use CAP as a trade-off lens under partition, not as a technology ranking.
- Plan migrations in phases with dependency clarity, rollback paths, and clear governance.
- In reviews, focus on assumptions, failure behavior, and measurable success criteria.

## Interview Questions

1. How do you decide if a monolith should evolve into microservices?
2. Which non-functional requirements most often change architecture direction?
3. How would you explain CAP trade-offs to a business stakeholder?
4. When is eventual consistency acceptable, and when is it not?
5. What risks do you track during a multi-team architecture migration?
6. How do you validate that a proposed architecture matches future scale?
7. What questions do you ask first in a TPM-led architecture review?
8. How do you connect architecture decisions to program sequencing and dependency plans?
9. Where does Conway's Law show up in real delivery risk?
10. Which metrics would confirm the architecture is working after launch?

# Key Takeaways

- TPMs need architectural literacy to plan, de-risk, and execute large technical programs.
- System design starts with business goals and balances functional and non-functional requirements.
- Monolith and microservices each offer advantages; architecture should match scale and team context.
- CAP theorem clarifies trade-offs between consistency and availability under partition.
- Strong TPMs frame technical discussions with structured questions and trade-off awareness.
- Interview success comes from connecting architectural choices to execution and business outcomes.


