import { type FC, useEffect, useRef } from 'react';
import { Animated as AnimatedRN, type FlatListProps } from 'react-native';
import { Item } from './index';
import { SizedBox } from '../SizedBox';

import Animated, { FadeInRight, FadeInUp } from 'react-native-reanimated';
import styles from './styles';
import { useGridSystem } from './utils';
import { GridContext } from '../Context';

export interface ItemListProps extends FlatListProps<any> {
  /**
   * Represents the width of the item in terms of span numbers (1-12).
   */
  widthSpan?: number;
  /**
   * Represents the height of the item in terms of span numbers (1-12).
   */
  heightSpan?: number;
  /**
   * Represents the style of the container.
   */
  margin?: number;
  /**
   * Represents the padding of the container.
   */
  padding?: number;
  /**
   * Represents the gutter of the container.
   */
  gutter?: number;
  /**
   * Animation direction for items.
   * 'from-right' (default): Items slide in from right to left
   * 'from-bottom': Items slide in from bottom to top
   */
  animationStyle?: 'fade-in-right' | 'fade-in-up';
}

const ContainerList: FC<ItemListProps> = ({
  renderItem,
  widthSpan,
  heightSpan,
  margin = 0,
  padding = 0,
  gutter = 12,
  style,
  contentContainerStyle,
  horizontal,
  animationStyle = 'from-right',
  ...props
}) => {
  const { numberOfColumns, widthDevice } = useGridSystem();
  const widthSection = widthDevice - margin * 2;
  const totalGutterSize = gutter * (numberOfColumns - 1);
  const totalItemSize = widthSection - totalGutterSize - padding * 2;
  const sizePerSpan = totalItemSize / numberOfColumns;
  const refLength = useRef(0);
  const widthItem = (widthSpan ?? numberOfColumns) as number;
  const numColumns = horizontal ? 1 : Math.floor(numberOfColumns / widthItem);

  useEffect(() => {
    if (props?.data && props?.data?.length > refLength.current) {
      refLength.current = props?.data?.length;
    }
  }, [props?.data]);

  const _renderItem = (data: any) => {
    const Animation = animationStyle === 'from-right' ? FadeInRight : FadeInUp;

    return (
      <Animated.View
        entering={Animation.duration(500).delay(
          (data?.index - refLength.current) * 50
        )}
      >
        <Item widthSpan={widthItem} heightSpan={heightSpan}>
          {renderItem?.(data)}
        </Item>
      </Animated.View>
    );
  };

  return (
    <GridContext.Provider
      value={{
        numberOfColumns,
        gutter,
        sizePerSpan,
        getSizeSpan: (span) => {
          return span * sizePerSpan + (span - 1) * gutter;
        },
      }}
    >
      <AnimatedRN.FlatList
        {...props}
        key={`ItemList-${numColumns}`}
        horizontal={horizontal}
        numColumns={numColumns}
        renderItem={_renderItem}
        columnWrapperStyle={numColumns !== 1 && { gap: gutter }}
        ItemSeparatorComponent={() => (
          <SizedBox width={gutter} height={gutter} />
        )}
        style={[
          style,
          styles.protectedStyle,
          {
            width: widthSection,
            marginHorizontal: margin,
          },
        ]}
        contentContainerStyle={[
          contentContainerStyle,
          styles.protectedStyle,
          { padding },
        ]}
      />
    </GridContext.Provider>
  );
};

export default ContainerList;
