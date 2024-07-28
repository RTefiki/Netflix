import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

const Loader = () => {
  const spinAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [spinAnim]);

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle, { transform: [{ rotate: spin }] }]} />
      <Animated.View style={[styles.circle, { transform: [{ rotate: spin }] }]} />
      <Animated.View style={[styles.circle, { transform: [{ rotate: spin }] }]} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: 'red',
    margin: 5,
  },
});
