---
name: design-system-kits
description: >
  How to build React Native screens, navigation flows, and layouts using the @passionui/react-native-foundation
  design system. Use this skill whenever the user wants to create screens, components, navigation stacks, tab bars,
  modals, bottom sheets, popups, forms, themed UI, or any visual layout in a React Native app that uses
  @passionui/react-native-foundation. Also use it when the user asks about theming, colors, typography, spacing,
  localization, or how to wire up the Navigator. Even if the user just says "build a screen" or "add a new page"
  in a project that depends on this package, this skill applies.
---

# Design System Kits — @passionui/react-native-foundation

This skill teaches you how to build production-quality React Native screens using the **@passionui/react-native-foundation** design system. It covers components, navigation, theming, layout, and localization so you can assemble complete UI flows without guessing at APIs.

## When to use this skill

- Building any new screen or page in an app that depends on `@passionui/react-native-foundation`
- Wiring up navigation (push, present, modal, bottom sheet, tabs)
- Creating forms, lists, cards, popups, or feedback UI
- Applying or customizing themes (light/dark, colors, fonts)
- Setting up localization (i18n) with multiple languages
- Building responsive grid layouts

## Package identity

```
npm: @passionui/react-native-foundation
```

All imports come from the package root:

```typescript
import {
  NavigationContainer, Navigator, Screen, BottomTab,
  Button, Input, Text, Icon, Image, CheckBox, Radio, Switch,
  Container, Item, ContainerList, Card,
  Colors, Spacing, Radius, Shadow, Styles,
  ApplicationContext, defaultTheme, defaultDarkTheme,
  Localization,
  // ... and more
} from '@passionui/react-native-foundation';
```

## How to read the references

The skill is organized into four reference folders. Each has an `index.md` with a table of contents and individual files for each topic. Read only the files you need — don't load everything at once.

### `references/components/`
Read when you need to render UI elements. Start with `index.md` to find the right component, then read its individual file.

| File | Content |
|---|---|
| `index.md` | Table of contents for all 28 components |
| `button.md` | Button with 6 types, 3 sizes, loading, icons |
| `icon-button.md` | Circular/rounded icon-only button |
| `text.md` | Typography with 11 presets, multi-font |
| `icon.md` | Vector icon with adapter support |
| `image.md` | Image with skeleton loading + error fallback |
| `input.md` | Text input with floating label, error state |
| `input-otp.md` | One-time password input |
| `input-money.md` | Currency-formatted input |
| `input-search.md` | Search input with icon |
| `input-text-area.md` | Multi-line text area |
| `input-drop-down.md` | Dropdown trigger input |
| `checkbox.md` | Toggle with indeterminate state |
| `radio.md` | Single selection in a group |
| `switch.md` | Toggle switch |
| `stepper.md` | Increment/decrement control |
| `badge.md` | Dot or label status indicator |
| `tag.md` | Colored label chip |
| `divider.md` | Line separator (solid/dashed) |
| `sized-box.md` | Spacer component |
| `skeleton.md` | Shimmer loading placeholder |
| `loop-text.md` | Animated cycling text |
| `progress-bar.md` | Animated progress indicator |
| `toast.md` | Notification banner |
| `popup.md` | Modal dialog with actions |
| `sheet-picker.md` | Searchable selection list |
| `tab-view.md` | Tabbed content with PagerView |
| `pagination.md` | Page indicator (dot/number) |
| `steps.md` | Step progress indicator |

### `references/navigation/`
Read when you need to set up navigation, push/pop screens, show modals, bottom sheets, toasts, or loading overlays.

| File | Content |
|---|---|
| `index.md` | Table of contents |
| `navigator.md` | Navigator class — push, pop, modal, toast, loading APIs |
| `navigation-container.md` | Root app wrapper with provider tree |
| `screen.md` | Screen component — header types, scroll, keyboard |
| `bottom-tab.md` | Tab navigation with badges |
| `modal-screen.md` | Modal and bottom sheet rendering |
| `patterns.md` | Common recipes: multi-step, confirmation, async loading |

### `references/styles/`
Read when you need theme colors, spacing tokens, typography, shadows, grid layout, or style utilities.

| File | Content |
|---|---|
| `index.md` | Table of contents |
| `theme.md` | Theme system, semantic color tokens, custom themes |
| `colors.md` | Color palette (12+ families × 11 shades) |
| `spacing-radius.md` | Spacing scale and border radius constants |
| `shadow-opacity.md` | Platform shadows and opacity hex values |
| `styles-utility.md` | Pre-defined layout styles (row, flex, padding, etc.) |
| `grid-layout.md` | Container, Item, ContainerList, Card |

### `references/localization.md`
Read when you need to set up or use multi-language translation. Single file — covers setup, translate(), and language switching.

## App setup pattern

Every app using this package follows the same initialization:

```typescript
import {
  NavigationContainer,
  Navigator,
  Localization,
  defaultTheme,
} from '@passionui/react-native-foundation';

// 1. Create refs
const navigationRef = useRef(null);
const loadingRef = useRef(null);
const toastRef = useRef(null);

// 2. Create navigator instance
const navigator = new Navigator(navigationRef, loadingRef, toastRef);

// 3. Create localization (optional)
const localization = new Localization({
  resources: { en: { translation: enStrings }, vi: { translation: viStrings } },
  lng: 'en',
});

// 4. Render
<NavigationContainer
  navigator={navigator}
  localization={localization}
  theme={defaultTheme}
  screens={screens}   // { name, component } entries
/>
```

## Component structure convention

When creating new components in a project that uses this design system, follow the same pattern the library uses internally:

```
ComponentName/
├── index.tsx    — Implementation (access theme via useContext(ApplicationContext))
├── types.ts     — Props interface
└── styles.ts    — StyleSheet.create() definitions using Spacing, Radius, Shadow constants
```

**Key rules:**
- Always use `useContext(ApplicationContext)` for theme access — never hardcode colors
- Always use `Spacing`, `Radius`, `Shadow` constants — never hardcode layout numbers
- Always use the `Text` component with a `typography` preset — never use raw React Native `<Text>`
- Always use the `Icon` component — it handles Expo / RN CLI differences automatically
- Always use the `Image` component — it auto-selects the best image library available
- **Always wrap Input forms inside a `Card` component** — inputs need the Card's background surface to render correctly

## Decision guide

| Task | What to use |
|---|---|
| Show a new full-screen page | `navigator.push({ name, component })` |
| Show a centered dialog/popup | `navigator.showModal({ component })` or `Popup` component |
| Show a bottom drawer | `navigator.showBottomSheet({ component })` |
| Show a selection list | `SheetPicker` component |
| Show feedback messages | `navigator.showToast({ type, message })` |
| Show loading state | `navigator.showLoading()` / `navigator.hideLoading()` |
| Create a tab layout | `BottomTab` component |
| Create a responsive grid | `Container` + `Item` components |
| Create a scrollable grid | `ContainerList` component |
| Style text | `Text` with `typography` prop (largeTitle → caption2) |
| Build a form | Wrap `Input`, `CheckBox`, `Radio`, `Switch`, `Stepper` inside a `Card` |
| Show progress | `ProgressBar` with `percent` prop |
| Animate text | `LoopText` with `labels` array |
| Show step progress | `Steps` component |
| Paginated content | `Pagination` component |
