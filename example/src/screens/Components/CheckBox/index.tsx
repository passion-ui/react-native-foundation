import {
  BottomTab,
  CheckBox,
  ScreenContainerProps,
} from '@passionui/react-native-foundation';
import React from 'react';
import {
  Playground,
  PlaygroundProps,
  Preview,
  PreviewProps,
} from '@components';

const CheckBoxUsage: React.FC<ScreenContainerProps> = ({
  navigation,
  example,
}) => {
  const preview: PreviewProps = {
    component: CheckBox,
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
      label: {
        title: 'Label',
        value: [
          {
            value: 'Label',
            props: {
              value: true,
            },
          },
        ],
      },
      indeterminate: {
        title: 'Indeterminate',
        value: [
          {
            value: true,
          },
        ],
      },
    },
  };

  const playground: PlaygroundProps = {
    component: CheckBox,
    data: {
      value: {
        value: true,
        type: 'bool',
      },
      disabled: {
        value: false,
        type: 'bool',
      },
      label: {
        value: 'label',
        type: 'string',
      },
      indeterminate: {
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

export default CheckBoxUsage;
