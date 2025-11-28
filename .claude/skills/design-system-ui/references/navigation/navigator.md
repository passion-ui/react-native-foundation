# Navigator API

Imperative navigation class (not a hook). Access via `useContext(ApplicationContext)`.

## Stack Navigation

```typescript
const { navigator } = useContext(ApplicationContext);

navigator.push({ screen: DetailScreen, itemId: 123 });  // push
navigator.pop();                                          // pop 1
navigator.pop(2);                                         // pop N
navigator.replace({ screen: NewScreen });                 // replace current
navigator.reset({ screen: HomeScreen });                  // reset stack
navigator.popToTop();                                     // pop to root
```

## Presentations

```typescript
navigator.present({ screen: FormScreen });                // dialog (slide-up)

navigator.showModal({                                     // modal overlay
  screen: (props) => <Popup {...config} {...props} />,
  barrierDismissible: true,
  onDismiss: () => {},
  modalStyle: { maxWidth: 400 },
});

navigator.showBottomSheet({                               // bottom sheet
  title: 'Select Item',
  screen: (props) => <SheetPicker data={items} onSelect={onSelect} {...props} />,
  backgroundColor: '#fff',
  onClose: () => {},
  onDismiss: () => {},
});
```

## Toast & Loading

```typescript
navigator.showToast({ type: 'success', icon: 'check-circle', message: 'Done!', duration: 3000 });
navigator.showToast({ type: 'warning', icon: 'alert', message: 'Error', action: { title: 'Retry', onPress: fn } });
navigator.hideToast();

navigator.showLoading({ title: 'Processing', message: 'Please wait...', duration: 5000 });
navigator.hideLoading();
```

## Type Definitions

```typescript
type ScreenParams = { screen: React.FC<ScreenContainerProps>; [key: string]: any };

type ModalParams = ScreenParams & {
  onDismiss?: () => void;
  barrierDismissible?: boolean;
  modalStyle?: StyleProp<ViewStyle>;
};

type BottomSheetParams = ScreenParams & {
  title: string;
  backgroundColor?: string;
  onClose?: () => void;
  onDismiss?: () => void;
};

type LoadingParams = { title?: string; message?: string; duration?: number };

type ToastParams = ToastProps & { onDismiss?: () => void; position?: number; duration?: number };
```
