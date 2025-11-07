import { Linking } from 'react-native';
import {
  HeaderRightAction,
  NavigationButton,
  ProgressBar,
  Screen,
  ScreenContainerProps,
} from '@passionui/react-native-foundation';
import React, { useEffect, useState } from 'react';
import Preview from '../../../components/Preview';
import Playground from '../../../components/Playground';
import { PlaygroundProps } from '../../../components/Playground/types';
import { PreviewProps } from '../../../components/Preview/types';

const ProgressBarUsage: React.FC<ScreenContainerProps> = ({
  navigation,
  example,
}) => {
  const [showPlayground, setShowPlayground] = useState(false);

  useEffect(() => {
    const openCode = () => {
      try {
        Linking.openURL(example);
      } catch (e) {}
    };
    navigation?.setOptions({
      title: 'ProgressBar',
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
    component: ProgressBar,
    data: {
      percent: {
        title: 'Percent',
        value: [
          {
            value: 0,
          },
          {
            value: 50,
          },
          {
            value: 100,
          },
        ],
      },
    },
  };

  const playground: PlaygroundProps = {
    component: ProgressBar,
    data: {
      percent: {
        value: 50,
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

export default ProgressBarUsage;
