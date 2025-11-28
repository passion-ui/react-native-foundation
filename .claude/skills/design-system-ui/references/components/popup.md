# Popup

```typescript
type PopupAction = { title: string; onPress: () => void };

type PopupProps = {
  image?: string;
  title: string;
  description: string | ReactNode;
  information?: string;
  secondary?: PopupAction;
  primary: PopupAction;
  buttonDirection?: 'row' | 'column' | 'auto';
  onRequestClose?: (callback?: () => void) => void;
};
```

Shown via `navigator.showModal`. Always spread route `props` — it needs `navigation` and `onRequestClose`:

```typescript
navigator.showModal({
  screen: (props) => (
    <Popup {...props}
      title="Confirm"
      description="Are you sure?"
      primary={{ title: 'OK', onPress: () => props.navigation.goBack() }}
      secondary={{ title: 'Cancel', onPress: () => props.navigation.goBack() }}
    />
  ),
});
```
