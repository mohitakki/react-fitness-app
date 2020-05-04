import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import CardSilder from 'react-native-cards-slider';
import {widthToDp} from '../config/responsive';

export default class PlanSlider extends Component {
  render() {
    let data = this.props.data;
    return (
      <CardSilder>
        {data.map((val, i) => {
          return (
            <ImageBackground style={styles._postStyle} source={{uri: val.uri}}>
              <View>
                <View style={styles._bodySection}>
                  <Text style={styles.card_heading}>{val.title}</Text>

                  <TouchableOpacity
                    style={styles._premiumBtn}
                    onPress={() => this.props.navigation.goBack()}>
                    <Text style={styles._btnTxt}>PREMIUM</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles._description}>{val.description}</Text>
                <View style={styles._footerSection}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'white',
                      fontWeight: 'bold',
                    }}>
                    {val.days} days in a week
                  </Text>

                  <Text
                    style={{
                      fontSize: 12,
                      color: 'white',
                      fontWeight: 'bold',
                    }}>
                    {val.weeks} weeks
                  </Text>
                </View>
              </View>
            </ImageBackground>
          );
        })}
      </CardSilder>
    );
  }
}

let styles = StyleSheet.create({
  _postStyle: {
    padding: 15,
    marginRight: 10,
    backgroundColor: 'grey',
    height: widthToDp(35),
    resizeMode: 'cover',
    shadowColor: '#f23535',
    shadowOffset: {
      width: 0.5,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 15,
    borderRadius: 0,
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
    marginTop: 8,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
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
  _premiumBtn: {
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
    borderColor: 'white',
  },
  _btnTxt: {
    color: 'white',
  },
  _backgroundImg: {
    flex: 1,
  },
});
