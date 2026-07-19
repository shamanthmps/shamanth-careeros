# CIA Triad

## Executive Summary
The CIA triad — Confidentiality, Integrity, and Availability — is the foundational model for evaluating security controls. In interviews, strong TPM answers use the triad to frame trade-offs and justify architectural decisions.

Each dimension maps to different threat models and control strategies.

## Why This Matters
- TPM relevance: Business risk classification maps directly to triad priorities.
- Architecture relevance: Every design decision affects at least one triad dimension.
- Interview relevance: Foundational framework used across security rounds.

## Core Concepts
### Definitions
- Confidentiality: Only authorized parties access data.
- Integrity: Data is accurate and unmodified by unauthorized parties.
- Availability: Systems and data are accessible when needed.

### Internal Working
Security controls are selected to protect whichever triad dimension is most critical for a given asset or workflow.

### ASCII Diagram
Asset -> Risk Profile -> Triad Priority -> Control Selection

### Trade-offs
- Strong availability can reduce confidentiality if access controls are loosened.
- Strong integrity checks can reduce throughput.

## Real-world Example
A healthcare records system prioritized confidentiality (PHI protection) and integrity (audit trails) over raw availability, leading to strict access controls and read-only audit logging.

## TPM Perspective
Ask:
- Which triad dimension is most critical for this workflow?
- What is the business impact of each dimension being compromised?
- Are controls balanced across all three dimensions?

## Interview Perspective
Strong answer:
"I use the CIA triad to classify risks and select controls by priority. For financial data, integrity and confidentiality dominate. For operational systems, availability and integrity are co-equal. I make those trade-offs explicit in design reviews."

## Common Mistakes
- Treating availability as less important than confidentiality universally.
- Missing integrity controls in write-heavy systems.
- No explicit triad mapping in threat models.

## 5-Minute Revision
- Confidentiality: protect access.
- Integrity: protect accuracy.
- Availability: protect accessibility.
- Trade-offs exist between all three.

## Practice Interview Questions
1. How does the CIA triad guide architecture decisions?
2. When does availability outweigh confidentiality?
3. How do you protect integrity in distributed systems?
4. What controls address each triad dimension?
5. How do you communicate CIA priorities to non-security stakeholders?

## Key Takeaways
- The CIA triad is a decision tool, not just a definition set.
- Explicit trade-off reasoning between dimensions is a senior signal.
- TPMs should apply triad thinking in architecture and risk reviews.
