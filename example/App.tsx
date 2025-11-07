import React, { useMemo, useRef } from 'react';
import {
  BottomTab,
  BottomTabItemProps,
  Localization,
  NavigationContainer,
  Navigator,
  ScreenContainerProps,
} from '@passionui/react-native-foundation';
import { Components, Motions, StylesGuide } from './screens';
import { DATA } from './screens/Components';
import Assets from '@assets';
import { defaultTheme } from '@passionui/react-native-foundation';

const Main: React.FC<ScreenContainerProps> = ({ navigation }) => {
  const tabs: BottomTabItemProps[] = [
    {
      name: 'Styles',
      title: 'Styles Guide',
      icon: 'palette-swatch-outline',
      screen: StylesGuide,
    },
    {
      name: 'Components',
      title: 'Components',
      icon: 'shape-outline',
      tabBarBadge: DATA.length,
      screen: Components,
    },
    {
      name: 'Motions',
      title: 'Motions',
      icon: 'transition',
      screen: Motions,
    },
  ];

  return <BottomTab tabs={tabs} navigation={navigation} />;
};

const App: React.FC<ScreenContainerProps> = ({ navigation }) => {
  const navigator = new Navigator({
    ref: useRef(undefined),
    loadingRef: useRef(undefined),
    toastRef: useRef(undefined),
  });

  const localization = useMemo(() => {
    return new Localization({ resources: Assets.language, lng: 'en' });
  }, []);

  return (
    <NavigationContainer
      navigator={navigator}
      theme={defaultTheme}
      screen={Main}
      localization={localization}
    />
  );
};

export default App;
