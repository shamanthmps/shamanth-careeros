# Cloud Case Study

## Executive Summary
This case study integrates cloud architecture topics into an interview-style scenario. Prompt: A global SaaS platform must improve latency, resilience, and cost efficiency while meeting compliance requirements in selected regions.

Goal: present a phased, risk-aware architecture evolution.

## Why This Matters
- TPM relevance: Reflects real cloud transformation programs.
- Architecture relevance: Requires service placement, multi-region strategy, scaling, DR, and governance.
- Interview relevance: End-to-end synthesis test for senior roles.

## Core Concepts
### Current State
- Single-region deployment with rising latency and outage risk.
- Overprovisioned compute and high storage spend.
- Weak DR readiness.

### Proposed Architecture
Phase 1:
- Introduce autoscaling and rightsizing.
- Add multi-zone HA baseline.
- Implement IAM least-privilege cleanup.

Phase 2:
- Add multi-region read architecture for latency.
- Establish DR warm standby with tested runbooks.
- Implement storage lifecycle tiering.

Phase 3:
- Migrate selected event-driven workloads to serverless.
- Add FinOps governance and cost anomaly alerts.
- Standardize cloud patterns and review gates.

### ASCII Roadmap
Stability Foundation -> Regional Resilience -> Optimization & Scale

### Trade-offs
- Incremental migration reduces risk but extends timeline.
- Multi-region reliability gains increase operations complexity and cost.

## Real-world Outcome Model
Expected outcomes:
- Lower global latency on user-critical paths.
- Improved availability and recovery posture.
- Better cloud unit economics and governance discipline.

## TPM Perspective
Execution controls:
- Risk-tiered migration waves.
- Architecture review board with security and SRE participation.
- KPI tracking: latency, availability, recovery time, cost per tenant.

## Interview Perspective
Strong answer:
"I would execute cloud modernization in phases: first stabilize and secure baseline operations, then add multi-region resilience where justified, and finally optimize cost and platform consistency with measurable governance controls."

Why strong: sequenced, measurable, and risk-aware.

## Common Mistakes
- Big-bang migration.
- No recovery testing before expansion.
- Cost optimization detached from reliability goals.

## 5-Minute Revision
- Start with baseline reliability and IAM controls.
- Expand regionally by workload criticality.
- Embed cost and governance into every phase.

## Practice Interview Questions
1. How do you prioritize cloud modernization initiatives?
2. Which workloads should move multi-region first?
3. How do you set DR investment levels by domain?
4. How do you sequence cost optimization without destabilizing services?
5. What KPIs prove cloud transformation success?

## Key Takeaways
- Cloud transformation should be phased and evidence-driven.
- Reliability, compliance, and cost must be optimized together.
- TPMs should lead with governance, metrics, and dependency orchestration.
