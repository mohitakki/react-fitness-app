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
} from './../components';
import {widthToDp} from '../config/responsive';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RazorpayCheckout from 'react-native-razorpay';

const windowWidth = Dimensions.get('window').width;

export default class Fitcaach extends Component {
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
          title: 'FITCOACH',
          description: 'Revolutionary, A.I. enabled training plans that evolve and adapt to your needs!',
          price:"499",
          month:1
        },
        {
            title: 'FITCOACH',
            description: 'Revolutionary, A.I. enabled training plans that evolve and adapt to your needs!',
            price:"1279",
            month:3
        },
        {
            title: 'FITCOACH',
            description: 'Revolutionary, A.I. enabled training plans that evolve and adapt to your needs!',
            price:"2303",
            month:6
        }
      ];
    return (
      <>
        <ScrollView style={{marginBottom: 50}}>
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
            {/* <View style={{flexDirection: 'row'}} /> */}
          </View>
          <View style={{height: widthToDp(55)}}>
            <PriceSlider data={data} bg={"#629de5"} />
          </View>

          <View style={styles._detailSection}>
            <Text style={styles._title}>What is FITCOACH?</Text>

            <View style={styles._li}>
              <FontAwesome name="check" size={16} color={'#629de5'} />
              <Text style={styles.li_text}>
                A.I. led training plans
              </Text>
            </View>

            <View style={styles._li}>
              <FontAwesome name="check" size={16} color={'#629de5'} />
              <Text style={styles.li_text}>
               HD instructions videos
              </Text>
            </View>

            
            <Text
              style={styles._viewshop}
              onPress={() =>
                this.props.navigation.navigate('COACH', {
                  city: this.state.city,
                  type: this.state.typ,
                })
              }>
              <Text style={{padding: 12}}>FITCOACH </Text>
              <Text style={{margin: 20}}>
                <AntDesign name="rightcircle" style={styles._viewBtn} />
              </Text>
            </Text>
            <Text style={styles._instructions}>Don't miss out FITPRIME</Text>

            <FitPrimeCard />
          </View>
        </ScrollView>
        <View style={{position: 'absolute', bottom: 0}}>
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
    borderColor: '#629de5',
  },
  _tab: {
    backgroundColor: '#629de5',
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
    // color: 'white',
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
    // borderWidth:2,
    // position: 'absolute',
    // bottom: 0,
    height: 60,
  },

  total_price: {
    backgroundColor: '#bbdedd',
    // width: '47%',
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
