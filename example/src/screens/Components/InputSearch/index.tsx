import {
  ApplicationContext,
  BottomTab,
  InputSearch,
  ScreenContainerProps,
} from '@passionui/react-native-foundation';
import React, { useContext } from 'react';
import {
  Playground,
  PlaygroundProps,
  Preview,
  PreviewProps,
} from '@components';

const InputSearchUsage: React.FC<ScreenContainerProps> = ({
  navigation,
  example,
}) => {
  const { theme } = useContext(ApplicationContext);

  const preview: PreviewProps = {
    component: InputSearch,
    data: {
      value: {
        title: 'Value',
        value: [
          {
            value: 'Input value',
          },
        ],
      },
      size: {
        title: 'Size',
        value: [
          {
            value: 'small',
            props: { value: 'Input value' },
          },
          {
            value: 'medium',
            props: { value: 'Input value' },
          },
          {
            value: 'large',
            props: { value: 'Input value' },
          },
        ],
      },
      useShadow: {
        title: 'Use Shadow',
        value: [
          {
            value: false,
            props: { value: 'Input value' },
          },
          {
            value: true,
            props: { value: 'Input value', size: 'large' },
          },
        ],
      },
      placeholder: {
        title: 'Placeholder',
        value: [
          {
            value: 'Placeholder input',
          },
        ],
      },
      icon: {
        title: 'Icon',
        value: [
          {
            value: 'palette-swatch-outline',
            props: {
              placeholder: 'Placeholder input',
            },
          },
        ],
      },
      iconColor: {
        title: 'Icon Color',
        value: [
          {
            value: theme.colors.primary.default,
            props: {
              placeholder: 'Placeholder input',
              icon: 'palette-swatch-outline',
            },
          },
        ],
      },
    },
  };

  const playground: PlaygroundProps = {
    component: InputSearch,
    data: {
      value: {
        value: 'Input value',
        type: 'string',
      },
      size: {
        value: 'small',
        type: 'enum',
        data: ['small', 'large'],
      },
      useShadow: {
        value: false,
        type: 'bool',
      },
      placeholder: {
        value: 'Input placeholder',
        type: 'string',
      },
      icon: {
        value: 'palette-swatch-outline',
        type: 'string',
      },
      iconColor: {
        value: theme.colors.primary.default,
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

export default InputSearchUsage;
