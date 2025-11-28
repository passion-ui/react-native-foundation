# SheetPicker

```typescript
type PickerItem = {
  icon?: ReactNode;
  title: string;
  subTitle?: string;
  value: any;
};

type SheetPickerProps = Omit<FlatListProps<PickerItem>, 'renderItem'> & {
  data: PickerItem[];
  selected?: PickerItem;
  onSelect: (data: any) => void;
  onRequestClose?: (callback?: () => void) => void;
  renderItem?: ListRenderItem<PickerItem> | null;
};
```

Shown via `navigator.showBottomSheet`:

```typescript
navigator.showBottomSheet({
  title: 'Select',
  screen: (props) => (
    <SheetPicker {...props}
      data={[{ title: 'Option A', value: 'a' }, { title: 'Option B', value: 'b' }]}
      selected={current}
      onSelect={(item) => { setValue(item.value); props.onRequestClose?.(); }}
    />
  ),
});
```
