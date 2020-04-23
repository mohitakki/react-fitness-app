import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

class MobileDiologBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  edit = () => {
    alert('Here, you can edit your mobile number');
  };

  proceed = () => {
    this.props.onpress();
    this.props.props.navigation.navigate('bottombar');
  };

  render() {
    return (
      <View style={{flex: 1, marginTop: 60}}>
        <Text style={styles.textPhone}>+91 9876543210</Text>
        <Text
          style={{
            textAlign: 'center',
            color: '#979595',
            marginTop: 10,
          }}>
          Are you sure, you want to send OTP?
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity style={styles.btnEdit} onPress={() => this.edit()}>
            <Text style={styles.textEdit}>EDIT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnProceed}
            onPress={() => this.proceed()}>
            <Text style={styles.textProceed}>PROCEED</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default MobileDiologBox;

const styles = StyleSheet.create({
  textPhone: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
    color: 'black',
  },

  btnEdit: {
    backgroundColor: '#9B9899',
    width: 150,
    marginHorizontal: 10,
    height: 50,
    borderRadius: 5,
    borderColor: '#f1f1f1',
    borderWidth: 0.5,
  },

  btnProceed: {
    backgroundColor: '#F95225',
    width: 150,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
    borderColor: '#f1f1f1',
    borderWidth: 0.5,
  },

  textEdit: {
    justifyContent: 'center',
    textAlign: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Gill Sans',
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'white',
  },

  textProceed: {
    justifyContent: 'center',
    textAlign: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Gill Sans',
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'white',
  },
});
