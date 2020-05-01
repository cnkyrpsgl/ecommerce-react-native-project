import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';

const CategoryCard = ({
  urlSource,
  categoryName
}: {
  urlSource: ImageSourcePropType;
  categoryName: string;
}) => {
  return (
    <View
      style={{
        borderRadius: 8,
        backgroundColor: 'white',
        alignItems: 'center',
        margin: '2%',
        padding: '2%'
      }}>
      <Image source={urlSource} style={{width: 90, height: 80}} />
      <Text>{categoryName}</Text>
    </View>
  );
};

export default CategoryCard;
