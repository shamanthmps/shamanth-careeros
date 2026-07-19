# Product Metrics

## Executive Summary
Product metrics translate user behavior and business goals into measurable signals. In interviews, you are expected to choose the right metrics for a given product context, explain leading vs lagging indicators, and identify metric gaming risks.

Strong answers show a coherent metric framework tied to user value and business outcomes.

## Why This Matters
- TPM relevance: Programs without clear metrics cannot be objectively evaluated or improved.
- Architecture relevance: Observability and telemetry infrastructure must support product metrics.
- Interview relevance: Common in product sense and execution evaluation.

## Core Concepts
### Metric Categories
- Engagement: Usage frequency, session length, feature adoption.
- Retention: Return rate, churn rate, cohort retention.
- Revenue: Conversion, ARPU, LTV.
- Health: Error rate, latency, support ticket volume.
- North Star: Single metric capturing core product value.

### Internal Working
Define user journey -> identify key moments -> select metrics per moment -> track trends and segment.

### ASCII Diagram
User Action -> Metric Signal -> Trend Analysis -> Decision

### Trade-offs
- North Star clarity vs narrow focus missing important signals.
- Lagging revenue metrics vs leading engagement indicators.

## Real-world Example
A collaboration tool defined their North Star as "weekly active collaborators" rather than DAU. This shift focused teams on driving meaningful collaboration interactions, not just daily logins.

## TPM Perspective
Ask:
- Does this metric reflect real user value or just activity?
- What is the leading indicator that predicts our lagging outcome?
- Could this metric be gamed and what safeguards exist?

## Interview Perspective
Strong answer:
"I design metric frameworks by working backward from user value. I use a North Star tied to core product value, leading engagement metrics for early signals, and health metrics as reliability guardrails. I explicitly design for anti-gaming."

## Common Mistakes
- Optimizing engagement metrics at the expense of retention.
- Tracking metrics without action thresholds.
- No anti-gaming design.

## 5-Minute Revision
- North Star captures product value, not vanity.
- Leading metrics predict; lagging metrics confirm.
- Health metrics protect reliability alongside growth metrics.

## Practice Interview Questions
1. What is a North Star metric and how do you choose one?
2. How do you differentiate leading from lagging indicators?
3. What are common product metric anti-patterns?
4. How do you design against metric gaming?
5. How do you explain product metric frameworks to executives?

## Key Takeaways
- Metrics must reflect user value, not just activity.
- Metric frameworks include leading, lagging, and health signals.
- TPMs should own metric selection and integrity governance.
