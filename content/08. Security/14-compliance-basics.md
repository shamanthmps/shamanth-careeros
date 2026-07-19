# Compliance Basics

## Executive Summary
Compliance frameworks define legal and regulatory security requirements for handling data and operating systems. In TPM interviews, compliance is evaluated as a risk and program management topic, not a legal memorization exercise.

Strong answers explain which frameworks apply, how they map to technical controls, and how compliance is maintained continuously.

## Why This Matters
- TPM relevance: Non-compliance creates legal liability, customer trust damage, and product market access risk.
- Architecture relevance: Compliance requirements drive encryption, audit, access, and data retention design.
- Interview relevance: Common in enterprise, fintech, healthcare, and government contexts.

## Core Concepts
### Common Frameworks (Interview-relevant)
- SOC 2: Trust service criteria for security, availability, confidentiality.
- PCI DSS: Payment card industry data security standard.
- HIPAA: Health information privacy and security.
- GDPR: EU personal data rights and protection.
- ISO 27001: Information security management standard.

### Internal Working
Compliance scope defined -> controls mapped -> evidence collected continuously -> audited periodically.

### ASCII Diagram
Regulatory Requirement -> Control Mapping -> Technical Implementation -> Evidence Collection -> Audit

### Trade-offs
- Broad compliance scope improves coverage but increases program overhead.
- Continuous evidence collection adds operational cost but improves audit readiness.

## Real-world Example
A SaaS company pursuing SOC 2 Type II mapped each trust service criterion to existing controls, identified gaps, implemented automated evidence collection, and completed audit without a last-minute scramble.

## TPM Perspective
Ask:
- Which compliance frameworks apply to which product areas?
- Are controls continuously monitored or only prepared at audit time?
- What is the gap remediation SLA before next audit?

## Interview Perspective
Strong answer:
"I treat compliance as a continuous operational program: map requirements to controls, automate evidence collection, track gaps with owners and SLAs, and maintain audit readiness year-round rather than scrambling before assessments."

## Common Mistakes
- Treating compliance as a one-time project.
- Manual evidence collection that degrades over time.
- No mapping between regulatory requirements and technical controls.

## 5-Minute Revision
- Know which frameworks are relevant to your domain.
- Map requirements to architecture controls.
- Automate evidence and maintain continuous readiness.

## Practice Interview Questions
1. How do compliance requirements influence architecture?
2. What is the difference between SOC 2 Type I and Type II?
3. How do you maintain compliance between audits?
4. What GDPR requirements affect data architecture?
5. How do you prioritize compliance gaps?

## Key Takeaways
- Compliance is architecture and governance work, not just paperwork.
- Continuous controls are more effective than audit-time sprints.
- TPMs should own the compliance program lifecycle end-to-end.
