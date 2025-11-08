import type { LinearGradientProps as ExpoProps } from 'expo-linear-gradient';
import type { LinearGradientProps as RNProps } from 'react-native-linear-gradient';

let LinearGradient: any;

try {
  const ExpoLinearGradient = require('expo-linear-gradient');
  LinearGradient = ExpoLinearGradient.LinearGradient;
} catch (e) {
  LinearGradient = require('react-native-linear-gradient').default;
}

export { LinearGradient };
export type LinearGradientProps = RNProps & ExpoProps;
