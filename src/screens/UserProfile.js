import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
