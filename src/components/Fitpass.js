import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  CityPicker,
  FitPrimeCard,
  PriceSlider,
  SubscribeCard,
} from './../components';
import {widthToDp} from '../config/responsive';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RazorpayCheckout from 'react-native-razorpay';

const windowWidth = Dimensions.get('window').width;

export default class Fitapass extends Component {
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
    let data = [
      {
        title: 'FITPASS',
        description: 'All fitness centeres across India',
        price:"1279",
        month:1
      },
      {
        title: 'FITPASS',
        description: 'All fitness centeres across India',
        price:"3199",
        month:3
      },
    ];

    return (
      <>
        <ScrollView style={{marginBottom: 150}}>
          <View>
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
          </View>

          <View style={styles._heading}>
            <Text style={styles._tab}>CHOOSE PLAN</Text>
          </View>
          <View style={{height: widthToDp(55)}}>
            <PriceSlider data={data} bg={"#f4b87c"} />
          </View>

          <View style={styles._detailSection}>
            <Text style={styles._title}>What is FITPASS?</Text>

            <View style={styles._li}>
              <FontAwesome name="check" size={16} color={'#f4b87c'} />
              <Text style={styles.li_text}>
                Your membership to India largest fitness network
              </Text>
            </View>

            <View style={styles._li}>
              <FontAwesome name="check" size={16} color={'#f4b87c'} />
              <Text style={styles.li_text}>
                Workout any where -across 4000+ gyms and fitness studios pan
                India
              </Text>
            </View>

            <View style={styles._li}>
              <FontAwesome name="check" size={16} color={'#f4b87c'} />
              <Text style={styles.li_text}>
                Workout anytime -close to home, office,near a friend house
              </Text>
            </View>

            <View style={styles._li}>
              <FontAwesome name="check" size={16} color={'#f4b87c'} />
              <Text style={styles.li_text}>
                Get unlimited wokout of top trending workout -yoga, Zumba,
                Pilates, Crossfit, Kickboxing, Bollydance & many more
              </Text>
            </View>
            <Text
              style={styles._viewshop}
              onPress={() =>
                this.props.navigation.navigate('viewstdios', {
                  city: this.state.city,
                  type: this.state.typ,
                })
              }>
              <Text style={{padding: 12}}>VIEW STUDIOS </Text>
              <Text style={{margin: 20}}>
                <AntDesign name="rightcircle" style={styles._viewBtn} />
              </Text>
            </Text>
            <Text style={styles._instructions}>Don't miss out FITPRIME</Text>

            <FitPrimeCard   />
          </View>
        </ScrollView>
        <View style={{position: 'absolute', bottom: 0}}>
          <SubscribeCard navigation={this.props.navigation} />

          <View style={styles._bottom_section}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity style={styles.total_price} activeOpacity={0.8}>
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
      </>
    );
  }
}

let styles = StyleSheet.create({
  sentButon: {
    backgroundColor: 'white',
    width: widthToDp(80),
    height: widthToDp(13),
    borderRadius: 5,
    marginTop: widthToDp(5),
    shadowColor: '#48CCF7',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 10,

    elevation: 15,
  },
  sentText: {
    textAlign: 'center',
    fontSize: widthToDp(5),
    marginTop: widthToDp(3),
    fontWeight: '700',
    color: '#F23873',
  },
  _heading: {
    borderBottomWidth: 1.5,
    flexDirection: 'row',
    padding: 15,
    marginTop: 10,
    paddingBottom: 0,
    borderColor: '#f4b87c',
  },
  _tab: {
    backgroundColor: '#f4b87c',
    padding: 4,
    color: 'white',
    fontWeight: 'bold',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    fontSize: 10,
    letterSpacing: 2,
  },
  _title: {
    fontWeight: 'bold',
    paddingLeft: 15,
  },
  _detailSection: {
    flex: 1,
  },
  _li: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    paddingRight: 15,
    paddingLeft: 15,
  },
  li_text: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    color: '#625684',
    fontFamily: 'Gill Sans',
    paddingLeft: 10,
  },
  viewAll: {
    color: 'white',
    textAlign: 'right',
    marginRight: widthToDp(5),
    fontWeight: '600',
    fontFamily: 'Gill Sans',
    letterSpacing: 1,
    alignItems: 'center',
    fontSize: widthToDp(3),
    marginTop: widthToDp(1),
  },
  _viewshop: {
    textAlign: 'right',
    width: widthToDp(95),
    marginTop: widthToDp(1),
    fontWeight: '600',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Gill Sans',
    fontWeight: 'bold',
    fontSize: 13,
    paddingRight: 10,
    marginTop: 20,
  },
  _viewBtn: {
    height: 18,
    borderRadius: 100,
    fontWeight: 'bold',
    color: '#f23535',
    borderLeftWidth: 2,
    borderColor: 'white',
    fontSize: widthToDp(4),
    fontFamily: 'Gill Sans',
  },
  _instructions: {
    backgroundColor: '#e0d7d7',
    letterSpacing: 1,
    fontSize: 12,
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
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
});
