import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Slider from '../components/Slider'
import { ScrollView } from 'react-native-gesture-handler';
import LocationSlider from '../components/LocationSlider';
import ShopItem from '../components/ShopItem';

import Login from './Login';



export default class Home extends Component {
  constructor(props) {
    super(props);const Tab = createBottomTabNavigator();

    this.state = {
    };
  }


  render() {
    return (
      <>
       

        <LinearGradient colors={['#EA0706', '#059FF4', ]} style={{ flex: 1 }}>
          <ScrollView>

            <Slider />
            <LocationSlider />
            <ShopItem />
          </ScrollView>
          
        </LinearGradient>

     



      </>
    );
  }
}


function App() {
  return (
    <View>

    </View>
  );
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,

  },
  header: {
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 50,
    flexDirection: 'row'
  },
  headerImage: {
    width: 40,
    height: 40,
    borderColor: 'white',
    borderRadius: 50,
    borderWidth: .5
  }
})

