import {
  Animated,
  type ImageSourcePropType,
  ScrollView,
  type ScrollViewProps,
  type StyleProp,
  type ViewProps,
  type ViewStyle,
} from 'react-native';
import React, { type ReactNode } from 'react';
import Navigator from './Navigator';
import type { HeaderButtonProps } from '@react-navigation/elements';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import type { InputRef, InputSearchProps, ToastProps } from '../index';
import type { Edges } from 'react-native-safe-area-context';
import { Localization } from '../Localization';
import type { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Stack: {
    [key: string]: any;
    screen: React.FC<ScreenContainerProps>;
  };
  Dialog: {
    [key: string]: any;
    screen: React.FC<ScreenContainerProps>;
  };
  Modal: {
    [key: string]: any;
    screen: React.FC<ScreenContainerProps>;
    onDismiss?: () => void;
    barrierDismissible?: boolean;
  };
};

/**
 * Theme type.
 */
export type Theme = {
  dark: boolean;
  colors: {
    primary: {
      default: string;
      light: string;
      container: string;
    };
    secondary: {
      default: string;
      light: string;
      container: string;
    };
    background: {
      default: string;
      surface: string;
      disable: string;
    };
    text: {
      default: string;
      secondary: string;
      hint: string;
      disable: string;
    };
    border: {
      default: string;
      disable: string;
    };
    success: {
      default: string;
      light: string;
      container: string;
    };
    warning: {
      default: string;
      light: string;
      container: string;
    };
    error: {
      default: string;
      light: string;
      container: string;
    };
  };
  font: string;
  assets?: {
    headerBackground?: ImageSourcePropType;
  };
};

/**
 * Context type.
 */
export type Context = {
  theme: Theme;
  navigator?: Navigator;
  translate: (key: string) => string;
};

/**
 * NavigationContainer props.
 */
export type NavigationContainerProps = {
  navigator: Navigator;
  screen: React.FC<ScreenContainerProps>;
  theme: Theme;
  params?: { string: any };
  localization: Localization;
};

/**
 * Screen type.
 */
export type ScreenContainerProps = {
  [key: string]: any;
  navigation: StackNavigationProp<any>;
};

/**
 * Screen parameters.
 */
export type ScreenParams<T extends ScreenContainerProps> = {
  [key: string]: any;
  screen: React.FC<T>;
};

/**
 * Dialog parameters.
 */
export interface ModalParams extends ScreenParams<ScreenContainerProps> {
  onDismiss?: () => void;
  barrierDismissible?: boolean;
  modalStyle?: StyleProp<ViewStyle>;
}

/**
 * BottomSheet parameters.
 */
export interface BottomSheetParams extends ScreenParams<ScreenContainerProps> {
  backgroundColor?: string;
  title: string;
  onClose?: () => void;
  onDismiss?: () => void;
}

/**
 * NavigationButton props.
 */
export interface NavigationButtonProps
  extends Omit<HeaderButtonProps, 'children'> {
  icon: string;
  onPress?: () => void;
  badge?: string | 'dot';
  style?: StyleProp<ViewStyle>;
}

/**
 * HeaderBackground props.
 */
export type HeaderBackgroundProps = {
  animatedValue?: Animated.Value;
  surface?: boolean;
  useGradient?: boolean;
  useShadowHeader?: boolean;
};

/**
 * BottomTabItem props.
 */
export interface BottomTabItemProps extends BottomTabNavigationOptions {
  name: string;
  icon: string;
  screen: React.FC<ScreenContainerProps>;
  initialParams?: any;
}

/**
 * BottomTab props.
 */
export type BottomTabProps = {
  initialRouteName?: string;
  nested?: boolean;
  tabs: BottomTabItemProps[];
  navigation: StackNavigationProp<any>;
};

/**
 * Header Type props.
 */
export type HeaderType = 'default' | 'surface' | 'extended' | 'none';

/**
 * Screen props.
 */
export interface ScreenProps extends ViewProps {
  /**
   * Navigation of react-navigation.
   */
  navigation: StackNavigationProp<any>;

  /**
   * Optional. If `true`, enable keyboard avoiding view for the screen.
   */
  enableKeyboardAvoidingView?: boolean;

  /**
   * Optional. If `true`, the screen content is scrollable.
   */
  scrollable?: boolean;

  /**
   * Optional. Edges for the screen.
   */
  edges?: Edges;

  /**
   * Optional. default header image gradient for header.
   */
  headerType?: HeaderType;
  /**
   * Optional. Props for the animated component or bool used top navigation animated.
   */
  animatedHeader?: AnimatedHeader;

  /**
   * Optional. Props for the underlying ScrollView component when `scrollable` is `true`.
   */
  scrollViewProps?: ScrollViewProps;

  /**
   * Optional. ReactNode representing the header component of the screen.
   */
  headerComponent?: ReactNode;

  /**
   * Optional. ReactNode representing the footer component of the screen.
   */
  footerComponent?: ReactNode;

  /**
   * Optional. ReactNode representing the floating component of the screen.
   */
  floatingComponent?: ReactNode;

  /**
   * Optional. layout card offset overlap header banner.
   */
  layoutOffset?: -8 | -24 | -56;

  /**
   * Optional. background for the screen.
   */
  backgroundColor?: string;

  /**
   * Optional. animated value for the screen.
   */
  animatedValue?: Animated.Value;
}

/**
 * Animated header type.
 */
export type AnimatedHeader = {
  useBackHeader?: boolean;
  headerTintColor?: string;
  headerTitle?: (props?: any) => React.ReactElement;
  component?: (props?: any) => React.ReactElement;
};

/**
 * Loading parameters.
 */
export type LoadingParams = {
  title?: string;
  message?: string;
  duration?: number;
};

/**
 * Toast parameters.
 */
export interface ToastParams extends ToastProps {
  onDismiss?: () => void;
  position?: number;
  duration?: number;
}

/**
 * Screen ref type.
 */
export type ScreenRef = {
  setSearchHeader: (params: HeaderSearchProps) => void;
} & ScrollView;

export type HeaderTitleProps = {
  animatedValue?: Animated.Value;
  tintColor?: string | undefined;
};

export interface HeaderSearchProps extends InputSearchProps {
  ref?: React.Ref<InputRef>;
  animatedValue?: Animated.Value;
  tintColor?: string | undefined;
  useBackHeader?: boolean;
  headerRight?: (props?: any) => React.ReactElement;
}

export type TitleUserProps = {
  title: string;
  subTitle?: string;
  image?: string;
  verify?: boolean;
  tintColor?: string;
  onPress?: () => void;
  animatedValue?: Animated.Value;
};
