import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CardSilder from 'react-native-cards-slider';
import {widthToDp} from '../config/responsive';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class PriceSlider extends Component {
  render() {
    let data = this.props.data;
    let bg = this.props.bg;
    return (
      <CardSilder>
        {data.map((val, i) => {
          return (
            <View style={styles._postStyle} key={i}>
              <View style={[styles._bodySection, {backgroundColor: bg}]}>
                <Text style={styles.card_heading}>{val.title}</Text>
                <Text style={styles._description}>{val.description}</Text>
              </View>
              <View style={styles._footerSection}>
                <Text style={{color: 'grey', fontSize: 16}}>PRICE</Text>
                <Text style={[styles._price,{color:bg}]}>
                  <FontAwesome name="rupee" size={14} style={{color: bg}} />
                  {val.price}/{val.month} Months
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
