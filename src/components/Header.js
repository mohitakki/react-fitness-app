import React from 'react'
export default class Header extends React.Component{
    render(){
        return(
            <View style={{backgroundColor: 'yellow'}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 20,
                marginBottom: 20,
                borderColor: 'red',
                borderWidth: 1,
              }}>
              <Text
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: 'red',
                  borderWidth: 1,
                }}>
                Left with long text
              </Text>
              <Text
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: 'red',
                  borderWidth: 1,
                }}>
                Title
              </Text>
              <Text
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: 'red',
                  borderWidth: 1,
                }}>
                Right
              </Text>
            </View>
          </View>
        )
    }
}