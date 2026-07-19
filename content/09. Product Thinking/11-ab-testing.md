# A/B Testing

## Executive Summary
A/B testing is a specific form of experimentation that compares two variants to determine which performs better on a defined metric. In interviews, TPMs must demonstrate statistical literacy and operational judgment about when A/B testing is and is not the right tool.

Strong answers cover test design, validity threats, and business decision integration.

## Why This Matters
- TPM relevance: A/B tests validate product decisions before costly full rollout.
- Architecture relevance: Requires feature flag infrastructure, telemetry, and analytics pipelines.
- Interview relevance: Direct topic in product and data-literacy rounds.

## Core Concepts
### Definitions
- A/B test: Controlled comparison of control (A) vs variant (B).
- Minimum Detectable Effect (MDE): Smallest change the test is powered to detect.
- Sample size: Number of users required for statistical power.
- P-value: Probability observed difference is due to chance.
- Novelty effect: Temporary behavior change caused by unfamiliarity with variant.

### Internal Working
Define metric + MDE -> calculate sample size -> implement flag -> run full duration -> analyze -> decide.

### ASCII Diagram
Users -> Feature Flag -> Group A (control) | Group B (variant) -> Metric Collection -> Analysis

### Trade-offs
- Longer tests produce more reliable results but delay decisions.
- Testing everything slows shipping; testing nothing creates risk.

## Real-world Example
A checkout flow test showed 3% conversion improvement after one week. The team waited for full statistical significance at four weeks — which revealed the effect was 1.2%, still positive but requiring more deliberate rollout sequencing.

## TPM Perspective
Ask:
- Was sample size calculated before test started?
- Did the test run long enough to avoid novelty effects?
- What is the decision threshold — any positive result or minimum business value?

## Interview Perspective
Strong answer:
"I design A/B tests with pre-calculated sample sizes, defined duration to avoid novelty effects, a pre-agreed decision threshold, and guardrail metrics to catch regressions in non-primary dimensions."

## Common Mistakes
- Peeking at results before completion.
- No guardrail metrics for secondary impact.
- Testing too many variants simultaneously.
- Declaring success on statistical significance without business significance.

## 5-Minute Revision
- A/B test = structured comparison with controls.
- Pre-calculate sample size and set decision threshold first.
- Statistical significance ≠ business significance.

## Practice Interview Questions
1. How do you calculate sample size for an A/B test?
2. What is the risk of stopping a test early?
3. How do you design guardrail metrics alongside primary metrics?
4. When is A/B testing the wrong tool?
5. How do you present A/B test results to non-technical executives?

## Key Takeaways
- A/B testing is rigorous when designed correctly.
- Statistical and business significance must both be evaluated.
- TPMs should govern test quality standards and decision criteria.
