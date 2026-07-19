# Storage Design

## Executive Summary
Storage design determines durability, retrieval speed, cost profile, and compliance posture of a system. In interviews, strong candidates distinguish hot, warm, and cold data and design lifecycle-aware storage.

TPMs should treat storage as a business decision tied to retention policy, legal requirements, and user experience.

## Why This Matters
- TPM relevance: Storage growth drives major infrastructure cost.
- Architecture relevance: Data tiering impacts latency and durability.
- System design relevance: Common in logs, media, analytics, and event platforms.

## Core Concepts
### Definitions
- Hot storage: Low-latency frequently accessed data.
- Warm storage: Moderate latency, periodic access.
- Cold storage: Low-cost archival with high retrieval latency.
- Data lifecycle: Ingest -> active -> archive -> delete.

### Internal Working
Design flow:
1. Classify data by access frequency and criticality.
2. Choose storage class per tier.
3. Define retention and archival policy.
4. Automate lifecycle transitions.

### ASCII Diagram
Ingest -> Hot Tier -> Warm Tier -> Cold Archive -> Deletion

### Trade-offs
- Low latency vs low cost
- Long retention vs compliance/privacy obligations

## Real-world Example
Video platform:
- Recent media segments in hot object storage + CDN.
- Historical media moved to lower-cost archive tiers.
- Automated lifecycle reduced storage spend while preserving compliance.

## TPM Perspective
Questions:
- What data must be immediately available?
- What is legal retention requirement?
- What retrieval time is acceptable for archived data?
- How is deletion verified for compliance?

## Interview Perspective
Strong answer:
"I design storage by data temperature and business criticality, automate lifecycle policies, and balance latency, durability, and cost with compliance constraints."

## Common Mistakes
- Keeping all data in expensive hot tiers.
- No retention/deletion policy.
- Ignoring retrieval latency from archive tiers.
- Missing backup and integrity checks.

## 5-Minute Revision
- Tier data by temperature.
- Automate lifecycle transitions.
- Align retention with legal and business requirements.

## Practice Interview Questions
1. How do you decide hot vs cold storage?
2. How does retention policy affect architecture?
3. How do you validate archived data integrity?
4. What are storage cost optimization levers?
5. How do you design deletion workflows for compliance?

## Key Takeaways
- Storage design is lifecycle design.
- Cost, latency, durability must be balanced.
- Retention and deletion are first-class requirements.