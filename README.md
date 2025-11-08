# @passionui/react-native-foundation

A comprehensive React Native design system for building beautiful cross-platform applications.

## ✨ Features

- 🎨 **25+ Production-Ready Components** - Complete UI component library
- 🎯 **TypeScript First** - Full type safety and excellent IDE support
- 🌗 **Theming Support** - Customizable design tokens with dark mode
- 🌍 **Internationalization** - Built-in i18n support with react-i18next
- 📱 **Cross-Platform** - iOS, Android, and Web compatible
- 🚀 **Performance Optimized** - Powered by Reanimated for smooth animations
- 📦 **Tree-Shakeable** - Import only what you need

## 📦 Quick Start

### Installation

```bash
npm install @passionui/react-native-foundation
# or
yarn add @passionui/react-native-foundation
```

### Peer Dependencies

```bash
npm install react-native-reanimated react-native-gesture-handler react-native-svg \
  react-native-safe-area-context react-native-pager-view react-native-worklets
```

### Basic Usage

```tsx
import { Button, Input, Text } from '@passionui/react-native-foundation';

function App() {
  return (
    <>
      <Text variant="h1">Hello World</Text>
      <Input placeholder="Enter your name" />
      <Button onPress={() => alert('Pressed!')}>
        Click Me
      </Button>
    </>
  );
}
```

## 📚 Documentation

- **[API Reference](./docs)** - Component APIs and props
- **[Example App](./example)** - Interactive demos and examples
- **[Contributing](./CONTRIBUTING.md)** - How to contribute to this project
- **[Release Process](./RELEASE.md)** - For maintainers releasing new versions
- **[Changelog](./CHANGELOG.md)** - Version history and release notes

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for:

- Development setup
- Branch naming conventions
- Commit message format
- Pull request process
- Code review guidelines

**Quick Start:**

```bash
git clone https://github.com/your-username/react-native-foundation.git
npm install
npm run build:foundation
npm run example
```

## 📝 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for release history and breaking changes.

## 💖 Support

- ⭐ **Star this repo** if you find it helpful
- 🐛 **[Report bugs](https://github.com/passion-ui/react-native-foundation/issues)**
- 💡 **[Request features](https://github.com/passion-ui/react-native-foundation/issues)**
- 💬 **[Discussions](https://github.com/passion-ui/react-native-foundation/discussions)**

## 📄 License

MIT © [Dũng (Wem)](https://github.com/wem2017)

## 🔗 Links

- [GitHub Repository](https://github.com/passion-ui/react-native-foundation)
- [NPM Package](https://www.npmjs.com/package/@passionui/react-native-foundation)
- [Issue Tracker](https://github.com/passion-ui/react-native-foundation/issues)

---

Made with ❤️ by [Passion UI](https://github.com/passion-ui)
