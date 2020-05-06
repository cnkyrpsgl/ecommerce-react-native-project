import React from 'react';
import {View, FlatList} from 'react-native';
import HistoryCard from '../components/HistoryCard';
import {useSelector} from 'react-redux';
import {historySelectors} from '../../../core/history/stores';
import {useDarkModeContext} from 'react-native-dark-mode';
import styles from '../styles/HistorySceneStyles';

const HistoryScene = () => {
  const mode = useDarkModeContext();
  const {orderMap} = useSelector(historySelectors);
  return (
    <View style={styles[mode].container}>
      <FlatList
        data={Object.values(orderMap)}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <HistoryCard {...item} />}
      />
    </View>
  );
};

export default HistoryScene;
