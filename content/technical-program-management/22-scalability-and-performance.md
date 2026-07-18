## Executive Summary

This lesson explains how scalability, load balancing, and caching shape system performance, reliability, and cost at scale. It focuses on the trade-offs and execution decisions Senior and Staff TPMs must drive in high-growth systems.

---

# Why This Matters

As usage grows, architecture decisions around scaling and performance become program-level risks, not just technical details. TPMs are expected to identify bottlenecks early, align teams on mitigation strategy, and connect architecture choices to customer and business outcomes.

---

# Core Concepts

# Scalability Concepts

One of the defining characteristics of modern internet-scale systems is their ability to continue performing as demand increases.

Every successful product eventually encounters growth.

- More users
- More transactions
- More data
- More services
- More geographic regions
- More engineering teams

If a system cannot scale gracefully, growth itself becomes the cause of outages, degraded user experience, and increasing operational costs.

For Technical Program Managers, scalability is more than an engineering concern. It directly affects roadmap planning, infrastructure investment, capacity forecasting, release strategy, customer experience, and long-term platform evolution.

Understanding scalability allows TPMs to participate meaningfully in architecture discussions, identify capacity risks early, and ensure engineering programs are designed for future growth rather than current demand.

---

# What Is Scalability?

Scalability is the ability of a system to handle increasing workload while maintaining acceptable levels of performance, availability, and reliability.

Growth may come in many forms:

- Increasing number of users
- Higher request volume
- Larger datasets
- More concurrent sessions
- Additional business capabilities
- Global expansion

A scalable system grows without requiring a complete redesign.

---

# Scalability vs Performance

These terms are often confused.

They represent different concepts.

| Performance | Scalability |
|-------------|-------------|
| How fast the system performs today | How well the system performs as workload grows |
| Focuses on latency and throughput | Focuses on sustained growth |
| Measured under current load | Measured under increasing load |
| Improves user experience | Ensures long-term sustainability |

Example:

A system responding in 80 ms for 100 users has excellent performance.

If response time becomes 5 seconds with 10,000 users, the system is not scalable.

---

# Dimensions of Scalability

Growth rarely occurs along a single axis.

Large systems scale across multiple dimensions.

| Dimension | Example |
|-----------|---------|
| Users | Millions of active customers |
| Requests | Thousands of API calls per second |
| Data | Petabytes of stored information |
| Services | Hundreds of independent services |
| Geographic Regions | Global deployments |
| Engineering Teams | Hundreds of developers contributing simultaneously |

A successful architecture supports growth across each dimension.

---

# Vertical Scaling (Scaling Up)

Vertical scaling increases the capacity of a single machine.

```
Small Server

4 CPU
16 GB RAM

        │

Upgrade

        ▼

Large Server

64 CPU
512 GB RAM
```

The application continues running on one machine with more powerful hardware.

---

## Advantages

- Easy to implement
- Minimal architectural changes
- Simple deployment
- Low operational complexity

---

## Limitations

Every server has physical limits.

Eventually:

- CPU reaches maximum capacity.
- Memory becomes exhausted.
- Storage reaches hardware limits.

Hardware upgrades also become increasingly expensive.

Furthermore, a single server remains a single point of failure.

---

## Real-World Example

A startup initially deploys its application on a virtual machine.

As traffic grows:

```
2 CPU

↓

8 CPU

↓

16 CPU

↓

32 CPU
```

Eventually the organization reaches hardware limits and must redesign the architecture.

---

# Horizontal Scaling (Scaling Out)

Horizontal scaling adds additional machines instead of upgrading existing ones.

```
             Users

               │

        Load Balancer

      ┌────┬────┬────┐

      ▼    ▼    ▼

  Server  Server  Server
```

Each server processes part of the overall workload.

This is the foundation of modern cloud-native architectures.

---

## Advantages

- Nearly unlimited scalability
- Higher availability
- Fault tolerance
- Better resource utilization
- Easier geographic expansion

---

## Challenges

Horizontal scaling introduces distributed systems complexity.

Examples include:

- Data synchronization
- Session management
- Load balancing
- Distributed caching
- Service discovery
- Network latency

Scaling out is architecturally more complex than scaling up.

---

# Elastic Scaling

