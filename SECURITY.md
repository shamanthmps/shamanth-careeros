# Security Policy

## Supported Versions

CareerOS is pre-1.0. Security fixes are handled on the default branch until the first stable release.

## Reporting a Vulnerability

Please do not open public issues for vulnerabilities.

Report security concerns privately through GitHub security advisories if enabled, or contact the maintainers directly through the repository owner profile.

Include:

- A clear description of the issue
- Steps to reproduce
- Impact assessment
- Any suggested fix, if known

## Security Expectations

CareerOS is local-first. The MVP should not transmit personal career data unless a future feature explicitly asks the user to enable sync or export.

Contributions should:

- Avoid direct persistence access from UI components
- Validate imported or parsed content
- Avoid executing user-provided content
- Use safe external links with `rel="noopener noreferrer"`
- Avoid adding analytics, trackers, or network calls without explicit discussion
