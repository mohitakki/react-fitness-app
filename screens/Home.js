import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Slider from '../components/Slider'
import CardSilder from 'react-native-cards-slider';
import { ScrollView } from 'react-native-gesture-handler';
import Login from './Login';







export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <>

        <LinearGradient colors={['#F26E38', '#F23873', '#48CCF7']} style={{ flex: 1 }}>
          <ScrollView>

            <Slider />
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

