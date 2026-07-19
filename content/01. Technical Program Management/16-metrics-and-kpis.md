# Executive Summary

Every organization measures something.

The question is whether they are measuring **what actually matters**.

Imagine two engineering organizations.

The first proudly reports:

- 2,000 Jira tickets completed
- 98% sprint completion
- 15 deployments this week
- 120 meetings conducted
- 3,000 code commits

Everything looks impressive.

Yet customers continue reporting bugs, delivery dates slip, engineers are burning out, and executives have little confidence in forecasts.

Now consider another organization.

Instead of measuring activity, it measures outcomes:

- Customer adoption increased by 22%
- Deployment lead time reduced by 40%
- Critical incident rate reduced by 55%
- Forecast accuracy improved to 94%
- Feature cycle time reduced from 45 days to 18 days

The second organization may complete fewer Jira tickets, but it creates significantly more business value.

This illustrates one of the most important lessons for Technical Program Managers:

> **What gets measured influences behavior. What gets rewarded becomes culture.**

Metrics are not just reporting tools—they are management tools.

A well-designed metrics framework aligns engineering, product, operations, and leadership around shared objectives. It enables better decisions, exposes risks earlier, increases accountability, and improves execution predictability.

Poor metrics, on the other hand, encourage teams to optimize the wrong behaviors, hide underlying problems, and create misleading confidence.

At Senior TPM levels, you are expected to interpret metrics.

At Staff and Principal levels, you are expected to **design measurement systems** that improve organizational performance.

This lesson explores how world-class technology companies use metrics and KPIs to build predictable, high-performing engineering organizations.

---

# Learning Objectives

After completing this lesson, you should be able to:

- Explain the purpose of engineering and program metrics.
- Differentiate metrics, KPIs, OKRs, and SLAs.
- Design balanced scorecards for technology programs.
- Select meaningful metrics for different stakeholders.
- Build executive dashboards.
- Avoid common measurement pitfalls.
- Identify leading and lagging indicators.
- Use metrics to improve delivery predictability.
- Answer interview questions related to engineering metrics and KPIs.
- Design measurement frameworks expected of Staff and Principal TPMs.

---

# Why Metrics Matter

Large technology organizations make thousands of decisions every day.

Without objective measurements, those decisions become driven by assumptions, opinions, or the loudest voice in the room.

Metrics replace opinions with evidence.

They answer questions such as:

- Are we making progress?
- Are we improving?
- Are we delivering customer value?
- Are risks increasing?
- Are forecasts accurate?
- Are investments producing results?

Metrics create a common language across engineering, product, finance, operations, and executive leadership.

Most importantly, they allow organizations to detect problems **before** they become failures.

---

# What Is a Metric?

A **metric** is a measurable value that indicates the performance, health, efficiency, or effectiveness of a system, process, team, or program.

Examples include:

- Sprint Velocity
- Deployment Frequency
- Customer Adoption
- MTTR
- Budget Variance
- Lead Time
- Defect Escape Rate

Metrics provide information.

They do not inherently indicate success or failure.

Interpretation requires context.

---

# What Is a KPI?

A **Key Performance Indicator (KPI)** is a metric that is considered critical to achieving a strategic objective.

Every KPI is a metric.

Not every metric is a KPI.

For example:

| Metric | KPI? | Reason |
|---------|:----:|--------|
| Number of Meetings | ❌ | Activity only |
| Sprint Velocity | Sometimes | Depends on objectives |
| Customer Retention | ✅ | Direct business impact |
| Forecast Accuracy | ✅ | Indicates execution predictability |
| Cycle Time | ✅ | Delivery efficiency |
| Story Count | ❌ | Easily manipulated |

KPIs represent the small number of measurements leadership actively manages.

---

# Metrics vs KPIs vs OKRs vs SLAs

These concepts are often confused.

| Concept | Purpose | Example |
|---------|----------|---------|
| Metric | Measures performance | Deployment Frequency |
| KPI | Critical business measurement | Customer Adoption Rate |
| OKR | Defines objectives and measurable results | Reduce lead time by 30% |
| SLA | Contractual service commitment | 99.9% Availability |

Understanding these differences is essential for TPM interviews and executive communication.

---

# Characteristics of Great Metrics

