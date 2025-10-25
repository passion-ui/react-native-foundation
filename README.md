# @passionui/react-native-foundation

A comprehensive React Native design system for building beautiful cross-platform applications with a complete set of customizable UI components.

## ✨ Features

- 🎨 **25+ Production-Ready Components** - From basic buttons to advanced navigation
- 🎯 **TypeScript First** - Full type safety with TypeScript definitions
- 🌗 **Theming Support** - Customizable design tokens and theme system
- 🌍 **Internationalization** - Built-in i18n support with react-i18next
- 📱 **Cross-Platform** - Works seamlessly on iOS, Android, and Web
- 🚀 **Performance Optimized** - Reanimated 3 for smooth animations
- 📦 **Tree-Shakeable** - Import only what you need

## 📦 Installation

```sh
npm install @passionui/react-native-foundation
```

or with yarn:

```sh
yarn add @passionui/react-native-foundation
```

### Peer Dependencies

This library requires the following peer dependencies to be installed:

```sh
npm install react-native-reanimated react-native-gesture-handler react-native-svg react-native-vector-icons react-native-safe-area-context
```

For detailed setup instructions for peer dependencies, please refer to their official documentation.

## 🚀 Quick Start

```tsx
import React from 'react';
import {
  NavigationContainer,
  Screen,
  Button,
  Text,
  defaultTheme
} from '@passionui/react-native-foundation';

const App = () => {
  return (
    <NavigationContainer theme={defaultTheme}>
      <Screen title="Welcome">
        <Text variant="h1">Hello World!</Text>
        <Button
          title="Get Started"
          onPress={() => console.log('Pressed!')}
        />
      </Screen>
    </NavigationContainer>
  );
};

export default App;
```

## 📚 Components

### Layout & Structure
- **Layout** - Flexible container with responsive props
- **SizedBox** - Fixed size spacing component
- **Divider** - Horizontal/vertical separators

### Typography
- **Text** - Typography component with variants (h1-h6, body, caption)

### Buttons & Actions
- **Button** - Versatile button with variants (primary, outline, tonal, text)
- **IconButton** - Icon-only button component

### Form Controls
- **Input** - Text input with validation and styling
- **CheckBox** - Checkbox component
- **Radio** - Radio button component
- **Switch** - Toggle switch component

### Navigation
- **NavigationContainer** - Root navigation wrapper
- **StackScreen** - Stack navigation screens
- **BottomTab** - Bottom tab navigation
- **ModalScreen** - Modal presentations
- **DialogScreen** - Dialog overlays
- **BottomSheet** - Bottom sheet component

### Feedback
- **Toast** - Toast notifications
- **Loading** - Loading indicators and overlays
- **Skeleton** - Skeleton loading placeholders

### Data Display
- **Badge** - Notification badges
- **Tag** - Label tags with variants
- **Steps** - Step indicators
- **Stepper** - Number stepper control
- **Pagination** - Page navigation component

### Media
- **Image** - Optimized image component with caching
- **Icon** - Vector icons from react-native-vector-icons

### Utilities
- **TabView** - Swipeable tab views
- **SheetPicker** - Bottom sheet picker
- **LoopText** - Animated scrolling text

## 🎨 Theming

Customize the appearance of all components with your own theme:

```tsx
import { NavigationContainer, createTheme } from '@passionui/react-native-foundation';

const myTheme = createTheme({
  colors: {
    primary: {
      default: '#6366F1',
      container: '#E0E7FF',
    },
    background: {
      default: '#FFFFFF',
      surface: '#F9FAFB',
    },
  },
  typography: {
    fontFamily: 'YourCustomFont',
  },
});

const App = () => (
  <NavigationContainer theme={myTheme}>
    {/* Your app */}
  </NavigationContainer>
);
```

## 🌍 Localization

Built-in support for internationalization:

```tsx
import { Localization } from '@passionui/react-native-foundation';

const localization = new Localization({
  resources: {
    en: { translation: { welcome: 'Welcome' } },
    vi: { translation: { welcome: 'Chào mừng' } },
  },
  lng: 'en',
});

// Use in your components
const { t } = useTranslation();
console.log(t('welcome'));
```

## 📱 Platform Support

- **iOS**: 13.0+
- **Android**: API 21+ (Android 5.0+)
- **Web**: Modern browsers with ES6 support

## 🔧 Requirements

- React Native 0.70.0 or higher
- React 18.0.0 or higher
- Node.js 18+ (recommended)

## 📖 Documentation

For detailed documentation, component API, and examples, visit:
- [GitHub Repository](https://github.com/passion-ui/react-native-foundation)
- [Example App](./example) - Run the example app to see all components in action

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

- [Development workflow](CONTRIBUTING.md#development-workflow)
- [Sending a pull request](CONTRIBUTING.md#sending-a-pull-request)
- [Code of conduct](CODE_OF_CONDUCT.md)

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a history of changes.

## 📄 License

MIT © [Dũng (Wem)](https://github.com/wem2017)

## 🙏 Acknowledgments

Built with:
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)

---

Made with ❤️ by [Passion UI](https://github.com/passion-ui)
