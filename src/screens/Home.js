import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CardSilder from 'react-native-cards-slider';
import {ScrollView} from 'react-native-gesture-handler';
import Login from './Login';
import {Slider, BasicCard, ProductCard, BlogSlider} from './../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <LinearGradient
          colors={['#F26E38', '#F23873', '#48CCF7']}
          style={{flex: 1}}>
          <ScrollView>
            {/* near by GYMS */}
            <Text style={styles._nearBy}>NEARBY GYMS</Text>
            <Slider />
            <View style={styles._basicCard}>
              <BasicCard props={this.props.navigation} />
              <BasicCard props={this.props.navigation} />
            </View>
            {/* PRODUCT CARD */}
            <Text style={styles._fitShop}>FITSHOP</Text>
            <TouchableOpacity
              style={styles._product_card}
              activeOpacity={0.9}
              onPress={() => this.props.navigation.navigate('shop')}>
              <ProductCard />
              <Text style={styles._viewshop}>
                VIEW SHOP
                <AntDesign
                  name="rightcircle"
                  color="white"
                  style={styles._viewBtn}
                />
              </Text>
            </TouchableOpacity>

            {/* BLOG SLIDER */}
            <View style={styles._blog_slider}>
              <Text style={styles._fitShop}>MOTIVATION </Text>
              <BlogSlider />
              <TouchableOpacity
                style={styles._product_card}
                activeOpacity={0.9}
                onPress={() => this.props.navigation.navigate('blog')}>
                <Text style={styles._viewshop}>
                  VIEW BLOG
                  <AntDesign
                    name="rightcircle"
                    color="white"
                    style={styles._viewBtn}
                  />
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </LinearGradient>
      </>
    );
  }
}

function App() {
  return <View />;
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  header: {
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 50,
    flexDirection: 'row',
  },
  headerImage: {
    width: 40,
    height: 40,
    borderColor: 'white',
    borderRadius: 50,
    borderWidth: 0.5,
  },
  _basicCard: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
  },
  _nearBy: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Gill Sans',
  },
  _fitShop: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Gill Sans',
    letterSpacing: 3,
  },
  _viewshop: {
    color: 'white',
    textAlign: 'right',
    width: '90%',
    letterSpacing: 2,
    marginTop: 4,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  _product_card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  _blog_slider: {
    marginBottom: 10,
  },
  _viewBtn: {
    height: 20,
    borderRadius: 100,
    fontWeight: 'bold',
    color: '#F26E38',
    borderLeftWidth: 2,
    borderColor: 'white',
    fontSize: 20,
  },
});