import React, { useContext, useEffect } from 'react';
import {
  ApplicationContext,
  Container,
  Item,
  Screen,
  Shadow,
  SizedBox,
  Spacing,
  Styles,
  Text,
} from '@passionui/react-native-foundation';
import { FlatList, View } from 'react-native';

const Preview: React.FC<any> = ({ navigation, component, data }) => {
  const { theme } = useContext(ApplicationContext);

  useEffect(() => {
    navigation.setOptions({
      title: 'Preview',
    });
  }, []);

  const Component = component;

  return (
    <Screen
      navigation={navigation}
      scrollable
      scrollViewProps={{
        contentContainerStyle: Styles.paddingVerticalM,
      }}
    >
      {Object.keys(data).map((key, index) => {
        const item = data[key];
        return (
          <View key={`Preview item ${key}`}>
            {index !== 0 && <SizedBox height={Spacing.M} />}
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
                <Text typography="headline" fontWeight="bold">
                  {item.title}
                </Text>
              </Item>
              <Item>
                <FlatList
                  data={item?.value}
                  horizontal={item.direction === 'row'}
                  scrollEnabled={false}
                  renderItem={({ item: propsInfo }) => {
                    let props: { [key: string]: string } = {};
                    props[key] = propsInfo.value;
                    return <Component {...props} {...propsInfo.props} />;
                  }}
                  ItemSeparatorComponent={() => (
                    <SizedBox width={8} height={8} />
                  )}
                  keyExtractor={(i) => JSON.stringify(i)}
                />
              </Item>
            </Container>
          </View>
        );
      })}
    </Screen>
  );
};

export default Preview;
export type { PreviewProps } from './types';
