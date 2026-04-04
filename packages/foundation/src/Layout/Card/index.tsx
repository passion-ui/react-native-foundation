import React, { useContext } from 'react';
import { View } from 'react-native';

import type { CardProps } from './types';
import styles from './styles';
import { ApplicationContext } from '../../Context';
import { Shadow, Spacing } from '../../Consts';

const Card: React.FC<CardProps> = ({ style, children }) => {
  const { theme } = useContext(ApplicationContext);

  return (
    <View
      style={[
        styles.container,
        Shadow.light,
        {
          borderRadius: Spacing.M,
          backgroundColor: theme.colors.background.surface,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default Card;
