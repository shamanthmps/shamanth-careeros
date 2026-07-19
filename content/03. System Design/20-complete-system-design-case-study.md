# Complete System Design Case Study

## Executive Summary
This case study demonstrates a full senior-level system design response. Use it to practice structure, trade-offs, and communication under interview time constraints.

Prompt: Design a global multi-tenant notification platform supporting email, push, and SMS with reliability and cost controls.

## Why This Matters
- TPM relevance: Mirrors real architecture programs involving multiple teams.
- Architecture relevance: Requires API design, queueing, reliability, observability, and compliance.
- System design relevance: End-to-end synthesis is expected at senior levels.

## Core Concepts
### Requirements
- 99.95% delivery pipeline availability.
- Tenant-specific rate limits and templates.
- Multi-channel fan-out.
- Retry and dead-letter handling.
- Regional data residency for selected tenants.

### High-level Design
- API gateway for ingestion and auth.
- Message broker for durable decoupling.
- Channel workers (email/push/SMS).
- Template service and preference service.
- Delivery status store + analytics pipeline.

### ASCII Architecture
Clients -> API -> Ingest Service -> Message Queue -> Channel Workers -> Providers
                           |
                           +-> Status Store -> Reporting

### Trade-offs
- At-least-once delivery with idempotency vs exactly-once complexity.
- Regional isolation for compliance vs higher operational cost.
- Async processing for scale vs instant delivery guarantees.

## Real-world Execution Plan
Phase 1:
- Email channel only, core API, queue, retry, status tracking.

Phase 2:
- Push/SMS channels, tenant controls, observability dashboards.

Phase 3:
- Multi-region routing, advanced cost optimization, SLA tiers.

## TPM Perspective
Risks to manage:
- Provider outage causing backlog growth.
- Template misconfiguration at tenant scale.
- Cost spike during burst campaigns.

Governance:
- Channel-specific SLOs.
- Error budget policy.
- Weekly architecture and reliability review.

## Interview Perspective
Strong answer:
"I design the platform as an async, multi-channel pipeline with durable queueing, idempotent processing, and provider isolation. I phase delivery to launch safely, starting with one channel and adding regional/compliance capabilities as scale grows."

Why strong: Structured, pragmatic, and execution-focused.

## Common Mistakes
- Synchronous fan-out to all providers.
- No idempotency keys.
- No dead-letter queue strategy.
- Ignoring tenant isolation and abuse controls.
- Missing phased rollout plan.

## 5-Minute Revision
- Clarify requirements and SLAs.
- Use async queue-based fan-out.
- Add idempotency, retries, DLQ, observability.
- Sequence rollout by risk.

## Practice Interview Questions
1. How would you guarantee delivery status correctness?
2. How do you handle provider outages gracefully?
3. What tenant-level controls are mandatory?
4. How do you optimize notification costs at scale?
5. How would you evolve to multi-region architecture?

## Key Takeaways
- End-to-end design requires both architecture and execution planning.
- Async decoupling and reliability patterns are central.
- Senior interview answers must include rollout, risk, and metrics.