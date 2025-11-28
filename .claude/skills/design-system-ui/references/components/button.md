# Button & IconButton

## Button

```typescript
type ButtonProps = TouchableOpacityProps & {
  type?: 'primary' | 'tonal' | 'outline' | 'text' | 'disabled' | 'gradient';
  size?: 'large' | 'medium' | 'small';   // default: 'large'
  color?: string;                          // override theme color
  full?: boolean;                          // 100% width
  round?: boolean;                         // pill shape (Radius.XL)
  loading?: boolean;                       // shows ActivityIndicator
  trailing?: string | ReactNode;           // right icon
  leading?: string | ReactNode;            // left icon
  gradientProps?: LinearGradientProps;     // for type='gradient'
  title: string;
  onPress: () => void;
};
```

**Types:**
- `primary` — filled with `theme.colors.primary.default`, white text
- `tonal` — filled with `theme.colors.primary.container`, primary text
- `outline` — bordered, transparent background
- `text` — no background, no border
- `disabled` — grayed out, non-interactive
- `gradient` — linear gradient background

**Size affects:** height, font size, icon size, horizontal padding.

## IconButton

```typescript
type IconButtonProps = TouchableOpacityProps & {
  icon: string;                                    // required
  type?: 'primary' | 'tonal' | 'secondary' | 'outline' | 'disabled';
  color?: string;
  size?: 'large' | 'medium' | 'small';
  shape?: 'circle' | 'rounded';                   // default: 'circle'
};
```
