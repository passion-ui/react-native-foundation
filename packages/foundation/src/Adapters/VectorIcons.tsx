let VectorIcons: any;

try {
  VectorIcons = require('@expo/vector-icons');
} catch (e) {
  VectorIcons = require('react-native-vector-icons').default;
}

export { VectorIcons };
