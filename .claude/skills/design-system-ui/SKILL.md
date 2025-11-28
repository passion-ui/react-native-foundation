---
name: design-system-ui
description: >
  How to build React Native mobile UI using @passionui/react-native-foundation design system.
  Use this skill whenever the user wants to create screens, components, layouts, forms, navigation flows,
  or any UI for a React Native app that uses @passionui/react-native-foundation. Also trigger when the user
  mentions building mobile UI, creating screens, adding components like buttons/inputs/modals, setting up
  navigation, theming, or working with the foundation library — even if they don't name the library explicitly.
  Do NOT trigger for general React Native questions unrelated to this specific design system.
---

# Building UI with @passionui/react-native-foundation

25+ themed components, React Navigation v7 wrapper, 12-column grid, i18n — all via `ApplicationContext`.

## Reference File Map

Read only the files you need for the current task:

### `references/styles/`
| File | Content |
|------|---------|
| `theme.md` | Theme type, ApplicationContext, default themes, color token usage |
| `colors.md` | Color palette (12+ families, 11 shades each) |
| `tokens.md` | Spacing, Radius, Shadow, utility Styles, typography scale, font system |
| `theme-switching.md` | Dynamic theme/language switching via DeviceEventEmitter |

### `references/navigation/`
| File | Content |
|------|---------|
| `setup.md` | NavigationContainer, app bootstrap pattern |
| `navigator.md` | Navigator API (push, pop, present, showModal, showBottomSheet, toast, loading) |
| `screen.md` | Screen component, header types, animated/search headers |
| `bottom-tab.md` | BottomTab setup |
| `headers.md` | NavigationButton, HeaderTitle, HeaderBackground |
| `localization.md` | Localization class, translate(), language switching |

### `references/components/`
| File | Content |
|------|---------|
| `button.md` | Button, IconButton |
| `text.md` | Text (typography, fontWeight) |
| `icon.md` | Icon (MaterialCommunityIcons, FontAwesome, Image) |
| `input.md` | Input, InputTextArea, InputSearch, InputOTP, InputMoney, InputDropDown, InputRef |
| `selection.md` | CheckBox, Radio, Switch |
| `image.md` | Image (adapter: expo-image / fast-image) |
| `badge.md` | Badge |
| `tag.md` | Tag |
| `divider.md` | Divider, SizedBox |
| `skeleton.md` | Skeleton |
| `stepper.md` | Stepper (number +/-) |
| `steps.md` | Steps (timeline/progress) |
| `pagination.md` | Pagination (dots/numbers) |
| `tab-view.md` | TabView (pager tabs) |
| `loop-text.md` | LoopText (animated cycling) |
| `popup.md` | Popup (modal dialog) |
| `sheet-picker.md` | SheetPicker (bottom sheet list) |
| `toast.md` | Toast |
| `progress-bar.md` | ProgressBar |
| `layout.md` | Container, Item, ContainerList (12-column grid) |

## Core Rules

- **All imports** from `'@passionui/react-native-foundation'` — never import from subpaths
- **Access context** via `const { theme, navigator, translate } = useContext(ApplicationContext);`
- **Use design tokens** (`Spacing`, `Radius`, `Colors`, `Shadow`, `Styles`) instead of raw numbers — see `references/styles/tokens.md`
- **Use semantic theme colors** (`theme.colors.primary.default`, `theme.colors.text.default`, etc.) instead of hardcoded colors — see `references/styles/theme.md`

## How to Use References

1. Identify which components/topics the task needs from the Reference File Map above
2. Read only those specific reference files
3. Each file contains: import examples, full props/API, and usage patterns
