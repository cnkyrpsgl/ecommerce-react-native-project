import React from 'react';
import {TextInput, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../scenes/SearchBarStyles';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <MaterialIcon
          name="magnify"
          size={30}
          style={styles.search}
          color={'orange'}
        />
        <TextInput placeholder={'Search Product'} />
      </View>
      <View>
        <MaterialIcon
          name="microphone-outline"
          size={30}
          style={styles.microphone}
          color={'orange'}
        />
      </View>
    </View>
  );
};

export default SearchBar;
