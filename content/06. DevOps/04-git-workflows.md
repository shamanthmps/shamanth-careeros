# Git Workflows

## Executive Summary
Git workflows define how teams collaborate, review, and release code. TPM interview depth focuses on flow efficiency, quality controls, and branching strategy fit for team size and release model.

Strong answers compare trunk-based and branch-heavy workflows pragmatically.

## Why This Matters
- TPM relevance: Workflow friction directly affects lead time and merge conflict cost.
- Architecture relevance: Release cadence and feature flags influence branching strategy.
- Interview relevance: Common execution and process question.

## Core Concepts
### Definitions
- Trunk-based development: Short-lived branches merged frequently to main.
- GitFlow: Multiple long-lived branches for release management.
- PR/MR: Pull or merge request for code review.
- Protected branch: Controlled merge permissions and checks.

### Internal Working
Developer branch -> PR -> checks/review -> merge -> pipeline -> release

### ASCII Diagram
Feature Branch -> PR -> Main -> CI/CD -> Production

### Trade-offs
- Trunk-based: faster flow, needs strong automation.
- Branch-heavy: structured release paths, can slow integration.

## Real-world Example
Platform team moved from long-lived branches to trunk-based plus feature flags. Merge conflicts and release delays dropped.

## TPM Perspective
Ask:
- How long do branches stay open?
- Which checks are blocking on merge?
- Are release branches still needed with flags/canary?

## Interview Perspective
Strong answer:
"I choose Git workflow based on team scale and release risk. I prefer trunk-based with strong CI and feature flags for high-velocity teams, while keeping stricter release branches where regulatory controls demand it."

## Common Mistakes
- Long-lived branches causing drift.
- Inconsistent PR standards.
- Manual merges bypassing checks.

## 5-Minute Revision
- Workflow should optimize integration frequency.
- Strong CI enables trunk-based speed.
- Governance can be enforced without slowing all teams.

## Practice Interview Questions
1. Trunk-based vs GitFlow: when to choose which?
2. How do feature flags reduce branch complexity?
3. What PR checks should be mandatory?
4. How do you reduce merge conflict frequency?
5. How do you scale code review quality?

## Key Takeaways
- Git workflow is a delivery design choice.
- Integration speed and quality controls must balance.
- TPMs should standardize where it reduces friction and risk.