Cloud platforms introduced another important capability.

Infrastructure can automatically expand or shrink based on demand.

```
Morning

2 Servers

↓

Afternoon Peak

20 Servers

↓

Night

3 Servers
```

Elastic scaling optimizes both performance and infrastructure costs.

Public cloud providers offer automatic scaling through managed services, reducing manual operational effort.

---

# Stateless vs Stateful Services

Not every application scales equally.

The distinction between stateless and stateful services is critical.

---

## Stateless Services

A stateless service stores no client session information locally.

Every request contains everything required for processing.

```
Request

↓

Server A

or

Server B

or

Server C

↓

Same Result
```

Because requests are independent, traffic can be routed to any available server.

Stateless services are ideal candidates for horizontal scaling.

Examples include:

- REST APIs
- Authentication gateways
- Web frontends
- Search services

---

## Stateful Services

Stateful services retain information between requests.

Examples include:

- Database servers
- Shopping cart sessions stored in memory
- Multiplayer gaming servers
- Streaming sessions

Scaling stateful services is significantly more difficult because data must remain synchronized across instances.

---

# Throughput vs Latency

These are two of the most important performance metrics.

## Latency

Latency measures the time required to process a single request.

```
User Request

↓

150 milliseconds

↓

Response
```

Lower latency generally improves user experience.

---

## Throughput

Throughput measures how many requests a system processes over time.

Example:

```
25,000 Requests

Per Second
```

High-throughput systems are essential for internet-scale applications.

---

## Relationship

Improving latency does not always improve throughput.

Likewise, maximizing throughput may increase individual request latency.

Architects balance both according to business priorities.

---

# Capacity Planning

Scalable systems require proactive capacity planning.

Rather than waiting for failures, engineering organizations estimate future demand.

Typical planning questions include:

- How many users are expected next year?
- What peak traffic should the platform support?
- What seasonal events increase demand?
- What infrastructure investments are required?
- Which services will become bottlenecks first?

Capacity planning prevents reactive scaling during production incidents.

---

# Identifying Bottlenecks

Systems rarely fail everywhere simultaneously.

Growth usually exposes one constraint at a time.

Common bottlenecks include:

| Bottleneck | Example |
|------------|---------|
| CPU | Intensive computation |
| Memory | Large in-memory datasets |
| Network | High bandwidth consumption |
| Database | Slow queries |
| Storage | Disk throughput limitations |
| External APIs | Third-party rate limits |

A scalable architecture continuously identifies and removes bottlenecks as demand evolves.

---

# Scalability Patterns

Large platforms rarely rely on a single scaling technique.

Instead, they combine multiple architectural patterns.

Examples include:

- Horizontal scaling
- Load balancing
- Distributed caching
- Database replication
- Database sharding
- Asynchronous messaging
- Content Delivery Networks (CDNs)
- Auto Scaling
- Queue-based processing
- Read replicas

Each pattern addresses a different scalability challenge.

The following sections examine these techniques in detail.

---

# Business Perspective

Scalability decisions are ultimately business decisions.

Suppose an e-commerce company expects a tenfold increase in traffic during a global sales event.

Engineering leadership has several options:

| Option | Business Impact |
|---------|-----------------|
| Purchase larger servers | Higher infrastructure cost |
| Add more application instances | Better availability |
| Introduce caching | Lower database load |
| Deploy globally | Lower customer latency |
| Use asynchronous processing | Faster customer response |
| Optimize database queries | Reduced infrastructure spending |

The optimal solution depends on balancing customer experience, engineering effort, operational risk, and financial cost.

---

# TPM Perspective

During planning and architecture reviews, TPMs should understand how growth assumptions influence execution.

Typical questions include:

- What growth projections is this architecture designed to support?
- Which component becomes the bottleneck first?
- Can services scale independently?
- What happens if traffic doubles overnight?
- How is capacity monitored?
- What thresholds trigger auto scaling?
- How are scaling decisions validated during load testing?
- What contingency plans exist if projected demand exceeds expectations?

These questions help uncover scalability risks long before they impact customers.

---

# Common Mistakes

