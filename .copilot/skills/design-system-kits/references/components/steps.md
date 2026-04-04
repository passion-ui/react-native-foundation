# Steps

Step progress indicator — horizontal or vertical.

```typescript
type Step = {
  title: string;
  icon?: string;
  description?: string;
  error?: boolean;
  time?: string;
};

type StepsProps = {
  direction?: 'horizontal' | 'vertical';
  steps: Step[];
  size?: 'small' | 'large';
  activeIndex: number;
};
```

- Sub-components: `StepsHorizontal`, `StepsVertical`
- Error state per step (red indicator)
- Optional icon, description, and time per step

## Usage

```tsx
<Steps
  direction="horizontal"
  activeIndex={1}
  steps={[
    { title: 'Cart', icon: 'cart' },
    { title: 'Shipping', icon: 'truck' },
    { title: 'Payment', icon: 'credit-card' },
    { title: 'Done', icon: 'check' },
  ]}
/>

<Steps
  direction="vertical"
  size="large"
  activeIndex={2}
  steps={[
    { title: 'Order placed', time: '10:00 AM', description: 'Your order has been placed' },
    { title: 'Processing', time: '10:30 AM' },
    { title: 'Shipped', time: '2:00 PM', description: 'Package is on the way' },
    { title: 'Delivered' },
  ]}
/>
```
