# LoopText

Animated cycling text with fade + translate.

```typescript
interface LoopTextProps extends TextProps {
  labels: string[];
  delay?: number;       // ms between cycles
  duration?: number;    // ms per animation
}
```

- Fade in/out with vertical translate (translateY: -10 → 0 → 10)
- Continuous loop through label array

## Usage

```tsx
<LoopText
  labels={['Welcome', 'Bienvenue', 'Willkommen', 'Chào mừng']}
  delay={2000}
  duration={500}
  typography="title2"
/>
```
