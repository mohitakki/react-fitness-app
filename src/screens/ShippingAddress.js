import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {widthToDp, heightToDp} from '../config/responsive';

export default class Address extends React.Component {
  constructor() {
    super();
    this.state = {
      address: 'Others',
    };
  }
  render() {
    let {address} = this.state;
    return (
      <View style={styles._container}>
        <View style={styles._tabar}>
          {/* home tab */}
          {address !== 'Others' ? (
            <>
              <TouchableOpacity
                style={[
                  styles._tab,
                  {backgroundColor: address === 'Home' ? 'green' : '#ededed'},
                ]}
                onPress={() => this.setState({address: 'Home'})}>
                <FontAwesome
                  name="home"
                  color="grey"
                  style={[
                    {
                      marginRight: 6,
                      color: address === 'Home' ? 'white' : 'grey',
                    },
                  ]}
                />
                <Text style={[{color: address === 'Home' ? 'white' : 'grey'}]}>
                  Home
                </Text>
              </TouchableOpacity>
              {/* office tab */}
              <TouchableOpacity
                style={[
                  styles._tab,
                  {backgroundColor: address === 'Office' ? 'green' : '#ededed'},
                ]}
                onPress={() => this.setState({address: 'Office'})}>
                <FoundationIcon
                  name="shopping-bag"
                  color="grey"
                  style={[
                    {
                      marginRight: 6,
                      color: address === 'Office' ? 'white' : 'grey',
                    },
                  ]}
                />
                <Text
                  style={[{color: address === 'Office' ? 'white' : 'grey'}]}>
                  Office
                </Text>
              </TouchableOpacity>
              {/* Others tab */}
              <TouchableOpacity
                style={[
                  styles._tab,
                  {backgroundColor: address === 'Others' ? 'green' : '#ededed'},
                ]}
                onPress={() => this.setState({address: 'Others'})}>
                <Entypo
                  name="location-pin"
                  color="grey"
                  size={16}
                  style={[
                    {
                      marginRight: 6,
                      color: address === 'Others' ? 'white' : 'grey',
                    },
                  ]}
                />

                <Text
                  style={[{color: address === 'Others' ? 'white' : 'grey'}]}>
                  Others
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <View style={styles._otherAddress}>
              <Text>
                <Entypo
                  name="location-pin"
                  color="grey"
                  size={18}
                  style={{color: 'grey'}}
                />
              </Text>
              <TextInput
                placeholder="eg: friends flat"
                style={styles._otherAddressInput}
              />
              <TouchableOpacity
                style={styles._cancel}
                onPress={() => this.setState({address: 'Home'})}>
                <Text style={styles._cancelTxt}>CANCEL</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/*address form */}
        <View style={styles._form}>
          <TextInput placeholder="Name" style={styles._textInput} />
          <TextInput placeholder="Address" style={styles._textInput} />
          <TextInput placeholder="Locality" style={styles._textInput} />
          <TextInput placeholder="State" style={styles._textInput} />
          <TextInput placeholder="Pincode" style={styles._textInput} />
          <TouchableOpacity style={styles._saveBtn} activeOpacity={0.8}>
            <Text style={styles._saveText}>SAVE CHANGES</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: 'white',
  },
  _tabar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10,
  },
  _tab: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    padding: 7,
    width: 90,
    justifyContent: 'center',
  },
  _form: {
    padding: 10,
  },
  _textInput: {
    borderBottomWidth: 1,
    borderColor: '#e8e3e3',
    marginTop: 5,
    // width: widthToDp(80),
    height: widthToDp(13),
  },
  _saveBtn: {
    backgroundColor: '#f23535',
    borderRadius: 5,
    marginTop: 50,
  },
  _saveText: {
    padding: 15,
    color: 'white',
    letterSpacing: 2,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  _otherAddress: {
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    paddingLeft: 10,
    borderColor: '#e8e3e3',
    height: widthToDp(13),
  },
  _otherAddressInput: {
    flex: 1,
    height: widthToDp(13),
  },
  _cancel: {
    alignItems: 'center',
    backgroundColor: '#e8e3e3',
    width: 70,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  _cancelTxt: {
    // color: '',
    fontWeight: 'bold',
    color: 'grey',
  },
});
