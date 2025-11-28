# Text

```typescript
type Typography =
  | 'largeTitle' | 'title1' | 'title2' | 'title3'
  | 'headline' | 'body' | 'callout' | 'subhead'
  | 'footnote' | 'caption1' | 'caption2';

type FontWeight =
  | 'ultralight' | 'thin' | 'light' | 'regular'
  | 'medium' | 'semibold' | 'bold' | 'heavy' | 'black';

type TextProps = RNTextProps & {
  typography?: Typography;          // default: 'body'
  color?: string;                   // default: theme.colors.text.default
  fontWeight?: FontWeight;
};
```

Automatically uses the theme's font family and maps `fontWeight` to the correct font file.