Not every metric is useful.

World-class metrics share several characteristics.

A good metric should be:

- Relevant
- Actionable
- Understandable
- Objective
- Timely
- Consistent
- Difficult to manipulate
- Directly connected to business outcomes

If teams cannot influence a metric, it is unlikely to improve behavior.

Likewise, if leaders cannot make decisions using a metric, it has limited governance value.

---

# The Purpose of Measurement

Measurement exists to answer four fundamental questions:

```text
Where are we now?
        │
        ▼
Where do we want to be?
        │
        ▼
Are we improving?
        │
        ▼
What should we change?
```

Notice that reporting is only a small part of measurement.

The true purpose is to enable **better decisions**.

---

# Outcome Metrics vs Activity Metrics

One of the most common mistakes in engineering organizations is measuring activity instead of outcomes.

| Activity Metric | Outcome Metric |
|-----------------|----------------|
| Stories Completed | Customer Adoption |
| Meetings Conducted | Decision Lead Time |
| Lines of Code | Feature Usage |
| Deployments | Deployment Success Rate |
| Tasks Closed | Customer Satisfaction |
| Bugs Fixed | Production Stability |

High-performing organizations prioritize outcomes because outcomes directly reflect business value.

Activity metrics are useful operational indicators, but they should rarely become executive KPIs.

---

# Leading vs Lagging Indicators

Effective measurement systems combine **leading** and **lagging** indicators.

## Leading Indicators

Leading indicators predict future outcomes.

Examples include:

- Code review completion
- Test automation coverage
- Risk exposure
- Dependency backlog
- Release readiness
- Story readiness

Leading indicators help teams prevent problems before they occur.

## Lagging Indicators

Lagging indicators measure completed outcomes.

Examples include:

- Revenue
- Customer retention
- Production incidents
- SLA compliance
- Customer satisfaction
- Defect escape rate

Lagging indicators confirm whether desired outcomes were achieved.

Great TPMs monitor both.

# North Star Metrics

Every successful product and engineering organization has one measurement that represents the value it creates for customers.

This is called the **North Star Metric (NSM).**

Unlike operational metrics, the North Star Metric aligns every team around a single strategic objective.

Examples include:

| Company | Possible North Star Metric |
|----------|----------------------------|
| Netflix | Hours of content watched |
| Spotify | Listening hours per user |
| Uber | Completed trips |
| Airbnb | Nights booked |
| Amazon | Successful customer orders |
| Google Search | Successful searches |
| Slack | Daily Active Users |
| Microsoft Teams | Daily collaboration sessions |

Notice that these metrics measure **customer value**, not engineering activity.

Engineering teams then derive supporting metrics that contribute to improving the North Star Metric.

---

## North Star Metric Hierarchy

```text
North Star Metric
        │
        ▼
Business KPIs
        │
        ▼
Program KPIs
        │
        ▼
Engineering Metrics
        │
        ▼
Team Metrics
```

For example:

```text
Customer Adoption
        │
        ▼
Release Frequency
        │
        ▼
Deployment Success Rate
        │
        ▼
Build Success Rate
```

Every lower-level metric should ultimately contribute to improving the North Star Metric.

---

# Engineering Metrics

Engineering organizations require visibility into delivery efficiency, quality, reliability, and operational health.

Engineering metrics should help answer questions such as:

- Are we delivering predictably?
- Is software quality improving?
- Are releases becoming safer?
- Is developer productivity increasing?
- Are customers experiencing better reliability?

---

## Common Engineering Metrics

| Category | Example Metrics |
|----------|-----------------|
| Delivery | Cycle Time, Lead Time, Velocity |
| Quality | Defect Density, Escaped Defects |
| Reliability | MTTR, Availability, Incident Count |
| CI/CD | Deployment Frequency, Build Success Rate |
| Code Quality | Test Coverage, Static Analysis Findings |
| Productivity | PR Review Time, Story Completion Rate |

Engineering metrics should improve engineering decisions—not become targets that encourage unhealthy behavior.

---

# DORA Metrics

The DORA (DevOps Research and Assessment) metrics have become the industry standard for measuring software delivery performance.

These four metrics are widely used across Google Cloud, Microsoft, Amazon, Atlassian, and many other engineering organizations.

