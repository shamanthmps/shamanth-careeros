# Deep Learning Fundamentals

## Executive Summary
Deep learning uses multi-layer neural networks to learn complex representations from large data. TPM-level understanding should focus on where deep learning is worth its cost and complexity.

Interviewers expect clarity on data/compute requirements, latency trade-offs, and operational implications.

## Why This Matters
- TPM relevance: Deep learning projects can be high-cost with uncertain ROI.
- Architecture relevance: Training and inference infrastructure decisions become critical.
- Interview relevance: Common in vision, speech, ranking, and language scenarios.

## Core Concepts
### Definitions
- Neural network: Layered function approximator.
- Epoch: One full pass over training data.
- Inference latency: Time to generate output.
- Model size: Parameter count affecting quality/cost.

### Internal Working
Data -> model architecture -> training loop -> validation -> serving optimization.

### ASCII Diagram
Input -> Hidden Layers -> Output

### Trade-offs
- Larger models: better potential quality, higher latency/cost.
- More training: better fit, risk of overfitting.

## Real-world Example
Document classification:
- Switched from linear model to transformer encoder for nuanced text.
- Accuracy improved, but inference costs increased.
- Introduced distillation to reduce latency and cost.

## TPM Perspective
Ask:
- Is deep learning required versus classical ML?
- What is training budget and timeline?
- Can inference SLA be met at peak traffic?

## Interview Perspective
Strong answer:
"I use deep learning when representation complexity justifies compute cost, and I plan model compression, batching, and hardware strategy early to meet latency and cost constraints."

## Common Mistakes
- Choosing deep learning by default.
- Ignoring inference cost.
- No plan for model compression.

## 5-Minute Revision
- Use deep learning only when problem complexity requires it.
- Account for training and serving economics.
- Optimize inference path early.

## Practice Interview Questions
1. When is deep learning overkill?
2. How do you control inference cost at scale?
3. What is distillation and why use it?
4. How does model size affect SLA?
5. What risks appear in long training cycles?

## Key Takeaways
- Deep learning is powerful but expensive.
- TPMs must balance capability with production constraints.
- Deployment strategy is as important as model architecture.
