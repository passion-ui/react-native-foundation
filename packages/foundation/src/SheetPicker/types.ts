import type { FlatListProps } from 'react-native';
import type { ReactNode } from 'react';

export type PickerItem = {
  icon?: ReactNode;
  title: string;
  subTitle?: string;
  value: any;
};

export interface SheetPickerProps extends FlatListProps<PickerItem> {
  data: PickerItem[];
  selected?: PickerItem;
  onSelect: (data: any) => void;
  onRequestClose?: (callback?: () => void) => void;
}
