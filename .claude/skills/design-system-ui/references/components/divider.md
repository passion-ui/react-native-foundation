# Divider & SizedBox

## Divider

```typescript
type DividerProps = ViewProps & {
  size?: number;                          // default: 1
  type?: 'line' | 'dash';
  dashSpecs?: { dashGap?: number; useDot: boolean; dotColor?: string };
  direction?: 'vertical' | 'horizontal'; // default: 'horizontal'
  color?: string;
};
```

## SizedBox

```typescript
type SizedBoxProps = ViewProps & {
  width?: number;
  height?: number;
};
```

Spacer component. Use with tokens: `<SizedBox height={Spacing.M} />`.
