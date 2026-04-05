# Screen

Base wrapper for every screen. Provides header, scroll, keyboard avoidance, and safe area handling.

```typescript
interface ScreenProps extends ViewProps {
  navigation: StackNavigationProp<any>;     // REQUIRED — from react-navigation
  headerType?: 'default' | 'surface' | 'extended' | 'none';
  scrollable?: boolean;                     // enables ScrollView wrapping
  enableKeyboardAvoidingView?: boolean;     // keyboard avoiding behavior
  edges?: Edges;                            // safe area edges
  animatedHeader?: AnimatedHeader;
  scrollViewProps?: ScrollViewProps;         // props for underlying ScrollView
  headerComponent?: ReactNode;              // custom header component
  footerComponent?: ReactNode;              // footer at bottom of screen
  floatingComponent?: ReactNode;            // floating action button / overlay
  layoutOffset?: -8 | -24 | -56;           // content overlap on extended header
  backgroundColor?: string;
  animatedValue?: Animated.Value;
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
type AnimatedHeader = {
  useBackHeader?: boolean;
  headerTintColor?: string;
  headerTitle?: (props?: any) => React.ReactElement;
  component?: (props?: any) => React.ReactElement;
};
```

## Screen ref

Screens expose a ref extending ScrollView with additional methods:

```typescript
type ScreenRef = {
  setSearchHeader: (params: HeaderSearchProps) => void;
} & ScrollView;
```

## Usage

```tsx
function ProfileScreen({ navigation }) {
  return (
    <Screen
      navigation={navigation}
      headerType="surface"
      scrollable
      footerComponent={<Button title="Save" onPress={save} full />}
    >
      <Text typography="title1">Profile</Text>
      {/* screen content */}
    </Screen>
  );
}

// Extended header with offset
function HeroScreen({ navigation }) {
  return (
    <Screen
      navigation={navigation}
      headerType="extended"
      scrollable
      layoutOffset={-56}
      floatingComponent={<IconButton icon="plus" onPress={handleAdd} />}
    >
      <Card>
        <Text typography="title2">Content overlapping header</Text>
      </Card>
    </Screen>
  );
}

// No header
function FullScreen({ navigation }) {
  return (
    <Screen navigation={navigation} headerType="none">
      <View style={Styles.flexCenter}>
        <Text typography="title1">Centered Content</Text>
      </View>
    </Screen>
  );
}
```
