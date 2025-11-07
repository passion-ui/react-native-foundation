import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { StyleSheet, View, Animated } from 'react-native';

import { Shadow, Spacing } from '../Consts';
import { SizedBox } from '../SizedBox';
import { Toast } from '../Toast';
import type { ToastParams } from './types';

export default forwardRef((_, ref) => {
  const toasts = useRef<any>([]);
  const [update, setUpdate] = useState<number>();

  useImperativeHandle(ref, () => ({
    showToast,
    hideToast,
  }));

  /**
   * show loading
   * @param item
   */
  const showToast = (item: ToastParams) => {
    const key = Date.now();
    const opacity = new Animated.Value(0);
    const scale = new Animated.Value(0.8);

    // Animation for showing toast
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();

    const hideWithAnimation = () => {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 0.8,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => {
        item.onDismiss?.();
        toasts.current = toasts.current.filter((data: any) => data.key !== key);
        setUpdate(Date.now());
      });
    };

    const timeout = setTimeout(() => {
      hideWithAnimation();
    }, item.duration ?? 2000);

    const element = {
      item,
      job: timeout,
      key,
      opacity,
      scale,
      hideWithAnimation,
    };
    toasts.current.push(element);
    setUpdate(Date.now());
  };

  /**
   * on dismiss a toast
   */
  const onDismiss = (element: any) => {
    clearTimeout(element.job);
    element.hideWithAnimation();
  };

  /**
   *hidden loading
   */
  const hideToast = () => {
    const animations = toasts.current.map((toast: any) => {
      return Animated.parallel([
        Animated.timing(toast.opacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(toast.scale, {
          toValue: 0.8,
          duration: 200,
          useNativeDriver: true,
        }),
      ]);
    });

    if (animations.length > 0) {
      Animated.parallel(animations).start(() => {
        toasts.current = [];
        setUpdate(Date.now());
      });
    } else {
      toasts.current = [];
      setUpdate(Date.now());
    }
  };

  if (toasts.current.length > 0) {
    return (
      <View style={[styles.container, Shadow.dark]} key={`Toast${update}`}>
        {toasts.current.map((data: any, index: number) => {
          return (
            <Animated.View
              key={`Toast${index}`}
              style={{
                opacity: data.opacity,
                transform: [{ scale: data.scale }],
              }}
            >
              {index !== 0 && <SizedBox height={Spacing.S} />}
              <Toast
                {...data.item}
                action={{
                  ...data.item.action,
                  onPress: () => {
                    data.item.action?.onPress?.();
                    onDismiss(data);
                  },
                }}
              />
            </Animated.View>
          );
        })}
      </View>
    );
  }
  return null;
});

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    padding: Spacing.M,
    bottom: 80,
  },
});
