# Screen

Base wrapper for every screen. Provides header, scroll, keyboard avoidance, and safe area handling.

```typescript
interface ScreenProps {
  headerType?: 'default' | 'surface' | 'extended' | 'none';
  scroll?: boolean;
  animatedHeader?: AnimatedHeader;
  footer?: ReactNode;
  fab?: ReactNode;        // floating action button
  backgroundColor?: string;
}
```

## Header types

| Type | Behavior |
|------|----------|
| `'default'` | Standard header with back button and title |
| `'surface'` | Header with custom background (e.g., image) |
| `'extended'` | Extended header for hero banners, content overlaps by an offset |
| `'none'` | No header at all |

## Animated headers

```typescript
interface AnimatedHeader {
  component?: ReactNode;    // custom header content
  height?: number;          // header height
  offset?: number;          // content overlap (-8, -24, -56)
}
```

## Screen ref

Screens expose a ref with scroll control:

```typescript
interface ScreenRef {
  scrollTo: (options: { y: number; animated?: boolean }) => void;
  scrollToEnd: (options?: { animated?: boolean }) => void;
  setSearchHeader: (config: SearchHeaderConfig) => void;
}
```

## Usage

```tsx
function ProfileScreen({ route }) {
  return (
    <Screen
      headerType="surface"
      scroll
      footer={<Button title="Save" onPress={save} full />}
    >
      <Text typography="title1">Profile</Text>
      {/* screen content */}
    </Screen>
  );
}

// No header
function FullScreen() {
  return (
    <Screen headerType="none">
      <View style={Styles.flexCenter}>
        <Text typography="title1">Centered Content</Text>
      </View>
    </Screen>
  );
}
```
