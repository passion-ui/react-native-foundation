# Grid Layout System

A responsive column-based grid powered by `GridContext`.

## Responsive behavior

| Screen width | Columns |
|-------------|---------|
| < 600px | 12 columns |
| ≥ 600px | 24 columns |

## Container

Grid wrapper that provides `GridContext` to children.

```typescript
interface ContainerProps extends ViewProps {
  gutter?: number;    // gap between items (default: 12)
  margin?: number;    // outer margin (default: 12)
  padding?: number;   // inner padding (default: 0)
  backgroundImage?: string;
}
```

## Item

Grid child sized by column spans.

```typescript
interface ItemProps extends ViewProps {
  widthSpan?: number;    // width in spans (1–12 or 1–24)
  heightSpan?: number;   // optional height in spans
}
```

## ContainerList

FlatList-based grid with entry animations.

```typescript
interface ContainerListProps extends FlatListProps<any> {
  widthSpan?: number;
  heightSpan?: number;
  margin?: number;
  padding?: number;
  gutter?: number;
  animationStyle?: 'fade-in-right' | 'fade-in-up';
}
```

## Card

Styled container with surface background, shadow, and rounded corners (Spacing.M radius).

## Span calculation

```
totalItemSize = (deviceWidth - margin×2) - gutter×(columns-1) - padding×2
sizePerSpan = totalItemSize / numberOfColumns
getSizeSpan(span) = span × sizePerSpan + (span-1) × gutter
```

`widthSpan={6}` on a 12-column grid = exactly half the available width.

## Usage examples

**Basic two-column grid:**
```tsx
<Container gutter={Spacing.M} margin={Spacing.L}>
  <Item widthSpan={6}>
    <Card><Text>Left half</Text></Card>
  </Item>
  <Item widthSpan={6}>
    <Card><Text>Right half</Text></Card>
  </Item>
</Container>
```

**Three-column layout:**
```tsx
<Container>
  <Item widthSpan={4}><Card><Text>1/3</Text></Card></Item>
  <Item widthSpan={4}><Card><Text>1/3</Text></Card></Item>
  <Item widthSpan={4}><Card><Text>1/3</Text></Card></Item>
</Container>
```

**Main content + sidebar:**
```tsx
<Container>
  <Item widthSpan={8}><Card><Text>Main content</Text></Card></Item>
  <Item widthSpan={4}><Card><Text>Sidebar</Text></Card></Item>
</Container>
```

**Animated scrollable product grid:**
```tsx
<ContainerList
  data={products}
  widthSpan={6}
  heightSpan={4}
  animationStyle="fade-in-up"
  renderItem={({ item }) => (
    <Card>
      <Image source={{ uri: item.image }} style={{ height: 120 }} />
      <Text typography="subhead">{item.name}</Text>
    </Card>
  )}
/>
```
