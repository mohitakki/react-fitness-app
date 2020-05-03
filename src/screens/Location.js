import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import GetLocation from 'react-native-get-location';
import MapView,{Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {widthToDp} from '../config/responsive';

export default class Location extends Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: 24.849574964722336,
        latitudeDelta: 0.02,
        longitude: 67.04823151230812,
        longitudeDelta: 0.02,
      },
      nearby:[]
    };
  }

  async componentDidMount() {
    console.log('calling');

    await this.getCurrentLocation();
  }

  getlocationradius = async () => {
    fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.region.latitude},${this.state.region.longitude}&radius=1500&type=gym&key=AIzaSyAvMJQfSi7KEWnICftMup-QuqjEcSIGgp0`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(res => {
        console.log(res,'responce')
        if (res.results == []){
          alert('No Gyms Found 10km Radius')
        }
        else{
          this.setState({nearby:res.results})

        }
      });
  };

  getCurrentLocation = async () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        console.log({location});
        
        this.setState({
          region: {
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          },
        },()=>{this.getlocationradius()});
      })
      .catch(error => {
        const {code, message} = error;
        console.log(code, message)
        // alert('Enable the Location');
      });
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <MapView
          style={{flex: 1}}
          showsUserLocation={true}
          initialRegion={this.state.region}
        >
         
                { this.state.nearby!=[] ? this.state.nearby.map(marker => (
               
                  
                   
                    <MapView.Marker
                    key={Math.random()}
                    coordinate={{
                      latitude: marker.geometry.location.lat,
                      longitude:  marker.geometry.location.lng,
                    }}
                    title={marker.name}
                  
                    // description={marker.description}
                  />
                 
                 
                )): null}

          </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  header: {
    justifyContent: 'space-between',
    marginHorizontal: widthToDp(10),
    marginVertical: 50,
    flexDirection: 'row',
  },
  headerImage: {
    width: 40,
    height: 40,
    borderColor: 'white',
    borderRadius: 50,
    borderWidth: 0.5,
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
  _basicCard: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    marginTop: widthToDp(5),
  },
  _nearBy: {
    marginLeft: widthToDp(5),
    marginTop: widthToDp(3),
    letterSpacing: 1,
    fontSize: widthToDp(4),
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Gill Sans',
  },
  _fitShop: {
    marginLeft: widthToDp(5),
    marginTop: widthToDp(5),
    fontSize: widthToDp(4),
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Gill Sans',
    letterSpacing: 1,
  },
  _viewshop: {
    color: 'white',
    textAlign: 'right',
    width: widthToDp(95),
    marginTop: widthToDp(1),
    fontWeight: '600',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Gill Sans',
  },
  _product_card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: widthToDp(7),
    fontFamily: 'Gill Sans',
    height: widthToDp(25),
  },
  _blog_slider: {
    fontFamily: 'Gill Sans',
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
  sliderStyle: {
    paddingHorizontal: 40,
  },
});
