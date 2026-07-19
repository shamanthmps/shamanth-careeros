# DORA Metrics

## Executive Summary
DORA metrics are a proven framework for measuring software delivery performance and reliability. In interviews, TPMs should explain how to use these metrics for improvement, not vanity reporting.

Strong answers connect DORA trends to bottleneck diagnosis and targeted interventions.

## Why This Matters
- TPM relevance: DORA metrics guide platform and process investments.
- Architecture relevance: Delivery architecture influences metric outcomes.
- Interview relevance: Common leadership and DevOps maturity topic.

## Core Concepts
### Core Metrics
- Deployment Frequency
- Lead Time for Changes
- Change Failure Rate
- Time to Restore Service

### Internal Working
Collect pipeline and incident data -> compute baselines -> identify bottlenecks -> run improvement experiments.

### ASCII Diagram
DevOps Data -> DORA Dashboard -> Bottleneck Analysis -> Improvement Plan

### Trade-offs
- Optimizing one metric in isolation can hurt others.
- Metric visibility improves focus but may drive gaming behavior if incentives are poor.

## Real-world Example
A team improved lead time by parallelizing CI and reducing approval queue delays, then stabilized change failure rate with stronger canary gates.

## TPM Perspective
Ask:
- Which metric is weakest and why?
- Are metrics segmented by service criticality?
- What process changes are tied to metric improvements?

## Interview Perspective
Strong answer:
"I use DORA metrics as a system: identify primary bottleneck, run targeted improvement experiments, and monitor trade-offs across speed and stability metrics."

## Common Mistakes
- Using DORA only for reporting.
- Comparing teams without context.
- Incentivizing deployment frequency without quality controls.

## 5-Minute Revision
- DORA measures both flow and stability.
- Improve via bottleneck-focused experiments.
- Segment metrics by risk and service type.

## Practice Interview Questions
1. How do you improve lead time without increasing failures?
2. What causes high change-failure rate?
3. How should DORA be used in executive reviews?
4. How do you prevent metric gaming?
5. How do you set realistic DORA targets?

## Key Takeaways
- DORA is an improvement framework, not a scorecard alone.
- Balance speed and stability outcomes.
- TPMs should tie DORA to concrete program actions.
