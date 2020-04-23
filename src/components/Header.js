import React from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
export default class Header extends React.Component {
  render() {
    return (
      <>
        {/* <StatusBar backgroundColor="#EA0706" /> */}
        <View style={styles._header}>
          <View style={styles._leftSide}>
            <View style={{marginLeft: 20}}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  fontWeight: 'bold',
                  fontFamily: 'Gill Sans',
                }}
                onPress={() => this.props.navigation.navigate('GymsList')}>
                Shalimar Garden
              </Text>
              <Text style={{color: 'white', fontFamily: 'Gill Sans'}}>
                Ghaziabad
              </Text>
            </View>
            <View>
              {this.props.icon ? (
                this.props.icon
              ) : (
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
              )}
            </View>
          </View>
        </View>
      </>
    );
  }
}

let styles = StyleSheet.create({
  _header: {
    backgroundColor: '#f23535',
    elevation: 4,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 20,
    shadowColor: '#c1c1c1',
    shadowOffset: {
      width: 0.2,
      height: 0.2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 0.84,
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
