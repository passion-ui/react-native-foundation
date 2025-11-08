import React, { useCallback, useContext, useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
} from 'react-native';

import { ApplicationContext } from '../Context';
import { Colors, Spacing, Styles } from '../Consts';
import type { ScreenContainerProps } from './types';
import BottomSheet from './BottomSheet';

const ModalScreen: React.FC<ScreenContainerProps> = (props) => {
  useEffect(() => {
    return () => {
      props.route.params?.onDismiss?.();
    };
  }, [props.route.params]);

  if (props.route?.params?.isBottomSheet) {
    return <BottomSheet {...props} />;
  }
  return <Modal {...props} />;
};

const Modal: React.FC<ScreenContainerProps> = ({ navigation, route }) => {
  const { navigator } = useContext(ApplicationContext);
  const { screen: Component, barrierDismissible, modalStyle } = route.params;
  const opacity = useRef(new Animated.Value(0));
  const scale = useRef(new Animated.Value(0.8));

  const params: any = {
    ...route.params,
    navigation,
  };
  delete params.screen;

  const onDismiss = useCallback(
    (force = false, callback?: () => void) => {
      if (barrierDismissible && !force) {
        return;
      }

      Animated.parallel([
        Animated.timing(opacity.current, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(scale.current, {
          toValue: 0.8,
          duration: 200,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]).start(() => {
        callback?.();
        navigator?.pop();
      });
    },
    [barrierDismissible, navigator]
  );

  const onRequestClose = useCallback(
    (callback?: () => void) => {
      onDismiss(true, callback);
    },
    [onDismiss]
  );

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity.current, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(scale.current, {
        toValue: 1,
        duration: 250,
        easing: Easing.bezier(0.2, 0.0, 0, 1.0),
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <KeyboardAvoidingView
      style={Styles.flexCenter}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Pressable
        style={StyleSheet.absoluteFillObject}
        onPress={() => onDismiss()}
      >
        <Animated.View
          style={[styles.overlayContent, { opacity: opacity.current }]}
        />
      </Pressable>
      <Animated.View
        style={[
          {
            opacity: opacity.current,
            transform: [{ scale: scale.current }],
            padding: Spacing.XL,
          },
          modalStyle,
        ]}
      >
        <Component {...params} onRequestClose={onRequestClose} />
      </Animated.View>
    </KeyboardAvoidingView>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  overlayContent: {
    flex: 1,
    backgroundColor: Colors.modal,
  },
});
