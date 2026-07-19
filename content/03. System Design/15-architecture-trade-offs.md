# Architecture Trade-offs

## Executive Summary
Architecture trade-offs are the core of senior system design interviews. There is rarely a perfect design. The evaluation is about how clearly you articulate competing constraints and choose the least-worst option for business goals.

TPM-level answers must show decision rationale, risks accepted, and mitigation plans.

## Why This Matters
- TPM relevance: You lead decisions across stakeholders with conflicting priorities.
- Architecture relevance: Every major choice has second-order effects.
- System design relevance: Trade-off depth differentiates senior candidates.

## Core Concepts
### Common Trade-off Axes
- Consistency vs availability
- Latency vs correctness
- Simplicity vs flexibility
- Build speed vs long-term maintainability
- Cost vs resilience

### Internal Working
Decision model:
1. Define objective and constraints.
2. List options.
3. Evaluate impacts by dimension.
4. Choose and document rationale.
5. Define mitigation for downsides.

### ASCII Matrix
Option A: +Latency -Consistency
Option B: +Consistency -Latency
Option C: Balanced with higher cost

### Trade-offs in Practice
- No trade-off is global; decisions are domain-specific.
- Explicit risk acceptance improves execution clarity.

## Real-world Example
Real-time fraud scoring:
- Low latency needed for checkout.
- Chose asynchronous enrichment for non-critical signals.
- Kept hard fraud blocks on fast deterministic rules.

Outcome: Balanced conversion with acceptable risk controls.

## TPM Perspective
Questions:
- Which dimension is truly non-negotiable?
- What downside are we accepting and why?
- How do we monitor if assumption fails?
- What is rollback or pivot trigger?

## Interview Perspective
Strong answer:
"I make trade-offs explicit by ranking constraints, evaluating options against those constraints, and documenting mitigations for the downsides we accept."

## Common Mistakes
- Presenting one option as perfect.
- No quantified impact.
- Ignoring business context.
- No mitigation plan for chosen downside.

## 5-Minute Revision
- Every architecture choice is a trade-off.
- Prioritize constraints before choosing.
- State what you are sacrificing and how you mitigate it.

## Practice Interview Questions
1. How do you present trade-offs to executives?
2. What trade-offs matter most in global systems?
3. How do you decide consistency level?
4. How do you handle disagreement across teams?
5. What makes a trade-off rationale credible?

## Key Takeaways
- Trade-off clarity is a senior leadership signal.
- Good decisions are context-driven, not absolute.
- Mitigation planning is part of the decision.