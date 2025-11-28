# TabView

```typescript
type TabBarItemProps = {
  active?: boolean;
  type?: 'default' | 'card';
  direction?: 'row' | 'column';
  content?: React.ReactElement;
  label?: string;
  icon?: string | ReactNode;
  onPress?: () => void;
};

type TabBarProps = ViewProps & {
  type?: 'default' | 'card';
  direction?: 'row' | 'column';
  tabs: TabBarItemProps[];
  initialIndex?: number;
  onPressTabItem?: (index: number) => void;
  tabBarStyles?: StyleProp<ViewStyle>;
  contentStyles?: StyleProp<ViewStyle>;
};

type TabViewRef = {
  setPage(index: number): void;
};
```

Uses react-native-pager-view for swipeable content. Each tab's `content` is rendered as a page.
