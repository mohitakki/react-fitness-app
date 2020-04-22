import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import CardSilder from 'react-native-cards-slider';

export default class Slider extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }

  render() {
    return (
      <View>
        <CardSilder style={{marginTop: 10}}>
          <Image
            style={{
              height: 150,
              borderRadius: 10,
              borderColor: 'white',
              borderWidth: 0.8,
            }}
            source={{
              uri:
                'https://i.pinimg.com/originals/79/60/26/796026dd0490f87f5a18ffe365c01b0d.jpg',
            }}
          />
          <Image
            style={{
              height: 150,
              borderRadius: 10,
              borderColor: 'white',
              borderWidth: 0.8,
            }}
            source={{
              uri:
                'https://cdn.lynda.com/course/734634/734634-637199682524857000-16x9.jpg',
            }}
          />
          <Image
            style={{
              height: 150,
              borderRadius: 10,
              borderColor: 'white',
              borderWidth: 0.8,
            }}
            source={{
              uri: 'https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg',
            }}
          />
          <Image
            style={{
              height: 150,
              borderRadius: 10,
              borderColor: 'white',
              borderWidth: 0.8,
            }}
            source={{
              uri:
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-skincare-products-glowing-skin-1561735403.png?crop=0.984xw:0.984xh;0,0&resize=1200:*',
            }}
          />
          <Image
            style={{
              height: 150,
              borderRadius: 10,
              borderColor: 'white',
              borderWidth: 0.8,
            }}
            source={{
              uri:
                'https://scstylecaster.files.wordpress.com/2018/11/old-school-products.jpg',
            }}
          />
        </CardSilder>
      </View>
    );
  }
}
