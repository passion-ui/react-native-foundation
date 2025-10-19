import React from 'react';
import type { ScreenContainerProps } from './types';

const StackScreen: React.FC<ScreenContainerProps> = ({ navigation, route }) => {
  const { screen: Component } = route.params;

  const params: any = {
    ...route.params,
    navigation,
  };

  delete params.screen;

  return <Component {...params} />;
};

export default StackScreen;
