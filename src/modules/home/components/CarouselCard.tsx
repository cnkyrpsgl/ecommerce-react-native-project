import React from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';
import styles from '../styles/CarouselCardStyles';

const CarouselCard = ({urlSource}: {urlSource: ImageSourcePropType}) => {
  return (
    <View style={styles.container}>
      <Image source={urlSource} />
    </View>
  );
};

export default CarouselCard;
