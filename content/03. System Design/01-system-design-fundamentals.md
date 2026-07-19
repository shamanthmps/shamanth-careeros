# System Design Fundamentals

## Executive Summary
System design interviews test your ability to convert ambiguous product goals into reliable, scalable architecture. For Senior, Staff, and Principal TPM roles, the bar is not drawing boxes. The bar is making explicit trade-offs, sequencing execution, and aligning engineering decisions with business outcomes.

A strong answer defines scope, assumptions, constraints, and success metrics before proposing technology. Interviewers are evaluating judgment under uncertainty, communication clarity, and your ability to lead cross-functional architecture decisions.

## Why This Matters
- TPM relevance: You must align product, engineering, security, SRE, and finance around one architecture direction.
- Architecture relevance: Foundational decisions on boundaries, data flow, consistency, and resilience shape long-term velocity.
- System design relevance: Almost every round uses open-ended prompts with incomplete inputs.
- Common questions: "Design X at scale", "How would you evolve current architecture?", "What are top risks?"

## Core Concepts
### Definitions
- Functional requirements: What the system must do.
- Non-functional requirements: Scale, latency, availability, security, cost.
- Constraints: Time, team capability, compliance, existing platform limits.
- SLO: Objective target for latency, error rate, and availability.

### Internal Working
Interview response flow:
1. Clarify scope and users.
2. Estimate scale and traffic shape.
3. Propose high-level architecture.
4. Deep dive on bottlenecks and failure handling.
5. Present trade-offs and phased rollout.

### ASCII Diagram
User -> API -> Service Layer -> Data Layer
                     |
                     +-> Async Queue -> Workers

### Design Trade-offs
- Simplicity vs extensibility
- Latency vs consistency
- Build speed vs long-term maintainability

## Real-world Example
A food-delivery company launches scheduled enterprise orders.
- Problem: Need strict order correctness plus high-volume status reads.
- Decision: Transactional core for order/payment, cache + replicas for status reads.
- Outcome: Correct billing with low-latency customer tracking.

## TPM Perspective
Questions to ask:
- Which workflows are business-critical and cannot fail?
- What are target SLOs and compliance constraints?
- What is the migration and rollback plan?
- Which dependencies can block release?

Risks to identify:
- Undefined ownership boundaries
- Hidden coupling between services
- Architecture chosen without capacity assumptions

## Interview Perspective
Strong answer:
"I begin with user journeys and non-functional goals, define assumptions, then map architecture to scale and reliability constraints. I call out bottlenecks, failure modes, and phased execution with measurable success metrics."

Why it works: Structured, business-aware, and execution-ready.

## Common Mistakes
- Jumping to tools before clarifying requirements.
- Ignoring non-functional constraints.
- No assumptions stated.
- No risk or migration plan.
- One-size-fits-all architecture.

## 5-Minute Revision
- Start with requirements, not components.
- Quantify scale before design choices.
- Separate critical vs non-critical paths.
- Always include failure handling and rollout plan.

## Practice Interview Questions
1. How do you structure a system design answer in the first 2 minutes?
2. What assumptions should be stated early?
3. How do you prioritize trade-offs for leadership?
4. How do you scope deep dives under time pressure?
5. What makes an architecture answer "senior"?

## Key Takeaways
- System design is decision-making under constraints.
- Structured communication is a core signal of seniority.
- Trade-offs and execution planning matter as much as architecture diagrams.