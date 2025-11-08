import { StyleSheet } from 'react-native';
import { Radius } from '@passionui/react-native-foundation';

export default StyleSheet.create({
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
