# Navigator

The `Navigator` is an imperative class (not a hook) that manages the navigation stack, loading overlay, and toast overlay. Every screen can access it via `ApplicationContext`.

## Constructor

```typescript
const navigationRef = useRef(null);
const loadingRef = useRef(null);
const toastRef = useRef(null);

const navigator = new Navigator(navigationRef, loadingRef, toastRef);
```

## Navigation methods

```typescript
// Push a new screen onto the stack
navigator.push({
  name: string,
  component: React.ComponentType,
  params?: object,
  passProps?: object,
});

// Replace the current screen
navigator.replace({
  name: string,
  component: React.ComponentType,
  params?: object,
});

// Reset the entire stack to a new root
navigator.reset({
  name: string,
  component: React.ComponentType,
  params?: object,
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
  name: string,
  component: React.ComponentType,
  params?: object,
});

// Show a centered modal with fade + scale animation
navigator.showModal({
  component: React.ComponentType,
  params?: object,
});

// Show a draggable bottom sheet with spring animation
navigator.showBottomSheet({
  component: React.ComponentType,
  params?: object,
});
```

## Overlay methods

```typescript
// Show/hide full-screen loading overlay
navigator.showLoading(params?: object);
navigator.hideLoading();

// Show/hide toast notification
navigator.showToast({
  type?: 'success' | 'warning' | 'default',
  icon?: string,
  message: string,
  action?: { title: string; onPress: () => void },
});
navigator.hideToast();
```

## Accessing in any screen

```typescript
import { useContext } from 'react';
import { ApplicationContext } from '@passionui/react-native-foundation';

function MyScreen() {
  const { navigator } = useContext(ApplicationContext);

  const goToDetails = () => {
    navigator?.push({
      name: 'Details',
      component: DetailsScreen,
      params: { id: 123 },
    });
  };
}
```
