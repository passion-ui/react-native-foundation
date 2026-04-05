# Button

A pressable button with 6 type variants and 3 sizes.

```typescript
interface ButtonProps extends TouchableOpacityProps {
  title?: string;          // button label (default: 'Button')
  onPress: () => void;
  type?: 'primary' | 'tonal' | 'outline' | 'text' | 'disabled' | 'gradient';
  size?: 'large' | 'medium' | 'small';      // default: 'large'
  color?: string;
  full?: boolean;          // full-width (default: true)
  round?: boolean;         // fully rounded corners (default: false)
  loading?: boolean;       // shows ActivityIndicator on leading
  leading?: string | ReactNode;  // icon name or custom node
  trailing?: string | ReactNode;
  gradientProps?: LinearGradientProps;  // only for type='gradient'
}
```

## Size mapping

| Size | Height | Typography | Icon size |
|------|--------|------------|-----------|
| large | 48px | callout | 24px |
| medium | 36px | subhead | 16px |
| small | 28px | caption1 | 16px |

## Usage

```tsx
<Button title="Submit" onPress={handleSubmit} type="primary" size="large" />
<Button title="Cancel" onPress={handleCancel} type="outline" size="medium" />
<Button title="Loading" onPress={() => {}} loading={true} />
<Button title="With Icon" leading="check" trailing="arrow-right" onPress={() => {}} />
<Button title="Full Width" full onPress={() => {}} />
<Button title="Gradient" type="gradient" gradientProps={{ colors: ['#FF6B6B', '#FF8E53'] }} onPress={() => {}} />
```