---

## 1. Deployment Frequency

Measures:

> **How often code is successfully deployed to production.**

Higher deployment frequency generally indicates:

- Smaller releases
- Lower deployment risk
- Faster customer feedback
- Greater engineering agility

---

## 2. Lead Time for Changes

Measures:

> **How long it takes for committed code to reach production.**

Short lead times indicate:

- Efficient engineering processes
- Minimal bottlenecks
- High delivery maturity

---

## 3. Change Failure Rate

Measures:

> **The percentage of deployments that result in failures requiring remediation.**

Examples include:

- Production rollback
- Critical hotfix
- Customer-impacting incident

Lower is better.

---

## 4. Mean Time to Recovery (MTTR)

Measures:

> **How quickly systems recover after production incidents.**

Organizations with low MTTR generally have:

- Better observability
- Automated recovery
- Mature incident management
- Effective operational processes

---

## Why DORA Matters

Together, these metrics provide a balanced view of software delivery.

| Metric | Measures |
|---------|----------|
| Deployment Frequency | Speed |
| Lead Time | Flow Efficiency |
| Change Failure Rate | Quality |
| MTTR | Reliability |

Optimizing only one metric often creates unintended consequences.

For example, increasing deployment frequency without controlling change failure rate may reduce overall system reliability.

The four metrics should always be interpreted together.

---

# Program Metrics

While engineering metrics focus on software delivery, program metrics measure the effectiveness of cross-functional execution.

A TPM typically owns or influences many of these metrics.

---

## Delivery Metrics

| Metric | Why It Matters |
|---------|----------------|
| Milestone Completion | Delivery progress |
| Schedule Variance | Timeline predictability |
| Forecast Accuracy | Planning maturity |
| Scope Stability | Requirement discipline |
| Delivery Confidence | Executive planning |

---

## Dependency Metrics

| Metric | Why It Matters |
|---------|----------------|
| Open Dependencies | Coordination complexity |
| Dependency Resolution Time | Organizational responsiveness |
| Blocked Work Items | Execution bottlenecks |
| External Dependency Risk | Delivery exposure |

---

## Risk Metrics

| Metric | Why It Matters |
|---------|----------------|
| Open Risks | Current exposure |
| High Severity Risks | Executive attention required |
| Risk Closure Rate | Mitigation effectiveness |
| Average Risk Age | Governance maturity |

---

## Governance Metrics

| Metric | Why It Matters |
|---------|----------------|
| Decision Lead Time | Governance efficiency |
| Action Item Completion | Accountability |
| Escalation Resolution Time | Organizational responsiveness |
| Meeting Decision Rate | Governance effectiveness |

These metrics provide visibility into how effectively the program is being managed—not just what engineering teams are building.

---

# Business Metrics

Ultimately, engineering programs exist to create business value.

Business metrics connect technical execution to organizational outcomes.

Common examples include:

| Business Metric | Description |
|-----------------|-------------|
| Revenue Growth | Financial performance |
| Customer Retention | Long-term value |
| Customer Acquisition | Market expansion |
| Feature Adoption | Product success |
| Net Promoter Score (NPS) | Customer loyalty |
| Churn Rate | Customer loss |
| Operational Cost | Financial efficiency |
| Gross Margin | Business profitability |

Executive stakeholders typically prioritize business metrics over engineering activity metrics.

---

# Executive Metrics

Executives require concise metrics that support strategic decision-making.

An effective executive dashboard usually includes fewer than ten KPIs.

Typical executive metrics include:

- Overall Program Health
- Budget Variance
- Forecast Confidence
- Milestone Predictability
- Customer Impact
- Critical Risks
- Resource Health
- Strategic Decisions Pending
- Delivery Confidence

Executives generally prefer trends over raw numbers.

For example:

```text
Forecast Accuracy

Jan  74%
Feb  81%
Mar  88%
Apr  91%
May  94%
```

Trend data enables leaders to understand whether the organization is improving over time.

---

# Balanced Scorecards

One of the biggest mistakes organizations make is optimizing a single metric.

For example:

Increasing deployment frequency may inadvertently increase production incidents.

Reducing costs may reduce product quality.

Accelerating delivery may increase technical debt.

