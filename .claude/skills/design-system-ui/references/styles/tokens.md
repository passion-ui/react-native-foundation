# Design Tokens (Spacing, Radius, Shadow, Styles)

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

## Shadow

```typescript
import { Shadow } from '@passionui/react-native-foundation';

Shadow.light   // Platform-specific light shadow
Shadow.dark    // Darker variant
```

## Utility Styles

```typescript
import { Styles } from '@passionui/react-native-foundation';

Styles.flex           // { flex: 1 }
Styles.row            // { flexDirection: 'row' }
Styles.rowCenter      // { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }
Styles.rowSpace       // { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }
Styles.columnCenter   // { alignItems: 'center', justifyContent: 'center' }
Styles.paddingM       // { padding: Spacing.M }
Styles.paddingVerticalM  // { paddingVertical: Spacing.M }
```

## Typography Scale

| Typography | Size | Weight |
|-----------|------|--------|
| `largeTitle` | 34pt | bold |
| `title1` | 28pt | bold |
| `title2` | 22pt | bold |
| `title3` | 20pt | semibold |
| `headline` | 17pt | semibold |
| `body` | 17pt | regular |
| `callout` | 16pt | regular |
| `subhead` | 15pt | regular |
| `footnote` | 13pt | regular |
| `caption1` | 12pt | regular |
| `caption2` | 11pt | regular |

Font weights: `ultralight`, `thin`, `light`, `regular`, `medium`, `semibold`, `bold`, `heavy`, `black`

## Font System

Three families: **SFProText** (default), **Raleway**, **Poppins**. Set in `theme.font`, all `Text` components use it automatically. Load via `expo-font` in app entry.
