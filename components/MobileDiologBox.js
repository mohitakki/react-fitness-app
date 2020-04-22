import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default class MobileDiologBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

 

  render() {
    return (
        <></>
     
    );
  }
}

const styles = StyleSheet.create({
    textPhone:{
     textAlign:'center',
     fontSize:30,
     fontWeight:'600',
     color:'black'

    },

    btnEdit:{
        backgroundColor:'#9B9899',
        width:150,
        marginHorizontal:10,
        height:50,
        borderRadius:5,
        borderColor:'#f1f1f1',
        borderWidth:.5,


    },

    btnProceed:{
        backgroundColor:'#F95225',
        width:150,
        height:50,
        borderRadius:5,
        marginHorizontal:10,
        borderColor:'#f1f1f1',
        borderWidth:.5,


    },
  
    textEdit:{
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
 
    textProceed:{
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
