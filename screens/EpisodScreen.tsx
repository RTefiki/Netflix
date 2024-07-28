import { StyleSheet, View, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { imageOriginal } from "../API/api";
import { EpisodScreenRouteProp, HomeScreenNavigationProp } from "../type";
import TopBar from "../UI/page/topBar";
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const EpisodScreen: React.FC = () => {
  const route = useRoute<EpisodScreenRouteProp>();
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { posterPath, title, popularity, release_date, genre_ids, original_language } = route.params;
  const imageUrl =
    imageOriginal(posterPath) || "https://example.com/default-image.jpg"; // Default image URL

  // Parse the release date and extract the year
  const releaseYear = release_date ? new Date(release_date).getFullYear().toString() : "1";

  return (
    <View style={styles.container}>
      <TopBar onPress={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{popularity} match</Text>
          <Text style={styles.infoText}>{releaseYear}</Text>
          <View style={styles.ageContainer}>
            <Text style={styles.ageText}>12+</Text>
          </View>
          <Text style={styles.infoText}>{genre_ids.join(', ')}</Text>
          <Text style={styles.infoText}>{original_language}</Text>
          <Text style={styles.infoText}>HD</Text>
        </View>
        <TouchableOpacity style={styles.playButton}>
          <Ionicons name="play" size={24} color="black" />
          <Text style={styles.playButtonText}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.downloadButton}>
          <FontAwesome name="download" size={24} color="white" />
          <Text style={styles.downloadButtonText}>Download</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default EpisodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "stretch",
  },
  title: {
    fontSize: 30,
    color: "white",
    marginVertical: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    flexWrap: 'wrap', // To allow text to wrap
  },
  infoText: {
    color: 'white',
    marginRight: 10,
  },
  ageContainer: {
    backgroundColor: 'yellow',
    paddingHorizontal: 5,
    borderRadius: 3,
    marginRight: 10,
  },
  ageText: {
    color: 'black',
  },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    marginVertical: 10,
  },
  playButtonText: {
    color: 'black',
    fontSize: 18,
    marginLeft: 10,
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },
  downloadButtonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
});
