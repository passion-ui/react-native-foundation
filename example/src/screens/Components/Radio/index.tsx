import {
  BottomTab,
  Radio,
  ScreenContainerProps,
} from '@passionui/react-native-foundation';
import React from 'react';
import {
  Playground,
  PlaygroundProps,
  Preview,
  PreviewProps,
} from '@components';

const RadioUsage: React.FC<ScreenContainerProps> = ({
  navigation,
  example,
}) => {
  const preview: PreviewProps = {
    component: Radio,
    data: {
      value: {
        title: 'Value',
        direction: 'row',
        value: [
          {
            value: 'option_1',
            props: { groupValue: 'option' },
          },
          {
            value: 'option_1',
            props: { groupValue: 'option_1' },
          },
        ],
      },
      label: {
        title: 'Label',
        direction: 'row',
        value: [
          {
            value: 'Label',
            props: { groupValue: 'option' },
          },
        ],
      },
      disabled: {
        title: 'Disabled',
        direction: 'row',
        value: [
          {
            value: true,
            props: { groupValue: 'option' },
          },
          {
            value: true,
            props: { groupValue: 'option_1', value: 'option_1' },
          },
        ],
      },
    },
  };

  const playground: PlaygroundProps = {
    component: Radio,
    data: {
      value: {
        value: 'option_1',
        type: 'string',
      },
      groupValue: {
        value: 'option_1',
        type: 'string',
      },
      disabled: {
        value: false,
        type: 'bool',
      },
      label: {
        value: 'Label',
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

export default RadioUsage;
