# Styles Utility

Pre-defined StyleSheet with common layout patterns.

```typescript
import { Styles } from '@passionui/react-native-foundation';
```

## Flex

```typescript
Styles.flex           // { flex: 1 }
Styles.full           // { flex: 1, width: '100%', height: '100%' }
Styles.fullWidth      // { width: '100%' }
Styles.fullHeight     // { height: '100%' }
Styles.flexRow        // { flexDirection: 'row' }
Styles.flexCenter     // { alignItems: 'center', justifyContent: 'center' }
Styles.flexStart      // { alignItems: 'flex-start' }
Styles.flexEnd        // { alignItems: 'flex-end' }
```

## Row layouts

```typescript
Styles.row            // { flexDirection: 'row', alignItems: 'center' }
Styles.rowSpace       // { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }
Styles.rowCenter      // { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }
Styles.rowWrap        // { flexDirection: 'row', flexWrap: 'wrap' }
```

## Column layouts

```typescript
Styles.columnSpace    // { justifyContent: 'space-between' }
Styles.columnCenter   // { alignItems: 'center', justifyContent: 'center' }
```

## Padding helpers

```typescript
Styles.paddingXS      // { padding: 4 }
Styles.paddingS       // { padding: 8 }
Styles.paddingM       // { padding: 12 }
Styles.paddingL       // { padding: 16 }
Styles.paddingXL      // { padding: 24 }
```

## Margin helpers

```typescript
Styles.marginXS       // { margin: 4 }
Styles.marginS        // { margin: 8 }
Styles.marginM        // { margin: 12 }
Styles.marginL        // { margin: 16 }
Styles.marginXL       // { margin: 24 }
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

<View style={[Styles.rowSpace, Styles.paddingM]}>
  <Text typography="subhead">Label</Text>
  <Switch value={on} onChange={setOn} />
</View>
```
