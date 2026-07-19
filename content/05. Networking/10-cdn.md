# CDN

## Executive Summary
A CDN (Content Delivery Network) caches and serves content from geographically distributed edge locations to reduce latency and origin load. Interviewers expect TPMs to reason about caching strategy, invalidation, and cost-performance trade-offs.

Strong answers explain which content should be cached and how consistency is managed.

## Why This Matters
- TPM relevance: CDN strategy impacts global user experience and cloud cost.
- Architecture relevance: Edge caching changes traffic patterns and resilience profile.
- Interview relevance: Standard topic in web and media system design.

## Core Concepts
### Definitions
- Edge cache: Content stored near users.
- Cache hit ratio: Percentage served from cache.
- Cache invalidation: Explicitly removing stale content.
- Origin: Source backend for uncached content.

### Internal Working
User request -> edge cache lookup -> hit returns cached content, miss fetches from origin and stores at edge.

### ASCII Diagram
User -> CDN Edge -> (Hit) Response
                -> (Miss) Origin -> Cache -> Response

### Trade-offs
- Aggressive caching lowers latency/cost but risks staleness.
- Frequent invalidation improves freshness but reduces cache efficiency.

## Real-world Example
Global product images:
- Origin overload during campaigns.
- Added CDN with optimized TTL and cache keys.
- Lower latency and reduced origin traffic.

## TPM Perspective
Ask:
- Which assets are static, semi-static, or dynamic?
- What freshness SLA is required?
- How are cache invalidations triggered and audited?

## Interview Perspective
Strong answer:
"I use CDN for edge-deliverable content with cache policy by content class, define invalidation strategy for freshness-sensitive assets, and monitor hit ratio and origin offload as primary metrics."

## Common Mistakes
- Caching sensitive personalized responses.
- No cache key strategy.
- Over-invalidation destroying CDN value.

## 5-Minute Revision
- CDN improves global latency and origin scalability.
- Cache policy and key design are core decisions.
- Freshness and security boundaries must be explicit.

## Practice Interview Questions
1. What content should not be cached at CDN edge?
2. How do cache keys affect correctness?
3. What metrics show CDN effectiveness?
4. How do you handle cache invalidation at scale?
5. How do you secure CDN-served content?

## Key Takeaways
- CDN is a major performance and cost lever.
- Good cache design balances freshness with efficiency.
- TPMs should govern cache policy and invalidation workflows.
