import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigation from './src/config/bottomNavigation';
import {
  EnterMobile,
  EnterOTP,
  Home,
  Login,
  ProductDetail,
  Splash,
  Blog,
  ViewShop,
  FitCoach,
  Location,
  Onboarding,
  ViewAllGym,
  Loading,
  Subscription,
  UserProfile,
} from './src/screens';

import AsyncStorage from '@react-native-community/async-storage';
// any js module
import {navigationRef} from './src/config/RootNavigation';

const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
  const [isLoggenIn, setLogged] = useState(true);
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
        {isLoggenIn == null ? (
          <HomeStack.Screen
            name="Loading"
            component={Loading}
            options={{
              headerShown: false,
            }}
          />
        ) : isLoggenIn == true ? (
          <>
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
            <HomeStack.Screen name="UserProfile" component={UserProfile} />
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
              name="Subscription"
              component={Subscription}
              options={{
                headerTitle: (
                  <Text style={{color: 'white', fontFamily: 'Gill Sans'}}>
                    Subscription
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
            <HomeStack.Screen name="FITCOACH" component={FitCoach} />
            <HomeStack.Screen
              name="ViewAllGym"
              component={ViewAllGym}
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
          </>
        ) : (
          <>
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

            <HomeStack.Screen
              name="home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <HomeStack.Screen name="Splash" component={Splash} options={{}} />
            <HomeStack.Screen
              name="EnterOTP"
              component={EnterOTP}
              options={{
                headerShown: false,
                animationTypeForReplace: isLoggenIn ? 'pop' : 'push',
              }}
            />
          </>
        )}
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
