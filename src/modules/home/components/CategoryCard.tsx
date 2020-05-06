import React from 'react';
import {Image, ImageSourcePropType, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/CategoryCardStyles';
import {useTranslation} from 'react-i18next';
import {useDarkModeContext} from 'react-native-dark-mode';

const CategoryCard = ({
  urlSource,
  categoryName
}: {
  urlSource: ImageSourcePropType;
  categoryName: string;
}) => {
  const {t} = useTranslation();
  const mode = useDarkModeContext();
  return (
    <TouchableOpacity style={styles[mode].container}>
      <Image source={urlSource} style={styles[mode].image} />
      <Text style={styles[mode].categoryName}>{t(categoryName)}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
