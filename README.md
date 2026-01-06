# 5AM Commits — Community Platform

A systems-grade React platform built for high-velocity contributors. 
This project is a collaborative build where the core infrastructure is protected, and features are developed in isolated **"cubicles"**.

---

## 🚀 Mission

Build a technically challenging, data-driven community platform that:
* **Tracks** participation and activity metrics.
* **Visualizes** community growth over time..
* **Trains** contributors in real-world Git, React, and asynchronous collaboration workflows.

> **Note:** This is not a tutorial repo. This is a learning-by-building environment.

---

## 🧠 Architecture: The Cubicle System

To keep the project shippable with many contributors, we enforce strict isolation.

### 1. Core System (`/src/core`)
**Access:** Assigned Core Leads only.

This is the kernel of the application. It handles global state, API services, and the routing engine. 
* **Strict Rule:** Do **NOT** modify anything in `/src/core` unless you are explicitly assigned to a Core Pillar.

### 2. Feature Cubicles (`/src/features`)
**Access:** All Contributors.

Each feature lives in its own folder (“cubicle”). Each person or pair is assigned exactly one cubicle.

**The Rules of the Cubicle:**
* **Isolation:** You may only edit files inside your assigned folder.
* **No Leaks:** Do not import from other feature folders.
* **Local Logic:** Use local state (`useState`) and local business logic.
* **Stability:** All cubicles start with placeholder components to ensure the main app always stays runnable.

### 3. Shared Components (`/src/shared`)
**Access:** Read/Use by all.

This holds the Atomic UI primitives:
* Buttons, Cards, Inputs, and Layout helpers.
* **Process:** If you believe a component should be moved to `shared`, discuss it with a Lead first.

---

## 🛠️ Contribution Workflow (Git Rules)

### 1. Main Branch Protection
* **No direct pushes to `main`.**
* This rule applies to **everyone**, including administrators.
* The `main` branch must always remain deployable and stable.

### 2. Feature Branches Only
All work happens on isolated feature branches:
```bash
git checkout -b feat/your-feature-name
```
*Examples:* `feat/cgpa-analyzer`, `feat/community-pulse`, `fix/profile-card-spacing`.

### 3. One PR = One Purpose
Each Pull Request should have a single focus. Avoid mixing unrelated changes (e.g., don't fix a CSS bug in a PR meant for logic updates).

### 4. Pull Request Process
1.  Pull the latest `main` before opening a PR.
2.  Resolve all conflicts locally.
3.  Open a PR targeting `main`.
4.  A **Core Lead** reviews the code for logic and architecture.
5.  Only approved PRs are merged.

### 5. Review & Merge Authority
* Only designated **Core Leads** can approve and merge PRs.
* Everyone is encouraged to comment, ask questions, and suggest improvements on open PRs.

### 6. Cubicle Respect Rule
Do **NOT** modify another contributor’s cubicle unless you are assigned to it or have received explicit approval on Discord. This protects ownership and the learning process.

---

## 📦 Feature Scope

### Core Systems (Lead-Owned)
* Community Activity / Pulse Engine
* Activity Over Time Graphs
* GitHub Contribution Tracker
* Hackathon Hub
* UI Kit / Design System

### Sandbox Modules (Paired & Mentored)
* CGPA Analyzer
* Profile UI
* Stats Widgets
* Attendance Predictor
* Pomodoro Timer

---

## 📜 Working Agreement

* **Isolation First:** Stay in your folder.
* **Clean Code:** Use readable, descriptive variable names.
* **Simplicity First:** Pure JavaScript only (No TypeScript for this project).
* **No AI Generation:** AI-generated code is prohibited for this first project to ensure fundamental learning.
* **Communication:** Communication matters more than speed. If you are stuck, ask.

---

## 💻 Local Setup

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run dev server:**
    ```bash
    npm run dev
    ```
3.  **Start coding:**
    Find your assigned folder in `src/features/` and turn the placeholder into a real feature.

---

> "If it isn't documented, it doesn't exist.  
> If it isn't reviewed, it doesn't ship."  
> — *The 5AM Commits Philosophy*