# REST vs gRPC vs GraphQL

## Executive Summary
REST, gRPC, and GraphQL are API interaction styles with distinct trade-offs in performance, flexibility, and operational complexity. Senior interview answers should be workload-driven and consumer-aware.

TPMs should focus on compatibility, developer experience, governance, and long-term maintenance.

## Why This Matters
- TPM relevance: API strategy affects cross-team integration speed and platform consistency.
- Architecture relevance: Protocol choice impacts latency, schema governance, and versioning.
- Interview relevance: Frequent question in service design rounds.

## Core Concepts
### Definitions
- REST: Resource-based HTTP API style.
- gRPC: RPC framework over HTTP/2 with protobuf contracts.
- GraphQL: Query language allowing clients to specify required fields.

### Internal Working
REST: multiple resource endpoints.
gRPC: strongly typed service methods and efficient binary payloads.
GraphQL: single endpoint with schema-resolved field graph.

### ASCII Comparison
Client -> REST endpoints (resource oriented)
Client -> gRPC service methods (contract oriented)
Client -> GraphQL endpoint (query shaped)

### Trade-offs
- REST: simple ecosystem, potential over/under-fetch.
- gRPC: performance and typing, browser/public API complexity.
- GraphQL: flexible client queries, resolver/caching complexity.

## Real-world Example
Mobile app backend:
- REST caused multiple round trips and overfetching.
- Added GraphQL BFF layer for mobile composition.
- Reduced payload and improved app responsiveness.

## TPM Perspective
Ask:
- Who are API consumers: internal services, public clients, mobile apps?
- Is schema governance mature enough for GraphQL/gRPC?
- What observability and rate limiting controls are needed?

## Interview Perspective
Strong answer:
"I choose API style by consumer needs: REST for broad interoperability, gRPC for high-performance internal service calls, GraphQL for client-driven aggregation where query flexibility outweighs added resolver complexity."

## Common Mistakes
- Choosing one style as universal standard.
- Ignoring tooling/governance readiness.
- No plan for schema evolution and versioning.

## 5-Minute Revision
- REST for compatibility.
- gRPC for internal low-latency typed communication.
- GraphQL for flexible client data fetching.

## Practice Interview Questions
1. When should gRPC replace REST internally?
2. What are GraphQL operational risks?
3. How do you avoid overfetching/underfetching?
4. How do you version APIs in each style?
5. Can multiple API styles coexist cleanly?

## Key Takeaways
- API style must match workload and consumers.
- Governance and tooling maturity are decision factors.
- TPMs should drive consistent standards, not rigid dogma.
