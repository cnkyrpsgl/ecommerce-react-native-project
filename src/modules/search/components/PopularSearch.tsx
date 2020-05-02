import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {popularData} from '../constants';
import PopularProduct from './PopularProduct';
import styles from '../scenes/PopularSearchStyles';

const PopularSearch = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Searches</Text>
      <FlatList
        data={popularData}
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
