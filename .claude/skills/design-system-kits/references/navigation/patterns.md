# Navigation Patterns

Common navigation recipes using the foundation package.

## Multi-step flow

```tsx
function Step1() {
  const { navigator } = useContext(ApplicationContext);
  return (
    <Screen>
      <Text typography="title2">Step 1</Text>
      <Button
        title="Next"
        onPress={() => navigator?.push({ name: 'Step2', component: Step2 })}
      />
    </Screen>
  );
}
```

## Confirmation popup before action

```tsx
const { navigator } = useContext(ApplicationContext);

navigator?.showModal({
  component: () => (
    <Popup
      title="Are you sure?"
      description="This will delete your account permanently."
      primary={{ title: 'Delete', onPress: handleDelete }}
      secondary={{ title: 'Cancel', onPress: () => navigator?.pop() }}
    />
  ),
});
```

## Selection bottom sheet

```tsx
navigator?.showBottomSheet({
  component: () => (
    <SheetPicker
      data={[
        { title: 'Camera', value: 'camera', icon: <Icon name="camera" /> },
        { title: 'Gallery', value: 'gallery', icon: <Icon name="image" /> },
      ]}
      selected={currentSelection}
      onSelect={handleSelect}
    />
  ),
});
```

## Loading during async operation

```tsx
const handleSave = async () => {
  navigator?.showLoading();
  try {
    await saveData();
    navigator?.showToast({ type: 'success', message: 'Saved successfully!' });
  } catch (error) {
    navigator?.showToast({ type: 'warning', message: 'Save failed' });
  } finally {
    navigator?.hideLoading();
  }
};
```

## Tab layout inside a screen

```tsx
function DashboardScreen() {
  return (
    <Screen headerType="default">
      <BottomTab
        tabs={[
          { label: 'Overview', icon: 'chart-bar', content: <OverviewTab /> },
          { label: 'Analytics', icon: 'chart-line', content: <AnalyticsTab /> },
          { label: 'Reports', icon: 'file-document', content: <ReportsTab /> },
        ]}
      />
    </Screen>
  );
}
```

## Passing data between screens

```tsx
// Push with params
navigator?.push({
  name: 'ProductDetail',
  component: ProductDetailScreen,
  params: { productId: 42 },
});

// Access in target screen
function ProductDetailScreen({ route }) {
  const { productId } = route.params;
  // ...
}
```

## Reset to login after logout

```tsx
const handleLogout = () => {
  navigator?.reset({
    name: 'Login',
    component: LoginScreen,
  });
};
```
