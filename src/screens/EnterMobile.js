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
import RBSheet from 'react-native-raw-bottom-sheet';
import MobileDiologBox from '../components/MobileDiologBox';
import AsyncStorage from '@react-native-community/async-storage';


export default class EnterMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile:""
    };
  }

  sendOTP =async =()=> {
   
    fetch('https://fitbook.fit/fitbookadmin/api_v1/signup.php',
    {
      method:'POST',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mobile: this.state.mobile
      })
    })
    .then((response) => response.json())
    .then( async (res) => {
      try{
      if(res.error === false){
      await  AsyncStorage.setItem('token', res.token)
      console.warn(res.token);
      this.props.navigation.navigate('EnterOTP')
      }
      else{
        alert('Something went wrong')
      }
      } catch(e){

      }
     
    })
    .catch((error) => {
      console.error(error);
    });
    
  }

  render() {
    return (
      <>
        <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height' }
        style={{flex: 1}}>
        <LinearGradient
          colors={['#f23535', '#48CCF7']}
          style={styles.linearGradient}>
          <View
            style={{
              flex: 1,
              alignContent: 'center',
              justifyContent: 'center',
              marginBottom: 100,

              alignItems: 'center',
            }}>
            <Text style={styles.buttonText}>
              Enter your mobile number to get an OTP.
            </Text>

            <TextInput
              placeholder="Enter mobile number"
              placeholderTextColor="white"
              style={styles.inputText}
              onChangeText={(mobile)=>this.setState({mobile})}
            />
            <TouchableOpacity
              style={styles.sentButon}
              onPress={() => this.sendOTP()}>
              {/* onPress={() => this.RBSheet.open()}> */}
              <Text style={styles.sentText}>Send OTP</Text>
            </TouchableOpacity>

            <RBSheet
              ref={ref => {
                this.RBSheet = ref;
              }}
              height={250}
              duration={250}
              customStyles={{
                container: {
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              }}>
              <MobileDiologBox
                props={this.props}
                onpress={() => this.RBSheet.close()}
              />
            </RBSheet>
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
      </>
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
});
