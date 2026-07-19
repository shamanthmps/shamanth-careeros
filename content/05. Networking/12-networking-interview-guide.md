# Networking Interview Guide

## Executive Summary
This guide consolidates the networking topics most likely to appear in Senior/Staff/Principal TPM interviews and provides answer frameworks that balance technical depth with business relevance.

Goal: help you answer networking questions with structured trade-off reasoning.

## Why This Matters
- TPM relevance: Networking choices influence reliability, latency, and cost.
- Architecture relevance: Every distributed design depends on network assumptions.
- Interview relevance: Networking depth often differentiates senior candidates.

## Core Concepts
### Interview Framework
1. Clarify workload and user impact.
2. Identify latency/reliability constraints.
3. Choose protocol/components.
4. Explain trade-offs and failure behavior.
5. Define metrics and rollout controls.

### Common Comparison Topics
- TCP vs UDP
- REST vs gRPC vs GraphQL
- API Gateway vs Reverse Proxy
- CDN vs direct origin
- WebSockets vs polling/SSE

### ASCII Cheat Flow
Requirements -> Protocol/Topology -> Resilience Controls -> Metrics

### Trade-offs
- Performance vs reliability guarantees
- Simplicity vs flexibility
- Cost vs global user experience

## Real-world Example
Design prompt: "Global notifications service"
- Used API gateway, queue fan-out, region-aware LB, CDN for static templates, WebSockets for live status updates.
- Added fallback to polling for unreliable networks.

## TPM Perspective
What to emphasize in interviews:
- Explicit latency budgets.
- Failure-mode handling and fallback.
- Operational metrics and ownership.
- Cost and compliance considerations.

## Interview Perspective
Strong answer pattern:
"Given the user SLA and traffic profile, I choose protocol X and topology Y, add controls A/B/C for reliability, then validate with metrics M/N and a phased rollout plan."

What interviewers evaluate:
- Structured reasoning.
- Practical trade-off judgment.
- Ability to lead implementation, not just theorize.

## Common Mistakes
- Memorized definitions without design application.
- Ignoring failure behavior.
- No quantitative assumptions.
- No operational metrics.

## 5-Minute Revision
- Start with requirements and latency budget.
- Pick protocol/topology by workload.
- Include reliability controls and fallback.
- End with measurable metrics.

## Practice Interview Questions
1. How do you design for low latency across regions?
2. When should you use gRPC instead of REST?
3. How would you debug intermittent timeout incidents?
4. How do you combine CDN and API caching safely?
5. What networking risks should be in launch readiness reviews?
6. How do you explain networking trade-offs to executives?
7. What is your approach to DNS failover strategy?
8. How do you choose between WebSockets and SSE?

## Key Takeaways
- Networking interview excellence is trade-off clarity plus execution realism.
- Tie protocol and topology choices to product and business outcomes.
- Always include failure handling, observability, and rollout discipline.
