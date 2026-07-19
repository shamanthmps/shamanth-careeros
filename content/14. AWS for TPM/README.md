# AWS for TPM — Complete Learning Module

## Module Overview
This module equips TPMs with foundational AWS knowledge. You will understand AWS service categories, global infrastructure, compute options (EC2, Lambda, containers), storage and database choices (S3, RDS, DynamoDB), networking and security (VPC, IAM), operations (CloudWatch, CloudFormation), messaging patterns (SQS, SNS, EventBridge), and how to synthesize these into architecture decisions.

## Learning Outcomes
By the end of this module, you will:
- Understand all major AWS service categories and when to use each.
- Design architectures that scale efficiently and cost-effectively.
- Ask smart architecture questions during technical discussions.
- Answer AWS-specific questions in TPM interviews.
- Evaluate trade-offs between managed vs self-managed, serverless vs containers, single-region vs multi-region.

## Time Estimate
- Total module: 10-14 hours (self-paced)
- Per lesson: 40-50 minutes (read, understand core concepts, practice questions)

## Module Structure

### Foundation (Lessons 1-2)
1. [AWS Fundamentals](01-aws-fundamentals.md) — Service categories, shared responsibility, trade-offs between managed and self-managed. (40 min)
2. [AWS Global Infrastructure](02-aws-global-infrastructure.md) — Regions, AZs, edge locations, multi-AZ vs multi-region decisions. (40 min)

### Compute Options (Lessons 3-5, 9, 14)
3. [Amazon EC2](03-amazon-ec2.md) — Virtual machines, instance types, pricing models, auto-scaling. (45 min)
9. [AWS Lambda](09-aws-lambda.md) — Serverless compute, event-driven, cold starts, cost model. (45 min)
14. [ECS, EKS & Fargate](14-ecs-eks-and-fargate.md) — Container orchestration, Kubernetes choice, serverless containers. (50 min)

### Storage & Databases (Lessons 4-7)
4. [Amazon S3](04-amazon-s3.md) — Object storage, storage classes, lifecycle policies, cost optimization. (45 min)
5. [Amazon RDS & Aurora](05-amazon-rds-and-aurora.md) — Managed SQL, scaling with replicas, multi-AZ. (45 min)
6. [Amazon DynamoDB](06-amazon-dynamodb.md) — NoSQL, scaling models, access pattern design, vs RDS. (45 min)

### Networking & Security (Lessons 7-8, 10-11)
7. [Amazon VPC](07-amazon-vpc.md) — Virtual networking, public/private subnets, security groups, least privilege. (45 min)
10. [AWS IAM](10-aws-iam.md) — Identity, roles, policies, least privilege, audit. (45 min)

### Operations & Automation (Lessons 8, 11-12)
8. [Elastic Load Balancer & Auto Scaling](08-elastic-load-balancer-and-auto-scaling.md) — Load distribution, resilience, cost optimization. (45 min)
11. [Amazon CloudWatch & CloudTrail](11-amazon-cloudwatch-and-cloudtrail.md) — Observability, monitoring, logging, compliance audit trails. (45 min)
12. [AWS CloudFormation](12-aws-cloudformation.md) — Infrastructure-as-code, templates, reproducibility. (45 min)

### Messaging & Integration (Lesson 13)
13. [Amazon SQS, SNS & EventBridge](13-amazon-sqs-sns-and-eventbridge.md) — Decoupling, async patterns, event-driven architecture. (45 min)

### Synthesis & Interview (Lesson 15)
15. [AWS Architecture & Interview Case Studies](15-aws-architecture-and-interview-case-studies.md) — Real architecture scenarios, trade-off decisions, interview practice. (50 min)

## Learning Path

### For AWS Beginners
1. Start with Lessons 1-2 (foundation).
2. Then Lessons 3, 4, 5 (compute, storage, database basics).
3. Then Lessons 7, 10 (networking and security).
4. Then Lesson 15 (synthesis).

### For Cloud Practitioners with AWS Experience
1. Review Lesson 1 (foundation) quickly.
2. Focus on Lessons 6, 9, 14 (advanced compute and data patterns).
3. Deep dive on Lessons 8, 11-13 (scaling, operations, messaging).
4. Lesson 15 (practice architecture decisions).

