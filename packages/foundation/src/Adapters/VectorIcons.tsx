let VectorIcons: any;

try {
  VectorIcons = require('@expo/vector-icons');
} catch (e) {
  VectorIcons = {
    MaterialCommunityIcons:
      require('react-native-vector-icons/MaterialCommunityIcons').default,
    FontAwesome: require('react-native-vector-icons/FontAwesome').default,
    FontAwesome5: require('react-native-vector-icons/FontAwesome5').default,
    Ionicons: require('react-native-vector-icons/Ionicons').default,
    Feather: require('react-native-vector-icons/Feather').default,
    MaterialIcons: require('react-native-vector-icons/MaterialIcons').default,
    Entypo: require('react-native-vector-icons/Entypo').default,
    AntDesign: require('react-native-vector-icons/AntDesign').default,
    EvilIcons: require('react-native-vector-icons/EvilIcons').default,
    FontAwesome6: require('react-native-vector-icons/FontAwesome6').default,
    Foundation: require('react-native-vector-icons/Foundation').default,
    Octicons: require('react-native-vector-icons/Octicons').default,
    SimpleLineIcons: require('react-native-vector-icons/SimpleLineIcons')
      .default,
    Zocial: require('react-native-vector-icons/Zocial').default,
  };
}

export { VectorIcons };
