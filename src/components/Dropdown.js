import React from 'react';
import DropDownItem from 'react-native-drop-down-item';
import {Text, View, ScrollView, StyleSheet, Vibration} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Dropdown extends React.Component {
  render() {
    this.state = {
      contents: [
        {
          title: 'Title 1',
          body: 'Hi. I love this component. What do you think?',
        },
      ],
    };
    return (
      <>
        <View style={styles.container}>
            <DropDownItem
              animated={false}
              style={styles.dropDownItem}
              contentVisible={false}
              visibleImage={false}
              header={
                <View style={styles._header}>
                  <Text
                    style={{
                      fontSize: 30,
                      color: '#21d36c',
                      fontWeight: 'bold',
                    }}>
                    <Ionicons name="ios-star" size={30} color={'#f5a623'} /> 5.0
                  </Text>

                  <Text style={{fontSize: 17}}>
                    <Text style={{color: '#f5a623'}}>1</Text> Reviews{' '}
                    <Ionicons name="ios-arrow-down" />
                  </Text>
                </View>
              }>
                  <View style={styles._reviewList}><Text> 1<Ionicons name="ios-star" size={18} color={'#f5a623'} style={styles._icons} /></Text><Text>0</Text></View>
                  <View style={styles._reviewList}><Text> 2<Ionicons name="ios-star" size={18} color={'#f5a623'} style={styles._icons} /></Text><Text>0</Text></View>
                  <View style={styles._reviewList}><Text> 3<Ionicons name="ios-star" size={18} color={'#f5a623'}style={styles._icons} /></Text><Text>0</Text></View>
                  <View style={styles._reviewList}><Text> 4<Ionicons name="ios-star" size={18} color={'#f5a623'}style={styles._icons} /></Text><Text>0</Text></View>
                  <View style={styles._reviewList}><Text> 5<Ionicons name="ios-star" size={18} color={'#f5a623'}style={styles._icons} /></Text><Text>1</Text></View>
                 

            </DropDownItem>

        </View>
      </>
    );
  }
}

let styles = StyleSheet.create({
  _header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  _icons:{
      paddingLeft:15
  },
  _reviewList:{
      flex:1,
      borderBottomWidth:1,
      flexDirection:"row",
      borderColor:"grey",
      width:320,
      marginBottom:4,
      padding:4,
      justifyContent:"space-between"
  },
 
});
