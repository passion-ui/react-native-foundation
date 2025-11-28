import React, { useCallback, useContext, useEffect, useRef } from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  PanResponder,
  Platform,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  Easing,
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ApplicationContext } from '../Context';
import type { BottomSheetParams, ScreenContainerProps } from './types';
import { Colors, Radius, Spacing, Styles } from '../Consts';
import { Text } from '../Text';
import { Icon } from '../Icon';
import { SizedBox } from '../SizedBox';

const BottomSheet: React.FC<ScreenContainerProps> = ({ navigation, route }) => {
  const { theme, navigator } = useContext(ApplicationContext);
  const heightDevice = Dimensions.get('screen').height;
  const action = useRef<undefined | string>(undefined);
  const insets = useSafeAreaInsets();
  const {
    screen: Screen,
    title,
    header,
    barrierDismissible = false,
    draggable = true,
    useKeyboardAvoidingView = true,
    keyboardVerticalOffset,
  }: BottomSheetParams = route.params;

  const translateY = useSharedValue(heightDevice);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => draggable,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return draggable && gestureState.dy > 0;
      },
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
          translateY.value = gestureState.dy;
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 100) {
          action.current = 'gesture';
          onDismiss(true);
        } else {
          translateY.value = withSpring(0, {
            damping: 20,
            mass: 1,
            stiffness: 100,
            overshootClamping: false,
          });
        }
      },
    })
  ).current;

  const params: any = {
    ...route.params,
    navigation,
  };

  let backgroundColor = theme.colors.background.surface;
  delete params.screen;

  /**
   * open animation
   */
  const openAnimation = useCallback(() => {
    translateY.value = withTiming(0, {
      duration: 350,
      easing: Easing.bezier(0.05, 0.7, 0.1, 1),
    });
  }, [translateY]);

  /**
   * close animation
   */
  const closeAnimation = useCallback(
    (callback = () => {}) => {
      translateY.value = withTiming(
        heightDevice,
        {
          duration: 200,
          easing: Easing.bezier(0.3, 0.0, 0.8, 0.15),
        },
        () => scheduleOnRN(callback)
      );
    },
    [heightDevice, translateY]
  );

  /**
   * emit dismiss event
   */
  useEffect(() => {
    translateY.value = heightDevice;
    openAnimation();
    return () => {
      route.params?.onDismiss?.(action.current);
    };
  }, [heightDevice, openAnimation, route.params, translateY]);

  /**
   * handler dismiss
   */
  const onDismiss = useCallback(
    (force = false, callback?: () => void) => {
      if (barrierDismissible && !force) {
        return;
      }
      closeAnimation(() => {
        navigator?.pop();
        scheduleOnRN(() => {
          callback?.();
        });
      });
    },
    [barrierDismissible, closeAnimation, navigator]
  );

  /**
   * on request close
   */
  const onRequestClose = useCallback(
    (callback?: () => void) => {
      onDismiss(true, callback);
    },
    [onDismiss]
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const animatedOverlayStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        translateY.value,
        [0, heightDevice],
        [1, 0],
        Extrapolation.CLAMP
      ),
    };
  });

  /**
   * render header
   */
  const renderHeader = () => {
    return (
      <View
        style={{
          backgroundColor,
          borderTopLeftRadius: Radius.M,
          borderTopRightRadius: Radius.M,
        }}
        {...panResponder.panHandlers}
      >
        <SizedBox height={Spacing.L}>
          <View
            style={[
              styles.indicator,
              { backgroundColor: theme.colors.background.disable },
            ]}
          />
        </SizedBox>
        <View style={styles.header}>
          {header ? (
            <View style={Styles.flex}>{header}</View>
          ) : (
            <>
              <View style={styles.iconButton} />
              <Text
                typography={'callout'}
                fontWeight={'bold'}
                style={[Styles.flex, Styles.textCenter]}
              >
                {title}
              </Text>
            </>
          )}
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => {
              action.current = 'icon';
              onDismiss(true);
            }}
          >
            <Icon name={'close'} color={theme.colors.text.default} size={24} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <KeyboardAvoidingView
        behavior={Platform.select({
          ios: 'padding',
          android: undefined,
        })}
        keyboardVerticalOffset={keyboardVerticalOffset ?? -20}
        enabled={useKeyboardAvoidingView}
        style={styles.container}
      >
        <Pressable
          style={StyleSheet.absoluteFillObject}
          onPress={() => {
            action.current = 'overlay';
            onDismiss();
          }}
        >
          <Animated.View style={[styles.overlay, animatedOverlayStyle]} />
        </Pressable>

        <Animated.View style={animatedStyle}>
          {renderHeader()}
          <View style={{ backgroundColor: backgroundColor }}>
            <Screen {...params} onRequestClose={onRequestClose} />
            <View style={{ height: Math.min(insets.bottom, 21) }} />
          </View>
        </Animated.View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: Colors.modal,
  },
  container: { flex: 1, justifyContent: 'flex-end' },
  indicator: {
    width: 40,
    height: 4,
    borderRadius: Radius.S,
    position: 'absolute',
    alignSelf: 'center',
    top: Spacing.S,
  },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: Spacing.M,
  },
});

export default BottomSheet;
