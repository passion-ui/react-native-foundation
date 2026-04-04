# InputMoney

Currency-formatted input.

```typescript
interface InputMoneyProps extends InputProps {
  currency?: string;  // currency symbol/code
}
```

Inherits all props from [Input](input.md).

## Usage

> Wrap in a `Card` for proper background. See [Input](input.md).

```tsx
<Card>
  <InputMoney floatingValue="Amount" currency="USD" />
  <SizedBox height={Spacing.M} />
  <InputMoney floatingValue="Price" currency="€" placeholder="0.00" />
</Card>
```