| Myth | Reality |
|------|---------|
| Scaling means buying larger servers. | Modern systems primarily scale horizontally. |
| Performance automatically implies scalability. | A fast system may still fail under increased load. |
| Auto scaling solves every scalability problem. | Poor architecture cannot be fixed by adding servers. |
| Databases scale like application servers. | Stateful systems require specialized scaling strategies. |
| Scalability is only an infrastructure concern. | It influences architecture, product planning, and business growth. |

---

# Interview Perspective

A common TPM interview question is:

> **"How would you design a system that supports ten times more traffic than today?"**

Strong candidates avoid immediately proposing technologies.

Instead, they reason systematically:

1. Understand expected growth.
2. Identify existing bottlenecks.
3. Determine whether the application is stateless.
4. Evaluate horizontal scaling opportunities.
5. Introduce load balancing.
6. Reduce database pressure through caching.
7. Scale the data layer appropriately.
8. Use asynchronous processing where suitable.
9. Validate assumptions with load testing.
10. Define monitoring and success metrics.

Interviewers are assessing structured architectural thinking rather than memorization of cloud services.


# Load Balancing

As systems grow, a single server quickly becomes insufficient to handle increasing traffic.

Modern applications solve this challenge by deploying multiple instances of the same service. However, simply adding more servers is not enough. Incoming requests must be distributed intelligently across those servers.

This is the role of a **Load Balancer**.

Load balancing is one of the foundational building blocks of scalable, highly available, and fault-tolerant distributed systems. Nearly every internet-scale platform, from Amazon and Google to Netflix and Stripe, relies on load balancing to deliver reliable customer experiences.

For TPMs, understanding load balancing is essential because it directly influences scalability planning, disaster recovery, deployment strategies, infrastructure costs, and production reliability.

---

# What Is a Load Balancer?

A **Load Balancer** is a component that distributes incoming client requests across multiple backend servers.

Instead of every client connecting directly to an application server, all traffic first passes through the load balancer.

```
                 Users
                   │
                   ▼
          ┌────────────────┐
          │ Load Balancer  │
          └────────────────┘
            │      │      │
            ▼      ▼      ▼
        App-1   App-2   App-3
```

The objective is simple:

- Prevent server overload
- Improve response time
- Increase availability
- Enable horizontal scaling
- Improve fault tolerance

---

# Why Load Balancing Is Necessary

Imagine an application with only one server.

```
Users

↓

Application Server

↓

Database
```

As traffic increases:

- CPU utilization reaches 100%.
- Memory becomes exhausted.
- Response times increase.
- Requests begin failing.
- Customers experience outages.

Adding additional servers helps only if traffic is distributed across them.

```
Without Load Balancer

User A → Server 1

User B → Server 1

User C → Server 2

User D → Server 3

Traffic distribution becomes unpredictable.
```

A load balancer ensures that no individual server becomes overwhelmed while others remain underutilized.

---

# Basic Architecture

A typical web application architecture looks like this.

```
                    Internet

                        │

                        ▼

               DNS Resolution

                        │

                        ▼

               Load Balancer

          ┌────────┼────────┐

          ▼        ▼        ▼

      App-1     App-2     App-3

          │        │        │

          └────────┼────────┘

                   ▼

               Database
```

The client never knows which application server ultimately processes the request.

The load balancer makes that decision.

---

# Benefits of Load Balancing

## Improved Scalability

Additional servers can be added without changing the client application.

```
Today

3 Servers

↓

Tomorrow

30 Servers
```

Traffic automatically spreads across the expanded infrastructure.

---

## High Availability

If one application server fails, the load balancer redirects requests to healthy servers.

```
App-2

❌ Offline

↓

Traffic automatically routed to

App-1

App-3
```

Customers continue using the application with little or no interruption.

---

## Better Resource Utilization

Instead of one server running at maximum capacity while others remain idle, requests are distributed more evenly.

Balanced utilization improves both performance and infrastructure efficiency.

---

## Simplified Maintenance

Servers can be removed from service temporarily without affecting customers.

Example:

```
Take App-2 Offline

↓

Deploy New Version

↓

Health Check Passes

↓

Add Back to Pool
```

This enables rolling deployments with minimal customer impact.

---

# Load Balancing Algorithms

Not every request is distributed the same way.

Different algorithms optimize for different workloads.

---

