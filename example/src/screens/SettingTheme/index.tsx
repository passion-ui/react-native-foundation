import React, { useContext, useEffect, useState } from 'react';

import {
  ApplicationContext,
  Button,
  Colors,
  Icon,
  InputDropDown,
  Radius,
  Screen,
  ScreenContainerProps,
  Shadow,
  SheetPicker,
  SizedBox,
  Spacing,
  Styles,
  Switch,
  Text,
} from '@passionui/react-native-foundation';
import { ListTitle, PopupPickerColor } from '@components';
import { DeviceEventEmitter, View } from 'react-native';
import styles from './styles';
import { Settings } from '@configs';

const SettingTheme: React.FC<ScreenContainerProps> = ({ navigation }) => {
  const { theme, navigator, translate } = useContext(ApplicationContext);

  const [custom, setCustom] = useState<any>(false);

  useEffect(() => {
    navigation?.setOptions({
      title: translate('theme'),
    });
  }, [navigation, translate]);

  /**
   * On select theme
   */
  const onSelectTheme = () => {
    navigator?.showBottomSheet({
      title: translate('select_theme'),
      screen: (props) => (
        <SheetPicker
          {...props}
          data={Settings.themeSupport.map((i) => {
            return {
              ...i,
              title: i.primary,
              value: i.primary,
              icon: (
                <View
                  style={[styles.iconTheme, { backgroundColor: i.primary }]}
                />
              ),
            };
          })}
          selected={{
            title: theme.colors.primary.default,
            value: theme.colors.primary.default,
          }}
          onSelect={(index) => {
            const selectedTheme = Settings.themeSupport[index];
            DeviceEventEmitter.emit('onChangeTheme', {
              primary: selectedTheme.primary,
              secondary: selectedTheme.secondary,
            });
          }}
        />
      ),
    });
  };

  /**
   *
   * @param color
   * @param callback
   */
  const onSelectColor = (color: string, callback: (color: string) => void) => {
    navigator?.showModal({
      screen: (props) => (
        <PopupPickerColor {...props} color={color} onResult={callback} />
      ),
    });
  };

  /**
   * Build content
   */
  const buildContent = () => {
    if (custom) {
      return (
        <View
          style={[
            Shadow.light,
            Styles.row,
            {
              backgroundColor: theme.colors.background.surface,
              padding: Spacing.M,
              borderRadius: Radius.M,
            },
          ]}
        >
          <View style={Styles.flex}>
            <Text typography={'subhead'} fontWeight={'bold'}>
              {translate('primary_color')}
            </Text>
            <SizedBox height={Spacing.S} />
            <InputDropDown
              leading={
                <View
                  style={[
                    styles.iconTheme,
                    { backgroundColor: theme.colors.primary.default },
                  ]}
                />
              }
              value={theme.colors.primary.default}
              onPress={() => {
                onSelectColor(theme.colors.primary.default, (color) => {
                  DeviceEventEmitter.emit('onChangeTheme', {
                    primary: color,
                    secondary: theme.colors.secondary.default,
                  });
                });
              }}
            />
          </View>
          <SizedBox width={Spacing.M} />
          <View style={Styles.flex}>
            <Text typography={'subhead'} fontWeight={'bold'}>
              {translate('secondary_color')}
            </Text>
            <SizedBox height={Spacing.S} />
            <InputDropDown
              leading={
                <View
                  style={[
                    styles.iconTheme,
                    { backgroundColor: theme.colors.secondary.default },
                  ]}
                />
              }
              value={theme.colors.secondary.default}
              onPress={() =>
                onSelectColor(theme.colors.secondary.default, (color) => {
                  DeviceEventEmitter.emit('onChangeTheme', {
                    primary: theme.colors.primary.default,
                    secondary: color,
                  });
                })
              }
            />
          </View>
        </View>
      );
    }

    return (
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
        <Text typography={'subhead'} fontWeight={'bold'}>
          {translate('select_theme')}
        </Text>
        <SizedBox height={Spacing.S} />
        <InputDropDown
          leading={
            theme.colors.primary.default && (
              <View
                style={[
                  styles.iconTheme,
                  {
                    backgroundColor: theme.colors.primary.default,
                  },
                ]}
              />
            )
          }
          placeholder={translate('select_theme')}
          value={theme.colors.primary.default}
          onPress={onSelectTheme}
        />
      </View>
    );
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
            <View style={[styles.icon, { backgroundColor: Colors.gold_08 }]}>
              <Icon name={'format-color-fill'} color={Colors.gold_04} />
            </View>
          }
          title={translate('custom_color')}
          description={<Switch value={custom} onChange={setCustom} />}
          descriptionPosition={'right'}
          onPress={() => {}}
        />
      </View>
      <SizedBox height={Spacing.M} />
      {buildContent()}
    </Screen>
  );
};

export default SettingTheme;
