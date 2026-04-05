# BottomTab

Tab-based navigation with animated indicator, badge support, and nested content.

```typescript
interface BottomTabItemProps extends BottomTabNavigationOptions {
  name: string;                              // REQUIRED — unique route name
  icon: string;                              // REQUIRED — icon name
  screen: React.FC<ScreenContainerProps>;    // REQUIRED — screen component
  initialParams?: any;                       // initial params for the tab screen
}

type BottomTabProps = {
  tabs: BottomTabItemProps[];
  initialRouteName?: string;                 // name of the initially active tab
  nested?: boolean;                          // true when BottomTab is nested inside another navigator
  navigation: StackNavigationProp<any>;      // REQUIRED — navigation prop from parent
};
```

- Animated tab indicator following active tab
- Focus/blur animations
- Badge support per tab (via `BottomTabNavigationOptions`)

## Usage

```tsx
function DashboardScreen({ navigation }) {
  return (
    <BottomTab
      navigation={navigation}
      initialRouteName="Home"
      tabs={[
        {
          name: 'Home',
          tabBarLabel: 'Home',
          icon: 'home',
          screen: HomeScreen,
        },
        {
          name: 'Search',
          tabBarLabel: 'Search',
          icon: 'magnify',
          screen: SearchScreen,
        },
        {
          name: 'Cart',
          tabBarLabel: 'Cart',
          icon: 'cart',
          tabBarBadge: '3',
          screen: CartScreen,
        },
        {
          name: 'Profile',
          tabBarLabel: 'Profile',
          icon: 'account',
          screen: ProfileScreen,
        },
      ]}
    />
  );
}
```
