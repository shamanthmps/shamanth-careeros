# Machine Learning Fundamentals

## Executive Summary
Machine learning is pattern learning from data to make predictions or decisions. TPM interviews focus on when ML is appropriate, what data quality is required, and how model performance translates to business impact.

You do not need to derive algorithms, but you must understand supervised, unsupervised, and reinforcement paradigms at decision level.

## Why This Matters
- TPM relevance: Most ML failures are objective mismatch, label quality issues, or poor deployment assumptions.
- Architecture relevance: Data pipelines and feature consistency are critical.
- Interview relevance: You will be asked to choose ML approach for specific scenarios.

## Core Concepts
### Definitions
- Supervised learning: Learn from labeled input-output pairs.
- Unsupervised learning: Discover structure without labels.
- Feature: Input variable used by model.
- Label: Ground-truth target value.
- Overfitting: Model memorizes training data, generalizes poorly.

### Internal Working
Data collection -> preprocessing -> train/validation split -> model training -> evaluation -> deployment.

### ASCII Diagram
Raw Data -> Features -> Model Training -> Validation -> Deployment

### Trade-offs
- Simpler model vs peak accuracy
- Offline metric gains vs production robustness

## Real-world Example
Fraud scoring:
- Supervised model trained on confirmed fraud labels.
- Added rules fallback for sparse-data segments.
- Improved detection while controlling false positives.

## TPM Perspective
Ask:
- Are labels reliable and timely?
- What is cost of false positives vs false negatives?
- How often does data drift occur?

## Interview Perspective
Strong answer:
"I start with objective and error-cost profile, validate data quality and labeling, choose the simplest model that meets SLA, and design monitoring for drift and model decay."

## Common Mistakes
- Optimizing only for accuracy.
- Ignoring class imbalance.
- Deploying without drift monitoring.

## 5-Minute Revision
- Match ML type to problem and data.
- Define error-cost trade-offs explicitly.
- Plan for drift before production launch.

## Practice Interview Questions
1. How do you decide if ML is needed at all?
2. What are top causes of ML model failure in production?
3. How do you handle imbalanced datasets?
4. What metrics matter for fraud vs recommendation?
5. How do you plan retraining cadence?

## Key Takeaways
- ML success depends on data quality and objective design.
- Business error costs should drive model decisions.
- Production monitoring is mandatory, not optional.
