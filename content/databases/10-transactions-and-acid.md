
## 1. Executive Summary
Transactions define how systems preserve correctness under concurrent operations and failures. ACID properties provide a framework for reasoning about this correctness: atomicity, consistency, isolation, and durability.

In TPM interviews, this topic is used to test risk judgment. You are expected to know which workflows need strict guarantees, where eventual models are acceptable, and how to communicate business impact when guarantees are weakened.

Strong answers connect ACID choices to user trust, financial exposure, and operational recovery behavior.

## 2. Why This Matters
### TPM relevance
- Transaction design determines defect severity in payments, inventory, booking, and identity flows.
- Incorrect transaction boundaries cause expensive data repair and customer trust damage.

### Architecture relevance
- ACID guarantees influence service boundaries and workflow orchestration.
- Isolation levels affect concurrency throughput and contention behavior.

### System Design relevance
- Interview scenarios often include concurrent updates and failure conditions.
- Candidates are expected to reason about correctness under scale pressure.

### Common interview questions
- What do ACID properties mean in practical terms?
- How do isolation levels affect performance and anomalies?
- When is eventual consistency acceptable?
- How do you handle distributed transactions across services?

## 3. Core Concepts
### Definitions
- Atomicity: Transaction either fully commits or fully rolls back.
- Consistency: Transaction moves database from one valid state to another.
- Isolation: Concurrent transactions behave as if executed in controlled order.
- Durability: Committed data survives failures.
- Isolation levels: Configurable balance between correctness guarantees and concurrency.

### Internal Working
Transactions typically use write-ahead logs, lock or version control, and commit protocols. Isolation mechanisms prevent anomalies like dirty reads or lost updates, but stronger isolation can reduce concurrency.

Conceptual flow:

Begin Transaction
    |
    v
Read / Validate / Write
    |
    v
Commit (log + persist) OR Rollback

Why this exists:
- Protects business invariants during concurrent access.
- Provides recoverability after failures.
- Avoids partial updates that create inconsistent states.

### ASCII Diagrams
Money transfer:

Tx Start
  |
  +--> Debit Account A
  +--> Credit Account B
  |
Tx Commit (both) OR Rollback (none)

Isolation trade-off:

Higher Isolation ---> Fewer anomalies, lower concurrency
Lower Isolation ----> Higher throughput, more anomaly risk

### Examples
- Payment settlement requiring atomic debit-credit guarantees.
- Ticket booking preventing double allocation of same seat.
- Inventory reservation avoiding oversell during flash sale.
- Subscription change workflows requiring consistent entitlement state.

### Comparisons
Isolation level intuition:

| Isolation Level | Throughput | Anomaly Protection |
|---|---|---|
| Read Uncommitted | High | Low |
| Read Committed | Medium/High | Moderate |
| Repeatable Read | Medium | Higher |
| Serializable | Lower | Highest |

Single-DB vs distributed transaction approach:

| Approach | Benefit | Challenge |
|---|---|---|
| Single database transaction | Simpler strong guarantees | Limited cross-service scope |
| Distributed transaction (2PC etc.) | Cross-service atomicity | Latency, availability, complexity |
| Saga/compensation | Better decoupling | Requires compensating logic and eventual consistency handling |

### Design Trade-offs
Pros of strong ACID posture:
- High data correctness and user trust.
- Lower downstream reconciliation burden.

Cons:
- Higher contention and latency under high concurrency.
- Complexity in distributed architectures.

When to use strict guarantees:
- Financial operations, regulated records, critical inventory/booking states.

When to relax guarantees:
- Non-critical derived views, recommendation state, low-risk asynchronous workflows.

## 4. Real-world Example
Scenario: A global travel platform handles flight seat booking and add-on purchases.

Problem:
- Parallel booking attempts caused occasional oversell incidents.
- Add-on workflows spanned multiple microservices with inconsistent outcomes.

Architecture decision:
- Enforced strict transactional boundaries for seat allocation and payment authorization.
- Shifted ancillary add-ons to saga-based orchestration with compensation.
- Added invariant checks and reconciliation jobs for cross-service eventual states.
- Defined anomaly budgets and incident playbooks with product/legal stakeholders.

