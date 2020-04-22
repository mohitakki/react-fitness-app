import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
export default class Header extends React.Component {
  render() {
    return (
      <View style={styles._header}>
        <View style={styles._leftSide}>
          <View style={{marginLeft: 20}}>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                fontWeight: 'bold',
                fontFamily: 'Gill Sans',
              }}>
              Shalimar Garden
            </Text>
            <Text style={{color: 'white', fontFamily: 'Gill Sans'}}>
              Ghaziabad
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('location')}>
            <Image
              style={{
                width: 30,
                height: 30,
                borderRadius: 50,
                borderColor: '#c1c1c1',
                borderWidth: 1,
                resizeMode: 'contain',
                backgroundColor: '#000',
              }}
              source={require('./../assests/logo.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _header: {
    backgroundColor: '#F26E38',
    elevation: 14,
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
  },
  _leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  _right_text: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 1,
    shadowColor: '#c1c1c1',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 2.95,
    shadowRadius: 3.84,
    marginHorizontal: 20,
    marginVertical: 20,
    elevation: 25,
  },
});
