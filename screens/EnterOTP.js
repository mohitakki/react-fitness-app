import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, BackHandler } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import CodeInput from 'react-native-confirmation-code-input';


export default class EnterOTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  sendOTP(){
      alert('OTP is sent to you mobile number');
      const {navigate} = this.props.navigation;
      navigate('EnterOTP')
      return false;
  }
  proceedToHome(){
    alert('OTP is Verified');
      const {navigate} = this.props.navigation;
      navigate('Home')
      return false;
  }

  render() {
    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{flex:1}}>
        <LinearGradient colors={['#EA0706', '#059FF4',]} style={styles.linearGradient}>
       <View  style={styles.otp}>
           
     <Text style={styles.buttonText}>
      Enter OTP
        
      </Text>
      
      {/*  <TextInput placeholder="Enter OTP" placeholderTextColor="white" style={styles.inputText}/>    */}
    
      <TouchableOpacity style={{top:100}}>
      <Text>Resend code?</Text>
    </TouchableOpacity>
    
    <CodeInput 
      ref="codeInputRef2"
      keyboardType="numeric"
      containerStyle={styles.codeInput}
      codeLength={5}
      className='border-circle'
      compareWithCode='12345'
      autoFocus={true}
      codeInputStyle={{ fontWeight: '800' }}
      onFulfill={(isValid, code) => this.proceedToHome()}
    />
    
    </View> 
  </LinearGradient>
          </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
    linearGradient:{
     flex:1
      
    },
    codeInput:{
marginTop:10,
marginBottom:100,
paddingBottom:100
    },
    otp:{
marginTop:100
    },
        buttonText: {
      fontSize: 20,
      justifyContent:'center',
      fontFamily: 'Gill Sans',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
      alignContent:'center',
      alignItems:'center',
      alignSelf:'center',
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
sentButon:{
    backgroundColor:'white',
        width:340,
        borderRadius:10,
        paddingVertical:15,
        marginTop:10,
        shadowColor:'#48CCF7',
        shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.45,
shadowRadius: 10,

elevation: 15,
},
sentText:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'700',
    color:'#F23873',

},
resendOTP:{
  color:'white',
  marginTop:5,
  
}
})
  
