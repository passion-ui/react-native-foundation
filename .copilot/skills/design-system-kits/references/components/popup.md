# Popup

Modal dialog with image header, title, description, and action buttons.

```typescript
type PopupAction = { title: string; onPress: () => void };

type PopupProps = {
  image?: string;
  title: string;
  description: string | ReactNode;
  information?: string;
  primary: PopupAction;
  secondary?: PopupAction;
  buttonDirection?: 'row' | 'column' | 'auto';
  onRequestClose?: (callback?: () => void) => void;
};
```

- Optional image header (16:9 aspect ratio)
- Button layout auto-switches to column if text > 12 characters
- ReactNode support for custom description content

## Usage

When using an arrow function for `screen`, spread `props` onto the component. Popup internally calls `onRequestClose` when any action button is pressed — you don't need to call it manually. Just provide the action callback.

```tsx
navigator.showModal({
  screen: (props) => (
    <Popup
      {...props}
      title="Delete item?"
      description="This action cannot be undone."
      primary={{ title: 'Delete', onPress: handleDelete }}
      secondary={{ title: 'Cancel', onPress: () => {} }}
    />
  ),
});

// With image
navigator.showModal({
  screen: (props) => (
    <Popup
      {...props}
      image="https://example.com/success.png"
      title="Payment Successful"
      description="Your order has been placed."
      primary={{ title: 'View Order', onPress: viewOrder }}
    />
  ),
});
```
