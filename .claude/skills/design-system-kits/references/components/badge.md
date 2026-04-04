# Badge

Small status indicator — dot or label.

```typescript
interface BadgeProps extends ViewProps {
  label?: string;
  type?: 'default' | 'dot' | 'label';
}
```

- `dot`: Small circle (no text)
- `default`: Rectangle with label text
- Uses `theme.colors.error.default` for background

## Usage

```tsx
<Badge type="dot" />
<Badge label="3" />
<Badge label="New" type="label" />
```
