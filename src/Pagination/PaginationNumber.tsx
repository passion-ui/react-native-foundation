import { type FC } from 'react';
import { View } from 'react-native';
import type { ChildPaginationProps } from '../index';
import { Colors, Text } from '../index';
import styles from './styles';

const PaginationNumber: FC<ChildPaginationProps> = ({
  activeIndex = 0,
  dataLength = 2,
}) => {
  return (
    <View style={[styles.paginationNumberContainer]}>
      <Text
        color={Colors.white}
        typography={'footnote'}
        fontWeight={'medium'}
      >{`${activeIndex + 1}/${dataLength}`}</Text>
    </View>
  );
};

export default PaginationNumber;
