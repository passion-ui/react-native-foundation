# Theme System

Every component accesses the theme through React Context.

```typescript
import { useContext } from 'react';
import { ApplicationContext } from '@passionui/react-native-foundation';

function MyComponent() {
  const { theme } = useContext(ApplicationContext);
  // theme.colors.primary.default, theme.dark, theme.font, etc.
}
```

## Theme type

```typescript
interface Theme {
  dark: boolean;
  colors: {
    primary:    { default: string; light: string; container: string };
    secondary:  { default: string; light: string; container: string };
    background: { default: string; surface: string; disable: string };
    text:       { default: string; secondary: string; hint: string; disable: string };
    border:     { default: string; disable: string };
    success:    { default: string; light: string; container: string };
    warning:    { default: string; light: string; container: string };
    error:      { default: string; light: string; container: string };
  };
  font: string;                        // 'SFProText' | 'Raleway' | 'Poppins'
  assets?: { headerBackground?: any }; // optional header background image
}
```

## Semantic color usage guide

| Token | When to use |
|-------|------------|
| `primary.default` | Main brand color — buttons, links, active indicators |
| `primary.light` | Lighter variant — hover states, subtle highlights |
| `primary.container` | Background for primary-colored containers |
| `secondary.default` | Accent color — secondary actions, complementary UI |
| `background.default` | Page/screen background |
| `background.surface` | Card/elevated surface background |
| `background.disable` | Disabled element backgrounds, skeleton placeholders |
| `text.default` | Primary text color |
| `text.secondary` | Secondary/subtitle text |
| `text.hint` | Placeholder text, hints |
| `text.disable` | Disabled text |
| `border.default` | Standard borders |
| `border.disable` | Disabled/inactive borders |
| `success.default` | Success states, positive feedback |
| `warning.default` | Warning states, caution feedback |
| `error.default` | Error states, destructive actions |

## Built-in themes

```typescript
import { defaultTheme, defaultDarkTheme } from '@passionui/react-native-foundation';
```

- `defaultTheme` — Light mode (gold primary, mint secondary)
- `defaultDarkTheme` — Dark mode (same accent colors, dark backgrounds)

## Custom theme example

```typescript
const customTheme: Theme = {
  dark: false,
  colors: {
    primary: { default: '#007AFF', light: '#4DA3FF', container: '#E5F1FF' },
    secondary: { default: '#34C759', light: '#7EDB95', container: '#E8F8EC' },
    background: { default: '#FFFFFF', surface: '#F5F5F5', disable: '#E0E0E0' },
    text: { default: '#1A1A1A', secondary: '#666666', hint: '#999999', disable: '#CCCCCC' },
    border: { default: '#E0E0E0', disable: '#F0F0F0' },
    success: { default: '#34C759', light: '#A8E6B8', container: '#E8F8EC' },
    warning: { default: '#FF9500', light: '#FFCC80', container: '#FFF3E0' },
    error: { default: '#FF3B30', light: '#FF8A80', container: '#FFE5E3' },
  },
  font: 'Poppins',
};
```
