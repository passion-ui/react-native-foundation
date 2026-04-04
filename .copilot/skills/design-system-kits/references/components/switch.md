# Switch

Toggle switch with animated state.

```typescript
type SwitchProps = {
  value: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};
```

- 38×24px dimensions
- Animated circle toggle (flex alignment)
- Uses `theme.colors.primary.default` when on

## Usage

```tsx
<Switch value={darkMode} onChange={setDarkMode} />
<Switch value={notifications} onChange={setNotifications} />
<Switch value={false} onChange={() => {}} disabled />
```
