# Radio

Radio button for single selection within a group.

```typescript
type RadioProps = {
  value: string;          // this radio's value
  groupValue: string;     // currently selected value in the group
  onChange?: (value: string) => void;
  disabled?: boolean;
  label?: string;
  style?: StyleProp<ViewStyle>;
};
```

- 20×20px circular button
- Border width changes to indicate selection (2px → 6px)
- Uses `theme.colors.primary.default` when selected

## Usage

```tsx
{['small', 'medium', 'large'].map((size) => (
  <Radio
    key={size}
    value={size}
    groupValue={selectedSize}
    onChange={setSelectedSize}
    label={size}
  />
))}
```
