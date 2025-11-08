import {
  BottomTab,
  IconButton,
  ScreenContainerProps,
} from '@passionui/react-native-foundation';
import React from 'react';
import {
  Playground,
  PlaygroundProps,
  Preview,
  PreviewProps,
} from '@components';

const Types = ['primary', 'tonal', 'secondary', 'outline', 'disabled'];

const IconButtonUsage: React.FC<ScreenContainerProps> = ({
  navigation,
  example,
}) => {
  const preview: PreviewProps = {
    component: IconButton,
    data: {
      type: {
        title: 'Type',
        direction: 'row',
        value: Types.map((i) => {
          return {
            value: i,
            props: { icon: 'palette-swatch-outline' },
          };
        }),
      },
      color: {
        title: 'Color',
        direction: 'row',
        value: Types.map((i) => {
          return {
            value: '#088F8F',
            props: { type: i, icon: 'palette-swatch-outline' },
          };
        }),
      },
      icon: {
        title: 'Icon',
        direction: 'row',
        value: [
          {
            value: 'palette-swatch-outline',
          },
          {
            value: 'shape-outline',
          },
          {
            value: 'transition',
          },
        ],
      },
      size: {
        title: 'Size',
        direction: 'row',
        value: [
          {
            value: 'small',
            props: { icon: 'palette-swatch-outline' },
          },
          {
            value: 'medium',
            props: { icon: 'palette-swatch-outline' },
          },
          {
            value: 'large',
            props: { icon: 'palette-swatch-outline' },
          },
        ],
      },
      shape: {
        title: 'Shape',
        direction: 'row',
        value: [
          {
            value: 'circle',
            props: { icon: 'palette-swatch-outline' },
          },
          {
            value: 'rounded',
            props: { icon: 'palette-swatch-outline' },
          },
        ],
      },
    },
  };

  const playground: PlaygroundProps = {
    component: IconButton,
    data: {
      type: {
        value: 'primary',
        type: 'enum',
        data: Types,
      },
      color: {
        value: '#088F8F',
        type: 'string',
      },
      icon: {
        value: 'palette-swatch-outline',
        type: 'string',
      },
      size: {
        value: 'large',
        type: 'enum',
        data: ['small', 'large'],
      },
      useHaptic: {
        value: false,
        type: 'bool',
      },
    },
  };

  return (
    <BottomTab
      tabs={[
        {
          name: 'Preview',
          icon: 'eye-outline',
          screen: (props) => <Preview {...props} {...preview} />,
        },
        {
          name: 'Playground',
          icon: 'school-outline',
          screen: (props) => <Playground {...props} {...playground} />,
          initialParams: { example },
        },
      ]}
      navigation={navigation}
    />
  );
};

export default IconButtonUsage;
