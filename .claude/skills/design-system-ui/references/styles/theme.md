# Theme & ApplicationContext

## Theme Type

```typescript
type Theme = {
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
  font: string;            // 'SFProText' | 'Raleway' | 'Poppins'
  assets?: {
    headerBackground?: ImageSource;
  };
};
```

## ApplicationContext

```typescript
type Context = {
  theme: Theme;
  navigator?: Navigator;
  translate: (key: string) => string;
};

// Usage:
const { theme, navigator, translate } = useContext(ApplicationContext);
```

## Default Themes

```typescript
import { defaultTheme, defaultDarkTheme } from '@passionui/react-native-foundation';
```

**Light (`defaultTheme`):** Primary gold, secondary mint, light gray background, dark text, font SFProText.

**Dark (`defaultDarkTheme`):** Same primary/secondary, black background, near-white text.

## Color Token Usage

```typescript
theme.colors.primary.default     // Main brand color
theme.colors.primary.light       // Lighter variant
theme.colors.primary.container   // Lightest / container background
// Same for: secondary, success, warning, error

theme.colors.background.default  // Screen background
theme.colors.background.surface  // Card/surface background
theme.colors.background.disable  // Disabled element background

theme.colors.text.default        // Primary text
theme.colors.text.secondary      // Secondary text
theme.colors.text.hint           // Placeholder/hint
theme.colors.text.disable        // Disabled text

theme.colors.border.default      // Normal borders
theme.colors.border.disable      // Disabled borders
```
