import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Button,

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import CardSilder from 'react-native-cards-slider';
import {
  Slider,
  BasicCard,
  ViewShopCard,
  BlogSlider,
  Header,
  Subscription
} from './../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {getSlider} from '../services/home';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data : []
    };
  }

  componentDidMount(){
    return fetch ('https://fitbook.fit/fitbookadmin/api_v1/home.php', {
      method: 'POST'
    })
    .then((response) => response.json())
    .then((res) => {
       
      this.setState({
        isLoading:false,
        data:res.slider,
      })
    })
  }


// logout= async ()=>{
//   try {
//     await AsyncStorage.removeItem('token');
//     const getItem = await AsyncStorage.getItem('token');
//     //This works and it is cleared, but when the app is relaunched or refreshed the value comes back
//     console.log('Should not be stored:', getItem);
//   } catch (err) {
//     throw new Error(err);
//   }
//   this.props.navigation.navigate('Loading');
//   await logout();
//   }

  viewGym=()=>{
   this.props.navigation.navigate('ViewAllGym')
  }
  

  

  render() {
   
    return (
      <>
        <StatusBar translucent backgroundColor="transparent"/>
        <LinearGradient colors={['#f23535', '#48CCF7']} style={{flex: 1}}>
            {/* near by GYMS */}
            <Header navigation={this.props.navigation} />
          <ScrollView>
            <Text style={styles._nearBy}>NEARBY GYMS</Text>
            <CardSilder style={{}}>
            <FlatList
            data={this.state.data}
            renderItem={({item})=> {
              return <Slider data={item} />
            }}
      
        />
        

        </CardSilder>
            
            <TouchableOpacity onPress={()=>this.viewGym()}>
            <Text style={styles.viewAll}>View all</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles._product_card}
              activeOpacity={0.9}
              onPress={() => this.props.navigation.navigate('Subscription')}>
              <Subscription />
              
            </TouchableOpacity>

            <View style={styles._basicCard}>
              <BasicCard props={this.props.navigation} />
              <BasicCard props={this.props.navigation} />
            </View>

            {/* PRODUCT CARD */}
            <Text style={styles._fitShop}>FITSHOP</Text>
            <TouchableOpacity
              style={styles._product_card}
              activeOpacity={0.9}
              onPress={() => this.props.navigation.navigate('Supplement')}>
              <ViewShopCard />
              <Text style={styles._viewshop}>
                VIEW SHOP
                <AntDesign
                  name="rightcircle"
                  color="white"
                  style={styles._viewBtn}
                />
              </Text>
            </TouchableOpacity>
            {/* <Button title="Logout" onPress={()=>this.logout()} /> */}
            {/* BLOG SLIDER */}
            <View style={styles._blog_slider}>
              <Text style={styles._fitShop}>MOTIVATION </Text>
              <BlogSlider />
              <TouchableOpacity
                style={styles._product_card}
                activeOpacity={0.9}
                onPress={() => this.props.navigation.navigate('blog')}>
                <Text style={styles._viewshop}>
                  VIEW BLOG
                  <AntDesign
                    name="rightcircle"
                    color="white"
                    style={styles._viewBtn}
                    
                  />
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </LinearGradient>
      </>
    );
  }
}

function App() {
  return <View />;
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  header: {
    justifyContent: 'space-between',
    marginHorizontal: 30,
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
  viewAll:{
    color:'white',
    textAlign:'right',
    marginRight:20,
    marginTop:-35,
    fontWeight: 'bold',
    fontFamily: 'Gill Sans',
    letterSpacing: 1,
    alignItems: 'center',
  },
  _basicCard: {
    marginTop: 0,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
  },
  _nearBy: {
    marginLeft: 20,
    marginTop: 20,
    letterSpacing: 1,
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Gill Sans',
  },
  _fitShop: {
    marginLeft: 20,
    marginTop: 30,
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Gill Sans',
    letterSpacing: 3,
  },
  _viewshop: {
    color: 'white',
    textAlign: 'right',
    width: '90%',
    letterSpacing: 1,
    marginTop: 4,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Gill Sans',
  },
  _product_card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
    fontFamily: 'Gill Sans',
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
    fontSize: 16,
    fontFamily: 'Gill Sans',
  },
});
