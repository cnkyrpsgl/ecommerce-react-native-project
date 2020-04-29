import React from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';

const CampaignCard = ({imgSource}: {imgSource: ImageSourcePropType}) => {
  return (
    <View style={{}}>
      <Image
        source={imgSource}
        style={{
          height: 150,
          borderRadius: 10,
          width: '100%',
          marginVertical: '2%'
        }}
      />
    </View>
  );
};

export default CampaignCard;
