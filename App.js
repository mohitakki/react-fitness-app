import * as React from 'react';
import {
  Button,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import BottomNavigation from './src/config/bottomNavigation';
import {
  EnterMobile,
  EnterOTP,
  Home,
  Login,
  Signup,
  Splash,
  Profile,
  Blog,
  ViewShop,
  FitCoach,
  Location,
  Onboarding,
} from './src/screens';

const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="onboading"
          component={Onboarding}
          options={{
            headerShown: false,
          }}
        />
        <HomeStack.Screen
          name="bottombar"
          component={BottomNavigation}
          options={{
            headerShown: false,
          }}
        />
        <HomeStack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <HomeStack.Screen name="Profile" component={Profile} />
        <HomeStack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <HomeStack.Screen name="Splash" component={Splash} options={{}} />
        <HomeStack.Screen
          name="EnterMobile"
          component={EnterMobile}
          options={{
            headerShown: false,
          }}
        />
        <HomeStack.Screen
          name="EnterOTP"
          component={EnterOTP}
          options={{
            headerShown: false,
          }}
        />
        <HomeStack.Screen name="blog" component={Blog} />
        <HomeStack.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        <HomeStack.Screen name="location" component={Location} />

        <HomeStack.Screen name="shop" component={ViewShop} />
        <HomeStack.Screen name="FITCOACH" component={FitCoach} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
