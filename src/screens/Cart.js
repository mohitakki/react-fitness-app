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
import { FlatList } from 'react-native-gesture-handler';

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
    fetch('http://fitbook.fit/fitbookadmin/api_v1/cart.php',{
      method: 'GET',
    })
  
      .then(response =>response.json())
      .then(res => {
                let total = []
        let card = []
        res.cart_list.map((val)=>{
          val.quantity = 1
          card.push(val)
          var result = val.offer_price.replace(",", "");
          total.push(Number(result))
        })
   var sum =total.reduce((a, b) => a + b, 0)

        this.setState({
          isLoading: false,
          cart: card,
          total:sum

          
        });
      });
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
      })
  }
  
  addQuantity = (index) => {

let newa = this.state.cart
newa[index].quantity = 1+newa[index].quantity

let newtotal = Number(this.state.cart[index].offer_price) + this.state.total
this.setState({cart:newa,total: newtotal})

  };

  removeItem = (index) => { 
    let newa = this.state.cart
  

    if (newa[index].quantity == 1){
    
       fetch ('http://fitbook.fit/fitbookadmin/api_v1/cart.php',{
        method: 'POST',
        body:{
          "product_id": newa[index].product_id,
          "type":"0"
       
       }
      }
      ).then(response =>response.json())
      .then(res => {
        const filteredItems1 = newa.slice(0, index)
        let newtotal =  this.state.total - Number(this.state.cart[index].offer_price)

        this.setState({
          cart : filteredItems1,
          total: newtotal
        })
      }).catch(error=>console.log(error))

    }
    else{
      newa[index].quantity = newa[index].quantity-1
      let newtotal =  this.state.total - Number(this.state.cart[index].offer_price)
      this.setState({cart:newa,total: newtotal})
    
    }

  };
  


 

  
  render() {
    let {card} = this.state;
        return (
      <>
      <FlatList
      data={this.state.cart}
      renderItem={({item,index})=>{
        console.log(index)
      
        return(
          <>
          <TouchableOpacity activeOpacity={0.8}   onPress={() => this.props.navigation.navigate('Detail',{id:item.id})}
>

         
        <View style={styles._card}>
          
        <View style={styles._imgSection}>
          <FoundationIcon name="burst-new" size={30} style={styles._badge} />
          <Image
              source={{ uri:item.image}}
              style={styles._product_Img}
            />
        </View>
        <View style={styles._card_body}>
          <Text style={styles._title}>{item.title}</Text>
          <Text style={styles._subTitle}>{item.title_flawer}</Text>
      
          <View style={styles._price_section}>
            <Text style={styles._price}>
              <FontAwesome name="rupee" /> {item.offer_price}
            </Text>
      
            <Text style={{color: '#c1c1c1', marginLeft: 10}}>{
            
             
            item.price
            }</Text>
          </View>
      
          <View style={styles._reviewsRow}>
            <Reviews />
            <Text>{item.rating}</Text>
          </View>
        </View>
        <View style={styles._detail_row}>
          <TouchableOpacity
            style={styles._detail_btn}

            onPress={() => this.addQuantity(index)}>
            <Text style={styles._detail_btn_plus}>+</Text>
          </TouchableOpacity>
      
          <TouchableOpacity style={styles._detail_btn}>
            <Text style={styles._detail_btn_text}>
              {item.quantity}
            </Text>
          </TouchableOpacity>
      
          <TouchableOpacity
            // disabled={item.quantity < 2 ? true: false}
            style={styles._detail_btn}
            onPress={() => this.removeItem( index)}>
            <Text style={styles._detail_btn_minus}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      </TouchableOpacity>
      </>
      )}} />
     
        <View style={styles._proceedSection}>
          <TouchableOpacity style={styles.total_price} activeOpacity={0.8}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              <FontAwesome size={18} name="rupee" /> {this.state.total}
            </Text>
          </TouchableOpacity>

          <TouchableHighlight
            style={styles._proceed}
            disabled={this.state.total === 0 ? true : false}
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