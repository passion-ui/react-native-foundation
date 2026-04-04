# BottomTab

Tab-based navigation with animated indicator, badge support, and nested content.

```typescript
type BottomTabItemProps = {
  label: string;
  icon?: string;
  badge?: string | number;
  content: React.ReactElement;  // the screen content for this tab
};

interface BottomTabProps {
  tabs: BottomTabItemProps[];
  initialIndex?: number;
  onChangeTab?: (index: number) => void;
}
```

- Animated tab indicator following active tab
- Focus/blur animations
- Badge support per tab

## Usage

```tsx
<BottomTab
  tabs={[
    {
      label: 'Home',
      icon: 'home',
      content: <HomeContent />,
    },
    {
      label: 'Search',
      icon: 'magnify',
      content: <SearchContent />,
    },
    {
      label: 'Cart',
      icon: 'cart',
      badge: '3',
      content: <CartContent />,
    },
    {
      label: 'Profile',
      icon: 'account',
      content: <ProfileContent />,
    },
  ]}
/>
```
