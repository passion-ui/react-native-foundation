# LoopText

```typescript
type LoopTextProps = TextProps & {
  labels: string[];                       // required — strings to cycle
  delay?: number;                         // default: 2000ms
  duration?: number;                      // default: 500ms
};
```

Animated text that fades between labels in sequence.
