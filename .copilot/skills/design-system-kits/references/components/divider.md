# Divider

Horizontal or vertical line separator.

```typescript
interface DividerProps extends ViewProps {
  size?: number;
  type?: 'line' | 'dash';
  dashSpecs?: { dashGap?: number; useDot: boolean; dotColor?: string };
  direction?: 'vertical' | 'horizontal';
  color?: string;
}
```

- Dynamic dash calculation based on container size
- Optional dot decorations for dash type

## Usage

```tsx
<Divider />
<Divider type="dash" />
<Divider direction="vertical" size={40} />
<Divider type="dash" dashSpecs={{ useDot: true, dotColor: Colors.red[5] }} />
```
