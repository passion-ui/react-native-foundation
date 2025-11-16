import { Alert, View } from 'react-native';
import {
  ApplicationContext,
  Button,
  Container,
  Item,
  Screen,
  ScreenContainerProps,
  Shadow,
  SizedBox,
  Spacing,
  Styles,
  Text,
} from '@passionui/react-native-foundation';
import React, { useContext, useEffect } from 'react';

const Test: React.FC<ScreenContainerProps> = ({ navigation }) => {
  return <Screen scrollable={true} navigation={navigation} />;
};

const Motions: React.FC<ScreenContainerProps> = ({ navigation }) => {
  const { theme, navigator, translate } = useContext(ApplicationContext);

  useEffect(() => {
    navigation?.setOptions({
      title: translate('motions'),
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
            Transitions
          </Text>
        </Item>
        <Item widthSpan={12}>
          <Button
            title={'Push'}
            onPress={() => {
              navigator?.push({
                screen: Test,
              });
            }}
          />
        </Item>
        <Item widthSpan={12}>
          <Button
            title={'Present'}
            onPress={() => {
              navigator?.present({
                screen: () => <View style={Styles.flex} />,
              });
            }}
          />
        </Item>
        <Item widthSpan={12}>
          <Button
            title={'Replace'}
            onPress={() => {
              navigator?.replace({
                screen: () => <View style={Styles.flex} />,
              });
            }}
          />
        </Item>
        <Item widthSpan={12}>
          <Button
            title={'Reset'}
            onPress={() => {
              navigator?.reset({
                screen: () => <View style={Styles.flex} />,
              });
            }}
          />
        </Item>
        <Item widthSpan={12}>
          <Button
            title={'Pop To Top'}
            onPress={() => {
              navigator?.popToTop();
            }}
          />
        </Item>
        <Item widthSpan={12}>
          <Button
            title={'Show Modal'}
            onPress={() => {
              navigator?.showModal({
                screen: () => (
                  <View
                    style={{ width: 200, height: 200, backgroundColor: 'red' }}
                  />
                ),
              });
            }}
          />
        </Item>
        <Item widthSpan={12}>
          <Button
            title={'Show BottomSheet'}
            onPress={() => {
              navigator?.showBottomSheet({
                title: 'Bottom Sheet',
                screen: () => <SizedBox height={300} />,
              });
            }}
          />
        </Item>
        <Item widthSpan={12}>
          <Button
            title={'Show Loading'}
            onPress={() => {
              navigator?.showLoading();
              setTimeout(() => {
                navigator?.hideLoading();
              }, 5000);
            }}
          />
        </Item>
        <Item widthSpan={12}>
          <Button
            title={'Show Toast'}
            onPress={() => {
              navigator?.showToast({
                type: 'warning',
                icon: 'map-marker-outline',
                message: `Toast message ${Date.now()}`,
                duration: 5000,
                action: {
                  title: 'Action',
                  onPress: () => Alert.alert('onPress'),
                },
                onDismiss: () => Alert.alert('onDismiss'),
              });
            }}
          />
        </Item>
        <Item widthSpan={12}>
          <Button
            title={'Hide Toast'}
            onPress={() => {
              navigator?.hideToast();
            }}
          />
        </Item>
      </Container>
    </Screen>
  );
};

export default Motions;
