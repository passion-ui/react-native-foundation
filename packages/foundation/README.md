# @passionui/react-native-foundation

A comprehensive React Native design system for building beautiful cross-platform applications with built-in navigation and theming.

## ✨ Features

### 🎨 **30+ Production-Ready Components**
Complete UI component library including:
- **Form Components**: Button, Input, CheckBox, Radio, Switch, Stepper
- **Display Components**: Text, Image, Badge, Tag, Skeleton, Divider
- **Navigation**: NavigationContainer, StackScreen, BottomTab, ModalScreen, BottomSheet
- **Feedback**: Toast, Loading, Popup, SheetPicker
- **Layout**: Layout, Grid, SizedBox
- **Advanced**: TabView, Pagination, Steps, LoopText

### 🎯 **TypeScript First**
- Full type safety with comprehensive TypeScript definitions
- Excellent IDE autocomplete support
- Type-safe component props and theming

### 🌗 **Built-in Theming System**
- Light and Dark mode support out of the box
- Customizable design tokens
- Context-based theme management
- Dynamic theme switching

### 🌍 **Internationalization (i18n)**
- Built-in localization support with react-i18next
- Easy language switching
- Multiple language support

### 🧭 **Navigation Components**
- Pre-built navigation wrappers for React Navigation
- Stack, Tab, Modal, and BottomSheet navigation
- Consistent navigation patterns across your app

### 🎭 **Flexible Image & Icon Adapters**
- **Expo**: Auto-detects and uses `expo-image`, `@expo/vector-icons`, `expo-linear-gradient`
- **React Native CLI**: Supports `@d11/react-native-fast-image`, `react-native-vector-icons`, `react-native-linear-gradient`
- Automatic platform detection and adapter selection

### 🚀 **Performance Optimized**
- Powered by Reanimated 4 for smooth 60fps animations
- Optimized re-renders with React Context
- Tree-shakeable architecture

### 📱 **Cross-Platform**
- iOS, Android, and Web compatible
- Platform-specific optimizations
- Consistent UX across platforms

## 📦 Installation

```bash
# Using npm
npm install @passionui/react-native-foundation

# Using yarn
yarn add @passionui/react-native-foundation

# Using pnpm
pnpm add @passionui/react-native-foundation
```

## 🚀 Setup for Expo Projects

If you're using **Expo**, install these dependencies:

```bash
npx expo install react-native-reanimated react-native-gesture-handler \
  react-native-svg react-native-safe-area-context react-native-pager-view \
  react-native-worklets expo-image expo-linear-gradient @expo/vector-icons
```

**Configure Reanimated** in your `babel.config.js`:

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'], // Must be last
  };
};
```

## 🚀 Setup for React Native CLI Projects

If you're using **React Native CLI**, install these dependencies:

```bash
npm install react-native-reanimated react-native-gesture-handler \
  react-native-svg react-native-safe-area-context react-native-pager-view \
  react-native-worklets @d11/react-native-fast-image react-native-vector-icons \
  react-native-linear-gradient
```

**iOS Setup:**

```bash
cd ios && pod install && cd ..
```

**Android Setup** - Add to `android/app/build.gradle`:

```gradle
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

**Configure Reanimated** in your `babel.config.js`:

```js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['react-native-reanimated/plugin'], // Must be last
};
```

## 📖 Usage

### Basic Example

```tsx
import { useRef } from 'react';
import {
  NavigationContainer,
  Navigator,
  Localization,
  Button,
  Text
} from '@passionui/react-native-foundation';

function HomeScreen() {
  return (
    <>
      <Text variant="h1">Hello World</Text>
      <Button onPress={() => alert('Pressed!')}>
        Click Me
      </Button>
    </>
  );
}

export default function App() {
  const navigator = new Navigator({
    ref: useRef(undefined),
    loadingRef: useRef(undefined),
    toastRef: useRef(undefined),
  });

  const localization = new Localization({
    resources: {
      en: {
        translation: {
          welcome: 'Welcome',
        },
      },
    },
    lng: 'en',
  });

  return (
    <NavigationContainer
      navigator={navigator}
      localization={localization}
      screen={HomeScreen}
    />
  );
}
```

### Theming

```tsx
import { useRef } from 'react';
import { NavigationContainer, Navigator, Localization } from '@passionui/react-native-foundation';

const customTheme = {
  colors: {
    primary: {
      default: '#007AFF',
      light: '#4DA2FF',
      container: '#99CAFF',
    },
    secondary: {
      default: '#5856D6',
      light: '#7D7BEB',
      container: '#B3B2F5',
    },
  },
  dark: false,
};

function App() {
  const navigator = new Navigator({
    ref: useRef(undefined),
    loadingRef: useRef(undefined),
    toastRef: useRef(undefined),
  });

  const localization = new Localization({
    resources: {
      en: { translation: { welcome: 'Welcome' } },
    },
    lng: 'en',
  });

  return (
    <NavigationContainer
      navigator={navigator}
      localization={localization}
      theme={customTheme}
      screen={HomeScreen}
    />
  );
}
```

### Localization

```tsx
import { useRef } from 'react';
import { NavigationContainer, Navigator, Localization } from '@passionui/react-native-foundation';

export default function App() {
  const navigator = new Navigator({
    ref: useRef(undefined),
    loadingRef: useRef(undefined),
    toastRef: useRef(undefined),
  });

  const localization = new Localization({
    resources: {
      en: {
        translation: {
          welcome: 'Welcome',
          login: 'Login',
        },
      },
      vi: {
        translation: {
          welcome: 'Chào mừng',
          login: 'Đăng nhập',
        },
      },
    },
    lng: 'en',
    fallbackLng: 'en',
  });

  // Change language dynamically
  // localization.changeLanguage('vi');

  return (
    <NavigationContainer
      navigator={navigator}
      localization={localization}
      screen={HomeScreen}
    />
  );
}
```

## 📚 Documentation

For more detailed documentation and examples, visit the [main repository](https://github.com/passion-ui/react-native-foundation).

## 🤝 Contributing

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for how to contribute to this project.

## 📝 Changelog

See [CHANGELOG.md](../../CHANGELOG.md) for release history.

## 📄 License

MIT © [Dũng (Wem)](https://github.com/wem2017)

