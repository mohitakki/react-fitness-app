import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import CardSilder from 'react-native-cards-slider';

export default class BlogSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
      <View>
        <CardSilder style={{marginTop: 10}}>
          {posts.map((val, i) => {
            return (
              <View style={styles._postStyle} key={i}>
                <ImageBackground
                  style={styles._backgroundImg}
                  source={{uri: val.uri}}>
                  <View style={styles._description}>
                    <Text style={styles._heading}>{val.heading}</Text>
                  </View>
                </ImageBackground>
              </View>
            );
          })}
        </CardSilder>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _postStyle: {
    height: 130,
    borderRadius: 10,
    borderColor: 'white',
  },
  _backgroundImg: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  _description: {
    borderWidth: 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  _heading: {
    color: 'white',
    padding: 20,
  },
});
