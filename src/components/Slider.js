import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {widthToDp, heightToDp} from '../config/responsive';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }
  gymProfile = () => {
    const {navigate} = props.navigation;
    navigate('GymProfile');
  };

  render() {
    var width = Dimensions.get('window').width; //full width

    return (
      // <View>
      <View style={styles.cardSlider}>
        <View style={{flexDirection: 'row', flex: 1, width: width - 10}}>
          <View style={styles.innerCard}>
            <Image
              style={{
                resizeMode: 'cover',
                width: widthToDp(20),
                height: widthToDp(20),
                borderRadius: 5,
                borderColor: '#68666C',
                borderWidth: 1.6,
              }}
              source={{uri: this.data.image}}
            />
          </View>
          <View>
            <Text style={styles.gymName}>{this.data.title}</Text>
            <Text style={styles.gymAddress}>{this.data.address}</Text>
            <View
              style={{
                width: widthToDp(50),
                height: widthToDp(5),
                marginHorizontal: widthToDp(4),
                backgroundColor: '#efd2d2',
                borderRadius: 5,
                marginTop: widthToDp(1),
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: widthToDp(4),
                marginTop: widthToDp(3),
              }}>
              <Text style={styles.timing}>{this.data.timing}</Text>
              <Text style={styles.timing}>.{this.data.distance}</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            height: widthToDp(6),
            backgroundColor: '#efd2d2',
          }}>
          <Text
            style={styles.exploreText}
            onPress={() => this.props.props.navigate('gymprofile')}>
            Explore this GYM
          </Text>
        </View>
      </View>
      // </View>
    );
  }
}
const styles = StyleSheet.create({
  cardSlider: {
    height: widthToDp(33),
    borderColor: '#D9D0EE',
    borderWidth: 0.8,
    borderWidth: 4,
    backgroundColor: '#fbfbfb',
    borderRadius: 5,
    shadowColor: '#059FF4',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.95,
    shadowRadius: 3.84,
    elevation: 25,
  },
  innerCard: {
    width: widthToDp(20),
    height: widthToDp(20),
    backgroundColor: 'white',
    marginTop: widthToDp(2),
    marginLeft: widthToDp(2),
    borderRadius: 5,
    shadowColor: '#D9D0EE',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.95,
    shadowRadius: 3.84,
    elevation: 25,
  },
  gymName: {
    marginTop: widthToDp(1),
    marginLeft: widthToDp(5),
    fontSize: widthToDp(5),
    fontWeight: '700',
    color: 'black',
    fontFamily: 'Gill Sans',
  },
  gymAddress: {
    fontSize: widthToDp(4),
    marginLeft: widthToDp(5),
    color: '#68666C',
    fontFamily: 'Gill Sans',
  },
  timing: {
    fontSize: widthToDp(3),
    fontWeight: '500',
    fontFamily: 'Gill Sans',
    color: '#f23535',
    paddingBottom: 10,
  },
  exploreText: {
    textAlign: 'center',
    fontFamily: 'Gill Sans',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: widthToDp(1),
    fontWeight: '600',
    color: '#f23535',
    fontSize: widthToDp(3),
  },
});
