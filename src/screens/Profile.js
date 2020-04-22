import React, {Component} from 'react';
import {View, Text} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import AnimatedTabBar, {TabsConfigsType} from '@gorhom/animated-tabbar';
// import Login from '../screens/Login'
// const tabs: TabsConfigsType = {
//     Home: {
//       labelStyle: {
//         color: '#5B37B7',
//       },
//       icon: {
//         // component: /* ICON COMPONENT */,
//         activeColor: 'rgba(91,55,183,1)',
//         inactiveColor: 'rgba(0,0,0,1)',
//       },
//       background: {
//         activeColor: 'rgba(223,215,243,1)',
//         inactiveColor: 'rgba(223,215,243,0)',
//       },
//     },
//     Profile: {
//       labelStyle: {
//         color: '#1194AA',
//       },
//       icon: {
//         // component: /* ICON COMPONENT */,
//         activeColor: 'rgba(17,148,170,1)',
//         inactiveColor: 'rgba(0,0,0,1)',
//       },
//       background: {
//         activeColor: 'rgba(207,235,239,1)',
//         inactiveColor: 'rgba(207,235,239,0)',
//       },
//     },
//   };
//   const Tab = createBottomTabNavigator();

// export default class Profile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//     return (
//       <View style={{flex:1,backgroundColor:'black'}}>

//       <Tab.Navigator
//         tabBar={props => (
//           <AnimatedTabBar tabs={tabs} {...props} />
//         )}
//       >
//         <Tab.Screen
//           name="Home"
//           component={Profile}
//         />
//         <Tab.Screen
//           name="Profile"
//           component={Login}
//         />
//       </Tab.Navigator>

//       </View>
//     );
//   }
// }

export default class Profile extends React.Component {
  render() {
    return (
      <View>
        <Text>hi this is profile page</Text>
      </View>
    );
  }
}
