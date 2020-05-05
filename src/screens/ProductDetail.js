import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Reviews from './../components/Reviews';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
      quantity: 0,
      cart: [],
    };
  }

  componentDidMount() {
    // fetch('https://fitbook.fit/fitbookadmin/api_v1/product_list.php', {
    let productId = this.props.route.params.id;
    fetch(
      `http://fitbook.fit/fitbookadmin/api_v1/product_detail.php?id=${productId}`,
      {
        method: 'GET',
      },
    )
      .then(response => response.json())
      .then(res => {
        console.log(res);
        this.setState({
          isLoading: false,
          data: res.product_list,
        });
      });
  }

  static getDerivedStateFromProps(props, state) {
    return(

      props.navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity
            style={styles._headerLeft}
            onPress={() => this.logout()}>
            <View style={styles._labelView}>
              <View style={styles._label}>
                <Text style={styles._numbering}>{state.quantity}</Text>
              </View>
            </View>
            <Icon
              name="shopping-cart"
              size={20}
              color="white"
              style={{zIndex: -1}}
            />
          </TouchableOpacity>
        ),
      })
    )
  }

  buyNow = () => {
    let product_id = this.props.route.params.id;
    //  fetch Api
    this.props.navigation.navigate('cart');
  };

  render() {
    return (
      <>
        <View style={styles._card}>
          <FlatList
            data={this.state.data}
            keyExtractor={(x, i) => i}
            renderItem={({item}) => (
              <>
                <View style={styles._imgSection}>
                  <Text style={styles._badge}>{item.offer}</Text>
                  <Image
                    source={{
                      uri: item.image,
                    }}
                    style={styles._product_Img}
                  />
                </View>
                <View style={styles._card_body}>
                  <ScrollView>
                    <Text style={styles._title}>{item.title}</Text>
                    <View style={styles._review_row}>
                      <Reviews />
                      <Text>{item.rating}</Text>
                    </View>

                    <View style={styles._Icon_section}>
                      <View style={styles._icons}>
                        <FontAwesome
                          name="star"
                          size={20}
                          style={{color: '#ea6219'}}
                        />

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

                   
                    <View style={styles._desciption}>
                      <Text style={styles._heading}>DESCRIPTION:</Text>
                      <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime voluptas omnis dolor. Maxime libero voluptatibus
                        voluptate odit facere, non voluptatem, laudantium ad
                        aliquam quisquam obcaecati, eligendi earum. Maxime, illo
                        officia.
                      </Text>
                    </View>
                  </ScrollView>
                </View>
              </>
            )}
          />
                <View style={styles._detail_row}>
                  <TouchableOpacity style={{width: '50%'}}>
                    <Text style={styles._detail_price}>Rs. 3400.00</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles._detail_btn}
                    onPress={() => this.buyNow(item)}>
                    <Text style={styles._detail_btn_text}>BUY NOW</Text>
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
  _label: {
    height: 20,
    width: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 100,
    position: 'absolute',
  },
  _numbering: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  _labelView: {
    marginRight: -20,
    marginBottom: -10,
    width: 20,
    height: 20,
    position: 'relative',
  },
  _headerLeft: {
    flexDirection: 'column',
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: '#f23535',
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
    color: '#f23535',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Gill Sans',
  },
  _detail_row: {
    flexDirection: 'row',
    marginTop: 5,
    width: '100%',
    marginBottom: 10,
    height: 50,
    position:"absolute",
    bottom:0
  },
  _detail_btn: {
    backgroundColor: '#f23535',
    width: '50%',
  },
  _detail_btn_text: {
    width: '100%',
    textAlign: 'center',
    fontSize: 15,
    padding: 3,
    color: '#fff',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  _detail_price: {
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
    padding: 3,
    color: '#f23535',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  _review_row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
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
