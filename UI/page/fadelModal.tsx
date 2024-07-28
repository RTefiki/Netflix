import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Modal, TouchableWithoutFeedback, Animated } from 'react-native';

const FadeInModal: React.FC<{ visible: boolean, onClose: () => void, children: React.ReactNode }> = ({ visible, onClose, children }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value

  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, fadeAnim]);

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="none" // No default animation
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <Animated.View style={[styles.modalContent, { opacity: fadeAnim }]}>
              {children}
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    marginTop:60
  },
  modalContent: {
    backgroundColor: 'white',
    width: 300,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default FadeInModal;
