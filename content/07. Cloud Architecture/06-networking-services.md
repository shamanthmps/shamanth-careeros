# Networking Services

## Executive Summary
Cloud networking services provide secure connectivity, routing, segmentation, and traffic control across cloud workloads. Interviewers expect TPMs to understand how network architecture impacts availability, latency, and security.

Strong answers include network boundaries, traffic patterns, and failure isolation.

## Why This Matters
- TPM relevance: Network design errors can cause widespread outages or security exposure.
- Architecture relevance: Service communication and data paths rely on network topology.
- Interview relevance: Frequent deep-dive in cloud system design.

## Core Concepts
### Definitions
- VPC/VNet: Logical isolated network in cloud.
- Subnet: Segmented IP range within a VPC.
- Security group/NACL: Traffic filtering controls.
- NAT gateway: Outbound internet access for private workloads.

### Internal Working
Traffic flows from edge through routing controls to private/public subnets and services.

### ASCII Diagram
Internet -> Edge LB -> Public Subnet -> App -> Private Subnet -> DB

### Trade-offs
- Strict segmentation improves security but increases complexity.
- Flat networking simplifies setup but raises blast radius.

## Real-world Example
A multi-service platform moved databases to private subnets with controlled egress via NAT, reducing direct attack surface.

## TPM Perspective
Ask:
- Which assets must remain private-only?
- What east-west traffic controls are enforced?
- How is network policy drift detected?

## Interview Perspective
Strong answer:
"I design cloud networking with clear trust boundaries, segmented subnets, least-privilege traffic controls, and resilient routing for critical paths."

## Common Mistakes
- Exposing internal services publicly.
- Broad allow-all network rules.
- No network policy observability.

## 5-Minute Revision
- Network segmentation is a security and reliability control.
- Route and firewall policy must be explicit.
- Private data services should avoid public exposure.

## Practice Interview Questions
1. How do you segment cloud networks for security?
2. What role does NAT play in architecture?
3. How do you design for network blast-radius reduction?
4. What network metrics should be monitored?
5. How do you validate network policy changes safely?

## Key Takeaways
- Cloud networking is foundational architecture, not plumbing.
- Segmentation and least privilege are essential.
- TPMs should enforce network governance and review gates.
