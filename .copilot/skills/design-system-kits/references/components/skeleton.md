# Skeleton

Shimmer loading placeholder.

```typescript
type SkeletonTypes = {
  style?: StyleProp<ViewStyle>;
};
```

- LinearGradient-based shimmer animation
- 1000ms loop with Easing.linear
- Uses `theme.colors.background.disable` for color

## Usage

```tsx
<Skeleton style={{ width: 200, height: 20, borderRadius: Radius.S }} />
<Skeleton style={{ width: 100, height: 100, borderRadius: Radius.M }} />
<Skeleton style={{ width: '100%', height: 16, borderRadius: Radius.XS }} />
```
