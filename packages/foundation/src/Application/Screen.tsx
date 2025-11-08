import {
  Animated,
  KeyboardAvoidingView,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
  Platform,
  StatusBar,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {
  forwardRef,
  useContext,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react';

import { ApplicationContext } from '../Context';
import { Colors, Spacing, Styles } from '../Consts';
import {
  HeaderBackground,
  HeaderExtendHeader,
  HeaderSearch,
  NavigationBackButton,
} from './Components';
import type { HeaderSearchProps, ScreenProps, ScreenRef } from './types';
import { SizedBox } from '../SizedBox';
import type { StackNavigationOptions } from '@react-navigation/stack';

const Screen = forwardRef<ScreenRef, ScreenProps>(
  (
    {
      children,
      enableKeyboardAvoidingView = false,
      scrollable = false,
      navigation,
      headerType = 'default',
      animatedHeader,
      scrollViewProps,
      headerComponent: Header,
      footerComponent: Footer,
      floatingComponent: Floating,
      layoutOffset = -8,
      edges = [],
      backgroundColor: customBgColor,
      animatedValue: customAnimatedValue,
      style,
    }: ScreenProps,
    ref
  ) => {
    const screenRef = useRef<any>(undefined);
    const animatedValue = useRef(customAnimatedValue ?? new Animated.Value(0));
    const { theme } = useContext(ApplicationContext);
    const { width: widthDevice, height: heightDevice } = useWindowDimensions();
    const insets = useSafeAreaInsets();
    const heightHeader = useHeaderHeight();
    const currentTint = useRef(Colors.white);
    const bannerHeight = Math.min(heightDevice * 0.35, 240);
    const backgroundColor = customBgColor ?? theme.colors.background.default;

    let handleScroll;
    let Component: any = View;
    let keyboardVerticalOffset = heightHeader - Math.min(insets.bottom, 20);

    /**
     * expose ref for screen
     */
    useImperativeHandle(ref, () => ({
      ...screenRef.current,
      setSearchHeader: (params: HeaderSearchProps) => {
        let searchWidth = widthDevice - 24;
        if (params.useBackHeader) {
          searchWidth = widthDevice - 64;
        }
        navigation?.setOptions({
          headerLeft: (props) => {
            if (params.useBackHeader === false) {
              return null;
            }
            return <NavigationBackButton {...props} icon="arrow-left" />;
          },
          headerTitleContainerStyle: {
            width: searchWidth,
            maxWidth: searchWidth,
            marginLeft: 0,
            marginEnd: 0,
            marginStart: 0,
            marginHorizontal: 0,
            marginVertical: 0,
            margin: 0,
            left: params.useBackHeader ? 20 : 0,
          },
          headerTitle: (props) => {
            return (
              <View style={Styles.row}>
                <View style={Styles.flex}>
                  <HeaderSearch
                    tintColor={props.tintColor}
                    {...(params as any)}
                  />
                </View>
                {params.headerRight && (
                  <>
                    <SizedBox width={Spacing.M} />
                    {params.headerRight?.(props)}
                  </>
                )}
              </View>
            );
          },
        });
      },
    }));

    /**
     * process option headerStyle & header animated
     */
    const screenOptions = useMemo(() => {
      let navigationOptions: StackNavigationOptions;

      if (animatedHeader) {
        navigationOptions = {
          headerShown: true,
          headerTransparent: true,
          headerLeft: (props) => {
            if (animatedHeader.useBackHeader === false) {
              return null;
            }
            return <NavigationBackButton {...props} icon="arrow-left" />;
          },
          headerBackground: () => (
            <HeaderBackground
              useGradient={false}
              animatedValue={animatedValue.current}
            />
          ),
          ...(animatedHeader.headerTitle && {
            headerTitle: (props) => {
              return animatedHeader.headerTitle!({
                ...props,
                animatedValue: animatedValue.current,
              });
            },
          }),
        };
      } else if (headerType === 'extended') {
        navigationOptions = {
          headerShown: true,
          headerTransparent: true,
          headerBackground: undefined,
        };
      } else if (headerType === 'surface') {
        navigationOptions = {
          headerShown: true,
          headerTransparent: false,
          headerBackground: () => (
            <HeaderBackground surface={true} animatedValue={undefined} />
          ),
        };
      } else if (headerType === 'none') {
        navigationOptions = {
          headerShown: false,
          headerTransparent: true,
          headerBackground: undefined,
        };
      } else {
        navigationOptions = {
          headerShown: true,
          headerTransparent: false,
          headerBackground: (props) => (
            <HeaderBackground
              {...props}
              animatedValue={animatedValue.current}
            />
          ),
        };
      }

      navigationOptions.headerTintColor = theme.colors.text.default;
      return navigationOptions;
    }, [animatedHeader, headerType, theme.colors.text.default]);

    if (screenOptions.headerTransparent) {
      keyboardVerticalOffset = -Math.min(insets.bottom, 20);
    }

    /**
     * animated when use scroll && animated value
     */
    if (scrollable) {
      Component = Animated.ScrollView;
      handleScroll = Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: { y: animatedValue.current as Animated.Value },
            },
          },
        ],
        {
          useNativeDriver: true,
          listener: (e: NativeSyntheticEvent<NativeScrollEvent>) => {
            scrollViewProps?.onScroll?.(e);
            const offsetY = e.nativeEvent.contentOffset.y;
            const defaultTint = theme.colors.text.default;
            let color = animatedHeader?.headerTintColor ?? defaultTint;
            if (offsetY > 50) {
              color = defaultTint;
            }
            if (color !== currentTint.current) {
              currentTint.current = color;
              navigation?.setOptions({
                headerTintColor: color,
              });
              const lightStyle = color === Colors.white || theme.dark;
              StatusBar.setBarStyle(
                lightStyle ? 'light-content' : 'dark-content'
              );
            }
          },
        }
      );
    }

    /**
     * handle set bar style for screen
     */
    useLayoutEffect(() => {
      StatusBar.setBarStyle(theme.dark ? 'light-content' : 'dark-content');
    }, [navigation, theme.dark]);

    /**
     * handle set options for screen
     */
    useLayoutEffect(() => {
      navigation?.setOptions(screenOptions);
    }, [navigation, screenOptions]);

    /**
     * render top navigation banner
     */
    const renderBannerHeader = () => {
      if (typeof animatedHeader?.component === 'function') {
        return (
          <View
            style={[
              styles.screenBanner,
              { maxHeight: bannerHeight + layoutOffset },
            ]}
          >
            {animatedHeader?.component({
              animatedValue: animatedValue.current,
            })}
          </View>
        );
      }
      return null;
    };

    return (
      <SafeAreaView
        edges={edges}
        style={[Styles.flex, { backgroundColor: backgroundColor }]}
      >
        {headerType === 'extended' && (
          <HeaderExtendHeader
            heightHeader={heightHeader}
            animatedValue={animatedValue.current}
          />
        )}

        <KeyboardAvoidingView
          style={Styles.flex}
          enabled={enableKeyboardAvoidingView}
          keyboardVerticalOffset={keyboardVerticalOffset}
          behavior={Platform.select({
            ios: 'padding',
            android: 'height',
          })}
        >
          {Header}

          <Component
            {...(scrollViewProps && {
              keyboardShouldPersistTaps: 'handled',
              ...scrollViewProps,
            })}
            style={[Styles.flex, style]}
            ref={screenRef}
            onScroll={handleScroll}
          >
            {renderBannerHeader()}

            {children}
          </Component>

          {Floating && <View style={styles.floatingContainer}>{Floating}</View>}

          {Footer && (
            <View
              style={[
                styles.footerContainer,
                {
                  paddingBottom: Math.min(insets.bottom, 20) + Spacing.S,
                  backgroundColor: theme.colors.background.surface,
                },
              ]}
            >
              {Footer}
            </View>
          )}
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
);

const styles = StyleSheet.create({
  screenBanner: {
    width: '100%',
  },

  footerContainer: {
    paddingTop: Spacing.S,
    paddingHorizontal: Spacing.M,
    ...Platform.select({
      ios: {
        shadowColor: Colors.black_10,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 4,
      },
      android: {
        shadowOpacity: 1,
        elevation: 4,
      },
    }),
  },
  floatingContainer: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    shadowColor: Colors.black_10,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 6,
  },
});
export default Screen;
