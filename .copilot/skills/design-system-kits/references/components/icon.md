# Icon

Renders vector icons with adapter support for both Expo and RN CLI.

```typescript
interface IconProps extends TextProps {
  type?: 'FontAwesome' | 'FontAwesome5' | 'MaterialCommunityIcons' | 'Image';
  name: string | ImageSourcePropType;
  size?: number;     // default: 24
  color?: string;    // default: theme.colors.text.default
}
```

The `type` prop selects the icon library:
- `MaterialCommunityIcons` (default) — recommended, used throughout the design system
- `FontAwesome` / `FontAwesome5` — FontAwesome icon sets
- `Image` — renders an image source instead of a vector icon

> **Note:** The VectorIcons adapter loads additional icon libraries (Ionicons, Feather, MaterialIcons, Entypo, AntDesign, EvilIcons, FontAwesome6, Foundation, Octicons, SimpleLineIcons, Zocial) but they are not accessible through the `Icon` component's `type` prop. Use `MaterialCommunityIcons`, `FontAwesome`, or `FontAwesome5` for vector icons.

## Usage

```tsx
<Icon name="home" size={24} color={theme.colors.primary.default} />
<Icon type="FontAwesome5" name="react" size={32} />
<Icon type="Image" name={require('./icon.png')} size={20} />
```
