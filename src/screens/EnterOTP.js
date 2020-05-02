import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  BackHandler,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { widthToDp } from '../config/responsive';

export default class EnterOTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp:""
    };
  }

  sendOTP = async = () => {
    fetch('http://fitbook.fit/fitbookadmin/api_v1/otp_check.php',
    {
      method:'POST',
      headers: {
       'Accept': 'application/json, text/plain',
       'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        otp: this.state.otp
      })
    })
    .then((response) => response.json())
    .then( async(res) => {

      if(res.error === false){
        await  AsyncStorage.setItem('token', res.token)
      this.props.navigation.navigate('bottombar')
      console.warn('done');
      
      }
      else{
        alert("OTP to Sahi daal Bhai")
      }
    })
    .catch((error) => {
      console.error(error);
    });
  
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height' }
        style={{flex: 1}}>
        <LinearGradient
          colors={['#F26E38', '#F23873', '#48CCF7']}
          style={styles.linearGradient}>
          <View
            style={{
              flex: 1,
              alignContent: 'center',
              justifyContent: 'center',
              marginBottom: widthToDp(50),

              alignItems: 'center',
            }}>
            <Text style={styles.buttonText}>Enter OTP</Text>

            <TextInput
              placeholder="Enter OTP"
              placeholderTextColor="white"
              style={styles.inputText}
              onChangeText={(otp)=>this.setState({otp})}
            />
            <TouchableOpacity
              style={styles.sentButon}
              onPress={() => this.sendOTP()}>
              <Text style={styles.sentText}>SUBMIT</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.sendOTP()}>
              <Text style={styles.resendOTP}>
                Resend OTP
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: widthToDp(8),
    paddingRight: widthToDp(8),
    borderRadius: 5,
  },
  buttonText: {
    fontSize: widthToDp(7),
    fontFamily: 'Gill Sans',
    margin: widthToDp(8),
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  inputText: {
    marginTop: widthToDp(8),
    width: widthToDp(80),
    height: widthToDp(12),
    paddingLeft: widthToDp(3),
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 0.8,
   
    color: 'white',
   
  },
  sentButon: {
    backgroundColor: 'white',
    width: widthToDp(80),
    borderRadius: 5,
    paddingVertical: widthToDp(3),
    marginTop: widthToDp(3),
    shadowColor: '#48CCF7',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 10,

    elevation: 15,
  },
  sentText: {
    textAlign: 'center',
    fontSize: widthToDp(4),
    fontWeight: '700',
    color: '#F23873',
  },
  resendOTP: {
    color: 'white',
    marginTop: widthToDp(2),
   fontSize:widthToDp(3)
  },
});