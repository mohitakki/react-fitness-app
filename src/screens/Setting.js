import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
export default class Setting extends React.Component {
  render() {
    return (
      <View style={styles._container}>
        <ScrollView>
          <Text style={styles._tab_heading}>ACCOUNT</Text>
          <TouchableOpacity
            style={styles._li}
            onPress={() => this.props.navigation.navigate('Edit Profile')}>
            <View style={styles._leftView}>
              <View style={[styles._circle, {backgroundColor: '#f97272'}]}>
                <FontAwesome name="user" color="white" />
              </View>
              <Text style={styles._list_text}>EDIT PROFILE</Text>
            </View>
            <FontAwesome5 name="angle-double-right" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles._li}
            onPress={() => this.props.navigation.navigate('address')}>
            <View style={styles._leftView}>
              <View style={[styles._circle, {backgroundColor: '#f97272'}]}>
                <Entypo name="location" color="white" />
              </View>
              <Text style={styles._list_text}>ADDRESS</Text>
            </View>
            <FontAwesome5 name="angle-double-right" />
          </TouchableOpacity>

          <TouchableOpacity style={styles._li}>
            <View style={styles._leftView}>
              <View style={[styles._circle, {backgroundColor: '#f97272'}]}>
                <FontAwesome5 name="money-bill" color="white" />
              </View>
              <Text style={styles._list_text}>BILLINGS DETAILS</Text>
            </View>
            <FontAwesome5 name="angle-double-right" />
          </TouchableOpacity>

          <Text style={styles._tab_heading}>OTHER</Text>

          <TouchableOpacity style={styles._li}>
            <View style={styles._leftView}>
              <View style={styles._circle}>
                <Entypo name="help" color="white" />
              </View>
              <Text style={styles._list_text}>HELP</Text>
            </View>
            <FontAwesome5 name="angle-double-right" />
          </TouchableOpacity>

          <TouchableOpacity style={styles._li}>
            <View style={styles._leftView}>
              <View style={styles._circle}>
                <MaterialIcon name="feedback" color="white" />
              </View>
              <Text style={styles._list_text}>FEEDBACK</Text>
            </View>
            <FontAwesome5 name="angle-double-right" />
          </TouchableOpacity>

          <TouchableOpacity style={styles._li}>
            <View style={styles._leftView}>
              <View style={styles._circle}>
                <Ionicons name="ios-information" color="white" />
              </View>
              <Text style={styles._list_text}>ABOUT</Text>
            </View>
            <FontAwesome5 name="angle-double-right" />
          </TouchableOpacity>

          <TouchableOpacity style={styles._li}>
            <View style={styles._leftView}>
              <View style={styles._circle}>
                <FontAwesome5 name="clipboard-list" color="white" />
              </View>
              <Text style={styles._list_text}>TERMS & CONDITION</Text>
            </View>
            <FontAwesome5 name="angle-double-right" />
          </TouchableOpacity>

          <TouchableOpacity style={styles._li}>
            <View style={styles._leftView}>
              <View style={styles._circle}>
                <FontAwesome5 name="clipboard-list" color="white" />
              </View>
              <Text style={styles._list_text}>PRIVACY POLICY</Text>
            </View>
            <FontAwesome5 name="angle-double-right" />
          </TouchableOpacity>

          <TouchableOpacity style={styles._li}>
            <View style={styles._leftView}>
              <View style={styles._circle}>
                <FontAwesome5 name="clipboard-list" color="white" />
              </View>
              <Text style={styles._list_text}>FAQs</Text>
            </View>
            <FontAwesome5 name="angle-double-right" />
          </TouchableOpacity>

          <TouchableOpacity style={styles._li}>
            <View style={styles._leftView}>
              <View style={[styles._circle, {backgroundColor: '#f97272'}]}>
                <FontAwesome5 name="clipboard-list" color="white" />
              </View>
              <Text style={styles._list_text}>LOGOUT</Text>
            </View>
            <FontAwesome5 name="angle-double-right" />
          </TouchableOpacity>

          <Text style={styles._bottom_text}>App Version 5.4.98</Text>
        </ScrollView>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    padding: 10,
    flex: 1,
    paddingRight: 0,
    backgroundColor: 'white',
  },
  _tab_heading: {
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: 'grey',
    padding: 10,
  },
  _li: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#e0dede',
    padding: 12,
  },
  _list_text: {
    fontWeight: 'bold',
    fontSize: 10,
    letterSpacing: 1,
  },
  _leftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  _circle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 100,
    marginRight: 10,
    backgroundColor: '#a8b2b1',
  },

  _bottom_text: {
    textAlign: 'center',
    paddingTop: 10,
    color: 'grey',
    fontSize: 10,
  },
});
