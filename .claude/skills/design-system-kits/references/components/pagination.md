# Pagination

Dot or number-based page indicator.

```typescript
type PaginationProps = {
  type?: 'default' | 'black_white' | 'number' | 'scroll';
  activeIndex: number;
  dataLength: number;
};
```

- `default`: Colored dots, active dot expands (12×4px)
- `black_white`: Monochrome dot variant
- `number`: Shows current/total as text
- `scroll`: Scrollable dot indicator

## Usage

```tsx
<Pagination type="default" activeIndex={currentPage} dataLength={totalPages} />
<Pagination type="number" activeIndex={2} dataLength={10} />
<Pagination type="scroll" activeIndex={scrollIndex} dataLength={20} />
```
