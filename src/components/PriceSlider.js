import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CardSilder from 'react-native-cards-slider';
import {widthToDp} from '../config/responsive';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class PriceSlider extends Component {
  render() {
    let posts = [
      {
        uri:
          'https://cdn.lynda.com/course/734634/734634-637199682524857000-16x9.jpg',
        heading: '5 Strectching Excercises for better posture & flexiblities',
      },
      {
        uri:
          'https://i.pinimg.com/originals/79/60/26/796026dd0490f87f5a18ffe365c01b0d.jpg',

        heading: '5 Strectching Excercises for better posture & flexiblities',
      },

      {
        uri: 'https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg',
        heading: '5 Strectching Excercises for better posture & flexiblities',
      },
      {
        uri:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-skincare-products-glowing-skin-1561735403.png?crop=0.984xw:0.984xh;0,0&resize=1200:*',
        heading: '5 Strectching Excercises for better posture & flexiblities',
      },
      {
        uri:
          'https://scstylecaster.files.wordpress.com/2018/11/old-school-products.jpg',
        heading: '5 Strectching Excercises for better posture & flexiblities',
      },
    ];
    return (
      <CardSilder>
        {posts.map((val, i) => {
          return (
            <View style={styles._postStyle} key={i}>
              <View style={styles._bodySection}>
                <Text style={styles.card_heading}>Monthly Plan</Text>
                <Text style={styles._description}>
                  All fitness centers across India
                </Text>
              </View>
              <View style={styles._footerSection}>
                <Text style={{color: 'grey', fontSize: 16}}>PRICE</Text>
                <Text style={styles._price}>
                  {' '}
                  <FontAwesome name="rupee" size={14} /> 2313
                </Text>
              </View>
            </View>
          );
        })}
      </CardSilder>
    );
  }
}

let styles = StyleSheet.create({
  _postStyle: {
    height: widthToDp(35),
    borderRadius: 5,
    marginTop: 20,
    shadowColor: '#f23535',
    shadowOffset: {
      width: 0.5,
      height: 2,
    },
    // borderColor: 'white',
    // borderWidth: 3,
  },

  _description: {
    borderWidth: 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  _heading: {
    color: 'white',
    padding: widthToDp(10),
  },
  _bodySection: {
    height: widthToDp(25),
    backgroundColor: '#f4b87c',
    // opacity: 0.8,
    padding: 15,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  _footerSection: {
    backgroundColor: '#d6c7c7',
    flex: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
  },
  card_heading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  _description: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    paddingTop: 10,
  },
  _price: {
    fontWeight: 'bold',
    color: '#d68738',
    fontSize: 15,
  },
});
