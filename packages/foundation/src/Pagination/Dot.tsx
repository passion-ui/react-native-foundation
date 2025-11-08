import { type FC, useContext } from 'react';
import { Animated } from 'react-native';
import { ApplicationContext } from '../Context';
import type { DotProps } from './types';
import styles from './styles';

const Dot: FC<DotProps> = ({ active, style }) => {
  const { theme } = useContext(ApplicationContext);
  const dotStyle = active
    ? [styles.activeDot]
    : [
        styles.inactiveDot,
        { backgroundColor: theme.colors.background.disable },
      ];

  return <Animated.View style={[style, dotStyle]} />;
};

export default Dot;
