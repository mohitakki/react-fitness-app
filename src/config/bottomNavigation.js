import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  Home,
  Shop,
  Help,
  UserProfile,
  GymsList,
  ViewAllGym,
  ViewShop,
} from './../screens';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBar} from 'react-native-animated-nav-tab-bar';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

function LogoImage() {
  return (
    <View
      style={{
        shadowColor: '#c1c1c1',
        shadowOffset: {
          width: 0.2,
          height: 0.2,
        },
        shadowOpacity: 0.45,
        shadowRadius: 0.84,
        marginHorizontal: 20,
        marginVertical: 20,
        elevation: 5,
      }}>
      <Image
        style={{
          width: 30,
          height: 30,
          borderRadius: 50,
          borderColor: '#c1c1c1',
          borderWidth: 1,
          resizeMode: 'contain',
          backgroundColor: '#000',
        }}
        source={require('./../assests/logo.png')}
      />
    </View>
  );
}
function HeaderLeft() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{marginLeft: 20}}
      onPress={() => navigation.navigate('location')}>
      <View>
        <Text
          style={{
            fontSize: 16,
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'Gill Sans',
          }}>
          Shalimar Garden
        </Text>
        <Text style={{color: 'white', fontFamily: 'Gill Sans'}}>Ghaziabad</Text>
      </View>
    </TouchableOpacity>
  );
}

function ShopStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Supplement"
        component={ViewShop}
        options={{
          headerTitle: (
            <Text style={{color: 'white', fontFamily: 'Gill Sans'}}>
              Supplement
            </Text>
          ),
          headerStyle: {
            backgroundColor: '#f23535',
          },

          headerTintColor: 'white',
          headerBackTitle: '',
        }}
      />
    </Stack.Navigator>
  );
}

function HomStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#f23535',
          },

          headerTintColor: 'white',
          headerBackTitle: '',
          headerRight: props => <LogoImage />,
          headerLeft: props => <HeaderLeft />,
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="profile"
        component={UserProfile}
        options={{
          headerTitle: 'Profile',
          headerShown: 'false',
          headerStyle: {
            backgroundColor: '#f23535',
          },

          headerTintColor: 'white',
          headerBackTitle: '',
        }}
      />
    </Stack.Navigator>
  );
}


function HelpStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="help"
        component={Help}
        options={{
          headerTitle: 'Help',
          headerStyle: {
            backgroundColor: '#f23535',
          },

          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );
}

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
      name="home"
      component={HomStack}
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
      name="Shop"
      component={ShopStack}
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
      name="Help"
      component={HelpStack}
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
      name="Account"
      component={ProfileStack}
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
