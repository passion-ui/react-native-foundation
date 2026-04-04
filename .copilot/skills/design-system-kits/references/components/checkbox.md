# CheckBox

Toggle with checked, unchecked, and indeterminate states.

```typescript
type CheckBoxProps = {
  value: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
  label?: string;
  indeterminate?: boolean;
  style?: StyleProp<ViewStyle>;
};
```

- 20×20px square with rounded corners
- Shows check icon when checked, minus icon when indeterminate
- Uses `theme.colors.primary.default` when checked

## Usage

```tsx
<CheckBox value={agreed} onChange={setAgreed} label="I agree to terms" />
<CheckBox value={partial} onChange={() => {}} indeterminate label="Select all" />
<CheckBox value={false} onChange={() => {}} disabled label="Unavailable" />
```
