import React from 'react';
import {View} from 'react-native';
import {categoryData} from '../constants';
import CategoryCard from './CategoryCard';
import styles from '../styles/ProductCategoryStyles';

const ProductCategory = () => {
  return (
    <View style={styles.container}>
      {categoryData.map((category) => (
        <CategoryCard {...category} key={category.categoryName} />
      ))}
    </View>
  );
};

export default ProductCategory;
