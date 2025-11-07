import {
  ApplicationContext,
  Button,
  Input,
  InputSearchProps,
  NavigationButton,
  Screen,
  ScreenContainerProps,
  ScreenRef,
  SizedBox,
  Spacing,
  Styles,
  Switch,
  Text,
} from '@passionui/react-native-foundation';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';

const SearchHeader: React.FC<ScreenContainerProps> = ({ navigation }) => {
  const { theme } = useContext(ApplicationContext);
  const [useBack, setUseBack] = useState(false);
  const [useRight, setUseRight] = useState(false);
  const [search, setSearch] = useState<InputSearchProps>({
    placeholder: 'Search ...',
  });
  const screenRef = useRef<ScreenRef>(null);

  useEffect(() => {
    let headerRight;
    if (useRight) {
      headerRight = (props: any) => (
        <NavigationButton {...props} icon={'check'} />
      );
    }
    screenRef.current?.setSearchHeader({
      ...search,
      useBackHeader: useBack,
      headerRight,
    });
  }, [search, useBack, useRight]);

  return (
    <Screen
      ref={screenRef}
      navigation={navigation}
      scrollable={true}
      enableKeyboardAvoidingView={true}
      scrollViewProps={{ keyboardShouldPersistTaps: 'handled' }}
      footerComponent={<Button onPress={() => {}} title={'Button'} />}
    >
      <View
        style={[
          styles.screen,
          {
            backgroundColor: theme.colors.background.surface,
          },
        ]}
      >
        <View style={Styles.rowSpace}>
          <Text typography={'headline'} fontWeight="bold">
            Use Back Button
          </Text>
          <Switch value={useBack} onChange={() => setUseBack(!useBack)} />
        </View>
        <SizedBox height={12} />
        <View style={Styles.rowSpace}>
          <Text typography={'headline'} fontWeight="bold">
            Use Header Right Button
          </Text>
          <Switch value={useRight} onChange={() => setUseRight(!useRight)} />
        </View>
        <SizedBox height={12} />
        <Input
          defaultValue={search.placeholder}
          floatingValue={'Search'}
          placeholder={'Input placeholder for searcg'}
          onChangeText={(text) => setSearch({ ...search, placeholder: text })}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: 1000,
    padding: Spacing.M,
    borderRadius: Spacing.M,
  },
});

export default SearchHeader;
