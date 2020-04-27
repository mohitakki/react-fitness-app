import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {widthToDp,heightToDp} from '../config/responsive'

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
      <View style={{flex: 1, marginTop: widthToDp(8)}}>
        <Text style={styles.textPhone}>+91 9876543210</Text>
        <Text
          style={{
            textAlign: 'center',
            color: '#979595',
            fontSize: widthToDp(4),
            marginTop: widthToDp(2),
          }}>
          Are you sure, you want to send OTP?
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: widthToDp(8),
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
    fontSize: widthToDp(6),
    fontWeight: '600',
    color: 'black',
  },

  btnEdit: {
    backgroundColor: '#9B9899',
    width: widthToDp(43),
    marginHorizontal: widthToDp(2),
    height: widthToDp(12),
    borderRadius: 5,
    borderColor: '#f1f1f1',
    borderWidth: 0.5,
  },

  btnProceed: {
    backgroundColor: '#F95225',
    width: widthToDp(43),
    height: widthToDp(12),
    borderRadius: 5,
    borderColor: '#f1f1f1',
    borderWidth: 0.5,
  },

  textEdit: {
    justifyContent: 'center',
    textAlign: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    fontSize: widthToDp(4),
    fontFamily: 'Gill Sans',
    fontWeight: 'bold',
    marginVertical: widthToDp(3),
    color: 'white',
  },

  textProceed: {
    justifyContent: 'center',
    textAlign: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    fontSize: widthToDp(4),
    fontFamily: 'Gill Sans',
    fontWeight: 'bold',
    marginVertical: widthToDp(3),
    color: 'white',
  },
});
