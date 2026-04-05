# Navigator

The `Navigator` is an imperative class (not a hook) that manages the navigation stack, loading overlay, and toast overlay. Every screen can access it via `ApplicationContext`.

## Constructor

```typescript
const navigationRef = useRef(null);
const loadingRef = useRef(null);
const toastRef = useRef(null);

const navigator = new Navigator({ ref: navigationRef, loadingRef, toastRef });
```

## Navigation methods

```typescript
// Push a new screen onto the stack
navigator.push({
  screen: React.FC<ScreenContainerProps>,
  // ...any additional params accessible via route.params
});

// Replace the current screen
navigator.replace({
  screen: React.FC<ScreenContainerProps>,
  // ...additional params
});

// Reset the entire stack to a new root
navigator.reset({
  screen: React.FC<ScreenContainerProps>,
  // ...additional params
});

// Pop the current screen (or N screens)
navigator.pop(count?: number);

// Pop all the way back to the first screen
navigator.popToTop();
```

## Dialog and modal methods

```typescript
// Show a transparent dialog screen (rendered on a separate stack group)
navigator.present({
  screen: React.FC<ScreenContainerProps>,
  // ...additional params
});

// Show a centered modal with fade + scale animation
navigator.showModal({
  screen: React.FC<ScreenContainerProps>,
  onDismiss?: () => void,
  barrierDismissible?: boolean,
  modalStyle?: StyleProp<ViewStyle>,
});

// Show a draggable bottom sheet with spring animation
navigator.showBottomSheet({
  screen: React.FC<ScreenContainerProps>,
  title: string,                    // required — header title
  backgroundColor?: string,
  onClose?: () => void,
  onDismiss?: () => void,
});
```

## Overlay methods

```typescript
// Show/hide full-screen loading overlay
navigator.showLoading(params?: {
  title?: string;
  message?: string;
  duration?: number;
});
navigator.hideLoading();

// Show/hide toast notification
navigator.showToast({
  type?: 'success' | 'warning' | 'default',
  icon?: string,
  message: string,
  action?: { title: string; onPress: () => void },
  onDismiss?: () => void,
  position?: number,
  duration?: number,
});
navigator.hideToast();
```

## Passing props to screen

Extra properties passed alongside `screen` are forwarded as props to the rendered component. The component also receives `navigation` and `onRequestClose` automatically.

### Method 1: Arrow function with props spread (recommended for inline UI)

Use when rendering a component inline. The arrow function receives all injected props (`onRequestClose`, `navigation`, etc.) — spread them onto the component with `{...props}`.

**Components like `Popup` and `SheetPicker` already call `onRequestClose` internally** when an action is triggered. Just spread `{...props}` and provide your callbacks — no need to call `onRequestClose` yourself.

```tsx
const items = [...];
const selected = items[0];

// Popup — handles dismiss automatically on button press
navigator?.showModal({
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

// SheetPicker — handles dismiss automatically on selection
navigator?.showBottomSheet({
  title: 'Select item',
  screen: (props) => (
    <SheetPicker
      {...props}
      data={items}
      selected={selected}
      onSelect={(index) => handleSelect(items[index])}
    />
  ),
});

// Custom component — use props.onRequestClose manually to dismiss
navigator?.showBottomSheet({
  title: 'Edit profile',
  screen: (props) => (
    <EditProfileForm
      {...props}
      onSave={(data) => {
        saveProfile(data);
        props.onRequestClose?.();
      }}
    />
  ),
});
```

### Method 2: Named component with extra params

Use when navigating to a full screen component. Extra params are spread as props and also available on `route.params`.

```tsx
// Pass extra params as top-level properties
navigator?.push({
  screen: ProductDetailScreen,
  productId: 42,
  title: 'Widget',
});

// Access in the target screen
function ProductDetailScreen({ route, navigation }) {
  const { productId, title } = route.params;
  // productId = 42, title = 'Widget'
}
```

### Injected props reference

| Prop | Type | Available in |
|---|---|---|
| `navigation` | Navigation object | All (push, modal, bottom sheet) |
| `onRequestClose` | `(callback?) => void` | `showModal`, `showBottomSheet` only |

`onRequestClose` triggers the dismiss animation (fade/scale for modals, slide-down for bottom sheets), then pops the screen. Pass an optional `callback` to run code after dismissal.

## Accessing in any screen

```typescript
import { useContext } from 'react';
import { ApplicationContext } from '@passionui/react-native-foundation';

function MyScreen({ navigation }) {
  const { navigator } = useContext(ApplicationContext);

  const goToDetails = () => {
    navigator?.push({
      screen: DetailsScreen,
      id: 123,
    });
  };
}
```
