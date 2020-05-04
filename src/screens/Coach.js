import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {widthToDp} from '../config/responsive';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {PlanSlider, GreeingCard} from './../components';
export default class Coach extends React.Component {
  constructor() {
    super();
    this.state = {
      showPlan: false,
    };
  }

  componentDidMount() {
    this.setState({showPlan: true});
  }

  render() {
    let data = [
      {
        title: 'Shortcut To Shred',
        description:
          'Begin your weight loss by burning those calories and shedding your fat.',
        days: 2,
        weeks: 12,
        uri: 'https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg',
      },
      {
        title: 'The Flat Tyres',
        description: 'Shred that tummy to get a flat belly',
        days: 2,
        weeks: 12,
        uri: 'https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg',
      },
      {
        title: 'Power Abs',
        description:
          "Get yourself a pack of abs -2, 4, 6, 8, that's a descision you need to make",
        days: 2,
        weeks: 12,
        uri: 'https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg',
      },
      {
        title: 'All Must Go',
        description:
          'Burn those calories from all over your body. Witness your body change!',
        days: 3,
        weeks: 12,
        uri: 'https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg',
      },
      {
        title: 'Choose to Lose',
        description: 'Make your sweat the tears of your fat',
        days: 3,
        weeks: 12,
        uri: 'https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg',
      },
      {
        title: 'The Trimtones',
        description:
          'Burn away the fat and calories, and blast out your sex figure',
        days: 3,
        weeks: 12,
        uri: 'https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg',
      },
      {
        title: 'The Trimtones',
        description:
          'Burn away the fat and calories, and blast out your sex figure',
        days: 3,
        weeks: 12,
        uri: 'https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg',
      },
    ];

    return (
      <View style={styles._container}>
        {this.state.showPlan ? (
          <View style={styles._PlansView}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                Select Workout Plan
              </Text>
              <FontAwesome
                name="close"
                size={20}
                color="red"
                onPress={() => this.setState({showPlan: false})}
              />
            </View>
            <ScrollView>
              {data.map((val, i) => {
                return (
                  <ImageBackground
                    style={styles._postStyle}
                    source={{uri: val.uri}}>
                    <View>
                      <View style={styles._bodySection}>
                        <Text style={styles.card_heading}>{val.title}</Text>

                        <TouchableOpacity
                          style={styles._premiumBtn}
                          onPress={() => this.props.navigation.goBack()}>
                          <Text style={styles._btnTxt}>PREMIUM</Text>
                        </TouchableOpacity>
                      </View>
                      <Text style={styles._description}>{val.description}</Text>
                      <View style={styles._footerSection}>
                        <Text
                          style={{
                            fontSize: 12,
                            color: 'white',
                            fontWeight: 'bold',
                          }}>
                          {val.days} days in a week
                        </Text>

                        <Text
                          style={{
                            fontSize: 12,
                            color: 'white',
                            fontWeight: 'bold',
                          }}>
                          {val.weeks} weeks
                        </Text>
                      </View>
                    </View>
                  </ImageBackground>
                );
              })}
            </ScrollView>
          </View>
        ) : (
          <>
            <ScrollView style={{marginBottom: 200}}>
              <GreeingCard />
              <GreeingCard />
              <GreeingCard />
              <GreeingCard />
              <GreeingCard />
              <TouchableOpacity
                style={[
                  styles._planBtn,
                  {
                    borderRadius: 10,
                    borderBottomLeftRadius: 0,
                    borderWidth: 0,
                    backgroundColor: '#f23535',
                  },
                ]}
                onPress={() => this.setState({showPlan: true})}>
                <Text style={styles._planBtnText}>Please select plan</Text>
              </TouchableOpacity>
            </ScrollView>

            <View style={styles._slider}>
              <PlanSlider data={data} navigation={this.props.navigation} />
              <TouchableOpacity
                style={styles._planBtn}
                onPress={() => this.setState({showPlan: true})}>
                <Text style={styles._planBtnText}>Show me more plans</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: 'white',
  },
  _postStyle: {
    padding: 15,
    backgroundColor: 'grey',
    height: widthToDp(35),
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    resizeMode: 'cover',
    shadowColor: '#f23535',
    shadowOpacity: 0.5,
    elevation: 15,
    borderRadius: 0,
  },

  _heading: {
    color: 'white',
    padding: widthToDp(10),
  },
  _bodySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  _footerSection: {
    marginTop: 8,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  card_heading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  _description: {
    color: '#d6cdcd',
    fontWeight: 'bold',
    fontSize: 12,
    paddingTop: 10,
  },
  _price: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
  },
  _premiumBtn: {
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
    borderColor: 'white',
  },
  _btnTxt: {
    color: 'white',
  },
  _backgroundImg: {
    flex: 1,
  },
  _slider: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#ededed',
    paddingTop: 20,
  },
  _planBtn: {
    borderWidth: 1,
    borderRadius: 5,
    width: 150,
    marginLeft: 20,
    marginTop: 10,
    padding: 5,
    marginBottom: 5,
    backgroundColor: '#5593e0',
  },
  _planBtnText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  _PlansView: {
    backgroundColor: '#9da5a5',
    flex: 1,
    padding: 10,
  },
});
