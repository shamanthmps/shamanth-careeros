# OWASP Top 10

## Executive Summary
The OWASP Top 10 is the industry standard awareness list of the most critical web application security risks. In interviews, TPMs should demonstrate working knowledge of the categories most relevant to their domain and explain how controls are operationalized.

Strong answers connect categories to architecture decisions and program controls, not just definitions.

## Why This Matters
- TPM relevance: OWASP categories map to recurring incident types that programs must prevent.
- Architecture relevance: Most categories require architectural controls, not just code fixes.
- Interview relevance: Baseline security knowledge expected at senior levels.

## Core Concepts
### Top Categories (Interview-critical)
- Broken Access Control: unauthorized resource access due to missing enforcement.
- Cryptographic Failures: weak or missing data protection.
- Injection: untrusted input interpreted as commands.
- Insecure Design: security weaknesses baked into architecture.
- Security Misconfiguration: default/insecure config in production.
- Vulnerable Components: outdated or compromised dependencies.
- Authentication Failures: weak login, session, and credential handling.
- Insufficient Logging: missing audit and anomaly detection.

### Internal Working
Threat identified by category -> control selected -> implemented in code/platform -> tested and monitored.

### ASCII Diagram
OWASP Category -> Control Mapping -> Implementation -> Test -> Monitor

### Trade-offs
- Comprehensive controls require more development effort.
- Automated scanning catches known patterns but misses logic flaws.

## Real-world Example
A platform's OWASP assessment found widespread broken access control across microservice internal APIs. A remediation program added service mesh authorization policies and API gateway enforcement.

## TPM Perspective
Ask:
- Which OWASP categories are currently unaddressed in the system?
- Are dependency vulnerabilities tracked and patched on SLA?
- What OWASP testing is included in release gates?

## Interview Perspective
Strong answer:
"I use OWASP as a risk checklist and map each category to architecture and testing controls. For my domain, broken access control, injection, and component vulnerabilities get highest attention because they correspond to the most frequent real-world incidents."

## Common Mistakes
- Treating OWASP as a one-time audit.
- Fixing symptoms rather than root causes.
- No dependency scanning in CI pipeline.

## 5-Minute Revision
- OWASP Top 10 maps the most common vulnerabilities.
- Address architecturally, not just in code.
- Automate scanning and make remediation an SLA.

## Practice Interview Questions
1. What are the top 3 OWASP categories by real-world frequency?
2. How do you prevent injection vulnerabilities?
3. How do you enforce access control across services?
4. What component vulnerability process reduces risk?
5. How do you integrate OWASP testing into CI/CD?

## Key Takeaways
- OWASP Top 10 is a practical interview vocabulary tool.
- Each category requires both prevention and detection.
- TPMs should track OWASP compliance as a program KPI.
