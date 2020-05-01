import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {popularData} from '../constants';
import PopularProduct from './PopularProduct';

const PopularSearch = () => {
  return (
    <View style={{marginVertical: '5%'}}>
      <Text style={{color: '#f08a5d', marginHorizontal: '3%'}}>
        Popular Searches
      </Text>
      <FlatList
        data={popularData}
        horizontal={true}
        style={{
          backgroundColor: 'white',
          paddingVertical: '5%',
          marginVertical: '3%'
        }}
        contentContainerStyle={{marginHorizontal: '3%'}}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <PopularProduct {...item} />}
      />
    </View>
  );
};

export default PopularSearch;
