import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import {
  ApplicationContext,
  BottomTab,
  BottomTabItemProps,
  defaultDarkTheme,
  defaultTheme,
  Localization,
  NavigationContainer,
  Navigator,
  ScreenContainerProps,
} from '@passionui/react-native-foundation';
import { Components, Motions, Setting, StylesGuide } from '@screens';
import { DATA } from './screens/Components';
import { DeviceEventEmitter } from 'react-native';
import Assets from './assets';
import { Settings } from '@configs';
import tinycolor from 'tinycolor2';

const Main: React.FC<ScreenContainerProps> = ({ navigation }) => {
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
      name: 'Motions',
      title: translate('motions'),
      icon: 'transition',
      screen: Motions,
    },
    {
      name: 'Settings',
      title: translate('settings'),
      icon: 'cog-outline',
      screen: Setting,
    },
  ];

  return <BottomTab tabs={tabs} navigation={navigation} />;
};

const App: React.FC = () => {
  const [theme, setTheme] = useState(defaultTheme);
  const [language, setLanguage] = useState(Settings.defaultLanguage);

  useEffect(() => {
    const listenerLanguage = DeviceEventEmitter?.addListener(
      'onChangeLanguage',
      (language) => {
        setLanguage(language);
      }
    );
    const listenerTheme = DeviceEventEmitter?.addListener(
      'onChangeTheme',
      ({ dark, font, primary, secondary }) => {
        let data = theme;
        if (dark !== undefined) {
          data = {
            ...data,
            colors: dark ? defaultDarkTheme.colors : defaultTheme.colors,
            dark: dark,
          };
        }
        if (font) {
          data = { ...data, font: font };
        }

        if (primary || secondary) {
          data = {
            ...data,
            colors: {
              ...data.colors,
              primary: buildColorSchema(primary),
              secondary: buildColorSchema(secondary),
            },
          };
        }

        setTheme({ ...data });
      }
    );
    return () => {
      listenerLanguage?.remove();
      listenerTheme?.remove();
    };
  }, []);

  const buildColorSchema = (inputColor: string) => {
    const light = tinycolor(inputColor).lighten(16).toHexString();
    const container = tinycolor(inputColor).lighten(32).toHexString();

    return {
      default: inputColor,
      light: light,
      container: container,
    };
  };

  const navigator = new Navigator({
    ref: useRef(undefined),
    loadingRef: useRef(undefined),
    toastRef: useRef(undefined),
  });

  const localization = new Localization({
    resources: Assets.language,
    lng: language,
  });

  return (
    <NavigationContainer
      navigator={navigator}
      theme={theme}
      screen={Main}
      localization={localization}
    />
  );
};

export default App;
