# AI Security & Privacy

## Executive Summary
AI security and privacy cover threats unique to AI systems: prompt injection, data leakage, model abuse, insecure tool calls, and sensitive training/inference data exposure. TPM interview depth should focus on practical controls.

Strong answers connect threat models to architecture and operational response.

## Why This Matters
- TPM relevance: AI security failures can create severe legal and trust impact.
- Architecture relevance: Security must span data, prompts, tools, and outputs.
- Interview relevance: Frequent for enterprise AI platform roles.

## Core Concepts
### Threat Areas
- Prompt injection and jailbreak attempts
- Data exfiltration through model output
- Unsafe tool invocation
- Model endpoint abuse and denial-of-wallet attacks

### Internal Working
Threat model -> preventive controls -> detection -> containment -> recovery.

### ASCII Diagram
User Input -> Sanitization -> Orchestrator -> LLM/Tools -> Output Filter -> User

### Trade-offs
- Stronger security controls vs slight latency overhead.
- Broad tool access vs blast-radius risk.

## Real-world Example
Internal assistant with codebase access:
- Added strict tool allowlist and role-based access.
- Blocked data export actions from model-initiated calls.
- Reduced high-risk misuse surface.

## TPM Perspective
Ask:
- Which data classes are allowed in prompts?
- What tool actions are prohibited by default?
- How are suspicious prompts detected and logged?

## Interview Perspective
Strong answer:
"I apply layered security: input sanitization, least-privilege tool access, output filtering, and audit trails, with threat-specific test cases before production rollout."

## Common Mistakes
- Trusting model output by default.
- No allowlist for tool calls.
- Logging sensitive prompts without masking.

## 5-Minute Revision
- AI security is layered defense.
- Restrict tool permissions aggressively.
- Protect sensitive data across prompt and output paths.

## Practice Interview Questions
1. How do you defend against prompt injection?
2. What controls protect tool integrations?
3. How do you prevent data leakage in responses?
4. What security telemetry is required for AI systems?
5. How do you run AI red-team testing?

## Key Takeaways
- AI systems require dedicated security architecture.
- Least privilege and filtering are essential.
- TPMs should enforce AI-specific threat modeling.
