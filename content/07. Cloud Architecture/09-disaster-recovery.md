# Disaster Recovery

## Executive Summary
Disaster recovery (DR) is the strategy for restoring systems after major failures such as region outages, data corruption, or security incidents. Interviewers expect TPMs to explain DR tiers, recovery objectives, and test discipline.

Strong answers include RTO/RPO alignment to business criticality.

## Why This Matters
- TPM relevance: DR readiness determines business continuity under severe incidents.
- Architecture relevance: Backup, replication, and failover design are DR foundations.
- Interview relevance: Common reliability and risk management question.

## Core Concepts
### Definitions
- RTO: Maximum acceptable recovery time.
- RPO: Maximum acceptable data loss window.
- Warm standby: Partial pre-provisioned failover environment.
- Pilot light: Minimal critical components pre-running in DR region.

### Internal Working
Detect disaster -> activate DR runbook -> fail over services/data -> validate integrity -> restore normal operations.

### ASCII Diagram
Primary Region <-> Replication -> DR Region (standby)

### Trade-offs
- Faster recovery needs more pre-provisioning and cost.
- Lower cost DR often increases RTO/RPO.

## Real-world Example
An e-commerce platform moved from backup-only recovery to warm standby with periodic failover drills, reducing business downtime risk.

## TPM Perspective
Ask:
- What are service-level RTO/RPO tiers?
- Is DR plan tested or only documented?
- Which dependencies block failover?

## Interview Perspective
Strong answer:
"I tier DR by business criticality, define explicit RTO/RPO per tier, and validate with recurring failover exercises and data integrity checks."

## Common Mistakes
- Confusing backup with DR readiness.
- No rehearsed runbooks.
- Unverified data consistency post-failover.

## 5-Minute Revision
- DR = prepared recovery, not just backups.
- RTO/RPO drive architecture and cost.
- Test DR plans regularly.

## Practice Interview Questions
1. How do you set RTO/RPO targets?
2. Warm standby vs pilot light differences?
3. How often should DR drills run?
4. What is required to validate data integrity after failover?
5. How do you prioritize DR investments?

## Key Takeaways
- DR is a business continuity program.
- Recovery objectives must be explicit and tested.
- TPMs should own DR governance and readiness cadence.
