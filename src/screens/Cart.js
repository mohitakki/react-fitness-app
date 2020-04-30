import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Reviews from './../components/Reviews';
import RazorpayCheckout from 'react-native-razorpay';

export default class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 0,
      cart: [],
      total: 0,
    };
  }
  componentDidMount() {
    // remove duplicate object in array
    let array = this.props.route.params.cart;
    let jsonObject = array.map(JSON.stringify);
    let uniqueSet = new Set(jsonObject);
    let cartArray = Array.from(uniqueSet).map(JSON.parse);
    this.setState({cart: cartArray});
    this.props.route.params.setQuantity(cartArray.length);

    // total price
    let total = 0;
    for (var i = 0; i < cartArray.length; i++) {
      let price = cartArray[i].offer_price;
      price = price.replace(/\,/g, '');
      price = Number(price);
      total = total + price;
      this.setState({total});
    }
    // cart icon with label in header
    this.props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles._headerLeft}
          onPress={() => this.logout()}>
          <View style={styles._labelView}>
            <View style={styles._label}>
              <Text style={styles._numbering}>{this.state.cart.length}</Text>
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
    });
  }

  addQuantity = (data, i) => {
    let arr = this.state.cart;
    let total = this.state.total;
    let itemPrice = data.offer_price;
    itemPrice = itemPrice.replace(/\,/g, '');
    itemPrice = Number(itemPrice);
    arr[i].num = this.state.num;
    if (this.state[i]) {
      let n = this.state[i];
      this.setState({[i]: n + 1, total: total + itemPrice});
    } else {
      this.setState({[i]: 1, total: total + itemPrice});
    }
  };

  removeItem = (data, i) => {
    if (this.state.total) {
      let arr = this.state.cart;
      let total = this.state.total;
      let itemPrice = data.offer_price;
      itemPrice = itemPrice.replace(/\,/g, '');
      itemPrice = Number(itemPrice);
      arr[i].num = this.state.num;
      if (this.state[i]) {
        let n = this.state[i];
        this.setState({[i]: n - 1, total: total - itemPrice});
      } else {
        this.setState({[i]: 0, total: total - itemPrice});
      }
    }
  };
  //
  render() {
    let {cart} = this.state;

    return (
      <>
        {cart.map((data, i) => {
          return (
            <View style={styles._card}>
              <View style={styles._imgSection}>
                <FoundationIcon
                  name="burst-new"
                  size={30}
                  style={styles._badge}
                />
                <Image
                  source={{
                    uri: data.image,
                  }}
                  style={styles._product_Img}
                />
              </View>
              <View style={styles._card_body}>
                <Text style={styles._title}>{data.title}</Text>
                <Text style={styles._subTitle}>{data.title_flawer}</Text>

                <View style={styles._price_section}>
                  <Text style={styles._price}>
                    <FontAwesome name="rupee" /> {data.offer_price}
                  </Text>

                  <Text style={{color: '#c1c1c1', marginLeft: 10}}>
                    {data.price}
                  </Text>
                </View>

                <View style={styles._reviewsRow}>
                  <Reviews />
                  <Text>({data.rating})</Text>
                </View>
              </View>
              <View style={styles._detail_row}>
                <TouchableOpacity
                  style={styles._detail_btn}
                  onPress={() => this.addQuantity(data, i)}>
                  <Text style={styles._detail_btn_plus}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles._detail_btn}>
                  <Text style={styles._detail_btn_text}>
                    {this.state[i] !== undefined ? this.state[i] : 1}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  disabled={this.state[i] <= 0 ? true : false}
                  style={styles._detail_btn}
                  onPress={() => this.removeItem(data, i)}>
                  <Text style={styles._detail_btn_minus}>-</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
        <View style={styles._proceedSection}>
          <TouchableOpacity style={styles.total_price} activeOpacity={0.8}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              <FontAwesome size={18} name="rupee" /> {this.state.total}
            </Text>
          </TouchableOpacity>

          <TouchableHighlight
            style={styles._proceed}
            disabled={this.state.total === 0? true:false}
            onPress={() => {
              var options = {
                description: 'Credits towards consultation',
                image: 'https://i.imgur.com/3g7nmJC.png',
                currency: 'INR',
                key: 'rzp_test_1OaQM6M6lY56GN',
                amount: this.state.total,
                name: 'Fit Book',
                prefill: {
                  email: 'void@razorpay.com',
                  contact: '9191919191',
                  name: 'Razorpay Software',
                },
                theme: {color: 'green'},
              };
              RazorpayCheckout.open(options)
                .then(data => {
                  // handle success
                  alert(`Success: ${data.razorpay_payment_id}`);
                })
                .catch(error => {
                  // handle failure
                  // alert(`Error: ${error.code} | ${error.description}`);
                });
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
              PROCEED
            </Text>
          </TouchableHighlight>
        </View>
      </>
    );
  }
}

let styles = StyleSheet.create({
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
  _card: {
    borderRadius: 5,
    height: 160,
    marginTop: 10,
    // width: '47%',
    flexDirection: 'row',
    minWidth: 170,
    margin: 5,
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
    flex: 1,
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
    justifyContent: 'center',
    paddingLeft: 10,
  },
  _badge: {
    position: 'absolute',
    left: 0,
    top: 0,
    color: '#f23535',
  },
  _title: {
    fontWeight: 'bold',
  },
  flavour: {
    textAlign: 'center',
    color: '#c1c1c1',
  },
  _subTitle: {
    color: 'grey',
    fontSize: 12,
    fontFamily: 'Gill Sans',
  },
  _price_section: {
    // flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  _reviewsRow: {
    flexDirection: 'row',
    marginRight: 3,
    marginTop: 10,
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  _detail_btn: {
    borderWidth: 1,
    borderColor: '#93c6c5',
    height: 30,
    width: 25,
  },
  _detail_btn_text: {
    flex: 1,
    textAlign: 'center',
    padding: 4,
    color: 'grey',
    fontWeight: 'bold',
  },
  _detail_btn_plus: {
    flex: 1,
    textAlign: 'center',
    padding: 4,
    color: 'green',
    fontWeight: 'bold',
    backgroundColor: '#bbdedd',
  },
  _detail_btn_minus: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: '#bbdedd',
    padding: 4,
    color: '#f23535',
    fontWeight: 'bold',
  },
  _proceedSection: {
    height: 60,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    // backgroundColor: 'green',
    position: 'absolute',
    bottom: 0,
    padding: 10,
  },
  total_price: {
    backgroundColor: '#bbdedd',
    width: '47%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  _proceed: {
    backgroundColor: 'green',
    width: '47%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
