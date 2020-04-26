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

export default class EnterOTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp:""
    };
  }

  sendOTP= async () => {
  
    fetch('http://fitbook.fit/fitbookadmin/api_v1/otp_check.php',
    {
      method:'POST',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        otp: this.state.otp
      })
    })
    .then((response) => response.json())
    .then((res) => {
      if(res.error=== false){
      console.warn(res);
      this.props.navigation.navigate('bottombar')
      
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == 'android' ? 'padding' : 'height' }
        style={{flex: 1}}>
        <LinearGradient
          colors={['#F26E38', '#F23873', '#48CCF7']}
          style={styles.linearGradient}>
          <View
            style={{
              flex: 1,
              alignContent: 'center',
              justifyContent: 'center',
              marginBottom: 100,

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
              <Text style={styles.sentText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.sendOTP()}>
              <Text style={styles.resendOTP}>
                Don't receive OTP? Click to Resend
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
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Gill Sans',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  inputText: {
    marginTop: 10,
    width: 340,
    height: 50,
    paddingLeft: 20,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 0.8,
   
    color: 'white',
   
  },
  sentButon: {
    backgroundColor: 'white',
    width: 340,
    borderRadius: 10,
    paddingVertical: 15,
    marginTop: 10,
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
    fontSize: 20,
    fontWeight: '700',
    color: '#F23873',
  },
  resendOTP: {
    color: 'white',
    marginTop: 10,
  },
});