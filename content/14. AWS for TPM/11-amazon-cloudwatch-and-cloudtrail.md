# Amazon CloudWatch & CloudTrail

## Executive Summary
CloudWatch is your observability layer — monitoring, logging, and alarming. CloudTrail is your audit trail — who did what and when. For TPMs, these are the operational visibility and compliance foundations. Without them, you are flying blind.

## Why This Matters
- TPM relevance: Observability drives incident response, optimization decisions, and compliance.
- Interview relevance: Operations and reliability questions always involve observability.

## Core Concepts
### CloudWatch
- Metrics: Numeric time-series data (CPU, memory, request count).
- Logs: Text event streams from applications.
- Alarms: Automated notifications/actions when metrics cross thresholds.
- Dashboards: Visualization of multiple metrics.

### CloudTrail
- API audit trail: Every AWS API call logged with who, what, when.
- S3 delivery: Logs stored in S3 for long-term retention.
- Compliance evidence: Required for SOC2, FedRAMP, etc.

### Internal Working
Application -> CloudWatch Metrics/Logs -> Dashboard/Alarms -> Incident response
API Call -> CloudTrail -> S3 -> Compliance audit

### ASCII Diagram
Application Metrics -> CloudWatch -> Alarms -> SNS -> Incident Response
Every API Call -> CloudTrail -> S3 Archive -> Compliance Review

### Trade-offs
- Comprehensive logging increases cost but enables debugging and compliance.
- Real-time alerts require careful tuning (false positives waste time).

## Real-world Example
An outage lasted 4 hours because no one was monitoring the service. After implementing CloudWatch dashboards and alarms, the same incident would have been detected in 2 minutes and automatically triggered incident response.

## TPM Perspective
Ask:
- What is the SLA? (Drives what to monitor and alert on)
- What are the critical business metrics vs infrastructure metrics?
- Are we retaining logs for the required compliance period?
- Is alerting tuned to avoid alert fatigue?

## Interview Perspective
Strong answer:
"I use CloudWatch metrics for business (request rate, error rate, latency) and infrastructure health (CPU, memory). Alarms notify based on SLA thresholds. CloudTrail is non-negotiable for compliance and incident investigation."

## Common Mistakes
- Not monitoring until something breaks.
- Too many alerts causing alert fatigue.
- Logs not retained long enough for compliance.
- Dashboard clutter making real signals hard to find.

## 5-Minute Revision
- CloudWatch: metrics, logs, alarms, dashboards.
- CloudTrail: API audit trail for compliance.
- Metrics for health; logs for debugging.
- Alarms must be tuned to reduce false positives.

## Practice Interview Questions
1. How would you instrument a new service with CloudWatch?
2. What should you alert on vs just log?
3. How long should CloudTrail logs be retained?
4. How do you prevent alert fatigue?
5. How do you use metrics to understand if an outage is your fault or a dependency?

## Key Takeaways
- Observability is non-negotiable for operational excellence.
- CloudWatch for monitoring; CloudTrail for compliance.
- Business metrics (error rate, latency) matter more than infrastructure metrics.
