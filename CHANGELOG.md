# Changelog

## [0.1.4](https://github.com/passion-ui/react-native-foundation/compare/v0.1.3...v0.1.4) (2025-11-09)

## [0.1.3](https://github.com/passion-ui/react-native-foundation/compare/v0.1.2...v0.1.3) (2025-11-09)

## [0.1.1-beta.1] - 2024-11-09

### Added
- Initial beta release
- Core UI component library (25+ components)
  - Layout: Layout, SizedBox, Divider
  - Typography: Text with multiple variants
  - Buttons: Button, IconButton
  - Form Controls: Input, CheckBox, Radio, Switch
  - Navigation: NavigationContainer, StackScreen, BottomTab, ModalScreen, DialogScreen, BottomSheet
  - Feedback: Toast, Loading, Skeleton
  - Data Display: Badge, Tag, Steps, Stepper, Pagination
  - Media: Image, Icon
  - Utilities: TabView, SheetPicker, LoopText
- Theme system with customizable tokens
- Dark mode support
- Internationalization (i18n) with react-i18next
- TypeScript definitions for all components
- Reanimated integration for smooth animations
- Cross-platform support (iOS, Android, Web)

### Documentation
- README with installation and usage
- Component API documentation
- Example app with interactive demos

---

## Version Links

[0.1.1-beta.1]: https://github.com/passion-ui/react-native-foundation/releases/tag/v0.1.1-beta.1

---

# Format Guide

When updating this changelog, use these categories:

### Added
For new features, components, or functionality.

Example:
```markdown
- New `Dropdown` component with customizable options
- Support for custom fonts in theme configuration
```

### Changed
For changes in existing functionality (non-breaking).

Example:
```markdown
- Improved `Button` animation performance
- Updated default theme colors for better contrast
```

### Deprecated
For features that will be removed in future versions.

Example:
```markdown
- `oldThemeAPI()` is deprecated, use `newThemeAPI()` instead
```

### Removed
For removed features or components.

Example:
```markdown
- Removed deprecated `LegacyButton` component
```

### Fixed
For bug fixes.

Example:
```markdown
- Fixed `Input` focus issue on Android
- Resolved memory leak in `Image` component
```

### Security
For security-related changes.

Example:
```markdown
- Updated dependencies to fix vulnerability CVE-2024-XXXXX
```

### Breaking Changes ⚠️

For major version releases, clearly mark breaking changes:

Example:
```markdown
## [2.0.0] - 2024-12-01

### Breaking Changes ⚠️

- **Theme API**: Restructured theme tokens. Migration guide: [link]
- **Button**: Removed `size` prop, use `variant` instead
  - Before: `<Button size="large" />`
  - After: `<Button variant="large" />`
```
