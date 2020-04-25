import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
        <View style={{flex: 1}}>
          <LinearGradient
            colors={[ '#090979','#05afd1',]}
            style={styles.linearGradient}>
            <View style={styles.logoContainer}>
              <Image
                source={require('./../assests/logo.png')}
                resizeMode="contain"
                style={{width: 250, height: 250}}
              />
            </View>

            <View style={styles.loginPart}>
              <Text style={styles.buttonText}>Sign up using</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  justifyContent: 'space-between',
                }}
              />
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginTop: 20,
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
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',

    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  logoContainer: {
    flex: 4,
    height: 600,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:100
  },
  loginPart: {
    flex: 2,
   
  },
  btnFacebook: {
    backgroundColor: '#0a42ca',
    width: 180,
    height: 50,
    borderRadius: 10,
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
    width: 180,
    height: 50,
    borderRadius: 10,
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
    marginTop: 20,
    height: 50,
    borderRadius: 10,
    shadowColor: '#0a42ca',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.95,
    shadowRadius: 1.84,
    elevation: 5,
  },
  textFacebook: {
    justifyContent: 'center',
    textAlign: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'Gill Sans',
    fontWeight: '600',
    marginVertical: 10,
    color: 'white',
  },

  textGoogle: {
    justifyContent: 'center',
    textAlign: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'Gill Sans',
    fontWeight: '600',
    marginVertical: 10,
  },
  textPhone: {
    justifyContent: 'center',
    textAlign: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Gill Sans',
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'white',
  },
});
