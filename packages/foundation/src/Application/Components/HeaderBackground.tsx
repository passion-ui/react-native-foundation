import React, { useContext } from 'react';
import { LinearGradient } from '../../Adapters';
import {
  Animated,
  Platform,
  StyleSheet,
  View,
  type ViewProps,
  type ViewStyle,
} from 'react-native';
import { ApplicationContext } from '../../Context';
import type { HeaderBackgroundProps } from '../types';
import { Opacity, Styles } from '../../Consts';
import { Image } from '../../Image';
import { SizedBox } from '../../SizedBox';

const HeaderBackground: React.FC<HeaderBackgroundProps> = React.memo(
  ({
    surface = false,
    useShadowHeader = true,
    useGradient = true,
    animatedValue,
  }) => {
    const { theme } = useContext(ApplicationContext);

    const opacityBackground = animatedValue?.interpolate({
      inputRange: [0, 52],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    const opacityGradient = animatedValue?.interpolate({
      inputRange: [0, 50],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    let shadowStyle: ViewStyle[] = [
      styles.dividerHeader,
      { borderColor: theme.colors.border.default },
    ];
    if (useShadowHeader) {
      shadowStyle = [
        styles.shadowHeader,
        { shadowColor: theme.colors.border.default },
      ];
    }

    return (
      <View style={Styles.flex}>
        {surface ? (
          <View
            style={[
              Styles.flex,
              shadowStyle,
              { backgroundColor: theme.colors.background.surface },
            ]}
          />
        ) : (
          <>
            <Animated.View
              style={[
                Styles.flex,
                shadowStyle,
                {
                  backgroundColor: theme.colors.background.surface,
                  opacity: opacityBackground,
                },
              ]}
            />
            <View style={styles.gradientContainer}>
              {useGradient && (
                <Animated.View style={{ opacity: opacityGradient }}>
                  <LinearGradient
                    colors={[
                      theme.colors.primary.default + Opacity['40'],
                      theme.colors.primary.default + Opacity['0'],
                    ]}
                    style={styles.extendedHeader}
                  >
                    {theme.assets?.headerBackground && (
                      <Image
                        source={theme.assets?.headerBackground as any}
                        style={Styles.flex as any}
                        loading={false}
                      />
                    )}
                  </LinearGradient>
                </Animated.View>
              )}
            </View>
          </>
        )}
      </View>
    );
  }
);

const HeaderBanner: React.FC<ViewProps & { animatedValue: Animated.Value }> = ({
  animatedValue,
  children,
  style,
  ...props
}) => {
  const scale = animatedValue.interpolate({
    inputRange: [-300, 0, 300],
    outputRange: [4, 1, 1],
    extrapolate: 'clamp',
  });
  const opacity = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      {...props}
      style={[
        styles.headerBannerImage,
        {
          opacity,
          transform: [{ scale }],
        },
        style,
      ]}
    >
      {children}
    </Animated.View>
  );
};

/**
 * Header extended with background image
 * @constructor
 */
const HeaderExtendHeader: React.FC<{
  heightHeader: number;
  animatedValue: Animated.Value;
  useShadowHeader?: boolean;
}> = ({ heightHeader, animatedValue, useShadowHeader = true }) => {
  const { theme } = useContext(ApplicationContext);

  const opacityBackground = animatedValue.interpolate({
    inputRange: [0, 52],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  const opacityGradient = animatedValue?.interpolate({
    inputRange: [0, 50],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  let shadowStyle: ViewStyle[] = [
    styles.dividerHeader,
    { borderColor: theme.colors.border.default },
  ];
  if (useShadowHeader) {
    shadowStyle = [
      styles.shadowHeader,
      { shadowColor: theme.colors.border.default },
    ];
  }

  return (
    <>
      <Animated.View
        style={[
          styles.extendedHeader,
          styles.headerImage,
          { opacity: opacityGradient },
        ]}
      >
        <LinearGradient
          colors={[
            theme.colors.primary.default + Opacity['30'],
            theme.colors.primary.default + Opacity['0'],
          ]}
          style={Styles.flex}
        >
          {theme.assets?.headerBackground && (
            <Image
              source={theme.assets?.headerBackground as any}
              style={Styles.flex}
              loading={false}
            />
          )}
        </LinearGradient>
      </Animated.View>
      <SizedBox height={heightHeader} />
      <Animated.View
        style={[
          shadowStyle,
          styles.absoluteHeader,
          {
            height: heightHeader,
            backgroundColor: theme.colors.background.surface,
            opacity: opacityBackground,
          },
        ]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  headerBannerImage: { width: '100%', height: 240 },
  headerImage: { width: '100%', height: 154 },
  shadowHeader: {
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 3,
          height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
      },
      android: {
        shadowOffset: {
          width: 3,
          height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 8,
      },
    }),
  },
  gradientContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  extendedHeader: {
    aspectRatio: 375 / 154,
    position: 'absolute',
    width: '100%',
  },
  headerBackground: {
    width: '100%',
    height: undefined,
    position: 'absolute',
    aspectRatio: 375 / 154,
  },
  dividerHeader: {
    borderBottomWidth: 1,
  },
  absoluteHeader: {
    width: '100%',
    position: 'absolute',
    zIndex: 3,
  },
});

export { HeaderBackground, HeaderBanner, HeaderExtendHeader };
