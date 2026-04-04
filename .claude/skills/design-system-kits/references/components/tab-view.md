# TabView

Tabbed content with PagerView, animated indicator, and lazy rendering.

```typescript
type TabBarItemProps = {
  content?: React.ReactElement;
  label?: string;
  icon?: string | ReactNode;
  onPress?: () => void;
};

interface TabBarProps extends ViewProps {
  type?: 'default' | 'card';
  direction?: 'row' | 'column';
  tabs: TabBarItemProps[];
  initialIndex?: number;
  onPressTabItem?: (index: number) => void;
  tabBarStyles?: StyleProp<ViewStyle>;
  contentStyles?: StyleProp<ViewStyle>;
}

interface TabViewRef {
  setPage: (index: number) => void;
}
```

- Uses PagerView (AnimatedPagerView) for swipeable content
- Animated tab indicator following scroll position
- Lazy rendering — tab content only renders when first visited
- ForwardRef with imperative `setPage`

## Usage

```tsx
const tabRef = useRef<TabViewRef>(null);

<TabView
  ref={tabRef}
  tabs={[
    { label: 'Overview', content: <OverviewTab /> },
    { label: 'Details', content: <DetailsTab /> },
    { label: 'Reviews', content: <ReviewsTab /> },
  ]}
  initialIndex={0}
/>

// Programmatic navigation
tabRef.current?.setPage(2);
```
