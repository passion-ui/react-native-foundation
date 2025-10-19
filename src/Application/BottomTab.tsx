import React, { useContext, useEffect, useLayoutEffect, useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  NavigationIndependentTree,
  useFocusEffect,
} from '@react-navigation/native';
import {
  Animated,
  Keyboard,
  Platform,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import StackScreen from './StackScreen';
import {
  ApplicationContext,
  type BottomTabProps,
  Colors,
  getTypoStyle,
  HeaderBackground,
  HeaderTitle,
  Icon,
  NavigationBackButton,
  type RootStackParamList,
  type ScreenContainerProps,
  Text,
} from '../index';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<RootStackParamList>();

const TabScreen: React.FC<ScreenContainerProps> = ({ route, navigation }) => {
  const { nested, options, screen, initialParams } = route?.params;
  const insets = useSafeAreaInsets();

  const opacityValue = 0.5;
  const scaleValue = 0.99;

  const opacity = useRef(new Animated.Value(opacityValue));
  const scale = useRef(new Animated.Value(scaleValue));

  useFocusEffect(
    React.useCallback(() => {
      Animated.parallel([
        Animated.timing(opacity.current, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(scale.current, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
      return () => {
        if (navigation.getState().index !== route?.params.index) {
          Animated.parallel([
            Animated.timing(opacity.current, {
              toValue: opacityValue,
              duration: 200,
              useNativeDriver: true,
            }),
            Animated.timing(scale.current, {
              toValue: scaleValue,
              duration: 200,
              useNativeDriver: true,
            }),
          ]).start();
        }
      };
    }, [navigation, route?.params.index])
  );

  if (nested) {
    return (
      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacity.current,
            transform: [{ scale: scale.current }],
          },
        ]}
      >
        <Stack.Navigator>
          <Stack.Screen
            name="Stack"
            component={StackScreen}
            initialParams={{
              ...initialParams,
              screen,
            }}
            options={{
              ...options,
              gestureEnabled: true,
              headerTitleAlign: 'center',
              headerTitle: (props: any) => {
                return <HeaderTitle {...props} />;
              },
              headerLeft: (props) => (
                <NavigationBackButton {...props} icon="arrow-left" />
              ),
              headerBackground: () => <HeaderBackground />,
              headerStyle: {
                height: 54 + insets.top,
              },
            }}
          />
        </Stack.Navigator>
      </Animated.View>
    );
  }

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: opacity.current,
          transform: [{ scale: scale.current }],
        },
      ]}
    >
      <NavigationIndependentTree>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Stack"
              component={StackScreen}
              initialParams={{
                ...initialParams,
                screen,
              }}
              options={{
                ...options,
                gestureEnabled: true,
                headerTitleAlign: 'center',
                headerTitle: (props: any) => {
                  return <HeaderTitle {...props} />;
                },
                headerLeft: (props) => (
                  <NavigationBackButton {...props} icon="arrow-left" />
                ),
                headerBackground: () => <HeaderBackground />,
                headerStyle: {
                  height: 54 + insets.top,
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NavigationIndependentTree>
    </Animated.View>
  );
};

const BottomTab: React.FC<BottomTabProps> = ({
  tabs,
  initialRouteName,
  navigation,
}) => {
  const { theme } = useContext(ApplicationContext);
  const initialIndex = tabs.findIndex((i) => i.name === initialRouteName);
  const indicatorAnimated = useRef(new Animated.Value(initialIndex));
  const activeIndex = useRef(initialIndex);
  const dimensions = useWindowDimensions();
  const itemWidth = dimensions.width / tabs.length;

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerShown: false,
      headerTransparent: true,
      headerBackground: undefined,
    });
  }, [navigation]);

  useEffect(() => {
    Animated.timing(indicatorAnimated.current, {
      toValue: itemWidth * activeIndex.current,
      useNativeDriver: true,
      duration: 200,
    }).start();
  }, [itemWidth]);

  /**
   * handle for focus
   */
  const onFocus = (e: any) => {
    activeIndex.current = tabs.findIndex((i) => e.target.includes(i.name));
    Animated.timing(indicatorAnimated.current, {
      toValue: itemWidth * activeIndex.current,
      useNativeDriver: true,
      duration: 200,
    }).start();
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        headerBackground: undefined,
        tabBarLabelPosition: 'below-icon',
      }}
      initialRouteName={initialRouteName}
    >
      {tabs.map((item) => {
        return (
          <Tab.Screen
            key={`BottomTab-${item.name}`}
            name={item.name}
            component={TabScreen}
            listeners={{
              focus: onFocus,
              tabPress: Keyboard.dismiss,
            }}
            initialParams={item}
            options={{
              tabBarBackground: () => (
                <View
                  style={[
                    styles.container,
                    {
                      backgroundColor: theme.colors.background.surface,
                    },
                  ]}
                >
                  <Animated.View
                    style={[
                      styles.indicatorContainer,
                      {
                        width: itemWidth,
                        transform: [{ translateX: indicatorAnimated.current }],
                      },
                    ]}
                  >
                    <View
                      style={[
                        styles.indicator,
                        { backgroundColor: theme.colors.primary.default },
                      ]}
                    />
                  </Animated.View>
                </View>
              ),
              tabBarLabel: ({ focused, color, children }) => {
                return (
                  <Text
                    typography={'caption2'}
                    numberOfLines={1}
                    fontWeight={focused ? 'bold' : 'medium'}
                    color={color}
                  >
                    {children}
                  </Text>
                );
              },
              tabBarStyle: styles.tabBarStyle,
              tabBarBadgeStyle: {
                ...getTypoStyle(theme, 'caption2', 'medium'),
                left: 12,
                height: 16,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
                lineHeight: 15,
                marginTop: 2,
              },
              tabBarIcon: ({ color, size }) => (
                <Icon name={item.icon} color={color} size={size} />
              ),
              ...item,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  indicatorContainer: { position: 'absolute', top: 0 },
  indicator: {
    height: 2,
    width: 48,
    alignSelf: 'center',
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
  tabBarStyle: {
    paddingVertical: 4,
    borderTopWidth: 0,
    ...Platform.select({
      ios: {
        shadowColor: Colors.black_10,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
});
export default BottomTab;
