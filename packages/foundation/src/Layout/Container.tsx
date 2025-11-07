import React from 'react';
import { View } from 'react-native';
import { useGridSystem } from './utils';
import type { ContainerProps } from './types';
import { Image } from '../Image';
import { Styles } from '../Consts/styles';

import styles from './styles';
import { GridContext } from '../Context';

const Container: React.FC<ContainerProps> = ({
  children,
  margin = 12,
  padding = 0,
  gutter = 12,
  backgroundImage,
  style,
}) => {
  const { numberOfColumns, widthDevice } = useGridSystem();
  const widthSection = widthDevice - margin * 2;
  const totalGutterSize = gutter * (numberOfColumns - 1);
  const totalItemSize = widthSection - totalGutterSize - padding * 2;
  const sizePerSpan = totalItemSize / numberOfColumns;

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
      <View
        style={[
          style,
          styles.protectedStyle,
          Styles.rowWrap,
          {
            width: widthSection,
            marginHorizontal: margin,
            padding,
            gap: gutter,
          },
        ]}
      >
        {!!backgroundImage && (
          <Image
            source={{ uri: backgroundImage }}
            style={styles.imageBackground}
          />
        )}
        {children}
      </View>
    </GridContext.Provider>
  );
};

export default Container;
