import React from 'react';
import {View, Text, FlatList} from 'react-native';
import PopularProduct from './PopularProduct';
import styles from '../styles/PopularSearchStyles';
import {useSelector} from 'react-redux';
import {searchSelectors} from '../../../core/search/stores';

const PopularSearch = () => {
  const {popularSearches} = useSelector(searchSelectors);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Searches</Text>
      <FlatList
        data={popularSearches}
        horizontal={true}
        style={styles.flatList}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <PopularProduct {...item} />}
      />
    </View>
  );
};

export default PopularSearch;
