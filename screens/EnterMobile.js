import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-gesture-handler';

export default class EnterMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{flex:1}}>
        <LinearGradient colors={['#F26E38', '#F23873', '#48CCF7']} style={styles.linearGradient}>
        <View style={{flex:1, alignContent:'center',justifyContent:'center', marginBottom:100,
       
        alignItems:'center',
        }}>
           
      <Text style={styles.buttonText}>
      Enter your mobile number to get an OTP.
        
      </Text>
      
      <TextInput placeholder="Enter mobile number" placeholderTextColor="white" style={styles.inputText}/>    
     
          </View>
          </LinearGradient>
          </KeyboardAvoidingView>
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
      fontSize: 20,
      fontFamily: 'Gill Sans',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
    inputText:{
        marginTop:10,
        width:340,
        height:50,
        paddingLeft:20,
        borderRadius:10,
        borderColor:'white',
        borderWidth:.8,
        shadowColor: "white",
        color:'white',
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.55,
shadowRadius: 3.84,

elevation: 15,

    },
    
  })
  
