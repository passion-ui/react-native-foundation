# Steps

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

Timeline/progress step indicator.
