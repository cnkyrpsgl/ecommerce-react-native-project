import React from 'react';
import {Text, View} from 'react-native';
import styles from '../scenes/PopularProductStyles';

const PopularProduct = ({name}: {name: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default PopularProduct;
