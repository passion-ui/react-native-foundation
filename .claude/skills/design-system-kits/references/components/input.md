# Input

Text input with floating label, leading/trailing icons, and error state.

```typescript
interface InputProps extends TextInputProps {
  size?: 'small' | 'medium' | 'large';
  floatingValue?: string;     // floating label text
  floatingIcon?: string;      // icon next to floating label
  error?: string;             // error message below input
  leading?: string | ReactNode;
  trailing?: string | ReactNode;
  iconColor?: string;
  disabled?: boolean;
  floatingIconColor?: string;
  required?: boolean;         // shows * indicator
}

interface InputRef {
  focus: () => void;
  blur: () => void;
  clear: () => void;
  setText: (value: string) => void;
}
```

Uses `forwardRef` — access imperatively via ref.

> **Important:** Input components need a background surface to be visually correct. Always wrap input forms inside a `Card` component to provide the proper background.

## Usage

**Always wrap inputs in a Card for proper background:**
```tsx
<Card>
  <Input
    floatingValue="Email"
    floatingIcon="email"
    placeholder="Enter your email"
    keyboardType="email-address"
    error={emailError}
    required
  />
  <SizedBox height={Spacing.M} />
  <Input
    floatingValue="Password"
    floatingIcon="lock"
    secureTextEntry
  />
</Card>
```

**Imperative control via ref:**
```tsx
const inputRef = useRef<InputRef>(null);

<Card>
  <Input ref={inputRef} floatingValue="Name" placeholder="Enter name" />
</Card>

inputRef.current?.focus();
inputRef.current?.setText('John');
inputRef.current?.clear();
```
