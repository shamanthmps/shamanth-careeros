# Product Lifecycle

## Executive Summary
The product lifecycle describes the stages a product moves through from discovery to retirement. TPMs must understand lifecycle stages to make appropriate investment, resourcing, and sunset decisions.

Interviewers test lifecycle awareness when asking about prioritization, investment sequencing, and when to stop building.

## Why This Matters
- TPM relevance: Resource allocation and technical debt decisions differ by lifecycle stage.
- Architecture relevance: Architecture investment scale appropriately to lifecycle phase.
- Interview relevance: Relevant in roadmap and prioritization discussions.

## Core Concepts
### Lifecycle Stages
- Discovery: Validate problem and solution fit.
- Introduction: Launch with minimal viable capability.
- Growth: Expand features and scale infrastructure.
- Maturity: Optimize and sustain.
- Decline/Sunset: Gracefully retire or replace.

### Internal Working
Stage drives investment, team size, architecture complexity, and success metrics.

### ASCII Diagram
Discovery -> Introduction -> Growth -> Maturity -> Decline -> Sunset

### Trade-offs
- Investing heavily in early stages risks over-building before market validation.
- Under-investing in growth stages lets competitors win.

## Real-world Example
A platform feature was allocated growth-stage resources but had never validated product-market fit. Revisiting discovery data revealed low adoption — the team pivoted before large infrastructure investment was made.

## TPM Perspective
Ask:
- What lifecycle stage is this product/feature in?
- Are we investing appropriately for the current stage?
- What would trigger a sunset decision?

## Interview Perspective
Strong answer:
"I match investment to lifecycle stage. In discovery, I push for small fast experiments. In growth, I scale carefully. In maturity, I prioritize reliability and cost efficiency. Sunset decisions are data-driven against usage and business value."

## Common Mistakes
- Applying maturity-stage engineering to discovery-stage ideas.
- No explicit sunset criteria.
- Continuing to invest in declining products without reassessment.

## 5-Minute Revision
- Lifecycle stage governs investment size and type.
- Discovery = validate; Growth = scale; Maturity = sustain.
- Sunset requires explicit criteria and a migration plan.

## Practice Interview Questions
1. How do you decide when to sunset a product?
2. How does lifecycle stage influence architecture decisions?
3. What are signs a product is stuck between stages?
4. How do you manage teams across different lifecycle stages simultaneously?
5. When should you stop investing in a growth-stage product?

## Key Takeaways
- Lifecycle awareness prevents both under and over investment.
- Each stage has distinct success metrics.
- TPMs should make lifecycle stage explicit in planning and reviews.
