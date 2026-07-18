# CareerOS Content Style Guide

Version: 1.0

---

# Purpose

CareerOS is an open-source, production-quality learning platform for Technical Program Managers.

Every lesson should read like a professionally published technical book.

The repository should eventually become one of the best free TPM learning resources available.

---

# Audience

Content is written for:

- Aspiring TPMs
- Senior TPMs
- Staff TPMs
- Principal TPMs
- Engineering Managers
- Program Managers
- Candidates preparing for MAANG+ interviews

Interview preparation is a primary goal.

---

# Writing Philosophy

Every lesson should explain:

- What
- Why
- How
- Best Practices
- Real-world application
- Interview relevance

Readers should finish each lesson feeling capable of applying the concept immediately.

---

# Writing Style

Write as a Senior Principal TPM.

Tone should be:

- Professional
- Educational
- Technical
- Practical
- Executive-friendly
- Clear
- Concise

Avoid:

- Fluff
- Marketing language
- AI-style introductions
- Repetition
- Motivational writing
- Emojis

Never write conversational filler.

Every paragraph should provide value.

---

# Markdown Standards

Generate GitHub-compatible Markdown only.

Never generate:

- HTML
- Inline styling
- Markdown code fences around the entire lesson

Allowed formatting:

- Headings
- Tables
- Lists
- Quotes
- ASCII diagrams
- Standard code blocks (only for examples or diagrams)

---

# File Naming Convention

Every lesson is its own markdown file.

Example:

01-what-is-a-technical-program-manager.md

02-tpm-vs-pm-vs-em.md

03-types-of-technical-program-managers.md

...

Use lowercase.

Use hyphens.

---

# Lesson Generation Workflow

## New Lesson

Always begin by providing:

Filename

Example:

08-roadmapping.md

Then provide YAML front matter.

Do not generate lesson content before the YAML.

---

## Existing Lesson

Continue exactly where the previous response ended.

Never regenerate previous sections.

---

## Lesson Completion

When a lesson is complete:

STOP.

Output only:

✅ Lesson completed.

Next file to create:

09-dependency-management.md

Wait for the next prompt.

Never automatically begin another lesson.

---

# Lesson Structure

Every lesson should follow this framework.

# Executive Summary

# Learning Objectives

# Why <Topic> Matters

# What Is <Topic>?

# Core Concepts

# Types / Components / Framework

# Process / Workflow / Lifecycle

# Best Practices

# Common Mistakes

# Real-World Example

# Interview Perspective

# Key Takeaways

# Further Reading

Some lessons may replace or merge sections naturally.

Example:

Roadmapping may use:

Roadmap Components

instead of

Types.

The framework should remain consistent.

---

# Executive Summary

3–5 paragraphs.

Should explain:

- Definition
- Importance
- Business value
- TPM relevance
- Lesson outcome

---

# Learning Objectives

6–10 bullets.

Action-oriented.

---

# Main Sections

Every major concept should include:

Definition

Purpose

Business importance

TPM responsibilities

Best practices

Examples

Tables where appropriate

---

# Tables

Prefer tables over long paragraphs.

Good examples:

Comparison tables

Responsibility matrices

Decision matrices

Trade-off analysis

Feature comparison

Interview expectations

---

# Diagrams

Whenever useful include ASCII diagrams.

Example

Business Strategy
        │
        ▼
Roadmap
        │
        ▼
Program Plan
        │
        ▼
Execution
        │
        ▼
Business Outcome

---

# Real-World Examples

Every lesson should contain at least one enterprise-scale example.

Preferred domains:

Payments

Cloud Platforms

Infrastructure

Identity

Developer Platforms

Security

AI/ML

Data Platforms

Global Product Launches

Enterprise SaaS

Avoid trivial examples.

---

# Interview Perspective

Every lesson MUST contain this section.

Include:

Common interview questions

What interviewers evaluate

Senior TPM expectations

Staff TPM expectations

Common weak answers

Strong answer characteristics

---

# Key Takeaways

6–10 bullets.

Short.

Practical.

Memorable.

---

# Further Reading

Reference related CareerOS lessons only.

---

# Content Quality Standards

Every lesson should:

Explain concepts deeply

Avoid unnecessary repetition

Feel like a published technical book

Be production-ready

Require no editing

---

# TPM Perspective

Always explain:

How a TPM thinks.

How TPMs make decisions.

How TPMs communicate.

How TPMs manage trade-offs.

How TPMs influence organizations.

Avoid describing concepts only from a Project Manager perspective.

---

# MAANG+ Perspective

Assume the reader wants to interview at:

Google

Meta

Amazon

Microsoft

Apple

Stripe

Airbnb

Uber

Salesforce

Atlassian

NVIDIA

Explain concepts at the level expected during Senior TPM interviews.

---

# Consistency

Every lesson should look like it was written by the same author.

Readers should never notice a difference between lessons.

Consistency is more important than creativity.
