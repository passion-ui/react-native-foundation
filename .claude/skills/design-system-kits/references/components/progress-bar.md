# ProgressBar

Animated horizontal progress indicator.

```typescript
interface ProgressBarProps extends ViewProps {
  percent: number;   // 0–100
}
```

- 4px height, 200ms animation
- Uses `theme.colors.primary.default` for progress fill
- Uses `theme.colors.background.disable` for track

## Usage

```tsx
<ProgressBar percent={75} />
<ProgressBar percent={uploadProgress} />
```
