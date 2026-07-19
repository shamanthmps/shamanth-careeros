# Storage Services

## Executive Summary
Cloud storage services support different access patterns and durability requirements across object, block, file, and archival tiers. In interviews, TPMs should explain data lifecycle and storage-class strategy.

Strong answers balance performance, durability, compliance, and cost.

## Why This Matters
- TPM relevance: Storage growth is a major long-term cloud cost driver.
- Architecture relevance: Storage type affects application performance and resilience.
- Interview relevance: Common topic in data and cloud architecture rounds.

## Core Concepts
### Definitions
- Object storage: Scalable, durable store for unstructured data.
- Block storage: Low-latency volume storage for compute instances/databases.
- File storage: Shared file-system semantics for multiple clients.
- Archive tier: Low-cost long-term retention with slower retrieval.

### Internal Working
Data classified by access frequency and criticality, then mapped to storage tier with lifecycle policies.

### ASCII Diagram
Hot Data -> Standard Storage
Warm Data -> Infrequent Tier
Cold Data -> Archive

### Trade-offs
- Faster access tiers cost more.
- Lower-cost archival tiers increase retrieval latency.

## Real-world Example
A streaming platform tiered media assets: recent content in standard object storage, older content in archival tiers, reducing costs while preserving retrieval SLAs.

## TPM Perspective
Ask:
- What are retention and deletion requirements?
- What data requires low-latency access?
- How are lifecycle transitions automated and audited?

## Interview Perspective
Strong answer:
"I design storage by data temperature and compliance needs, automate lifecycle movement, and define retrieval SLAs to balance performance and cost."

## Common Mistakes
- Keeping all data in premium tiers.
- No retention/deletion governance.
- Ignoring backup and restore testing.

## 5-Minute Revision
- Match storage class to access pattern.
- Automate data lifecycle transitions.
- Align retention with compliance and cost goals.

## Practice Interview Questions
1. When do you choose object vs block storage?
2. How do lifecycle policies cut costs safely?
3. What storage metrics should TPMs track?
4. How do you validate backup and restore readiness?
5. What compliance controls affect storage design?

## Key Takeaways
- Storage design is lifecycle and policy design.
- Data temperature-based tiering is a major cost lever.
- TPMs should govern storage retention and resilience practices.
