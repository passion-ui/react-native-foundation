import React, { useContext } from 'react';
import type { ImageRequireSource } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ApplicationContext } from '../Application';
import type { IconProps } from './types';
import { Image } from '../Image';

const Icon: React.FC<IconProps> = ({
  type,
  name,
  size = 24,
  color,
  ...rest
}) => {
  const { theme } = useContext(ApplicationContext);

  let Component: any;
  switch (type) {
    case 'FontAwesome5':
      Component = FontAwesome5;
      break;
    case 'FontAwesome':
      Component = FontAwesome;
      break;
    default:
      Component = MaterialCommunityIcons;
      break;
  }

  if (type === 'Image') {
    return (
      <Image
        source={name as ImageRequireSource}
        style={{ width: size, height: size } as any}
        resizeMode={'contain'}
        {...rest}
      />
    );
  }

  return (
    <Component
      {...rest}
      name={name as string}
      size={size}
      color={color ?? theme.colors.text.default}
    />
  );
};

export { Icon };
