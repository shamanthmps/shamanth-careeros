# Large Language Models (LLMs)

## Executive Summary
LLMs are general-purpose language models that can perform generation, summarization, extraction, reasoning-like tasks, and tool use. In interviews, TPM candidates should explain where LLMs create leverage and where reliability limits require controls.

Strong answers focus on architecture patterns: prompt design, retrieval grounding, guardrails, and evaluation.

## Why This Matters
- TPM relevance: LLM features can ship fast but fail unpredictably without controls.
- Architecture relevance: Context management and model routing drive quality and cost.
- Interview relevance: High-frequency topic in AI system design rounds.

## Core Concepts
### Definitions
- Context window: Maximum input tokens model can process.
- Temperature: Controls output randomness.
- Prompt: Instruction + context sent to model.
- Tool calling: Model invokes external functions/APIs.

### Internal Working
User query -> prompt construction -> optional retrieval/tools -> model inference -> post-processing -> response.

### ASCII Diagram
User -> Orchestrator -> (RAG/Tools) -> LLM -> Guardrails -> Output

### Trade-offs
- Bigger context: better coverage, higher cost/latency.
- Lower temperature: consistency, less creativity.

## Real-world Example
Enterprise Q&A assistant:
- Base LLM hallucinated policy answers.
- Added retrieval from approved documents.
- Quality and trust improved significantly.

## TPM Perspective
Ask:
- What classes of errors are unacceptable?
- Which responses need citation or confidence gating?
- What fallback path exists during model/provider outage?

## Interview Perspective
Strong answer:
"I treat LLMs as probabilistic components and improve reliability through retrieval grounding, tool constraints, policy filters, and continuous evals tied to business risk."

## Common Mistakes
- Shipping raw model output without grounding.
- No prompt/version control.
- No token/cost budgets.

## 5-Minute Revision
- LLMs are powerful but non-deterministic.
- Reliability comes from architecture around the model.
- Eval, guardrails, and fallback are mandatory.

## Practice Interview Questions
1. What makes LLM output unreliable in production?
2. How do you improve factuality?
3. When do you use tool calling?
4. How do you control token cost?
5. What KPIs matter for LLM features?

## Key Takeaways
- LLM quality is system-quality, not model-only quality.
- Grounding and guardrails are key for enterprise trust.
- TPMs should manage cost, risk, and rollout discipline.
