import * as React from 'react';
import { Button, Text, View, Image, Slider } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './screens/Login'
import Splash from './screens/Splash'
import Signup from './screens/Signup'
import Home from './screens/Home'
import EnterMobile from './screens/EnterMobile'
import EnterOTP from './screens/EnterOTP'
import Profile from './screens/Profile'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



const HomeStack = createStackNavigator();

function LogoImage() {
  return (

    <View style={{
      shadowColor: "#c1c1c1",
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowOpacity: 2.95,
      shadowRadius: 3.84,
      marginHorizontal:20,
      marginVertical:20,
      elevation: 25,
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
        source={require('./src/logo.png')}
        
      />
    </View>

  );
}
function HeaderLeft(){
  return(
    <View style={{marginLeft:20}}>
      <Text style={{fontSize:16,color:'white',fontWeight:'bold',fontFamily: 'Gill Sans',}}>Shalimar Garden</Text>
      <Text style={{color:'white',fontFamily: 'Gill Sans',}}>Ghaziabad</Text>
    </View>

  )
}

 export default function HomeStackScreen() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
      <HomeStack.Screen name="Splash" component={Splash}
          options={{
          headerShown:false

          }} />
      <HomeStack.Screen name="Home" component={Home}
          options={{
            headerTitle:'',
            headerStyle: {
              backgroundColor: '#EA0706',
            },
            // headerTitle: props => <LogoImage {...props} />,
            headerRight: props => <LogoImage {...props}  />,
            headerLeft: props => <HeaderLeft {...props}   />,
            // headerLeft: () => (
            //   <Button
            //     onPress={() => alert('This is a button!')}
            //     title="Info"
            //     color="#fff"
            // />
            //),
          }} />
     
      

        

        <HomeStack.Screen name="Login" component={Login}
          options={{
            headerShown: false,
            headerRight: 'Image'

          }} />
           <HomeStack.Screen name="Profile" component={Profile}
          options={{
            headerShown: false,
            headerRight: 'Image'

          }} />

        <HomeStack.Screen name="Signup" component={Signup}
          options={{
            headerShown: false

          }} />
        
        <HomeStack.Screen name="EnterMobile" component={EnterMobile}
          options={{
            headerShown: false

          }} />
        <HomeStack.Screen name="EnterOTP" component={EnterOTP}
          options={{
            headerTintColor:'white',
            headerStyle: {
              backgroundColor: '#EA0706',
              color:'white',
              }
            

          }} />


      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
// const Tab = createMaterialBottomTabNavigator();

// function MyTabs() {
//   return (
//    <NavigationContainer>
//       <Tab.Navigator>
//       <Tab.Screen name="Splash" component={Splash} />
//       <Tab.Screen name="Profile" component={Profile} />
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Slider" component={Slider} />
//     </Tab.Navigator>
//    </NavigationContainer>
//   );
// }
// export default MyTabs;