Balanced Scorecards prevent this by measuring multiple dimensions simultaneously.

A typical engineering scorecard might include:

| Dimension | Example KPI |
|-----------|-------------|
| Delivery | Forecast Accuracy |
| Quality | Escaped Defects |
| Reliability | MTTR |
| Customer | Adoption Rate |
| Financial | Budget Variance |
| People | Employee Engagement |

Balanced scorecards encourage healthy optimization rather than local optimization.

# North Star Metrics

Every successful product and engineering organization has one measurement that represents the value it creates for customers.

This is called the **North Star Metric (NSM).**

Unlike operational metrics, the North Star Metric aligns every team around a single strategic objective.

Examples include:

| Company | Possible North Star Metric |
|----------|----------------------------|
| Netflix | Hours of content watched |
| Spotify | Listening hours per user |
| Uber | Completed trips |
| Airbnb | Nights booked |
| Amazon | Successful customer orders |
| Google Search | Successful searches |
| Slack | Daily Active Users |
| Microsoft Teams | Daily collaboration sessions |

Notice that these metrics measure **customer value**, not engineering activity.

Engineering teams then derive supporting metrics that contribute to improving the North Star Metric.

---

## North Star Metric Hierarchy

```text
North Star Metric
        │
        ▼
Business KPIs
        │
        ▼
Program KPIs
        │
        ▼
Engineering Metrics
        │
        ▼
Team Metrics
```

For example:

```text
Customer Adoption
        │
        ▼
Release Frequency
        │
        ▼
Deployment Success Rate
        │
        ▼
Build Success Rate
```

Every lower-level metric should ultimately contribute to improving the North Star Metric.

---

# Engineering Metrics

Engineering organizations require visibility into delivery efficiency, quality, reliability, and operational health.

Engineering metrics should help answer questions such as:

- Are we delivering predictably?
- Is software quality improving?
- Are releases becoming safer?
- Is developer productivity increasing?
- Are customers experiencing better reliability?

---

## Common Engineering Metrics

| Category | Example Metrics |
|----------|-----------------|
| Delivery | Cycle Time, Lead Time, Velocity |
| Quality | Defect Density, Escaped Defects |
| Reliability | MTTR, Availability, Incident Count |
| CI/CD | Deployment Frequency, Build Success Rate |
| Code Quality | Test Coverage, Static Analysis Findings |
| Productivity | PR Review Time, Story Completion Rate |

Engineering metrics should improve engineering decisions—not become targets that encourage unhealthy behavior.

---

# DORA Metrics

The DORA (DevOps Research and Assessment) metrics have become the industry standard for measuring software delivery performance.

These four metrics are widely used across Google Cloud, Microsoft, Amazon, Atlassian, and many other engineering organizations.

---

## 1. Deployment Frequency

Measures:

> **How often code is successfully deployed to production.**

Higher deployment frequency generally indicates:

- Smaller releases
- Lower deployment risk
- Faster customer feedback
- Greater engineering agility

---

## 2. Lead Time for Changes

Measures:

> **How long it takes for committed code to reach production.**

Short lead times indicate:

- Efficient engineering processes
- Minimal bottlenecks
- High delivery maturity

---

## 3. Change Failure Rate

Measures:

> **The percentage of deployments that result in failures requiring remediation.**

Examples include:

- Production rollback
- Critical hotfix
- Customer-impacting incident

Lower is better.

---

## 4. Mean Time to Recovery (MTTR)

Measures:

> **How quickly systems recover after production incidents.**

Organizations with low MTTR generally have:

- Better observability
- Automated recovery
- Mature incident management
- Effective operational processes

---

## Why DORA Matters

Together, these metrics provide a balanced view of software delivery.

| Metric | Measures |
|---------|----------|
| Deployment Frequency | Speed |
| Lead Time | Flow Efficiency |
| Change Failure Rate | Quality |
| MTTR | Reliability |

Optimizing only one metric often creates unintended consequences.

For example, increasing deployment frequency without controlling change failure rate may reduce overall system reliability.

The four metrics should always be interpreted together.

---

# Program Metrics

While engineering metrics focus on software delivery, program metrics measure the effectiveness of cross-functional execution.

A TPM typically owns or influences many of these metrics.

---

## Delivery Metrics

