import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1, justifyContent:'center',
      alignItems:'center'}}>
        <Text> App Screen </Text>
        <Button title="Click Here" onPress={()=>alert("Bas Bhai")} />
      </View>
    );
  }
}
