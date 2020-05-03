import React from 'react';
import {Image, ImageSourcePropType, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/CategoryCardStyles';

const CategoryCard = ({
  urlSource,
  categoryName
}: {
  urlSource: ImageSourcePropType;
  categoryName: string;
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={urlSource} style={styles.image} />
      <Text>{categoryName}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
