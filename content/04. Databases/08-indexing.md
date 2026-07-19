
## 1. Executive Summary
Indexing is one of the highest-leverage database design decisions in system interviews. It determines whether queries remain predictable as data grows or degrade into expensive scans and latency incidents.

For TPMs, indexing is not an implementation detail. It affects API SLOs, infrastructure cost, incident rates, and release confidence. Interviewers ask indexing questions to evaluate whether you can reason about read performance, write overhead, and growth planning.

Strong answers focus on access patterns, not index jargon. The right framing is: which queries must be fast, at what scale, with what write/cost trade-off.

## 2. Why This Matters
### TPM relevance
- Index decisions directly influence customer latency and cloud spend.
- Poor index governance causes production regressions during launches.
- Reindex and migration work can become major roadmap items.

### Architecture relevance
- Indexes shape read path efficiency and operational write amplification.
- They are foundational for predictable scaling behavior.

### System Design relevance
- Most design interviews expect you to discuss indexing strategy for key entities.
- Indexing often separates average from strong architecture answers.

### Common interview questions
- How do you choose indexes for a workload?
- Why can too many indexes hurt performance?
- What is a covering index and when is it useful?
- How do you evolve indexes with minimal downtime?

## 3. Core Concepts
### Definitions
- Index: Auxiliary data structure that accelerates lookups on selected fields.
- Full table scan: Reading all rows to satisfy a query.
- Composite index: Index across multiple columns in ordered sequence.
- Covering index: Index containing all fields needed by a query.
- Write amplification: Extra work on writes due to index maintenance.

### Internal Working
Without index, query engine scans many rows to find matches. With index, engine narrows candidate rows quickly using ordered/hash structures, then fetches necessary records.

Simplified flow:

Query
  |
  +--> No index -> full scan -> filter -> return
  |
  +--> Index hit -> locate pointers -> fetch rows -> return

Why indexing exists:
- Reduces latency for frequent access paths.
- Improves throughput under concurrent reads.
- Enables predictable performance as data volume grows.

### ASCII Diagrams
Index lookup:

users table (millions)
    |
    +--> index on email
              |
              v
         row pointer -> target record

Composite index order effect:

Index: (country, city, created_at)
Good for:
- country = X
- country = X and city = Y
Less effective for:
- city = Y only

### Examples
- E-commerce search filters needing fast product lookups by category + availability.
- Payment API idempotency checks by request key.
- Ride-sharing active trip retrieval by driver_id + status.
- SaaS tenant dashboards by tenant_id + updated_at window.

### Comparisons
Common index types:

| Type | Strength | Limitation | Typical Use |
|---|---|---|---|
| B-Tree | Range + equality queries | Write overhead | General OLTP indexing |
| Hash | Fast equality lookup | Weak range support | Exact-match keys |
| Inverted/Text | Full-text search | Larger storage, tuning needs | Search features |
| Geospatial | Location queries | Specialized use | Maps, nearby search |

Indexing choices:

| Strategy | Benefit | Cost |
|---|---|---|
| Few targeted indexes | Lower write overhead | Some queries slower |
| Many indexes | Broad query acceleration | Higher write latency and storage |

### Design Trade-offs
Pros:
- Lower query latency and fewer scan-induced incidents.
- Better user experience and SLO compliance.

Cons:
- Higher storage and write/update costs.
- Index maintenance complexity during schema evolution.

When to use aggressively:
- High-volume read paths with strict latency goals.

When to be conservative:
- Write-heavy tables where each additional index hurts ingest performance.

## 4. Real-world Example
Scenario: A streaming platform launches a live-events feed with personalized ranking.

Problem:
- Feed API p95 latency exceeded SLO after user growth.
- Queries filtered by user_id, region, recency, and event state.

Architecture decision:
- Added composite index aligned to dominant filter and sort order.
- Removed redundant legacy indexes increasing write cost.
- Created index review checklist for all new query endpoints.
- Introduced query telemetry to detect scan regressions pre-launch.

Outcome:
- Significant p95 latency improvement.
- Reduced write overhead from over-indexing.
- Better release confidence through index governance.

## 5. TPM Perspective
Why a TPM should understand this:
- Indexing often determines whether new features hit latency targets.
- Poor index hygiene creates hidden cost and reliability debt.

What questions should a TPM ask?
- What top queries drive user experience and revenue?
- Are proposed indexes aligned to actual query patterns?
- What is write impact of adding each index?
- How will index changes be rolled out and validated?
- Who owns periodic index cleanup?

What trade-offs should a TPM understand?
- Read optimization vs write throughput.
- Query flexibility vs storage/cost growth.
- Fast fixes vs long-term index sprawl.

What risks should a TPM identify?
- Feature launch with unindexed critical query path.
- Redundant indexes degrading write performance.
- No observability for scan-heavy query regressions.

## 6. Interview Perspective
Strong interview answer:

I treat indexing as workload design, not a default checklist. I identify top read paths, choose targeted indexes for those filters and sort patterns, and measure write overhead before broad rollout. I also define index lifecycle governance, because stale or redundant indexes silently increase cost and latency risk.

Why this is a good answer:
- Shows practical, measurable approach.
- Balances performance and operational cost.
- Demonstrates leadership through governance.

What interviewers are evaluating:
- Query-to-index mapping discipline.
- Ability to reason about scale and trade-offs.
- Operational maturity in evolving indexes safely.

## 7. Common Mistakes
- Adding indexes without query evidence.
- Over-indexing write-heavy tables.
- Ignoring composite index column order effects.
- Assuming one index helps all queries equally.
- Never removing obsolete indexes.
- Missing monitoring for scan regressions.
- Treating index rollout as risk-free change.
- Ignoring lock/impact during index builds on large tables.
- Not validating index effectiveness after deployment.
- Using DB-specific index features without portability awareness.

## 8. 5-Minute Revision
### Quick summary
- Indexes are essential for predictable read performance.
- Every index has a write and storage cost.
- Choose indexes from real query patterns and manage lifecycle continuously.

### Cheat sheet

| Question | Action |
|---|---|
| Query is scan-heavy and frequent? | Add targeted index |
| Table is write-heavy? | Minimize index count |
| Query uses multiple filters? | Consider composite index in filter order |
| Index not used in telemetry? | Evaluate removal |

### Decision framework

Identify top queries
   |
   v
Map filter/sort fields
   |
   v
Design minimal effective indexes
   |
   v
Measure read gain + write cost
   |
   v
Review and clean periodically

### Comparison snapshot

| Approach | Outcome |
|---|---|
| Index everything | Fast reads initially, expensive writes and sprawl |
| Targeted indexing with telemetry | Balanced performance and cost |

## 9. Practice Interview Questions
1. How do you determine which indexes to create first?
2. Why can over-indexing harm system performance?
3. How does composite index ordering affect query plans?
4. What is a covering index and when should you use it?
5. How would you roll out index changes safely on a large table?
6. What metrics indicate index health or index debt?
7. How do you detect and fix scan regressions before release?
8. How would you explain indexing trade-offs to product leadership?
9. What is your strategy for index lifecycle management?
10. How do indexing decisions change in write-heavy systems?

## 10. Key Takeaways
- Indexing is a first-order architecture decision.
- Query patterns should drive index design.
- Every index improves reads but costs writes and storage.
- Composite index ordering matters.
- Index lifecycle governance prevents long-term debt.
- Observability is required to catch regressions.
- Interviewers value evidence-based indexing strategy.
- TPMs should treat index changes as planned reliability work.
