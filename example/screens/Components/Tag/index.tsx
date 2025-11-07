import { Linking } from 'react-native';
import {
  ApplicationContext,
  HeaderRightAction,
  NavigationButton,
  Screen,
  ScreenContainerProps,
  Tag,
} from '@passionui/react-native-foundation';
import React, { useContext, useEffect, useState } from 'react';
import Preview from '../../../components/Preview';
import Playground from '../../../components/Playground';
import { PlaygroundProps } from '../../../components/Playground/types';
import { PreviewProps } from '../../../components/Preview/types';

const TagUsage: React.FC<ScreenContainerProps> = ({ navigation, example }) => {
  const { theme } = useContext(ApplicationContext);
  const [showPlayground, setShowPlayground] = useState(false);

  useEffect(() => {
    const openCode = () => {
      try {
        Linking.openURL(example);
      } catch (e) {}
    };
    navigation?.setOptions({
      title: 'Tag',
      headerRight: (props) => (
        <HeaderRightAction {...props}>
          <NavigationButton
            icon={'file-edit-outline'}
            onPress={() => setShowPlayground(!showPlayground)}
          />
          <NavigationButton icon={'xml'} onPress={openCode} />
        </HeaderRightAction>
      ),
    });
  }, [example, navigation, showPlayground]);

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
  const renderContent = () => {
    if (showPlayground) {
      return <Playground {...playground} />;
    }
    return <Preview {...preview} />;
  };

  return (
    <Screen
      headerType={'surface'}
      enableKeyboardAvoidingView={true}
      navigation={navigation}
    >
      {renderContent()}
    </Screen>
  );
};

export default TagUsage;
