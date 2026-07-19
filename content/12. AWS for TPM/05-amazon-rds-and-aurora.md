# Amazon RDS & Aurora

## Executive Summary
RDS (Relational Database Service) and Aurora are AWS's managed SQL database options. RDS reduces operational burden vs self-managed databases; Aurora is AWS's high-performance relational database optimized for cloud workloads. For TPMs, this is the choice between simplicity and performance.

## Why This Matters
- TPM relevance: Database choice affects scalability, cost, and operational burden significantly.
- Interview relevance: Database architecture is a key evaluation area.

## Core Concepts
### RDS (Managed MySQL, PostgreSQL, MariaDB, Oracle)
- Automated backups and failover.
- Read replicas for scaling read workloads.
- Multi-AZ for resilience.
- Storage is separate from compute (can scale independently).

### Aurora (AWS's Database Engine)
- Optimized for AWS: 5x throughput of MySQL, 3x of PostgreSQL.
- Aurora Global Database for multi-region replication.
- Serverless Aurora: Auto-scaling without managing instances.
- Pay for storage consumed, not provisioned capacity.

### Internal Working
Application -> RDS/Aurora -> Automated backups -> Multi-AZ failover -> Read replicas.

### ASCII Diagram
Primary Instance -> Automated Backup -> Multi-AZ Standby
Primary Instance -> Read Replicas (scaling reads)

### Trade-offs
- RDS is simpler, Aurora is more scalable.
- RDS on-instance storage vs Aurora shared storage.
- Aurora higher cost but better performance.

## Real-world Example
A service running on MySQL RDS hit scaling limits at 10K QPS. Migrating to Aurora scaled to 100K QPS with the same operational model. The cost increase was offset by the consolidation of multiple MySQL instances.

## TPM Perspective
Ask:
- What is the expected data volume and query workload?
- Do we need multi-region replication?
- Is multi-AZ failover a requirement?
- What is the backup and recovery SLA?

## Interview Perspective
Strong answer:
"I start with RDS for simplicity, then evaluate if Aurora is worth the cost for performance. Multi-AZ is mandatory for production, read replicas scale read-heavy workloads, and backups are configured for the recovery SLA."

## Common Mistakes
- Defaulting to single-AZ for cost, then scrambling when failure happens.
- Over-provisioning capacity instead of enabling read replicas.
- Not understanding the difference between Aurora and RDS for scaling decisions.

## 5-Minute Revision
- RDS: managed relational database, choice of engines.
- Aurora: AWS-optimized engine, superior performance.
- Multi-AZ for resilience; read replicas for read scaling.
- Automated backups are mandatory; recovery SLA determines retention.

## Practice Interview Questions
1. How would you scale a read-heavy RDS workload?
2. When would you migrate from RDS to Aurora?
3. How does Multi-AZ failover work in RDS?
4. What is the backup and recovery strategy?
5. How do you handle growth from 1K to 100K QPS?

## Key Takeaways
- RDS simplifies database operations significantly.
- Aurora provides superior performance for most cloud workloads.
- Read replicas and Multi-AZ are your scaling and resilience tools.
