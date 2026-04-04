# Colors Palette

A comprehensive color palette with 12+ families, each having 11 shades (index 0–10, where 5 is the base).

```typescript
import { Colors } from '@passionui/react-native-foundation';
```

## Color families

```typescript
Colors.pink[5]      // base pink
Colors.violet[3]    // lighter violet
Colors.indigo[7]    // darker indigo
Colors.blue[5]      // base blue
Colors.mint[5]      // base mint
Colors.green[5]     // base green
Colors.lime[5]      // base lime
Colors.yellow[5]    // base yellow
Colors.gold[5]      // base gold
Colors.orange[5]    // base orange
Colors.red[5]       // base red
```

Shade index guide: 0 = lightest, 5 = base, 10 = darkest.

## Utility colors

```typescript
Colors.transparent
Colors.white
Colors.black
Colors.black_01 ... Colors.black_18  // 18 opacity levels of black
```

## Color manipulation

```typescript
Colors.lighten(color: string, amount: number): string
// Uses tinycolor2 to lighten a color
Colors.lighten('#007AFF', 20)  // lighter blue
```

## Usage

```tsx
<View style={{ backgroundColor: Colors.blue[1] }}>
  <Text color={Colors.blue[8]}>Dark blue text on light blue bg</Text>
</View>

<Tag label="Sale" color={Colors.red[5]} />
```
