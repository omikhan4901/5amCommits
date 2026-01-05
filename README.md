# 5AM Commits — Community Platform

A systems-grade React platform built for high-velocity contributors.
This project is a collaborative build where the core infrastructure is protected, and features are developed in isolated "cubicles".

---

## 🚀 Mission

Build a technically challenging, data-driven community platform that:
- Tracks participation and activity
- Visualizes growth over time
- Trains contributors in real-world Git, React, and collaboration workflows

This is not a tutorial repo.
This is a learning-by-building environment.

---

## 🧠 Architecture: The Cubicle System

To keep the project shippable with many contributors, we enforce strict isolation.

### 1. Core System (`/src/core`)
Access: Assigned Core Leads only

This is the kernel of the application:

Do NOT modify anything in `/src/core` unless you are explicitly assigned.

---

### 2. Feature Cubicles (`/src/features`)
Access: All Contributors

Each feature lives in its own folder (“cubicle”).
Each person or pair is assigned exactly one cubicle.

Rules:
- You may only edit files inside your assigned folder
- Do not import from other feature folders
- Use local state (useState) and local logic
- All cubicles start with placeholder components

This ensures:
- No one blocks anyone else
- Beginners can work safely
- The main app always stays runnable

---

### 3. Shared Components (`/src/shared`) [Future]
Access: Read / Use by all

This will eventually hold shared UI primitives:
- Buttons
- Cards
- Inputs
- Layout helpers

If you think a component should be shared:
- Discuss it first 

---

## 🛠️ Contribution Workflow (Git Rules)

### 1. Main Branch Protection
- No direct pushes to `main`
- This rule applies to everyone, including admins
- `main` is always deployable

---

### 2. Feature Branches Only

All work happens on feature branches:

git checkout -b feat/your-feature-name

Examples:
- feat/cgpa-analyzer
- feat/community-pulse
- fix/profile-card-spacing

---

### 3. One PR = One Purpose
Each Pull Request should do one thing:
- One feature
- One fix
- One improvement

Avoid mixing unrelated changes.

---

### 4. Pull Request Process
1. Pull latest `main` before opening a PR
2. Resolve conflicts locally if any
3. Open a PR targeting `main`
4. A Core Lead reviews the PR
5. Only approved PRs are merged

---

### 5. Review & Merge Authority
- Only designated Core Leads can approve and merge PRs
- Everyone is encouraged to comment, ask questions, and suggest improvements

---

### 6. Cubicle Respect Rule
Do NOT modify another contributor’s cubicle unless:
- You are assigned to it, or
- You asked in Discord and got approval

This protects ownership and learning.

---

## 📦 Feature Scope

Core Systems (Lead-owned):
- Community Activity / Pulse Engine
- Activity Over Time Graphs
- GitHub Contribution Tracker
- Hackathon Hub
- UI Kit / Design System

Sandbox Modules (Paired & Mentored):
- CGPA Analyzer
- Profile UI
- Stats Widgets
- Attendance Predictor
- Pomodoro Timer

Assignments are based on experience and availability.

---

## 📜 Working Agreement

- Isolation first: stay in your folder
- Clean code: readable variable names
- Simplicity first: Pure JavaScript (no TypeScript)
- No AI-generated code for the first project
- Communication matters more than speed

If you’re stuck, ask.
If you disappear, we assume you stepped back.

---

## 💻 Local Setup

1. Install dependencies:
   npm install

2. Run dev server:
   npm run dev

3. Start coding:
   Find your folder in `src/features/` and turn the placeholder into a real feature.

---

"If it isn't documented, it doesn't exist.
If it isn't reviewed, it doesn't ship."

— The 5AM Commits Philosophy

