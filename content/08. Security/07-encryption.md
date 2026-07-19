# Encryption

## Executive Summary
Encryption protects data confidentiality and integrity both in transit and at rest. In interviews, TPMs should explain encryption requirements by data sensitivity, key management discipline, and common failure modes.

Strong answers go beyond "we use HTTPS" to cover key lifecycle, algorithm choices, and operational controls.

## Why This Matters
- TPM relevance: Encryption gaps are a primary cause of compliance failures and breach severity.
- Architecture relevance: Encryption strategy affects performance, key rotation complexity, and auditing.
- Interview relevance: Standard topic in security and data architecture rounds.

## Core Concepts
### Definitions
- Encryption in transit: Protecting data as it moves across networks (TLS).
- Encryption at rest: Protecting stored data.
- Symmetric encryption: Same key encrypts and decrypts.
- Asymmetric encryption: Key pair — public encrypts, private decrypts.
- Key Management Service (KMS): Managed secure key storage and rotation.

### Internal Working
Data classified -> encryption standard defined -> KMS manages keys -> application encrypts/decrypts via API.

### ASCII Diagram
Data -> Encryption (KMS-managed key) -> Encrypted Store
Network Traffic -> TLS -> Secure Channel

### Trade-offs
- Strong encryption improves security at cost of performance and complexity.
- Field-level encryption adds precision but increases application complexity.

## Real-world Example
A payment platform moved all PII to field-level encryption with KMS-managed keys and automated rotation, reducing breach impact scope and meeting PCI DSS controls.

## TPM Perspective
Ask:
- Which data classifications require encryption at rest?
- What is key rotation policy and how is it tested?
- Are TLS standards enforced consistently across services?

## Interview Perspective
Strong answer:
"I enforce encryption in transit by default via TLS and at rest for all sensitive data classifications. I use KMS for key management, define rotation policy, and audit key access to prevent unauthorized exposure."

## Common Mistakes
- Encrypting everything with the same key.
- No key rotation plan.
- Hardcoded encryption keys in source code.

## 5-Minute Revision
- Encrypt sensitive data in transit and at rest.
- KMS handles key storage and rotation.
- Field-level encryption for highest sensitivity data.

## Practice Interview Questions
1. How do you choose encryption for data at rest vs in transit?
2. What is key rotation and why does it matter?
3. How do you prevent key exposure in application code?
4. When is field-level encryption justified?
5. How do you audit encryption compliance?

## Key Takeaways
- Encryption is a compliance baseline and breach risk reducer.
- Key management discipline is as important as algorithm choice.
- TPMs should govern encryption standards and rotation cadence.
