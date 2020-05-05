import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../styles/PopularProductStyles';
import {useTranslation} from 'react-i18next';

const PopularProduct = ({name}: {name: string}) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.name}>{t(name)}</Text>
    </TouchableOpacity>
  );
};

export default PopularProduct;
