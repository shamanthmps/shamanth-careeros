# Experimentation

## Executive Summary
Experimentation is the practice of designing structured tests to validate product hypotheses before full commitment. In interviews, strong TPM answers show a rigorous experimental mindset — defining hypotheses, controls, success criteria, and decision rules before running.

Experimentation reduces the cost of being wrong by making mistakes small, fast, and informative.

## Why This Matters
- TPM relevance: Experimentation culture reduces large program risk.
- Architecture relevance: Experiment infrastructure requires feature flags, telemetry, and analysis tooling.
- Interview relevance: Common in product, execution, and data-literacy rounds.

## Core Concepts
### Definitions
- Hypothesis: Testable statement about expected change and cause.
- Control group: Population not exposed to the change.
- Treatment group: Population exposed to the change.
- Statistical significance: Confidence that observed effect is not random.

### Internal Working
Hypothesis defined -> experiment designed -> traffic split -> data collected -> analysis -> decision.

### ASCII Diagram
Hypothesis -> Design -> Split Traffic -> Collect -> Analyze -> Decide

### Trade-offs
- More rigorous experiments produce reliable results but take more time.
- Faster experiments generate more learning but with higher noise.

## Real-world Example
Before fully rebuilding a checkout flow, a team experimented with only the payment step. The experiment revealed the bottleneck was actually in address validation, not payment input — saving weeks of misdirected work.

## TPM Perspective
Ask:
- Is the hypothesis falsifiable?
- What sample size and duration ensures reliable results?
- What is the decision rule before seeing results?

## Interview Perspective
Strong answer:
"I treat experimentation as a risk management tool. I define hypothesis, control/treatment split, duration, minimum detectable effect, and decision criteria before launching — so results inform decisions rather than justify them post-hoc."

## Common Mistakes
- Stopping experiments early when early data looks good.
- No pre-defined decision threshold.
- Running multiple experiments simultaneously with confounded results.

## 5-Minute Revision
- Hypothesis and decision criteria come before data collection.
- Statistical rigor prevents premature conclusions.
- Experiments reduce risk when designed correctly.

## Practice Interview Questions
1. How do you design a valid product experiment?
2. What is novelty effect and why does it matter?
3. How do you handle conflicting experiment results?
4. When should you not run an experiment?
5. How do you build experimentation culture in a team?

## Key Takeaways
- Experimentation is structured learning, not random testing.
- Pre-defined decision rules are mandatory.
- TPMs who can design rigorous experiments are trusted for major bets.
