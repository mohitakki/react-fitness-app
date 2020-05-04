import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {widthToDp, heightToDp} from '../config/responsive';

export default class SubscribeCard extends React.Component {
  render() {
    return (
      <View style={styles.shopingCard}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <LinearGradient
            colors={['#b22193', '#f23535']}
            style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.leftArea}>
              <View style={styles._label}>
                <Text style={styles.getText}>GET</Text>
                <Text style={styles.percentText}>40%</Text>
                <Text style={styles.offText}>OFF</Text>
              </View>
            </View>

            <View style={styles.rightArea}>
              <View style={{}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{marginTop: widthToDp(4)}}>
                    <Text style={styles.fitpass}>FITBOOK PASS </Text>
                    <Text style={styles.price}>899/M </Text>
                  </View>
                  <View style={{marginTop: widthToDp(10)}}>
                    <TouchableOpacity style={styles.SubscriptionButton}>
                      <Text
                        style={{
                          color: 'red',
                          fontWeight: '600',
                          fontSize: widthToDp(3),
                        }}>
                        SUBSCRIBE
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  shopingCard: {
    height: widthToDp(25),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0.3,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.84,
    width: widthToDp(100),
    flex: 1,
  },
  leftArea: {
    width: widthToDp(30),
    backgroundColor: '#f4e6e6',
    height: widthToDp(25),
    borderTopRightRadius: 75,
    borderBottomRightRadius: 75,
    alignItems: 'center',
    shadowOpacity: 0.85,
    shadowRadius: 3.84,
    flexDirection: 'row',
  },
  _label: {
    alignItems: 'center',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 40,
  },
  getText: {
    color: 'red',
    marginLeft: widthToDp(3),
    width: 50,
    fontSize: widthToDp(4),
    fontWeight: '700',
    fontFamily: 'Gill Sans',
  },
  percentText: {
    color: 'red',
    width: 50,
    marginLeft: widthToDp(10),
    fontSize: widthToDp(6),
    fontWeight: '700',
    fontFamily: 'Gill Sans',
  },
  offText: {
    color: 'red',
    width: 50,
    marginLeft: widthToDp(20),
    fontSize: widthToDp(4),
    fontWeight: '700',
    fontFamily: 'Gill Sans',
  },
  passText: {
    color: 'white',
  },
  rightArea: {
    backgroundColor: 'transparent',
    marginTop: widthToDp(1),
  },
  textRight: {
    color: 'white',
    fontSize: heightToDp(2),
    fontWeight: '500',
    fontFamily: 'Gill Sans',
  },
  fitpass: {
    color: 'white',
    marginLeft: widthToDp(2),
    fontSize: widthToDp(4),
    fontWeight: '700',
    fontFamily: 'Gill Sans',
  },
  price: {
    color: 'white',
    marginLeft: widthToDp(3),
    fontSize: widthToDp(4),
    fontWeight: '700',
    fontFamily: 'Gill Sans',
  },
  SubscriptionButton: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: widthToDp(4),
    paddingVertical: widthToDp(1),
    marginVertical: 5,
    marginHorizontal: 5,
  },
});
