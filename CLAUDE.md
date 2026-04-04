# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**@passionui/react-native-foundation** — A TypeScript-first React Native design system for cross-platform apps (iOS, Android, Web). Published as `@passionui/react-native-foundation` on npm. Current version: **0.1.6**.

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

# Clean everything (node_modules + yarn.lock + lib)
yarn clean

# Full rebuild from scratch
yarn all    # clean → install → build:foundation

# Format code
npx prettier --write "packages/foundation/src/**/*.{ts,tsx}"

# Release
yarn release:foundation:latest   # patch (0.1.5 → 0.1.6)
yarn release:foundation:beta     # beta pre-release (0.1.6-beta.0)
yarn release:foundation:alpha    # alpha pre-release (0.1.6-alpha.0)
```

## Technology Stack

| Layer              | Technology                                      |
|--------------------|------------------------------------------------|
| Language           | TypeScript ~5.9 (strict mode)                   |
| Framework          | React Native 0.81 + React 19.1                  |
| Navigation         | React Navigation v7 (stack + bottom-tabs)       |
| Animations         | React Native Reanimated ~4.1                    |
| Gestures           | react-native-gesture-handler ~2.28              |
| Paging             | react-native-pager-view 6.9                     |
| i18n               | i18next 25 + react-i18next 15                   |
| Color Manipulation | tinycolor2                                      |
| Progress Bars      | react-native-progress 5.0                       |
| Build System       | react-native-builder-bob (ESM + TypeScript)     |
| Release            | release-it + conventional-changelog             |
| Node Version       | v22.20.0 (.nvmrc)                               |
| Package Manager    | Yarn (workspaces)                               |

---

## Architecture

### App Initialization Flow

```
App Entry
├── new Navigator(navigationRef, loadingRef, toastRef)
├── new Localization({ resources, lng, fallbackLng })
├── NavigationContainer
│   ├── SafeAreaProvider
│   ├── GestureHandlerRootView
│   ├── I18nextProvider (Localization)
│   ├── ApplicationContext.Provider { theme, navigator, translate }
│   ├── Stack.Navigator
│   │   ├── Stack.Screen → StackScreen (normal screens)
│   │   ├── Dialog.Screen → DialogScreen (transparent modals)
│   │   └── Modal.Screen → ModalScreen (full modals + bottom sheets)
│   ├── LoadingView (overlay, controlled via Navigator.showLoading)
│   └── ToastView (overlay, controlled via Navigator.showToast)
```

### Theming System

All components consume theme via `useContext(ApplicationContext)`.

**Theme type** (defined in `packages/foundation/src/Context/types.ts`):
```typescript
Theme {
  dark: boolean
  colors: {
    primary:    { default, light, container }
    secondary:  { default, light, container }
    background: { default, surface, disable }
    text:       { default, secondary, hint, disable }
    border:     { default, disable }
    success:    { default, light, container }
    warning:    { default, light, container }
    error:      { default, light, container }
  }
  font: string                    // 'SFProText' | 'Raleway' | 'Poppins'
  assets?: { headerBackground? }  // Optional header background image
}
```

**Context type:**
```typescript
Context {
  theme: Theme
  navigator?: Navigator
  translate: (key: string) => string
}
```

- **Default themes**: `defaultTheme` (light) and `defaultDarkTheme` (dark) in `Consts/theme.ts`
- **Color palette**: 12+ color families × 11 shades each in `Consts/colors+spacing+radius.ts`
- **Colors helper**: `Colors.lighten(color, amount)` uses tinycolor2

### Design Tokens

```typescript
// Spacing (used throughout all components)
Spacing = { XXS: 2, XS: 4, S: 8, M: 12, L: 16, XL: 24, XXL: 36 }

// Border Radius
Radius = { XXS: 2, XS: 4, S: 8, M: 12, L: 16, XL: 24, XXL: 36 }

// Shadow (platform-specific)
Shadow.dark  // iOS: shadowColor/opacity/radius, Android: elevation
Shadow.light

// Opacity
Opacity = { 0: '00', 5: '0D', ..., 100: 'FF' } // hex alpha values
```

### Pre-defined Styles (`Styles`)

Utility StyleSheet exported from `Consts/styles.ts`:
- **Flex**: `flex`, `full`, `fullWidth`, `fullHeight`, `flexRow`, `flexCenter`
- **Row variants**: `row`, `rowSpace`, `rowCenter`, `rowWrap`
- **Column variants**: `columnSpace`, `columnCenter`
- **Spacing helpers**: `paddingXS`, `paddingS`, `paddingM`, `paddingL`, `marginXS`, etc.
- **Text**: `textCenter`, `textCapitalize`, `textLineThrough`

### Navigation Architecture

The library wraps React Navigation v7 with an opinionated structure.

**Navigator** — Imperative class (not a hook) managing navigation + overlays:
```typescript
// Navigation
navigator.push({ name, component, params?, passProps? })
navigator.replace({ name, component, params? })
navigator.reset({ name, component, params? })
navigator.pop(count?)
navigator.popToTop()

