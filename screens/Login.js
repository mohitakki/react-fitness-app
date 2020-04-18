import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <View style={{ flex: 1 }}>
                    <LinearGradient colors={['#05afd1', '#090979',]} style={styles.linearGradient}>

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
                              <TouchableOpacity style={styles.btnFacebook }>
                                    <Text style={styles.textFacebook}>Facebook</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnGoogle}>
                                    <Text style={styles.textGoogle}>Google</Text>
                                </TouchableOpacity>
                              </View>
                              <View>
                              <TouchableOpacity style={styles.btnPhone}>
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
        backgroundColor:'#0a42ca',
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
        backgroundColor:'#e35e2c',
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
        fontWeight:'bold',
        marginVertical:10,
        color:'white'
    },
 
    textGoogle:{
        justifyContent:'center',
        textAlign:'center',
        alignContent:'center',
        alignSelf:'center',
        fontSize:24,
        fontWeight:'bold',
        marginVertical:10
    },
    textPhone:{
        justifyContent:'center',
        textAlign:'center',
        alignContent:'center',
        alignSelf:'center',
        fontSize:24,
        fontWeight:'bold',
        marginVertical:10,
        color:'white'
    },
})


