import React from 'react';
import {View, Text, StatusBar, ScrollView, StyleSheet} from 'react-native';
import ProductCard from './..//components/ProductCard';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {widthToDp} from '../config/responsive';
import {Header} from './../components';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default class ViewShop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
      quantity: 0,
    };
  }

  componentDidMount() {
    fetch('https://fitbook.fit/fitbookadmin/api_v1/product_list.php', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(res => {
        this.setState({
          isLoading: false,
          data: res.product_list,
        });
      });
    // this.setQuantity();
  }

  static getDerivedStateFromProps(props, state) {
    return(

      props.navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity
            style={styles._headerLeft}
            // onPress={() => this.logout()}
            >
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

  ViewProduct = (id) => {
    this.props.navigation.navigate('Detail', {id:id});
  };

  render() {
    return (
      <>
        <StatusBar translucent backgroundColor="transparent" />
        {/* <Header /> */}
        <ScrollView>
          <View style={styles._cardGrid}>
            <FlatList
              data={this.state.data}
              numColumns={2}
              contentContainerStyle={styles._cardGrid}
              renderItem={({item}) => {
                return (
                  <>
                    <ProductCard
                      data={item}
                      props={this.props.navigation}
                      onPress={() => this.ViewProduct(item.id)}
                    />
                  </>
                );
              }}
            />
          </View>
        </ScrollView>
      </>
    );
  }
}

let styles = StyleSheet.create({
  _cardGrid: {},
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
});
