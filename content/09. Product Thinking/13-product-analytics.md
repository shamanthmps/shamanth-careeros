# Product Analytics

## Executive Summary
Product analytics is the practice of using behavioral data to understand how users interact with products and to drive decisions. In TPM interviews, analytics literacy demonstrates your ability to make data-driven decisions rather than opinion-driven ones.

Strong answers show structured analysis, segmentation discipline, and avoidance of common pitfalls.

## Why This Matters
- TPM relevance: Analytics-driven TPMs make faster, higher-confidence product decisions.
- Architecture relevance: Analytics pipelines, event schemas, and data quality are architecture concerns.
- Interview relevance: Direct topic and embedded in most product and execution questions.

## Core Concepts
### Definitions
- Funnel analysis: Measuring drop-off through sequential user steps.
- Cohort analysis: Comparing behavior of user groups over time.
- Segmentation: Analyzing metrics by user attributes.
- Retention curve: How long users continue engaging after onboarding.

### Internal Working
Event instrumentation -> data pipeline -> aggregation -> analysis -> insight -> decision.

### ASCII Diagram
User Action -> Event -> Pipeline -> Dashboard -> Insight -> Decision

### Trade-offs
- More granular instrumentation improves insight but increases data volume and cost.
- Delayed data freshness reduces noise but slows decision speed.

## Real-world Example
Funnel analysis revealed that 40% of new users abandoned at a permission prompt. The team redesigned the prompt with context and reduced abandonment by 25% without changing any other flow.

## TPM Perspective
Ask:
- Is the event schema consistent enough to trust the data?
- Are we analyzing cohorts or conflating user lifecycle stages?
- What decisions will this analysis inform?

## Interview Perspective
Strong answer:
"I use funnel analysis to find drop-off, cohort analysis to understand retention trends, and segmentation to identify if problems affect specific user groups differently. I start with a hypothesis and use data to validate, not to fish for supporting evidence."

## Common Mistakes
- Correlation treated as causation.
- No hypothesis before analysis.
- Aggregate metrics masking user segment problems.

## 5-Minute Revision
- Define question before pulling data.
- Segment to find where problems concentrate.
- Funnel + cohort + segmentation cover most TPM analytics needs.

## Practice Interview Questions
1. How would you diagnose declining retention?
2. What does a healthy retention curve look like?
3. How do you prevent p-hacking in product analytics?
4. What event schema standards should be enforced?
5. How do you present data insights to stakeholders who prefer anecdotes?

## Key Takeaways
- Analytics literacy is a core TPM skill at senior levels.
- Hypothesis-first analysis is more trustworthy.
- TPMs should govern data quality as much as data interpretation.