| Metric | Why It Matters |
|---------|----------------|
| Milestone Completion | Delivery progress |
| Schedule Variance | Timeline predictability |
| Forecast Accuracy | Planning maturity |
| Scope Stability | Requirement discipline |
| Delivery Confidence | Executive planning |

---

## Dependency Metrics

| Metric | Why It Matters |
|---------|----------------|
| Open Dependencies | Coordination complexity |
| Dependency Resolution Time | Organizational responsiveness |
| Blocked Work Items | Execution bottlenecks |
| External Dependency Risk | Delivery exposure |

---

## Risk Metrics

| Metric | Why It Matters |
|---------|----------------|
| Open Risks | Current exposure |
| High Severity Risks | Executive attention required |
| Risk Closure Rate | Mitigation effectiveness |
| Average Risk Age | Governance maturity |

---

## Governance Metrics

| Metric | Why It Matters |
|---------|----------------|
| Decision Lead Time | Governance efficiency |
| Action Item Completion | Accountability |
| Escalation Resolution Time | Organizational responsiveness |
| Meeting Decision Rate | Governance effectiveness |

These metrics provide visibility into how effectively the program is being managed—not just what engineering teams are building.

---

# Business Metrics

Ultimately, engineering programs exist to create business value.

Business metrics connect technical execution to organizational outcomes.

Common examples include:

| Business Metric | Description |
|-----------------|-------------|
| Revenue Growth | Financial performance |
| Customer Retention | Long-term value |
| Customer Acquisition | Market expansion |
| Feature Adoption | Product success |
| Net Promoter Score (NPS) | Customer loyalty |
| Churn Rate | Customer loss |
| Operational Cost | Financial efficiency |
| Gross Margin | Business profitability |

Executive stakeholders typically prioritize business metrics over engineering activity metrics.

---

# Executive Metrics

Executives require concise metrics that support strategic decision-making.

An effective executive dashboard usually includes fewer than ten KPIs.

Typical executive metrics include:

- Overall Program Health
- Budget Variance
- Forecast Confidence
- Milestone Predictability
- Customer Impact
- Critical Risks
- Resource Health
- Strategic Decisions Pending
- Delivery Confidence

Executives generally prefer trends over raw numbers.

For example:

```text
Forecast Accuracy

Jan  74%
Feb  81%
Mar  88%
Apr  91%
May  94%
```

Trend data enables leaders to understand whether the organization is improving over time.

---

# Balanced Scorecards

One of the biggest mistakes organizations make is optimizing a single metric.

For example:

Increasing deployment frequency may inadvertently increase production incidents.

Reducing costs may reduce product quality.

Accelerating delivery may increase technical debt.

Balanced Scorecards prevent this by measuring multiple dimensions simultaneously.

A typical engineering scorecard might include:

| Dimension | Example KPI |
|-----------|-------------|
| Delivery | Forecast Accuracy |
| Quality | Escaped Defects |
| Reliability | MTTR |
| Customer | Adoption Rate |
| Financial | Budget Variance |
| People | Employee Engagement |

Balanced scorecards encourage healthy optimization rather than local optimization.

# Dashboard Design Principles

A dashboard is not a collection of charts.

It is a decision-support system.

One of the biggest mistakes TPMs make is creating dashboards that answer every possible question instead of the questions stakeholders actually need answered.

A well-designed dashboard should allow a stakeholder to answer three questions within 30 seconds:

1. **Are we on track?**
2. **What has changed since the last review?**
3. **What decisions or actions are required?**

If a dashboard cannot answer these questions, it is probably displaying too much data and not enough insight.

---

## Characteristics of Great Dashboards

Great dashboards are:

| Characteristic | Description |
|---------------|-------------|
| Simple | Easy to understand within seconds |
| Actionable | Leads to decisions |
| Consistent | Same format every review |
| Visual | Trends highlighted immediately |
| Current | Reflects latest available data |
| Balanced | Covers delivery, quality, business, and risk |

A dashboard should never require a presenter to explain what every chart means.

The visualization itself should communicate the story.

---

## Dashboard Design Rules

Follow these principles when designing executive dashboards:

