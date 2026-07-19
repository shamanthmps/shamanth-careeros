# Fine-Tuning vs Prompting vs RAG

## Executive Summary
This is a core AI architecture decision. Interviewers expect TPMs to choose among prompting, RAG, and fine-tuning based on data volatility, latency, quality, and cost.

There is no universal winner. Strong answers explain selection criteria and evolution path.

## Why This Matters
- TPM relevance: Wrong choice can add major cost or delay with minimal quality gains.
- Architecture relevance: Each method changes data, MLOps, and governance requirements.
- Interview relevance: Very common design trade-off question.

## Core Concepts
### Definitions
- Prompting: Improve behavior through instruction design only.
- RAG: Add external retrieved context during inference.
- Fine-tuning: Train model weights on task/domain data.

### Internal Working
Prompting: lowest setup, fastest iteration.
RAG: moderate setup, strong for dynamic knowledge.
Fine-tuning: highest setup, useful for task/style adaptation at scale.

### ASCII Comparison
Need static behavior shift -> Fine-tune
Need fresh factual knowledge -> RAG
Need quick iteration -> Prompting

### Trade-offs
- Speed vs long-term optimization.
- Operating complexity vs quality consistency.

## Real-world Example
Legal assistant:
- Started with prompting for MVP.
- Added RAG for current policy citations.
- Fine-tuned only for classification subtask with large labeled set.

## TPM Perspective
Ask:
- How often does source knowledge change?
- Do we have quality labeled data?
- What is acceptable latency and infra complexity?

## Interview Perspective
Strong answer:
"I default to prompting for speed, add RAG for factual grounding, and reserve fine-tuning for stable high-value tasks where labeled data and ROI justify lifecycle overhead."

## Common Mistakes
- Fine-tuning too early.
- Using RAG with poor content quality.
- No benchmark to compare options.

## 5-Minute Revision
- Prompting: fastest.
- RAG: best for fresh knowledge.
- Fine-tuning: best for persistent behavior improvement with data.

## Practice Interview Questions
1. When should you avoid fine-tuning?
2. Why does RAG often beat fine-tuning for enterprise Q&A?
3. How do you compare quality across approaches?
4. Can these approaches be combined?
5. What is migration path across maturity stages?

## Key Takeaways
- Choose method by problem and data lifecycle.
- Start simple, escalate complexity with evidence.
- TPMs should anchor decisions in ROI and risk.
