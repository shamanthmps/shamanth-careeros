# Retrieval Augmented Generation (RAG)

## Executive Summary
RAG improves LLM factuality by retrieving relevant external context at query time. In interviews, TPMs should explain RAG as a reliability architecture for enterprise knowledge use cases.

Strong responses focus on retrieval quality, grounding, and evaluation.

## Why This Matters
- TPM relevance: RAG often beats fine-tuning for fast-changing enterprise knowledge.
- Architecture relevance: Pipeline quality depends on ingestion, chunking, embeddings, retrieval, and prompt composition.
- Interview relevance: One of the most common AI system design topics.

## Core Concepts
### Definitions
- Retriever: Finds relevant chunks for query.
- Chunking: Splitting docs into retrievable units.
- Grounding: Forcing model to answer from retrieved context.
- Citation: Traceable source references in answer.

### Internal Working
Query -> Embed query -> Retrieve top-k chunks -> Compose prompt -> LLM answer with sources.

### ASCII Diagram
User Query -> Retriever -> Context Chunks -> LLM -> Cited Response

### Trade-offs
- Larger top-k: better recall, higher latency/token cost.
- Smaller chunks: precision gains, context fragmentation risk.

## Real-world Example
Policy Q&A bot:
- Hallucinations with raw LLM.
- Added RAG over approved internal docs.
- Improved factual accuracy and auditability.

## TPM Perspective
Ask:
- How fresh is indexed content?
- What citation confidence threshold is required?
- How do you handle no-retrieval cases?

## Interview Perspective
Strong answer:
"I use RAG for knowledge-grounded tasks, optimize chunking and retrieval quality, enforce citation-aware prompts, and track answer correctness on a benchmark set."

## Common Mistakes
- Treating RAG as plug-and-play.
- Poor chunking strategy.
- No content freshness pipeline.
- No retrieval quality metrics.

## 5-Minute Revision
- RAG = retrieval + grounded generation.
- Retrieval quality is often the bottleneck.
- Add citation and fallback behavior.

## Practice Interview Questions
1. When should you choose RAG over fine-tuning?
2. How do you tune chunk size and overlap?
3. What metrics evaluate retrieval quality?
4. How do you handle stale knowledge?
5. How do you design no-answer fallback?

## Key Takeaways
- RAG is a system pattern, not just a model trick.
- Reliability depends on retrieval and content governance.
- TPMs should own freshness and quality SLAs.
