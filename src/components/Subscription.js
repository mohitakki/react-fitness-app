import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Subscription extends React.Component {
  render() {
    return (
      <View style={styles.shopingCard}>

      <View style={{flex:1, flexDirection:'row',justifyContent:'space-between' }}>      
      <LinearGradient colors={[ '#b22193','#f23535',]} style={{flex: 1, flexDirection:'row',}}>
    
      <View style={styles.leftArea}>
      <View style={{flex:1}}>
      <Text style={styles.getText}>GET</Text>
      <Text style={styles.percentText}>40%</Text>
      <Text style={styles.offText}>OFF</Text>
      </View>
    
      </View>
     
      <View style={styles.rightArea}>
      <View style={{flex:1,}}>
      <Text style={styles.textRight}>What are you waiting for?</Text>
     <View style={{flexDirection:'row'}}>
     <View style={{marginTop:10}}>
     <Text style={styles.fitpass}>FITBOOK PASS </Text>
     <Text style={styles.price}>899/ </Text>
     </View>
    <View style={{marginTop:30}}>
    <TouchableOpacity style={styles.SubscriptionButton}>
      <Text style={{color:'red', fontWeight:'600'}}>BUY PASS</Text>
    </TouchableOpacity>
    </View>

     
     </View>
      </View>
    
      </View>
     
  
</LinearGradient>
  </View>
   
       
      </View>
    );
  }
}

let styles = StyleSheet.create({
  shopingCard: {
    height: 100,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal:15,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0.3,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.84,
    elevation: 15,
    width:'100%',
    
  },
  leftArea:{
      width:150,
      backgroundColor:'#f4e6e6',
      height:'100%',
      borderTopRightRadius:75,
      borderBottomRightRadius:75,
      shadowColor: "#fff",
    shadowOffset: {
      width: .5,
      height: 2,
    },
    shadowOpacity: .85,
    shadowRadius: 3.84,
    elevation: 15,
    flexDirection:'row'

  },
  getText:{
      color:'red',
      marginTop:5,
      marginLeft:30,
      fontSize:20,
      fontWeight:'700',
      fontFamily: 'Gill Sans',
  },
  percentText:{
      color:'red',
      marginTop:1,
      marginLeft:25,
      fontSize:36,
      fontWeight:'700',
      fontFamily: 'Gill Sans',
  },
  offText:{
    color:'red',
    marginLeft:60,
    fontSize:20,
    fontWeight:'700',
    fontFamily: 'Gill Sans',
},
passText:{
    color:'white',

},
rightArea:{
    backgroundColor:'transparent',  
    marginTop:10
},
textRight:{
    color:'white',
    marginLeft:30,
    fontSize:16,
    fontWeight:'500',
    fontFamily: 'Gill Sans',
},
fitpass:{
    color:'white',
    marginTop:5,
    marginLeft:10,
    fontSize:14,
    fontWeight:'700',
    fontFamily: 'Gill Sans',
},
price:{
    color:'white',
    marginLeft:20,
    fontSize:32,
    fontWeight:'700',
    fontFamily: 'Gill Sans',
},
  SubscriptionButton:{
    backgroundColor:'white',
    borderRadius:10,
    paddingHorizontal:20,
    paddingVertical:8,
    marginHorizontal:10,

  }
});
