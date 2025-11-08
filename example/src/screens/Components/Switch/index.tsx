import {
  BottomTab,
  ScreenContainerProps,
  Switch,
} from '@passionui/react-native-foundation';
import React from 'react';
import {
  Playground,
  PlaygroundProps,
  Preview,
  PreviewProps,
} from '@components';

const SwitchUsage: React.FC<ScreenContainerProps> = ({
  navigation,
  example,
}) => {
  const preview: PreviewProps = {
    component: Switch,
    data: {
      value: {
        title: 'Value',
        value: [{ value: true }, { value: false }],
      },
      disabled: {
        title: 'Disabled',
        value: [
          {
            value: true,
            props: {
              value: true,
            },
          },
          {
            value: true,
            props: {
              value: false,
            },
          },
        ],
      },
    },
  };

  const playground: PlaygroundProps = {
    component: Switch,
    data: {
      value: {
        value: true,
        type: 'bool',
      },
      disabled: {
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

export default SwitchUsage;
