import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomNavigation from './src/config/bottomNavigation';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  EnterMobile,
  EnterOTP,
  Login,
  ProductDetail,
  Splash,
  Blog,
  GymsList,
  ViewShop,
  Location,
  Onboarding,
  ViewAllGym,
  Loading,
  Subscription,
  UserProfile,
  GymProfile,
  Cart,
  Payment,
  Help,
  ViewStudios,
  FitPrime,
  Nutritionist,
  Coach,
  FitPass,
  TermsConditions,
  Address,
} from './src/screens';

import AsyncStorage from '@react-native-community/async-storage';
// any js module
import {navigationRef} from './src/config/RootNavigation';

const HomeStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
import {TabBar} from 'react-native-animated-nav-tab-bar';

function ViewAllGymTab() {
  return (
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
        name="Gym"
        component={ViewAllGym}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name="ios-fitness"
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
        component={ViewShop}
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
        component={Help}
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
}

function GymProfileTab() {
  return (
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
        name="Profile"
        component={GymProfile}
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
      <Tabs.Screen
        name="Shop"
        component={ViewShop}
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
        component={Help}
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
}

export default function HomeStackScreen() {
  const [isLoggenIn, setLogged] = useState(null);
  const detectLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setLogged(true);
    } else {
      setLogged(true);
    }
  };

  useEffect(() => {
    detectLogin();
  }, []);
  return (
    <NavigationContainer ref={navigationRef}>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />

        <HomeStack.Screen
          name="bottombar"
          component={BottomNavigation}
          options={{
            headerShown: false,
            headerTitle: '',
            headerStyle: {
              backgroundColor: '#f23535',
            },
          }}
        />

        <HomeStack.Screen name="blog" component={Blog} />
        <HomeStack.Screen name="location" component={Location} />
        <HomeStack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{
            headerStyle: {
              backgroundColor: 'transparent',
            },
          }}
        />
        <HomeStack.Screen name="GymProfile" component={GymProfile} />
        <HomeStack.Screen
          name="Detail"
          component={ProductDetail}
          options={{
            headerTitle: (
              <Text style={{color: 'white', fontFamily: 'Gill Sans'}}>
                Product Detail
              </Text>
            ),
            headerStyle: {
              backgroundColor: '#f23535',
            },
            headerTintColor: 'white',
            headerBackTitle: '',
          }}
        />

        <HomeStack.Screen
          name="viewstdios"
          component={ViewStudios}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#f23535',
            },
            headerTintColor: 'white',
          }}
        />

        <HomeStack.Screen
          name="Subscription"
          component={Subscription}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: '#f23535',
            },
            headerTintColor: 'white',
            headerBackTitle: '',
          }}
        />
        <HomeStack.Screen
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

        <HomeStack.Screen
          name="Nutritionist"
          component={Nutritionist}
          options={{
            headerTitle: (
              <Text style={{color: 'white', fontFamily: 'Gill Sans'}}>
                FITPASS Nutritionist
              </Text>
            ),
            headerStyle: {
              backgroundColor: '#f23535',
            },

            headerTintColor: 'white',
            headerBackTitle: '',
          }}
        />

        <HomeStack.Screen
          name="COACH"
          component={Coach}
          options={{
            headerStyle: {
              backgroundColor: '#f23535',
              color: 'white',
            },

            headerTintColor: 'white',
            headerBackTitle: '',
          }}
        />

        <HomeStack.Screen
          name="FITPASS"
          component={FitPass}
          options={{
            headerStyle: {
              backgroundColor: '#f23535',
              color: 'white',
            },

            headerTintColor: 'white',
          }}
        />

        <HomeStack.Screen
          name="termscondtions"
          component={TermsConditions}
          options={{
            headerTitle: (
              <Text style={{color: 'white', fontFamily: 'Gill Sans'}}>
                Terms & Condtions
              </Text>
            ),
            headerStyle: {
              backgroundColor: '#f23535',
              color: 'white',
            },

            headerTintColor: 'white',
          }}
        />

        <HomeStack.Screen
          name="address"
          component={Address}
          options={{
            headerTitle: (
              <Text style={{color: 'white', fontFamily: 'Gill Sans'}}>
                Shipping Address Details
              </Text>
            ),
            headerStyle: {
              backgroundColor: '#f23535',
              color: 'white',
            },

            headerTintColor: 'white',
          }}
        />

        <HomeStack.Screen
          name="Payment"
          component={Payment}
          options={{
            headerStyle: {
              backgroundColor: '#f23535',
            },

            headerTintColor: 'white',
          }}
        />

        <HomeStack.Screen
          name="gymprofile"
          component={GymProfileTab}
          options={{
            headerTitle: (
              <Text style={{color: 'white', fontFamily: 'Gill Sans'}}>
                Gym Profile
              </Text>
            ),
            headerStyle: {
              backgroundColor: '#f23535',
            },

            headerTintColor: 'white',
            headerBackTitle: '',
          }}
        />

        <HomeStack.Screen
          name="cart"
          component={Cart}
          options={{
            headerStyle: {
              backgroundColor: '#f23535',
            },
            headerTintColor: 'white',
          }}
        />

        <HomeStack.Screen
          name="gymList"
          component={GymsList}
          options={{
            headerStyle: {
              backgroundColor: '#f23535',
            },
            headerTintColor: 'white',
          }}
        />
        <HomeStack.Screen name="GymProfie" component={GymProfile} />

        <HomeStack.Screen
          name="fitprime"
          component={FitPrime}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: '#f23535',
            },
            headerTintColor: 'white',
          }}
        />
        <HomeStack.Screen
          name="ViewAllGym"
          component={ViewAllGymTab}
          options={{
            headerTitle: (
              <Text style={{color: 'white', fontFamily: 'Gill Sans'}}>
                Gyms In
              </Text>
            ),
            headerStyle: {
              backgroundColor: '#f23535',
            },
            headerTintColor: 'white',
            headerBackTitle: '',
          }}
        />

        <HomeStack.Screen
          name="Onboarding"
          component={Onboarding}
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
        <HomeStack.Screen
          name="EnterMobile"
          component={EnterMobile}
          options={{
            headerShown: false,
          }}
        />

        {/* <HomeStack.Screen name="Splash" component={Splash} options={{}} /> */}
        <HomeStack.Screen
          name="EnterOTP"
          component={EnterOTP}
          options={{
            headerShown: false,
            animationTypeForReplace: isLoggenIn ? 'pop' : 'push',
          }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
