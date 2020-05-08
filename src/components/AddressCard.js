import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export default class AddressCard extends React.Component {
  render() {
    return (
      <View style={styles._container}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles._location}>
              <Entypo name="location-pin" size={20} />
            </View>
            <View style={styles._detail}>
              <Text style={styles._name}>Mohit Kumar</Text>
              <Text style={styles._locationTxt}>Shalimar Garder, Ghaziabad, Uttar Pradesh,</Text>
              <Text style={styles._locationTxt}>Pincode - 102001</Text>
              <Text style={styles._locationTxt}>Mobile - 9084632266</Text>
            </View>
            <TouchableOpacity>
              <Entypo name="edit" color="grey" size={16} />
            </TouchableOpacity>
          </View>

          <View style={styles._row}>
            <TouchableOpacity style={styles._addressBtn}>
              <Text style={styles._btnText} onPress={()=>this.props.navigation.navigate("ShippingAddress")}>CHANGE</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles._addressBtn} onPress={()=>this.props.navigation.navigate("ShippingAddress")} >
              <Text style={styles._btnText}>+ ADD NEW</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 3,
    borderColor: '#ededed',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 5,
    height: 180,

  },
  _date: {
    backgroundColor: '#bbdedd',
    flexDirection: 'row',
    fontSize: 12,
    marginBottom: 30,
    padding: 2,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  _row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  _location: {
    flexDirection: 'column',
    height: 30,
    width: 30,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  _name: {
    fontWeight: 'bold',
  },
  _detail: {
    flex: 1,
    paddingLeft: 10,
  },
  _addressBtn: {
    borderWidth: 1,
    flex:1,
    flexDirection:"row",
    height:35,
    alignItems:"center",
    margin:10,
    borderRadius:5,
    backgroundColor:"#ededed"
  },
  _btnText: {
    letterSpacing: 2,
    fontWeight: 'bold',
    fontSize: 10,
    width:"100%",
    textAlign:"center"
  },
  _locationTxt:{
      fontSize:12,
      color:"grey",
      paddingTop:10
  }
});
