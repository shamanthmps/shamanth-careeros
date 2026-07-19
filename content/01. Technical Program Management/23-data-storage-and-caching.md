## Executive Summary

This lesson covers data-layer foundations for large systems: caching, SQL and NoSQL models, indexing, replication, sharding, and database selection trade-offs. The focus is on how these decisions influence reliability, latency, cost, and execution risk.

---

# Why This Matters

Data architecture directly affects customer experience and delivery risk. TPMs need enough depth to challenge assumptions, sequence migrations safely, and ensure capacity and reliability plans match business growth.

---

# Core Concepts

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

A common TPM interview question is:

> **"Your application's database CPU utilization has reached 95% during peak traffic. What architectural improvements would you consider?"**

A strong answer demonstrates structured thinking:

1. Confirm the database is the actual bottleneck.
2. Identify high-read workloads.
3. Introduce caching for frequently accessed data.
4. Select an appropriate cache strategy.
5. Define cache invalidation rules.
6. Measure cache hit ratio.
7. Monitor latency and database load after implementation.
8. Consider additional optimizations such as read replicas or query tuning if necessary.

Strong candidates recognize that caching is not merely a performance optimization. It is a strategic architectural pattern that enables scalability, improves customer experience, and reduces infrastructure costs while introducing new consistency trade-offs that must be managed carefully.


# Databases

Every modern software system revolves around data.

Users authenticate, products are purchased, payments are processed, videos are streamed, messages are exchanged, and analytics are generated. Behind each of these interactions lies one or more databases responsible for storing, retrieving, updating, and protecting information.

As organizations grow, database architecture often becomes one of the most important factors influencing scalability, performance, reliability, and operational cost.

For TPMs, understanding databases is not about becoming a database administrator. Instead, it is about understanding why architects choose particular database technologies, recognizing the trade-offs involved, and coordinating programs that depend on those architectural decisions.

---

# What Is a Database?

A database is a system that stores and manages data in a structured manner, allowing applications to efficiently create, retrieve, update, and delete information.

```
            Application

                 │

                 ▼

            Database

                 │

     Users   Orders   Payments
```

Databases provide several essential capabilities:

- Persistent storage
- Data retrieval
- Concurrent access
- Data integrity
- Security
- Backup and recovery

Nearly every business application depends on these capabilities.

---

# Why Databases Matter

Imagine an online shopping platform.

Without a database:

- Users cannot log in.
- Products cannot be displayed.
- Orders cannot be stored.
- Inventory cannot be tracked.
- Payments cannot be reconciled.

The database serves as the system of record for business operations.

As traffic grows, database design directly influences:

- Application performance
- Customer experience
- Scalability
- Availability
- Infrastructure cost

Choosing the right database is therefore an architectural decision with significant business consequences.

---

# Relational Databases

Relational databases organize data into structured tables connected through relationships.

Example:

```
Customers

+------------+
| CustomerID |
| Name       |
+------------+

Orders

+----------+
| OrderID  |
| Customer |
+----------+
```

Relationships enable powerful queries across multiple datasets.

Popular relational databases include:

- PostgreSQL
- MySQL
- Microsoft SQL Server
- Oracle Database

---

## Advantages

Relational databases provide:

- Strong consistency
- ACID transactions
- Mature tooling
- Powerful SQL querying
- Referential integrity
- Reliable data validation

They are well suited for systems requiring transactional accuracy.

---

## Common Use Cases

Examples include:

- Banking systems
- Payment platforms
- ERP systems
- CRM platforms
- Inventory management
- Financial reporting

These domains prioritize correctness over flexibility.

---

# NoSQL Databases

As internet-scale applications evolved, many workloads no longer fit neatly into relational models.

NoSQL databases were designed to support:

- Massive scale
- Flexible schemas
- High throughput
- Distributed architectures

Rather than using one universal data model, NoSQL databases optimize for specific workloads.

---

# Types of NoSQL Databases

## Key-Value Stores

Data is stored as simple key-value pairs.

```
Key

↓

User123

↓

Value

{Name, Email, Preferences}
```

Advantages:

- Extremely fast lookups
- Simple architecture
- Excellent scalability

