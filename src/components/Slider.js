import React, {Component, useRef} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import CardSilder from 'react-native-cards-slider';
import Carousel from 'react-native-snap-carousel';



export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }
  gymProfile = ()=>{
    const {navigate} = props.navigation;
    navigate('Profile');
  }

  render() {
    return (
      <View>

<View style={styles.cardSlider}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.innerCard}>
                <Image
                  style={{
                    resizeMode: 'cover',
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                    borderColor: '#68666C',
                    borderWidth: 1.6,
                  }}
                  source={{uri: this.data.image}}
                />
              </View>
              <View>
                <Text style={styles.gymName}>{this.data.title}</Text>
                <Text style={styles.gymAddress}>
                  {this.data.address}
                </Text>
                <View
                  style={{
                    width: 170,
                    height: 25,
                    marginHorizontal: 20,
                    backgroundColor: '#efd2d2',
                    borderRadius: 5,
                    marginTop: 10,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 20,
                    marginTop: 10,
                  }}>
                  <Text style={styles.timing}>{this.data.timing}</Text>
                  <Text style={styles.timing}>.{this.data.distance}</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                height: 10,
                flex: 2,
                backgroundColor: '#efd2d2',
                marginTop: 10,
              }}>
              <Text
                style={styles.exploreText}
                onPress={() => this.props.props.navigate('Profile')}>
                Explore this GYM
              </Text>
            </View>
          </View>
   
