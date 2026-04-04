# SheetPicker

Searchable selection list — typically shown in a bottom sheet.

```typescript
type PickerItem = {
  icon?: ReactNode;
  title: string;
  subTitle?: string;
  value: any;
};

interface SheetPickerProps extends Omit<FlatListProps<PickerItem>, 'renderItem'> {
  data: PickerItem[];
  selected?: PickerItem;
  onSelect: (data: any) => void;
  onRequestClose?: (callback?: () => void) => void;
  renderItem?: ListRenderItem<PickerItem>;
}
```

- Built-in search filtering (case-insensitive by title)
- Radio-based selection indicator
- Max height: 70% of screen

## Usage

```tsx
navigator.showBottomSheet({
  component: () => (
    <SheetPicker
      data={[
        { title: 'English', value: 'en', icon: <Image source={flags.en} /> },
        { title: 'Tiếng Việt', value: 'vi', icon: <Image source={flags.vi} /> },
      ]}
      selected={selectedLang}
      onSelect={(item) => setSelectedLang(item)}
    />
  ),
});
```
