import React from 'react';
import {FlatList, View} from 'react-native';
import {campaignData} from '../constants';
import CampaignCard from '../components/CampaignCard';

const CampaignScene = () => {
  return (
    <View style={{flex: 1, margin: '4%'}}>
      <FlatList
        data={campaignData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <CampaignCard imgSource={item} />}
      />
    </View>
  );
};

export default CampaignScene;
