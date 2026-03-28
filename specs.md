# Portfolio Website Specifications

## Overview
Build a modern, professional, dynamic personal portfolio website for a Principal Cloud Architect using the following specifications.

## Requirements
- **Tech Stack (STRICT)**:
  - Frontend: Next.js (App Router) or React + Vite
  - Styling: Tailwind CSS + subtle animations (Framer Motion optional)
  - Hosting: GitHub Pages (static export)
  - Chatbot: Local JSON-based semantic search fallback (no backend)
  - Data: Store resume data in structured JSON file

## Features

### 1. Hero Section
- Name: Mrigank Kishore Varma
- Title: Principal Cloud Architect | AI/ML | Cloud Transformation
- Tagline: "Designing scalable, cost-efficient, AI-driven cloud systems"
- CTA buttons: "View Projects", "Download Resume", "Contact"
- Dark/Light mode toggle
- Typing animation in hero section (bonus)

### 2. About Section
- 16+ years experience
- Cloud transformation leader
- Focus on AWS, Azure, AI/ML, microservices

### 3. Experience Timeline (interactive)
Include:
- Sterling / First Advantage (Principal Architect)
- Tech Mahindra (Solution Architect)
- Capgemini (IT Architect)
- Early career (Wipro, IBM, Patni)
Each item: Expandable cards, Key achievements (TCO reduction, ML systems, landing zones)

### 4. Skills Section (visual)
Categories:
- Cloud (AWS, Azure, Kubernetes)
- Data & AI (Glue, Spark, SageMaker)
- DevOps (CI/CD, GitHub Actions)
- Programming (Python, Java, TS)
Use: Icons + progress bars or badges

### 5. Key Achievements Section
Highlight:
- 80% cloud cost reduction
- 40+ teams architecture
- Data pipeline optimization (hours → minutes)
- AI/ML implementations (OCR, NLP, ETA prediction)

### 6. Projects / Case Studies
Create 3–4 sample projects based on resume:
- Cloud Migration Platform
- Internal Developer Platform
- AI-based Document Processing System
- Real-time Data Pipeline
Each project: Problem → Solution → Impact

### 7. Chatbot (IMPORTANT)
- Floating chat widget
- Can answer: "What does he do?", "What are his skills?", "Explain his AWS experience", "What AI work has he done?"
- Implementation: Load resume JSON, Use keyword matching, Return conversational answers

### 8. Contact Section
- Email
- LinkedIn
- Location: Pune, India

## Design Requirements
- Clean, premium, FAANG-level portfolio design
- Fully responsive (mobile + desktop)
- Glassmorphism / minimal UI
- Smooth scrolling
- Subtle animations (not distracting)
- Premium font pairing (Inter + Playfair Display)

## SEO + Performance
- Fast loading
- Meta tags
- Lighthouse score optimized

## GitHub Deployment
- Must support `npm run build && npm run export`
- Output static files for GitHub Pages
- Include README with deploy steps

## Data Input (Use this JSON format)
Create a `profile.json` file and populate using resume:

```json
{
  "name": "Mrigank Kishore Varma",
  "title": "Principal Cloud Architect",
  "experience_years": 16,
  "skills": {...},
  "experience": [...],
  "projects": [...],
  "achievements": [...],
  "chatbot_responses": {...}
}
```

## Bonus
- Add "Download Resume" button
- Add visitor analytics (privacy-friendly)
- Add typing animation in hero section

## Deliverables
1. Full project structure
2. All code files
3. Chatbot implementation
4. Deployment steps

Ensure code is clean, modular, and production-ready.