Examples:

- Redis
- Amazon DynamoDB
- Riak

---

## Document Databases

Documents store semi-structured information using formats such as JSON.

```
Customer

{

Name

Orders

Preferences

Addresses

}
```

Advantages:

- Flexible schema
- Easy application integration
- Good developer productivity

Examples:

- MongoDB
- Couchbase
- Firestore

---

## Column-Family Databases

Data is organized by columns instead of rows.

Designed for:

- Large-scale analytics
- Time-series data
- Massive write throughput

Examples:

- Apache Cassandra
- Google Bigtable
- HBase

---

## Graph Databases

Graph databases model relationships directly.

```
Customer

↓

Purchased

↓

Product

↓

Recommended

↓

Another Product
```

Ideal for:

- Social networks
- Recommendation engines
- Fraud detection
- Knowledge graphs

Examples:

- Neo4j
- Amazon Neptune

---

# SQL vs NoSQL

Neither approach is universally superior.

The appropriate choice depends on business requirements.

| SQL | NoSQL |
|------|--------|
| Structured schema | Flexible schema |
| Strong consistency | Configurable consistency |
| ACID transactions | High scalability |
| Complex joins | Optimized for distributed workloads |
| Mature querying | Workload-specific querying |
| Vertical and horizontal scaling | Primarily horizontal scaling |

Successful technology companies often use both.

This approach is known as **polyglot persistence**, where different databases are selected for different workloads.

---

# ACID Properties

Relational databases are known for supporting **ACID** transactions.

These guarantees ensure reliable processing of business-critical operations.

| Property | Meaning |
|----------|---------|
| Atomicity | Entire transaction succeeds or fails |
| Consistency | Database always remains valid |
| Isolation | Concurrent transactions do not interfere |
| Durability | Committed changes survive failures |

Example:

A bank transfer involves:

```
Withdraw ₹500

↓

Deposit ₹500

↓

Commit
```

If any step fails, the entire transaction rolls back.

This prevents inconsistent financial records.

---

# CAP and Database Selection

Earlier, we explored the CAP Theorem.

Database technologies differ primarily in how they balance:

- Consistency
- Availability
- Partition Tolerance

Examples:

| Database | Typical Strength |
|----------|------------------|
| PostgreSQL | Strong consistency |
| Oracle | Strong consistency |
| DynamoDB | High availability |
| Cassandra | Massive scalability |
| Redis | Extremely low latency |
| MongoDB | Flexible document storage |

Architects select databases according to workload characteristics rather than popularity.

---

# Database Scaling

As applications grow, databases eventually become bottlenecks.

Several architectural techniques help address this challenge.

---

## Read Replicas

Additional database replicas handle read-only traffic.

```
              Primary

             Database

           /     |     \

      Replica Replica Replica
```

Benefits:

- Higher read throughput
- Reduced primary database load
- Improved availability

Common workloads include:

- Reporting
- Dashboards
- Product catalogs
- Search

---

## Database Sharding

Instead of storing all data in one database, records are distributed across multiple databases.

```
Users A-F

↓

Shard 1

----------------

Users G-M

↓

Shard 2

----------------

Users N-Z

↓

Shard 3
```

Benefits:

- Higher scalability
- Better write performance
- Reduced storage constraints

Challenges include:

- Cross-shard queries
- Operational complexity
- Data rebalancing

---

## Partitioning

Large tables may be divided into logical partitions.

Example:

```
Orders

2024

↓

Partition 1

2025

↓

Partition 2

2026

↓

Partition 3
```

Partitioning improves query performance and simplifies maintenance.

---

# Indexing

Searching every row in a large table is inefficient.

Indexes provide shortcuts for locating data quickly.

Without an index:

```
Search

↓

1 Million Records

↓

Sequential Scan
```

With an index:

```
Search

↓

Index Lookup

↓

Direct Record Access
```

Indexes dramatically improve query performance but require additional storage and increase write overhead.

---

# Database Bottlenecks

Common causes of database performance issues include:

