# Image

```typescript
type ImageProps = ImageAdapterProps & {
  loading?: boolean;                      // shows skeleton while loading
};
```

Source: `{ uri: 'https://...' }` or `require('./local.png')`.
Adapter: tries expo-image, falls back to @d11/react-native-fast-image.
