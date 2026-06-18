# Joulefolio - Codex Instructions

## Project Overview

Joulefolio is a Next.js App Router application for energy portfolio management, community insights, trading, and dashboard analytics.

## Planning Source

1. Identify the area affected by the request.
2. Before implementing any change that affects user-visible behavior, user workflows, or public-facing APIs, review the single most relevant planning doc and any other planning docs that cover the affected area.
3. Use planning docs in this order:
   - `docs/planning/joulefolio-screens.md` for UI, route structure, navigation, and widget composition
   - `docs/planning/joulefolio-engineering.md` for domain models, state shape, data boundaries, and repo conventions
   - `docs/planning/joulefolio-overview.md` for product scope, core value, and rollout intent
   - `docs/planning/joulefolio-service-plan.md` as the planning index
4. Apply the repo architecture boundaries defined in this guide.
5. Implement the change.
6. Validate the change.
7. If the planning docs and the implementation conflict, update the relevant planning doc or report the mismatch.

## Tech Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS 4
- PostCSS
- `@tanstack/react-query` for server state
- `zustand` for client global state
- `next-intl` for internationalization
- `Recharts` for charts
- Vitest and Testing Library for unit and component testing
- Playwright for E2E testing
- pnpm as the package manager

## Environment

- Use Node.js 24 or higher.
- Do not run tests with Node.js 18.16.0 or lower.
- Vitest and its dependencies may require newer Node.js APIs such as `node:util.styleText`.
- Before installing dependencies or running tests, check the active Node.js version with `node -v`.
- If the active Node.js version is lower than 24, switch to Node.js 24 or higher before continuing.
- If pnpm is unavailable, run `corepack enable`.
- If `corepack enable` does not make `pnpm` available, stop and report that the package manager could not be initialized before proceeding with installation or testing.

## Project Structure

- `src/app`: page routes and layout
- `src/entities`: domain models and types
- `src/i18n`: i18n config and locale messages
- `src/shared`: shared utilities and mock data
- `src/tests`: shared test setup and helpers
- `src/widgets`: reusable UI widgets
- `e2e`: end-to-end tests

## Commands

- install: `pnpm install`
- dev: `pnpm run dev`
- test: `pnpm run test`
- lint: `pnpm run lint`

## Coding Rules

- Use functional React components.
- Use strict TypeScript typing.
- Keep components small, focused, and reusable.
- Separate server state from client state.
- Prefer declarative UI and composition over complex imperative logic.
- Keep styling in Tailwind CSS utility classes where appropriate.
- Avoid introducing unnecessary abstractions.
- Avoid changing unrelated files.

## Workspace Guidance

- Follow the Next.js App Router conventions for page components in `src/app`.
- Keep route-level data composition in `src/app` where appropriate.
- Move reusable presentation UI into `src/widgets`.
- Do not pass large mock data transformations directly inside page JSX if the logic belongs in `src/entities` or `src/shared`.
- Avoid adding `use client` to route-level pages unless the entire page genuinely requires client-side behavior.
- Keep domain models, types, and domain logic in `src/entities`.
- Keep shared utilities, helpers, constants, and mock data in `src/shared`.
- Use `src/widgets` for common UI cards and presentation components.
- Keep mock data and sample fixtures in `src/shared/mock`.
- Preserve the existing Feature-Sliced Design style boundaries.
- Prefer the entities, state split, and screen structure defined in the planning docs under `docs/planning/` when adding or refactoring product code.
  If the requested change is not covered by the planning docs, infer the smallest implementation that fits the existing architecture and product direction.

Stop and ask for clarification before editing code only when the change affects:

- product scope
- navigation or screen flow
- domain model shape
- public-facing API contracts
- persistence or data-fetching boundaries
- authentication, authorization, or user permissions

If the relevant planning file is missing, propose a minimal implementation plan and clearly state the assumption before editing.

## Testing

- Use Vitest for business logic and component testing.
- Keep tests focused on behavior and domain semantics.
- Add unit tests for pure logic and small presentational components; use integration tests only for behaviors that span multiple interacting widgets, route-level state, or data-fetching boundaries.
- Run tests after making logic changes with `pnpm run test`.
- Run the full test command before finalizing changes, even if the implementation only touched a narrow area.
- Use targeted test runs only as an intermediate development step, not as the final validation step.
- If tests fail because the active Node.js version is lower than 24, report it as an environment issue and do not treat it as an application test failure.

## Validation Notes

- Before finalizing changes, run `pnpm run test`.
- Also run `pnpm run lint` if available.
- If `pnpm run lint` is not available because the script or dependency is missing, report that lint could not be run and do not treat that as a pass or as an application failure.
- If validation cannot be completed due to environment constraints, clearly state:
  - which command was attempted
  - what failed
  - whether the failure is caused by environment setup or application code

## Work Process

Before editing code:

1. Read the relevant planning document.
2. Inspect the existing implementation in the affected route, widget, entity, or shared module.
3. Reuse existing patterns, naming conventions, mock data, and component structure where possible.
4. Make the smallest focused change that satisfies the request.

## Do Not

- Do not rewrite large parts of the app unless explicitly requested.
- Do not introduce new UI libraries, state libraries, date libraries, chart libraries, or data-fetching libraries without approval.
- Do not move files across architectural boundaries unless the task requires it.
- Do not create duplicate domain types, mock data, or utility functions when an existing one can be reused.
- Do not mix unrelated refactoring with product changes.
- Do not change public-facing text, mock data semantics, route paths, or domain terminology unless required by the task.

## Mock Data

- Keep mock data in `src/shared/mock`.
- Mock data should use domain types from `src/entities` whenever possible.
- Do not define mock-only shapes that diverge from entity types unless clearly documented.
- Include realistic values for loading, empty, normal, and edge states when relevant.

## Final Response Format

When finishing a task, include:

- Summary of what changed
- Files modified
- Validation commands run and results
- Any skipped validation and why
- Any planning mismatch or assumption

If no files were modified, omit the files-modified section and state that the task was review-only or analysis-only.
