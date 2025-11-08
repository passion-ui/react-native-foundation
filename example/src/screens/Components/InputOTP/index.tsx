import {
  ApplicationContext,
  BottomTab,
  InputOTP,
  ScreenContainerProps,
} from '@passionui/react-native-foundation';
import React, { useContext } from 'react';
import {
  Playground,
  PlaygroundProps,
  Preview,
  PreviewProps,
} from '@components';

const InputOTPUsage: React.FC<ScreenContainerProps> = ({
  navigation,
  example,
}) => {
  const { theme } = useContext(ApplicationContext);

  const preview: PreviewProps = {
    component: InputOTP,
    data: {
      value: {
        title: 'Value',
        value: [
          {
            value: '',
          },
        ],
      },
      floatingValue: {
        title: 'Floating Value',
        value: [
          {
            value: 'Floating',
          },
        ],
      },
      floatingIcon: {
        title: 'Floating Icon',
        value: [
          {
            value: 'palette-swatch-outline',
            props: { floatingValue: 'Floating' },
          },
        ],
      },
      floatingIconColor: {
        title: 'Floating Icon Color',
        value: [
          {
            value: theme.colors.primary.default,
            props: {
              floatingValue: 'Floating',
              floatingIcon: 'palette-swatch-outline',
              placeholder: 'Placeholder input',
            },
          },
        ],
      },
      placeholder: {
        title: 'Placeholder',
        value: [
          {
            value: 'Placeholder input',
            props: { floatingValue: 'Floating' },
          },
        ],
      },
      error: {
        title: 'Error',
        value: [
          {
            value: 'Error input',
            props: { floatingValue: 'Floating', value: 'value not correct' },
          },
        ],
      },
    },
  };
  const playground: PlaygroundProps = {
    component: InputOTP,
    data: {
      length: {
        type: 'number',
        value: 6,
      },
      floatingValue: {
        value: 'Floating value',
        type: 'string',
      },
      placeholder: {
        value: 'Input placeholder',
        type: 'string',
      },
      error: {
        value: 'Input error',
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

export default InputOTPUsage;
