import React from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';

const CarouselCard = ({urlSource}: {urlSource: ImageSourcePropType}) => {
  return (
    <View style={{marginTop: '5%'}}>
      <Image source={urlSource} />
    </View>
  );
};

export default CarouselCard;
