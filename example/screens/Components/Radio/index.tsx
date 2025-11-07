import { Linking } from 'react-native';
import {
  HeaderRightAction,
  NavigationButton,
  Radio,
  Screen,
  ScreenContainerProps,
} from '@passionui/react-native-foundation';
import React, { useEffect, useState } from 'react';
import Preview from '../../../components/Preview';
import Playground from '../../../components/Playground';
import { PlaygroundProps } from '../../../components/Playground/types';
import { PreviewProps } from '../../../components/Preview/types';

const RadioUsage: React.FC<ScreenContainerProps> = ({
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
      title: 'Radio',
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

export default RadioUsage;
