import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/SearchBarStyles';
import {useTranslation} from 'react-i18next';
import {useDarkModeContext} from 'react-native-dark-mode';

const SearchBar = () => {
  const {t} = useTranslation();
  const mode = useDarkModeContext();
  return (
    <View style={styles[mode].container}>
      <View style={styles[mode].searchContainer}>
        <MaterialIcon
          name="magnify"
          size={30}
          style={styles[mode].search}
          color={styles[mode].iconColor}
        />
        <TextInput
          placeholder={t('Search Product')}
          placeholderTextColor={styles[mode].placeHolderColor}
        />
      </View>
      <TouchableOpacity>
        <MaterialIcon
          name="microphone-outline"
          size={30}
          style={styles[mode].microphone}
          color={styles[mode].iconColor}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
