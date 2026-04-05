# IconButton

A circular or rounded icon-only button.

```typescript
interface IconButtonProps extends TouchableOpacityProps {
  icon: string;
  type?: 'primary' | 'tonal' | 'secondary' | 'outline' | 'disabled';  // default: 'primary'
  color?: string;
  size?: 'large' | 'medium' | 'small';   // default: 'small'
  shape?: 'circle' | 'rounded';          // default: 'circle'
}
```

## Size mapping

| Size | Dimensions | Icon size |
|------|-----------|-----------|
| large | 48×48 | 24px |
| medium | 40×40 | 22px |
| small | 32×32 | 20px |

## Usage

```tsx
<IconButton icon="plus" onPress={handleAdd} type="primary" size="large" />
<IconButton icon="pencil" onPress={handleEdit} type="tonal" shape="rounded" />
<IconButton icon="close" onPress={handleClose} type="outline" size="small" />
```
