# Designing Data-intensive Systems

## Executive Summary
Data-intensive systems are dominated by data volume, velocity, and complexity rather than business logic alone. Interviewers expect senior candidates to reason about ingestion, storage, processing, governance, and serving layers together.

TPMs must align architecture with data quality, freshness, and cost targets.

## Why This Matters
- TPM relevance: Data platforms are cross-team and long-horizon investments.
- Architecture relevance: Requires careful separation of OLTP, stream, and analytics paths.
- System design relevance: Frequently appears in telemetry, personalization, and risk systems.

## Core Concepts
### Core Layers
- Ingestion (batch/stream)
- Storage (operational + analytical)
- Processing (batch/real-time)
- Serving (APIs, dashboards, models)
- Governance (lineage, quality, access)

### Internal Working
Reference model:
Sources -> Ingestion -> Raw Zone -> Processing -> Curated Zone -> Serving

### ASCII Stack
Apps/Devices -> Event Bus -> Stream/Batch Compute -> Warehouse/Lake -> BI/ML/APIs

### Trade-offs
- Freshness vs compute cost
- Schema flexibility vs governance
- Throughput vs query latency

## Real-world Example
B2B product telemetry platform:
- Stream ingestion for operational alerts.
- Batch transformations for daily business metrics.
- Data contracts and quality checks reduced metric disputes.

## TPM Perspective
Questions:
- What freshness SLA does each consumer need?
- Which metrics are source-of-truth?
- How are schema changes governed?
- What lineage and quality checks are required?

## Interview Perspective
Strong answer:
"I design data-intensive systems by separating ingestion, processing, and serving concerns, then defining explicit freshness and quality contracts for each consumer class."

## Common Mistakes
- Mixing OLTP and heavy analytics workloads.
- No data quality gates.
- Undefined metric ownership.
- Overbuilding real-time for all consumers.

## 5-Minute Revision
- Separate operational and analytical workloads.
- Define data contracts and lineage.
- Match freshness to business need.

## Practice Interview Questions
1. How do you design hybrid batch + stream systems?
2. How do you enforce data quality at scale?
3. What is a good consumer-tier freshness model?
4. How do you handle schema evolution in pipelines?
5. How do you optimize cost for data-intensive platforms?

## Key Takeaways
- Data-intensive architecture is multi-layer by design.
- Governance is as important as throughput.
- Consumer-specific freshness prevents overengineering.