import {
  BottomTab,
  Button,
  ScreenContainerProps,
} from '@passionui/react-native-foundation';
import React from 'react';
import {
  Playground,
  PlaygroundProps,
  Preview,
  PreviewProps,
} from '@components';

const Types = ['primary', 'tonal', 'outline', 'text', 'disabled', 'gradient'];

const ButtonUsage: React.FC<ScreenContainerProps> = ({
  navigation,
  example,
}) => {
  const preview: PreviewProps = {
    component: Button,
    data: {
      type: {
        title: 'Type',
        value: Types.map((i) => {
          return {
            value: i,
          };
        }),
      },
      color: {
        title: 'Color',
        value: Types.map((i) => {
          return {
            value: '#088F8F',
            props: { type: i },
          };
        }),
      },
      size: {
        title: 'Size',
        value: [
          {
            value: 'small',
          },
          {
            value: 'medium',
          },
          {
            value: 'large',
          },
        ],
      },
      leading: {
        title: 'Leading',
        value: [
          {
            value: 'palette-swatch-outline',
            props: { type: 'primary' },
          },
          {
            value: 'palette-swatch-outline',
            props: { type: 'tonal' },
          },
          {
            value: 'palette-swatch-outline',
            props: { type: 'outline' },
          },
          {
            value: 'palette-swatch-outline',
            props: { type: 'text' },
          },
          {
            value: 'palette-swatch-outline',
            props: { type: 'disabled' },
          },
        ],
      },
      trailing: {
        title: 'Trailing',
        value: [
          {
            value: 'palette-swatch-outline',
          },
        ],
      },
      round: {
        title: 'Round',
        value: [
          {
            value: true,
            props: { type: 'primary' },
          },
          {
            value: true,
            props: { type: 'tonal' },
          },
          {
            value: true,
            props: { type: 'outline' },
          },
          {
            value: true,
            props: { type: 'text' },
          },
          {
            value: true,
            props: { type: 'disabled' },
          },
        ],
      },
      loading: {
        title: 'Loading',
        value: [
          {
            value: true,
            props: { type: 'primary' },
          },
          {
            value: true,
            props: { type: 'tonal' },
          },
          {
            value: true,
            props: { type: 'outline' },
          },
          {
            value: true,
            props: { type: 'text' },
          },
          {
            value: true,
            props: { type: 'disabled' },
          },
        ],
      },
    },
  };

  const playground: PlaygroundProps = {
    component: Button,
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
      size: {
        value: 'medium',
        type: 'enum',
        data: ['small', 'medium', 'large'],
      },
      leading: {
        value: 'palette-swatch-outline',
        type: 'string',
      },
      trailing: {
        value: 'transition',
        type: 'string',
      },
      round: {
        value: false,
        type: 'bool',
      },
      loading: {
        value: false,
        type: 'bool',
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

export default ButtonUsage;
