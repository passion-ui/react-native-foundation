import {
  BottomTab,
  ScreenContainerProps,
  Stepper,
} from '@passionui/react-native-foundation';
import React from 'react';
import {
  Playground,
  PlaygroundProps,
  Preview,
  PreviewProps,
} from '@components';

const StepperUsage: React.FC<ScreenContainerProps> = ({
  navigation,
  example,
}) => {
  const preview: PreviewProps = {
    component: Stepper,
    data: {
      defaultValue: {
        title: 'Value',
        direction: 'row',
        value: [{ defaultValue: 1 }, { defaultValue: 99 }],
      },
      min: {
        title: 'Min',
        direction: 'row',
        value: [{ value: 1, props: { defaultValue: 1, max: 5 } }],
      },
      max: {
        title: 'Max',
        direction: 'row',
        value: [{ value: 10, props: { defaultValue: 10 } }],
      },
    },
  };

  const playground: PlaygroundProps = {
    component: Stepper,
    data: {
      defaultValue: {
        value: 0,
        type: 'number',
      },
      min: {
        value: 1,
        type: 'number',
      },
      max: {
        value: 10,
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

export default StepperUsage;
