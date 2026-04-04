# InputDropDown

Input that triggers a dropdown/picker on press.

```typescript
interface InputDropDownProps extends InputProps {
  onPress?: () => void;
}
```

Inherits all props from [Input](./input.md). Typically used with `navigator.showBottomSheet` or `SheetPicker`.

## Usage

> Wrap in a `Card` for proper background. See [Input](./input.md).

```tsx
<Card>
  <InputDropDown
    floatingValue="Country"
    value={selectedCountry}
    onPress={() => navigator.showBottomSheet({ component: CountryPicker })}
  />
</Card>
```