- Show trends, not just snapshots.
- Highlight exceptions instead of normal operations.
- Use a consistent reporting cadence.
- Include both leading and lagging indicators.
- Limit executive dashboards to 8–12 KPIs.
- Clearly indicate ownership for every metric.
- Use colors only to communicate status—not decoration.

Remember:

> **Dashboards should reduce cognitive load, not increase it.**

---

# Metrics Hierarchy

Not every stakeholder requires the same level of detail.

Metrics should cascade from strategic business outcomes down to engineering execution.

```text
Business Outcomes
        │
        ▼
Executive KPIs
        │
        ▼
Program Metrics
        │
        ▼
Engineering Metrics
        │
        ▼
Team Metrics
```

For example:

```text
Increase Customer Adoption
        │
        ▼
Feature Adoption Rate
        │
        ▼
Release Predictability
        │
        ▼
Sprint Completion
        │
        ▼
Story Readiness
```

This hierarchy ensures every engineering metric ultimately supports a business objective.

---

# Goodhart's Law

One of the most important concepts every TPM should understand is **Goodhart's Law**.

> **"When a measure becomes a target, it ceases to be a good measure."**

Once people are rewarded for improving a metric, they naturally begin optimizing the metric rather than the underlying outcome.

Examples include:

- Closing low-value Jira tickets to improve throughput.
- Inflating story points to increase velocity.
- Avoiding difficult work to maintain sprint predictability.
- Delaying deployments to reduce change failure rate.
- Reclassifying production bugs to improve quality metrics.

The metric improves.

The business does not.

Great TPMs recognize when metrics are being gamed and redesign measurement systems accordingly.

---

# Metric Anti-Patterns

Poor measurement systems often create unintended consequences.

---

## Anti-Pattern 1 — Measuring Activity Instead of Outcomes

Examples:

- Number of meetings
- Lines of code
- Stories completed
- Hours worked

These metrics measure effort rather than value.

Better alternatives include:

- Customer adoption
- Deployment success rate
- Lead time
- Forecast accuracy

---

## Anti-Pattern 2 — Too Many Metrics

Some dashboards contain 60–100 metrics.

The result:

- Information overload
- Decision paralysis
- Conflicting priorities

If everything is important, nothing is important.

Focus on the vital few.

---

## Anti-Pattern 3 — Measuring Individuals

Metrics should improve systems—not punish people.

Examples to avoid:

- Developer ranking by commits
- Individual bug counts
- Individual velocity

These often encourage unhealthy competition and discourage collaboration.

Measure teams and systems whenever possible.

---

## Anti-Pattern 4 — Ignoring Trends

A single data point rarely tells the whole story.

Example:

```text
Sprint Predictability

Sprint 1  72%
Sprint 2  79%
Sprint 3  84%
Sprint 4  89%
Sprint 5  91%
```

Although Sprint 1 appears weak, the trend demonstrates continuous improvement.

Trend analysis is significantly more valuable than isolated measurements.

---

## Anti-Pattern 5 — Vanity Metrics

Vanity metrics create the appearance of progress without demonstrating real business impact.

Examples include:

- Registered users
- App downloads
- Number of repositories
- Code commits

Better alternatives include:

- Monthly active users
- Customer retention
- Revenue per customer
- Feature adoption
- Conversion rate

Always ask:

> **"If this metric improves, will the business actually improve?"**

If the answer is no, reconsider the metric.

---

# Building an Executive Dashboard

An executive dashboard should communicate the overall health of a program at a glance.

A typical structure includes:

```text
──────────────────────────────────────────────
Executive Program Dashboard
──────────────────────────────────────────────

Overall Health          🟢 Green

Milestones
Completed               22 / 24

Forecast Accuracy       93%

Budget Variance         +1.8%

Critical Risks          2

Blocked Dependencies    1

Customer Impact         None

Executive Decisions     3 Pending

Next Major Milestone    Sept 15
──────────────────────────────────────────────
```

Notice what is intentionally absent:

- Sprint burndown charts
- Jira ticket counts
- Story points
- Engineering task lists

Those belong in operational dashboards, not executive dashboards.

Executives care about business outcomes, confidence, and decisions.

---

# Enterprise Case Study

## Scenario

A global payments organization is delivering a platform modernization program involving:

