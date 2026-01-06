# 🚀 Contributing to the Community Website

Welcome! We are excited to have you onboard. To maintain a professional, research-grade codebase suitable for Masters-level applications, please follow these guidelines strictly. [cite: 2025-12-29]

---

## 1. 🏁 Getting Started
Before you start coding, ensure your local environment is configured correctly:
1. **Clone the repository:** Create a local copy on your machine.
2. **Install Dependencies:** Run `npm install` in the root directory.
3. **Launch Dev Server:** Run `npm run dev` to start the Vite development server.

## 2. 🌲 Branching Strategy & Workflow
We use a **Feature Branch** workflow. **Direct pushes to `main` are blocked.**

* **Branch Naming:** Use descriptive prefixes like `feat/pomodoro-ui`, `fix/nav-bug`, or `chore/update-deps`.
* **The Workflow Steps:**
    1. **Sync:** `git checkout main && git pull` (Always start with the latest code).
    2. **Branch:** `git checkout -b feat/your-feature-name` (Create your private workspace).
    3. **Commit:** `git add .` then `git commit -m "feat: add timer logic"` (Save your progress locally).
    4. **Push:** `git push origin your-branch-name` (Upload your work to GitHub).
    5. **PR:** Open a Pull Request on GitHub to request a merge.

## 3. 🏗 Architecture & Folder Structure
We follow a strict directory structure to keep the project maintainable:
* **`src/core/`**: For complex components or global layouts managed by experienced developers.
* **`src/features/`**: For modular tools (e.g., `PomodoroTimer`, `CGPAAnalyzer`). Each feature must have its own folder.
* **Thin Components:** Components should focus on UI. If your feature has heavy math or logic, move it to a separate `.js` helper file inside your feature folder.
* **React Standards:** Use **Functional Components** and **Hooks** (`useState`, `useEffect`). Class components are not allowed.

## 4. 📓 The Git Dictionary: Local vs. Cloud
Understanding the difference between Git and GitHub is the key to not losing work:

* **Git (The Local Folder):** Git is a tool on your computer. It is like a "Save" button for your local project folder. When you **commit**, you are saving a version to your own hard drive. **Nobody else can see this yet.**
* **GitHub (The Google Drive):** GitHub is the cloud server. It is like a shared Google Drive folder. When you **push**, you are uploading your local "Git saves" to the cloud so the PM and team can see them.

**Common Commands:**
* **`git checkout -b [name]`**: The `-b` stands for "branch." This creates a new parallel copy of the folder and switches you into it.
* **`git branch -m [new-name]`**: The `-m` stands for "move." Use this to rename your current branch if you made a typo.
* **`git rebase main`**: This takes your changes and "stacks" them on top of the absolute latest version of `main`. It keeps our history in a clean, straight line instead of a tangled web. [cite: 2025-12-29]

## 5. 🛡 Automated Quality Gates (CI)
When you open a PR, our "Project Guard" runs automatically via GitHub Actions:
* **Linting:** Your code is scanned for syntax errors and forbidden `console.log` statements.
* **Build Check:** The system verifies the project compiles correctly via `npm run build`.
* **Strictness:** If these checks fail (**Red X**), you cannot merge. Click "Details" in the PR to find the errors.

## 6. 🛠 Beginner FAQ: "What do I do if...?"
1. **I committed to the wrong branch?** Switch to a new branch now (`git checkout -b correct-name`); your work moves with you. Then reset the old branch.
2. **I named my branch wrong?** Use `git branch -m feat/new-name` to rename it.
3. **I have 'Merge Conflicts'?** Sync `main`, then run `git rebase main`. Open VS Code and "Accept" the correct code in the highlighted areas.
4. **My PR has a 'Red X'?** Check the logs, fix the code locally, commit, and push again. The check will restart automatically.
5. **I want to start over?** `git reset --hard origin/main` (**Warning:** This permanently deletes your local work!).
6. **I found a typo after pushing?** Just fix it locally, commit, and push to the same branch. The PR updates itself.
7. **I can't merge my Approved PR?** Ensure all "Conversations" in the PR tab are marked as **Resolved**.
8. **I want to start a second feature?** Always `git checkout main` and `git pull` before starting a new branch so you don't build on top of unmerged code.
9. **I deleted a file accidentally?** Use `git restore [filename]` to bring it back.
10. **Push failed (Authentication)?** GitHub requires a "Personal Access Token" (PAT) or SSH key. You cannot use your standard login password to push code.

## 7. ⚖️ Pull Request Process
1. **Checklist:** Fill out the PR template in `.github/pull_request_template.md`.
2. **Review:** At least one team member must approve the PR.
3. **Stale Approvals:** Pushing new code resets your approvals—always check if you need a re-review!
4. **Resolution:** All comment threads must be "Resolved" before merging.

## 8. 🎨 Code Style
* Remove all `console.log` statements and unused imports.
* Follow the ESLint rules in `eslint.config.js`. If you are confused by a rule, a quick search for the rule name will explain it.

*Following these steps helps us build a high-quality project that we can all be proud of in our portfolios!*
