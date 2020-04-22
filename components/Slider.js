import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CardSilder from 'react-native-cards-slider';
import LinearGradient from 'react-native-linear-gradient';





export default class Slider extends Component {
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
                    marginTop: 10,
                    fontSize: 18,
                    color: 'white',
                    fontWeight: 'bold',
                    fontFamily: 'Gill Sans',

                }}>NEARBY GYMS</Text>
                <CardSilder style={{ marginTop: 10 }}>
                    <View style={styles.cardSlider}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.innerCard}>
                                <Image style={{ resizeMode: 'cover', width: 100, height: 100, borderRadius: 5, borderColor: '#68666C', borderWidth: 1.6 }} source={{ url: 'https://cdn1.designhill.com/cache/uploads/pagefile/1552986918-14630458015c90b326ac8835-91581601-500x500.jpg?ver=2.10.80' }} />

                            </View>
                            <View>
                                <Text style={styles.gymName}>The Fitness Gym</Text>
                                <Text style={styles.gymAddress}>Shalimar Garden, Ghaziabad</Text>
                                <View style={{ width: 170, height: 25, marginHorizontal: 20, backgroundColor: '#D9D0EE', borderRadius: 5, marginTop: 5 }}>
                                </View>
                                <View style={{
                                    flexDirection:'row',
                                    justifyContent:'space-between',
                                    marginHorizontal:20,
                                    marginTop:20}}>
                                <Text style={styles.timing}>06:00 to 22:00</Text>
                                <Text style={styles.timing}>.89km</Text>

                                </View>
                            </View>
                        </View>

                        <View style={{ height: 10, flex: 2, backgroundColor: '#D9D0EE', marginTop: 20 }}>


                        </View>

                    </View>
                    <View style={styles.cardSlider}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.innerCard}>
                                <Image style={{ resizeMode: 'cover', width: 100, height: 100, borderRadius: 5, borderColor: '#68666C', borderWidth: 1.6 }} source={{ url: 'https://cdn1.designhill.com/cache/uploads/pagefile/1552986918-14630458015c90b326ac8835-91581601-500x500.jpg?ver=2.10.80' }} />

                            </View>
                            <View>
                                <Text style={styles.gymName}>The Fitness Gym</Text>
                                <Text style={styles.gymAddress}>Shalimar Garden, Ghaziabad</Text>
                                <View style={{ width: 170, height: 25, marginHorizontal: 20, backgroundColor: '#D9D0EE', borderRadius: 5, marginTop: 5 }}>
                                </View>
                                <View style={{
                                    flexDirection:'row',
                                    justifyContent:'space-between',
                                    marginHorizontal:20,
                                    marginTop:20}}>
                                <Text style={styles.timing}>06:00 to 22:00</Text>
                                <Text style={styles.timing}>.89km</Text>

                                </View>
                            </View>
                        </View>

                        <View style={{ height: 10, flex: 2, backgroundColor: '#D9D0EE', marginTop: 20 }}>


                        </View>

                    </View>
                    <View style={styles.cardSlider}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.innerCard}>
                                <Image style={{ resizeMode: 'cover', width: 100, height: 100, borderRadius: 5, borderColor: '#68666C', borderWidth: 1.6 }} source={{ url: 'https://cdn1.designhill.com/cache/uploads/pagefile/1552986918-14630458015c90b326ac8835-91581601-500x500.jpg?ver=2.10.80' }} />

                            </View>
                            <View>
                                <Text style={styles.gymName}>The Fitness Gym</Text>
                                <Text style={styles.gymAddress}>Shalimar Garden, Ghaziabad</Text>
                                <View style={{ width: 170, height: 25, marginHorizontal: 20, backgroundColor: '#D9D0EE', borderRadius: 5, marginTop: 5 }}>
                                </View>
                                <View style={{
                                    flexDirection:'row',
                                    justifyContent:'space-between',
                                    marginHorizontal:20,
                                    marginTop:20}}>
                                <Text style={styles.timing}>06:00 to 22:00</Text>
                                <Text style={styles.timing}>.89km</Text>

                                </View>
                            </View>
                        </View>

                        <View style={{ height: 10, flex: 2, backgroundColor: '#D9D0EE', marginTop: 20 }}>


                        </View>

                    </View>
                    <View style={styles.cardSlider}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.innerCard}>
                                <Image style={{ resizeMode: 'cover', width: 100, height: 100, borderRadius: 5, borderColor: '#68666C', borderWidth: 1.6 }} source={{ url: 'https://cdn1.designhill.com/cache/uploads/pagefile/1552986918-14630458015c90b326ac8835-91581601-500x500.jpg?ver=2.10.80' }} />

                            </View>
                            <View>
                                <Text style={styles.gymName}>The Fitness Gym</Text>
                                <Text style={styles.gymAddress}>Shalimar Garden, Ghaziabad</Text>
                                <View style={{ width: 170, height: 25, marginHorizontal: 20, backgroundColor: '#D9D0EE', borderRadius: 5, marginTop: 5 }}>
                                </View>
                                <View style={{
                                    flexDirection:'row',
                                    justifyContent:'space-between',
                                    marginHorizontal:20,
                                    marginTop:20}}>
                                <Text style={styles.timing}>06:00 to 22:00</Text>
                                <Text style={styles.timing}>.89km</Text>

                                </View>
                            </View>
                        </View>

                        <View style={{ height: 10, flex: 2, backgroundColor: '#D9D0EE', marginTop: 20 }}>


                        </View>

                    </View>
                    <Image style={{ height: 170, borderRadius: 10, borderColor: 'white', borderWidth: .8 }} source={{ url: 'https://cdn1.designhill.com/cache/uploads/pagefile/1552986918-14630458015c90b326ac8835-91581601-500x500.jpg?ver=2.10.80' }} />
                    <Image style={{ height: 170, borderRadius: 10, borderColor: 'white', borderWidth: .8 }} source={{ url: 'https://cdn.lynda.com/course/734634/734634-637199682524857000-16x9.jpg' }} />
                    <Image style={{ height: 170, borderRadius: 10, borderColor: 'white', borderWidth: .8 }} source={{ url: 'https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg' }} />
                    <Image style={{ height: 170, borderRadius: 10, borderColor: 'white', borderWidth: .8 }} source={{ url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-skincare-products-glowing-skin-1561735403.png?crop=0.984xw:0.984xh;0,0&resize=1200:*' }} />
                    <Image style={{ height: 170, borderRadius: 10, borderColor: 'white', borderWidth: .8 }} source={{ url: 'https://scstylecaster.files.wordpress.com/2018/11/old-school-products.jpg' }} />
                </CardSilder>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    cardSlider: {
        height: 170,
        borderRadius: 10,
        borderColor: '#D9D0EE',
        borderWidth: .8,
        backgroundColor: '#fbfbfb',
        borderRadius: 5,
        shadowColor: "#059FF4",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: .95,
        shadowRadius: 3.84,
        elevation: 25,
    },
    innerCard: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        marginTop: 10,
        marginLeft: 20,
        borderRadius: 5,
        shadowColor: "#D9D0EE",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: .95,
        shadowRadius: 3.84,
        elevation: 25,

    }, gymName: {
        marginTop: 10,
        marginLeft: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
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


