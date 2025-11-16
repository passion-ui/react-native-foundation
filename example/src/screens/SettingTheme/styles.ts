import { StyleSheet } from 'react-native';
import { Radius, Spacing } from '@passionui/react-native-foundation';

export default StyleSheet.create({
  imageBackground: {
    width: 180,
    height: 100,
    borderRadius: Radius.M,
    borderWidth: 1,
    marginRight: Spacing.S,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconTheme: {
    width: 20,
    height: 20,
    borderRadius: Radius.XS,
  },
});
