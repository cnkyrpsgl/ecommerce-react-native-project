import React from 'react';
import {View} from 'react-native';
import CategoryCard from './CategoryCard';
import styles from '../styles/ProductCategoryStyles';
import {useSelector} from 'react-redux';
import {categorySelectors} from '../../../core/category/stores';

const ProductCategory = () => {
  const {categories} = useSelector(categorySelectors);
  return (
    <View style={styles.container}>
      {categories.map((category) => (
        <CategoryCard {...category} key={category.categoryName} />
      ))}
    </View>
  );
};

export default ProductCategory;
