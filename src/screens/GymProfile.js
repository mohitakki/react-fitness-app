import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Header, Dropdown} from '../components';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default class GymProfile extends React.Component {
  render() {
    console.log('========>', this.props);

    let shedule = [
      {work: 'Gym Workout', time: '07:30'},
      {work: 'Gym Workout For Women', time: '07:30'},
      {work: 'Gym Workout', time: '08:00'},
      {work: 'Gym Workout For Women', time: '08:00'},
      {work: 'Gym Workout For Women', time: '08:30'},
      {work: 'Gym Workout', time: '08:30'},
      {work: 'Gym Workout For Women', time: '09:00'},
      {work: 'Gym Workout', time: '09:00'},
      {work: 'Gym Workout', time: '09:30'},
      {work: 'Gym Workout For Women', time: '09:30'},
      {work: 'Gym Workout', time: '10:00'},
      {work: 'Gym Workout For Women', time: '10:00'},
      {work: 'Gym Workout', time: '10:30'},
      {work: 'Gym Workout For Women', time: '10:30'},
      {work: 'Gym Workout For Women', time: '11:00'},
      {work: 'Gym Workout', time: '11:00'},
      {work: 'Gym Workout For Women', time: '11:30'},
      {work: 'Gym Workout', time: '11:30'},
      {work: 'Gym Workout For Women', time: '16:00'},
      {work: 'Gym Workout', time: '16:00'},
      {work: 'Gym Workout For Women', time: '16:30'},
      {work: 'Gym Workout', time: '16:30'},
      {work: 'Gym Workout For Women', time: '17:00'},
      {work: 'Gym Workout', time: '17:00'},
      {work: 'Gym Workout For Women', time: '17:30'},
      {work: 'Gym Workout', time: '17:30'},

      {work: 'Gym Workout For Women', time: '18:00'},
      {work: 'Gym Workout', time: '17:30'},

      {work: 'Gym Workout For Women', time: '18:00'},
      {work: 'Gym Workout', time: '18:00'},

      {work: 'Gym Workout For Women', time: '18:30'},
      {work: 'Gym Workout', time: '18:30'},

      {work: 'Gym Workout For Women', time: '19:00'},
      {work: 'Gym Workout', time: '19:00'},

      {work: 'Gym Workout For Women', time: '19:30'},
      {work: 'Gym Workout', time: '19:30'},

      {work: 'Gym Workout For Women', time: '20:00'},
      {work: 'Gym Workout', time: '20:00'},

      {work: 'Gym Workout For Women', time: '20:30'},
      {work: 'Gym Workout', time: '20:30'},

      {work: 'Gym Workout', time: '21:00'},
      {work: 'Gym Workout For Women', time: '21:00'},

      {work: 'Gym Workout', time: '21:30'},
      {work: 'Gym Workout For Women', time: '21:30'},
    ];
    return (
      <>
        <View style={styles._profile}>
          <ImageBackground
            style={styles._backgroundImg}
            source={{
              uri:
                'https://rukminim1.flixcart.com/image/832/832/jnhs2vk0/poster/t/e/u/medium-gym-posters-gym-posters-motivationa-big-size-18-inches-x-original-imafa5ctrndkcphv.jpeg?q=70',
            }}>
            {/* Ratings row */}
            <View style={styles._ratingRow}>
              <View style={styles._rating}>
                <View style={styles._showReview}>
                  <Text style={styles._numbering}>
                    {' '}
                    <Ionicons name="ios-star" /> 4.5
                  </Text>

                  <Text style={styles._reviewsText}>
                    <Text style={{color: '#f23535'}}>9 </Text>
                    {''}
                    Reviews <Ionicons name="ios-arrow-forward" />
                  </Text>
                  {/* </Text> */}
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.bottom_title}>
          <View style={styles._logo}>
            <Image
              source={require('./../assests/img1.jpg')}
              style={styles._logo_img}
            />
          </View>
          <Text style={styles._gymTitle}>True Gym And Spa Shalimar Bagh</Text>
          <View style={styles._detailRow}>
            <Text style={styles._detail_text}>
              <MaterialIcons name="watch-later" style={{fontSize: 15}} />{' '}
              <Text>06:00-21:30</Text>
            </Text>
          </View>
        </View>
        <ScrollView>
          {/* seemore section */}

          <View style={styles._seemore}>
            <Text style={styles.more_text}>
              All fitness centers across the country will remain closed until
              ...{' '}
              {/* <Text style={{color: '#fff', fontWeight: '400',textAlign:'right'}}>
                READ MORE
              </Text> */}
            </Text>
          </View>

          {/* abuot sutdio */}

          <View style={styles._about_detail}>
            <Text style={styles._about_heading}>ABOUT THIS STUDIO</Text>
            <Text style={styles._about_description}>
              True Gym And Spa is one of the larger gyms near Shalimar Bagh.
              They boast of state-of-the-art facilities for a total body
              workout, and also conduct group classes.
            </Text>
          </View>

          {/* ADDRESS */}
          <View style={styles._about_detail}>
            <Text style={styles._about_heading}>ADDRESS</Text>
            <Text style={styles._about_description}>
              AE-61, Basement Near AD Market, Shalimar Bagh, North Delhi, 110088
            </Text>
          </View>

          {/* Watch the FITPASS videos */}
          <View style={styles._vediosSection}>
            <Text style={styles._vediosHeading}>Watch the FITPASS videos</Text>
            <View style={styles._btnSection}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles._vediosHeadinBtn}>
                <Text style={styles.btn_text}>GET FITPASS</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.5}
                style={styles._vediosHeadinBtn}>
                <Text style={styles.btn_text}>HOW IT WORKS?</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Workout Schedule */}
          <View style={styles._about_detail}>
            <Text style={styles._about_heading}>WORKOUT SHEDUL</Text>
            <View style={styles._about_description}>
              <ScrollView horizontal={true}>
                {/* day 1 */}
                <View style={styles._dayBox}>
                  <Text style={styles._dayName}>FRI</Text>
                  <Text style={styles._dayName}>24</Text>
                </View>

                {/* day 1 */}
                <View style={styles._dayBox}>
                  <Text style={styles._dayName}>FRI</Text>
                  <Text style={styles._dayName}>24</Text>
                </View>

                {/* day 2 */}
                <View style={styles._dayBox}>
                  <Text style={styles._dayName}>SAT</Text>
                  <Text style={styles._dayName}>25</Text>
                </View>

                {/* day 3 */}
                <View style={styles._dayBox}>
                  <Text style={styles._dayName}>SUN</Text>
                  <Text style={styles._dayName}>26</Text>
                </View>

                {/* day 4 */}
                <View style={styles._dayBox}>
                  <Text style={styles._dayName}>MON</Text>
                  <Text style={styles._dayName}>27</Text>
                </View>

                {/* day 5 */}
                <View style={styles._dayBox}>
                  <Text style={styles._dayName}>TEU</Text>
                  <Text style={styles._dayName}>28</Text>
                </View>

                {/* day 6 */}
                <View style={styles._dayBox}>
                  <Text style={styles._dayName}>WED</Text>
                  <Text style={styles._dayName}>29</Text>
                </View>

                {/* day 7 */}
                <View style={styles._dayBox}>
                  <Text style={styles._dayName}>THU</Text>
                  <Text style={styles._dayName}>30</Text>
                </View>
              </ScrollView>

              <View style={{height: 150}}>
                <ScrollView nestedScrollEnabled>
                  {shedule.map((val, i) => {
                    return (
                      <View style={styles._shedule} key={i}>
                        <Text style={{width: '40%', textAlign: 'center'}}>
                          {val.work}
                        </Text>
                        <Text style={{color: 'grey'}}>{val.time}</Text>
                        <TouchableOpacity style={styles._reservedBtn}>
                          <Text style={styles._reservedBtn_Text}>RESERVED</Text>
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
            </View>
          </View>

          {/* studio amenities */}
          <View style={styles._about_detail}>
            <Text style={styles._about_heading}>STUDIO AMENITIES </Text>
            <View style={styles._iconList}>
              {/* one */}
              <View style={styles._circle}>
                <Text style={styles._icons}>
                  <MaterialIcons name="local-parking" size={30} />
                </Text>
                <Text style={styles.lablel}>Parking</Text>
              </View>
              {/* two */}
              <View style={styles._circle}>
                <Text style={styles._icons}>
                  <MaterialCommunityIcons name="air-conditioner" size={30} />
                </Text>
                <Text style={styles.lablel}>AC</Text>
              </View>

              {/* three */}
              <View style={styles._circle}>
                <Text style={styles._icons}>
                  <MaterialIcons name="local-parking" size={30} />
                </Text>
                <Text style={styles.lablel}>Water Cooler</Text>
              </View>

              {/* four */}
              <View style={styles._circle}>
                <Text style={styles._icons}>
                  <MaterialCommunityIcons name="locker" size={30} />
                </Text>
                <Text style={styles.lablel}>Locker</Text>
              </View>

              {/* five */}
              <View style={styles._circle}>
                <Text style={styles._icons}>
                  <MaterialIcons name="wifi" size={30} />
                </Text>
                <Text style={styles.lablel}>WiFi</Text>
              </View>

              {/* six */}
              <View style={styles._circle}>
                <Text style={styles._icons}>
                  <MaterialCommunityIcons name="shower" size={30} />
                </Text>
                <Text style={styles.lablel}>Shower</Text>
              </View>
            </View>
          </View>

          {/* Explore Fitness Options */}
          <View style={styles._about_detail}>
            <Text style={styles._about_heading}>EXPLORE FITNESS OPTIONS</Text>
            {/* slide 1 */}
            <ScrollView horizontal={true}>
              <View style={styles._slide}>
                <Image
                  source={require('./../assests/goldengym.png')}
                  style={styles.sliderImg}
                />
                <Text style={{color: '#302c57', fontFamily: 'Gill Sans'}}>
                  Golden Gym Shakti Nagar
                </Text>
              </View>

              {/* slide 2 */}
              <View style={styles._slide}>
                <Image
                  source={require('./../assests/goldengym.png')}
                  style={styles.sliderImg}
                />
                <Text style={{color: '#302c57', fontFamily: 'Gill Sans'}}>
                  Fitznutz Sector 14 Rohini
                </Text>
              </View>

              {/* slide 3 */}
              <View style={styles._slide}>
                <Image
                  source={require('./../assests/goldengym.png')}
                  style={styles.sliderImg}
                />
                <Text style={{color: '#302c57', fontFamily: 'Gill Sans'}}>
                  Gym Asia Pitampura
                </Text>
              </View>

              {/* slide 4 */}
              <View style={styles._slide}>
                <Image
                  source={require('./../assests/goldengym.png')}
                  style={styles.sliderImg}
                />
                <Text style={{color: '#302c57', fontFamily: 'Gill Sans'}}>
                  Raw Crossfit Model Town
                </Text>
              </View>
            </ScrollView>
          </View>

          {/* Ratings & Reviews */}

          {/* ADDRESS */}
          <View style={styles._about_detail}>
            <Text style={styles._about_heading}>RATINGS & REVIEWS</Text>
            <Dropdown />
          </View>
        </ScrollView>
      </>
    );
  }
}

let styles = StyleSheet.create({
  _profile: {
    height: 250,
  },
  _backgroundImg: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: 250,

    shadowColor: '#f23535',
    shadowOffset: {
      width: 0.5,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 15,
  },
  _ratingRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 15,
    shadowColor: '#f23535',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 1.95,
    shadowRadius: 3.84,
    elevation: 25,
    borderRadius: 15,
    // alignItems: 'center',
  },
  _rating: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  _showReview: {
    backgroundColor: 'white',
    paddingRight: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  _numbering: {
    backgroundColor: '#f23535',
    paddingLeft: 8,
    paddingRight: 8,
    color: 'white',
    fontFamily: 'Gill Sans',
    fontSize: 12,
    marginRight: 4,
    padding: 5,
  },
  _reviewsText: {
    fontSize: 12,
    fontFamily: 'Gill Sans',
    marginLeft: 7,
    paddingRight: 3,
    padding: 5,
    // color:""
  },
  _logo: {
    height: 80,
    width: 80,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 5,
    position: 'absolute',
    left: 0,
    marginLeft: 10,
  },
  _logo_img: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',

    shadowColor: '#fff',
    shadowOffset: {
      width: 0.5,
      height: 2,
    },
    shadowOpacity: 10.5,
    shadowRadius: 3.84,
    elevation: 15,
  },
  bottom_title: {
    paddingLeft: '35%',
    backgroundColor: 'white',
    paddingTop: 25,
    paddingBottom: 10,

    shadowColor: '#f23535',
    shadowOffset: {
      width: 0.5,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 15,
  },
  _detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  _detail_text: {
    fontWeight: 'bold',
    fontFamily: 'Gill Sans',
    marginTop: 5,
  },
  _gymTitle: {
    fontWeight: 'bold',
    fontFamily: 'Gill Sans',
    color: '#f23535',
  },
  _seemore: {
    marginTop: 10,
    backgroundColor: '#f23535',
    // height: 40,
    padding: 10,
    flex: 1,
  },
  more_text: {
    fontFamily: 'Gill Sans',
    fontSize: 15,
    color: '#fff',
  },
  _about_detail: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginTop: 10,
  },
  _about_heading: {
    fontWeight: 'bold',
    fontFamily: 'Gill Sans',
    paddingBottom: 5,
  },
  _about_description: {
    color: '#0d0650',
    fontFamily: 'Gill Sans',
  },
  _vediosSection: {
    backgroundColor: 'white',
    marginTop: 10,
    padding: 10,
  },
  _vediosHeading: {
    textAlign: 'center',
    width: '100%',
    fontFamily: 'Gill Sans',
    fontWeight: 'bold',
    color: '#0d0650',
    fontSize: 20,
  },
  _btnSection: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  _vediosHeadinBtn: {
    backgroundColor: '#1665c2',
    borderRadius: 3,
    width: '45%',
  },
  btn_text: {
    width: '100%',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
  },
  _dayBox: {
    height: 45,
    width: 60,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    backgroundColor: '#efd2d2',
  },
  _dayName: {
    fontWeight: 'bold',
  },
  _shedule: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'grey',
    padding: 10,
  },
  _reservedBtn: {
    borderRadius: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: 'grey',
  },
  _reservedBtn_Text: {
    color: 'grey',
    fontSize: 12,
  },
  _icons: {
    // flex: 1,
    borderWidth: 1,
    borderColor: '#1665c2',
    padding: 7,
    borderRadius: 100,
    // height: 50,
    width: 50,
    textAlign: 'center',
    color: '#1665c2',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  _iconList: {
    // flex:1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  _circle: {
    justifyContent: 'center',
  },
  lablel: {
    textAlign: 'center',
    width: 70,
    fontSize: 12,
  },
  sliderImg: {
    width: 60,
    height: 60,
  },
  _slide: {
    flexDirection: 'row',
    borderWidth: 0.8,
    borderColor: 'grey',
    borderRadius: 5,
    width: 310,
    alignItems: 'center',
    height: 100,
    padding: 20,
    margin: 5,
  },
});
