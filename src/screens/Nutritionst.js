import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Nutritionist extends React.Component {
  render() {
    return (
      <View style={styles._container}>
        <Text>hi this is Nutritionist screen</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1,
  },
});
