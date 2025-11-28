# Bottom Tab Navigation

```typescript
import { BottomTab } from '@passionui/react-native-foundation';

const MainTab: React.FC<ScreenContainerProps> = ({ navigation }) => {
  const { translate } = useContext(ApplicationContext);
  return (
    <BottomTab
      navigation={navigation}
      initialRouteName="Home"
      tabs={[
        { name: 'Home', icon: 'home', screen: HomeScreen, tabBarLabel: translate('home') },
        { name: 'Search', icon: 'magnify', screen: SearchScreen },
        { name: 'Notifications', icon: 'bell', screen: NotificationsScreen, tabBarBadge: 3 },
        { name: 'Profile', icon: 'account', screen: ProfileScreen },
      ]}
    />
  );
};
```

## Props

```typescript
type BottomTabProps = {
  initialRouteName?: string;
  nested?: boolean;
  tabs: BottomTabItemProps[];
  navigation: StackNavigationProp<any>;
};

type BottomTabItemProps = BottomTabNavigationOptions & {
  name: string;
  icon: string;                              // MaterialCommunityIcons name
  screen: React.FC<ScreenContainerProps>;
  initialParams?: any;
};
```

All standard React Navigation `BottomTabNavigationOptions` are supported (`tabBarLabel`, `tabBarBadge`, `tabBarStyle`, etc.).
