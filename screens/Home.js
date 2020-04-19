import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Settings" component={SettingsStackScreen} />
          <Tab.Screen name="Login" component={Login} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

