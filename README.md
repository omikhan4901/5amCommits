# 5AM Commits: Community Platform

A systems-grade React platform built for high-velocity contributors. This project is designed as a collaborative environment where core infrastructure remains rock-solid while new members build isolated features in a "sandbox" model.

## 🚀 The Mission

To build a technically challenging, data-driven platform that tracks community activity, visualizes growth, and simplifies developer workflows.

## 🏗️ Technical Architecture: Core vs. Sandbox

This project follows a strict **Isolation Protocol**. To ensure the system's survival, we separate the "Kernel" from the "User-land."

### 1. The Core (`/src/core`)

**Access: Only Engineering Leads (Omi, Ratul, Shohan)**
This directory contains the central nervous system of the app.

* **`store/`**: Global state management.

* **`services/`**: API integration (GitHub GraphQL, etc.).

* **`hooks/`**: Reusable business logic.

* **`shared/`**: The Atomic UI Kit (Buttons, Inputs, Modals).

### 2. Sandbox Features (`/src/features`)

**Access: All Contributors**
This is where everyone else codes. Each feature lives in its own "cubicle."

* **Isolation:** You only write code within your assigned folder.

* **Safety:** If your feature breaks, we simply disable your folder's route; the rest of the site stays alive.

* **Promotion:** Once a feature is proven stable, it is integrated into the Core UI.

## 🛠️ Contribution Workflow (The "Cubicle" Rule)

We maintain high code standards to ensure this project remains "Systems-Grade."

### 1. Git Workflow: No Pushing to `main`

The `main` branch is protected. Even the leads cannot push directly to it.

1. **Clone** the repository.

2. **Branch:** Create a branch named after your feature (e.g., `feat/attendance-predictor` or `feat/pomodoro`).

3. **Code:** Work **only** inside your specific feature folder.

4. **Pull Request (PR):** Submit a PR to `main`.

5. **Review:** A Core Lead will review your logic and code style.

6. **Merge:** Once approved, your code will be merged into the production build.

### 2. Feature Assignments

Check the **Notion Feature Page** for your specific pairing. Current assignments include:

* **Core:** Pulse Engine, GitHub Sync, Hackathon Hub, UI Kit.

* **Sandbox:** CGPA Analyzer, Profile UI, Stats Widgets, Attendance Predictor, Pomodoro Timer.

## 📜 Working Agreement (The Rules)

* **Clean Code:** Use descriptive variable names (`isTimerRunning` vs `tr`).

* **Modularity:** Do not reach into other people's folders. If you need a component, check `src/shared`.

* **Simplicity First:** We are using **Pure JavaScript**. No TypeScript for this phase. Focus on clean logic.

* **PR Approval:** Every merge requires a "Look Good To Me" (LGTM) from a Lead.

## 💻 Getting Started

1. **Install Dependencies:**

   ```
   npm install
   
   ```

2. **Run Development Server:**

   ```
   npm run dev
   
   ```

3. **Start Coding:** Locate your folder in `src/features/` and replace the `Placeholder` with your logic.

**"If it isn't documented, it doesn't exist. If it isn't tested, it's broken."**
— *The 5AM Commits Philosophy*