| Bottleneck | Example |
|-----------|---------|
| Missing indexes | Slow queries |
| Large joins | High CPU utilization |
| Hot partitions | Uneven traffic distribution |
| Excessive writes | Storage contention |
| Connection limits | Application timeouts |
| Inefficient queries | Increased latency |

Successful scalability programs often begin by identifying these bottlenecks.

---

# Choosing the Right Database

Architects typically evaluate several factors before selecting a database.

| Question | Why It Matters |
|----------|----------------|
| What type of data is stored? | Determines suitable data model |
| How much consistency is required? | Influences database selection |
| What is the expected workload? | Read-heavy vs write-heavy |
| How rapidly will data grow? | Determines scalability needs |
| What latency is acceptable? | Guides performance optimization |
| What recovery objectives exist? | Influences replication strategy |
| Are global deployments required? | Determines replication architecture |

Database selection is fundamentally a business decision supported by technical analysis.

---

# TPM Perspective

Database architecture affects multiple aspects of program execution.

During planning and design reviews, TPMs should understand:

- Which database technologies are being used?
- Why was this database selected?
- What consistency guarantees are required?
- How will the database scale over the next three years?
- Which services depend on this database?
- What is the migration strategy?
- What are the backup and disaster recovery plans?
- How will database changes be deployed without downtime?

These questions enable TPMs to identify architectural risks and coordinate cross-functional dependencies effectively.

---

# Real-world Example

A global retail platform stores all customer, product, inventory, and order information in a single relational database.

As the business expands internationally:

- Read traffic increases tenfold.
- Analytics queries interfere with customer transactions.
- Database CPU utilization exceeds 90%.
- Checkout latency rises during peak shopping events.

Engineering evaluates several improvements:

- Introduce Redis for frequently accessed product data.
- Add read replicas for reporting workloads.
- Partition historical order tables.
- Shard customer data by geographic region.
- Move recommendation data to a document database.

Rather than replacing the existing database, the architecture evolves incrementally.

The TPM coordinates:

- Migration planning
- Dependency tracking
- Data validation
- Rollback strategies
- Production readiness
- Executive communication
- Success metrics

The result is a scalable architecture achieved through careful program execution rather than disruptive system replacement.

---

# Common Mistakes

| Myth | Reality |
|------|---------|
| SQL databases cannot scale. | Modern relational databases support significant horizontal and vertical scaling techniques. |
| NoSQL is always faster. | Performance depends on workload and data access patterns. |
| One database should handle every workload. | Large organizations commonly adopt multiple specialized databases. |
| Adding hardware solves database problems. | Poor schema design and inefficient queries often remain bottlenecks. |
| Database migration is purely technical. | Successful migrations require coordinated planning, governance, testing, and stakeholder alignment. |

---

# Interview Perspective

---

## 5-Minute Revision

- Choose data models based on access patterns, consistency needs, and change velocity.
- Use SQL for strong relational integrity and NoSQL for scale-flexibility trade-offs.
- Improve read scale with replication, read replicas, and caching.
- Improve write and volume scale with sharding and partitioning.
- Use indexing intentionally; monitor write overhead and query effectiveness.
- Treat cache invalidation as a design decision, not an implementation detail.

## Interview Questions

1. How would you select between SQL and NoSQL for a new high-growth product?
2. What failure modes do you watch for when introducing read replicas?
3. How do sharding and partitioning change program complexity?
4. Which cache invalidation strategy would you choose for profile updates and why?
5. How would you stage a database migration with minimal customer impact?
6. What signals indicate indexing strategy is hurting overall performance?
7. How do you decide what data should never be cached?
8. How would you balance consistency and latency in global read-heavy systems?
9. What architecture review questions uncover hidden data-layer risk?
10. How do you explain database trade-offs to senior non-engineering stakeholders?

# Key Takeaways

- Data architecture choices directly impact scale, reliability, latency, and cost.
- SQL and NoSQL models fit different access patterns, consistency needs, and product constraints.
- Replication, sharding, partitioning, read replicas, and indexing are essential scaling mechanisms.
- Distributed caching and invalidation strategy must be designed explicitly to avoid stale or inconsistent reads.
- TPMs should enforce clear database decision criteria and operational safeguards during growth phases.
