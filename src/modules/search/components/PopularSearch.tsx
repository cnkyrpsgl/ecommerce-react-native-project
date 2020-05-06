import React from 'react';
import {View, Text, FlatList} from 'react-native';
import PopularProduct from './PopularProduct';
import styles from '../styles/PopularSearchStyles';
import {useSelector} from 'react-redux';
import {searchSelectors} from '../../../core/search/stores';
import {useTranslation} from 'react-i18next';
import {useDarkModeContext} from 'react-native-dark-mode';

const PopularSearch = () => {
  const {popularSearches} = useSelector(searchSelectors);
  const {t} = useTranslation();
  const mode = useDarkModeContext();
  return (
    <View style={styles[mode].container}>
      <Text style={styles[mode].title}>{t('Popular Searches')}</Text>
      <FlatList
        data={popularSearches}
        horizontal={true}
        style={styles[mode].flatList}
        contentContainerStyle={styles[mode].contentContainer}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <PopularProduct {...item} />}
      />
    </View>
  );
};

export default PopularSearch;
