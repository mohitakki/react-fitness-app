import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity,ScrollView} from 'react-native';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Reviews from './../components/Reviews';
export default class ProductDetail extends React.Component {
  render() {
    return (
      <>
      
        <View style={styles._card}>
          <View style={styles._imgSection}>
            <Text style={styles._badge}>40% OFF</Text>
            <Image
              source={{
                uri:
                  'https://cdn.goto.com.pk/uploads/products/2019/11/5dbbde06d9b12.webp',
              }}
              style={styles._product_Img}
            />
          </View>
          <View style={styles._card_body}>
          <ScrollView>
            <Text style={styles._title}>Bentan Court B-NOX</Text>
            <View style={styles._review_row}>
              <Reviews /><Text>(1)</Text>
            </View>

            <View style={styles._Icon_section}>
              <View style={styles._icons}>
                <FontAwesome name="star" size={20} style={{color: '#ea6219'}} />

                <Text>Brand New</Text>
              </View>

              <View style={styles._icons}>
                <FoundationIcon
                  name="burst-new"
                  size={20}
                  style={{color: '#ea6219'}}
                />

                <Text>100% Orignal</Text>
              </View>

              <View style={styles._icons}>
                <FontAwesome5
                  name="hands-helping"
                  size={20}
                  style={{color: '#ea6219'}}
                />
                <Text>Pay Securely</Text>
              </View>
            </View>

            <View style={styles._price_section}>
              <Text style={{color: 'green', fontWeight: 'bold', fontSize: 16}}>
                PRICE:
              </Text>
              <Text style={styles._price}>
                <FontAwesome name="rupee" size={17} /> 5400
              </Text>
            </View>

            <View style={styles._desciption}>
              <Text style={styles._heading}>DESCRIPTION:</Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                voluptas omnis dolor. Maxime libero voluptatibus voluptate odit
                facere, non voluptatem, laudantium ad aliquam quisquam
                obcaecati, eligendi earum. Maxime, illo officia.
              </Text>
            </View>
          </ScrollView>
          </View>
          <View style={styles._detail_row}>
            <TouchableOpacity
              style={styles._detail_btn}
            >
              <Text style={styles._detail_btn_text}>DONWLOAD</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles._detail_btn}
            >
              <Text style={styles._detail_btn_text}>CHECKOUT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

let styles = StyleSheet.create({
  _card: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  _imgSection: {
    justifyContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 2,
    borderColor: '#f0f0f0',
  },
  _product_Img: {
    height: 140,
    width: 140,
  },
  _card_body: {
    flex: 2,
    borderColor: '#ededed',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  _badge: {
    position: 'absolute',
    left: 0,
    color: 'white',
    top: 0,
    fontWeight: 'bold',
    backgroundColor: '#ea6219',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 20,
    padding: 3,
    paddingRight: 5,
  },
  _title: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
  _subTitle: {
    textAlign: 'center',
    color: 'grey',
    fontSize: 12,
    fontFamily: 'Gill Sans',
  },
  _price_section: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderColor: '#f0f0f0',
  },

  _Icon_section: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderColor: '#f0f0f0',
    padding: 10,
  },
  _icons: {},
  _reviewsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  _off_sale: {
    fontWeight: 'bold',
    color: 'green',
    fontFamily: 'Gill Sans',
  },
  _price: {
    color: '#ea6219',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Gill Sans',
  },
  _detail_row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 5,
    marginBottom: 10,
  },
  _detail_btn: {
    borderWidth: 2,
    borderColor: '#ea6219',
    borderRadius: 5,
    width: '45%',
  },
  _detail_btn_text: {
    width: '100%',
    textAlign: 'center',
    fontSize: 12,
    padding: 4,
    color: '#ea6219',
    fontWeight: 'bold',
  },
  _review_row: {
    flex:1,
    flexDirection:"row",
    justifyContent:"center",
    borderBottomWidth: 2,
    borderColor: '#f0f0f0',
    padding: 10,
    alignItems: 'center',
  },
  _icons: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  _desciption: {
    padding: 10,
  },
  _heading: {
    color: 'grey',
    fontWeight: 'bold',
    letterSpacing: 2,
    fontFamily: 'Gill Sans',
  },
});
