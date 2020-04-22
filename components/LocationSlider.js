import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CardSilder from 'react-native-cards-slider';
import LinearGradient from 'react-native-linear-gradient';





export default class LocationSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <>
                <View style={{marginTop:30}}>
                <Text style={styles.locationHeader}>SEARCH BY LOCATION</Text>
                
                    </View>
                    <CardSilder>
                    <View style={{flexDirection:'row',flex:1}}>
                    <View style={styles.innerCard}>
                    <Image style={styles.locationImage} source={{ url: 'https://img.traveltriangle.com/blog/wp-content/uploads/2019/11/Hill-Stations-Near-Pune-cover_15th-Nov1.jpg' }} />
                    <Text style={styles.textLocation}>Pune</Text>          
                   </View>
                    <View style={styles.innerCard}>
                    <Image style={styles.locationImage} source={{ url: 'https://r1imghtlak.mmtcdn.com/6da2b93e487511e8b169025f77df004f.jpg?&output-quality=75&downsize=520:350&crop=520:350;2,0&output-format=jpg' }} />
                    <Text style={styles.textLocation}>Mumbai</Text>          
                   </View>
                    <View style={styles.innerCard}>
                    <Image style={styles.locationImage} source={{ url: 'https://i.pinimg.com/originals/d4/a0/fa/d4a0fac6c8f2c9d6d495488794e9efa9.jpg' }} />
                    <Text style={styles.textLocation}>Chandigarh</Text>          
                   </View>
                    <View style={styles.innerCard}>
                    <Image style={styles.locationImage} source={{ url: 'https://st.indiarailinfo.com/kjfdsuiemjvcya23/0/6/1/5/4206615/0/img201901241154351908228.jpg' }} />
                    <Text style={styles.textLocation}>Ghaziabad</Text>          
                   </View>
                    <View style={styles.innerCard}>
                    <Image style={styles.locationImage} source={{ url: 'https://www.holidify.com/images/cmsuploads/compressed/Delhi_Red_fort_20190312151147.jpg' }} />
                    <Text style={styles.textLocation}>Delhi</Text>          
                   </View>
                 
                   
                    </View>
                   
                    </CardSilder>
            </>

             

        );
    }
}

const styles = StyleSheet.create({

 
    innerCard: {
      
        width: 60,
        height:60,
        backgroundColor: 'white',
        marginTop: 10,
        marginHorizontal:5,
        borderRadius: 50,
        shadowColor: "#D9D0EE",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: .95,
        shadowRadius: 3.84,
        elevation: 25,

    }, 
    textLocation:{
        textAlign:'center',
        marginTop:8,
        fontSize:11,
        fontWeight:'600',
        color:'white',
        fontFamily: 'Gill Sans',

    },
    locationHeader:{
        marginLeft: 20,
        marginTop: 10,
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Gill Sans',

    },
    locationImage:{ 
        resizeMode: 'cover',
        width: 60, 
        height: 60,
        borderRadius: 50,
        borderColor: '#68666C', 
        borderWidth: 1.6,}

})


