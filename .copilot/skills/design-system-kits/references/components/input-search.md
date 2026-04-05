# InputSearch

Search input with built-in magnify icon, optional trailing icon, and shadow.

```typescript
interface InputSearchProps extends TextInputProps {
  size?: 'small' | 'medium' | 'large';   // default: 'medium'
  icon?: string | ReactNode;              // optional trailing icon (name or custom node)
  iconColor?: string;                     // color for the trailing icon
  onPressIcon?: () => void;               // callback when trailing icon is pressed
  useShadow?: boolean;                    // use shadow instead of border (default: false)
}

interface InputRef {
  focus: () => void;
  blur: () => void;
  clear: () => void;
  setText: (value: string) => void;
}
```

Uses `forwardRef` — access imperatively via ref. No floating label. Includes a magnify search icon automatically. Shows a clear button when focused.

## Usage

```tsx
<InputSearch placeholder="Search products..." useShadow />
<InputSearch
  placeholder="Filter items"
  size="large"
  onChangeText={setFilter}
/>
<InputSearch
  placeholder="Search..."
  icon="filter"
  onPressIcon={openFilter}
  onChangeText={setSearchText}
/>
```

**Imperative control via ref:**
```tsx
const searchRef = useRef<InputRef>(null);

<InputSearch ref={searchRef} placeholder="Search..." />

searchRef.current?.focus();
searchRef.current?.setText('react native');
searchRef.current?.clear();
```
