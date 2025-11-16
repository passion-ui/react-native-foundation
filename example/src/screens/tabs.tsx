import React, { useContext } from 'react';
import {
  ApplicationContext,
  BottomTab,
  BottomTabItemProps,
  ScreenContainerProps,
} from '@passionui/react-native-foundation';
import StylesGuide from './StylesGuide';
import Components, { DATA } from './Components';
import Navigations from './Navigations';
import More from './More';

const MainTab: React.FC<ScreenContainerProps> = ({ navigation }) => {
  const { translate } = useContext(ApplicationContext);
  const tabs: BottomTabItemProps[] = [
    {
      name: 'Styles',
      title: translate('style_guide'),
      icon: 'palette-swatch-outline',
      screen: StylesGuide,
    },
    {
      name: 'Components',
      title: translate('components'),
      icon: 'shape-outline',
      tabBarBadge: DATA.length,
      screen: Components,
    },
    {
      name: 'Navigations',
      title: translate('navigations'),
      icon: 'navigation-variant-outline',
      screen: Navigations,
    },
    {
      name: 'More',
      title: translate('more'),
      icon: 'transition',
      screen: More,
    },
  ];

  return <BottomTab tabs={tabs} navigation={navigation} />;
};

export default MainTab;
