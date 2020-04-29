import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Payment extends React.Component {
  render() {
    return (
      <View style={styles._container}>
        <View style={styles._subheader}>
          <Text style={styles._heading}>Payable Amount</Text>
          <Text style={styles._price}>
            <FontAwesome name="rupee" /> {this.props.route.params.total}
          </Text>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1,
  },
  _subheader: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    height: 60,
    alignItems: 'center',
  },
  _heading: {
    fontWeight: 'bold',
  },
  _price: {
    fontWeight: 'bold',
  },
});