// Dialogs & Modals
navigator.present({ name, component, params? })     // Transparent dialog
navigator.showModal({ component, params? })          // Centered modal with fade+scale
navigator.showBottomSheet({ component, params? })    // Draggable bottom sheet

// Overlays
navigator.showLoading(params?)
navigator.hideLoading()
navigator.showToast({ type, message, icon?, action? })
navigator.hideToast()
```

**Screen component** — Base screen wrapper with:
- Header types: `'default'` | `'surface'` | `'extended'` | `'none'`
- Animated headers with custom components
- Keyboard avoiding view
- Scroll support with animated scroll tracking
- Safe area handling
- Footer slot + floating action button slot

**Specialized screens**: `StackScreen`, `BottomTab`, `ModalScreen`, `DialogScreen`

### Adapter Pattern

`packages/foundation/src/Adapters/` provides cross-platform compatibility via try/catch require:

| Adapter         | Expo                     | React Native CLI                  | Fallback     |
|-----------------|--------------------------|-----------------------------------|--------------|
| **Image**       | `expo-image`             | `@d11/react-native-fast-image`    | `ImageBackground` |
| **VectorIcons** | `@expo/vector-icons`     | `react-native-vector-icons`       | `View`       |
| **LinearGradient** | `expo-linear-gradient` | `react-native-linear-gradient`  | `View`       |

**Supported icon libraries**: MaterialCommunityIcons, FontAwesome, FontAwesome5, FontAwesome6, Ionicons, Feather, MaterialIcons, Entypo, AntDesign, EvilIcons, Foundation, Octicons, SimpleLineIcons, Zocial.

### Component Structure Pattern

Each component follows this structure:
```
ComponentName/
├── index.tsx    — Component implementation
├── types.ts     — TypeScript props interface
└── styles.ts    — StyleSheet.create() definitions
```

Components access theme via `useContext(ApplicationContext)`. Complex components (e.g., Input) have sub-variants and shared utilities.

### Localization

`Localization` class wraps i18next:
```typescript
const localization = new Localization({
  resources: i18nResources,  // { en: { translation: {...} }, vi: { translation: {...} } }
  lng: 'en',
  fallbackLng: 'en',
});
localization.changeLanguage('vi');
```
- Uses `compatibilityJSON: 'v4'` and `load: 'currentOnly'`
- Translation function distributed through `ApplicationContext`

### Grid Layout System

`Layout/` provides a responsive column grid via `GridContext`:
- **Responsive**: 12 columns (width < 600px) or 24 columns (width ≥ 600px)
- `Container` — Grid parent (configures columns, gutter, padding, margin)
- `Item` — Grid child (takes `widthSpan` and optional `heightSpan`)
- `ContainerList` — FlatList-based grid with entry animations (`'fade-in-right'` | `'fade-in-up'`)
- `Card` — Styled container with surface color, shadow, and rounded corners

### Barrel Exports

`packages/foundation/src/index.ts` re-exports all components and their types. Consumers import from the package root:
```typescript
import {
  // Core
  NavigationContainer, Navigator, Screen, BottomTab,
  // Context & Theme
  ApplicationContext, GridContext, Colors, Spacing, Radius, Shadow, Styles,
  defaultTheme, defaultDarkTheme, defaultContext,
  // Layout
  Container, Item, ContainerList, Card,
  // Components
  Button, IconButton, Text, Icon, Image, Input, CheckBox, Radio, Switch,
  Badge, Tag, Divider, SizedBox, Skeleton,
  // Feedback
  Toast, Loading, Popup, SheetPicker,
  // Advanced
  TabView, Pagination, Steps, Stepper, LoopText,
  // Localization
  Localization,
} from '@passionui/react-native-foundation';
```

---

## Component Reference

### Form Components

| Component     | Key Props                                                        | Variants                                          |
|---------------|------------------------------------------------------------------|---------------------------------------------------|
| **Button**    | `title`, `type`, `size`, `color`, `loading`, `leading`, `trailing`, `full`, `round`, `gradientProps` | `primary` · `tonal` · `outline` · `text` · `disabled` · `gradient` × `large` · `medium` · `small` |
| **IconButton**| `icon`, `type`, `color`, `size`, `shape`                         | `primary` · `tonal` · `secondary` · `outline` · `disabled` × `large` · `medium` · `small` × `circle` · `rounded` |
| **Input**     | `size`, `floatingValue`, `floatingIcon`, `error`, `leading`, `trailing`, `disabled`, `required` | `small` · `medium` · `large`; ForwardRef with `focus`/`blur`/`clear`/`setText` |
| **InputOTP**  | `length`, `dataType`, `onComplete`                               | String or number data type                        |
| **InputMoney**| `currency`, all Input props                                      | Currency-formatted input                          |
| **InputSearch**| `onSearch`, `shadow`                                            | Search icon variant, no floating label            |
| **InputTextArea**| Same as Input                                                 | Multi-line variant                                |
| **InputDropDown**| `onPress`, all Input props                                    | Dropdown trigger variant                          |
| **CheckBox**  | `value`, `onChange`, `label`, `disabled`, `indeterminate`         | Checked · unchecked · indeterminate               |
| **Radio**     | `value`, `groupValue`, `onChange`, `label`, `disabled`            | Selected · unselected                             |
| **Switch**    | `value`, `onChange`, `disabled`                                   | On · off with animated toggle                     |
| **Stepper**   | `defaultValue`, `min`, `max`, `onChange`                          | Plus/minus with min/max constraints               |

### Display Components

| Component     | Key Props                                                        | Notes                                             |
|---------------|------------------------------------------------------------------|---------------------------------------------------|
| **Text**      | `typography`, `color`, `fontWeight`                               | 11 typography presets (largeTitle 34px → caption2 11px), 9 font weights, multi-font support |
| **Icon**      | `type`, `name`, `size`, `color`                                   | `FontAwesome` · `FontAwesome5` · `MaterialCommunityIcons` · `Image` |
| **Image**     | ImageAdapterProps + `loading`                                     | 3 states: loading (skeleton), success, error (fallback icon) |
| **Badge**     | `label`, `type`                                                   | `default` (rect with label) · `dot` (small circle) |
| **Tag**       | `label`, `size`, `type`, `icon`, `color`                          | `default` (lightened bg) · `rating` (full color) × `small` · `medium` · `large` |
| **Divider**   | `size`, `type`, `direction`, `color`, `dashSpecs`                 | `line` · `dash` × `horizontal` · `vertical`, optional dot decorations |
| **SizedBox**  | `width`, `height`                                                 | Simple spacer component                           |
| **Skeleton**  | `style`                                                           | Shimmer animation using LinearGradient, 1000ms loop |
| **LoopText**  | `labels`, `delay`, `duration`                                     | Cyclic text animation with fade + translateY      |

### Feedback Components

| Component       | Key Props                                                      | Notes                                             |
|-----------------|----------------------------------------------------------------|---------------------------------------------------|
| **Toast**       | `type`, `icon`, `message`, `action`                             | `success` · `warning` · `default`, optional action button |
| **Loading**     | Controlled via `Navigator.showLoading/hideLoading`              | Full-screen overlay                               |
| **ProgressBar** | `percent`                                                       | Animated progress bar (200ms), 4px height          |
| **Popup**       | `image`, `title`, `description`, `primary`, `secondary`, `buttonDirection` | Modal dialog with image header, auto button layout |
| **SheetPicker** | `data`, `selected`, `onSelect`, searchable                      | Searchable FlatList, radio selection, 70% max height |

### Navigation Components

| Component              | Key Props                                             | Notes                                             |
|------------------------|-------------------------------------------------------|---------------------------------------------------|
| **NavigationContainer**| `navigator`, `localization`, `theme`, `screens`       | Root provider wrapping everything                 |
| **Screen**             | `headerType`, `scroll`, `animatedHeader`, `footer`, `fab` | Base screen with 4 header types                   |
| **BottomTab**          | `tabs` (array of TabItems)                            | Animated tab indicator, badge support             |
| **ModalScreen**        | Component, params                                     | Modal/BottomSheet rendering with animations       |

### Advanced Components

| Component      | Key Props                                                       | Notes                                             |
|----------------|-----------------------------------------------------------------|---------------------------------------------------|
| **TabView**    | `type`, `direction`, `tabs`, `initialIndex`, `tabBarStyles`      | PagerView-based, lazy rendering, animated indicator, ForwardRef with `setPage` |
| **Pagination** | `type`, `activeIndex`, `dataLength`                              | `default` · `black_white` · `number` · `scroll`  |
| **Steps**      | `direction`, `steps`, `size`, `activeIndex`                      | `horizontal` · `vertical` × `small` · `large`, error state, icon/description/time |

---

## Example App

The example app (`example/`) is an Expo app showcasing all components:

```
example/src/
├── index.tsx              — App entry (Navigator + Localization + Theme setup)
├── assets/                — Images, fonts (Poppins, Raleway, SFProText), localization JSONs
├── components/            — Reusable helpers
│   ├── Playground.tsx     — Interactive property editor for components
│   ├── Preview.tsx        — Static component showcase with variants
│   ├── ListTitle.tsx      — Settings list item
│   └── PopupPickerColor.tsx — Color picker modal
├── configs/               — Settings config (fonts, themes, languages)
└── screens/               — Screen demos
    ├── tabs.tsx           — Main 4-tab navigation
    ├── Components/        — 24+ component demo screens
    ├── StylesGuide/       — Design tokens showcase
    ├── Setting/           — App settings
    ├── SettingTheme/      — Runtime theme customization
    ├── Navigations/       — Navigation pattern demos
    └── More/              — Header style demos
