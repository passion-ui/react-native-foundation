import type { FlatListProps, ListRenderItem } from 'react-native';
import type { ReactNode } from 'react';

export type PickerItem = {
  icon?: ReactNode;
  title: string;
  subTitle?: string;
  value: any;
};

export interface SheetPickerProps
  extends Omit<FlatListProps<PickerItem>, 'renderItem'> {
  data: PickerItem[];
  selected?: PickerItem;
  onSelect: (data: any) => void;
  onRequestClose?: (callback?: () => void) => void;
  renderItem?: ListRenderItem<PickerItem> | null | undefined;
}
