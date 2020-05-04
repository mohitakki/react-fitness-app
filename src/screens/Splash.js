import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Login from './Login';
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from '@react-native-community/netinfo';




export default class Splash extends Component {
  constructor(){
    super()
    this.state = {
      
    };
  }

  detectLogin = async () => {
     
    const token = await AsyncStorage.getItem('token')
    if (token) {
      this.props.navigation.navigate('bottombar')
    } else {
      this.props.navigation.navigate('Onboarding')
    }
 

}

  componentDidMount(){
   
     this.detectLogin()
    // Start counting when the page is loaded
    const {navigate} = this.props.navigation;

    this.timeoutHandle = setTimeout(()=>{
         // Add your logic for the transition
        
        

    }, 1000);
    
}



  render() {
    return (
        <>
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
        <View style={{flex:1, justifyContent:'center',
          alignItems:'center'}}>
           
      <Text style={styles.buttonText}>
        Splash Screen
      </Text>
    
           
          </View>
          </LinearGradient>
        </>
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
  
