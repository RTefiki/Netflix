// types.ts or any appropriate file
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  HomeScreen: undefined;
  EpisodScreen: { posterPath: string; title: string; popularity: number; release_date: string; genre_ids: number[]; original_language: string };
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;
export type EpisodScreenRouteProp = RouteProp<RootStackParamList, 'EpisodScreen'>;

export interface TeaserTileProps {
  posterPath: string;
  trending?: boolean;
  topRated?: boolean;
  topComming?: boolean;
  upcoming?: boolean;
  onPress: () => void;
  title: string;
  popularity: number;
  release_date: string;
  genre_ids: number[];
  original_language: string;
}

export interface TeaserTileData {
  id: number;
  title: string;
  popularity: number;
  release_data: string;
  genre_ids: number[];
  original_language: string;
  poster_path: string;
  trending: boolean;
  topRated: boolean;
  upcoming: boolean;
}

export interface TrendingMoviesResponse {
  results: TeaserTileData[];
}

export interface EpisodeProps {
  onPress: () => void;
}
