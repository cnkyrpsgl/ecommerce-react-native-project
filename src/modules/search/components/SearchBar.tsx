import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/SearchBarStyles';
import {useTranslation} from 'react-i18next';

const SearchBar = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <MaterialIcon
          name="magnify"
          size={30}
          style={styles.search}
          color={'orange'}
        />
        <TextInput placeholder={t('Search Product')} />
      </View>
      <TouchableOpacity>
        <MaterialIcon
          name="microphone-outline"
          size={30}
          style={styles.microphone}
          color={'orange'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