{/*         
          <View style={styles.cardSlider}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.innerCard}>
                <Image
                  style={{
                    resizeMode: 'cover',
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                    borderColor: '#68666C',
                    borderWidth: 1.6,
                  }}
                  source={require('../assests/gym2.png')}
                />
              </View>
              <View>
                <Text style={styles.gymName}>New Fitness Gym</Text>
                <Text style={styles.gymAddress}>
                  Shalimar Garden, Ghaziabad
                </Text>
                <View
                  style={{
                    width: 170,
                    height: 25,
                    marginHorizontal: 20,
                    backgroundColor: '#D9D0EE',
                    borderRadius: 5,
                    marginTop: 5,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 20,
                    marginTop: 20,
                  }}>
                  <Text style={styles.timing}>06:00 to 22:00</Text>
                  <Text style={styles.timing}>.89km</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                height: 10,
                flex: 2,
                backgroundColor: '#D9D0EE',
                marginTop: 20,
              }}
            />
          </View>
          <View style={styles.cardSlider}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.innerCard}>
                <Image
                  style={{
                    resizeMode: 'cover',
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                    borderColor: '#68666C',
                    borderWidth: 1.6,
                  }}
                  source={{
                    url:
                      'https://cdn1.designhill.com/cache/uploads/pagefile/1552986918-14630458015c90b326ac8835-91581601-500x500.jpg?ver=2.10.80',
                  }}
                />
              </View>
              <View>
                <Text style={styles.gymName}>The Fitness Gym</Text>
                <Text style={styles.gymAddress}>
                  Shalimar Garden, Ghaziabad
                </Text>
                <View
                  style={{
                    width: 170,
                    height: 25,
                    marginHorizontal: 20,
                    backgroundColor: '#D9D0EE',
                    borderRadius: 5,
                    marginTop: 5,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 20,
                    marginTop: 20,
                  }}>
                  <Text style={styles.timing}>06:00 to 22:00</Text>
                  <Text style={styles.timing}>.89km</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                height: 10,
                flex: 2,
                backgroundColor: '#D9D0EE',
                marginTop: 20,
              }}
            />
          </View>
          <View style={styles.cardSlider}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.innerCard}>
                <Image
                  style={{
                    resizeMode: 'cover',
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                    borderColor: '#68666C',
                    borderWidth: 1.6,
                  }}
                  source={{
                    url:
                      'https://cdn1.designhill.com/cache/uploads/pagefile/1552986918-14630458015c90b326ac8835-91581601-500x500.jpg?ver=2.10.80',
                  }}
                />
              </View>
              <View>
                <Text style={styles.gymName}>The Fitness Gym</Text>
                <Text style={styles.gymAddress}>
                  Shalimar Garden, Ghaziabad
                </Text>
                <View
                  style={{
                    width: 170,
                    height: 25,
                    marginHorizontal: 20,
                    backgroundColor: '#D9D0EE',
                    borderRadius: 5,
                    marginTop: 5,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 20,
                    marginTop: 20,
                  }}>
                  <Text style={styles.timing}>06:00 to 22:00</Text>
                  <Text style={styles.timing}>.89km</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                height: 10,
                flex: 2,
                backgroundColor: '#D9D0EE',
                marginTop: 20,
              }}
            />
          </View>
          <View style={styles.cardSlider}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.innerCard}>
                <Image
                  style={{
                    resizeMode: 'cover',
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                    borderColor: '#68666C',
                    borderWidth: 1.6,
                  }}
                  source={{
                    url:
                      'https://cdn1.designhill.com/cache/uploads/pagefile/1552986918-14630458015c90b326ac8835-91581601-500x500.jpg?ver=2.10.80',
                  }}
                />
              </View>
              <View>
                <Text style={styles.gymName}>The Fitness Gym</Text>
                <Text style={styles.gymAddress}>
                  Shalimar Garden, Ghaziabad
                </Text>
                <View
                  style={{
                    width: 170,
                    height: 25,
                    marginHorizontal: 20,
                    backgroundColor: '#D9D0EE',
                    borderRadius: 5,
                    marginTop: 5,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 20,
                    marginTop: 20,
                  }}>
                  <Text style={styles.timing}>06:00 to 22:00</Text>
                  <Text style={styles.timing}>.89km</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                height: 10,
                flex: 2,
                backgroundColor: '#D9D0EE',
                marginTop: 20,
              }}
            />
          </View>
          <View style={styles.cardSlider}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.innerCard}>
                <Image
                  style={{
                    resizeMode: 'cover',
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                    borderColor: '#68666C',
                    borderWidth: 1.6,
                  }}
                  source={{
                    url:
                      'https://cdn1.designhill.com/cache/uploads/pagefile/1552986918-14630458015c90b326ac8835-91581601-500x500.jpg?ver=2.10.80',
                  }}
                />
              </View>
              <View>
                <Text style={styles.gymName}>The Fitness Gym</Text>
                <Text style={styles.gymAddress}>
                  Shalimar Garden, Ghaziabad
                </Text>
                <View
                  style={{
                    width: 170,
                    height: 25,
                    marginHorizontal: 20,
                    backgroundColor: '#D9D0EE',
                    borderRadius: 5,
                    marginTop: 5,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 20,
                    marginTop: 20,
                  }}>
                  <Text style={styles.timing}>06:00 to 22:00</Text>
                  <Text style={styles.timing}>.89km</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                height: 10,
                flex: 2,
                backgroundColor: '#D9D0EE',
                marginTop: 20,
              }}
            />
          </View>
        */}
       
      
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cardSlider: {
    height: 150,
    borderRadius: 10,
    borderColor: '#D9D0EE',
    borderWidth: 0.8,
    backgroundColor: '#fbfbfb',
    borderRadius: 5,
    shadowColor: '#059FF4',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.95,
    shadowRadius: 3.84,
    elevation: 25,
  },
  innerCard: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    marginTop: 10,
    marginLeft: 20,
    borderRadius: 5,
    shadowColor: '#D9D0EE',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.95,
    shadowRadius: 3.84,
    elevation: 25,
  },
  gymName: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    fontFamily: 'Gill Sans',
  },
  gymAddress: {
    fontSize: 12,
    marginLeft: 20,
    color: '#68666C',
    fontFamily: 'Gill Sans',
    marginTop:5
  },
  timing: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Gill Sans',
    color: '#f23535',
  },
  exploreText: {
    textAlign:'center',
    fontFamily: 'Gill Sans',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf:"center",
    marginTop:2,
    fontWeight:'500',
    color:'#f23535'
  },
});
