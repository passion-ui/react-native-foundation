# ModalScreen

Internal wrapper for modals and bottom sheets. You don't render this directly — it's used by `NavigationContainer` when `navigator.showModal()` or `navigator.showBottomSheet()` is called.

## Render modes

| Mode | Triggered by | Animation |
|------|-------------|-----------|
| Modal | `navigator.showModal()` | Centered, fade + scale |
| BottomSheet | `navigator.showBottomSheet()` | Bottom-up, spring, draggable |

- Modal dismisses when user taps outside
- BottomSheet dismisses when user drags down

## Related

- **StackScreen**: Renders components from `navigator.push()` / `navigator.replace()`
- **DialogScreen**: Renders components from `navigator.present()` with transparent background
