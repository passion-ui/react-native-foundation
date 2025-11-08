import {
  ApplicationContext,
  BottomTab,
  ScreenContainerProps,
  Text,
} from '@passionui/react-native-foundation';
import React, { useContext } from 'react';
import {
  Playground,
  PlaygroundProps,
  Preview,
  PreviewProps,
} from '@components';

const Typography = [
  'largeTitle',
  'title1',
  'title2',
  'title3',
  'headline',
  'body',
  'callout',
  'subhead',
  'footnote',
  'caption1',
  'caption2',
];

const TextUsage: React.FC<ScreenContainerProps> = ({ navigation, example }) => {
  const { theme } = useContext(ApplicationContext);

  const preview: PreviewProps = {
    component: Text,
    data: {
      typography: {
        title: 'Typography',
        value: Typography.map((i) => {
          return {
            value: i,
            props: { children: i },
          };
        }),
      },
      color: {
        title: 'Color',
        direction: 'row',
        value: [
          {
            value: theme.colors.text.default,
            props: { children: 'default' },
          },
          {
            value: theme.colors.text.secondary,
            props: { children: 'secondary' },
          },
          {
            value: theme.colors.text.disable,
            props: { children: 'disable' },
          },
          {
            value: theme.colors.text.hint,
            props: { children: 'hint' },
          },
        ],
      },
    },
  };

  const playground: PlaygroundProps = {
    component: Text,
    data: {
      children: {
        value: 'Typography',
        type: 'string',
      },
      typography: {
        value: 'subhead',
        type: 'enum',
        data: Typography,
      },
      color: {
        value: theme.colors.text.default,
        type: 'enum',
        data: [
          theme.colors.text.default,
          theme.colors.text.secondary,
          theme.colors.text.hint,
          theme.colors.text.disable,
        ],
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

export default TextUsage;
