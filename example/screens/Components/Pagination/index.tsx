import {
  Container,
  Screen,
  ScreenContainerProps,
  Spacing,
} from '@passionui/react-native-foundation';
import React, { useEffect } from 'react';

const PaginationUsage: React.FC<ScreenContainerProps> = ({ navigation }) => {
  useEffect(() => {
    navigation?.setOptions({
      title: 'PaginationUsage',
    });
  }, [navigation]);

  return (
    <Screen navigation={navigation}>
      <Container padding={Spacing.M} gutter={8} />
    </Screen>
  );
};

export default PaginationUsage;
