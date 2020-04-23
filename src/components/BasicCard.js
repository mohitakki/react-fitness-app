import React from 'react';
import {View, Text, StyleSheet,Image, ImageBackground,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class BasicCard extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles._Card} onPress={()=>alert()} activeOpacity={0.9} onPress={()=>this.props.props.navigate("FITCOACH")}>
        <LinearGradient
          colors={['#4190ea', '#4190ea', '#6c4f93']}
          style={{flex: 1,borderRadius:6,paddingBottom:10}}>
        <Image
            source={{
              uri:
                'https://i.pinimg.com/originals/79/60/26/796026dd0490f87f5a18ffe365c01b0d.jpg',
            }} 
            style={styles._image}/>
            <View style={styles._basicCard}>
              <Text style={styles._title}>FITCOACH</Text>
              <Text style={styles._title_btn}>FP BASIC</Text>
            </View>
            <View style={styles._body}>
              <Text style={styles.body_heading}>INTELLIGENT CO..</Text>
              <Text style={styles._description}>
                Revolutionary AI enable training plan that evoive and edopt to your needst
              </Text>
              </View>
         
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

let styles = StyleSheet.create({
  _Card: {
    height: 200,
    width: '44%',
    shadowColor: "#f23535",
    shadowOffset: {
      width: 0.5,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 15,
    
  },
  _image: {
   flex:3,
    // resizeMode: 'cover',
    // justifyContent: 'center',
    opacity: 0.7,
    height: 130,
    borderTopRightRadius:5,
    borderTopLeftRadius:5
  },
  _basicCard: {
    flex:1,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 10,
  },
  _title: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Gill Sans',
  },
  _title_btn: {
    fontSize: 10,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Gill Sans',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    width: 60,
    textAlign: 'center',
    alignItems: 'center',
  },
  _body: {
    height: 100,
    marginTop:10,
    padding:15
  },
  body_heading:{
    color:"white",
    fontWeight:"bold",
    fontSize:13,
    letterSpacing:1
  },
  _description:{
    color:"white",
    paddingTop:2,
    paddingBottom:5
  }
});
