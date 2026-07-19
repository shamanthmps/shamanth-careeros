# Secrets Management

## Executive Summary
Secrets management is the secure storage, rotation, and access control of credentials, API keys, certificates, and other sensitive configuration values. In interviews, this topic tests whether you can prevent one of the most common and damaging security failures.

Strong answers cover lifecycle, rotation, audit, and developer experience trade-offs.

## Why This Matters
- TPM relevance: Leaked secrets are among the most frequent enterprise breach entry points.
- Architecture relevance: Applications must access secrets securely without hardcoding.
- Interview relevance: Common practical security question.

## Core Concepts
### Definitions
- Secret: Sensitive value — API key, DB password, certificate, token.
- Secret sprawl: Secrets scattered across repos, configs, and logs.
- Rotation: Replacing a secret with a new value on a cadence.
- Dynamic secrets: Short-lived secrets generated per-request.

### Internal Working
Application requests secret from vault -> vault authenticates app identity -> returns short-lived credential -> app uses and discards.

### ASCII Diagram
App -> Vault (identity-verified) -> Short-lived Secret -> Dependency

### Trade-offs
- Centralized vault improves control but creates critical dependency.
- Dynamic secrets improve security but add integration complexity.

## Real-world Example
A platform found database credentials hardcoded in source code through a routine audit. Remediation involved migrating all secrets to a vault with automated rotation and blocking hardcoded secrets in CI pipeline.

## TPM Perspective
Ask:
- Are any secrets stored in source code, logs, or environment variables unsecured?
- What is rotation policy and how is it tested?
- Who has access to production secrets, and is it audited?

## Interview Perspective
Strong answer:
"I enforce secrets management through a centralized vault with application-identity-based access, short-lived credentials, automated rotation, and CI-level secret scanning to prevent hardcoded values from reaching repositories."

## Common Mistakes
- Hardcoded credentials in source code or config files.
- Secrets in CI/CD pipeline logs.
- No rotation policy or stale credentials.

## 5-Minute Revision
- No hardcoded secrets — ever.
- Centralized vault + app identity + short-lived credentials.
- Rotate on schedule and detect leaks via scanning.

## Practice Interview Questions
1. How do you detect hardcoded secrets in code?
2. What is a secrets vault and how does it integrate?
3. How do you design credential rotation without downtime?
4. What access controls should secrets vaults enforce?
5. How do you handle secrets in CI/CD pipelines?

## Key Takeaways
- Secrets sprawl is a major and preventable risk.
- Vault-based short-lived credentials are the current best practice.
- TPMs should treat secrets management as a mandatory program control.
