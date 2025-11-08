import {
  Badge,
  BottomTab,
  ScreenContainerProps,
} from '@passionui/react-native-foundation';
import React from 'react';
import {
  Playground,
  PlaygroundProps,
  Preview,
  PreviewProps,
} from '@components';

const BadgeUsage: React.FC<ScreenContainerProps> = ({
  navigation,
  example,
}) => {
  const preview: PreviewProps = {
    component: Badge,
    data: {
      label: {
        title: 'Label',
        direction: 'row',
        value: [{ value: '9' }, { value: 'closed' }],
      },
      type: {
        title: 'Type',
        direction: 'row',
        value: [{ value: 'dot' }, { value: 'default' }],
      },
    },
  };

  const playground: PlaygroundProps = {
    component: Badge,
    data: {
      label: {
        value: 'label',
        type: 'string',
      },
      type: {
        value: 'default',
        type: 'enum',
        data: ['default', 'dot'],
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

export default BadgeUsage;
