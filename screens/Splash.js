import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Login from './Login';



export default class Splash extends Component {
  constructor(){
    super()
    this.state= ''
  }

  componentDidMount(){
    // Start counting when the page is loaded
    const {navigate} = this.props.navigation;

    this.timeoutHandle = setTimeout(()=>{
         // Add your logic for the transition
         navigate('Login');
        

    }, 1000);
    
}



  render() {
    return (
        <>
            <LinearGradient colors={['#EA0706', '#059FF4',]} style={styles.linearGradient}>
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
  
