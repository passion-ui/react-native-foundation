import type { ViewProps } from 'react-native';

export interface ContainerProps extends ViewProps {
  gutter?: number;
  margin?: number;
  padding?: number;
  backgroundImage?: string;
}

export interface ItemProps extends ViewProps {
  /**
   * Represents the width of the Card component in terms of span numbers (1-12).
   */
  widthSpan?: number;

  /**
   * Optional. Represents the height of the Card component in terms of span numbers (1-12).
   */
  heightSpan?: number;
}

export type { CardProps } from './Card/types';
