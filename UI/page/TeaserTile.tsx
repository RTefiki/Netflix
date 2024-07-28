import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { TeaserTileProps } from '../../type';
import { imageOriginal } from '../../API/api';

const TeaserTile: React.FC<TeaserTileProps> = ({ posterPath, trending, topRated, upcoming, onPress }) => {
  const imageUrl = imageOriginal(posterPath) || 'https://example.com/default-image.jpg'; // Default image URL

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        {trending && <Text style={styles.trending}>Trending</Text>}
        {topRated && <Text style={styles.topRated}>Top Rated</Text>}
        {upcoming && <Text style={styles.upcoming}>Upcoming</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default TeaserTile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    marginLeft: 10,
  },
  image: {
    width: 140,
    height: 160,
    borderRadius: 7,
  },
  trending: {
    position: "absolute",
    top: 5,
    left: 5,
    backgroundColor: "red",
    color: "white",
    padding: 5,
    borderRadius: 5,
  },
  topRated: {
    position: "absolute",
    top: 5,
    left: 5,
    backgroundColor: "blue",
    color: "white",
    padding: 5,
    borderRadius: 5,
  },
  upcoming: {
    position: "absolute",
    top: 5,
    left: 5,
    backgroundColor: "green",
    color: "white",
    padding: 5,
    borderRadius: 5,
  },
});
