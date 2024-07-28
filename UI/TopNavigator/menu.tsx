import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FadeInModal from '../page/fadelModal';

const MenuModal: React.FC<{ visible: boolean, onClose: () => void }> = ({ visible, onClose }) => {
  return (
    <FadeInModal visible={visible} onClose={onClose}>
      <View style={styles.menuContainer}>
        <Text style={styles.placeholder}>Menu functionality here</Text>
      </View>
    </FadeInModal>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    width: '100%',
    padding: 20,
  },
  placeholder: {
    fontSize: 16,
    color: 'black',
  },
});

export default MenuModal;
