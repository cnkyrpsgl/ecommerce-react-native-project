import React from 'react';
import {View, FlatList} from 'react-native';
import {orderHistoryData} from '../constants';
import HistoryCard from '../components/HistoryCard';

const HistoryScene = () => {
  return (
    <View>
      <FlatList
        data={orderHistoryData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <HistoryCard {...item} />}
      />
    </View>
  );
};

export default HistoryScene;
