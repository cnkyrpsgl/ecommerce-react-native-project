import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../styles/PopularProductStyles';
import {useTranslation} from 'react-i18next';
import {useDarkModeContext} from 'react-native-dark-mode';

const PopularProduct = ({name}: {name: string}) => {
  const {t} = useTranslation();
  const mode = useDarkModeContext();
  return (
    <TouchableOpacity style={styles[mode].container}>
      <Text style={styles[mode].name}>{t(name)}</Text>
    </TouchableOpacity>
  );
};

export default PopularProduct;
