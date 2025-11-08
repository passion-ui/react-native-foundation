import React, { useContext } from 'react';
import type { ImageRequireSource } from 'react-native';

import { ApplicationContext } from '../Context';
import type { IconProps } from './types';
import { Image, VectorIcons } from '../Adapters';

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
      Component = VectorIcons.FontAwesome5;
      break;
    case 'FontAwesome':
      Component = VectorIcons.FontAwesome;
      break;
    default:
      Component = VectorIcons.MaterialCommunityIcons;
      break;
  }

  if (type === 'Image') {
    return (
      <Image
        {...rest}
        source={name as ImageRequireSource}
        style={{ width: size, height: size } as any}
        resizeMode={'contain'}
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
