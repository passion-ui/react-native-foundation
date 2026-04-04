# Tag

Colored label chip with optional icon.

```typescript
interface TagProps extends ViewProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'default' | 'rating';
  icon?: string;
  color?: string;
}
```

## Size mapping

| Size | Height |
|------|--------|
| small | 20px |
| medium | 24px |
| large | 28px |

- `default`: Lightened background color, uniform border radius
- `rating`: Full color background, asymmetric border radius (0 on top-right)

## Usage

```tsx
<Tag label="Featured" color={Colors.blue[5]} />
<Tag label="4.5" type="rating" icon="star" color={Colors.gold[5]} />
<Tag label="Sale" size="large" color={Colors.red[5]} />
```
