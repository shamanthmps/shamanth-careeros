# Embeddings & Vector Databases

## Executive Summary
Embeddings convert text or objects into dense vectors capturing semantic similarity. Vector databases index these vectors for efficient nearest-neighbor retrieval, powering RAG and semantic search.

Interview depth for TPMs: understand retrieval behavior, index update strategy, and latency-cost trade-offs.

## Why This Matters
- TPM relevance: Embedding pipeline quality directly affects AI answer relevance.
- Architecture relevance: Vector indexing, metadata filtering, and freshness are core design concerns.
- Interview relevance: Frequently paired with RAG architecture questions.

## Core Concepts
### Definitions
- Embedding: Numeric vector representation of content/query.
- Similarity search: Retrieve vectors closest to query vector.
- ANN: Approximate nearest neighbor for speed at scale.
- Re-indexing: Recomputing vectors after model/content changes.

### Internal Working
Document -> chunk -> embedding model -> vector index + metadata -> retrieval with filters.

### ASCII Diagram
Content -> Embeddings -> Vector DB
Query -> Embedding -> Similarity Search -> Top-k Chunks

### Trade-offs
- Higher dimensional vectors: potential quality gain, more storage/compute.
- ANN: lower latency, approximate results.

## Real-world Example
Developer docs assistant:
- Introduced metadata filters by product/version.
- Reduced irrelevant retrieval and improved answer quality.

## TPM Perspective
Ask:
- What embedding model version is in production?
- How often is index refreshed?
- What metadata filters are mandatory?

## Interview Perspective
Strong answer:
"I treat embeddings as a versioned data asset. I pair semantic search with metadata filters, define index refresh SLAs, and benchmark retrieval relevance and latency before production rollout."

## Common Mistakes
- Ignoring metadata filtering.
- No strategy for embedding model upgrades.
- Re-indexing without rollback plan.

## 5-Minute Revision
- Embeddings enable semantic retrieval.
- Vector DB quality depends on indexing and filtering.
- Versioning and refresh governance are essential.

## Practice Interview Questions
1. Why use vector DB instead of keyword search alone?
2. What is ANN and why is it used?
3. How do you handle embedding model migration?
4. What freshness strategy should vector indexes have?
5. How do you evaluate retrieval relevance?

## Key Takeaways
- Embeddings are foundational for modern AI retrieval.
- Retrieval quality is both model and data pipeline dependent.
- TPMs should govern index freshness, versioning, and metrics.
