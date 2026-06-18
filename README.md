# Joulefolio

[English](#english) | [한국어](#한국어)

## English

Joulefolio is a Next.js energy portfolio application for prosumers. It focuses on tracking energy production and consumption, managing stored or surplus energy, and supporting community-driven trading workflows.

### Current Scope

- Landing page with entry points to the dashboard and trading flow
- Dashboard UI for portfolio summary, energy metrics, trend visualization, and recent activity
- Trade UI for available energy, trade submission, and trade history
- Community UI for post feed, category filters, and local ranking highlights
- Shared mock-data driven development for domain modeling and presentation work

### Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React 19
- Recharts
- Vitest

### Getting Started

#### Requirements

- Node.js 20 or newer recommended
- pnpm

#### Install

```bash
pnpm install
```

#### Run the development server

```bash
pnpm run dev
```

Open `http://localhost:3000` in your browser.

#### Run tests

```bash
pnpm run test
```

### Available Scripts

- `pnpm run dev`: start the Next.js development server
- `pnpm run build`: create a production build
- `pnpm run start`: run the production server
- `pnpm run lint`: run ESLint
- `pnpm run test`: run Vitest once
- `pnpm run test:watch`: run Vitest in watch mode
- `pnpm run format`: format the codebase with Prettier
- `pnpm run format:check`: verify formatting without writing changes
- `pnpm run devlog`: generate a development log entry

### Project Structure

```text
src/
  app/       Next.js App Router pages and layout
  entities/  Domain models and types
  shared/    Shared utilities, UI primitives, and mock data
  widgets/   Reusable feature-level presentation components
docs/
  dev-log/   Development log entries
  planning/  Planning documents and proposals
```

### Routes

- `/`: landing page
- `/dashboard`: energy portfolio dashboard
- `/trade`: energy trading page
- `/community`: community feed with filters, CTA, and ranking cards

### Development Notes

- The current UI is mostly driven by mock data under `src/shared/mock`
- Domain types are organized by entity under `src/entities`
- Community posts are modeled in `src/entities/post` and rendered through widgets in `src/widgets/community`
- Widget components keep page routes relatively thin and presentation-focused

## 한국어

Joulefolio는 프로슈머를 위한 Next.js 기반 에너지 포트폴리오 애플리케이션입니다. 에너지 생산 및 소비 현황을 추적하고, 저장되거나 남는 에너지를 관리하며, 커뮤니티 기반 거래 흐름을 지원하는 데 초점을 두고 있습니다.

### 현재 범위

- 대시보드와 거래 화면으로 이동할 수 있는 랜딩 페이지
- 포트폴리오 요약, 에너지 지표, 추이 시각화, 최근 활동을 보여주는 대시보드 UI
- 사용 가능 에너지, 거래 등록, 거래 내역을 다루는 거래 UI
- 게시글 피드, 카테고리 필터, 지역 랭킹 하이라이트를 제공하는 커뮤니티 UI
- 도메인 모델링과 화면 작업을 위한 공용 목 데이터 기반 개발

### 기술 스택

- Next.js App Router
- TypeScript
- Tailwind CSS
- React 19
- Recharts
- Vitest

### 시작하기

#### 요구 사항

- Node.js 20 이상 권장
- pnpm

#### 설치

```bash
pnpm install
```

#### 개발 서버 실행

```bash
pnpm run dev
```

브라우저에서 `http://localhost:3000`을 열면 됩니다.

#### 테스트 실행

```bash
pnpm run test
```

### 사용 가능한 스크립트

- `pnpm run dev`: Next.js 개발 서버 실행
- `pnpm run build`: 프로덕션 빌드 생성
- `pnpm run start`: 프로덕션 서버 실행
- `pnpm run lint`: ESLint 실행
- `pnpm run test`: Vitest 1회 실행
- `pnpm run test:watch`: Vitest 감시 모드 실행
- `pnpm run format`: Prettier로 코드 포맷팅
- `pnpm run format:check`: 파일을 수정하지 않고 포맷 상태 확인
- `pnpm run devlog`: 개발 로그 문서 생성

### 프로젝트 구조

```text
src/
  app/       Next.js App Router 페이지와 레이아웃
  entities/  도메인 모델과 타입
  shared/    공용 유틸리티, UI 프리미티브, 목 데이터
  widgets/   재사용 가능한 기능 단위 프레젠테이션 컴포넌트
docs/
  dev-log/   개발 로그 문서
  planning/  기획안 및 제안 문서
```

### 라우트

- `/`: 랜딩 페이지
- `/dashboard`: 에너지 포트폴리오 대시보드
- `/trade`: 에너지 거래 페이지
- `/community`: 필터, 참여 유도 카드, 랭킹 카드를 포함한 커뮤니티 피드

### 개발 메모

- 현재 UI는 `src/shared/mock` 아래의 목 데이터를 중심으로 동작합니다
- 도메인 타입은 `src/entities` 아래에서 엔티티별로 관리합니다
- 커뮤니티 게시글 모델은 `src/entities/post`에 있고, 화면 구성은 `src/widgets/community`에서 담당합니다
- 위젯 컴포넌트를 활용해 페이지 라우트는 비교적 얇고 선언적인 구조를 유지합니다
