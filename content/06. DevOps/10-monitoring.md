# Monitoring

## Executive Summary
Monitoring tracks system health and behavior through metrics and alerts. In DevOps interviews, TPMs should explain how monitoring supports proactive reliability and informed decision-making.

Strong answers focus on actionable signals and ownership.

## Why This Matters
- TPM relevance: Monitoring quality influences incident detection speed.
- Architecture relevance: Metrics must map to service and user-path SLOs.
- Interview relevance: Core operational competency.

## Core Concepts
### Definitions
- Golden signals: latency, traffic, errors, saturation.
- Alert: Automated notification on threshold or anomaly.
- SLI/SLO: Service level indicator/objective.

### Internal Working
Service emits metrics -> monitoring backend aggregates -> alert rules evaluate -> responders act.

### ASCII Diagram
Service -> Metrics -> Dashboards/Alerts -> On-call Response

### Trade-offs
- Sensitive alerts detect issues faster but increase noise.
- Conservative alerts reduce noise but can delay detection.

## Real-world Example
Checkout service:
- Added SLO burn-rate alerts and customer-journey dashboards.
- Reduced mean time to detect high-severity issues.

## TPM Perspective
Ask:
- Which metrics represent customer pain earliest?
- Who owns each critical alert?
- What is alert fatigue trend?

## Interview Perspective
Strong answer:
"I build monitoring around SLO-aligned signals, ensure alert ownership and runbooks, and continuously tune thresholds to maximize actionable detection."

## Common Mistakes
- Monitoring infra metrics only, not user journeys.
- Alerts without runbooks.
- No periodic alert tuning.

## 5-Minute Revision
- Monitor what users experience.
- Alert ownership is non-negotiable.
- Tune for actionability, not noise.

## Practice Interview Questions
1. What should be monitored first in a new system?
2. How do you reduce alert fatigue?
3. What is burn-rate alerting?
4. How do you map monitoring to SLOs?
5. What metrics should leadership dashboards include?

## Key Takeaways
- Monitoring is foundational reliability infrastructure.
- SLO-centric design improves operational outcomes.
- TPMs should enforce metric and alert governance.
