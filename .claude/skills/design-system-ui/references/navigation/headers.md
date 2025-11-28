# Navigation Header Components

## NavigationButton

Header action button with optional badge:

```typescript
navigation.setOptions({
  headerRight: () => (
    <NavigationButton icon="cart" onPress={openCart} badge={itemCount} />
  ),
});
```

## HeaderTitle

Centered header title:

```typescript
navigation.setOptions({
  headerTitle: () => <HeaderTitle title="My App" />,
});
```

## HeaderBackground

Custom header background (used internally by Screen when `headerType` is set).
