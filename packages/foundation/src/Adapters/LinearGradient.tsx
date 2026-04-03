import React from 'react';
import type { LinearGradientProps as ExpoProps } from 'expo-linear-gradient';
import type { LinearGradientProps as RNProps } from 'react-native-linear-gradient';
import { Platform, View } from 'react-native';

type LinearGradientProps = RNProps & ExpoProps;
let LinearGradient: React.Component<LinearGradientProps> | any;

if (Platform.OS === 'web') {
  LinearGradient = require('react-native-web-linear-gradient').default;
} else {
  try {
    const Constants = require('expo-constants').default;
    if (Constants.executionEnvironment) {
      LinearGradient = require('expo-linear-gradient').LinearGradient;
    }
  } catch (e) {}

  if (LinearGradient === undefined) {
    try {
      LinearGradient = require('react-native-linear-gradient').default;
    } catch (e) {
      LinearGradient = View as any;
    }
  }
}

export { LinearGradient };
export type { LinearGradientProps };
