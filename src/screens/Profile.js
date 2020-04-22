import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header} from './../components';
import Icon from 'react-native-vector-icons/Feather';

export default class Profile extends React.Component {
  render() {
    return (
      <View>
        <Header
          icon={<Icon name="user" color={'#222222'} style={{fontSize: 30}} />}
          navigation={this.props.navigation}
        />
        <Text>hi this is profile page</Text>
      </View>
    );
  }
}
