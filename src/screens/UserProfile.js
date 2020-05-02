import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import {widthToDp, heightToDp} from '../config/responsive';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


logout = async () =>{
    try {
      // await AsyncStorage.removeItem('token');
      const getItem = await AsyncStorage.removeItem('token');

      //This works and it is cleared, but when the app is relaunched or refreshed the value comes back
      console.log('Should not be stored:', getItem);
      this.props.navigation.navigate('Login')
      
    } catch (err) {
      throw new Error(err);
    }
  
    }
   

  render() {
    return (
      <View style={styles.container}>
       <View style={styles.topArea}>
       <LinearGradient colors={['#0f53c6', '#B721FF']} style={{flex: 1}}>
       <View style={styles.circleView}>
          <Image source={require('../assests/img1.jpg')}  style={styles.image}
       />
       </View>
   
       </LinearGradient>
       <Button title="Logout" onPress={()=>this.logout()} />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

container:{
    flex:1
},
topArea:{
    height: 250,
    width:'100%',
    backgroundColor:'red',

},
circleView:{
    width:120,
    height: 120,
    backgroundColor:'white',
    alignSelf:'center',
    marginTop:50,
    borderRadius:100

},
image:{

 width: 130,
 height: 130,
 resizeMode: "cover",
 borderRadius:20


}

})