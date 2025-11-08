import {
  ApplicationContext,
  BottomTab,
  Divider,
  ScreenContainerProps,
} from '@passionui/react-native-foundation';
import React, { useContext } from 'react';
import {
  Playground,
  PlaygroundProps,
  Preview,
  PreviewProps,
} from '@components';

const DividerUsage: React.FC<ScreenContainerProps> = ({
  navigation,
  example,
}) => {
  const { theme } = useContext(ApplicationContext);

  const preview: PreviewProps = {
    component: Divider,
    data: {
      type: {
        title: 'Type',
        value: [
          {
            value: 'line',
          },
          {
            value: 'dash',
          },
          {
            value: 'dash',
            props: {
              direction: 'horizontal',
              dashSpecs: {
                useDot: true,
                dashGap: 4,
                dotColor: theme.colors.background.default,
              },
            },
          },
        ],
      },
      size: {
        title: 'Size',
        value: [
          {
            value: 1,
          },
          {
            value: 2,
          },
        ],
      },
      direction: {
        title: 'Direction',
        value: [
          {
            value: 'horizontal',
          },
          {
            value: 'vertical',
            props: {
              type: 'dash',
              style: {
                height: 48,
              },
            },
          },
          {
            value: 'vertical',
            props: {
              type: 'dash',
              style: {
                height: 48,
              },
              dashSpecs: {
                useDot: true,
                dashGap: 4,
                dotColor: theme.colors.background.default,
              },
            },
          },
        ],
      },
      color: {
        title: 'Color',
        value: [
          {
            value: theme.colors.primary.default,
            props: { groupValue: 'option' },
          },
          {
            value: theme.colors.secondary.default,
          },
        ],
      },
    },
  };

  const playground: PlaygroundProps = {
    component: Divider,
    data: {
      type: {
        value: 'line',
        type: 'enum',
        data: ['line', 'dash'],
      },
      size: {
        value: 1,
        type: 'number',
      },
      direction: {
        value: 'horizontal',
        type: 'enum',
        data: ['horizontal', 'enum'],
      },
      color: {
        value: undefined,
        type: 'string',
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

export default DividerUsage;
