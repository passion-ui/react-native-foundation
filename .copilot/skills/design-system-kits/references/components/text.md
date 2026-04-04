# Text

Typography component with 11 presets and multi-font support.

```typescript
type Typography = 'largeTitle' | 'title1' | 'title2' | 'title3' | 'headline'
  | 'body' | 'callout' | 'subhead' | 'footnote' | 'caption1' | 'caption2';

type FontWeight = 'ultralight' | 'thin' | 'light' | 'regular' | 'medium'
  | 'semibold' | 'bold' | 'heavy' | 'black';

interface TextProps extends RNTextProps {
  typography?: Typography;
  color?: string;
  fontWeight?: FontWeight;
}
```

## Typography scale

| Preset | Font size |
|--------|-----------|
| largeTitle | 34px |
| title1 | 28px |
| title2 | 22px |
| title3 | 20px |
| headline | 17px (semibold) |
| body | 17px |
| callout | 16px |
| subhead | 15px |
| footnote | 13px |
| caption1 | 12px |
| caption2 | 11px |

**Supported fonts:** SFProText (default), Raleway, Poppins — auto-selected from theme.

## Usage

```tsx
<Text typography="title1" fontWeight="bold">Welcome</Text>
<Text typography="body">Regular body text</Text>
<Text typography="caption1" color={theme.colors.text.hint}>Hint text</Text>
```

## Exported utility

```typescript
import { getTypoStyle } from '@passionui/react-native-foundation';
// Returns the style object for a given typography preset + font
```
