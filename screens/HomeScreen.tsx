// HomeScreen.tsx
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ListRenderItem,
  ScrollView,
} from "react-native";
import TeaserTile from "../UI/page/TeaserTile";
import { TeaserTileData, HomeScreenNavigationProp } from "../type";
import { fetchTrendingMovies, fetchtopRateMovies, fetchupComingMovies } from "../API/api";
import TopNavigator from "../UI/TopNavigator/TopNavigator";
import Loader from "../UI/page/loader";
import { useNavigation } from "@react-navigation/native";

const HomeScreen: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [trending, setTrending] = useState<TeaserTileData[]>([]);
  const [topRated, setTopRated] = useState<TeaserTileData[]>([]);
  const [upcoming, setUpcoming] = useState<TeaserTileData[]>([]);
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleItemClick = (item: TeaserTileData) => {
    try {
      navigation.navigate("EpisodScreen", { 
        posterPath: item.poster_path, 
        title: item.title, 
        popularity: item.popularity, 
        release_date: item.release_data, 
        genre_ids: item.genre_ids, 
        original_language: item.original_language 
      });
    } catch (error) {
      console.error("Error navigating:", error);
    }
  };

  const renderItem: ListRenderItem<TeaserTileData> = ({ item }) => (
    <TeaserTile 
      posterPath={item.poster_path} 
      trending={item.trending}
      title={item.title} 
      popularity={item.popularity}
      release_date={item.release_data}
      genre_ids={item.genre_ids}
      original_language={item.original_language}
      onPress={() => handleItemClick(item)} 
    />
  );

  const renderItem2: ListRenderItem<TeaserTileData> = ({ item }) => (
    <TeaserTile 
      posterPath={item.poster_path} 
      topRated={item.topRated} 
      title={item.title} 
      popularity={item.popularity}
      release_date={item.release_data}
      genre_ids={item.genre_ids}
      original_language={item.original_language} 
      onPress={() => handleItemClick(item)} 
    />
  );

  const renderItem3: ListRenderItem<TeaserTileData> = ({ item }) => (
    <TeaserTile 
      posterPath={item.poster_path} 
      upcoming={item.upcoming} 
      title={item.title}  
      popularity={item.popularity}
      release_date={item.release_data}
      genre_ids={item.genre_ids}
      original_language={item.original_language}
      onPress={() => handleItemClick(item)} 
    />
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [trendingMovies, topRatedMovies, upcomingMovies] = await Promise.all([
          fetchTrendingMovies(),
          fetchtopRateMovies(),
          fetchupComingMovies(),
        ]);
        if (trendingMovies && trendingMovies.results) {
          setTrending(trendingMovies.results);
        }
        if (topRatedMovies && topRatedMovies.results) {
          setTopRated(topRatedMovies.results);
        }
        if (upcomingMovies && upcomingMovies.results) {
          setUpcoming(upcomingMovies.results);
        }
      } catch (error) {
        console.warn("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <ScrollView style={styles.container}>
      <TopNavigator />
      <View style={styles.clusterContainer}>
        <Text style={styles.clusterTitle}>Top Movies</Text>
        <FlatList
          data={trending}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.clusterContainer}>
        <Text style={styles.clusterTitle}>Rated Movies</Text>
        <FlatList
          data={topRated}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem2}
        />
      </View>
      <View style={styles.clusterContainer}>
        <Text style={styles.clusterTitle}>Upcoming Movies</Text>
        <FlatList
          data={upcoming}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem3}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  clusterTitle: {
    padding: 10,
    color: "white",
    fontSize: 19 
  },
  clusterContainer: {
    paddingTop: 10,
    paddingBottom: 20,
  },
});
