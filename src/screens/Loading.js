import React, { Component,useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';




export default class Loading extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  detectLogin=async () => {
     
    const token = await AsyncStorage.getItem('token')
    if (token) {
      this.props.navigation.navigate('bottombar')
    } else {
      this.props.navigation.navigate('Login')
    }
 

}
async componentDidMount(){
 await this.detectLogin()

 }

  render() 
  
  {
    
    return (
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large" color="red"/>
      </View>
    );
  }

}