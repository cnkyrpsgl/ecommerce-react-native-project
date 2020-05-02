import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';
import styles from '../styles/CategoryCardStyles';

const CategoryCard = ({
  urlSource,
  categoryName
}: {
  urlSource: ImageSourcePropType;
  categoryName: string;
}) => {
  return (
    <View style={styles.container}>
      <Image source={urlSource} style={styles.image} />
      <Text>{categoryName}</Text>
    </View>
  );
};

export default CategoryCard;
