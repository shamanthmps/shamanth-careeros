# AWS Global Infrastructure

## Executive Summary
AWS global infrastructure — regions, availability zones (AZs), and edge locations — shapes architecture, cost, latency, and compliance decisions. For TPMs, this is critical: decisions about where to run workloads have cascading program implications.

## Why This Matters
- TPM relevance: Data residency, latency, and compliance requirements all hinge on infrastructure decisions.
- Interview relevance: Common in architecture and trade-off questions.

## Core Concepts
### Infrastructure Hierarchy
- Region: Complete AWS deployment in a geographic area (us-east-1, eu-west-1).
- Availability Zone (AZ): One or more data centers in a region with independent power and network.
- Edge Location: CloudFront caching locations closer to users than regions.

### Replication and Redundancy
- Single AZ: Low latency, lowest cost, but not fault-tolerant.
- Multi-AZ: Automatic failover, resilient but slightly higher latency.
- Multi-region: Highest resilience but significant complexity and cost.

### Internal Working
User request -> Edge location (cache) -> Region -> AZ -> Data center -> Persisted.

### ASCII Diagram
User -> CloudFront Edge Location -> Regional Endpoint -> AZ1, AZ2, AZ3 -> Data Persistence

### Trade-offs
- Single AZ is cheapest but loses data if AZ fails.
- Multi-AZ improves resilience but adds cost and complexity.
- Multi-region provides geographic disaster recovery but costs 2-3x.

## Real-world Example
A service was deployed to a single AZ for cost. A partial data center failure caused an outage. Migration to multi-AZ cost $50K but eliminated the single point of failure permanently.

## TPM Perspective
Ask:
- What are the availability requirements? (Does a one-hour outage matter?)
- What are data residency requirements? (GDPR, data sovereignty?)
- What is the latency requirement for users? (Which regions make sense?)

## Interview Perspective
Strong answer:
"I think about infrastructure in terms of availability, compliance, and latency trade-offs. Single AZ for development, multi-AZ for production, multi-region only when availability SLAs or data residency require it."

## Common Mistakes
- Defaulting to multi-region without understanding the cost.
- Not considering data residency implications until compliance issues arise.
- Choosing regions based on marketing names, not latency or regulatory needs.

## 5-Minute Revision
- Region: geographic AWS deployment.
- AZ: independent data center(s) within a region.
- Edge location: CloudFront cache closer to users.
- Multi-AZ for resilience; multi-region for data residency or SLA.

## Practice Interview Questions
1. What is the difference between an AZ and a region?
2. When would you deploy to multiple regions?
3. How do you think about data residency in architecture?
4. What are the cost implications of multi-AZ deployment?
5. How does CloudFront fit into your architecture strategy?

## Key Takeaways
- Infrastructure decisions cascade to cost, compliance, and availability.
- Multi-AZ is the default for production; multi-region is exceptional.
- Data residency and latency are often the deciding factors.
