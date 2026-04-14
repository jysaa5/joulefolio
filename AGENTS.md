# Joulefolio - Codex Instructions

## Project Overview
Joulefolio is a Next.js App Router application for energy portfolio management, community insights, trading, and dashboard analytics.

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Vitest for unit and logic testing

## Project Structure
- `src/app`: page routes and layout
- `src/entities`: domain models and types
- `src/shared`: shared utilities and mock data
- `src/widgets`: reusable UI widgets

## Commands
- install: `npm install`
- dev: `npm run dev`
- test: `npm run test`

## Coding Rules
- Use functional React components
- Use strict TypeScript typing
- Keep components small, focused, and reusable
- Separate server state from client state
- Prefer declarative UI and composition over complex imperative logic
- Keep styling in Tailwind CSS utility classes where appropriate

## Workspace Guidance
- Follow the Next.js App Router conventions for page components in `src/app`
- Keep feature logic organized by domain in `src/entities` and `src/shared`
- Use `src/widgets` for common UI cards and presentation components
- Keep mock data and sample fixtures in `src/shared/mock`

## Testing
- Use Vitest for business logic and component testing
- Keep tests focused on behavior and domain semantics
- Prefer small unit tests over broad integration tests unless necessary
