import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CardSilder from 'react-native-cards-slider';
import LinearGradient from 'react-native-linear-gradient';





export default class ShopItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <View>
                <Text style={{
                    marginLeft: 20,
                    marginTop: 60,
                    fontSize: 18,
                    color: 'white',
                    fontWeight: 'bold',
                    fontFamily: 'Gill Sans',

                }}>SHOP NOW</Text>
                
                <CardSilder style={{flexDirection:'row', marginTop: 10 }}>
                    <View style={styles.cardSlider}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.innerCard}>
                                <Image style={styles.cardImage} source={{ url: 'https://images-na.ssl-images-amazon.com/images/I/811ZS9hEi1L._SX466_.jpg' }} />

                            </View>
                            <View>
                                <Text style={styles.gymName}>The Fitness Gym</Text>
                                <Text style={styles.gymAddress}>Whey Protein</Text>
                                <View style={{ width: 120, height: 35, alignSelf:'center', backgroundColor: '#D9D0EE', borderRadius: 5, marginTop: 5 }}>
                                <Text style={styles.gymName}>BUY NOW</Text>
                                </View>
                              
                            </View>
                        </View>

                       

                    </View>
                    <View style={styles.cardSlider}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.innerCard}>
                                <Image style={styles.cardImage} source={{ url: 'https://images-na.ssl-images-amazon.com/images/I/811ZS9hEi1L._SX466_.jpg' }} />

                            </View>
                            <View>
                                <Text style={styles.gymName}>The Fitness Gym</Text>
                                <Text style={styles.gymAddress}>Whey Protein</Text>
                                <View style={{ width: 120, height: 35, alignSelf:'center', backgroundColor: '#D9D0EE', borderRadius: 5, marginTop: 5 }}>
                                <Text style={styles.gymName}>BUY NOW</Text>
                                </View>
                              
                            </View>
                        </View>


                    </View>
                    
                     </CardSilder>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    cardSlider: {
        height: 250,
        width:200,
        borderRadius: 10,
        borderColor: '#D9D0EE',
        borderWidth: .8,
        backgroundColor: '#fbfbfb',
        borderRadius: 5,
        shadowColor: "#EA0706",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        marginHorizontal:10,
        shadowOpacity: .75,
        shadowRadius: 3.84,
        elevation: 5,
        
    },
    
    innerCard: {
        width: 130,
        height: 140,
        backgroundColor: 'white',
        alignSelf:'center',
        marginTop: 10,
        borderRadius: 5,
        shadowColor: "#D9D0EE",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: .95,
        shadowRadius: 3.84,
        elevation: 25,

    },
    cardImage:{
        resizeMode: 'cover',
        width: 130,
        height: 140,
        borderRadius: 5,
        borderColor: '#68666C', 
        borderWidth: 1.6,

       }, 
    gymName: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#F26E38',
        fontFamily: 'Gill Sans',
        textAlign: 'center'

    },
    gymAddress: {
        fontSize: 12,
        marginLeft: 20,
        color: '#68666C',
        textAlign: 'center',
        fontFamily: 'Gill Sans',

    },
    timing:{
        
        fontSize:14,
        fontWeight:'500',
        fontFamily: 'Gill Sans',
        color:'#F26E38'
    }
})


