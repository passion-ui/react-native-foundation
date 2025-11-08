import {
  BottomTab,
  Image,
  Radius,
  ScreenContainerProps,
} from '@passionui/react-native-foundation';
import React from 'react';
import {
  Playground,
  PlaygroundProps,
  Preview,
  PreviewProps,
} from '@components';

const ImageUsage: React.FC<ScreenContainerProps> = ({
  navigation,
  example,
}) => {
  const uri = `https://picsum.photos/1500?${Date.now()}`;
  const preview: PreviewProps = {
    component: Image,
    data: {
      source: {
        title: 'Source',
        value: [
          {
            value: { uri },
            props: {
              style: {
                height: 160,
                width: '100%',
                borderRadius: Radius.M,
              },
            },
          },
          {
            value: { uri: `https://picsum.photos/1200?${Date.now()}` },
            props: {
              style: {
                height: 160,
                width: '100%',
                borderRadius: Radius.M,
              },
            },
          },
        ],
      },
      resizeMode: {
        title: 'Resize Mode',
        value: [
          {
            value: 'contain',
            props: {
              source: { uri },
              style: {
                height: 160,
                width: '100%',
                borderRadius: Radius.M,
              },
            },
          },
          {
            value: 'cover',
            props: {
              source: { uri },
              style: {
                height: 160,
                width: '100%',
                borderRadius: Radius.M,
              },
            },
          },
          {
            value: 'stretch',
            props: {
              source: { uri },
              style: {
                height: 160,
                width: '100%',
                borderRadius: Radius.M,
              },
            },
          },
          {
            value: 'center',
            props: {
              source: { uri },
              style: {
                height: 160,
                width: '100%',
                borderRadius: Radius.M,
              },
            },
          },
        ],
      },
    },
  };

  const playground: PlaygroundProps = {
    component: Image,
    data: {
      source: {
        value: {
          uri: uri,
        },
        type: 'object',
      },
      resizeMode: {
        value: 'contain',
        type: 'enum',
        data: ['contain', 'cover', 'stretch', 'center'],
      },
      loading: {
        value: true,
        type: 'bool',
      },
      style: {
        value: {
          height: 160,
          width: '100%',
          borderRadius: Radius.M,
        },
        type: 'object',
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

export default ImageUsage;
