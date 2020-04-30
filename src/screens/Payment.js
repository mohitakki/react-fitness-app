import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RazorpayCheckout from 'react-native-razorpay';

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

        <TouchableHighlight
          onPress={() => {
            var options = {
              description: 'Credits towards consultation',
              image: 'https://i.imgur.com/3g7nmJC.png',
              currency: 'INR',
              key: 'rzp_test_1OaQM6M6lY56GN',
              amount: this.props.route.params.total,
              name: 'foo',
              prefill: {
                email: 'void@razorpay.com',
                contact: '9191919191',
                name: 'Razorpay Software',
              },
              theme: {color: 'green'},
            };
            RazorpayCheckout.open(options)
              .then(data => {
                // handle success
                alert(`Success: ${data.razorpay_payment_id}`);
              })
              .catch(error => {
                // handle failure
                alert(`Error: ${error.code} | ${error.description}`);
              });
          }}>
          <Text>suneel</Text>
        </TouchableHighlight>
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
