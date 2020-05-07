import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import {widthToDp, heightToDp} from '../config/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FoundationIcon from 'react-native-vector-icons/Foundation';
export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles._headerLeft}>
          <Ionicons
            name="ios-notifications"
            size={26}
            color="white"
            style={{zIndex: -1}}
          />
        </TouchableOpacity>
      ),
    });
  }

  logout = async () => {
    try {
      // await AsyncStorage.removeItem('token');
      const getItem = await AsyncStorage.removeItem('token');

      //This works and it is cleared, but when the app is relaunched or refreshed the value comes back
      console.log('Should not be stored:', getItem);
      this.props.navigation.navigate('Login');
    } catch (err) {
      throw new Error(err);
    }
  };
  // <Button title="Logout" onPress={() => this.logout()} />

  render() {
    let navigation = this.props.navigation;
    return (
      <LinearGradient colors={['#f23535', '#48CCF7']} style={{flex: 1}}>
        <View style={styles.circleView}>
          <Image source={require('../assests/img1.jpg')} style={styles.image} />
          <View>
            <Text style={styles._name}>Mohit Kumar</Text>
            <Text style={styles._id}>FITPASS ID - 120396022025</Text>
            <Text style={styles._location}>
              <Entypo name="location-pin" color="white" />
              Delhi
            </Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.body_view}>
            <Text style={styles._address}>SUBSCRIPTION OFFERS</Text>
            {/* SUBSCRIPTION card */}
            <View style={styles._subscriptionView}>
              <View style={styles.shopingCard}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <LinearGradient
                    colors={['#b22193', '#f23535']}
                    style={{flex: 1, flexDirection: 'row'}}>
                    <View style={styles.leftArea}>
                      <View style={styles._label}>
                        <Text style={styles.getText}>GET</Text>
                        <Text style={styles.percentText}>40%</Text>
                        <Text style={styles.offText}>OFF</Text>
                      </View>
                    </View>

                    <View style={styles.rightArea}>
                      <View style={{}}>
                        <View style={{flexDirection: 'row'}}>
                          <View style={{marginTop: widthToDp(4)}}>
                            <Text style={styles.fitpass}>FITBOOK PASS </Text>
                            <Text style={styles.price}>899/M </Text>
                          </View>
                          <View style={{marginTop: widthToDp(10)}}>
                            <TouchableOpacity
                              style={styles.SubscriptionButton}
                              onPress={() =>
                                this.props.navigation.navigate('fitprime')
                              }>
                              <Text
                                style={{
                                  color: 'red',
                                  fontWeight: '600',
                                  fontSize: widthToDp(3),
                                }}>
                                SUBSCRIBE
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
                  </LinearGradient>
                </View>
              </View>
            </View>
            <Text style={styles._membership}>MEMBERSHIPT</Text>
            <View style={styles._cardView}>
              {/* FITPASS */}
              <View style={[styles._card, {backgroundColor: '#f23535'}]}>
                <Text style={styles._title}>FITPASS</Text>
                <Text style={styles._price}>
                  <FontAwesome name="rupee" /> 999/Month
                </Text>
                <TouchableOpacity
                  style={styles._activeBtn}
                  onPress={() => this.props.navigation.navigate('fitpass')}>
                  <Text style={styles._btnText}>GET FIT NOW</Text>
                </TouchableOpacity>
              </View>

              {/* FITFEAST */}
              <View style={[styles._card, {backgroundColor: '#eac556'}]}>
                <Text style={styles._title}>FITFEAST</Text>
                <Text style={styles._price}>
                  <FontAwesome name="rupee" /> 999/Month
                </Text>
                <TouchableOpacity style={styles._activeBtn}>
                  <Text style={styles._btnText}>ACTIVATE</Text>
                </TouchableOpacity>
              </View>

              {/* FITCOACH */}
              <View style={[styles._card, {backgroundColor: '#629de5'}]}>
                <Text style={styles._title}>FITCOACH</Text>
                <Text style={styles._price}>
                  <FontAwesome name="rupee" /> 999/3 Months
                </Text>
                <TouchableOpacity style={styles._activeBtn}>
                  <Text style={styles._btnText}>ACTIVATE</Text>
                </TouchableOpacity>
              </View>

              {/* FITPRIME */}
              <View style={[styles._card, {backgroundColor: '#5079ad'}]}>
                <Text style={styles._title}>FITPRIME</Text>
                <Text style={styles._price}>
                  <FontAwesome name="rupee" /> 499/Year
                </Text>
                <TouchableOpacity style={styles._activeBtn}>
                  <Text style={styles._btnText}>ACTIVATE</Text>
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles._mylogs}>MY LOGS</Text>
            <View style={styles._logItem}>
              <TouchableOpacity
                style={styles._li}
                onPress={() => navigation.navigate('WORKOUTS')}>
                <View style={styles._circle}>
                  <FoundationIcon name="shopping-bag" color="#f23535" />
                </View>
                <Text style={styles._li_text}>WORKOUTS</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles._li}
                onPress={() => navigation.navigate('FITCOACH Log')}>
                <View style={styles._circle}>
                  <FontAwesome5 name="walking" color="#f23535" />
                </View>
                <Text style={styles._li_text}>FITCOACH</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles._li}
                onPress={() => navigation.navigate('My Orders')}>
                <View style={styles._circle}>
                  <Icon name="shopping-cart" color="#f23535" />
                </View>
                <Text style={styles._li_text}>MYORDERS</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles._li}
                onPress={() => navigation.navigate('Meal Log')}>
                <View style={styles._circle}>
                  <Icon name="apple" color="#f23535" />
                </View>
                <Text style={styles._li_text}>MEAL</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles._li}
                onPress={() => navigation.navigate('Gyms Near You')}>
                <View style={styles._circle}>
                  <Entypo name="location" color="#f23535" />
                </View>
                <Text style={styles._li_text}>SUTDIO</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles._li}
                onPress={() => navigation.navigate('fitcash')}>
                <View style={styles._circle}>
                  <Ionicons name="ios-fitness" color="#f23535" />
                </View>
                <Text style={styles._li_text}>FITCASH</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles._li}
                onPress={() => navigation.navigate('follow')}>
                <View style={styles._circle}>
                  <FontAwesome name="feed" color="#f23535" />
                </View>
                <Text style={styles._li_text}>FOLLOW</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles._li}
                onPress={() => navigation.navigate('Settings')}>
                <View style={styles._circle}>
                  <FontistoIcon name="nav-icon-grid" color="#f23535" />
                </View>
                <Text style={styles._li_text}>MORE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  circleView: {
    flexDirection: 'row',
    padding: 20,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 100,
    marginRight: 20,
    // resizeMode: 'cover',
  },
  _headerLeft: {
    paddingRight: 10,
  },
  _name: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  _id: {
    color: 'white',
  },
  _location: {
    color: 'white',
  },
  body_view: {
    flex: 1,
    backgroundColor: '#f9f4f4',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  _address: {
    color: 'grey',
    letterSpacing: 2.5,
    fontWeight: 'bold',
    fontSize: 12,
    padding: 15,
    paddingBottom: 0,
  },
  _mylogs: {
    color: 'grey',
    letterSpacing: 2.5,
    fontWeight: 'bold',
    fontSize: 12,
    padding: 15,
    paddingBottom: 0,
  },
  _subscriptionView: {
    flexDirection: 'row',
    margin: 15,
    borderBottomWidth: 1,
    paddingBottom: 15,
    borderColor: '#e5e0e0',
  },
  _membership: {
    color: 'grey',
    letterSpacing: 2.5,
    fontWeight: 'bold',
    fontSize: 12,
    paddingLeft: 15,
    paddingBottom: 10,
  },
  _cardView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  _card: {
    width: '45%',
    height: 120,
    borderRadius: 5,
    marginBottom: 10,
    padding: 15,
  },
  _title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  _price: {
    color: '#ededed',
    fontWeight: 'bold',
  },
  _activeBtn: {
    borderRadius: 5,
    backgroundColor: '#ededed',
    marginTop: 10,
  },
  _btnText: {
    textAlign: 'center',
    letterSpacing: 2,
    fontSize: 10,
    fontWeight: 'bold',
    padding: 7,
  },
  _logItem: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: 40,
    padding: 15,
    height: 200,
  },
  _li: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '50%',
    alignItems: 'center',
    paddingBottom: 20,
  },
  _li_text: {
    letterSpacing: 2,
    fontWeight: 'bold',
    fontSize: 12,
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
  // SubscribeCard
  shopingCard: {
    height: widthToDp(25),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0.3,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.84,
    width: widthToDp(100),
    flex: 1,
  },
  leftArea: {
    width: widthToDp(30),
    backgroundColor: '#f4e6e6',
    height: widthToDp(25),
    borderTopRightRadius: 75,
    borderBottomRightRadius: 75,
    alignItems: 'center',
    shadowOpacity: 0.85,
    shadowRadius: 3.84,
    flexDirection: 'row',
  },
  _label: {
    alignItems: 'center',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 40,
  },
  getText: {
    color: 'red',
    marginLeft: widthToDp(3),
    width: 50,
    fontSize: widthToDp(4),
    fontWeight: '700',
    fontFamily: 'Gill Sans',
  },
  percentText: {
    color: 'red',
    width: 50,
    marginLeft: widthToDp(10),
    fontSize: widthToDp(6),
    fontWeight: '700',
    fontFamily: 'Gill Sans',
  },
  offText: {
    color: 'red',
    width: 50,
    marginLeft: widthToDp(20),
    fontSize: widthToDp(4),
    fontWeight: '700',
    fontFamily: 'Gill Sans',
  },
  passText: {
    color: 'white',
  },
  rightArea: {
    backgroundColor: 'transparent',
    marginTop: widthToDp(1),
  },
  textRight: {
    color: 'white',
    fontSize: heightToDp(2),
    fontWeight: '500',
    fontFamily: 'Gill Sans',
  },
  fitpass: {
    color: 'white',
    marginLeft: widthToDp(2),
    fontSize: widthToDp(4),
    fontWeight: '700',
    fontFamily: 'Gill Sans',
  },
  price: {
    color: 'white',
    marginLeft: widthToDp(3),
    fontSize: widthToDp(4),
    fontWeight: '700',
    fontFamily: 'Gill Sans',
  },
  SubscriptionButton: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: widthToDp(4),
    paddingVertical: widthToDp(1),
    marginVertical: 5,
    marginHorizontal: 5,
  },
});
