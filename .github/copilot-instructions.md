# Copilot Instructions

## Build & Validate

```bash
yarn install              # Install dependencies (from root)
yarn build:foundation     # Build library → lib/module/ (ESM) + lib/typescript/
yarn typecheck:foundation # TypeScript strict mode check
yarn example              # Run Expo example app
yarn clean                # Remove node_modules + lib
yarn all                  # clean → install → build
```

There is no test suite. Validation is typecheck + build + manual testing in the example app. Always run both before submitting changes:

```bash
yarn typecheck:foundation && yarn build:foundation
```

Format code with Prettier (single quotes, 2-space indent, trailing commas ES5):

```bash
npx prettier --write "packages/foundation/src/**/*.{ts,tsx}"
```

## Architecture

**Monorepo** (Yarn workspaces): `packages/foundation/` is the component library, `example/` is an Expo demo app.

### Theming — All components consume theme via `useContext(ApplicationContext)`

The `ApplicationContext` provides `{ theme, navigator, translate }`. Theme defines semantic color tokens (`primary`, `secondary`, `success`, `warning`, `error` each with `default/light/container` variants), background (`default/surface/disable`), text (`default/secondary/hint/disable`), border, plus font family and optional assets. Default light/dark themes are in `Consts/theme.ts`.

### Navigation — Navigator is an imperative class, not a hook

`Navigator` is instantiated with refs (`navigationRef`, `loadingRef`, `toastRef`) and passed to `NavigationContainer`. It provides `push`, `pop`, `replace`, `reset`, `present` (dialog), `showModal`, `showBottomSheet`, `showLoading`, `showToast`. The navigation container wraps SafeAreaProvider → GestureHandlerRootView → I18nextProvider → ApplicationContext.Provider → Stack.Navigator.

### Adapter Pattern — Cross-platform compatibility via try/catch require

`src/Adapters/` tries Expo packages first, falls back to bare RN alternatives:
- Image: `expo-image` → `@d11/react-native-fast-image`
- VectorIcons: `@expo/vector-icons` → `react-native-vector-icons`
- LinearGradient: `expo-linear-gradient` → `react-native-linear-gradient`

### Grid Layout — Responsive 12/24-column system

`Container` + `Item` (with `widthSpan`) provide a responsive grid (12 columns < 600px, 24 columns ≥ 600px). `ContainerList` is a FlatList-based scrollable variant.

## Key Conventions

### Component structure — always follow this pattern

```
ComponentName/
├── index.tsx    — Implementation (useContext(ApplicationContext) for theme)
├── types.ts     — Props interface
└── styles.ts    — StyleSheet.create()
```

### Input components must be wrapped in Card

All input components (`Input`, `InputOTP`, `InputMoney`, `InputTextArea`, `InputDropDown`) require a `Card` wrapper because they need the Card's background surface to render correctly.

### Design tokens — never hardcode layout values

Use constants from `Consts/`: `Spacing` (XXS:2 → XXL:36), `Radius` (same scale), `Shadow.dark`/`Shadow.light`, `Opacity` (hex alpha map). Use the `Text` component with typography presets, never raw RN Text. Use the `Icon` component with the adapter, never import vector icons directly.

### Utility styles

`Styles` provides pre-built StyleSheet entries: `flex`, `flexRow`, `flexCenter`, `row`, `rowSpace`, `rowCenter`, `paddingS`, `paddingM`, `marginL`, etc.

### Git conventions

- **Commits**: Conventional Commits — `<type>(<scope>): <description>` (e.g., `feat(Button): add loading state`)
- **Branches**: `<type>/<description>` (e.g., `feature/add-button-variant`, `fix/input-focus-issue`)
- **Naming**: PascalCase for components/files/types, camelCase with `use` prefix for hooks, UPPER_SNAKE_CASE for constants

### Barrel exports

All public API is re-exported from `packages/foundation/src/index.ts`. Consumers import from `@passionui/react-native-foundation`. New components must be added here.

## Copilot Skill

A `design-system-kits` skill is available at `.copilot/skills/design-system-kits/` with detailed per-component reference docs for building UIs with this library.
