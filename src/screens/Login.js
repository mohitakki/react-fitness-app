import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  StatusBar,
  SafeAreaView
  
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {widthToDp,heightToDp} from '../config/responsive'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  loginWithMobile = () => {
     const {navigate} = this.props.navigation;
  navigate('EnterMobile');
  }
  loginWithFacebook(navigation) {
    // const {navigate} = this.props.navigation;
    // navigate('EnterMobile')
    alert('Login with Facebook');
  }
  loginWithGoogle(navigation) {
    // const {navigate} = this.props.navigation;
    // navigate('EnterMobile')
    alert('Login with Google');
  }

  render() {
    return (
      <>
       <StatusBar translucent backgroundColor="transparent"/>
       
        <View style={{flex: 1, }}>
          <LinearGradient
            colors={[ '#090979','#05afd1',]}
            style={styles.linearGradient}>
            <View style={styles.logoContainer}>
              <Image
                source={require('./../assests/logo.png')}
                resizeMode="contain"
                style={styles.image}
              />
            </View>

            <View style={styles.loginPart}>
              <Text style={styles.buttonText}>Sign up using</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  justifyContent: 'space-evenly',
                }}
              />
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginTop: widthToDp(4),
                }}>
                <TouchableOpacity
                  style={styles.btnFacebook}
                  onPress={() => this.loginWithFacebook()}>
                  <Text style={styles.textFacebook}>Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btnGoogle}
                  onPress={() => this.loginWithGoogle()}>
                  <Text style={styles.textGoogle}>Google</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.btnPhone}
                  onPress={() => this.loginWithMobile()}>
                  <Text style={styles.textPhone}>Login with mobile</Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </View>
      
      </>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: widthToDp(5),
    paddingRight: widthToDp(5),
  },
  buttonText: {
    fontSize: widthToDp(4),
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  logoContainer: {
    flex: 4,
    height: heightToDp(100),
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginPart: {
    flex: 2,
   
  },
  image:{
    width:widthToDp(50),
    height: heightToDp(50)

  },

  btnFacebook: {
    backgroundColor: '#0a42ca',
    width: widthToDp(43),
    height: widthToDp(10),
    borderRadius: 5,
    shadowColor: '#fff',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.95,
    shadowRadius: 1.84,
    elevation: 5,
  },
  btnGoogle: {
    backgroundColor: 'white',
    width: widthToDp(43),
    height: widthToDp(10),
    borderRadius: 5,
    shadowColor: '#f23535',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.95,
    shadowRadius: 1.84,
    elevation: 5,
  },
  btnPhone: {
    backgroundColor: '#f23535',
    height: widthToDp(12),
    borderRadius: 5,
    shadowColor: '#0a42ca',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.95,
    shadowRadius: 1.84,
    elevation: 5,
    marginTop:widthToDp(5)
  },
  textFacebook: {
    textAlign:'center',
    fontSize: widthToDp(4),
    fontFamily: 'Gill Sans',
    fontWeight: 'bold',
    color: 'white',
    marginTop:heightToDp(1)
  },

  textGoogle: {
    textAlign:'center',
    fontSize: widthToDp(4),
    marginTop:heightToDp(1),
    fontFamily: 'Gill Sans',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  textPhone: {
    textAlign:'center',
    fontSize: widthToDp(5),
    marginTop:heightToDp(1),
    fontFamily: 'Gill Sans',
    fontWeight: 'bold',
    color: 'white',

  },
});
