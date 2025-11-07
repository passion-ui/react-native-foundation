import { View, type ViewStyle } from 'react-native';
import type { SizedBoxProps } from './types';

const SizedBox: React.FC<SizedBoxProps> = ({ width, height, ...props }) => {
  const style: ViewStyle = {
    width: width,
    height: height,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return <View style={style} {...props} />;
};

export { SizedBox };
