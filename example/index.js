import { registerRootComponent } from 'expo';
import { useFonts } from 'expo-font';
import { View } from 'react-native';

import Main from './src/index';

const Root = () => {
  const [loaded, error] = useFonts({
    'Raleway-Black': require('./src/assets/fonts/Raleway-Black.ttf'),
    'Raleway-BlackItalic': require('./src/assets/fonts/Raleway-BlackItalic.ttf'),
    'Raleway-Bold': require('./src/assets/fonts/Raleway-Bold.ttf'),
    'Raleway-BoldItalic': require('./src/assets/fonts/Raleway-BoldItalic.ttf'),
    'Raleway-ExtraBold': require('./src/assets/fonts/Raleway-ExtraBold.ttf'),
    'Raleway-ExtraBoldItalic': require('./src/assets/fonts/Raleway-ExtraBoldItalic.ttf'),
    'Raleway-ExtraLight': require('./src/assets/fonts/Raleway-ExtraLight.ttf'),
    'Raleway-ExtraLightItalic': require('./src/assets/fonts/Raleway-ExtraLightItalic.ttf'),
    'Raleway-Italic': require('./src/assets/fonts/Raleway-Italic.ttf'),
    'Raleway-Light': require('./src/assets/fonts/Raleway-Light.ttf'),
    'Raleway-LightItalic': require('./src/assets/fonts/Raleway-LightItalic.ttf'),
    'Raleway-Medium': require('./src/assets/fonts/Raleway-Medium.ttf'),
    'Raleway-MediumItalic': require('./src/assets/fonts/Raleway-MediumItalic.ttf'),
    'Raleway-Regular': require('./src/assets/fonts/Raleway-Regular.ttf'),
    'Raleway-SemiBold': require('./src/assets/fonts/Raleway-SemiBold.ttf'),
    'Raleway-SemiBoldItalic': require('./src/assets/fonts/Raleway-SemiBoldItalic.ttf'),
    'Raleway-Thin': require('./src/assets/fonts/Raleway-Thin.ttf'),
    'Raleway-ThinItalic': require('./src/assets/fonts/Raleway-ThinItalic.ttf'),
    'SFProText-Black': require('./src/assets/fonts/SFProText-Black.ttf'),
    'SFProText-Bold': require('./src/assets/fonts/SFProText-Bold.ttf'),
    'SFProText-Heavy': require('./src/assets/fonts/SFProText-Heavy.ttf'),
    'SFProText-Light': require('./src/assets/fonts/SFProText-Light.ttf'),
    'SFProText-Medium': require('./src/assets/fonts/SFProText-Medium.ttf'),
    'SFProText-Regular': require('./src/assets/fonts/SFProText-Regular.ttf'),
    'SFProText-Semibold': require('./src/assets/fonts/SFProText-Semibold.ttf'),
    'SFProText-Thin': require('./src/assets/fonts/SFProText-Thin.ttf'),
    'SFProText-Ultralight': require('./src/assets/fonts/SFProText-Ultralight.ttf'),
    'Poppins-Black': require('./src/assets/fonts/Poppins-Black.ttf'),
    'Poppins-BlackItalic': require('./src/assets/fonts/Poppins-BlackItalic.ttf'),
    'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
    'Poppins-BoldItalic': require('./src/assets/fonts/Poppins-BoldItalic.ttf'),
    'Poppins-ExtraBold': require('./src/assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraBoldItalic': require('./src/assets/fonts/Poppins-ExtraBoldItalic.ttf'),
    'Poppins-ExtraLight': require('./src/assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-ExtraLightItalic': require('./src/assets/fonts/Poppins-ExtraLightItalic.ttf'),
    'Poppins-Italic': require('./src/assets/fonts/Poppins-Italic.ttf'),
    'Poppins-Light': require('./src/assets/fonts/Poppins-Light.ttf'),
    'Poppins-LightItalic': require('./src/assets/fonts/Poppins-LightItalic.ttf'),
    'Poppins-Medium': require('./src/assets/fonts/Poppins-Medium.ttf'),
    'Poppins-MediumItalic': require('./src/assets/fonts/Poppins-MediumItalic.ttf'),
    'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./src/assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-SemiBoldItalic': require('./src/assets/fonts/Poppins-SemiBoldItalic.ttf'),
    'Poppins-Thin': require('./src/assets/fonts/Poppins-Thin.ttf'),
    'Poppins-ThinItalic': require('./src/assets/fonts/Poppins-ThinItalic.ttf'),
  });
  if (!loaded) {
    return <View />;
  }
  return <Main />;
};

registerRootComponent(Root);
