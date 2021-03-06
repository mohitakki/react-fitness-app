import React from 'react';
import {Text, View, StyleSheet, ScrollView, Button} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {GymCard} from './../components';

export default class GymsList extends React.Component {
  
  render() {

    let item = [
      {
        heading: 'PROFITNESS',
        desc: 'Ellis bridge,West Ahmedabad',
        rating: '499',
        timing: '06:00-21:30',
      },
      {
        heading: 'I Gym Holic',
        desc: 'Bopal, New West Ahmedabad',
        rating: '61',
        timing: '06:00-22:00',
      },
      {
        heading: 'I Can Health Club',
        desc: 'Nana Chiloda, Nort Ahmedabad',
        rating: '48',
        timing: '06:00-21:30',
      },
      {
        heading: 'The Sheesha Welleness',
        desc: 'Prahladnagar, New West Ahmedabad',
        rating: '88',
        timing: '06:00-22:00',
      },
    ];

    return (
      <>
      
        {/* subheader */}
        <View style={styles._subHeader}>
          <View style={styles._tab}>
            <FontAwesome name="history" style={{fontSize: 16}} />
            <Text style={styles._text}>PAST WORKOUT</Text>
          </View>

          <View style={styles._tab}>
            <FontAwesome name="heart-o" style={{fontSize: 16}} />
            <Text style={styles._text}>FAVOURITES</Text>
          </View>

          <View style={styles._tab}>
            <MaterialIcons name="filter-list" style={{fontSize: 16}} />
            <Text style={styles._text}>FILTER</Text>
          </View>
        </View>
        {/* <<<<<<<<<<< GYM LIST >>>>>>>>>>>> */}
        <ScrollView>
        
          {/* {item.map((val, i) => (
            <GymCard data={val} key={i} props={this.props} />
          ))} */}
        </ScrollView>
      </>
    );
  }
}

let styles = StyleSheet.create({
  _subHeader: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  _tab: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    padding: 2,
    backgroundColor: '#e5e5e5',
    opacity: 0.6,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  _text: {
    flex: 1,
    flexWrap: 'wrap',
    fontWeight: 'bold',
    fontFamily: 'Gill Sans',
    paddingLeft: 5,
    fontSize: 12,
  },
});