```

**Key pattern**: Each component demo uses a **BottomTab** with Preview (static variants) and Playground (interactive editor) tabs.

**Runtime theme switching**: Uses `DeviceEventEmitter` to change theme/language/font without app restart.

---

## Build System

- **react-native-builder-bob** builds to `lib/module/` (ESM) and `lib/typescript/` (type defs)
- Config in `packages/foundation/package.json` under `react-native-builder-bob` field
- TypeScript config: `tsconfig.build.json` (extends `tsconfig.json`, excludes `example` and `lib`)
- TypeScript strict mode enabled, target ESNext, bundler module resolution, JSX: react-jsx
- Path alias: `@passionui/react-native-foundation` → `./src/index`

## CI/CD

### PR Review Workflow (`.github/workflows/review.yml`)
Triggered on PR open/sync/reopen to `main`:
1. **Validate Branch** — Enforces naming: `feature/*`, `fix/*`, `docs/*`, `chore/*`, `refactor/*`, `perf/*`, `test/*`
2. **Verify Code** — Detects changed packages → typecheck → build → verify `lib/` output
3. **Review Complete** — Gates the PR

### Release Workflow (`.github/workflows/release.yml`)
Manual dispatch with inputs: `package` (foundation) and `release-type` (beta/alpha/latest). Runs: checkout → Node 20 setup → install → build → release-it → summary.

### PR Template
Required sections: Description, Type of Change, Related Issues, Motivation, Testing (iOS/Android/Web), Checklist, Screenshots.

### Issue Template
Bug report form requiring: summary, library version, environment info, reproduction steps, and reproducible repo link.

---

## Conventions

### Git
- **Commits**: Conventional Commits — `<type>(<scope>): <description>` (e.g., `feat(Button): add loading state`)
- **Branches**: `<type>/<description>` (e.g., `feature/add-button-variant`, `fix/input-focus-issue`)
- **PR titles**: Same format as commits

### Code Style
- **Formatting**: Prettier — single quotes, 2-space indent, trailing commas (ES5), LF line endings
- **Editor**: 2-space indent, UTF-8, trim trailing whitespace, final newline (`.editorconfig`)
- **TypeScript**: Strict mode, avoid `any`, use `unknown` or proper types
- **Naming**: PascalCase for components/files/types, camelCase with `use` prefix for hooks, UPPER_SNAKE_CASE for constants

### Component Development
- One component per directory with `index.tsx` + `types.ts` + `styles.ts`
- Access theme via `useContext(ApplicationContext)`
- Use `ForwardRef` + `useImperativeHandle` for components needing imperative APIs
- Use spacing/radius/shadow constants from `Consts` — never hardcode layout values
- Use the `Text` component with typography presets — never use raw RN Text
- Use the `Icon` component with adapter — supports both Expo and CLI vector icons
- Add component examples in `example/src/screens/Components/` using Preview + Playground pattern

### Validation
- **No test suite** — validation is done via `yarn typecheck:foundation` + `yarn build:foundation` + manual testing in example app
- Always run typecheck and build before submitting changes

### Peer Dependencies

Required by consumers:
```
react >= 18, react-native >= 0.70,
react-native-gesture-handler >= 2, react-native-reanimated >= 4,
react-native-safe-area-context >= 5, react-native-svg >= 15,
react-native-worklets >= 0.5, react-native-pager-view >= 6.9
```

Optional (adapter-selected):
```
expo-image | @d11/react-native-fast-image
@expo/vector-icons | react-native-vector-icons
expo-linear-gradient | react-native-linear-gradient
expo-font (for custom fonts in Expo)
```
