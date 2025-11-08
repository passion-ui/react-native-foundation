import {
  BottomTab,
  ScreenContainerProps,
  Skeleton,
} from '@passionui/react-native-foundation';
import React from 'react';
import {
  Playground,
  PlaygroundProps,
  Preview,
  PreviewProps,
} from '@components';

const SkeletonUsage: React.FC<ScreenContainerProps> = ({
  navigation,
  example,
}) => {
  const preview: PreviewProps = {
    component: Skeleton,
    data: {
      style: {
        title: 'Style',
        value: [
          {
            value: { width: '100%', height: 160 },
          },
          {
            value: { width: 160, height: 160 },
          },
        ],
      },
    },
  };

  const playground: PlaygroundProps = {
    component: Skeleton,
    data: {
      style: {
        value: { width: '100%', height: 160 },
        type: 'object',
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

export default SkeletonUsage;
