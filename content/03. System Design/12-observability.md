# Observability

## Executive Summary
Observability enables teams to detect, diagnose, and resolve issues in complex systems. Senior interview answers should cover logs, metrics, traces, and actionable alerting tied to user impact.

For TPMs, observability is execution insurance: without it, reliability and performance programs fail.

## Why This Matters
- TPM relevance: Faster incident response and better release confidence.
- Architecture relevance: Instrumentation must be designed into services and dependencies.
- System design relevance: Expected in reliability and scaling discussions.

## Core Concepts
### Three Pillars
- Metrics: Numeric time-series (latency, error rate, saturation).
- Logs: Structured event records for context.
- Traces: End-to-end request path across services.

### Internal Working
Observability loop:
Emit telemetry -> Detect anomaly -> Triage root cause -> Mitigate -> Learn

### ASCII Diagram
Request -> Service A -> Service B -> DB
   |        |           |
 metrics   logs        traces

### Trade-offs
- More telemetry detail vs storage/cost overhead
- High alert sensitivity vs alert fatigue

## Real-world Example
Checkout latency regression:
- Trace data isolated slow downstream dependency.
- Error budget burn alert triggered before major outage.
- Rollback deployed quickly due to clear telemetry evidence.

## TPM Perspective
Questions:
- What are golden signals for this system?
- Which SLOs have user-facing impact?
- Who owns each alert and runbook?
- What release telemetry gates exist?

## Interview Perspective
Strong answer:
"I design observability around user-impact SLOs, instrument critical paths with metrics, logs, and traces, and enforce alert ownership with runbooks to reduce MTTR."

## Common Mistakes
- Logging without structure.
- Alerts with no owners.
- Monitoring infrastructure only, not user journeys.
- No distributed tracing in microservices.
- Excessive noisy alerts.

## 5-Minute Revision
- Instrument before scaling.
- Alert on SLO impact, not raw noise.
- Ensure traceability across dependencies.

## Practice Interview Questions
1. What are the four golden signals?
2. How do you reduce alert fatigue?
3. Why are traces critical for microservices?
4. What should be in an on-call runbook?
5. How do you measure observability maturity?

## Key Takeaways
- Observability is core reliability infrastructure.
- SLO-centric telemetry improves decision quality.
- Ownership and runbooks are as important as tools.