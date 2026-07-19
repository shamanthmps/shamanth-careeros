# Amazon VPC

## Executive Summary
VPC (Virtual Private Cloud) is your private network on AWS. For TPMs, VPC is where security, networking, and resource isolation decisions are made. Understanding VPC is understanding how to isolate workloads, control access, and build secure multi-environment architectures.

## Why This Matters
- TPM relevance: VPC decisions affect security architecture, deployment complexity, and cost.
- Interview relevance: Network and security architecture questions often hinge on VPC.

## Core Concepts
### VPC Components
- CIDR block: IP address range for the VPC (e.g., 10.0.0.0/16).
- Subnets: Segments of the VPC in specific AZs (public or private).
- Route tables: Define how traffic is routed (to internet, to other subnets).
- Internet Gateway: Enables traffic to/from the internet.
- NAT Gateway: Allows private instances to initiate outbound to internet.
- Security groups: Stateful firewall rules (inbound/outbound).
- Network ACLs: Stateless firewall at subnet level.

### Public vs Private Subnets
- Public: Route to internet gateway; instances have public IPs.
- Private: No direct internet route; access via NAT gateway or bastion.

### Internal Working
VPC (10.0.0.0/16) -> Public Subnet (10.0.1.0/24) + Private Subnet (10.0.2.0/24)
-> Internet Gateway (public) -> NAT Gateway (private access out)

### ASCII Diagram
Internet -> Internet Gateway -> Public Subnet -> NAT Gateway -> Private Subnet -> Private Instances

### Trade-offs
- Public subnet simplicity vs private subnet security.
- Simple flat network vs multi-tier for isolation.

## Real-world Example
A database was in a public subnet accidentally exposed to the internet. Moving it to a private subnet behind a NAT gateway eliminated the attack surface with minimal code changes.

## TPM Perspective
Ask:
- Does this resource need internet access?
- What other resources need to access it?
- Are we isolating environments properly (dev, staging, prod)?
- Do we have proper ingress/egress rules (least privilege)?

## Interview Perspective
Strong answer:
"I design VPCs with public subnets for load balancers and bastion hosts, private subnets for application and database tiers. I use security groups for stateful rules (who can talk to whom) and restrict by least privilege."

## Common Mistakes
- Everything in public subnets for "simplicity."
- Overly permissive security groups (0.0.0.0/0 source).
- Not understanding the multi-AZ implications of subnets.

## 5-Minute Revision
- VPC: your private network on AWS.
- Public subnets route to the internet; private do not.
- Security groups are stateful firewalls; NACLs are stateless.
- Least privilege: only open ports and sources that are necessary.

## Practice Interview Questions
1. How would you design a multi-tier VPC architecture?
2. What is the difference between security groups and NACLs?
3. When would you use a NAT gateway?
4. How do you isolate dev, staging, and production networks?
5. What are the security implications of public vs private subnets?

## Key Takeaways
- VPC is where network and security architecture happen.
- Public/private subnet separation is fundamental to security.
- Security groups and least privilege prevent most network attacks.
