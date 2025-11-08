import {
  ApplicationContext,
  BottomTab,
  Icon,
  ScreenContainerProps,
} from '@passionui/react-native-foundation';
import React, { useContext } from 'react';
import {
  Playground,
  PlaygroundProps,
  Preview,
  PreviewProps,
} from '@components';

const Icons = ['palette-swatch-outline', 'shape-outline', 'transition'];

const IconUsage: React.FC<ScreenContainerProps> = ({ navigation, example }) => {
  const { theme } = useContext(ApplicationContext);

  const preview: PreviewProps = {
    component: Icon,
    data: {
      name: {
        title: 'Name',
        direction: 'row',
        value: Icons.map((i) => {
          return {
            value: i,
          };
        }),
      },
      type: {
        title: 'Type',
        direction: 'row',
        value: ['MaterialCommunityIcons', 'FontAwesome'].map((i) => {
          return {
            value: i,
            props: { name: 'home' },
          };
        }),
      },
      color: {
        title: 'Color',
        direction: 'row',
        value: [
          {
            value: theme.colors.primary.default,
            props: { name: 'home-outline' },
          },
          {
            value: theme.colors.secondary.default,
            props: { name: 'home-outline' },
          },
          {
            value: theme.colors.error.default,
            props: { name: 'home-outline' },
          },
          {
            value: theme.colors.text.default,
            props: { name: 'home-outline' },
          },
        ],
      },
      size: {
        title: 'Size',
        direction: 'row',
        value: [
          {
            value: 16,
            props: { name: 'home-outline' },
          },
          {
            value: 24,
            props: { name: 'home-outline' },
          },
          {
            value: 32,
            props: { name: 'home-outline' },
          },
        ],
      },
    },
  };

  const playground: PlaygroundProps = {
    component: Icon,
    data: {
      type: {
        value: 'MaterialCommunityIcons',
        type: 'enum',
        data: ['MaterialCommunityIcons', 'FontAwesome'],
      },
      name: {
        value: 'palette-swatch-outline',
        type: 'string',
      },
      color: {
        value: theme.colors.text.default,
        type: 'string',
      },
      size: {
        value: 24,
        type: 'number',
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

export default IconUsage;
