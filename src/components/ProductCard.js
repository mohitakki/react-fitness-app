import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Reviews from './Reviews';

export default class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  render() {
    return (
      <>
      <TouchableOpacity activeOpacity={0.8} onPress={()=>this.props.onPress()}>
        <View style={styles._card}>
          <View style={styles._imgSection}>
            <FoundationIcon name="burst-new" size={30} style={styles._badge} />
            <Image
              source={{
                uri: this.data.image,
              }}
              style={styles._product_Img}
            />
          </View>
          <View style={styles._card_body}>
            <Text style={styles._title}>{this.data.title}</Text>
            <Text style={styles._subTitle}>{this.data.title_flawer}</Text>
            {/* <Text style={styles._subTitle}>Flawer watermelon</Text> */}

            <View style={styles._price_section}>
              <Text style={styles._price}>
                <FontAwesome name="rupee" /> {this.data.offer_price}
              </Text>

              <Text style={{color: '#c1c1c1'}}>{this.data.price}</Text>
            </View>

            <View style={styles._reviewsRow}>
              <Reviews />
              <Text>{this.data.rating}</Text>
            </View>
          </View>
          <View style={styles._detail_row}>
            <TouchableOpacity
              style={styles._detail_btn}
              onPress={()=>this.props.onPress()}
              onPress={() => this.props.props.navigate('Detail',{id:this.data.id})}
              >
              <Text style={styles._detail_btn_text}>BUY NOW</Text>
            </TouchableOpacity>
          </View>
        </View>
        </TouchableOpacity>
      </>
    );
  }
}

let styles = StyleSheet.create({
  _card: {
    borderRadius: 5,
    height: 300,
    marginTop: 10,
    width: '47%',
    minWidth:170,
    margin:5,
    backgroundColor: 'white',
    padding: 5,
    shadowColor: '#fff',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.95,
    shadowRadius: 1.84,
    elevation: 5,
  },
  _imgSection: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  _product_Img: {
    height: 100,
    width: 100,
  },
  _card_body: {
    flex: 2,
    borderColor: '#ededed',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  _badge: {
    position: 'absolute',
    left: 0,
    top: 0,
    color: '#f23535',
  },
  _title: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  flavour: {
    textAlign: 'center',
    color: '#c1c1c1',
  },
  _subTitle: {
    textAlign: 'center',
    color: 'grey',
    fontSize: 12,
    fontFamily: 'Gill Sans',
  },
  _price_section: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginBottom: 10,
  },
  _reviewsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 3,
  },
  _off_sale: {
    fontWeight: 'bold',
    color: 'green',
    fontFamily: 'Gill Sans',
  },
  _price: {
    color: '#f23535',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Gill Sans',
  },
  _detail_row: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
    // height:20
  },
  _detail_btn: {
    borderWidth: 2,
    borderColor: '#f23535',
    borderRadius: 5,
    width: '50%',
  },
  _detail_btn_text: {
    width: '100%',
    textAlign: 'center',
    fontSize: 10,
    padding: 4,
    color: '#f23535',
    fontWeight: 'bold',
  },
});
