import React, { useContext, useRef, useState } from 'react';
import FastImage from '@d11/react-native-fast-image';
import { View } from 'react-native';
import styles from './styles';
import { ApplicationContext } from '../Application';
import { Icon } from '../Icon';
import type { ImageProps } from './types';
import { Skeleton } from '../Skeleton';
import { Styles } from '../Consts';

type Status = 'success' | 'loading' | 'error';

const Image: React.FC<ImageProps> = ({
  style,
  source,
  loading = true,
  children,
  ...rest
}) => {
  const { theme } = useContext(ApplicationContext);
  const error = useRef(false);
  const [status, setStatus] = useState<Status>(loading ? 'loading' : 'success');

  /**
   * render content loading | fail | rendered
   */
  const renderContent = () => {
    if (status === 'loading' || status === 'error') {
      let content = <Skeleton />;
      if (status === 'error') {
        content = (
          <Icon name="image-off-outline" color={theme.colors.text.disable} />
        );
      }
      return <View style={Styles.flexCenter}>{content}</View>;
    }
    return children;
  };

  return (
    <FastImage
      {...rest}
      source={source}
      style={[styles.container, style] as any}
      onProgress={() => {
        error.current = false;
        if (status !== 'loading' && loading) {
          setStatus('loading');
        }
      }}
      onLoadStart={() => {
        error.current = false;
      }}
      onLoadEnd={() => {
        let current: Status = 'success';
        if (error.current) {
          current = 'error';
        }
        if (status !== current) {
          setStatus(current);
        }
      }}
      onError={() => {
        error.current = true;
      }}
    >
      {renderContent()}
    </FastImage>
  );
};

export { Image };
