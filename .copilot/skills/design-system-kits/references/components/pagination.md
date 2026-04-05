# Pagination

Dot or number-based page indicator.

```typescript
type PaginationProps = {
  type?: 'default' | 'black_white' | 'number';
  activeIndex: number;
  dataLength: number;
};
```

- `default`: Colored dots, active dot expands (12×4px)
- `black_white`: Monochrome dot variant
- `number`: Shows current/total as text

> **Note:** For a scrollable dot indicator, import `PaginationScroll` directly instead of using the `Pagination` component. `PaginationScroll` extends `ScrollViewProps` and accepts an optional `scrollViewRef`.

## Usage

```tsx
<Pagination type="default" activeIndex={currentPage} dataLength={totalPages} />
<Pagination type="number" activeIndex={2} dataLength={10} />
```

**Scrollable variant (separate component):**
```tsx
import { PaginationScroll } from '@passionui/react-native-foundation';

<PaginationScroll scrollViewRef={scrollRef}>
  {/* scrollable content */}
</PaginationScroll>
```
