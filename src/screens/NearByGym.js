import React from 'react';
import {Text, View, StyleSheet, ScrollView, Button} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GymCard, Header} from './../components';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class NearByGym extends React.Component {
  constructor() {
    super();
    this.state = {
      data: false,
    };
  }
  componentDidMount() {
    return fetch('https://fitbook.fit/fitbookadmin/api_v1/home.php', {
      method: 'POST',
    })
      .then(response => response.json())
      .then(res => {
        this.setState({
          data: res.slider,
        });
      });
  }
  render() {
    let {data} = this.state;
    return (
      <View style={{height: windowHeight}}>
        <View style={styles._subHeader}>
          <View style={styles._tab}>
            <FontAwesome name="history" style={{fontSize: 16}} />
            <Text style={styles._text}>PAST WORKOUT</Text>
          </View>

          <View style={styles._tab}>
            <FontAwesome name="heart-o" style={{fontSize: 16}} />
            <Text style={styles._text}>FAVOURITES</Text>
          </View>

          <View style={styles._tab}>
            <MaterialIcons name="filter-list" style={{fontSize: 16}} />
            <Text style={styles._text}>FILTER</Text>
          </View>
        </View>
        {/* <<<<<<<<<<< GYM LIST >>>>>>>>>>>> */}
        <LinearGradient colors={['#f23535', '#48CCF7']} style={{flex: 1}}>
          <ScrollView>
            {data
              ? data.map((val, i) => (
                  <GymCard
                    data={val}
                    key={i}
                    navigation={this.props.navigation}
                  />
                ))
              : null}
          </ScrollView>
        </LinearGradient>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _subHeader: {
    // flex: 1,
    flexDirection: 'row',
  },
  _tab: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingRight: 10,
    padding: 2,
    opacity: 0.6,
    borderBottomWidth: 1,
    borderColor: 'grey',
    marginLeft: 20,
  },
  _text: {
    flex: 1,
    flexWrap: 'wrap',
    fontWeight: 'bold',
    fontFamily: 'Gill Sans',
    paddingLeft: 5,
    fontSize: 10,
  },
});
