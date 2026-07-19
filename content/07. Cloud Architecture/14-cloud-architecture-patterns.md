# Cloud Architecture Patterns

## Executive Summary
Cloud architecture patterns are reusable solution templates for common scalability, resilience, and integration problems. Interviewers expect TPMs to choose patterns by context and explain implications.

Strong answers show pattern combinations and limits, not isolated definitions.

## Why This Matters
- TPM relevance: Pattern literacy accelerates architecture decision-making.
- Architecture relevance: Patterns reduce reinvention and operational risk.
- Interview relevance: Common way interviewers test practical design judgment.

## Core Concepts
### Common Patterns
- Strangler pattern for incremental migration.
- CQRS for read/write optimization.
- Event-driven architecture for decoupling.
- Bulkhead and circuit breaker for fault isolation.
- Sidecar pattern for cross-cutting concerns.

### Internal Working
Pattern selected by bottleneck/failure mode, integrated into target architecture with monitoring and rollback plan.

### ASCII Diagram
Problem -> Pattern Selection -> Implementation -> Validation

### Trade-offs
- Pattern reuse speeds delivery but can be misapplied.
- More patterns can increase system complexity if ungoverned.

## Real-world Example
Legacy monolith modernization:
- Used strangler pattern to route selected endpoints to new microservices.
- Reduced migration risk versus big-bang rewrite.

## TPM Perspective
Ask:
- Which problem are we solving with this pattern?
- What operational overhead does pattern introduce?
- How will success/failure of pattern adoption be measured?

## Interview Perspective
Strong answer:
"I apply cloud patterns by failure mode and workload bottleneck, combine them judiciously, and validate with measurable outcomes rather than pattern-for-pattern adoption."

## Common Mistakes
- Adopting patterns without clear problem statement.
- Layering too many patterns in early stages.
- No rollback if pattern increases complexity.

## 5-Minute Revision
- Patterns are means, not ends.
- Choose based on bottleneck and risk.
- Validate with metrics and operational feedback.

## Practice Interview Questions
1. How do you choose between migration patterns?
2. When is CQRS justified?
3. What risks come with event-driven architectures?
4. How do reliability patterns interact with cloud scaling?
5. How do you govern pattern adoption across teams?

## Key Takeaways
- Pattern selection should be objective-driven.
- Operational cost of patterns must be included in decisions.
- TPMs should prevent architecture over-complexity.
