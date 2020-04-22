import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    loginWithMobile({navigation}){
        navigation.navigate('Splash')
        
    }
    loginWithFacebook(navigation){
        // const {navigate} = this.props.navigation;
        // navigate('EnterMobile')
        alert("Login with Facebook")
        
    }
    loginWithGoogle(navigation){
        // const {navigate} = this.props.navigation;
        // navigate('EnterMobile')
        alert("Login with Google")
        
    }

    render() {
        const {navigate} = this.props.navigation;
        
        return (
            <>
                <View style={{ flex: 1 }}>
                    <LinearGradient colors={['#EA0706', '#059FF4',]} style={styles.linearGradient}>

                        <View style={styles.logoContainer}>
                            <Image source={require('../src/logo.png')} resizeMode="contain" style={{ width: 300, height: 300 }} />

                        </View>

                        <View style={styles.loginPart}>
                            <Text style={styles.buttonText}>
                                Sign up using
                            </Text>
                            <View style={{flexDirection:'row',alignSelf:'center', justifyContent:'space-between'}}>
                                
                            </View>
                              <View style={{justifyContent:'space-between',flexDirection:'row',marginTop:20}}>
                              <TouchableOpacity style={styles.btnFacebook } onPress={()=>this.loginWithFacebook()}>
                                    <Text style={styles.textFacebook}>Facebook</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnGoogle} onPress={()=>this.loginWithGoogle()}>
                                    <Text style={styles.textGoogle}>Google</Text>
                                </TouchableOpacity>
                              </View>
                              <View>
                              <TouchableOpacity style={styles.btnPhone}  onPress={() => navigate('EnterMobile')}>
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


const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
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
        flex: 2,
        height: 600,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginPart: {
        flex: 2,
        marginTop:120,


    },
    btnFacebook:{
        backgroundColor:'#059FF4',
        width:180,
        height:50,
        borderRadius:25,
        borderColor:'#f1f1f1',
        borderWidth:.5,


    },
    btnGoogle:{
        backgroundColor:'white',
        width:180,
        height:50,
        borderRadius:25,
        borderColor:'#f1f1f1',
        borderWidth:.5,


    },
    btnPhone:{
        backgroundColor:'#EA0706',
        marginTop:20,
        height:50,
        borderRadius:25
    },
    textFacebook:{
        justifyContent:'center',
        textAlign:'center',
        alignContent:'center',
        alignSelf:'center',
        fontSize:20,
        fontFamily: 'Gill Sans',
        fontWeight:'bold',
        marginVertical:10,
        color:'white'
    },
 
    textGoogle:{
        justifyContent:'center',
        textAlign:'center',
        alignContent:'center',
        alignSelf:'center',
        fontSize:20,
        fontFamily: 'Gill Sans',
        fontWeight:'bold',
        marginVertical:10
    },
    textPhone:{
        justifyContent:'center',
        textAlign:'center',
        alignContent:'center',
        alignSelf:'center',
        fontSize:20,
        fontFamily: 'Gill Sans',
        fontWeight:'bold',
        marginVertical:10,
        color:'white'
    },
})


