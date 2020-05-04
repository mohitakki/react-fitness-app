import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {widthToDp} from '../config/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
const windowWidth = Dimensions.get('window').width;
import HeaderMenue from './HeaderMenue';
export default class Header extends React.Component {
  menuItem = item => {
    this.props.selectedItem(item);
  };
  render() {
    return (
      <>
        {/* header Component is only used in subscription screen  */}
        <View style={styles._header}>
          <TouchableOpacity
            onPress={() => this.props.props.navigation.navigate('bottombar')}>
            <FeatherIcon name="arrow-left" size={25} color="white" />
          </TouchableOpacity>
          <View style={styles._headerLeft}>
            <TouchableOpacity
              onPress={() => this.props.dropdown()}
              style={{
                alignItems: 'center',
                flex: 1,
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  paddingRight: 10,
                }}>
                {this.props.city}
              </Text>
              <Ionicons name="md-arrow-dropdown" size={20} color="white" />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <HeaderMenue getItem={this.menuItem} />
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

let styles = StyleSheet.create({
  _header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f23535',
    elevation: 4,
    paddingTop: widthToDp(9),
    paddingBottom: widthToDp(2),
    paddingLeft: 10,
    paddingRight: widthToDp(5),
    shadowColor: '#c1c1c1',
    shadowOffset: {
      width: 0.2,
      height: 0.2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 0.84,
  },
  _leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  _headerLeft: {
    paddingTop: 15,
    flexDirection: 'row',
    width: windowWidth - 50,
    borderColor: 'white',
    justifyContent: 'center',
  },
});
