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
     
    const token = AsyncStorage.getItem('token')
    if (token) {
      this.navigatation.navigate('Onboarding')
    } else {
      this.navigatation.navigate('Login')
    }
 
useEffect(()=>{
    detectLogin()
}, [])
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