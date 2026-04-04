# Stepper

Increment/decrement control with min/max bounds.

```typescript
interface StepperProps extends ViewProps {
  defaultValue: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}
```

- Plus/minus icon buttons (32×32px each)
- Value display in center
- Buttons auto-disable at min/max bounds

## Usage

```tsx
<Stepper defaultValue={1} min={0} max={10} onChange={setQuantity} />
<Stepper defaultValue={0} min={0} max={99} onChange={setCount} />
```
