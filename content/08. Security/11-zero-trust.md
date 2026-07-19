# Zero Trust

## Executive Summary
Zero Trust is a security model based on "never trust, always verify" — every request must be authenticated and authorized regardless of network location. In interviews, TPMs should explain Zero Trust as an architecture philosophy that replaces implicit perimeter trust.

Strong answers include identity-centric access, micro-segmentation, and continuous verification.

## Why This Matters
- TPM relevance: Zero Trust programs are major cross-functional initiatives requiring platform, IAM, and network coordination.
- Architecture relevance: Service-to-service trust becomes explicit rather than assumed.
- Interview relevance: Common enterprise security architecture topic.

## Core Concepts
### Definitions
- Zero Trust: No implicit trust based on network location.
- Micro-segmentation: Granular network isolation between services.
- Continuous verification: Re-validating identity and context on each request.
- Device posture: Health check of device before granting access.

### Internal Working
Request arrives -> identity verified -> device/context checked -> minimal access granted -> action logged continuously.

### ASCII Diagram
Request -> Identity + Context Verification -> Policy Decision -> Minimal Access

### Trade-offs
- Stronger security vs higher implementation and operational complexity.
- Continuous verification overhead vs stronger assurance.

## Real-world Example
A cloud-native platform replaced IP-based trust between microservices with mTLS and service identity certificates, eliminating lateral movement risk after compromised pod incidents.

## TPM Perspective
Ask:
- Where does implicit network-based trust still exist?
- What is the roadmap for mTLS adoption in internal services?
- How are device posture checks enforced for sensitive access?

## Interview Perspective
Strong answer:
"I adopt Zero Trust by making all trust explicit through identity verification, enforcing least privilege on every service interaction, adding micro-segmentation to limit blast radius, and logging all access continuously."

## Common Mistakes
- Treating Zero Trust as a single product purchase.
- Ignoring service-to-service authentication.
- No incremental adoption plan.

## 5-Minute Revision
- Zero Trust = verify everything, trust nothing implicitly.
- Identity is the new perimeter.
- Implement incrementally by risk priority.

## Practice Interview Questions
1. How does Zero Trust differ from traditional perimeter security?
2. How do you implement service-to-service Zero Trust?
3. What is the highest risk area to target first?
4. How do you phase Zero Trust adoption?
5. What metrics show Zero Trust progress?

## Key Takeaways
- Zero Trust is an architecture model, not a product.
- Identity and explicit verification replace network position trust.
- TPMs should lead phased adoption with measurable milestones.
