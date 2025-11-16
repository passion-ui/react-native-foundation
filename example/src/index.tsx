import React, { useEffect, useRef, useState } from 'react';
import {
  defaultDarkTheme,
  defaultTheme,
  Localization,
  NavigationContainer,
  Navigator,
} from '@passionui/react-native-foundation';
import { DeviceEventEmitter } from 'react-native';
import Assets from './assets';
import { Settings } from '@configs';
import tinycolor from 'tinycolor2';
import MainTab from './screens/tabs';

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
      ({ dark, font, primary, secondary, headerBackground }: any) => {
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

        if (headerBackground) {
          data = {
            ...data,
            assets: {
              ...data.assets,
              headerBackground: headerBackground,
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
      screen={MainTab}
      localization={localization}
    />
  );
};

export default App;
