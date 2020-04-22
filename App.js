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
// import Login from './src/screens/Login';
// import Splash from './src/screens/Splash';
// import Signup from './src/screens/Signup';
// import Home from './src/screens/Home';
// import EnterMobile from './src/screens/EnterMobile';
// import EnterOTP from './src/screens/EnterOTP';
// import Profile from './src/screens/Profile';
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

function LogoImage() {
  return (
    <>
      <StatusBar backgroundColor="#EA0706" />
      <View
        style={{
          shadowColor: '#c1c1c1',
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowOpacity: 2.95,
          shadowRadius: 3.84,
          marginHorizontal: 20,
          marginVertical: 20,
          elevation: 25,
        }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('location')}>
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
        </TouchableOpacity>
      </View>
    </>
  );
}
function HeaderLeft() {
  return (
    <View style={{marginLeft: 20}}>
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
  );
}

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
            // headerShown: false,
            headerTitle: '',
            headerStyle: {
              backgroundColor: '#F26E38',
            },
            // headerTitle: props => <LogoImage {...props} />,
            headerRight: props => <LogoImage {...props} />,
            headerLeft: props => <HeaderLeft {...props} />,
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
          name="Profile"
          component={Profile}
          options={{
            headerShown: true,
          }}
        />
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
            headerShown: true,
          }}
        />

        <HomeStack.Screen
          name="location"
          component={Location}
          options={{
            headerShown: false,
          }}
        />

        <HomeStack.Screen name="shop" component={ViewShop} />
        <HomeStack.Screen name="FITCOACH" component={FitCoach} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
