# AWS CloudFormation

## Executive Summary
CloudFormation is infrastructure-as-code for AWS. Instead of clicking through the console, you define your infrastructure in a template and CloudFormation creates and updates it. For TPMs, CloudFormation is how you ensure reproducibility, enable rapid scaling, and prevent configuration drift.

## Why This Matters
- TPM relevance: Reproducible infrastructure accelerates programs and prevents "snowflake" configurations.
- Interview relevance: Infrastructure automation is a core DevOps competency.

## Core Concepts
### CloudFormation Basics
- Templates: YAML/JSON files describing AWS resources.
- Stacks: A deployed template and all its resources.
- Parameters: Input variables to templates.
- Outputs: Values exported for use by other stacks.

### Key Features
- Change sets: Preview what will change before applying.
- Rollback: Automatic rollback if deployment fails.
- Nested stacks: Breaking large templates into reusable components.

### Internal Working
Template (YAML/JSON) -> CloudFormation -> Create/Update Stack -> Validate -> Deploy -> Monitor.

### ASCII Diagram
Infrastructure Template -> CloudFormation -> Stack Creation -> Drift Detection -> Updates

### Trade-offs
- Template complexity for reusability and consistency.
- Initial setup time vs long-term reproducibility.

## Real-world Example
A team set up an environment manually, then needed to replicate it for a second region. The manual process took 3 weeks and was error-prone. A CloudFormation template made it 15 minutes, accurately replicated, and repeatable forever.

## TPM Perspective
Ask:
- Do we have templates for all production infrastructure?
- How do we handle configuration drift?
- Can a new engineer spin up a test environment in 10 minutes using templates?
- What is in source control and what is just in AWS?

## Interview Perspective
Strong answer:
"I use CloudFormation templates for all infrastructure, version them in source control, and deploy through CI/CD pipelines. Templates are parameterized to handle dev, staging, production. Change sets preview changes before applying them."

## Common Mistakes
- Manual infrastructure alongside CloudFormation (drift and confusion).
- Templates too coupled to environments (not reusable).
- Not using change sets (deploying without preview).
- Large monolithic templates (hard to understand and debug).

## 5-Minute Revision
- CloudFormation: infrastructure-as-code using templates.
- Stacks are deployed instances of templates.
- Change sets preview changes before applying.
- Nested stacks enable modularity and reuse.

## Practice Interview Questions
1. How would you structure CloudFormation templates for a multi-environment setup?
2. What is a change set and why is it important?
3. How do you handle drift in CloudFormation stacks?
4. What goes into source control with CloudFormation?
5. How would you version and deploy a template change?

## Key Takeaways
- CloudFormation is how you achieve infrastructure reproducibility.
- Templates in source control enable infrastructure review and history.
- Change sets prevent surprises; always use them.
