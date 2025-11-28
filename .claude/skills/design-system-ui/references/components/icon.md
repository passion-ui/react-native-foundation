# Icon

```typescript
type IconProps = TextProps & {
  type?: 'FontAwesome' | 'FontAwesome5' | 'MaterialCommunityIcons' | 'Image';
  name: string | ImageSourcePropType;   // required
  size?: number;                         // default: 24
  color?: string;                        // default: theme.colors.text.default
};
```

When `type='Image'`, `name` should be `ImageSourcePropType` (require or uri).
Default icon type is `MaterialCommunityIcons`.
