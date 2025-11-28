# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**@passionui/react-native-foundation** — A TypeScript-first React Native design system for cross-platform apps (iOS, Android, Web). Published as `@passionui/react-native-foundation` on npm.

Monorepo with two workspaces:
- `packages/foundation/` — The component library (source in `src/`)
- `example/` — Expo-based demo app consuming the library

## Common Commands

```bash
# Install dependencies (from root)
yarn install

# Build the foundation package (react-native-builder-bob → lib/)
yarn build:foundation

# Type check
yarn typecheck:foundation

# Run the example app (Expo)
yarn example

# Clean everything (node_modules + lib)
yarn clean

# Format code
npx prettier --write "packages/foundation/src/**/*.{ts,tsx}"

# Release
yarn release:foundation:latest   # patch
yarn release:foundation:beta     # beta pre-release
yarn release:foundation:alpha    # alpha pre-release
```

## Architecture

### Theming System

All components consume theme via `ApplicationContext` (React Context). The `Theme` type (defined in `packages/foundation/src/Context/types.ts`) provides:
- **Semantic color tokens**: `primary`, `secondary`, `background`, `text`, `border`, `success`, `warning`, `error` — each with `default`, `light`, `container` variants
- **Font**: configurable font family (SFProText, Raleway, Poppins)
- **Assets**: optional header background image

Default light/dark themes are in `packages/foundation/src/Consts/theme.ts`. Color palette with 12+ color families (11 shades each) lives in `Consts/colors+spacing+radius.ts`.

### Navigation Architecture

The library wraps React Navigation v7 with an opinionated structure:
- `NavigationContainer` — Root provider that sets up `ApplicationContext`, stack navigator, loading overlay, and toast
- `Navigator` — Imperative class (not a hook) with methods: `push`, `pop`, `replace`, `reset`, `present`, `showModal`, `showBottomSheet`, `showLoading`, `showToast`
- `Screen` — Base screen wrapper with keyboard avoidance, scroll support, animated headers, safe areas
- Specialized screens: `StackScreen`, `BottomTab`, `ModalScreen`, `DialogScreen`, `BottomSheet`

The app entry point creates a `Navigator` instance with refs and passes it to `NavigationContainer`.

### Adapter Pattern

`packages/foundation/src/Adapters/` provides cross-platform compatibility via try/catch require:
- **Image**: tries `expo-image`, falls back to `@d11/react-native-fast-image`
- **VectorIcons**: tries `@expo/vector-icons`, falls back to `react-native-vector-icons`
- **LinearGradient**: tries `expo-linear-gradient`, falls back to `react-native-linear-gradient`

This lets the same library work in both Expo and bare React Native CLI projects.

### Component Structure Pattern

Each component follows this structure:
```
ComponentName/
├── index.tsx    — Component implementation
├── types.ts     — TypeScript props interface
└── styles.ts    — StyleSheet.create() definitions
```

Components access theme via `useContext(ApplicationContext)`. Complex components (e.g., Input) have sub-variants (`InputOTP.tsx`, `InputMoney.tsx`, `InputSearch.tsx`) and shared utilities (`common.tsx`).

### Localization

`Localization` class wraps i18next. Instantiated in the app root and passed to `NavigationContainer`. The `translate` function is distributed through `ApplicationContext`.

### Grid Layout System

`Layout/` provides a 12-column grid via `GridContext`:
- `Container` — Grid parent (configures columns, gutter, padding)
- `Item` — Grid child (takes `span` prop)
- `ContainerList` — Scrollable grid variant

### Barrel Exports

`packages/foundation/src/index.ts` re-exports all components and their types. Consumers import everything from the package root:
```typescript
import { Button, Input, Text, NavigationContainer, Navigator } from '@passionui/react-native-foundation';
```

## Build System

- **react-native-builder-bob** builds to `lib/module/` (ESM) and `lib/typescript/` (type defs)
- Config in `packages/foundation/package.json` under `react-native-builder-bob` field
- Build config: `tsconfig.build.json` (excludes example and lib directories)

## Conventions

- **Commits**: Conventional Commits — `<type>(<scope>): <description>` (e.g., `feat(Button): add loading state`)
- **Branches**: `<type>/<description>` (e.g., `feature/add-button-variant`, `fix/input-focus-issue`)
- **Naming**: PascalCase for components/files/types, camelCase with `use` prefix for hooks, UPPER_SNAKE_CASE for constants
- **Formatting**: Prettier (single quotes, 2-space tabs, trailing commas in ES5)
- **No test suite** — validation is done via typecheck + build + manual testing in example app
