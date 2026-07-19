# AWS Fundamentals

## Executive Summary
AWS fundamentals are the foundational mental models for understanding how cloud infrastructure works. For TPMs, this is not about becoming a cloud engineer — it is about knowing what is possible, what the cost drivers are, and how to ask smart questions about architecture proposals.

Strong TPM answers reference compute, storage, networking, and database choices with context and trade-offs, not just features.

## Why This Matters
- TPM relevance: Most modern programs run on cloud. Understanding AWS basics prevents naive scope estimates and bad architecture decisions.
- Interview relevance: Senior TPM rounds at cloud-native companies test AWS literacy.

## Core Concepts
### AWS Service Categories
- Compute: EC2, Lambda, ECS, EKS (where code runs).
- Storage: S3, EBS, EFS (where data lives).
- Database: RDS, DynamoDB, Aurora (structured data).
- Networking: VPC, ELB, Route 53 (how services connect).
- Security: IAM, KMS, Secrets Manager (who accesses what).
- Operations: CloudWatch, CloudFormation, CloudTrail (observe and automate).

### Shared Responsibility Model
AWS is responsible for: infrastructure, hypervisors, physical security.
You are responsible for: OS, application code, data, access control.

### Internal Working
Application -> Compute layer -> Storage layer -> Network routing -> Database persistence.

### ASCII Diagram
User -> Load Balancer -> EC2/Lambda -> RDS/DynamoDB -> S3 (backup)
         (Networking)  (Compute)      (Data)          (Archive)

### Trade-offs
- Managed services (RDS, DynamoDB) reduce operational overhead but limit flexibility.
- Self-managed (EC2) offers flexibility but requires operational investment.

## Real-world Example
A team planned to build a custom database layer instead of using RDS. A TPM asked: "What operational value are we gaining vs the infrastructure cost of running it?" Answer: none. They chose RDS and saved 6 months of infrastructure work.

## TPM Perspective
Ask:
- What compute model is most appropriate — serverless (Lambda), containers (ECS/EKS), or VMs (EC2)?
- What is the data model — transactional (RDS) or NoSQL (DynamoDB)?
- Who needs access to what and how do we enforce it (IAM)?

## Interview Perspective
Strong answer:
"I understand AWS as layers: compute, storage, networking, database, security. I know the trade-offs between managed and self-managed services, and I ask about them when sizing programs rather than defaulting to the most flexible option."

## Common Mistakes
- Not distinguishing between AWS services and AWS features.
- Assuming "cloud native" automatically means serverless.
- No understanding of the data and access control implications of architecture choices.

## 5-Minute Revision
- AWS = compute + storage + network + database + security layers.
- Managed services reduce ops cost but limit flexibility.
- Shared responsibility model: AWS runs infrastructure, you secure data and access.

## Practice Interview Questions
1. What are the primary AWS service categories?
2. When would you choose managed services vs self-managed?
3. What is the shared responsibility model?
4. How do you think about cost in architecture decisions?
5. What are the top security considerations for AWS workloads?

## Key Takeaways
- AWS fundamentals are a TPM must-know at scale.
- Service categories map to architecture decision points.
- Trade-offs between operational simplicity and flexibility drive many decisions.
