# Spacing & Radius

Consistent spacing and border radius scales used throughout all components.

## Spacing

```typescript
import { Spacing } from '@passionui/react-native-foundation';

Spacing.XXS  // 2
Spacing.XS   // 4
Spacing.S    // 8
Spacing.M    // 12
Spacing.L    // 16
Spacing.XL   // 24
Spacing.XXL  // 36
```

**Rule:** Never hardcode spacing numbers — always use `Spacing.*` constants for consistency.

### Usage

```tsx
<View style={{ padding: Spacing.L, marginBottom: Spacing.M }}>
  <SizedBox height={Spacing.S} />
</View>
```

## Radius

```typescript
import { Radius } from '@passionui/react-native-foundation';

Radius.XXS  // 2
Radius.XS   // 4
Radius.S    // 8
Radius.M    // 12
Radius.L    // 16
Radius.XL   // 24
Radius.XXL  // 36
```

### Usage

```tsx
<View style={{ borderRadius: Radius.M }}>
  <Image style={{ borderRadius: Radius.XL }} />
</View>
```
