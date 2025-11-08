import {
  ApplicationContext,
  BottomTab,
  InputDropDown,
  ScreenContainerProps,
} from '@passionui/react-native-foundation';
import React, { useContext } from 'react';
import {
  Playground,
  Preview,
  PlaygroundProps,
  PreviewProps,
} from '@components';

const InputDropDownUsage: React.FC<ScreenContainerProps> = ({
  navigation,
  example,
}) => {
  const { theme } = useContext(ApplicationContext);

  const preview: PreviewProps = {
    component: InputDropDown,
    data: {
      value: {
        title: 'Value',
        value: [
          {
            value: 'Value',
          },
        ],
      },
      size: {
        title: 'Size',
        value: [
          {
            value: 'small',
            props: { floatingValue: 'Floating' },
          },
          {
            value: 'large',
            props: { floatingValue: 'Floating' },
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
              placeholder: 'Select options',
            },
          },
        ],
      },
      placeholder: {
        title: 'Placeholder',
        value: [
          {
            value: 'Select options',
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
      leading: {
        title: 'Leading',
        value: [
          {
            value: 'palette-swatch-outline',
            props: {
              floatingValue: 'Floating',
              placeholder: 'Select options',
            },
          },
        ],
      },
      trailing: {
        title: 'Trailing',
        value: [
          {
            value: 'palette-swatch-outline',
            props: {
              floatingValue: 'Floating',
              placeholder: 'Select options',
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
              floatingValue: 'Floating',
              placeholder: 'Select options',
              icon: 'palette-swatch-outline',
            },
          },
        ],
      },
      required: {
        title: 'Required',
        value: [
          {
            value: true,
            props: {
              floatingValue: 'Floating',
              placeholder: 'Select options',
              icon: 'palette-swatch-outline',
            },
          },
        ],
      },
      disabled: {
        title: 'Disabled',
        value: [
          {
            value: true,
            props: {
              floatingValue: 'Floating',
              placeholder: 'Select options',
            },
          },
        ],
      },
    },
  };
  const playground: PlaygroundProps = {
    component: InputDropDown,
    data: {
      value: {
        value: 'Value',
        type: 'string',
      },
      size: {
        value: 'small',
        type: 'enum',
        data: ['small', 'large'],
      },
      floatingValue: {
        value: 'Floating value',
        type: 'string',
      },
      floatingIcon: {
        value: 'palette-swatch-outline',
        type: 'string',
      },
      floatingIconColor: {
        value: undefined,
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
      leading: {
        value: 'shape-outline',
        type: 'string',
      },
      trailing: {
        value: 'shape-outline',
        type: 'string',
      },
      iconColor: {
        value: undefined,
        type: 'string',
      },
      required: {
        value: false,
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

export default InputDropDownUsage;
