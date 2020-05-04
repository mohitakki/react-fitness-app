import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
export default class TermsConditions extends React.Component {
  render() {
    return (
      <View style={styles._containder}>
        <Text style={styles._heading}>Subscription Tems & Conditions</Text>
        <Text style={{padding:10,fontSize:12}}>
          FITPASS subscriptions are the most econimical, convenient and fun way
          to manage your smart membership to thousands of premium gms and
          fitness studios across india. Workout anywhere, anytime, anyhow -
          yoga, pilates,zumba, gm workouts, spinning, kickboxing, MMA, swimming,
          bootcamp, ab attack, aerobics and many more workouts available to you
          with your FITPASS membership across India's largest fitness network
          choose your fit!
        
          FITPASS subscriptions are the most econimical, convenient and fun way
          to manage your smart membership to thousands of premium gms and
          fitness studios across india. Workout anywhere, anytime, anyhow -
          yoga, pilates,zumba, gm workouts, spinning, kickboxing, MMA, swimming,
          bootcamp, ab attack, aerobics and many more workouts available to you
          with your FITPASS membership across India's largest fitness network
          choose your fit!
        
          FITPASS subscriptions are the most econimical, convenient and fun way
          to manage your smart membership to thousands of premium gms and
          fitness studios across india. Workout anywhere, anytime, anyhow -
          yoga, pilates,zumba, gm workouts, spinning, kickboxing, MMA, swimming,
          bootcamp, ab attack, aerobics and many more workouts available to you
          with your FITPASS membership across India's largest fitness network
          choose your fit!
        </Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _containder: {
    flex: 1,
  },
  _heading: {
    fontWeight: 'bold',
    fontSize: 16,
    margin: 10,
  },
});
