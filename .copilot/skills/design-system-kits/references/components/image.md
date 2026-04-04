# Image

Image component with loading skeleton and error fallback.

```typescript
type ImageProps = ImageAdapterProps & {
  loading?: boolean;
};
```

Three states: **loading** (shows Skeleton), **success** (shows image), **error** (shows fallback icon).
Automatically selects the best image library: expo-image → @d11/react-native-fast-image → ImageBackground.

## Usage

```tsx
<Image source={{ uri: 'https://example.com/photo.jpg' }} style={{ width: 200, height: 200 }} />
<Image source={require('./local-image.png')} style={{ width: 100, height: 100 }} />
```
