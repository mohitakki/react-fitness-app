import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Modal,
  TouchableOpacity,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';
import {Home} from '../screens';
import Login from './Login';
const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description',
    image: require('../assests/logo.png'),
    backgroundColor: '#f23535',
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
      isConnected: '',
      modalVisible: false,
    };
  }

  _renderItem = ({item,index}) => {
    return (
      <View
        colors={['#F26E38', '#F23873', '#48CCF7']}
        key={index}
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
    NetInfo.fetch().then(state => {
      console.log('Is connected?', state.isConnected);
      if (state.isConnected) {
        this.setState({isConnected: true});
        this.setState({showRealApp: true});
      } else {
        this.setState({
          isConnected: false,
          modalVisible: true,
        });

        console.log(this.state.isConnected);
      }
    });
  };
  render() {
    if (this.state.showRealApp) {
      this.props.navigation.navigate('Login');
      return <Login />;
    } else {
      return (
        <>
          <StatusBar translucent backgroundColor="transparent" />
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles._message}>
                    Unable to connect to the Internet!
                  </Text>
                  <TouchableOpacity
                    onPress={() => this.setState({modalVisible: false})}>
                    <View
                      style={{
                        borderTopWidth: 1,
                        borderColor: 'grey',
                        width: '100%',
                        padding: 5,
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                      }}>
                      <Text style={styles.model_btn}>ok</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>

          <AppIntroSlider
            renderItem={this._renderItem}
            data={slides}
            keyExtractor = { (item, index) => index.toString() }


            showSkipButton={true}
            onDone={this._onDone}
          />
        </>
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
    resizeMode: 'contain',
  },
  // model
  centeredView: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#ceeae9',
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 15,
    width: '70%',
  },
  _message: {
    padding: 10,
  },
});
