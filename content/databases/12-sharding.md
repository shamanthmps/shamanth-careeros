
## 1. Executive Summary
Sharding is horizontal partitioning of data across multiple database nodes to scale storage and throughput. In interviews, sharding questions test whether you can design for growth without creating hotspots, routing complexity, or cross-shard failure risk.

For TPMs, sharding is a major program milestone, not a tuning tweak. It affects roadmap sequencing, migration strategy, incident patterns, and organizational ownership.

Strong answers focus on partition key design, rebalancing approach, and operational guardrails.

## 2. Why This Matters
### TPM relevance
- Sharding projects are high-risk, multi-quarter initiatives.
- Poor shard key decisions can force expensive re-sharding.
- Product launches can fail if traffic skew saturates specific shards.

### Architecture relevance
- Determines data distribution, parallelism, and failure domains.
- Influences query routing and cross-shard operation complexity.

### System Design relevance
- Common in large-scale interview prompts involving user growth and write-heavy workloads.

### Common interview questions
- When should you shard instead of vertically scaling?
- How do you choose a shard key?
- What is re-sharding and why is it hard?
- How do you handle cross-shard queries and transactions?

## 3. Core Concepts
### Definitions
- Sharding: Splitting dataset into partitions served by different nodes.
- Shard key (partition key): Attribute used to assign data to shards.
- Hot shard: Shard receiving disproportionate traffic.
- Re-sharding: Redistributing data after key/count changes.
- Fan-out query: Query that touches many or all shards.

### Internal Working
Router layer maps shard key to target shard. Reads and writes for a key route to its shard. Scale is achieved by adding shards and redistributing key ranges/buckets.

Flow:

Request (key)
   |
   v
Shard Router
   |
   +--> Shard A
   +--> Shard B
   +--> Shard C

Why this exists:
- Single node limits (CPU, memory, IOPS, storage) become bottlenecks.
- Sharding enables parallel load handling and larger datasets.

### ASCII Diagrams
Hash-based sharding:

hash(user_id) % N -> shard_id

Range-based sharding:

A-F -> Shard 1
G-M -> Shard 2
N-Z -> Shard 3

Hot shard example:

Popular tenant traffic ---> Shard 4 overloaded
Other shards ------------> Underutilized

### Examples
- Social network partitioning by user_id for profile and timeline writes.
- E-commerce orders sharded by customer region + account id.
- Payments event logs sharded by merchant_id with time bucket suffix.
- Multi-tenant SaaS data partitioned by tenant_id.

### Comparisons
Shard key approaches:

| Strategy | Benefit | Risk |
|---|---|---|
| Hash key | Even distribution | Harder range scans |
| Range key | Efficient range queries | Skew/hotspot risk |
| Composite key | Balance flexibility | Higher routing/model complexity |

Scale choices:

| Option | Strength | Limitation |
|---|---|---|
| Vertical scale | Simpler operations | Hard upper limit, costly |
| Sharding | Near-linear scale potential | High operational and app complexity |

### Design Trade-offs
Pros:
- Scales write and storage horizontally.
- Reduces contention on single node.
- Enables parallel processing.

Cons:
- Cross-shard joins/transactions are harder.
- Re-sharding is expensive and risky.
- Operational complexity rises significantly.

When to shard:
- Sustained growth exceeds safe single-node limits.
- Workload can be partitioned with stable key strategy.

When not to shard yet:
- Small/medium workloads where indexing/caching/vertical scaling suffice.

## 4. Real-world Example
Scenario: A global marketplace order service grows 12x in two years.

Problem:
- Single primary database saturated during regional peak events.
- Vertical scaling costs increased with diminishing returns.

Architecture decision:
- Introduced tenant-aware composite shard key to reduce skew.
- Built shard router abstraction layer in data access service.
- Executed phased migration with dual-write verification and canary tenants.
- Added shard health dashboards and automatic skew alerts.

Outcome:
- Sustained growth without primary saturation.
- Controlled migration risk through phased rollout.
- Clear ownership model per shard domain improved operations.

## 5. TPM Perspective
Why a TPM should understand this:
- Sharding decisions have long-lived consequences for product and platform teams.
- Requires tight sequencing across infra, service, data, and SRE tracks.

What questions should a TPM ask?
- What key best balances distribution and query locality?
- How will cross-shard queries be handled?
- What is the re-sharding strategy if growth assumptions break?
- What migration rollback checkpoints exist?
- Who owns shard router and partition governance?

What trade-offs should a TPM understand?
- Scalability gains vs engineering complexity.
- Even distribution vs query convenience.
- Fast migration vs data correctness assurance.

What risks should a TPM identify?
- Hot shard formation under uneven tenant growth.
- Fan-out queries degrading latency/cost.
- Re-sharding project scope underestimation.

## 6. Interview Perspective
Strong interview answer:

I shard when workload growth exceeds single-node limits and access patterns support stable partitioning. I treat shard key selection as the critical design choice, validate distribution using real traffic data, and design routing abstraction plus observability before migration. I also plan for re-sharding and cross-shard operation limits upfront to avoid future dead ends.

Why this is a good answer:
- Shows strategic planning and execution realism.
- Emphasizes the hardest part: key design and migration safety.
- Balances scale benefits with operational costs.

What interviewers are evaluating:
- Whether you understand sharding as system-level redesign.
- Ability to anticipate long-term operational implications.
- Practical migration and rollback thinking.

## 7. Common Mistakes
- Sharding too early without exhausting simpler options.
- Picking shard key from convenience, not workload evidence.
- Ignoring tenant/traffic skew in key design.
- No abstraction layer, hardcoding shard routing in apps.
- Underestimating cross-shard query impact.
- No plan for re-sharding.
- Migrating all tenants at once.
- Missing shard-level observability.
- Assuming sharding alone solves all latency issues.
- Not aligning on ownership for partition strategy over time.

## 8. 5-Minute Revision
### Quick summary
- Sharding is for horizontal scale beyond single-node constraints.
- Partition key quality determines long-term success.
- Migration, routing, and observability are mandatory design pillars.

### Cheat sheet

| Signal | Recommendation |
|---|---|
| Single-node saturation persists | Evaluate sharding |
| Key distribution likely skewed | Redesign key before rollout |
| Many cross-entity queries | Reassess sharding boundary |
| Growth uncertain | Build re-sharding option early |

### Decision framework

Validate scale pain
   |
   v
Design and test shard key
   |
   v
Build router abstraction + observability
   |
   v
Migrate in phases with rollback gates

### Comparison snapshot

| Choice | Outcome |
|---|---|
| Reactive sharding with weak key | Hotspots and repeated migrations |
| Planned sharding with measured key strategy | Sustainable scale and operability |

## 9. Practice Interview Questions
1. What indicators show it is time to shard?
2. How do you select a shard key for multi-tenant systems?
3. What are hash vs range sharding trade-offs?
4. How would you migrate existing data to shards safely?
5. How do you detect and mitigate hot shards?
6. What queries become harder after sharding?
7. How do you design for future re-sharding?
8. How would you explain sharding cost/benefit to executives?
9. What guardrails are needed for cross-shard operations?
10. How do you structure ownership for shard governance?

## 10. Key Takeaways
- Sharding is a major architectural scale decision.
- Shard key selection is the highest-risk and highest-impact choice.
- Routing abstraction and observability are non-negotiable.
- Cross-shard operations require explicit product and technical constraints.
- Re-sharding preparedness prevents long-term dead ends.
- Phased migration is safer than big-bang cutovers.
- Interviewers value migration realism and key design discipline.
- TPMs should lead cross-team sharding execution governance.
