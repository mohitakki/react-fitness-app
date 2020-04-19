import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './screens/Login'
import Splash from './screens/Splash'
import Signup from './screens/Signup'
import Home from './screens/Home'
import EnterMobile from './screens/EnterMobile'
import EnterOTP from './screens/EnterOTP'


const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
      <HomeStack.Screen name="Splash" component={Splash}
        options={{
          headerShown: false

        }} />

      <HomeStack.Screen name="Login" component={Login}
        options={{
          headerShown: false

        }} />

      <HomeStack.Screen name="Signup" component={Signup}
        options={{
          headerShown: false

        }} />
      <HomeStack.Screen name="Home" component={Home}
        options={{
          headerShown: false

        }} />
      <HomeStack.Screen name="EnterMobile" component={EnterMobile}
        options={{
          headerShown: false

        }} />
      <HomeStack.Screen name="EnterOTP" component={EnterOTP}
        options={{
          headerShown: false

        }} />

    </HomeStack.Navigator>
    </NavigationContainer>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />

    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function App() {
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