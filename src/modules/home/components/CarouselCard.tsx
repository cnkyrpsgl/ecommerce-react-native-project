import React from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';
import styles from '../styles/CarouselCardStyles';

const CarouselCard = ({imgSource}: {imgSource: ImageSourcePropType}) => {
  return (
    <View style={styles.container}>
      <Image source={imgSource} />
    </View>
  );
};

export default CarouselCard;
