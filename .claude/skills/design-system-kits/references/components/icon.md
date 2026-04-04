# Icon

Renders vector icons with adapter support for both Expo and RN CLI.

```typescript
interface IconProps extends TextProps {
  type?: 'FontAwesome' | 'FontAwesome5' | 'MaterialCommunityIcons' | 'Image';
  name: string | ImageSourcePropType;
  size?: number;
  color?: string;
}
```

Default type is `MaterialCommunityIcons`. When `type="Image"`, pass an image source as `name`.

## Supported icon libraries

MaterialCommunityIcons, FontAwesome, FontAwesome5, FontAwesome6, Ionicons, Feather, MaterialIcons, Entypo, AntDesign, EvilIcons, Foundation, Octicons, SimpleLineIcons, Zocial.

## Usage

```tsx
<Icon name="home" size={24} color={theme.colors.primary.default} />
<Icon type="FontAwesome5" name="react" size={32} />
<Icon type="Image" name={require('./icon.png')} size={20} />
```
