import {
  BottomTab,
  ScreenContainerProps,
  Steps,
} from '@passionui/react-native-foundation';
import React from 'react';
import {
  Playground,
  PlaygroundProps,
  Preview,
  PreviewProps,
} from '@components';

const StepsUsage: React.FC<ScreenContainerProps> = ({
  navigation,
  example,
}) => {
  const preview: PreviewProps = {
    component: Steps,
    data: {
      size: {
        title: 'Size',
        value: [
          {
            value: 'small',
            props: {
              steps: [
                {
                  title: 'ABC',
                  description: 'Description',
                  time: '18:20',
                },
                {
                  title: 'ABC',
                  description: 'Description',
                  time: '18:20',
                },
                {
                  title: 'ABC',
                  description: 'Description',
                  time: '18:20',
                },
                {
                  title: 'ABC',
                  description: 'Description',
                  time: '18:20',
                },
              ],
            },
          },
          {
            value: 'large',
            props: {
              steps: [
                {
                  title: 'ABC',
                  description: 'Description',
                  time: '18:20',
                },
                {
                  title: 'ABC',
                  description: 'Description',
                  time: '18:20',
                },
                {
                  title: 'ABC',
                  description: 'Description',
                  time: '18:20',
                },
                {
                  title: 'ABC',
                  description: 'Description',
                  time: '18:20',
                },
              ],
            },
          },
        ],
      },
      activeIndex: {
        title: 'Index Active',
        value: [
          {
            value: 1,
            props: {
              steps: [
                {
                  title: 'ABC',
                  description: 'Description',
                  time: '18:20',
                },
                {
                  title: 'ABC',
                  description: 'Description',
                  time: '18:20',
                },
                {
                  title: 'ABC',
                  description: 'Description',
                  time: '18:20',
                },
                {
                  title: 'ABC',
                  description: 'Description',
                  time: '18:20',
                },
              ],
            },
          },
          {
            value: 2,
            props: {
              steps: [
                {
                  title: 'ABC',
                  description: 'Description',
                  time: '18:20',
                },
                {
                  title: 'ABC',
                  description: 'Description',
                  time: '18:20',
                },
                {
                  title: 'ABC',
                  description: 'Description',
                  time: '18:20',
                },
                {
                  title: 'ABC',
                  description: 'Description',
                  time: '18:20',
                },
              ],
            },
          },
        ],
      },
      direction: {
        title: 'Direction',
        value: [
          {
            value: 'horizontal',
            props: {
              activeIndex: 2,
              steps: [
                {
                  title: 'ABC',
                  description: 'Description',
                  time: '18:20',
                },
                {
                  title: 'ABC',
                  description: 'Description',
                  time: '18:20',
                },
                {
                  title: 'ABC',
                  description: 'Description',
                  time: '18:20',
                },
                {
                  title: 'ABC',
                  description: 'Description',
                  time: '18:20',
                },
              ],
            },
          },
          {
            value: 'vertical',
            props: {
              activeIndex: 2,
              steps: [
                {
                  title: 'ABC',
                  description: 'Description',
                  time: '18:20',
                },
                {
                  title: 'ABC',
                  description: 'Description',
                  time: '18:20',
                },
                {
                  title: 'ABC',
                  description: 'Description',
                  time: '18:20',
                },
                {
                  title: 'ABC',
                  description: 'Description',
                  time: '18:20',
                },
              ],
            },
          },
        ],
      },
    },
  };
  const playground: PlaygroundProps = {
    component: Steps,
    data: {
      size: {
        value: 'small',
        type: 'enum',
        data: ['small', 'large'],
      },
      activeIndex: {
        value: 0,
        type: 'number',
      },
      direction: {
        value: 'horizontal',
        type: 'enum',
        data: ['horizontal', 'vertical'],
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

export default StepsUsage;
