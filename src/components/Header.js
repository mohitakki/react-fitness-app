import React from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import {widthToDp,heightToDp} from '../config/responsive'
export default class Header extends React.Component {
  render() {
    return (
      <>
        <View style={styles._header}>
          <View style={styles._leftSide}>
            <View style={{marginLeft: widthToDp(5)}}>
              <Text
                style={{
                  fontSize: widthToDp(4),
                  color: 'white',
                  fontWeight: 'bold',
                  fontFamily: 'Gill Sans',
                }}
                onPress={() => this.props.navigation.navigate('GymsList')}>
                Shalimar Garden
              </Text>
              <Text style={{color: 'white', fontFamily: 'Gill Sans',fontSize: widthToDp(3),}}>
                Ghaziabad
              </Text>
            </View>
            <View>
              {this.props.icon ? (
                this.props.icon
              ) : (
                <Image
                  style={{
                    width: widthToDp(8),
                    height: widthToDp(8),
                    borderRadius: 50,
                    borderColor: '#c1c1c1',
                    borderWidth: .4,
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
    paddingTop: widthToDp(9),
    paddingBottom: widthToDp(2),
    paddingRight: widthToDp(5),
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
});
