import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {CityPicker, Header} from './../components';
import {widthToDp} from '../config/responsive';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import RazorpayCheckout from 'react-native-razorpay';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

const windowWidth = Dimensions.get('window').width;

export default class FitPrime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'Delhi',
      menueItem: 'FITPASS',
    };
  }

  selectCity = name => {
    this.setState({city: name});
  };

  drowpdown = () => {
    this.RBSheet.open();
  };

  menueItem = item => {
    this.setState({menueItem: item});
  };

  render() {
    let {menueItem} = this.state;
    return (
      <>
        <Header
          props={this.props}
          dropdown={this.drowpdown}
          city={this.state.city}
          selectedItem={this.menueItem}
          headerLeft={false}
        />
        <LinearGradient colors={['#f23535', '#48CCF7']} style={{flex: 1}}>
          <View style={styles._container} />
          <RBSheet
            ref={ref => {
              this.RBSheet = ref;
            }}
            height={widthToDp(137)}
            duration={250}
            customStyles={{
              container: {
                justifyContent: 'center',
              },
            }}>
            <CityPicker
              props={this.props}
              onpress={() => this.RBSheet.close()}
              cityName={this.selectCity}
            />
          </RBSheet>
          {/* =============<>=============== */}
          <View style={styles._topView}>
            <Text style={styles._heading}>FITPRIME</Text>
            <Text style={styles._subheading}>
              Extra savings and more onl all services.
            </Text>

            <View>
              <View style={styles._priceView}>
                <Text style={styles._price}>
                  {' '}
                  <FontAwesome name="rupee" size={18} />
                  499
                </Text>
                <Text style={{color: '#ededed'}}>/year</Text>
              </View>

              <Text style={styles._benifits}>Benifits of FITPRIME</Text>
            </View>
          </View>

          <View style={styles._list}>
            <View style={styles._circle}>
              <FontAwesome name="heart" color="#f23535" />
            </View>
            <View>
              <Text style={styles._list_heading}>FITPASS</Text>
              <Text style={styles._list_text}>
                Buy 1 month, get 7 days extra buy 3 month, get 15 days etra
              </Text>
            </View>
          </View>

          <View style={styles._list}>
            <View style={styles._circle}>
              <Icon name="apple" color="#f23535" />
            </View>
            <View>
              <Text style={styles._list_heading}>FITFEAST</Text>
              <Text style={styles._list_text}>
                Buy 1 month, get 7 days extra buy 3 month, get 15 days etra
              </Text>
            </View>
          </View>

          <View style={styles._list}>
            <View style={styles._circle}>
              <FontAwesome5 name="walking" color="#f23535" />
            </View>
            <View>
              <Text style={styles._list_heading}>FITCOACH</Text>
              <Text style={styles._list_text}>
                Buy 1 month, get 3 months extra buy 3 months, get 6 months etra
              </Text>
            </View>
          </View>

          <View style={styles._list}>
            <View style={styles._circle}>
              <FontAwesome name="gift" color="#f23535" />
            </View>

            <View>
              <Text style={styles._list_heading}>FITCASH</Text>
              <Text style={styles._list_text}>
                Double cash back on referrals
              </Text>
            </View>
          </View>

          <View style={styles._list}>
            <View style={styles._circle}>
              <Icon name="shopping-cart" color="#f23535" />
            </View>
            <View>
              <Text style={styles._list_heading}>FITSHOP</Text>
              <Text style={styles._list_text}>
                10% discount on selected producs
              </Text>
            </View>
          </View>

          {/* bottom section */}
          <View style={{position: 'absolute', bottom: 0}}>
            <Text style={styles._paymentTitle}>
              *FITPRIME benifits auto apply on check out!
            </Text>
            <View style={styles._bottom_section}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  style={styles.total_price}
                  activeOpacity={0.8}>
                  <Text
                    style={{fontSize: 20, fontWeight: 'bold', color: 'green'}}>
                    <FontAwesome size={18} name="rupee" /> 1230
                  </Text>
                  <Text style={{color: 'red', fontSize: 12}}>For 1 month</Text>
                </TouchableOpacity>
                {/* payment */}
                <TouchableHighlight
                  style={styles._proceed}
                  disabled={this.state.total === 0 ? true : false}
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
                      .catch(error => {
                        // handle failure
                      });
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: 'white',
                      letterSpacing: 1,
                    }}>
                    PROCEED
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </LinearGradient>
      </>
    );
  }
}

let styles = StyleSheet.create({
  _container: {padding: 10},
  _topView: {
    padding: 10,
  },
  _heading: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    borderBottomWidth: 0.5,
    borderColor: '#ededed',
    paddingBottom: 5,
    width: 90,
  },
  _subheading: {
    fontSize: 12,
    color: '#f2eded',
    paddingBottom: 15,
    paddingTop: 5,
  },
  _priceView: {
    flexDirection: 'row',
    paddingBottom: 15,
  },
  _price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  _circle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 100,
    marginRight: 10,
    backgroundColor: 'white',
  },
  _list: {
    flexDirection: 'row',
    padding: 10,
  },
  _list_heading: {
    color: 'white',
    fontWeight: 'bold',
    paddingBottom: 3,
  },
  _list_text: {
    color: '#f2eded',
  },
  _paymentTitle: {
    textAlign: 'center',
    color: '#f2eded',
    fontSize: 10,
    paddingBottom: 20,
  },
  _bottom_section: {
    width: windowWidth,
    height: 60,
  },
  total_price: {
    backgroundColor: '#bbdedd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  _proceed: {
    backgroundColor: 'green',
    width: '47%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  _benifits: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
