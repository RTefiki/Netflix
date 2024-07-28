import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FadeInModal from './fadelModal';

const Dropdown: React.FC<{ selectedValue: string, setSelectedValue: (value: string) => void }> = ({ selectedValue, setSelectedValue }) => {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleSelection = (value: string) => {
    setSelectedValue(value);
    toggleDropdown();
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleDropdown}>
        <Text style={styles.dropdownText}>{selectedValue} ▼</Text>
      </TouchableOpacity>
      <FadeInModal visible={dropdownVisible} onClose={toggleDropdown}>
        <TouchableOpacity onPress={() => handleSelection('RINOR')}>
          <Text style={styles.option}>RINOR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelection('Adelina')}>
          <Text style={styles.option}>Adelina</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelection('Art')}>
          <Text style={styles.option}>Art</Text>
        </TouchableOpacity>
      </FadeInModal>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownText: {
    color: 'white',
    fontSize: 18,
  },
  option: {
    padding: 10,
    fontSize: 18,
    color: 'black',
  },
});

export default Dropdown;
