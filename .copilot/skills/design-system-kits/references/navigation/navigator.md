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
