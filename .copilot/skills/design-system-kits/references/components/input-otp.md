# InputOTP

One-time password input with configurable length, floating label, and error state.

```typescript
interface InputOTPProps
  extends Omit<TextInputProps, 'placeholder' | 'placeholderTextColor'> {
  length?: number;              // number of digit boxes (default: 10)
  dataType?: 'string' | 'number'; // input validation type (default: 'number')
  floatingValue?: string;       // floating label text above the input
  error?: string;               // error message displayed below the input
}

interface InputRef {
  focus: () => void;
  blur: () => void;
  clear: () => void;
  setText: (value: string) => void;
}
```

Uses `forwardRef` — access imperatively via ref.

> **Important:** Input components need a background surface to be visually correct. Always wrap inside a `Card` component. See [Input](./input.md).

## Usage

**Basic OTP input:**
```tsx
<Card>
  <InputOTP
    length={6}
    dataType="number"
    onChangeText={(code) => {
      if (code.length === 6) verifyOTP(code);
    }}
  />
</Card>
```

**With floating label and error:**
```tsx
<Card>
  <InputOTP
    length={4}
    dataType="string"
    floatingValue="Verification Code"
    error={otpError}
    onChangeText={setOtpValue}
  />
</Card>
```

**Imperative control via ref:**
```tsx
const otpRef = useRef<InputRef>(null);

<Card>
  <InputOTP ref={otpRef} length={6} floatingValue="OTP" />
</Card>

otpRef.current?.focus();
otpRef.current?.setText('123456');
otpRef.current?.clear();
```
