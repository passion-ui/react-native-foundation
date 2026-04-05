# Badge

Small status indicator — dot or label.

```typescript
interface BadgeProps extends ViewProps {
  label?: string;           // text displayed on badge (default: 'Label')
  type?: 'default' | 'dot'; // display type (default: 'default')
}
```

- `dot`: Small circle indicator (no text)
- `default`: Rectangle with label text (caption2 bold, white)
- Uses `theme.colors.error.default` for background

## Usage

```tsx
<Badge type="dot" />
<Badge label="3" />
<Badge label="New" />
```
