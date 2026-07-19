# Observability

## Executive Summary
Observability is the ability to understand internal system state from telemetry outputs. It combines metrics, logs, and traces to diagnose unknown-unknown failures in complex systems.

Interviewers expect TPMs to articulate observability strategy beyond basic monitoring.

## Why This Matters
- TPM relevance: Better observability lowers MTTR and release risk.
- Architecture relevance: Instrumentation must be designed, not bolted on.
- Interview relevance: Senior-level reliability signal.

## Core Concepts
### Definitions
- Trace: End-to-end request journey across services.
- Span: Unit of work within a trace.
- Telemetry correlation: Linking logs, metrics, and traces.

### Internal Working
Instrumentation -> telemetry pipeline -> analysis -> alerts/runbooks -> remediation.

### ASCII Diagram
Request -> Service A -> Service B -> DB
   |        |           |
 traces   logs        metrics

### Trade-offs
- Deep instrumentation improves diagnosis but increases overhead.
- Broad sampling lowers cost but may miss rare issues.

## Real-world Example
Latency spikes in checkout:
- Tracing revealed intermittent downstream timeout pattern.
- Targeted fix in dependency retry policy resolved issue.

## TPM Perspective
Ask:
- Are traces sampled by risk-critical routes?
- Can we correlate user-impact metrics to root cause quickly?
- Which teams own observability standards?

## Interview Perspective
Strong answer:
"I design observability for fast root-cause analysis by correlating metrics, logs, and traces on critical paths, then tie alerts and runbooks to SLO impact."

## Common Mistakes
- Assuming dashboards alone provide observability.
- No trace propagation across services.
- No ownership for telemetry quality.

## 5-Minute Revision
- Observability extends beyond monitoring.
- Correlation across telemetry types is key.
- Instrument critical paths first.

## Practice Interview Questions
1. Monitoring vs observability: what is the difference?
2. How do traces help in microservice debugging?
3. What should be instrumented first?
4. How do you control telemetry cost?
5. How do you measure observability maturity?

## Key Takeaways
- Observability improves resilience and delivery confidence.
- Correlated telemetry is essential for complex systems.
- TPMs should treat observability as a platform capability.
