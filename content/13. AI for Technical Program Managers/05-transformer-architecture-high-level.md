# Transformer Architecture (High Level)

## Executive Summary
Transformers are the dominant architecture behind modern LLMs. TPM interview depth should focus on intuition: attention lets models weigh relevant tokens in context more effectively than older sequential models.

You should explain why transformers enabled rapid quality improvements and what their scaling implications are.

## Why This Matters
- TPM relevance: Helps you reason about context limits, inference cost, and model scaling behavior.
- Architecture relevance: Attention complexity influences serving strategy.
- Interview relevance: Frequently asked foundational topic in AI interviews.

## Core Concepts
### Definitions
- Token: Sub-word text unit processed by model.
- Self-attention: Mechanism to relate each token to others in sequence.
- Encoder/decoder: Transformer block roles in different tasks.
- Positional encoding: Injects token order information.

### Internal Working
Tokens are embedded, contextualized via stacked attention + feed-forward layers, then decoded into next-token probabilities.

### ASCII Diagram
Tokens -> Embeddings -> Attention Blocks -> Output Probabilities

### Trade-offs
- Longer context improves reasoning scope but raises compute cost.
- Larger models improve capability but increase latency and memory needs.

## Real-world Example
Contract summarization:
- Long documents exceeded earlier model limits.
- Chosen model with larger context + chunking strategy.
- Improved coverage while controlling latency with batching.

## TPM Perspective
Ask:
- What context length is truly needed for use case?
- What latency target constrains model choice?
- Is chunking/retrieval enough instead of bigger model?

## Interview Perspective
Strong answer:
"At high level, transformers use attention to model relationships across tokens in parallel, which improves language understanding but increases compute with context length. So architecture must balance context, quality, latency, and cost."

## Common Mistakes
- Over-explaining math irrelevant to TPM role.
- Ignoring context-length cost impact.
- Assuming larger model always best.

## 5-Minute Revision
- Attention is the key unlock.
- Context and model size drive cost/latency.
- Architecture choices compensate for transformer limits.

## Practice Interview Questions
1. Why did transformers outperform earlier sequence models?
2. How does context length affect serving cost?
3. When should you use chunking with retrieval?
4. How do transformer limits influence product scope?
5. What should TPMs track in transformer-based systems?

## Key Takeaways
- Transformer intuition is enough for TPM interviews.
- Context and compute trade-offs are central.
- Model architecture must be paired with system architecture.
