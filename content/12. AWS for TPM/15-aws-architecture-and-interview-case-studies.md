# AWS Architecture & Interview Case Studies

## Executive Summary
This lesson synthesizes AWS topics through architecture design scenarios and real interview questions. Use these to practice choosing services, sizing workloads, and communicating architectural trade-offs.

## Case Study 1: Scaling a Web Application from 100 to 10M Daily Active Users

Constraints:
- Today: Single EC2 instance (t3.large), MySQL RDS, no caching.
- Problem: Cannot scale beyond 100K DAU; database is the bottleneck.

Architecture progression:
- 100K DAU: Add read replicas to RDS, put ALB in front, simple auto-scaling.
- 1M DAU: Evaluate caching layer (ElastiCache Redis), consider DynamoDB for sessions.
- 10M DAU: Consider Aurora for database (better concurrency model), potentially move to DynamoDB for transactional data.

Key decisions:
- When to scale compute (auto-scaling groups) vs optimize database.
- When to introduce caching and messaging for reads.
- When to migrate from RDS to Aurora or NoSQL.

## Case Study 2: Building a Real-Time Data Pipeline

Requirements:
- Ingest 1M events/sec from IoT devices.
- Process in <100ms.
- Archive for historical analysis.

Solution:
- Ingest: API Gateway + Lambda or Kinesis for high throughput.
- Stream processing: Kinesis Data Streams or EventBridge -> Lambda.
- Archive: S3 with partitioning by date/device.
- Query: Athena for SQL on S3 or move to data warehouse.

Key decisions:
- Kinesis vs SQS for streaming (Kinesis for ordered, high-throughput).
- Lambda vs containers for processing (Lambda simple, containers flexible).
- Real-time vs batch query (different storage/architecture implications).

## Case Study 3: Multi-Region Disaster Recovery

Constraints:
- RTO (Recovery Time Objective): 1 hour.
- RPO (Recovery Point Objective): 15 minutes of data loss acceptable.
- Budget: $50K/month for DR infrastructure.

Solution:
- Primary region: Full production setup.
- Secondary region: Standby infrastructure (lower cost tier), data replication.
- Route 53 health checks: Automatic failover on primary region failure.
- Database replication: Aurora Global Database or RDS read replicas with promotion.

Key decisions:
- Active-passive vs active-active (cost vs zero-downtime).
- Database replication strategy (native vs application-level).
- Automated failover (Route 53) vs manual intervention.

## Case Study 4: Serverless vs Container Architecture

Scenario: Building a new microservice platform.

Serverless (Lambda):
- Pros: No infrastructure, auto-scaling, pay-per-invocation.
- Cons: 15-min timeout, cold starts, limited execution environment.
- Suitable: Event-driven workloads, APIs with variable load, batch processing.

Container (ECS/EKS):
- Pros: Full control, any language/framework, any runtime.
- Cons: Infrastructure management, minimum baseline cost.
- Suitable: Long-running processes, legacy applications, complex deployments.

Decision framework:
- If workload is event-driven and <15 min: Lambda.
- If workload is long-running or needs persistent connections: Containers.

## Interview Questions to Practice

1. Design a REST API to handle 100K requests/sec with 99.99% uptime.
2. How would you architect a data lake for 1TB/day ingestion?
3. Design a system for user sessions across multiple regions.
4. How would you design for fault tolerance in a payment processing system?
5. Walk me through scaling a WordPress site from 1K to 1M DAU.

## Key Takeaways
- Architecture is about trade-offs: cost, complexity, resilience.
- Start simple; add complexity only when data or requirements demand it.
- Architectural decisions have 6-12 month consequences; think in those time horizons.
