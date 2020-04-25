import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {Home, Profile, Shop, Help, UserProfile, GymsList, ViewAllGym} from './../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBar} from 'react-native-animated-nav-tab-bar';

const Tabs = createBottomTabNavigator();


export default () => (
  <Tabs.Navigator
    tabBarOptions={{
      activeTintColor: '#2F7C6E',
      inactiveTintColor: '#222222',
    }}
    tabBar={props => (
      <TabBar
        activeColors={'#f23535'}
        activeTabBackgrounds={'#efd2d2'}
        {...props}
      />
    )}>
    <Tabs.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({focused, color, size}) => (
          <Icon
            name="home"
            size={size ? size : 24}
            color={focused ? color : '#222222'}
            focused={focused}
            color={color}
          />
        ),
      }}
    />

    <Tabs.Screen
      name="Shop"
      component={Shop}
      options={{
        tabBarIcon: ({focused, color, size}) => (
          <Icon
            name="shopping-cart"
            size={size ? size : 24}
            color={focused ? color : '#222222'}
            focused={focused}
            color={color}
          />
        ),
      }}
    />

   

    <Tabs.Screen
      name="Find Gym"
      component={ViewAllGym}
      options={{
        tabBarIcon: ({focused, color, size}) => (
          <Icon
            name="help-circle"
            size={size ? size : 24}
            color={focused ? color : '#222222'}
            focused={focused}
            color={color}
          />
        ),
      }}
    />
     <Tabs.Screen
      name="Profile"
      component={UserProfile}
      options={{
        tabBarIcon: ({focused, color, size}) => (
          <Icon
            name="user"
            size={size ? size : 24}
            color={focused ? color : '#222222'}
            focused={focused}
            color={color}
          />
        ),
      }}
    />
  </Tabs.Navigator>
);
