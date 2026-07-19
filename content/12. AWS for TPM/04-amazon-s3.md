# Amazon S3

## Executive Summary
S3 (Simple Storage Service) is AWS's object storage — infinitely scalable, durable, and the backbone of most AWS architectures. For TPMs, understanding S3 is understanding data durability, versioning, lifecycle, and cost optimization.

## Why This Matters
- TPM relevance: S3 is a default data store; understanding its capabilities and costs prevents surprise bills and data loss.
- Interview relevance: S3 appears in nearly every AWS architecture question.

## Core Concepts
### Storage Classes
- Standard: Frequently accessed data, highest cost per GB.
- Infrequent Access (IA): Accessed <1 time/month, lower cost, retrieval fee.
- Glacier: Archive data, very low cost, slow retrieval (hours).
- Intelligent Tiering: Automatic movement between tiers.

### Key Features
- Versioning: Keep multiple versions of objects.
- Lifecycle policies: Automatically move objects between tiers or delete.
- Replication: Copy objects to other buckets (cross-region, cross-account).
- Server-side encryption: Data encrypted at rest.

### Internal Working
Object -> Bucket (logical container) -> Storage class -> Durability/Availability -> Cost.

### ASCII Diagram
Application -> S3 API -> S3 Bucket -> Storage Class (Standard/IA/Glacier) -> Durability 99.999999999%

### Trade-offs
- Standard for immediate access but higher cost.
- Glacier for archives and lower cost but slower retrieval.
- Versioning prevents data loss but increases storage cost.

## Real-world Example
A company stored 5 years of logs in S3 Standard at $1M/year. Implementing lifecycle policies to move old logs to Glacier reduced it to $50K/year. Logs were never accessed after 30 days.

## TPM Perspective
Ask:
- What is the access pattern? (Immediate vs archive?)
- Do we need versioning or point-in-time recovery?
- What are the data residency and compliance requirements?
- Is the data truly durable or is this just staging?

## Interview Perspective
Strong answer:
"I use S3 for object storage with a clear strategy: Standard for active data, IA for infrequent access, Glacier for archives. I implement lifecycle policies to move data automatically and enable versioning for data I cannot lose."

## Common Mistakes
- Everything in S3 Standard (cost optimizes to Glacier).
- No versioning for critical data.
- Not considering cross-region replication for disaster recovery.

## 5-Minute Revision
- S3 = infinitely scalable object storage.
- Storage classes: Standard (expensive) to Glacier (cheap but slow).
- Lifecycle policies automate cost optimization.
- Versioning enables recovery but costs more.

## Practice Interview Questions
1. How would you optimize S3 costs for a data archive?
2. When would you use S3 replication?
3. What is the difference between S3 versioning and lifecycle policies?
4. How do you ensure S3 data is never lost?
5. How would you set up S3 for compliance data retention?

## Key Takeaways
- S3 is durable and infinitely scalable but costs mount without lifecycle policies.
- Choose storage class based on access pattern.
- Versioning and replication are your data protection tools.
