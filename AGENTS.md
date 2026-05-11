# Joulefolio - Codex Instructions

## Project Overview

Joulefolio is a Next.js App Router application for energy portfolio management, community insights, trading, and dashboard analytics.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Vitest for unit and logic testing
- pnpm as the package manager

## Environment

- Use Node.js 24 or higher.
- Do not run tests with Node.js 18.16.0 or lower.
- Vitest and its dependencies may require newer Node.js APIs such as `node:util.styleText`.
- Before installing dependencies or running tests, check the active Node.js version with `node -v`.
- If the active Node.js version is lower than 24, switch to Node.js 24 or higher before continuing.
- If pnpm is unavailable, run `corepack enable`.

## Project Structure

- `src/app`: page routes and layout
- `src/entities`: domain models and types
- `src/shared`: shared utilities and mock data
- `src/widgets`: reusable UI widgets

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
- Keep domain models, types, and domain logic in `src/entities`.
- Keep shared utilities, helpers, constants, and mock data in `src/shared`.
- Use `src/widgets` for common UI cards and presentation components.
- Keep mock data and sample fixtures in `src/shared/mock`.
- Preserve the existing Feature-Sliced Design style boundaries.

## Testing

- Use Vitest for business logic and component testing.
- Keep tests focused on behavior and domain semantics.
- Prefer small unit tests over broad integration tests unless necessary.
- Run tests after making logic changes with `pnpm run test`.
- If tests fail because the active Node.js version is lower than 24, report it as an environment issue and do not treat it as an application test failure.
- When changing UI-only files, run the most relevant checks available instead of broad unrelated tests.

## Validation Notes

- Before finalizing changes, run `pnpm run test`.
- Also run `pnpm run lint` if available.
- If validation cannot be completed due to environment constraints, clearly state:
  - which command was attempted
  - what failed
  - whether the failure is caused by environment setup or application code