## Round Robin

The simplest algorithm.

Requests are distributed sequentially.

```
Request 1 → Server A

Request 2 → Server B

Request 3 → Server C

Request 4 → Server A
```

Advantages:

- Simple
- Predictable
- Easy to implement

Limitations:

- Assumes every server has identical capacity.

---

## Weighted Round Robin

Some servers have more computing power than others.

Weights allow larger servers to receive more traffic.

```
Server A

Weight 3

Server B

Weight 2

Server C

Weight 1
```

Server A processes more requests because it has greater capacity.

---

## Least Connections

Traffic is directed to the server handling the fewest active requests.

```
Server A

120 Connections

Server B

40 Connections

↓

Next Request

↓

Server B
```

Useful when request durations vary significantly.

---

## Least Response Time

The load balancer selects the server responding most quickly.

This algorithm improves user experience by dynamically avoiding slower instances.

---

## IP Hash

The client's IP address determines which server receives the request.

```
Client IP

↓

Hash Function

↓

Specific Server
```

This helps maintain session affinity for stateful applications.

---

# Health Checks

A load balancer continuously verifies that backend servers are healthy.

Typical health checks include:

- HTTP endpoint
- TCP connectivity
- Application status
- Database connectivity
- Custom health APIs

```
Health Check

↓

App-1

✓ Healthy

↓

Receives Traffic

--------------------

App-2

❌ Failed

↓

Removed Automatically
```

Only healthy servers remain eligible to receive customer requests.

---

# Active-Active vs Active-Passive

Load balancing strategies differ depending on availability requirements.

## Active-Active

All servers process traffic simultaneously.

```
Users

↓

Load Balancer

↓

App-1

App-2

App-3
```

Advantages:

- Better resource utilization
- Higher throughput
- Automatic redundancy

This is the most common architecture in cloud-native applications.

---

## Active-Passive

Only one server actively handles requests.

A secondary server waits until the primary fails.

```
Primary

↓

Serving Traffic

Secondary

↓

Standby
```

This approach is common in legacy systems and certain disaster recovery scenarios.

---

# Layer 4 vs Layer 7 Load Balancing

Load balancers operate at different layers of the OSI networking model.

| Layer 4 | Layer 7 |
|----------|----------|
| Uses TCP/UDP information | Uses HTTP/HTTPS information |
| Faster | More intelligent routing |
| Routes based on IP and ports | Routes based on URLs, headers, cookies, hostnames |
| Lower processing overhead | Greater flexibility |

---

## Layer 4 Example

```
Port 443

↓

Forward to Server Pool
```

The load balancer does not inspect the request contents.

---

## Layer 7 Example

```
/payments

↓

Payments Service

---------------------

/orders

↓

Orders Service

---------------------

/users

↓

Identity Service
```

Modern API gateways commonly perform Layer 7 load balancing.

---

# Global Load Balancing

Large organizations often deploy applications across multiple geographic regions.

```
              Global DNS

                  │

      ┌───────────┴───────────┐

      ▼                       ▼

US Region               Europe Region

      ▼                       ▼

Application          Application
Cluster              Cluster
```

Traffic is routed to the closest or healthiest region.

Benefits include:

- Lower latency
- Disaster recovery
- Regional fault isolation
- Improved customer experience

---

# Load Balancing During Deployments

Modern deployment strategies depend heavily on load balancing.

Example: **Rolling Deployment**

```
Server 1

↓

Remove From Pool

↓

Deploy

↓

Health Check

↓

Rejoin Pool

↓

Repeat
```

Customers continue using the application while deployments occur incrementally.

This minimizes downtime and deployment risk.

---

# Common Failure Scenarios

Even load balancers can become bottlenecks if poorly designed.

Potential issues include:

| Failure | Impact |
|----------|--------|
| Single Load Balancer | Single point of failure |
| Incorrect Health Checks | Requests routed to unhealthy servers |
| Uneven Distribution | Server overload |
| Sticky Sessions | Poor utilization |
| DNS Misconfiguration | Traffic routing failures |

To avoid these risks, production systems often deploy redundant load balancers with automated failover mechanisms.

---

# TPM Perspective

Load balancing decisions influence many program-level concerns.

