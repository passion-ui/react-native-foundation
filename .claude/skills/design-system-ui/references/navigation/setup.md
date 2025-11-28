# App Setup (NavigationContainer)

```typescript
import { useRef, useState } from 'react';
import {
  NavigationContainer, Navigator, Localization, defaultTheme,
} from '@passionui/react-native-foundation';

const App = () => {
  const [theme, setTheme] = useState(defaultTheme);

  const navigator = new Navigator({
    ref: useRef(undefined),
    loadingRef: useRef(undefined),
    toastRef: useRef(undefined),
  });

  const localization = new Localization({
    resources: { en: { translation: {...} }, vi: { translation: {...} } },
    lng: 'en',
  });

  return (
    <NavigationContainer
      navigator={navigator}
      theme={theme}
      screen={MainTab}
      localization={localization}
    />
  );
};
```

## Props

```typescript
type NavigationContainerProps = {
  navigator: Navigator;
  screen: React.FC<ScreenContainerProps>;
  theme: Theme;
  params?: { [string]: any };
  localization: Localization;
};
```

Internally creates a React Navigation stack with routes: `Stack`, `Dialog`, `Modal`, plus loading and toast overlays.
