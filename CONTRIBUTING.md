# Contributing to the Community Website

Welcome! We are excited to have you onboard. To maintain a professional, research-grade codebase suitable for Masters-level applications, please follow these guidelines strictly. [cite: 2025-12-29]

## 1. Getting Started
Before you start coding, ensure your local environment is configured correctly:
1. Clone the repository.
2. Run `npm install` in the root directory.
3. Run `npm run dev` to start the Vite development server.

## 2. Branching Strategy & Workflow
We use a **Feature Branch** workflow. Direct pushes to `main` are blocked.

* **Branch Naming:** Use descriptive names (e.g., `feat/pomodoro-timer-ui` or `fix/nav-styling`).
* **Workflow Steps:**
    1. Pull the latest changes: `git checkout main && git pull`.
    2. Create a branch: `git checkout -b feat/your-feature-name`.
    3. Commit your changes locally.
    4. Push to your branch and open a Pull Request (PR) on GitHub.

## 3. Architecture & Folder Structure
We follow a organized directory structure to keep the project maintainable:
* **`src/core/`**: For harder components/pages to be made by people with more experience.
* **`src/features/`**: For easier components/pages (e.g., `PomodoroTimer`, `CGPAAnalyzer`). Each feature should have its own folder.
* **Thin Components:** Keep React components focused on UI. If a feature requires heavy logic or math, move that code into a separate `.js` helper file within your feature folder.
* **React Standards:** Use Functional Components and Hooks (`useState`, `useEffect`). Class components are not permitted.

## 4. Automated Quality Gates (CI)
When you open a PR, automated "Health Checks" will run via GitHub Actions:
* **Linting:** Your code will be scanned for syntax errors and `console.log` statements.
* **Build Check:** The system will verify that the project builds correctly via `npm run build`.
* **Strictness:** You cannot merge a PR if these checks fail (Red X). Ensure your code is clean before submitting.

## 5. Pull Request Process
1. **Checklist:** Fill out the PR template completely. You can find the PR template on the `.github/pr_template.md` file
2. **Review:** At least one team member must approve the PR.
3. **Stale Approvals:** Pushing new commits after an approval will reset the approval status. This ensures the final code is always verified.
4. **Resolution:** All comment threads/conversations must be "Resolved" before merging is allowed.

## 6. Code Style
* Remove all `console.log` statements and unused imports.
* Ensure your code follows the ESLint rules defined in `eslint.config.js`. If you are confused about any of the rules, google them.

*Following these steps helps us build a high-quality project that we can all be proud of in our portfolios!*