During architecture reviews, TPMs should explore questions such as:

- What happens if an application instance fails?
- How quickly is failed infrastructure detected?
- Which load balancing algorithm is being used?
- Can infrastructure scale automatically?
- How are deployments performed without downtime?
- Is the load balancer itself highly available?
- How are health checks monitored?
- Are there regional failover mechanisms?

These questions help identify reliability risks before they affect customers.

---

# Real-world Example

A video streaming platform expects traffic to increase by 400% during a major sporting event.

Without load balancing:

- One application server becomes overloaded.
- Video playback buffers.
- Login requests fail.
- Customer support tickets increase dramatically.

Engineering introduces:

- Auto Scaling Groups
- Layer 7 Load Balancers
- Health Checks
- Multi-region traffic routing
- Rolling deployments

The TPM coordinates:

- Capacity planning
- Load testing milestones
- Regional rollout
- Monitoring dashboards
- Incident response plans
- Executive readiness reviews

The event completes successfully with no customer-visible outages.

The success was not achieved by adding more servers alone, but by intelligently distributing traffic across resilient infrastructure.

---

# Common Mistakes

| Myth | Reality |
|------|---------|
| A load balancer makes applications faster. | It distributes workload; application performance still depends on backend efficiency. |
| One load balancer is enough. | Production systems typically deploy redundant load balancers. |
| Load balancing eliminates failures. | It minimizes the impact of failures but cannot prevent them. |
| Every request should go to the same server. | Stateless applications benefit from distributing requests across all healthy instances. |
| Load balancing is only for large companies. | Even small cloud-native applications commonly use managed load balancers. |

---

# Interview Perspective

A common TPM interview question is:

> **"Your application is experiencing high latency during peak traffic. How would you improve scalability?"**

A strong response demonstrates structured reasoning rather than immediately recommending additional servers.

A high-level approach might include:

1. Measure where latency originates.
2. Identify the primary bottleneck.
3. Horizontally scale stateless application services.
4. Introduce or optimize load balancing.
5. Validate health checks and failover behavior.
6. Reduce unnecessary database traffic through caching.
7. Conduct load testing to verify improvements.
8. Monitor latency, throughput, and error rates after deployment.

Interviewers are evaluating whether you understand that load balancing is one component of a broader scalability strategy rather than a standalone solution.


# Caching

As systems scale, databases often become the first bottleneck.

Even well-designed databases have physical limits. Every read request consumes CPU, memory, storage bandwidth, and network resources. When millions of users repeatedly request the same data, querying the database for every request becomes expensive, slow, and increasingly difficult to scale.

Caching addresses this problem by storing frequently accessed data in faster storage, allowing applications to serve requests without repeatedly accessing the primary database.

For many large-scale systems, caching is one of the highest-return architectural optimizations. It reduces latency, lowers infrastructure costs, improves throughput, and significantly increases system scalability.

For TPMs, understanding caching is important because it affects architecture decisions, infrastructure planning, production incidents, customer experience, and capacity forecasting.

---

# What Is Caching?

A cache is a temporary storage layer that keeps frequently accessed data closer to the application or the user.

Instead of retrieving information from the original data source every time, the application first checks whether the requested data already exists in the cache.

```
               Client
                  │
                  ▼
           Application Server
                  │
          ┌───────┴────────┐
          │                │
      Cache Hit       Cache Miss
          │                │
          ▼                ▼
     Return Data      Database Query
          │                │
          └───────┬────────┘
                  ▼
             Client Response
```

If the data is available in the cache, the request is served immediately.

If not, the application retrieves the data from the database, returns it to the client, and usually stores a copy in the cache for future requests.

---

# Why Caching Matters

Consider an e-commerce website.

Suppose one million users visit the homepage every hour.

Every homepage request requires:

- Product categories
- Featured products
- Promotional banners
- Navigation menus

Without caching:

```
Every User

↓

Database Query

↓

Database Load Increases
```

The database repeatedly performs identical work.

With caching:

```
First Request

↓

Database

↓

Cache

↓

Subsequent Requests

↓

Served Directly From Cache
```

The database handles significantly fewer requests, allowing it to focus on operations that truly require fresh data.

---

# Benefits of Caching

## Reduced Latency

