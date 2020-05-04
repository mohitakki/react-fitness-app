import React from 'react';
import {Text, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {GymCard} from './../components';
import LinearGradient from 'react-native-linear-gradient';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default class ViewStudios extends React.Component {
  constructor() {
    super();
    this.state = {
      data: false,
    };
  }
  componentDidMount() {
    fetch('https://fitbook.fit/fitbookadmin/api_v1/home.php', {
      method: 'POST',
    })
      .then(response => response.json())
      .then(res => {
        this.setState({
          data: res.slider,
        });
      });

    this.props.navigation.setOptions({
      headerRight: () => (
        <View style={styles._headerLeft}>
          <View style={styles._labelView}>
            <View style={styles._label}>
              <Text style={styles.gymName}>
                {' '}
                Gym in {this.props.route.params.city}
              </Text>
            </View>
          </View>
        </View>
      ),
    });
  }

  render() {
    let {data} = this.state;
    return (
      <>
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
        <ScrollView style={{flex: 1}}>
          <LinearGradient
            colors={['#f23535', '#48CCF7']}
            style={{height: windowHeight}}>
            {data
              ? data.map((val, i) => (
                  <GymCard
                    data={val}
                    key={i}
                    navigation={this.props.navigation}
                  />
                ))
              : null}
          </LinearGradient>
        </ScrollView>
      </>
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
  _headerLeft: {
    width: windowWidth - 140,
  },
  gymName: {
    color: 'white',
    fontWeight: 'bold',
  },
});
