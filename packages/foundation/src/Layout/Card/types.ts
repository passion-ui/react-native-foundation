import type { StyleProp, ViewStyle } from 'react-native';
import React from 'react';

export interface CardProps {
  /**
   * Override or extend the default card styles.
   */
  style?: StyleProp<ViewStyle>;

  children?: React.ReactNode;
}
