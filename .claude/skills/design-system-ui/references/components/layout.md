# Layout (Container, Item, ContainerList)

12-column grid system.

## Container (Grid Parent)

```typescript
type ContainerProps = ViewProps & {
  gutter?: number;                        // default: 12
  margin?: number;                        // default: 12
  padding?: number;                       // default: 0
  backgroundImage?: string;
};
```

## Item (Grid Child)

```typescript
type ItemProps = ViewProps & {
  widthSpan?: number;                     // 1-12 columns
  heightSpan?: number;
};
```

## ContainerList (Scrollable Grid)

FlatList-based grid:

```typescript
{
  data: any[];
  renderItem: ListRenderItem;
  widthSpan?: number;          // default column span per item
  gutter?: number;
  margin?: number;
  padding?: number;
  scrollEnabled?: boolean;
  keyExtractor?: (item, index) => string;
  ListHeaderComponent?: ReactNode;
  ListFooterComponent?: ReactNode;
}
```

Example: `widthSpan={4}` = 3 items per row, `widthSpan={6}` = 2 per row.
