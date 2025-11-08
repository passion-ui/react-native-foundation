import { type FC, useContext, useState } from 'react';
import {
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

import type { PickerItem, SheetPickerProps } from './types';
import styles from './styles';
import { ApplicationContext } from '../Context';
import InputSearch from '../Input/InputSearch';
import { Radio } from '../Radio';
import { SizedBox } from '../SizedBox';
import { Spacing, Styles } from '../Consts';
import { Text } from '../Text';

const SheetPicker: FC<SheetPickerProps> = ({
  data,
  selected,
  onSelect,
  renderItem,
  onRequestClose,
}) => {
  const { height: heightDevice } = useWindowDimensions();
  const { theme, navigator } = useContext(ApplicationContext);
  const [search, setSearch] = useState('');

  /**
   * on action popup
   * @param callback
   */
  const onAction = (callback?: () => void) => {
    if (typeof onRequestClose === 'function') {
      onRequestClose?.(callback);
    } else {
      navigator?.pop();
      setTimeout(() => {
        callback?.();
      }, 300);
    }
  };

  const defaultRenderItem = ({ item }: any) => {
    const index = data?.findIndex((i) => i.value === item.value);
    let borderColor = theme.colors.border.default;
    if (item.value === selected?.value) {
      borderColor = theme.colors.primary.default;
    }

    return (
      <TouchableOpacity
        onPress={() => {
          onAction(() => {
            onSelect(index);
          });
        }}
        style={[
          styles.item,
          {
            borderColor,
            backgroundColor: theme.colors.background.surface,
          },
        ]}
      >
        {!!item.icon && (
          <>
            {item.icon}
            <SizedBox width={Spacing.S} />
          </>
        )}
        <View style={Styles.flex}>
          <Text typography={'subhead'} fontWeight={'bold'}>
            {item.title}
          </Text>
          {item.subTitle && (
            <Text typography={'caption2'} fontWeight={'medium'}>
              {item.subTitle}
            </Text>
          )}
        </View>
        <Radio
          value={item.value}
          groupValue={selected?.value}
          onChange={() => {
            onAction(() => {
              onSelect(index);
            });
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View style={Styles.paddingM}>
        <InputSearch
          placeholder={'Search option'}
          defaultValue={search}
          onChangeText={setSearch}
        />
      </View>
      <FlatList
        renderItem={renderItem ?? defaultRenderItem}
        style={{ maxHeight: heightDevice * 0.7 }}
        contentContainerStyle={Styles.paddingHorizontalM}
        data={data.filter((item: PickerItem) => {
          return item.title.toUpperCase().includes(search.toUpperCase());
        })}
        ItemSeparatorComponent={() => <View style={{ height: Spacing.S }} />}
        keyExtractor={(item) => item.title}
      />
      <SizedBox height={Spacing.M} />
    </View>
  );
};

export { SheetPicker };
