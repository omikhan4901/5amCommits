# Contributing to the Project

Welcome! We are excited that you are contributing. To keep the codebase maintainable and professional—especially as we prepare to move this to a GitHub Organization—please follow these guidelines.

## 1. Getting Started

Before you start coding, ensure your local environment is set up correctly:

1. Clone the repository.

2. Run `npm install` in both the frontend and backend directories.

3. Create a `.env` file based on the `.env.example` provided.

## 2. Branching Strategy

We use **Feature Branches**. Do not push directly to the `main` branch.

* **Branch Naming:** Use descriptive names like `feat/add-login-validation` or `fix/express-error-handler`.

* **Workflow:**

  1. Pull the latest changes from `main`.

  2. Create your feature branch: `git checkout -b feat/your-feature-name`.

  3. Commit your changes.

  4. Push to your branch and open a Pull Request (PR).

## 3. Architecture & Style Rules

We aim for a "Clean Architecture" to make the project suitable for research and academic review.

### Frontend (React)

* **Functional Components:** Use functional components with Hooks (`useState`, `useEffect`) instead of Class components.

* **Component Structure:** Keep components small and focused on a single responsibility.

* **Cleanup:** Remove all `console.log` statements and unused imports before submitting.

### Backend (Express)

* **Thin Controllers:** Controllers should only handle the request/response logic. Business logic should live in separate service files.

* **Consistency:** Use standard HTTP status codes (200 for Success, 400 for Client Error, 500 for Server Error).

* **Error Handling:** Always wrap asynchronous code in `try/catch` blocks or use a middleware wrapper.

## 4. Pull Request Process

The PR is where we ensure code quality together.

1. **Fill the Template:** When you open a PR, the description will be pre-filled with a checklist. Please fill it out completely.

2. **Review:** At least one team member must approve the PR before it can be merged.

3. **Address Comments:** If a reviewer asks for changes or leaves a "TODO," please resolve the conversation before merging.

4. **Stale Approvals:** Note that if you push new commits after an approval, the approval will be reset. This is to ensure the final version is verified.

## 5. Communication

If you are unsure about an implementation detail or a specific rule, please ask in our team chat or open an "Issue" on GitHub to discuss the architectural approach first.

*Following these steps helps us build a high-quality project that we can all be proud of in our portfolios and applications!*