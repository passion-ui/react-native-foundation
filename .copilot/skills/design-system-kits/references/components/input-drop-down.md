# InputDropDown

Input that triggers a dropdown/picker on press. Not editable — the entire field is a press target.

```typescript
interface InputDropDownProps extends TextInputProps {
  size?: 'small' | 'medium' | 'large';       // default: 'small'
  floatingValue?: string;                     // floating label text
  floatingIcon?: string;                      // icon next to floating label
  floatingIconColor?: string;                 // color for floating icon
  leading?: string | ReactNode;               // leading icon name or custom node
  trailing?: string | ReactNode;              // trailing icon (default: 'chevron-down')
  error?: string;                             // error message below input
  disabled?: boolean;                         // disables interaction
  required?: boolean;                         // shows * indicator
  onPress: () => void;                        // REQUIRED — triggered on press
}
```

Typically used with `navigator.showBottomSheet` or `SheetPicker`. Automatically shows a chevron-down icon when no trailing icon is provided.

> **Important:** Wrap in a `Card` for proper background. See [Input](./input.md).

## Usage

```tsx
<Card>
  <InputDropDown
    floatingValue="Country"
    value={selectedCountry}
    onPress={() => navigator.showBottomSheet({ component: CountryPicker })}
  />
</Card>
<Card>
  <InputDropDown
    floatingValue="Language"
    floatingIcon="translate"
    leading="earth"
    value={selectedLang}
    required
    onPress={() => navigator.showBottomSheet({ component: LangPicker })}
  />
</Card>
```
