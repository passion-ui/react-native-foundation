# Styles Utility

Pre-defined StyleSheet with common layout patterns.

```typescript
import { Styles } from '@passionui/react-native-foundation';
```

## Flex

```typescript
Styles.flex           // { flex: 1 }
Styles.full           // { width: '100%', height: '100%' }
Styles.fullWidth      // { width: '100%' }
Styles.fullHeight     // { height: '100%' }
Styles.flexRow        // { flex: 1, flexDirection: 'row' }
Styles.flexCenter     // { flex: 1, alignItems: 'center', justifyContent: 'center' }
Styles.flexStart      // { flex: 1, alignItems: 'flex-start', justifyContent: 'center' }
Styles.flexEnd        // { flex: 1, alignItems: 'flex-end', justifyContent: 'center' }
Styles.selfCenter     // { alignSelf: 'center' }
```

## Row layouts

```typescript
Styles.row            // { flexDirection: 'row', alignItems: 'center' }
Styles.rowSpace       // { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }
Styles.rowSpaceStart  // { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }
Styles.rowSpaceEnd    // { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }
Styles.rowCenter      // { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }
Styles.rowWrap        // { flexDirection: 'row', flexWrap: 'wrap' }
```

## Column layouts

```typescript
Styles.columnSpace       // { flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }
Styles.columnSpaceStart  // { flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between' }
Styles.columnSpaceEnd    // { flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between' }
Styles.columnCenter      // { flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }
Styles.columnCenterLeft  // { flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }
Styles.columnCenterRight // { flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }
```

## Padding helpers

```typescript
Styles.paddingXS            // { padding: 4 }
Styles.paddingS             // { padding: 8 }
Styles.paddingM             // { padding: 12 }
Styles.paddingL             // { padding: 16 }
Styles.paddingXL            // { padding: 24 }
Styles.paddingHorizontalXS  // { paddingHorizontal: 4 }
Styles.paddingHorizontalS   // { paddingHorizontal: 8 }
Styles.paddingHorizontalM   // { paddingHorizontal: 12 }
Styles.paddingHorizontalL   // { paddingHorizontal: 16 }
Styles.paddingHorizontalXL  // { paddingHorizontal: 24 }
Styles.paddingVerticalXS    // { paddingVertical: 4 }
Styles.paddingVerticalS     // { paddingVertical: 8 }
Styles.paddingVerticalM     // { paddingVertical: 12 }
Styles.paddingVerticalL     // { paddingVertical: 16 }
Styles.paddingVerticalXL    // { paddingVertical: 24 }
```

## Margin helpers

```typescript
Styles.marginXS       // { margin: 4 }
Styles.marginS        // { margin: 8 }
Styles.marginM        // { margin: 12 }
Styles.marginL        // { margin: 16 }
Styles.marginXL       // { margin: 24 }
```

## Border radius helpers

```typescript
Styles.borderRadiusXS  // { borderRadius: 4 }
Styles.borderRadiusS   // { borderRadius: 8 }
Styles.borderRadiusM   // { borderRadius: 12 }
Styles.borderRadiusL   // { borderRadius: 16 }
Styles.borderRadiusXL  // { borderRadius: 24 }
```

## Text utilities

```typescript
Styles.textCenter      // { textAlign: 'center' }
Styles.textCapitalize  // { textTransform: 'capitalize' }
Styles.textLineThrough // { textDecorationLine: 'line-through' }
```

## Usage example

```tsx
<View style={[Styles.row, Styles.paddingL]}>
  <Text style={Styles.flex}>Title</Text>
  <IconButton icon="chevron-right" onPress={() => {}} />
</View>

<View style={[Styles.flexCenter, Styles.full]}>
  <Text typography="title1">Centered Content</Text>
</View>

<View style={[Styles.rowSpace, Styles.paddingHorizontalM]}>
  <Text typography="subhead">Label</Text>
  <Switch value={on} onChange={setOn} />
</View>
```
