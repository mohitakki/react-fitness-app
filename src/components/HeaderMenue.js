import React from 'react';

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class HederMenue extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      _menu: null,
    };
  }

  setMenuRef = ref => {
    this.state._menu = ref;
  };

  hideMenu = value => {
    this.props.getItem(value);
    this.state._menu.hide();
    if (value === 'FITPRIME') {
      this.props.props.navigation.navigate('fitprime');
    }
  };

  showMenu = () => {
    this.state._menu.show();
  };

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Menu
          ref={this.setMenuRef}
          style={{marginTop: 30}}
          button={
            <TouchableOpacity onPress={() => this.showMenu()}>
              <Icon name="clipboard-list" size={20} color="white" />
            </TouchableOpacity>
          }>
          <MenuItem
            onPress={() => this.hideMenu('FITPASS')}
            style={styles.listItem}>
            <Text style={{fontWeight: '800'}}>FITPASS</Text>
          </MenuItem>
          <MenuDivider />
          <MenuItem
            onPress={() => this.hideMenu('FITFEAST')}
            style={styles.listItem}>
            <Text>FITFEAST</Text>
          </MenuItem>
          <MenuDivider />

          <MenuItem
            onPress={() => this.hideMenu('FITCOACH')}
            style={styles.listItem}>
            <Text>FITCOACH</Text>
          </MenuItem>
          <MenuDivider />

          <MenuItem
            onPress={() => this.hideMenu('FITPRIME')}
            style={styles.listItem}>
            <Text>FITPRIME</Text>
          </MenuItem>
        </Menu>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  listItem: {
    height: 35,
  },
});
