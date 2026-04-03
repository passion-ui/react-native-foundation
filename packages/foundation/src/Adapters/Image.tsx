import type { FastImageProps, Source } from '@d11/react-native-fast-image';
import type {
  ImageProps as ExpoImageProps,
  ImageSource as ExpoImageSource,
} from 'expo-image';
import { ImageBackground, Platform } from 'react-native';

type ImageProps = FastImageProps & ExpoImageProps;
type ImageSource = Source & ExpoImageSource;
let Image: ImageProps | undefined;

if (Platform.OS === 'web') {
  Image = ImageBackground as any;
} else {
  try {
    const Constants = require('expo-constants').default;
    if (Constants.executionEnvironment) {
      Image = require('expo-image').ImageBackground;
    }
  } catch (e) {}

  if (Image === undefined) {
    try {
      Image = require('@d11/react-native-fast-image').default;
    } catch (e) {
      Image = ImageBackground as any;
    }
  }
}

export { Image };

export type { ImageProps, ImageSource };
