import React from 'react';
import {FlatList, View} from 'react-native';
import CampaignCard from '../components/CampaignCard';
import styles from '../styles/CampaingSceneStyles';
import {useSelector} from 'react-redux';
import {campaignSelectors} from '../../../core/campaign/stores';

const CampaignScene = () => {
  const {campaigns} = useSelector(campaignSelectors);
  return (
    <View style={styles.container}>
      <FlatList
        data={campaigns}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <CampaignCard {...item} />}
      />
    </View>
  );
};

export default CampaignScene;
