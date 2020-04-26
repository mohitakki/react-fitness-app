import React from 'react';
import {View, Text, StatusBar, ScrollView, StyleSheet} from 'react-native';
import ProductCard from './..//components/ProductCard';

export default class ViewShop extends React.Component {
  render() {
    return (
      <>
        <StatusBar translucent backgroundColor="transparent" />
        <ScrollView>
          <View style={styles._cardGrid}>
             <ProductCard props={this.props} />
            <ProductCard props={this.props} />
            <ProductCard props={this.props} />
            <ProductCard props={this.props} />
            <ProductCard props={this.props} />
            <ProductCard props={this.props} />
            <ProductCard props={this.props} />
            <ProductCard props={this.props} /> 
          </View>
        </ScrollView>
      </>
    );
  }
}

let styles = StyleSheet.create({
  _cardGrid: {
    // flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});