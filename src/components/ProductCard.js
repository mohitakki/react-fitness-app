import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
export default class ProdcutCard extends React.Component {
  render() {
    return (
      <View style={styles.shopingCard}>
        <View style={styles._detail}>
          <Text style={styles._title}>Dlet Plans, Supplements & More..</Text>
          <Text style={{fontWeight: 'bold', color: 'grey', marginTop: 20}}>
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
    height: 150,
    borderRadius: 5,
    backgroundColor: 'white',
    // flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal:15,
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
    width: 100,
    height: 100,
    // resizeMode: 'cover',
    borderRadius: 5,

    // justifyContent: 'center',
  },
  _detail: {
    flex: 2,
    // padding:10,
    paddingLeft: 15,
  },
  _title: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  _off: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
