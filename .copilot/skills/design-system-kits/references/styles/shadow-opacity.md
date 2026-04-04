# Shadow & Opacity

## Shadow

Platform-specific shadow styles.

```typescript
import { Shadow } from '@passionui/react-native-foundation';

Shadow.dark   // Stronger shadow
Shadow.light  // Subtle shadow
```

Returns platform-specific properties:
- **iOS**: `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowRadius`
- **Android**: `elevation`

### Usage

```tsx
<View style={[{ backgroundColor: theme.colors.background.surface }, Shadow.light]}>
  {/* elevated card */}
</View>
```

## Opacity

Hex opacity values for appending to color strings.

```typescript
import { Opacity } from '@passionui/react-native-foundation';

Opacity[0]    // '00' (fully transparent)
Opacity[10]   // '1A'
Opacity[20]   // '33'
Opacity[50]   // '80' (half transparent)
Opacity[80]   // 'CC'
Opacity[100]  // 'FF' (fully opaque)
```

### Usage

```tsx
const overlayColor = `${Colors.black}${Opacity[50]}`;  // #00000080
const fadedPrimary = `${theme.colors.primary.default}${Opacity[20]}`;
```
