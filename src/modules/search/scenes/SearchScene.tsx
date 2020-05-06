import React from 'react';
import SearchBar from '../components/SearchBar';
import PopularSearch from '../components/PopularSearch';
import {View} from 'react-native';
import {useDarkModeContext} from 'react-native-dark-mode';
import searchSceneStyles from '../styles/SearchSceneStyles';

const SearchScene = () => {
  const mode = useDarkModeContext();
  return (
    <View style={searchSceneStyles[mode].container}>
      <SearchBar />
      <PopularSearch />
    </View>
  );
};

export default SearchScene;
