# Toast

```typescript
type ToastAction = { title: string; onPress: () => void };

type ToastProps = {
  type?: 'success' | 'warning' | 'default';
  icon?: string;
  message: string;
  action?: ToastAction;
};
```

Shown via `navigator.showToast({ ...toastProps, duration: 3000, onDismiss: () => {} })`.
