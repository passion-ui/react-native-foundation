# Toast

Notification banner — controlled via `Navigator.showToast()`.

```typescript
type ToastProps = {
  type?: 'success' | 'warning' | 'default';
  icon?: string;
  message: string;
  action?: { title: string; onPress: () => void };
};
```

- Type-specific background: success → green, warning → orange, default → theme primary
- Optional action button separated by a vertical divider
- Translatable message strings

## Usage

```tsx
navigator.showToast({ type: 'success', message: 'Item saved!', icon: 'check' });
navigator.showToast({
  type: 'warning',
  message: 'Connection lost',
  action: { title: 'Retry', onPress: reconnect },
});
navigator.hideToast();
```
