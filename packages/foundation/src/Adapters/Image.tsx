import type { FastImageProps } from '@d11/react-native-fast-image';
import type { ImageProps as ExpoImageProps } from 'expo-image';

let Image: any;

try {
  const ExpoImage = require('expo-image');
  Image = ExpoImage.ImageBackground;
} catch (e) {
  const FastImageModule = require('@d11/react-native-fast-image');
  Image = FastImageModule.default;
}

export { Image };

export type ImageProps = FastImageProps & ExpoImageProps;
export type ImageSource = FastImageProps['source'] & ExpoImageProps['source'];
