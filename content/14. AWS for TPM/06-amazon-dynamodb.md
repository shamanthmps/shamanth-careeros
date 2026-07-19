# Amazon DynamoDB

## Executive Summary
DynamoDB is AWS's NoSQL database — designed for high-scale, low-latency workloads where you need millisecond access at millions of requests per second. For TPMs, DynamoDB represents the trade-off: simpler scaling model than SQL but requires rethinking the data model.

## Why This Matters
- TPM relevance: DynamoDB enables scaling scenarios that would be operationally complex in RDS.
- Interview relevance: NoSQL vs SQL trade-off is a core architecture question.

## Core Concepts
### DynamoDB Basics
- NoSQL: Flexible schema, no joins, designed for partition and scale.
- Provisioned throughput: Capacity units you reserve (predictable costs).
- On-demand: Pay per request (unpredictable workloads).
- Primary key (partition key + sort key) drives data distribution.

### Scaling Model
- Automatic scaling: Based on usage, adjusts capacity.
- On-demand: Infinitely scalable but can incur surprise costs.
- Global tables: Multi-region replication for resilience.

### Internal Working
Application -> DynamoDB API -> Partition (by primary key) -> Replicated across AZs.

### ASCII Diagram
Request -> DynamoDB -> Primary Key Hash -> Partition -> Three AZs (fault tolerance)

### Trade-offs
- DynamoDB flexibility vs RDS ACID transactions.
- Provisioned throughput cost predictability vs on-demand simplicity.
- Scaling read and write independently vs coupled scaling in SQL.

## Real-world Example
A session store on RDS could not scale to 100K concurrent users. Migrating to DynamoDB on-demand scaled instantly. Cost went from $500/day capacity to $200/day variable, with no capacity management overhead.

## TPM Perspective
Ask:
- What is the access pattern? (Do you need joins or complex queries?)
- What is the scale target? (RDS vs DynamoDB)
- Is consistency critical or eventual consistency acceptable?
- What is the data retention and backup requirement?

## Interview Perspective
Strong answer:
"I use DynamoDB for high-scale, low-latency workloads where the access pattern is simple and known. I use RDS when I need complex queries or transactions. On-demand DynamoDB scales automatically but on-demand pricing can surprise; provisioned is more predictable."

## Common Mistakes
- Using DynamoDB for queries that really need SQL.
- Hot partition issues from poor primary key design.
- No understanding of eventually consistent data implications.

## 5-Minute Revision
- DynamoDB: NoSQL, scales to millions of requests/sec.
- Provisioned: cost predictable; on-demand: capacity automatic.
- Design primary key carefully — it drives partitioning.
- No joins; denormalize data for access patterns.

## Practice Interview Questions
1. When would you choose DynamoDB over RDS?
2. How do you design a DynamoDB primary key?
3. What is a hot partition and how do you prevent it?
4. How does DynamoDB's on-demand pricing work?
5. How do you model relationships in DynamoDB (no joins)?

## Key Takeaways
- DynamoDB scales where RDS hits walls.
- Access pattern drives schema design, not normalization.
- Provisioned vs on-demand is a cost predictability trade-off.
