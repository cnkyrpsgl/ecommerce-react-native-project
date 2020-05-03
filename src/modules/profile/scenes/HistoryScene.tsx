import React from 'react';
import {View, FlatList} from 'react-native';
import HistoryCard from '../components/HistoryCard';
import {useSelector} from 'react-redux';
import {historySelectors} from '../../../core/history/stores';

const HistoryScene = () => {
  const {orderMap} = useSelector(historySelectors);
  return (
    <View>
      <FlatList
        data={Object.values(orderMap)}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <HistoryCard {...item} />}
      />
    </View>
  );
};

export default HistoryScene;