- 25 engineering teams
- 450 engineers
- Multiple payment platforms
- Regulatory compliance requirements
- 12-month roadmap

Leadership receives over 40 reports every month.

Unfortunately:

- Reports contradict one another.
- Delivery confidence is low.
- Risks are identified too late.
- Executive meetings focus on status rather than decisions.

---

## TPM Initiative

The Staff TPM redesigns the measurement framework.

Instead of 40 independent reports, the TPM introduces:

### Engineering Metrics

- Deployment Frequency
- Lead Time
- Change Failure Rate
- MTTR

### Program Metrics

- Milestone Predictability
- Forecast Accuracy
- Dependency Resolution Time
- Risk Closure Rate

### Business Metrics

- Customer Adoption
- Transaction Success Rate
- Revenue Impact

### Executive Dashboard

A single dashboard summarizing:

- Program Health
- Budget
- Major Risks
- Key Decisions
- Delivery Confidence
- Business Outcomes

---

## Results

Within two quarters:

- Executive reporting reduced by **60%**
- Forecast accuracy improved from **76% to 95%**
- Delivery predictability improved significantly
- Critical risk detection occurred weeks earlier
- Executive decision-making became substantially faster

The greatest improvement was not technical.

It was organizational.

The new metrics enabled better conversations and better decisions.

---

# Interview Perspective

Metrics and KPIs are among the most frequently discussed topics in Senior TPM interviews.

Interviewers are rarely interested in memorized metric definitions.

Instead, they want to evaluate your ability to design a measurement system that drives organizational performance.

---

## Common Interview Questions

### Q1. What metrics would you use to measure a large engineering program?

A strong answer includes multiple dimensions:

- Delivery
- Quality
- Reliability
- Customer
- Financial
- Operational
- Organizational

Interviewers expect a balanced measurement framework—not a single KPI.

---

### Q2. How do you know whether your program is healthy?

Strong answers discuss:

- Leading indicators
- Lagging indicators
- Trend analysis
- Risk metrics
- Forecast confidence
- Customer outcomes

---

### Q3. Tell me about a metric you introduced that improved execution.

A compelling STAR response should explain:

- The problem with existing measurements.
- The new metric introduced.
- How stakeholders adopted it.
- Measurable business impact.

---

## Seniority Expectations

| Level | Expected Measurement Capability |
|--------|---------------------------------|
| Senior TPM | Tracks and reports meaningful metrics. |
| Staff TPM | Designs measurement systems for large programs. |
| Principal TPM | Standardizes organizational metrics across multiple programs. |
| Director / VP | Uses metrics to shape organizational strategy and investment decisions. |

As you progress in seniority, the expectation shifts from **interpreting dashboards** to **designing the measurement systems behind them.**

---

# Key Takeaways

- Metrics provide objective evidence for decision-making.
- KPIs are the small set of metrics that matter most to strategic success.
- Effective TPMs balance engineering, program, business, and customer metrics.
- Leading indicators help prevent problems; lagging indicators validate outcomes.
- Good dashboards simplify decision-making rather than overwhelm stakeholders.
- Beware of Goodhart's Law—metrics should improve outcomes, not encourage gaming.
- The most valuable measurement systems connect day-to-day engineering work to business impact.

---

# Further Reading

### Books

- *Accelerate* — Nicole Forsgren, Jez Humble, Gene Kim
- *Measure What Matters* — John Doerr
- *The DevOps Handbook* — Gene Kim, Jez Humble, Patrick Debois, John Willis
- *Lean Analytics* — Alistair Croll & Benjamin Yoskovitz
- *The Phoenix Project* — Gene Kim, Kevin Behr & George Spafford

### Frameworks & Resources

- DORA Research Program
- Google Engineering Productivity Research
- SPACE Framework for Developer Productivity
- Balanced Scorecard (Kaplan & Norton)
- PMI Standard for Program Management

---

## Final Thoughts

Metrics do not improve organizations.

**Better decisions improve organizations.**

Metrics are valuable only because they enable those decisions.

The most effective Technical Program Managers understand that measurement is not about producing reports—it is about creating clarity, building trust, exposing risks early, and helping leaders make informed trade-offs.

The ultimate goal is not to have more metrics.

It is to have the **right metrics** that consistently drive better execution and better business outcomes.