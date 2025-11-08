import React, { useContext } from 'react';
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { ApplicationContext } from '../../Context';
import { getTypoStyle, Text } from '../../Text';
import InputSearch from '../../Input/InputSearch';
import { Colors, Spacing, Styles } from '../../Consts';
import { Image } from '../../Image';
import type { InputRef } from '../../Input/types';
import type {
  HeaderSearchProps,
  HeaderTitleProps,
  TitleUserProps,
} from '../types';
import { SizedBox } from '../../SizedBox';
import { Icon } from '../../Icon';

const HeaderTitle: React.FC<HeaderTitleProps> = React.memo((props) => {
  const { theme } = useContext(ApplicationContext);
  const opacity = props.animatedValue?.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <Animated.Text
      {...props}
      style={[
        getTypoStyle(theme, 'headline', 'bold'),
        { opacity, color: props.tintColor },
      ]}
    />
  );
});

const HeaderSearch = React.forwardRef<InputRef, HeaderSearchProps>(
  (props, ref) => {
    const opacity = props.animatedValue?.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View style={{ opacity }}>
        <InputSearch {...props} children={undefined} ref={ref} />
      </Animated.View>
    );
  }
);

/**
 * Header user title
 * @constructor
 */
const TitleUser: React.FC<TitleUserProps> = ({
  title,
  subTitle,
  image,
  tintColor,
  verify,
  onPress,
  animatedValue,
}) => {
  const { width: widthDevice } = useWindowDimensions();
  const { theme } = useContext(ApplicationContext);
  const opacity = animatedValue?.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  return (
    <Animated.View style={{ opacity }}>
      <TouchableOpacity
        style={[
          styles.headerTitleContainer,
          {
            width: widthDevice - Spacing.M * 2,
            marginLeft: -Spacing.XS,
          },
        ]}
        onPress={onPress}
        disabled={onPress === undefined}
      >
        <View style={[Styles.row, Styles.flex]}>
          <View>
            <View
              style={[
                styles.imageContainer,
                {
                  borderColor: theme.colors.border.default,
                  backgroundColor: theme.colors.primary.container,
                },
              ]}
            >
              <Image source={{ uri: image }} style={styles.circle as any} />
            </View>
            {verify && (
              <View
                style={[
                  styles.dotAvatar,
                  {
                    backgroundColor: theme.colors.success.default,
                  },
                ]}
              >
                <Icon name={'check'} color={Colors.white} size={10} />
              </View>
            )}
          </View>
          <SizedBox width={Spacing.S} />
          <View style={Styles.flex}>
            <Text
              typography="subhead"
              fontWeight={'bold'}
              color={tintColor}
              numberOfLines={1}
            >
              {title}
            </Text>
            {!!subTitle && (
              <Text typography="caption2" color={tintColor} numberOfLines={1}>
                {subTitle}
              </Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  headerTitleContainer: {
    justifyContent: 'center',
    height: '100%',
    paddingBottom: 4,
  },
  imageContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  dotAvatar: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 6,
    bottom: -2,
    right: -2,
    borderWidth: 0.5,
    borderColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifiedIcon: { width: 12, height: 12, marginLeft: Spacing.XS },
  circle: {
    width: '100%',
    height: '100%',
  },
});

export { HeaderTitle, HeaderSearch, TitleUser };
