import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default class GreeingCard extends React.Component {
  render() {
    return (
      <View style={styles._container}>
        <View style={{flex: 1,justifyContent:"center"}}>
          <Text style={styles._date}>04 May, 2020</Text>
          <View style={styles._row}>
            <View>
              <Text style={{fontSize: 10, letterSpacing: 1}}>GOOD EVENING</Text>
              <Text style={{fontSize: 20}}>Mohit</Text>
            </View>

            <View>
              <Text style={{fontSize: 10, letterSpacing: 1}}>FEW CLOUDS</Text>
              <Text style={{fontSize: 20}}>40.01'C</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    height: 130,
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 3,
    borderColor:"#ededed"
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
    alignSelf:"center"
  },
  _row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
