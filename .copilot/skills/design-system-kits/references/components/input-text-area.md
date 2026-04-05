# InputTextArea

Multi-line text input with floating label, character counter, and error state.

```typescript
interface InputTextAreaProps extends TextInputProps {
  floatingValue?: string;       // floating label text
  floatingIcon?: string;        // icon next to floating label
  floatingIconColor?: string;   // color for floating icon
  error?: string;               // error message below input
  disabled?: boolean;           // disables interaction
  required?: boolean;           // shows * indicator
}

interface InputRef {
  focus: () => void;
  blur: () => void;
  clear: () => void;
  setText: (value: string) => void;
}
```

Uses `forwardRef` — access imperatively via ref. Default `maxLength` is 300. Displays a character counter (`currentLength/maxLength`) at the bottom.

> **Important:** Wrap in a `Card` for proper background. See [Input](./input.md).

## Usage

```tsx
<Card>
  <InputTextArea
    floatingValue="Description"
    placeholder="Enter description..."
    numberOfLines={4}
    maxLength={500}
  />
</Card>
<Card>
  <InputTextArea
    floatingValue="Notes"
    floatingIcon="note-text"
    error={notesError}
    required
  />
</Card>
```
