import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {
  DefaultTheme,
  NavigationContainer as ReactNavigationContainer,
  NavigationIndependentTree,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StackScreen from './StackScreen';
import DialogScreen from './DialogScreen';
import ModalScreen from './ModalScreen';
import { ApplicationContext } from './index';
import {
  HeaderBackground,
  HeaderTitle,
  NavigationBackButton,
} from './Components';
import type { NavigationContainerProps, RootStackParamList } from './types';
import { Styles } from '../Consts';
import LoadingView from './LoadingView';
import ToastView from './ToastView';

const Stack = createStackNavigator<RootStackParamList>();

const NavigationContainer: React.FC<NavigationContainerProps> = ({
  screen,
  theme,
  navigator,
  params,
  localization,
}) => {
  return (
    <SafeAreaProvider style={Styles.flex}>
      <GestureHandlerRootView style={Styles.flex}>
        <I18nextProvider i18n={localization.instance} defaultNS={'translation'}>
          <ApplicationContext.Provider
            value={{ theme, navigator, translate: localization.instance.t }}
          >
            <Navigation
              navigator={navigator}
              theme={theme}
              screen={screen}
              params={params}
            />
          </ApplicationContext.Provider>
        </I18nextProvider>
        <LoadingView ref={navigator.loadingRef} />
        <ToastView ref={navigator.toastRef} />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

const Navigation: React.FC<any> = ({ theme, navigator, params, screen }) => {
  const insets = useSafeAreaInsets();

  return (
    <NavigationIndependentTree>
      <ReactNavigationContainer
        theme={{
          fonts: DefaultTheme.fonts,
          dark: theme.dark,
          colors: {
            primary: theme.colors.primary.default,
            background: theme.colors.background.default,
            card: theme.colors.background.surface,
            text: theme.colors.text.default,
            border: theme.colors.border.default,
            notification: theme.colors.error.default,
          },
        }}
        ref={navigator?.ref}
      >
        <Stack.Navigator
          initialRouteName="Stack"
          screenOptions={{
            headerMode: 'screen',
            gestureEnabled: true,
            headerTitleAlign: 'center',
            headerTintColor: theme.colors.text.default,
            headerStyle: {
              height: 54 + insets.top,
            },
          }}
        >
          <Stack.Screen
            name="Stack"
            component={StackScreen}
            initialParams={{ ...params, screen }}
            options={{
              headerTitle: (props: any) => {
                return <HeaderTitle {...props} />;
              },
              headerLeft: (props) => (
                <NavigationBackButton {...props} icon="arrow-left" />
              ),
              headerBackground: () => <HeaderBackground />,
            }}
          />
          <Stack.Screen
            name="Dialog"
            component={DialogScreen}
            options={{
              presentation: 'transparentModal',
              gestureEnabled: false,
              cardStyle: {
                backgroundColor: theme.colors.background.default,
              },
              headerTitle: (props: any) => {
                return <HeaderTitle {...props} />;
              },
              headerLeft: (props) => (
                <NavigationBackButton {...props} icon="close" />
              ),
              headerBackground: () => <HeaderBackground />,
            }}
            initialParams={{ screen }}
          />
          <Stack.Screen
            name="Modal"
            component={ModalScreen}
            options={{
              headerShown: false,
              headerBackground: undefined,
              presentation: 'transparentModal',
              animation: 'none',
            }}
            initialParams={{ screen }}
          />
        </Stack.Navigator>
      </ReactNavigationContainer>
    </NavigationIndependentTree>
  );
};

export { ApplicationContext, NavigationContainer };
