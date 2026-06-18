# Joulefolio Engineering

## 도구 및 환경 설정

- 기획 및 협업: Notion
- 디자인: Figma
- 코드 관리: GitHub

## 기술 스택

- 프레임워크: `Next.js 16.2.3`
- UI 라이브러리: `React 19.2.4`, `react-dom 19.2.4`
- 언어: `TypeScript 5`
- 스타일링: `Tailwind CSS 4`, `PostCSS`
- 서버 상태 관리: `@tanstack/react-query 5.100.10`
- 클라이언트 전역 상태: `zustand 5.0.14`
- 국제화: `next-intl 4.9.1`
- 차트: `Recharts 3.8.1`
- 유틸리티: `clsx`, `tailwind-merge`
- 패키지 매니저: `pnpm 10.33.0`
- 런타임: `Node.js 24+`
- 린트: `ESLint 9`, `eslint-config-next 16.2.3`
- 포맷팅: `Prettier 3.8.3`
- Git Hooks: `Husky`, `lint-staged`
- 단위 및 컴포넌트 테스트: `Vitest 4.1.4`
- 테스트 환경: `jsdom 29.0.2`
- 테스트 유틸리티: Testing Library
- E2E 테스트: `Playwright 1.59.1`

## 폴더 구조

프로젝트는 FSD 경계를 유지하면서 App Router, i18n, 테스트 디렉터리를 함께 운영한다.

```text
joulefolio/
├── .agents/
│   └── skills/
│       └── react-doctor/
├── .claude/
│   └── skills/
│       └── react-doctor/
├── .github/
│   └── workflows/
├── .githooks/
├── .husky/
├── docs/
│   ├── dev-log/
│   └── planning/
├── e2e/
├── public/
├── scripts/
├── src/
│   ├── app/
│   │   └── [locale]/
│   │       ├── community/
│   │       ├── dashboard/
│   │       └── trade/
│   ├── entities/
│   │   ├── energy/
│   │   │   └── model/
│   │   ├── post/
│   │   │   └── model/
│   │   ├── trade/
│   │   │   └── model/
│   │   └── user/
│   │       └── model/
│   ├── i18n/
│   │   ├── config/
│   │   └── messages/
│   ├── shared/
│   │   ├── lib/
│   │   │   └── date/
│   │   ├── mock/
│   │   └── ui/
│   │       ├── button/
│   │       ├── card/
│   │       ├── dropdown/
│   │       └── text/
│   ├── tests/
│   └── widgets/
│       ├── community/
│       │   └── ui/
│       ├── dashboard/
│       │   └── ui/
│       ├── header/
│       │   └── ui/
│       └── trade/
│           └── ui/
```

## 상태 설계

### 서버 상태

- 발전량 데이터
- 소비량 데이터
- 거래 내역
- 커뮤니티 피드
- 친구 목록

### 클라이언트 상태

- 현재 선택 기간
- 거래 폼 입력값
- 필터 상태
- 모달 열림 및 닫힘
- 선택한 사용자
- 탭 상태

## 데이터 모델

### 핵심 엔티티

- `User`
- 필드: `id`, `name`, `avatarUrl`, `location`, `role`, `joinedAt`
- `role`: `"prosumer" | "consumer"`
- 용도: 작성자, 거래 상대, 에너지 소유자 참조용 기본 프로필 모델

- `Post`
- 필드: `id`, `author: User`, `content`, `generatedKwh?`, `savedCarbonKg?`, `likesCount`, `commentsCount`, `category`, `createdAt`
- 용도: 커뮤니티 피드 모델

- `Trade`
- 필드: `id`, `counterparty: User`, `amount`, `amountUnit`, `unitPrice`, `totalPrice`, `currency`, `status`, `createdAt`
- 용도: 거래량, 단가, 총액을 분리한 거래 모델

- `EnergySummary`
- 필드: `owner: User`, `period`, `unit`, `generatedKwh`, `consumedKwh`, `surplusKwh`, `batteryKwh`
- 용도: 대시보드 요약 수치 모델

- `EnergyTrendSeries`
- 필드: `owner: User`, `period`, `unit`, `points: EnergyTrendPoint[]`

- `EnergyTrendPoint`
- 필드: `time`, `generatedKwh`, `consumedKwh`

### 공통 타입

- `ISODateString`
- 브랜드 타입
- `toISODateString(Date)`와 `asISODateString(string)`로 생성
- `asISODateString`은 런타임에서 ISO 형식 검사 포함

- `PostCategory`
- `"friends" | "local" | "review"`

- `PostFilterCategory`
- `"all" | PostCategory`

- `TradeStatus`
- `"pending" | "completed" | "cancelled"`

- `EnergyUnit`
- 현재 `Trade`와 `Energy` 모두 `"kWh"`

- `Currency`
- 현재 `"KRW"`

### 관계 구조

- `Post.author -> User`
- `Trade.counterparty -> User`
- `EnergySummary.owner -> User`
- `EnergyTrendSeries.owner -> User`

### 관계도

```text
User
├── id
├── name
├── avatarUrl
├── location
├── role
└── joinedAt

Post
├── id
├── author -> User
├── content
├── generatedKwh?
├── savedCarbonKg?
├── likesCount
├── commentsCount
├── category -> PostCategory
└── createdAt -> ISODateString

Trade
├── id
├── counterparty -> User
├── amount
├── amountUnit -> "kWh"
├── unitPrice
├── totalPrice
├── currency -> "KRW"
├── status -> TradeStatus
└── createdAt -> ISODateString

EnergySummary
├── owner -> User
├── period -> "daily"
├── unit -> "kWh"
├── generatedKwh
├── consumedKwh
├── surplusKwh
└── batteryKwh

EnergyTrendSeries
├── owner -> User
├── period -> "daily"
├── unit -> "kWh"
└── points -> EnergyTrendPoint[]
```

## 커밋 규칙

- `feat`: 기능 추가
- `fix`: 버그 수정
- `chore`: 설정 및 환경 변경
- `test`: 테스트 코드
- `refactor`: 구조 개선
- `style`: UI 스타일 변경
- `docs`: 문서 변경

## Dev Log 작성 규칙

```bash
npm run devlog
git add docs/dev-log/$(date +%F).md
git commit -m "docs: add dev log for $(date +%F)"
```

## 테스트 규칙

- Unit Test: Vitest + React Testing Library
- E2E Test: Playwright
- unit/component test는 테스트 대상 파일 옆에 둔다.
- e2e test는 루트 `e2e` 폴더에 둔다.
- 공통 테스트 설정은 `src/tests`에서 관리한다.
