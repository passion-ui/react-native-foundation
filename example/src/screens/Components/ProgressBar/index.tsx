import {
  BottomTab,
  ProgressBar,
  ScreenContainerProps,
} from '@passionui/react-native-foundation';
import React from 'react';
import {
  Playground,
  PlaygroundProps,
  Preview,
  PreviewProps,
} from '@components';

const ProgressBarUsage: React.FC<ScreenContainerProps> = ({
  navigation,
  example,
}) => {
  const preview: PreviewProps = {
    component: ProgressBar,
    data: {
      percent: {
        title: 'Percent',
        value: [
          {
            value: 0,
          },
          {
            value: 50,
          },
          {
            value: 100,
          },
        ],
      },
    },
  };

  const playground: PlaygroundProps = {
    component: ProgressBar,
    data: {
      percent: {
        value: 50,
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

export default ProgressBarUsage;