### For Interview Preparation
1. Lessons 1-2 (foundation — required).
2. Lessons 3-7, 10 (core services TPMs discuss).
3. Lesson 15 (interview case studies and practice questions).
4. Revisit weak areas (if containers are unfamiliar, do Lesson 14).

## Key Concepts Across All Lessons

### Service Categories
- Compute (EC2, Lambda, ECS/EKS, Fargate)
- Storage (S3, EBS, EFS)
- Database (RDS, Aurora, DynamoDB)
- Networking (VPC, ALB, Route 53)
- Security (IAM, KMS, VPC)
- Operations (CloudWatch, CloudFormation, CloudTrail)
- Messaging (SQS, SNS, EventBridge)

### Architectural Patterns
- Managed services reduce ops burden but limit flexibility.
- Serverless scales infinitely but has constraints (timeout, execution env).
- Multi-AZ for resilience; multi-region for compliance or SLA.
- Decoupling with messaging enables resilience and independent scaling.
- Observability (CloudWatch) is non-negotiable for production.

### Trade-offs to Master
- On-Demand vs Reserved Instances vs Spot (cost vs flexibility).
- EC2 vs Lambda (control vs simplicity).
- RDS vs DynamoDB (ACID transactions vs unlimited scale).
- Single-AZ vs Multi-AZ vs Multi-region (cost vs resilience/compliance).
- Managed services vs self-managed (simplicity vs flexibility).

## Common Interview Questions by Topic

### Compute
- Design a system to scale from 1K to 10M DAU.
- When would you choose Lambda vs EC2 vs containers?
- How do you handle long-running jobs on AWS?

### Database
- Design a data model for a session store on DynamoDB.
- How would you scale a read-heavy application on RDS?
- When would you migrate from RDS to Aurora?

### Architecture
- Design a multi-region disaster recovery system.
- How would you architect a real-time data pipeline?
- How would you design for 99.99% uptime?

### Operations
- How would you monitor and alert on a production service?
- Design a deployment pipeline using CloudFormation.
- How do you implement least privilege IAM?

## Practice Approach
1. Read each lesson end-to-end.
2. Understand the "TPM Perspective" — what questions to ask.
3. Practice the "Interview Perspective" answers on a friend.
4. Do the practice questions at the end.
5. Use Lesson 15 (case studies) to synthesize multiple services together.

## Verification Checklist
By the end of this module, you should:
- [ ] Explain all major AWS service categories and their roles.
- [ ] Design a 3-tier web architecture (compute, storage, database).
- [ ] Answer "should we use managed or self-managed?" with trade-offs.
- [ ] Explain multi-AZ, multi-region, and their cost/resilience implications.
- [ ] Design IAM policies that follow least privilege.
- [ ] Discuss container orchestration (ECS vs EKS) informed trade-offs.
- [ ] Answer at least 5 of the case study questions in Lesson 15.

## Next Steps After This Module
1. **For interview prep:** Move to "Behavioral Interviews" module to combine technical AWS knowledge with storytelling.
2. **For deeper knowledge:** Study specific services deeply (e.g., deep dive on DynamoDB, Kubernetes patterns).
3. **For hands-on:** Build a small project (to-do app, blog) on AWS using what you learned.

## Files in This Module
- 01-aws-fundamentals.md
- 02-aws-global-infrastructure.md
- 03-amazon-ec2.md
- 04-amazon-s3.md
- 05-amazon-rds-and-aurora.md
- 06-amazon-dynamodb.md
- 07-amazon-vpc.md
- 08-elastic-load-balancer-and-auto-scaling.md
- 09-aws-lambda.md
- 10-aws-iam.md
- 11-amazon-cloudwatch-and-cloudtrail.md
- 12-aws-cloudformation.md
- 13-amazon-sqs-sns-and-eventbridge.md
- 14-ecs-eks-and-fargate.md
- 15-aws-architecture-and-interview-case-studies.md
- README.md (this file)

---

**Start with Lesson 1 and work through at your own pace. Use the practice questions to validate your understanding. Good luck!**
