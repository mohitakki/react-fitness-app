import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CardSilder from 'react-native-cards-slider';
import {widthToDp} from '../config/responsive';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class FitPrimeCard extends Component {
  constructor() {
    super();
    this.state = {
      add: false,
    };
  }
  render() {
    return (
      <CardSilder>
        <View
          style={[
            styles._postStyle,
            {backgroundColor: this.state.add ? 'green' : 'grey'},
          ]}>
          <View style={styles._bodySection}>
            <Text style={styles.card_heading}>Monthly Plan</Text>
            <Text style={styles._price}>
              <FontAwesome name="rupee" size={14} /> 2313 / Year
            </Text>
          </View>
          <Text style={styles._description}>
            Extra savings and more on all services
          </Text>
          <View style={styles._footerSection}>
            <Text style={{fontSize: 12, color: 'white', fontWeight: 'bold'}}>
              DETAILS <FontAwesome name="angle-double-right" size={16} />
            </Text>

            <Text
              style={styles.addBtn}
              onPress={() => this.setState({add: !this.state.add})}>
              <Text style={{fontSize: 10}}>ADD</Text>
            </Text>
          </View>
        </View>
      </CardSilder>
    );
  }
}

let styles = StyleSheet.create({
  _postStyle: {
    padding: 15,
    marginBottom: 15,
    backgroundColor: 'grey',
    height: widthToDp(35),
    borderRadius: 5,
    marginTop: 20,
    shadowColor: '#f23535',
    shadowOffset: {
      width: 0.5,
      height: 2,
    },
  },

  _heading: {
    color: 'white',
    padding: widthToDp(10),
  },
  _bodySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  _footerSection: {
    flex: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card_heading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  _description: {
    color: '#d6cdcd',
    fontWeight: 'bold',
    fontSize: 12,
    paddingTop: 10,
  },
  _price: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
  },
  addBtn: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#f4f6f7',
    opacity: 0.5,
  },
});
