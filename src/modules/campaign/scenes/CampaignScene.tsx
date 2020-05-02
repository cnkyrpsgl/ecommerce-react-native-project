import React from 'react';
import {FlatList, View} from 'react-native';
import {campaignData} from '../constants';
import CampaignCard from '../components/CampaignCard';
import styles from '../styles/CampaingSceneStyles';

const CampaignScene = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={campaignData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <CampaignCard imgSource={item} />}
      />
    </View>
  );
};

export default CampaignScene;
