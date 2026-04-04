# IconButton

A circular or rounded icon-only button.

```typescript
interface IconButtonProps extends TouchableOpacityProps {
  icon: string;
  type?: 'primary' | 'tonal' | 'secondary' | 'outline' | 'disabled';
  color?: string;
  size?: 'large' | 'medium' | 'small';
  shape?: 'circle' | 'rounded';
}
```

## Size mapping

| Size | Dimensions | Icon size |
|------|-----------|-----------|
| large | 48×48 | 24px |
| medium | 40×40 | 20px |
| small | 32×32 | 20px |

## Usage

```tsx
<IconButton icon="plus" onPress={handleAdd} type="primary" size="large" />
<IconButton icon="pencil" onPress={handleEdit} type="tonal" shape="rounded" />
<IconButton icon="close" onPress={handleClose} type="outline" size="small" />
```
