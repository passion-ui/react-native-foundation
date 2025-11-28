# Screen Component

Wraps every screen with keyboard handling, scrolling, safe areas, and headers.

## Basic Usage

```typescript
const MyScreen: React.FC<ScreenContainerProps> = ({ navigation }) => (
  <Screen navigation={navigation} scrollable>
    <Text typography="title1">Hello</Text>
  </Screen>
);
```

## Full Props

```typescript
type ScreenProps = ViewProps & {
  navigation: StackNavigationProp<any>;
  enableKeyboardAvoidingView?: boolean;
  scrollable?: boolean;
  edges?: Edges;
  headerType?: 'default' | 'surface' | 'extended' | 'none';
  animatedHeader?: AnimatedHeader;
  scrollViewProps?: ScrollViewProps;
  headerComponent?: ReactNode;              // below header, above content
  footerComponent?: ReactNode;              // sticky bottom
  floatingComponent?: ReactNode;            // absolute positioned overlay
  layoutOffset?: -8 | -24 | -56;
  backgroundColor?: string;
  animatedValue?: Animated.Value;
};
```

## Header Types

| Type | Behavior |
|------|----------|
| `default` | Standard translucent header |
| `surface` | Solid background (`theme.colors.background.surface`) |
| `extended` | Large header (doubled height) |
| `none` | No header bar |

## Animated Header

```typescript
<Screen navigation={navigation} scrollable
  animatedHeader={{
    useBackHeader: true,
    headerTintColor: Colors.white,
    component: () => (
      <ImageBackground source={headerImage} style={{ height: 200 }}>
        <Text typography="title1" color="white">Welcome</Text>
      </ImageBackground>
    ),
  }}
>
  {/* Content */}
</Screen>
```

```typescript
type AnimatedHeader = {
  useBackHeader?: boolean;
  headerTintColor?: string;
  headerTitle?: (props?: any) => React.ReactElement;
  component?: (props?: any) => React.ReactElement;
};
```

## Search Header

```typescript
const screenRef = useRef<ScreenRef>(null);

useEffect(() => {
  screenRef.current?.setSearchHeader({
    useBackHeader: true,
    placeholder: 'Search...',
    defaultValue: '',
    onChangeText: (text) => handleSearch(text),
    headerRight: () => <IconButton icon="filter" onPress={openFilter} />,
  });
}, []);

<Screen ref={screenRef} navigation={navigation} scrollable />
```

## Setting Header Options

```typescript
useEffect(() => {
  navigation.setOptions({
    title: 'My Screen Title',
    headerRight: () => <NavigationButton icon="plus" onPress={addItem} badge={count} />,
  });
}, []);
```
