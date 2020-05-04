import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  CityPicker,
  Header,
  FitPass,
  FitFeast,
  Fitcoach,
} from './../components';
import {widthToDp, heightToDp} from '../config/responsive';

const windowWidth = Dimensions.get('window').width;

export default class Subscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'Delhi',
      menueItem: 'FITPASS',
    };
  }

  selectCity = name => {
    this.setState({city: name});
  };

  drowpdown = () => {
    this.RBSheet.open();
  };

  menueItem = item => {
    this.setState({menueItem: item});
  };

  render() {
    let {menueItem} = this.state;
    return (
      <>
        <Header
          props={this.props}
          dropdown={this.drowpdown}
          city={this.state.city}
          selectedItem={this.menueItem}
          headerLeft={true}
        />
        <View>
          <RBSheet
            ref={ref => {
              this.RBSheet = ref;
            }}
            height={widthToDp(137)}
            duration={250}
            customStyles={{
              container: {
                justifyContent: 'center',
              },
            }}>
            <CityPicker
              props={this.props}
              onpress={() => this.RBSheet.close()}
              cityName={this.selectCity}
            />
          </RBSheet>
        </View>

        {menueItem === 'FITPASS' ? <FitPass navigation={this.props.navigation} /> : null}
        {menueItem === 'FITFEAST' ? <FitFeast navigation={this.props.navigation} /> : null}
        {menueItem === 'FITCOACH' ? <Fitcoach navigation={this.props.navigation} /> : null}
      </>
    );
  }
}

let styles = StyleSheet.create({
  sentButon: {
    backgroundColor: 'white',
    width: widthToDp(80),
    height: widthToDp(13),
    borderRadius: 5,
    marginTop: widthToDp(5),
    shadowColor: '#48CCF7',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 10,

    elevation: 15,
  },
  sentText: {
    textAlign: 'center',
    fontSize: widthToDp(5),
    marginTop: widthToDp(3),
    fontWeight: '700',
    color: '#F23873',
  },
  _heading: {
    borderBottomWidth: 1.5,
    flexDirection: 'row',
    padding: 15,
    marginTop: 10,
    paddingBottom: 0,
    borderColor: '#f23535',
  },
  _tab: {
    backgroundColor: '#f23535',
    padding: 4,
    color: 'white',
    fontWeight: 'bold',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    fontSize: 10,
    letterSpacing: 2,
  },
  _title: {
    fontWeight: 'bold',
    paddingLeft: 15,
  },
  _detailSection: {
    flex: 1,
  },
  _li: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    paddingRight: 15,
    paddingLeft: 15,
  },
  li_text: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    color: '#625684',
    fontFamily: 'Gill Sans',
    paddingLeft: 10,
  },
  viewAll: {
    color: 'white',
    textAlign: 'right',
    marginRight: widthToDp(5),
    fontWeight: '600',
    fontFamily: 'Gill Sans',
    letterSpacing: 1,
    alignItems: 'center',
    fontSize: widthToDp(3),
    marginTop: widthToDp(1),
  },
  _viewshop: {
    // color: 'white',
    textAlign: 'right',
    width: widthToDp(95),
    marginTop: widthToDp(1),
    fontWeight: '600',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Gill Sans',
    fontWeight: 'bold',
    fontSize: 13,
    paddingRight: 10,
    marginTop: 20,
  },
  _viewBtn: {
    height: 18,
    borderRadius: 100,
    fontWeight: 'bold',
    color: '#f23535',
    borderLeftWidth: 2,
    borderColor: 'white',
    fontSize: widthToDp(4),
    fontFamily: 'Gill Sans',
  },
  _instructions: {
    backgroundColor: '#e0d7d7',
    letterSpacing: 1,
    fontSize: 12,
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  _bottom_section: {
    width: windowWidth,
    // borderWidth:2,
    // position: 'absolute',
    // bottom: 0,
    height: 60,
  },

  total_price: {
    backgroundColor: '#bbdedd',
    // width: '47%',
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  _proceed: {
    backgroundColor: 'green',
    width: '47%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
