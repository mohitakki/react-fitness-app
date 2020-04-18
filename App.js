import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/Splash';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <View style={styles.linearGradient}>
          <Splash />
        </View>
      </>

    )
  }
}
const styles = StyleSheet.create({
  linearGradient:{
    flex:1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 28,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    fontWeight:'bold',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  
})



