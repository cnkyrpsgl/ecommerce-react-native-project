import React from 'react';
import {Image, ImageSourcePropType, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/CategoryCardStyles';
import {useTranslation} from 'react-i18next';

const CategoryCard = ({
  urlSource,
  categoryName
}: {
  urlSource: ImageSourcePropType;
  categoryName: string;
}) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={urlSource} style={styles.image} />
      <Text>{t(categoryName)}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
