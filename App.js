import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from './src/config/bottomNavigation';
import {
  EnterMobile,
  EnterOTP,
  Home,
  Login,
  ProductDetail,
  Splash,
  Profile,
  Blog,
  ViewShop,
  FitCoach,
  Location,
  Onboarding,
  GymsList,
  ViewAllGym,
  Loading,
  Subscription,
  UserProfile
} from './src/screens';

import AsyncStorage from '@react-native-community/async-storage';


// any js module
import { navigationRef } from './src/config/RootNavigation'



const HomeStack = createStackNavigator();


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
        source={require('./src/assests/logo.png')}
      />
    </View>
  );
}
function HeaderLeft() {
  // const {navigate} = this.props.navigation;

  return (
    <View style={{ marginLeft: 20 }}>
      <Text
        style={{
          fontSize: 16,
          color: 'white',
          fontWeight: 'bold',
          fontFamily: 'Gill Sans',

        }}>
        Shalimar Garden
      </Text>
      <Text style={{ color: 'white', fontFamily: 'Gill Sans' }}>Ghaziabad</Text>
    </View>
  );
}

export default function HomeStackScreen() {

  const [isLoggenIn, setLogged] = useState(null)
  const detectLogin = async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      setLogged(true)
    } else {
      setLogged(false)
    }

  }

  useEffect(() => {
    detectLogin()
  }, [])
  return (
    <NavigationContainer ref={navigationRef}>
      <HomeStack.Navigator>
        {isLoggenIn == null ?
          (<HomeStack.Screen
            name="Loading"
            component={Loading}
            options={{
              headerShown: false,
            }}
          />) : isLoggenIn == true ?
            (<>


              <HomeStack.Screen
                name="bottombar"
                component={BottomNavigation}
                options={{
                  headerShown: false,
                  headerTitle: '',
                  headerStyle: {
                    backgroundColor: '#f23535',
                  },
                  headerTitle: props => <LogoImage {...props} />,
                  headerRight: props => <LogoImage {...props} />,
                  headerLeft: props => <HeaderLeft {...props} />,
                }}
              />
              <HomeStack.Screen name="Profile" component={Profile}
                options={{
                  headerShown: false
                }}
              />
              <HomeStack.Screen name="blog" component={Blog} />
              {/* <HomeStack.Screen name="ViewAllGym" component={ViewAllGym} /> */}
              <HomeStack.Screen
                name="home"
                component={Home}
                options={{
                  headerShown: false,

                  // headerTitle: props => <LogoImage {...props} />,
                  // headerRight: props => <LogoImage {...props} />,
                  // headerLeft: props => <HeaderLeft {...props} />,
                }}
              />

              <HomeStack.Screen name="location" component={Location} />
              <HomeStack.Screen name="UserProfile" component={UserProfile}/>
              <HomeStack.Screen name="Detail" component={ProductDetail}
                options={{
                  headerTitle: <Text style={{ color: 'white', fontFamily: 'Gill Sans' }}>Product Detail</Text>,
                  headerStyle: {
                    backgroundColor: '#f23535',
                  },
                  headerTintColor: 'white',
                  headerBackTitle: ''
                  // headerTitle: <Text>lkjj</Text>,
                  // headerRight: props => <  />,
                  // headerLeft: props => <HeaderLeft {...props}   />,
                }}
              />

              <HomeStack.Screen name="Subscription" component={Subscription}
                options={{
                  headerTitle: <Text style={{ color: 'white', fontFamily: 'Gill Sans' }}>Subscription</Text>,
                  headerStyle: {
                    backgroundColor: '#f23535',
                  },
                  headerTintColor: 'white',
                  headerBackTitle: ''
                  // headerTitle: <Text>lkjj</Text>,
                  // headerRight: props => <  />,
                  // headerLeft: props => <HeaderLeft {...props}   />,
                }}
              />
              <HomeStack.Screen name="Supplement" component={ViewShop} 
                  options={{
                    headerTitle: <Text style={{ color: 'white', fontFamily: 'Gill Sans' }}>Supplement</Text>,
                  headerStyle: {
                    backgroundColor: '#f23535',
                  },
                  headerTintColor: 'white',
                  headerBackTitle: ''
                }}
              />
              <HomeStack.Screen name="FITCOACH" component={FitCoach} />
              <HomeStack.Screen
                name="ViewAllGym"
                component={ViewAllGym}
                options={{
                  headerTitle: <Text style={{ color: 'white', fontFamily: 'Gill Sans' }}>Gyms In</Text>,
                  headerStyle: {
                    backgroundColor: '#f23535',
                  },
                  headerTintColor: 'white',
                  headerBackTitle: ''
                  // headerTitle: <Text>lkjj</Text>,
                  // headerRight: props => <  />,
                  // headerLeft: props => <HeaderLeft {...props}   />,
                }}
              />
            </>
            ) : (
              <>
                <HomeStack.Screen name="Onboarding" component={Onboarding}
                  options={{
                    headerShown: false
                  }} />
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

                <HomeStack.Screen name="Splash" component={Splash} options={{}} />

                <HomeStack.Screen
                  name="EnterOTP"
                  component={EnterOTP}
                  options={{
                    headerShown: false,
                    animationTypeForReplace: isLoggenIn ? 'pop' : 'push'
                  }}
                />

              </>)
        }
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
