import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { AirbnbRating} from 'react-native-ratings';

export default class Reviews extends React.Component {
  ratingCompleted = rating => {
    // console.log('Rating is: ' + rating);
  };
  render() {
    return (
      <>
        <AirbnbRating
          showRating={false}
          size={17}
          style={{paddingVertical: 1}}
        />
      </>
    );
  }
}
