import {
  ApplicationContext,
  BottomTab,
  ScreenContainerProps,
  Tag,
} from '@passionui/react-native-foundation';
import React, { useContext } from 'react';
import {
  Playground,
  PlaygroundProps,
  Preview,
  PreviewProps,
} from '@components';

const TagUsage: React.FC<ScreenContainerProps> = ({ navigation, example }) => {
  const { theme } = useContext(ApplicationContext);

  const preview: PreviewProps = {
    component: Tag,
    data: {
      type: {
        title: 'Type',
        direction: 'row',
        value: [{ value: 'default' }, { value: 'rating' }],
      },
      size: {
        title: 'Size',
        direction: 'row',
        value: [{ value: 'small' }, { value: 'medium' }, { value: 'large' }],
      },
      label: {
        title: 'Label',
        direction: 'row',
        value: [{ value: 'sale' }, { value: 'opening' }, { value: 'closed' }],
      },
      icon: {
        title: 'Icon',
        direction: 'row',
        value: [
          { value: 'palette-swatch-outline' },
          { value: 'shape-outline' },
          { value: 'transition' },
        ],
      },
      color: {
        title: 'Color',
        direction: 'row',
        value: [
          { value: theme.colors.primary.default },
          { value: theme.colors.secondary.default },
          { value: theme.colors.error.default },
        ],
      },
    },
  };

  const playground: PlaygroundProps = {
    component: Tag,
    data: {
      label: {
        value: 'label',
        type: 'string',
      },
      type: {
        value: 'default',
        type: 'enum',
        data: ['default', 'rating'],
      },
      size: {
        value: 'medium',
        type: 'enum',
        data: ['small', 'medium', 'large'],
      },
      icon: {
        value: 'palette-swatch-outline',
        type: 'string',
      },
      color: {
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

export default TagUsage;
