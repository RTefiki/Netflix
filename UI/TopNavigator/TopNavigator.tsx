import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import Dropdown from '../page/dropdown';
import SearchModal from '../page/search';
import MenuModal from './menu';

const TopNavigator: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>("RINOR");
  const [searchVisible, setSearchVisible] = useState<boolean>(false);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const openSearch = () => {
    setSearchVisible(true);
  };

  const closeSearch = () => {
    setSearchVisible(false);
  };

  const openMenu = () => {
    setMenuVisible(true);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={require('./../../assets/profil.png')} style={styles.profil} />
        <Dropdown selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={openSearch} style={styles.icon}>
          <FontAwesome name="search" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={openMenu} style={styles.icon}>
          <MaterialIcons name="menu" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <SearchModal visible={searchVisible} onClose={closeSearch} />
      <MenuModal visible={menuVisible} onClose={closeMenu} />
    </View>
  );
};

export default TopNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'black',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profil: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 10,
  },
});
