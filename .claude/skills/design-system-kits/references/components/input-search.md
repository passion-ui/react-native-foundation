# InputSearch

Search input with icon and optional shadow.

```typescript
interface InputSearchProps extends Omit<InputProps, 'floatingValue'> {
  onSearch?: (text: string) => void;
  shadow?: boolean;
}
```

No floating label. Includes a search icon automatically.

## Usage

```tsx
<InputSearch placeholder="Search products..." onSearch={handleSearch} shadow />
<InputSearch placeholder="Filter items" onSearch={setFilter} />
```
