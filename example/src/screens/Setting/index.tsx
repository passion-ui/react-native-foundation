import React, { useContext, useEffect, useState } from 'react';

import {
  ApplicationContext,
  Colors,
  Icon,
  Radius,
  Screen,
  ScreenContainerProps,
  Shadow,
  SheetPicker,
  SizedBox,
  Spacing,
  Styles,
} from '@passionui/react-native-foundation';
import { ListTitle } from '@components';
import { DeviceEventEmitter, View } from 'react-native';
import styles from './styles';
import SettingTheme from '../SettingTheme';
import { Settings } from '@configs';

const Setting: React.FC<ScreenContainerProps> = ({ navigation }) => {
  const { theme, navigator, translate } = useContext(ApplicationContext);
  const [language, setLanguage] = useState(Settings.defaultLanguage);

  useEffect(() => {
    navigation?.setOptions({
      title: translate('setting'),
    });
  }, [navigation, translate]);

  /**
   * on language
   */
  const onLanguage = () => {
    navigator?.showBottomSheet({
      title: translate('change_language'),
      screen: (props) => (
        <SheetPicker
          {...props}
          data={Settings.languageSupport.map((item) => {
            return {
              value: item,
              title: translate(item),
            };
          })}
          selected={{
            value: language,
            title: translate(language),
          }}
          onSelect={(index) => {
            setLanguage(Settings.languageSupport[index]);
            DeviceEventEmitter.emit(
              'onChangeLanguage',
              Settings.languageSupport[index]
            );
          }}
        />
      ),
    });
  };

  /**
   * on theme
   */
  const onTheme = () => {
    navigator?.push({ screen: SettingTheme });
  };

  /**
   * on dark mode
   */
  const onDarkMode = () => {
    const data = [
      { title: translate('always_on'), value: true },
      { title: translate('always_off'), value: false },
    ];
    navigator?.showBottomSheet({
      title: translate('dark_mode'),
      screen: (props) => (
        <SheetPicker
          {...props}
          data={data}
          selected={{
            title: translate(theme.dark ? 'always_on' : 'always_off'),
            value: theme.dark,
          }}
          onSelect={(index) => {
            DeviceEventEmitter.emit('onChangeTheme', {
              dark: data[index].value,
            });
          }}
        />
      ),
    });
  };

  /**
   * on font
   */
  const onFont = () => {
    navigator?.showBottomSheet({
      title: translate('font'),
      screen: (props) => (
        <SheetPicker
          {...props}
          data={Settings.fontSupport.map((i) => {
            return { title: i, value: i };
          })}
          selected={{ title: theme.font, value: theme.font }}
          onSelect={(index) => {
            DeviceEventEmitter.emit('onChangeTheme', {
              font: Settings.fontSupport[index],
            });
          }}
          renderItem={undefined}
        />
      ),
    });
  };

  return (
    <Screen
      navigation={navigation}
      enableKeyboardAvoidingView={true}
      style={Styles.paddingM}
      scrollable={true}
    >
      <View
        style={[
          Shadow.light,
          {
            backgroundColor: theme.colors.background.surface,
            padding: Spacing.M,
            borderRadius: Radius.M,
          },
        ]}
      >
        <ListTitle
          leading={
            <View style={[styles.icon, { backgroundColor: Colors.blue_08 }]}>
              <Icon name={'web'} color={Colors.blue_04} />
            </View>
          }
          title={translate('language')}
          description={translate(language)}
          descriptionPosition={'right'}
          onPress={onLanguage}
        />
        <SizedBox height={Spacing.M} />

        <ListTitle
          leading={
            <View style={[styles.icon, { backgroundColor: Colors.violet_08 }]}>
              <Icon name={'format-color-fill'} color={Colors.violet_04} />
            </View>
          }
          description={
            <View
              style={[
                styles.iconTheme,
                { backgroundColor: theme.colors.primary.default },
              ]}
            />
          }
          descriptionPosition={'right'}
          title={translate('theme')}
          onPress={onTheme}
        />
        <SizedBox height={Spacing.M} />
        <ListTitle
          leading={
            <View style={[styles.icon, { backgroundColor: Colors.indigo_08 }]}>
              <Icon name={'brightness-4'} color={Colors.indigo_04} />
            </View>
          }
          description={translate(theme.dark ? 'always_on' : 'always_off')}
          descriptionPosition={'right'}
          title={translate('dark_mode')}
          onPress={onDarkMode}
        />
        <SizedBox height={Spacing.M} />
        <ListTitle
          leading={
            <View style={[styles.icon, { backgroundColor: Colors.gold_08 }]}>
              <Icon name={'format-font'} color={Colors.gold_04} />
            </View>
          }
          title={translate('font')}
          description={theme.font}
          descriptionPosition={'right'}
          onPress={onFont}
        />
      </View>
    </Screen>
  );
};

export default Setting;
