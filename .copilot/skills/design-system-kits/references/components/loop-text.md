# LoopText

Animated cycling text with fade + translate.

```typescript
interface LoopTextProps extends TextProps {
  labels: string[];       // array of texts to cycle through
  delay?: number;         // ms between cycles (default: 2000)
  duration?: number;      // ms per animation (default: 500)
}
```

- Extends React Native `TextProps` (not the custom Text component)
- Fade in/out with vertical translate (translateY: -10 → 0 → 10)
- Continuous loop through label array
- Internally uses `getTypoStyle(theme, 'caption1', 'medium')` for default styling

## Usage

```tsx
<LoopText
  labels={['Welcome', 'Bienvenue', 'Willkommen', 'Chào mừng']}
  delay={2000}
  duration={500}
/>
<LoopText
  labels={['Searching...', 'Loading...', 'Almost ready...']}
  style={{ fontSize: 18, fontWeight: 'bold' }}
/>
```
