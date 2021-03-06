import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {widthToDp,heightToDp} from '../config/responsive'
export default class ProductShopCard extends React.Component {
  render() {
    return (
      <View style={styles.shopingCard}>
        <View style={styles._detail}>
          <Text style={styles._title}>Weight Gainer, Supplements & More..</Text>
          <Text style={{fontWeight: 'bold', color: 'grey', marginTop: widthToDp(4),fontSize: widthToDp(3),}}>
            UPTO
          </Text>
          <Text style={styles._off}>60% OFF</Text>
        </View>
        <View style={{flex: 1, padding: 20}}>
          <Image
            source={{
              uri:
                'https://scstylecaster.files.wordpress.com/2018/11/old-school-products.jpg',
            }}
            style={styles._image}
          />
        </View>
        <Text />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  shopingCard: {
    height: widthToDp(30),
    borderRadius: 5,
    backgroundColor: 'white',
    // flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal:widthToDp(3),
    shadowColor: "#f23535",
    shadowOffset: {
      width: 0.5,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 15,
    
  },
  _image: {
    // flex: 1,
    width: widthToDp(25),
    height: widthToDp(25),
    // resizeMode: 'cover',
    borderRadius: 5,

    // justifyContent: 'center',
  },
  _detail: {
    flex: 2,
    // padding:10,
    paddingLeft: widthToDp(5),
    fontSize:widthToDp(3)
  },
  _title: {
    fontWeight: 'bold',
    fontSize: widthToDp(4),
  },
  _off: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: widthToDp(5),
  },
});
