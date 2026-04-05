# Navigation Patterns

Common navigation recipes using the foundation package.

## Multi-step flow

```tsx
function Step1({ navigation }) {
  const { navigator } = useContext(ApplicationContext);
  return (
    <Screen navigation={navigation}>
      <Text typography="title2">Step 1</Text>
      <Button
        title="Next"
        onPress={() => navigator?.push({ screen: Step2 })}
      />
    </Screen>
  );
}
```

## Confirmation popup before action

```tsx
const { navigator } = useContext(ApplicationContext);

navigator?.showModal({
  screen: () => (
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
  title: 'Choose source',
  screen: () => (
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
function DashboardScreen({ navigation }) {
  return (
    <BottomTab
      navigation={navigation}
      initialRouteName="Overview"
      tabs={[
        { name: 'Overview', tabBarLabel: 'Overview', icon: 'chart-bar', screen: OverviewTab },
        { name: 'Analytics', tabBarLabel: 'Analytics', icon: 'chart-line', screen: AnalyticsTab },
        { name: 'Reports', tabBarLabel: 'Reports', icon: 'file-document', screen: ReportsTab },
      ]}
    />
  );
}
```

## Passing data between screens

```tsx
// Push with params — extra properties are passed as route.params
navigator?.push({
  screen: ProductDetailScreen,
  productId: 42,
});

// Access in target screen
function ProductDetailScreen({ route, navigation }) {
  const { productId } = route.params;
  // ...
}
```

## Reset to login after logout

```tsx
const handleLogout = () => {
  navigator?.reset({
    screen: LoginScreen,
  });
};
```
