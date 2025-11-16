import {
  ApplicationContext,
  Button,
  Container,
  Item,
  Screen,
  ScreenContainerProps,
  Shadow,
  Spacing,
  Styles,
  Text,
} from '@passionui/react-native-foundation';
import React, { useContext, useEffect } from 'react';
import HeaderType from './HeaderType';
import AnimatedHeader from './AnimatedHeader';
import SearchHeader from './SearchHeader';

const More: React.FC<ScreenContainerProps> = ({ navigation }) => {
  const { theme, navigator, translate } = useContext(ApplicationContext);

  useEffect(() => {
    navigation?.setOptions({
      title: translate('more'),
    });
  }, [navigation]);

  return (
    <Screen
      navigation={navigation}
      scrollable={true}
      scrollViewProps={{ contentContainerStyle: Styles.paddingVerticalM }}
    >
      <Container
        padding={Spacing.M}
        gutter={8}
        style={[
          Shadow.light,
          {
            borderRadius: Spacing.M,
            backgroundColor: theme.colors.background.surface,
          },
        ]}
      >
        <Item>
          <Text typography={'callout'} fontWeight={'bold'}>
            Screen Styles
          </Text>
        </Item>
        <Item widthSpan={12}>
          <Button
            title={'Header Type'}
            onPress={() => {
              navigator?.push({
                screen: HeaderType,
              });
            }}
          />
        </Item>
        <Item widthSpan={12}>
          <Button
            title={'Animated Header'}
            onPress={() => {
              navigator?.push({
                screen: AnimatedHeader,
              });
            }}
          />
        </Item>
        <Item widthSpan={12}>
          <Button
            title={'Search Header'}
            onPress={() => {
              navigator?.push({
                screen: SearchHeader,
              });
            }}
          />
        </Item>
      </Container>
    </Screen>
  );
};

export default More;