Cache storage is significantly faster than persistent databases.

Approximate response times:

| Storage Layer | Typical Response Time |
|--------------|-----------------------|
| CPU Cache | Nanoseconds |
| Memory Cache | Microseconds |
| Redis / Memcached | Sub-milliseconds |
| SSD Database | Milliseconds |
| Disk Storage | Tens of milliseconds |

Serving data from memory instead of disk dramatically improves customer experience.

---

## Higher Throughput

Because the database processes fewer requests, the application can support many more users.

Example:

Without cache:

```
Database

5,000 Requests/Second
```

With cache:

```
Database

500 Requests/Second

Cache

45,000 Requests/Second
```

The overall platform scales much more efficiently.

---

## Lower Infrastructure Cost

Databases are typically among the most expensive infrastructure components.

Reducing database traffic allows organizations to:

- Delay hardware upgrades
- Reduce cloud costs
- Improve resource utilization
- Increase database lifespan

Caching is often cheaper than continuously scaling databases.

---

## Improved Availability

If a database experiences temporary latency, cached data can continue serving customer requests.

Although cached data may be slightly outdated, the application remains responsive.

---

# Types of Caching

Modern systems employ caching at multiple layers.

---

## Browser Cache

The browser stores static assets locally.

Examples include:

- Images
- CSS files
- JavaScript
- Fonts
- Logos

```
User Visits Website

↓

Browser Downloads Logo

↓

Future Visits

↓

Load From Browser Cache
```

This reduces network traffic and accelerates page loading.

---

## CDN Cache

A Content Delivery Network (CDN) stores static content at geographically distributed edge locations.

```
User

↓

Nearest CDN

↓

Cached Image

↓

No Origin Server Request
```

CDNs reduce latency for global users while minimizing traffic to the application's origin servers.

Examples include:

- Cloudflare
- Amazon CloudFront
- Azure CDN
- Google Cloud CDN

---

## Application Cache

Application servers cache frequently requested business data.

Examples include:

- Product details
- User preferences
- Configuration values
- Feature flags

Application caches reduce repetitive database queries.

---

## Distributed Cache

Large-scale systems often use dedicated caching platforms shared across multiple application servers.

```
Application Servers

      │

      ▼

Distributed Cache

(Redis)

      │

      ▼

Database
```

Popular technologies include:

- Redis
- Memcached

Distributed caches enable consistent caching across multiple application instances.

---

# Cache Hit vs Cache Miss

Every cache request results in one of two outcomes.

## Cache Hit

The requested data already exists.

```
Application

↓

Cache

↓

Found

↓

Return Data
```

The database is never accessed.

---

## Cache Miss

The requested data is absent.

```
Application

↓

Cache

↓

Not Found

↓

Database

↓

Store In Cache

↓

Return Data
```

The goal of every caching strategy is to maximize cache hits while minimizing misses.

---

# Cache Eviction Policies

Caches have limited memory.

Eventually, older entries must be removed.

Common eviction strategies include:

| Policy | Description |
|---------|-------------|
| LRU (Least Recently Used) | Removes data that has not been accessed recently |
| LFU (Least Frequently Used) | Removes rarely accessed items |
| FIFO | Removes oldest entries first |
| TTL (Time To Live) | Automatically expires data after a configured duration |

Different workloads require different eviction strategies.

---

# Cache Invalidation

One of the hardest problems in distributed systems is ensuring cached data remains accurate.

Imagine a customer updates their shipping address.

```
Database

Updated

↓

Cache

Old Value

↓

Customer Reads Profile

↓

Incorrect Address
```

The cache now contains stale data.

This issue is known as **cache invalidation**.

---

# Cache Invalidation Strategies

## Time-Based Expiration

Each cache entry expires after a fixed duration.

```
Cache Entry

↓

Expires After

10 Minutes
```

Simple to implement but may temporarily serve stale information.

---

## Write-Through Cache

The application updates both the database and the cache simultaneously.

```
Application

↓

Database Update

↓

Cache Update
```

This keeps cached data synchronized but increases write latency.

---

## Cache-Aside (Lazy Loading)

The application updates the database.

The cache entry is removed.

The next read reloads the latest value.

```
Update Database

↓

Delete Cache Entry

↓

Next Read

↓

Reload Into Cache
```

