# InputOTP

One-time password input with configurable length.

```typescript
interface InputOTPProps {
  length?: number;       // number of digits (default: 6)
  dataType?: 'string' | 'number';
  onComplete?: (code: string) => void;
}
```

## Usage

> Wrap in a `Card` for proper background. See [Input](input.md).

```tsx
<Card>
  <InputOTP length={6} dataType="number" onComplete={(code) => verifyOTP(code)} />
</Card>
<Card>
  <InputOTP length={4} dataType="string" onComplete={handleVerify} />
</Card>
```
