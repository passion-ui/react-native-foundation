# Tag

```typescript
type TagProps = ViewProps & {
  label: string;                          // required
  size?: 'small' | 'medium' | 'large';
  type?: 'default' | 'rating';
  icon?: string;
  color?: string;
};
```

- `default` — outlined tag with label
- `rating` — filled with star icon
