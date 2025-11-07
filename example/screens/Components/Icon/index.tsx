import { Linking } from 'react-native';
import {
  ApplicationContext,
  HeaderRightAction,
  Icon,
  NavigationButton,
  Screen,
  ScreenContainerProps,
} from '@passionui/react-native-foundation';
import React, { useContext, useEffect, useState } from 'react';
import Preview from '../../../components/Preview';
import Playground from '../../../components/Playground';
import { PlaygroundProps } from '../../../components/Playground/types';
import { PreviewProps } from '../../../components/Preview/types';

const Icons = ['palette-swatch-outline', 'shape-outline', 'transition'];

const IconUsage: React.FC<ScreenContainerProps> = ({ navigation, example }) => {
  const { theme } = useContext(ApplicationContext);
  const [showPlayground, setShowPlayground] = useState(false);

  useEffect(() => {
    const openCode = () => {
      try {
        Linking.openURL(example);
      } catch (e) {}
    };
    navigation?.setOptions({
      title: 'Icon',
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
    component: Icon,
    data: {
      name: {
        title: 'Name',
        direction: 'row',
        value: Icons.map((i) => {
          return {
            value: i,
          };
        }),
      },
      type: {
        title: 'Type',
        direction: 'row',
        value: ['MaterialCommunityIcons', 'FontAwesome'].map((i) => {
          return {
            value: i,
            props: { name: 'home' },
          };
        }),
      },
      color: {
        title: 'Color',
        direction: 'row',
        value: [
          {
            value: theme.colors.primary.default,
            props: { name: 'home-outline' },
          },
          {
            value: theme.colors.secondary.default,
            props: { name: 'home-outline' },
          },
          {
            value: theme.colors.error.default,
            props: { name: 'home-outline' },
          },
          {
            value: theme.colors.text.default,
            props: { name: 'home-outline' },
          },
        ],
      },
      size: {
        title: 'Size',
        direction: 'row',
        value: [
          {
            value: 16,
            props: { name: 'home-outline' },
          },
          {
            value: 24,
            props: { name: 'home-outline' },
          },
          {
            value: 32,
            props: { name: 'home-outline' },
          },
        ],
      },
    },
  };

  const playground: PlaygroundProps = {
    component: Icon,
    data: {
      type: {
        value: 'MaterialCommunityIcons',
        type: 'enum',
        data: ['MaterialCommunityIcons', 'FontAwesome'],
      },
      name: {
        value: 'palette-swatch-outline',
        type: 'string',
      },
      color: {
        value: theme.colors.text.default,
        type: 'string',
      },
      size: {
        value: 24,
        type: 'number',
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

export default IconUsage;
