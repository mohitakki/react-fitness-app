import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
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
  GymsList,
} from './src/screens';

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
          name="bottombar"
          component={BottomNavigation}
          options={{
            headerShown:false,
            headerTitle: '',
            headerStyle: {
              backgroundColor: '#f23535',
            },
            headerTitle: props => <LogoImage {...props} />,
            headerRight: props => <LogoImage {...props} />,
            headerLeft: props => <HeaderLeft {...props} />,
          }}
        />
        <HomeStack.Screen
          name="onboading"
          component={Onboarding}
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
           
            // headerTitle: props => <LogoImage {...props} />,
            // headerRight: props => <LogoImage {...props} />,
            // headerLeft: props => <HeaderLeft {...props} />,
          }}
        />

        <HomeStack.Screen name="location" component={Location} />

        <HomeStack.Screen name="shop" component={ViewShop} />
        <HomeStack.Screen name="FITCOACH" component={FitCoach} />
        <HomeStack.Screen
          name="GymsList"
          component={GymsList}
          options={{
            headerTitle: <Text style={{color: 'white', fontFamily: 'Gill Sans'}}>Gyms In</Text>,
            headerStyle: {
              backgroundColor: '#f23535',
            },
            // headerTitle: <Text>lkjj</Text>,
            // headerRight: props => <  />,
            // headerLeft: props => <HeaderLeft {...props}   />,
          }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
