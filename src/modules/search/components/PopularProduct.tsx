import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../styles/PopularProductStyles';

const PopularProduct = ({name}: {name: string}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default PopularProduct;