Outcome:
- Oversell incidents dropped significantly.
- Core booking correctness improved without stalling feature velocity.
- Teams gained clearer guidance on where strict consistency is mandatory.

## 5. TPM Perspective
Why a TPM should understand this:
- Transaction policy is a business risk policy.
- Correctness failures often cost more than infrastructure spend.

What questions should a TPM ask?
- Which invariants must never be violated?
- What isolation level is required for this user flow?
- Can this step tolerate eventual consistency?
- What compensation logic exists for partial distributed failures?
- How is data repair handled when invariants break?

What trade-offs should a TPM understand?
- Throughput vs correctness guarantees.
- Distributed autonomy vs global transactional simplicity.
- Faster delivery vs long-term reconciliation debt.

What risks should a TPM identify?
- Implicit transaction boundaries across service calls.
- Weak isolation causing subtle concurrency bugs.
- Missing compensating actions for saga failures.

## 6. Interview Perspective
Strong interview answer:

I treat transactions as protection of business invariants. For critical flows like payments and booking allocation, I favor strong ACID guarantees and clear transactional boundaries. For cross-service workflows where strict atomicity is costly, I use saga patterns with explicit compensation and monitoring. The key is defining where eventual consistency is acceptable and proving it with risk controls.

Why this is a good answer:
- Connects technical semantics to business impact.
- Demonstrates practical architecture choices in distributed systems.
- Shows awareness of failure handling and governance.

What interviewers are evaluating:
- Correctness thinking under concurrency.
- Ability to balance guarantees and scale.
- Mature handling of distributed failure modes.

## 7. Common Mistakes
- Memorizing ACID terms without practical application.
- Assuming serializable isolation is always required.
- Ignoring concurrency anomalies in design reviews.
- Treating distributed transactions as default solution.
- Using eventual consistency without user-impact analysis.
- Missing compensating logic in saga workflows.
- No observability on transaction failure rates.
- Failing to define data repair processes.
- Confusing durability with backup/archival.
- Not testing high-concurrency edge cases.

## 8. 5-Minute Revision
### Quick summary
- Transactions protect business-critical invariants.
- ACID guarantees are not all-or-nothing; isolation choices matter.
- Distributed workflows often need compensation, not forced global atomicity.

### Cheat sheet

| Workflow | Consistency Posture |
|---|---|
| Payment ledger update | Strict ACID |
| Seat/inventory allocation | Strict isolation + atomic commit |
| Recommendation updates | Eventual consistency acceptable |
| Notification fan-out | Eventually consistent |

### Decision framework

Identify invariant criticality
   |
   +--> Critical: strong transaction boundaries
   |
   +--> Non-critical: eventual + compensation

### Comparison snapshot

| Approach | Strength | Risk |
|---|---|---|
| Strong ACID everywhere | Correctness | Throughput/latency penalties |
| Eventual everywhere | Scale/flexibility | User trust and reconciliation risk |
| Domain-specific mix | Balanced | Governance complexity |

## 9. Practice Interview Questions
1. How do you explain ACID in business terms?
2. Which isolation level would you choose for checkout and why?
3. When should distributed transactions be avoided?
4. How do sagas differ from ACID transactions?
5. What invariants must remain strict in a ride-booking system?
6. How do you test transaction behavior under high concurrency?
7. What metrics indicate transaction health degradation?
8. How would you explain eventual consistency risks to legal/compliance teams?
9. How do you design compensation for partial failures?
10. What incident response plan is needed for data invariant violations?

## 10. Key Takeaways
- Transactions are business trust mechanisms, not just DB features.
- ACID properties help reason about correctness under failure and concurrency.
- Isolation level is a critical performance-correctness lever.
- Not all workflows need strict global transactions.
- Distributed workflows need explicit compensation strategy.
- Observability and repair plans are mandatory.
- Interviewers seek nuanced consistency trade-off reasoning.
- TPMs should classify invariants by business criticality.
