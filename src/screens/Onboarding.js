import React from 'react';
import {View, Text, ImageBackground, StyleSheet, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';
import {Home} from '../screens';
const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description',
    image: require('../assests/logo.png'),
    backgroundColor: '#f89e20',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other coolkjljlkjljkl stuff',
    image: require('../assests/logo.png'),
    backgroundColor: '#b0bd00',
  },
  {
    key: 3,
    title: 'Title 3',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('../assests/logo.png'),
    backgroundColor: '#5079ad',
  },
  {
    key: 4,
    title: 'Titel 4',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('../assests/logo.png'),
    backgroundColor: '#dc5000',
  },
];

export default class Onboarding extends React.Component {
  constructor() {
    super();
    this.state = {
      showRealApp: false,
    };
  }
  _renderItem = ({item}) => {
    return (
      <View
        colors={['#F26E38', '#F23873', '#48CCF7']}
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',

          backgroundColor: item.backgroundColor,
        }}>
        <Image source={item.image} style={styles._logo} />
        <View style={styles._description}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };
  _onDone = () => {
    // navigation or simply by controlling state
    this.setState({showRealApp: true});
  };
  render() {
    if (this.state.showRealApp) {
      this.props.navigation.navigate('bottombar');
      return <Home />;
    } else {
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          showSkipButton={true}
          onDone={this._onDone}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  _description: {
    marginBottom: 50,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Gill Sans',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  _logo: {
    height: 150,
    width: 150,
    marginBottom: 40,
  },
});
