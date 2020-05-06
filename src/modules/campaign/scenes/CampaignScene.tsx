import React from 'react';
import {FlatList, View} from 'react-native';
import CampaignCard from '../components/CampaignCard';
import styles from '../styles/CampaingSceneStyles';
import {useSelector} from 'react-redux';
import {campaignSelectors} from '../../../core/campaign/stores';
import {useDarkModeContext} from 'react-native-dark-mode';

const CampaignScene = () => {
  const mode = useDarkModeContext();
  const {campaigns} = useSelector(campaignSelectors);
  return (
    <View style={styles[mode].container}>
      <FlatList
        data={campaigns}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <CampaignCard {...item} />}
      />
    </View>
  );
};

export default CampaignScene;
