import type { ImageSourcePropType, TextProps } from 'react-native';

export interface IconProps extends TextProps {
  /**
   * Optional. Represents the type of the icon.
   */
  type?: 'FontAwesome' | 'FontAwesome5' | 'MaterialCommunityIcons' | 'Image';
  /**
   * Represents the identifier or the path for the icon image source.
   * It is a required property.
   */
  name: string | ImageSourcePropType;

  /**
   * Optional. Represents the size of the icon.
   * It can be used to set the width and height of the icon.
   */
  size?: number;

  /**
   *  Optional. Represents the color of the icon.
   */
  color?: string;
}
