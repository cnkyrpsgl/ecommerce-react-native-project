import React from 'react';
import {View} from 'react-native';
import {categoryData} from '../constants';
import CategoryCard from './CategoryCard';

const ProductCategory = () => {
  return (
    <View
      style={{
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center'
      }}>
      {categoryData.map((category) => (
        <CategoryCard {...category} key={category.categoryName} />
      ))}
    </View>
  );
};

export default ProductCategory;
