# InputMoney

Currency-formatted input.

```typescript
interface InputMoneyProps extends InputProps {
  currency?: string;  // currency symbol (default: '$')
}
```

Inherits all props from [Input](./input.md). Automatically formats numeric input with the currency symbol. Uses `number-pad` keyboard type.

## Usage

> Wrap in a `Card` for proper background. See [Input](./input.md).

```tsx
<Card>
  <InputMoney floatingValue="Amount" currency="$" />
  <SizedBox height={Spacing.M} />
  <InputMoney floatingValue="Price" currency="€" placeholder="0.00" />
  <SizedBox height={Spacing.M} />
  <InputMoney floatingValue="Total" currency="$" defaultValue="1000" />
</Card>
```
