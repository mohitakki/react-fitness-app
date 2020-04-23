import React from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class GymCard extends React.Component {
  constructor() {
    super();
    this.state = {
      favourite: false,
    };
  }
  render() {
    let data = this.props.data;
    return (
      <>
        {/* GYM LIST */}
        <View style={styles._gymCard}>
          <View style={styles._card}>
            {/* left side */}
            <View style={styles.imgBox}>
              <ImageBackground
                source={require('./../assests/img1.jpg')}
                style={styles._image}>
                {this.state.favourite ? (
                  <FontAwesome
                    name="heart"
                    style={{color: 'red', margin: 5, fontSize: 18}}
                    onPress={() => this.setState({favourite: false})}
                  />
                ) : (
                  <FontAwesome
                    name="heart"
                    style={{color: 'white', margin: 5, fontSize: 18}}
                    onPress={() => this.setState({favourite: true})}
                  />
                )}
              </ImageBackground>
            </View>
            {/* right side */}

            <View style={styles._rightSide}>
              <Text style={styles._heading}>{data.heading}</Text>
              <Text style={styles._description}>{data.desc}</Text>
              <View>
                {/* Ratings row */}
                <View style={styles._ratingRow}>
                  <View style={styles._rating}>
                    <View style={styles._showReview}>
                      <Text style={styles._numbering}>4.5</Text>
                      <Text style={{fontSize: 12, fontFamily: 'Gill Sans'}}>
                        Excellent
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'grey',
                        fontFamily: 'Gill Sans',
                        marginLeft: 7,
                      }}>
                      {data.rating}
                      <Text>
                        Ratings <Ionicons name="ios-arrow-forward" />
                      </Text>
                    </Text>
                  </View>
                  <Ionicons
                    name="ios-information-circle-outline"
                    style={{fontSize: 30, color: 'grey'}}
                  />
                </View>
                {/* Detail Row */}
                <View style={styles._detailRow}>
                  <Text style={styles._detail_text}>
                    <MaterialIcons name="watch-later" /> {data.timing}
                  </Text>
                  <Text style={styles._detail}>
                    DETAILS <Ionicons name="ios-arrow-forward" />
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* footer */}
          <View style={styles._footer}>
            <Text style={styles.left_tab}>
              <Ionicons name="md-resize" />
            </Text>
            <Text style={styles._workout}>Gym Workout</Text>
          </View>
          <View />
        </View>
      </>
    );
  }
}

let styles = StyleSheet.create({
  _gymCard: {
    height: 170,
    marginTop: 10,
    padding: 15,
    backgroundColor: '#e5e5e5',
  },
  _card: {
    // flex: 1,
    flexDirection: 'row',
  },
  imgBox: {
    borderRadius: 5,
    borderWidth: 4,
    width: 100,
    height: 100,
  },
  _image: {
    width: '100%',
    flex: 1,
    resizeMode: 'cover',
  },
  _rightSide: {
    flex: 1,
    paddingLeft: 10,
  },
  _heading: {
    fontWeight: 'bold',
    fontFamily: 'Gill Sans',
  },
  _description: {
    fontSize: 12,
    color: 'grey',
    fontFamily: 'Gill Sans',
  },
  _ratingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
  _rating: {
    flexDirection: 'row',
    height: 20,
  },
  _showReview: {
    borderRadius: 5,
    backgroundColor: '#bef7ea',
    paddingRight: 10,
    flexDirection: 'row',
  },
  _numbering: {
    backgroundColor: '#61d361',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    paddingLeft: 3,
    paddingRight: 5,
    color: 'white',
    fontFamily: 'Gill Sans',
    fontSize: 12,
    marginRight: 4,
  },
  _detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  _detail: {fontWeight: 'bold', color: 'grey'},
  _detail_text: {
    fontWeight: 'bold',
  },
  _footer: {
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 10,
    width: 160,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 40,
  },
  left_tab: {
    backgroundColor: '#ef5fa2',
    color: 'white',
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    width: 40,
    textAlign: 'center',
    padding: 8,
  },
  _workout: {
    fontWeight: 'bold',
    paddingLeft: 10,
  },
});
