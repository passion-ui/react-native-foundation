# NavigationContainer

The root wrapper component that composes all providers.

## Provider tree

```
NavigationContainer
├── SafeAreaProvider
├── GestureHandlerRootView
├── I18nextProvider
├── ApplicationContext.Provider
├── Stack.Navigator
│   ├── Stack group → StackScreen (normal screens)
│   ├── Dialog group → DialogScreen (transparent modals)
│   └── Modal group → ModalScreen (full modals + bottom sheets)
├── LoadingView (overlay)
└── ToastView (overlay)
```

## Props

```typescript
type NavigationContainerProps = {
  navigator: Navigator;                    // Navigator instance
  screen: React.FC<ScreenContainerProps>;  // root screen component
  theme: Theme;                            // theme object
  params?: { string: any };               // initial params for root screen
  localization: Localization;              // Localization instance
};
```

## Setup

```typescript
import {
  NavigationContainer,
  Navigator,
  Localization,
  defaultTheme,
} from '@passionui/react-native-foundation';

export default function App() {
  const navigationRef = useRef(null);
  const loadingRef = useRef(null);
  const toastRef = useRef(null);

  const navigator = useMemo(
    () => new Navigator({ ref: navigationRef, loadingRef, toastRef }),
    []
  );

  const localization = new Localization({
    resources: { en: { translation: en }, vi: { translation: vi } },
    lng: 'en',
  });

  return (
    <NavigationContainer
      navigator={navigator}
      theme={defaultTheme}
      localization={localization}
      screen={HomeScreen}
    />
  );
}
```
