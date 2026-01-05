# 5AM Commits: Community Platform

A systems-grade React platform built for high-velocity contributors. This project is a collaborative build where the core infrastructure is protected, and features are developed in isolated "cubicles."

## 🚀 The Mission
To build a technically challenging, data-driven platform that tracks community activity, visualizes growth, and simplifies developer workflows.

---

## 🏗️ The Cubicle Architecture

To ensure the system remains shippable even with multiple contributors, we follow a strict isolation protocol.

### 1. The Core (`/src/core`)
**Access: ONLY Assigned people.**
This is the kernel of the application. Do not modify these files unless you are a assigned to.

### 2. Sandbox Features (`/src/features`)
**Access: All Contributors**
This is where the features live. Each pair or individual is assigned a "Cubicle" (a sub-folder).
* **Rule:** You are only allowed to edit files within your assigned folder.
* **Isolation:** Use local `useState` and internal CSS/Tailwind. Do not import from other feature folders.
* **Placeholders:** All features have a default file with placeholder text.

### 3. Shared Components (`/src/shared`)
> [This is for the future]
**Access: All Contributors (Read/Use)**
Should contain atomic UI components (Buttons, Cards, Inputs) after sometime once we finish the assignments.
* **Usage:** Import these to keep the site's design consistent.
* **Contribution:** If you need a new common component, coordinate with Rajin.

---

## 🛠️ Contribution Workflow

### 1. Protected Main Branch
**No one**, including leads, pushes directly to `main`.
1. **Clone** the repo and run `npm install`.
2. **Branch:** Create a branch named `feat/your-feature-name`.
3. **Code:** Build your logic inside your assigned `/src/features/` cubicle.
4. **Pull Request:** Submit a PR to `main`.
5. **Review:** A Core Lead will review for logic, modularity, and "Clean Code."
6. **Merge:** Approved code is merged into the production build.

### 2. Feature Assignments
* **Core Pillars:** Pulse Engine, GitHub Sync, Hackathon Hub, UI Kit.
* **Sandbox Modules:** CGPA Analyzer, Profile UI, Stats Widgets, Attendance Predictor, Pomodoro Timer.

---

## 📜 Working Agreement (The Rules)

* **Cubicle Rule:** Stay in your folder. Do not reach into `src/core` or other features.
* **Clean Code:** Use descriptive variable names (`isTimerActive` instead of `ita`).
* **Simplicity First:** We are using **Pure JavaScript**. No TypeScript. Focus on logic and modularity.
* **PR Approval:** No code enters `main` without a Lead's approval.

---

## 💻 Local Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Dev Server:**
   ```bash
   npm run dev
   ```

3. **Start Coding:** Find your folder in `src/features/` and turn that placeholder into a real feature.

**"If it isn't documented, it doesn't exist. If it isn't tested, it's broken."**
— *The 5AM Commits Philosophy*