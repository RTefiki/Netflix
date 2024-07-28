import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import FadeInModal from './fadelModal';

const SearchModal: React.FC<{ visible: boolean, onClose: () => void }> = ({ visible, onClose }) => {
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100); // Delay to ensure the modal is fully opened
    }
  }, [visible]);

  return (
    <FadeInModal visible={visible} onClose={onClose}>
      <View style={styles.searchContainer}>
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="#888"
        />
      </View>
    </FadeInModal>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    width: '100%',
    height:22
  },
  input: {
    width: '100%',
    height:'100%',
    borderColor: '#ccc',
    
    borderRadius: 5,
    fontSize: 20,
  },
});

export default SearchModal;
