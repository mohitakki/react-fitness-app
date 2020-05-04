import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RazorpayCheckout from 'react-native-razorpay';

import Entypo from 'react-native-vector-icons/Entypo';
export default class FitPass extends React.Component {
  constructor() {
    super();
    this.state = {
      seleted: false,
      package: 'Quarterly',
    };
  }

  radioBtn = option => {
    this.setState({seleted: !this.state.seleted});
  };
  render() {
    return (
      <LinearGradient colors={['#f23535', '#48CCF7']} style={{flex: 1}}>
        <ScrollView>
          <View style={styles._container}>
            <Text style={styles._heading}>CHOOSE PLAN</Text>

            {/* monthly card */}
            <View style={styles._card}>
              <View style={styles._row}>
                <Text style={styles._title}>MONTHLY</Text>
                <TouchableOpacity
                  style={styles._circle}
                  onPress={() => this.radioBtn('Monthly')}>
                  <Text
                    style={[
                      styles._selected,
                      {
                        backgroundColor: this.state.seleted
                          ? '#fad04b'
                          : 'white',
                      },
                    ]}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles._row}>
                <Text style={styles._title}>
                  <FontAwesome size={16} name="rupee" />
                  999 {''}
                  <Text style={{fontSize: 12, color: '#bdbebf'}}>
                    <FontAwesome size={12} name="rupee" />
                    1279
                  </Text>
                </Text>
                <Text style={{color: 'white', fontSize: 12}}>
                  (monthly Saving <FontAwesome size={10} name="rupee" />
                  280)
                </Text>
              </View>
            </View>

            {/* Quarterly card */}
            <View style={styles._card}>
              <View style={styles._row}>
                <Text style={styles._title}>QUARTERLY</Text>
                <TouchableOpacity
                  style={styles._circle}
                  onPress={() => this.radioBtn('Quarterly')}>
                  <Text
                    style={[
                      styles._selected,
                      {
                        backgroundColor: this.state.seleted
                          ? 'white'
                          : '#fad04b',
                      },
                    ]}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles._row}>
                <Text style={styles._title}>
                  <FontAwesome size={16} name="rupee" />
                  2499 {''}
                  <Text style={{fontSize: 12, color: '#bdbebf'}}>
                    <FontAwesome size={12} name="rupee" />
                    3199
                  </Text>
                </Text>
                <Text style={{color: 'white', fontSize: 12}}>
                  (Quarterly Saving <FontAwesome size={12} name="rupee" />
                  700)
                </Text>
              </View>
            </View>

            <Text style={styles._heading}>BENEFITS</Text>
            <View style={styles._list}>
              <Entypo name="dot-single" size={30} color="#f23535" />

              <Text style={styles._listText}>Unlimited workouts</Text>
            </View>

            <View style={styles._list}>
              <Entypo name="dot-single" size={30} color="#f23535" />
              <Text style={styles._listText}>
                Workout anywhere - close to home, office or anywhere else
              </Text>
            </View>

            <View style={styles._list}>
              <Entypo name="dot-single" size={30} color="#f23535" />
              <Text style={styles._listText}>
                Workout anytime - choose any workout session throughout the day
              </Text>
            </View>

            <View style={styles._list}>
              <Entypo name="dot-single" size={30} color="#f23535" />

              <Text style={styles._listText}>
                Workout anyhow - Yoga, Zumba, Pilates, TRX, HIIT, Swimming,
                Boxing, MMA, Kickboxing, Bollydance & many more
              </Text>
            </View>
            <TouchableOpacity style={styles._subscribe_btn}>

            <TouchableHighlight
            style={{backgroundColor:"green"}}
              onPress={() => {
                var options = {
                  description: 'Credits towards consultation',
                  image: 'https://i.imgur.com/3g7nmJC.png',
                  currency: 'INR',
                  key: 'rzp_test_1OaQM6M6lY56GN',
                  amount: this.state.total,
                  name: 'Fit Book',
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
                  .catch(error => {});
              }}>
                <Text style={styles._subscribe_btn_text}>SUBSCRIBE NOW</Text>
            </TouchableHighlight>
              </TouchableOpacity>






            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('termscondtions')}>
              <Text style={styles._termConditions}>Terms & Conditions</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1,
  },
  _heading: {
    color: '#f7f4f4',
    letterSpacing: 1.5,
    fontWeight: 'bold',
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#f7f4f4',
    fontSize: 12,
    margin: 10,
  },
  _card: {
    height: 120,
    backgroundColor: '#3e5cd6',
    margin: 10,
    borderRadius: 5,
    padding: 20,
    justifyContent: 'space-between',
  },
  _row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  _title: {
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 2,
    fontSize: 17,
  },
  _circle: {
    borderRadius: 100,
    height: 23,
    width: 23,
    borderWidth: 2,
    borderColor: '#fad04b',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  _selected: {
    borderRadius: 100,
    height: 15,
    width: 15,
    borderWidth: 2,
    borderColor: '#fad04b',
    backgroundColor: '#fad04b',
  },
  _list: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 7,
  },
  _listText: {
    color: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 0,
    flexWrap: 'wrap',
    flexDirection: 'row',
    flex: 1,
  },
  _subscribe_btn: {
    backgroundColor: 'green',
    borderRadius: 100,
    padding: 10,
    width: '70%',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  _subscribe_btn_text: {
    color: 'white',
    letterSpacing: 2,
    textAlign: 'center',
  },
  _termConditions: {
    color: 'white',
    borderBottomWidth: 1,
    width: 125,
    paddingBottom: 5,
    borderColor: 'white',
    alignSelf: 'center',
  },
});
