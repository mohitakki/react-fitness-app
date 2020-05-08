import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {DatePicker} from './../components';
import ImagePicker from 'react-native-image-picker';

export default class EditProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: false,
    };
  }

  takePic = () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  };

  render() {
    let {selected, avatarSource} = this.state;
    return (
      <View style={styles._container}>
        <ScrollView>
          <View style={styles._head}>
            <View style={styles._circle}>
              <TouchableOpacity
                style={styles._badge}
                onPress={() => this.takePic()}>
                <Entypo name="edit" />
              </TouchableOpacity>
              {avatarSource ? (
                <Image
                  source={this.state.avatarSource}
                  style={styles.uploadAvatar}
                />
              ) : (
                <FontAwesome name="user" size={60} color="grey" />
              )}
            </View>
          </View>
          <View style={styles._body}>
            <Text style={styles._tab_heading}>NAME</Text>
            <TextInput placeholder="Mohit Kumar" placeholderTextColor='gray' style={styles._textInput} />
            <Text style={styles._tab_heading}>DOB</Text>
            <DatePicker />
            <Text style={styles._tab_heading}>EMAIL</Text>
            <TextInput
              placeholder="Bhullansaab@gmail.com" placeholderTextColor='gray'
              style={styles._textInput}
            />

            <Text style={styles._tab_heading}>PREFERRED LOCATION</Text>
            <TextInput placeholder="Ahmedabad" placeholderTextColor='gray' style={styles._textInput} />

            <Text style={styles._tab_heading}>MOBILE</Text>
            <TextInput placeholder="9084632266" placeholderTextColor='gray' style={styles._textInput} />

            <Text style={styles._tab_heading}>GENDER</Text>

            <View style={styles._radioView}>
              <TouchableOpacity
                style={{flexDirection: 'row', flex: 1}}
                onPress={() => this.setState({selected: 'Male'})}>
                <View
                  style={[
                    styles._radioBtn,
                    {
                      borderColor: selected ? '#48CCF7' : 'grey',
                    },
                  ]}>
                  <Text
                    style={[
                      styles._optionNum,
                      {
                        backgroundColor:
                          selected === 'Male' ? '#48CCF7' : 'white',
                      },
                    ]}
                  />
                </View>
                <Text>Male</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{flexDirection: 'row', flex: 1}}
                onPress={() => this.setState({selected: 'Female'})}>
                <View
                  style={[
                    styles._radioBtn,
                    {
                      borderColor: selected ? '#48CCF7' : 'grey',
                    },
                  ]}>
                  <Text
                    style={[
                      styles._optionNum,
                      {
                        backgroundColor:
                          selected === 'Female' ? '#48CCF7' : 'white',
                      },
                    ]}
                  />
                </View>
                <Text>Female</Text>
              </TouchableOpacity>
            </View>

            {/* height and weight */}
            <View style={styles._row}>
              <View>
                <Text style={styles._tab_heading}>HEIGHT</Text>
                <TextInput placeholder="5'6" placeholderTextColor='gray' style={styles._heightInput} />
              </View>

              <View>
                <Text style={styles._tab_heading}>WEIGHT</Text>
                <TextInput placeholder="5'6" placeholderTextColor='gray' style={styles._wightInput} />
              </View>
            </View>
            <TextInput />
          </View>

          <TouchableOpacity style={styles._saveBtn}>
            <Text style={styles._saveBtn_text}>SAVE</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1,
    padding: 15,
  },
  _head: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  _body: {
    flex: 3,
  },
  _circle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 130,
    width: 130,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 100,
    marginRight: 10,
    backgroundColor: '#9abfbe',
    opacity:0.5,
  },

  _badge: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 100,
    marginRight: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  _tab_heading: {
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: '#000',
    marginTop: 10,
    // padding: 10,
  },
  _textInput: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    //   height:30,
    padding: 8,
    color:'#000'
  },
  _radioBtn: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -5,
    marginRight: 5,
    borderColor: 'grey',
  },
  _optionNum: {
    fontWeight: 'bold',
    color: 'white',
    height: 12,
    width: 12,
    borderRadius: 100,
    backgroundColor: 'white',
  },
  _radioView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    padding: 10,
    borderColor: 'grey',
  },
  _row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  _wightInput: {
    borderColor: 'grey',
    width: 140,
    padding: 8,
    borderBottomWidth: 1,
    color:'gray'
  },
  _heightInput: {
    borderColor: 'grey',
    width: 140,
    padding: 8,
    flex: 1,
    borderBottomWidth: 1,
    color:'gray'
  },
  _saveBtn: {
    backgroundColor: '#f23535',
    borderRadius: 5,
  },
  _saveBtn_text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 12,
    padding: 20,
  },
  uploadAvatar: {
    borderRadius: 100,
    height: 130,
    width: 130,
    position: 'relative',
    borderWidth: 2,
    position: 'relative',
    borderColor: 'grey',
  },
});
