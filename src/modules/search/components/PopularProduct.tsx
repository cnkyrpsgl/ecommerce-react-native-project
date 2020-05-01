import React from 'react';
import {Text, View} from 'react-native';

const PopularProduct = ({name}: {name: string}) => {
  return (
    <View
      style={{
        borderWidth: 0.2,
        borderRadius: 8,
        padding: '8%',
        borderColor: 'grey'
      }}>
      <Text style={{color: '#b83b5e'}}>{name}</Text>
    </View>
  );
};

export default PopularProduct;