This is one of the most widely used caching patterns.

---

## Write-Back Cache

Updates are written to the cache first.

The database is updated asynchronously.

```
Application

↓

Cache

↓

Background Sync

↓

Database
```

This provides very fast writes but introduces durability and consistency challenges.

---

# Common Data Suitable for Caching

Not every piece of data should be cached.

Good candidates include:

- Product catalog
- Search results
- User profiles
- Configuration settings
- Feature flags
- Currency exchange rates
- Navigation menus
- Public APIs

Poor candidates include:

- Payment transactions
- Real-time stock trading
- Banking balances
- Security tokens with strict validation requirements

The choice depends on how much temporary staleness the business can tolerate.

---

# Distributed Caching Challenges

Caching introduces new complexities.

| Challenge | Description |
|-----------|-------------|
| Stale Data | Cache contains outdated information |
| Cache Stampede | Multiple requests simultaneously miss the cache and overload the database |
| Cache Consistency | Multiple cache instances become inconsistent |
| Memory Limits | Large datasets exceed available cache capacity |
| Cache Warm-Up | Newly deployed services initially experience low cache hit rates |

Large-scale platforms invest heavily in cache management to mitigate these issues.

---

# Business Perspective

Consider a global streaming platform.

The homepage is requested millions of times every hour.

Without caching:

- Every request queries multiple databases.
- Response times increase.
- Infrastructure costs rise.
- Database clusters require frequent scaling.

By introducing:

- Browser caching
- CDN caching
- Redis
- Application caching

the platform reduces database traffic by over 90%, improves page load times, and significantly lowers operational costs.

This architectural investment directly improves both customer experience and business profitability.

---

# TPM Perspective

Caching decisions influence several aspects of program execution.

During architecture reviews, TPMs should ask questions such as:

- Which data is being cached?
- How long does cached data remain valid?
- What is the expected cache hit ratio?
- How is stale data handled?
- Which cache invalidation strategy is being used?
- What happens if the cache becomes unavailable?
- Can the application continue operating without the cache?
- How is cache performance monitored?

These questions help uncover risks related to performance, correctness, and operational resilience.

---

# Common Mistakes

| Myth | Reality |
|------|---------|
| Caching always improves performance. | Poorly designed caching can increase complexity and introduce stale data. |
| Every database query should be cached. | Frequently changing or transactional data may not be suitable for caching. |
| Cache eliminates the need for database optimization. | Efficient database design remains essential. |
| Larger caches always improve performance. | Cache effectiveness depends on access patterns, not just size. |
| Cache consistency is automatic. | Cache invalidation requires deliberate design. |

---

# Interview Perspective

---

## 5-Minute Revision

- Distinguish scaling capacity from optimizing performance.
- Use vertical, horizontal, and elastic scaling based on workload and constraints.
- Identify bottlenecks with latency, throughput, utilization, and saturation signals.
- Design load balancing with health checks, failover mode, and algorithm fit.
- Apply caching where read amplification is high and staleness is acceptable.
- Track hit ratio, p95 latency, error rate, and cost before and after changes.

## Interview Questions

1. How would you triage peak-hour latency regressions in a fast-growing product?
2. What criteria determine vertical versus horizontal scaling for a service?
3. How do you decide between active-active and active-passive traffic patterns?
4. Which load balancing algorithm would you choose for uneven request costs and why?
5. How would you design a rollout plan for introducing distributed caching?
6. What guardrails prevent cache changes from causing stale-data incidents?
7. How do you quantify business impact from latency improvements?
8. What are common hidden bottlenecks after an autoscaling rollout?
9. How would you sequence scalability work across app, cache, and database layers?
10. Which interview metrics best demonstrate your scalability decision quality?

# Key Takeaways

- Scalability and performance are distinct: scaling supports growth, performance optimizes response and throughput.
- Vertical, horizontal, and elastic scaling each solve different capacity problems with different constraints.
- Load balancing, health checks, and failover design are core to high-traffic reliability and latency control.
- Caching across browser, CDN, application, and distributed layers is a major lever for performance and cost.
- TPMs should track bottlenecks, scaling assumptions, and operational readiness throughout rollout plans.
