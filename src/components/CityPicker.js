import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class MobileDiologBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  edit = () => {
    alert('Here, you can edit your mobile number');
  };

  selectCity = name => {
    this.props.cityName(name);
    this.props.onpress();
  };

  render() {
    return (
      <View style={styles.city_cotainer}>
        <View style={styles._heading}>
          <Text style={styles._heading_txt}>SELECT CITY</Text>
        </View>
        <TouchableOpacity onPress={() => this.selectCity('Ahmedabad')}>
          <Text style={styles._cities_name}>Ahmedabad</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.selectCity('Bengaluru')}>
          <Text style={styles._cities_name}>Bengaluru</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.selectCity('Chandigarh')}>
          <Text style={styles._cities_name}>Chandigarh</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.selectCity('Chennai')}>
          <Text style={styles._cities_name}>Chennai</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.selectCity('Delhi')}>
          <Text style={styles._cities_name}>Delhi</Text>
        </TouchableOpacity>
        <Text style={styles._cities_name}>Faridabad</Text>
        <TouchableOpacity onPress={() => this.selectCity('Ghaziabad')}>
          <Text style={styles._cities_name}>Ghaziabad</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.selectCity('Gurugram')}>
          <Text style={styles._cities_name}>Gurugram</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.selectCity('Hyderabad')}>
          <Text style={styles._cities_name}>Hyderabad</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.selectCity('Jaipur')}>
          <Text style={styles._cities_name}>Jaipur</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.selectCity('Kolkata')}>
          <Text style={styles._cities_name}>Kolkata</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.selectCity('Mumbai')}>
          <Text style={styles._cities_name}>Mumbai</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.selectCity('Noida')}>
          <Text style={styles._cities_name}>Noida</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.selectCity('Pune')}>
          <Text style={styles._cities_name}>Pune</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default MobileDiologBox;

const styles = StyleSheet.create({
  city_cotainer: {
    flex: 1,
  },
  _cities_name: {
    width: '100%',
    padding: 5,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#f2eded',
    paddingLeft: 15,
    paddingTop: 8,
  },
  _heading: {
    backgroundColor: '#f2eded',
    padding: 8,
    paddingLeft: 15,
  },
  _heading_txt: {
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: 'grey',
  },
});
