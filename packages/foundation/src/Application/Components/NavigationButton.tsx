import React, { useCallback, useContext, useEffect } from 'react';
import {
  BackHandler,
  DeviceEventEmitter,
  StyleSheet,
  TouchableOpacity,
  View,
  type ViewStyle,
} from 'react-native';
import { Colors, Opacity } from '../../Consts';
import type { NavigationButtonProps } from '../types';
import { ApplicationContext } from '../../Context';
import { Icon } from '../../Icon';
import { Text } from '../../Text';

const NavigationButton: React.FC<NavigationButtonProps> = ({
  icon,
  tintColor,
  onPress,
  style,
  badge,
}) => {
  const { theme } = useContext(ApplicationContext);
  let buttonStyle: ViewStyle = {
    backgroundColor: theme.colors.background.surface + Opacity['60'],
    borderColor: theme.colors.border.default,
    borderWidth: 0.5,
  };
  if (tintColor === Colors.white) {
    buttonStyle = {
      borderColor: theme.colors.border.default,
      backgroundColor: theme.colors.text.default + Opacity['60'],
    };
  }

  const buildBadge = () => {
    if (badge) {
      if (badge === 'dot') {
        return (
          <View
            style={[
              styles.badgeDot,
              { backgroundColor: theme.colors.error.default },
            ]}
          />
        );
      }
      return (
        <View
          style={[
            styles.badgeLabel,
            { backgroundColor: theme.colors.error.default },
          ]}
        >
          <Text typography={'caption2'} color={Colors.white}>
            {badge}
          </Text>
        </View>
      );
    }
    return null;
  };

  return (
    <TouchableOpacity
      style={[styles.navigationButton, style, buttonStyle]}
      onPress={onPress}
    >
      <Icon
        name={icon}
        color={tintColor ?? theme.colors.text.default}
        size={20}
      />
      {buildBadge()}
    </TouchableOpacity>
  );
};

const NavigationBackButton: React.FC<NavigationButtonProps> = React.memo(
  ({ onPress, ...props }) => {
    const { navigator } = useContext(ApplicationContext);

    const goBack = useCallback(() => {
      const canGoBack = navigator?.ref.current?.canGoBack();
      if (canGoBack) {
        navigator?.ref.current?.goBack();
      } else {
        DeviceEventEmitter.emit('dismiss', undefined);
      }
      onPress?.();
      return true;
    }, [navigator?.ref, onPress]);

    useEffect(() => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        goBack
      );

      return () => backHandler.remove();
    }, [goBack]);

    return (
      <View style={styles.headerLeft}>
        <NavigationButton {...props} onPress={goBack} />
      </View>
    );
  }
);

const HeaderRightAction: React.FC<any> = ({ children, ...restProps }) => {
  const renderAction = () => {
    if (Array.isArray(children)) {
      return children.map((child, index) => {
        return (
          <View key={index} style={styles.headerButton}>
            {React.cloneElement(child, { ...restProps })}
          </View>
        );
      });
    }

    return (
      <View style={styles.headerButton}>
        {React.cloneElement(children, { ...restProps })}
      </View>
    );
  };
  return <View style={styles.headerRightButton}>{renderAction()}</View>;
};

const styles = StyleSheet.create({
  headerButton: { paddingHorizontal: 4 },
  headerRightButton: {
    flexDirection: 'row',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  navigationButton: {
    height: 28,
    width: 28,
    borderRadius: 14,
    borderWidth: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerLeft: {
    marginLeft: 12,
  },
  badgeDot: {
    position: 'absolute',
    top: -2,
    right: 0,
    height: 8,
    width: 8,
    borderRadius: 4,
  },
  badgeLabel: {
    position: 'absolute',
    top: -4,
    right: -4,
    color: 'white',
    borderRadius: 7,
    height: 14,
    minWidth: 14,
    paddingHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { NavigationButton, NavigationBackButton, HeaderRightAction };
