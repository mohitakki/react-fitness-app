import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
    <View style={{flex:1, justifyContent:'center',
      alignItems:'center'}}>
       
  <Text style={styles.buttonText}>
    Splash Screen
  </Text>

       
      </View>
      </LinearGradient>
    );
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
