# SizedBox

Simple spacer for adding gaps.

```typescript
interface SizedBoxProps extends ViewProps {
  width?: number;
  height?: number;
}
```

- Overflow hidden, centered content
- Use with `Spacing.*` constants

## Usage

```tsx
<SizedBox height={Spacing.L} />
<SizedBox width={Spacing.M} height={Spacing.M} />
<SizedBox height={Spacing.XL} />
```
