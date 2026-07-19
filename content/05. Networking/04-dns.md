# DNS

## Executive Summary
DNS translates human-readable domain names into IP addresses and is a critical dependency for service discovery and user access. In interviews, TPMs should demonstrate operational understanding of DNS behavior, caching, and failure modes.

Strong answers explain how DNS design affects reliability, failover, and latency.

## Why This Matters
- TPM relevance: DNS outages can look like full platform outages.
- Architecture relevance: Traffic routing, failover, and multi-region strategies depend on DNS.
- Interview relevance: Common foundational networking topic.

## Core Concepts
### Definitions
- DNS resolver: Client-side component querying DNS records.
- Authoritative DNS: Source of truth for domain records.
- TTL: Cache duration for DNS response.
- A/AAAA/CNAME records: Common DNS mapping types.

### Internal Working
Client resolver checks cache -> recursive resolver -> authoritative server -> response cached by TTL.

### ASCII Diagram
Client -> Recursive Resolver -> Authoritative DNS -> IP

### Trade-offs
- Longer TTL: lower query load, slower failover.
- Shorter TTL: faster failover, higher DNS traffic and variability.

## Real-world Example
Regional failover:
- Long TTL delayed switch to healthy region during incident.
- Reduced TTL for critical endpoints and added health-aware routing.
- Improved recovery speed.

## TPM Perspective
Ask:
- What TTL policy is used for critical services?
- How quickly can we redirect traffic during incidents?
- Are DNS changes audited and rollback-ready?

## Interview Perspective
Strong answer:
"I treat DNS as reliability infrastructure. TTL, record strategy, and health-aware routing must align with failover objectives and operational controls."

## Common Mistakes
- Ignoring DNS cache propagation delays.
- No DNS failover drills.
- Treating DNS as static config instead of runtime dependency.

## 5-Minute Revision
- DNS is a critical path dependency.
- TTL is a key failover lever.
- Include DNS in incident drills and observability.

## Practice Interview Questions
1. How does TTL affect failover behavior?
2. What DNS records are common for services?
3. How do you design DNS for multi-region resilience?
4. What are common DNS outage causes?
5. How should DNS changes be governed?

## Key Takeaways
- DNS reliability is platform reliability.
- TTL strategy should match recovery objectives.
- TPMs should include DNS in architecture risk reviews.
