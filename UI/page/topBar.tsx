import Ionicons from "@expo/vector-icons/Ionicons";

import React from "react";
import { View,  StyleSheet, TouchableOpacity } from "react-native";

interface TopBarProps {
  onPress: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Ionicons name="chevron-back-outline" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    alignItems: "center",
    paddingHorizontal:5
  },
});
