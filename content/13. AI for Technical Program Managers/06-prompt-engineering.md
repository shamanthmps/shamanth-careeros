# Prompt Engineering

## Executive Summary
Prompt engineering is designing instructions and context so model output is reliable for a task. TPM interviews focus on systematic prompting approaches, not prompt hacks.

Strong answers include structure, constraints, output formats, and evaluation loops.

## Why This Matters
- TPM relevance: Better prompts reduce rework and model cost.
- Architecture relevance: Prompt templates become part of production logic.
- Interview relevance: Common practical AI question.

## Core Concepts
### Definitions
- System prompt: Global behavior instruction.
- User prompt: Task-specific request.
- Few-shot prompting: Include examples to guide behavior.
- Structured output: JSON/schema-constrained output.

### Internal Working
Task definition -> prompt template -> examples/constraints -> model response -> validation.

### ASCII Diagram
Input -> Prompt Builder -> LLM -> Output Validator -> App

### Trade-offs
- More context/examples: higher quality, more tokens.
- Strict format constraints: reliability, less flexibility.

## Real-world Example
Support ticket triage:
- Initial prompt produced inconsistent categories.
- Added taxonomy definitions + examples + JSON schema.
- Accuracy and automation reliability improved.

## TPM Perspective
Ask:
- Is output deterministic enough for automation?
- What validation catches malformed responses?
- How are prompt versions tested and rolled back?

## Interview Perspective
Strong answer:
"I treat prompts as versioned artifacts with templates, examples, schema constraints, and evaluation datasets. I optimize for consistency and measurability, not one-off demos."

## Common Mistakes
- Manual prompt tweaking without evals.
- No schema validation.
- Prompt drift with no version control.

## 5-Minute Revision
- Prompting is engineering, not magic.
- Use templates, examples, and validation.
- Version and evaluate prompts continuously.

## Practice Interview Questions
1. How do you make LLM output more consistent?
2. When should you use few-shot prompting?
3. How do you version prompt changes safely?
4. What output validation should be enforced?
5. How do prompts affect token cost?

## Key Takeaways
- Prompt quality strongly influences system quality.
- Production prompts need governance and testing.
- TPMs should enforce prompt lifecycle management.
