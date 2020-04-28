import React from 'react';
import {View, Text, StatusBar, ScrollView, StyleSheet} from 'react-native';
import ProductCard from './..//components/ProductCard';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {widthToDp} from '../config/responsive';
import {Header} from './../components';
export default class ViewShop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
    };
  }

  componentDidMount() {
    return fetch('https://fitbook.fit/fitbookadmin/api_v1/product_list.php', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(res => {
        this.setState({
          isLoading: false,
          data: res.product_list,
        });
      });
  }

  ViewProduct = () => {
    this.props.navigation.navigate('Detail');
  };

  render() {
    console.log(this.state.data);

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
                    {/* <TouchableOpacity onPress={() => this.ViewProduct()} style={{flex:1}}>  */}
                      <ProductCard data={item} props={this.props.navigation} onPress={() => this.ViewProduct()} />
                    {/* </TouchableOpacity> */}
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
  _cardGrid: {
    // flex: 1,
    // justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
