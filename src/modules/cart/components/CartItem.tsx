import React from 'react';
import {ImageSourcePropType, View, Text, Image} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/CartItemStyles';

const CartItem = ({
  productName,
  unitPrice,
  amount,
  urlSource
}: {
  productName: string;
  unitPrice: number;
  amount: number;
  urlSource: ImageSourcePropType;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <View style={styles.imageContainer}>
          <Image source={urlSource} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text>{productName}</Text>
          <Text style={styles.price}>{`${unitPrice} $`}</Text>
        </View>
      </View>
      <View style={styles.amountContainer}>
        <MaterialIcon
          name="minus"
          size={20}
          style={styles.minus}
          color={'red'}
        />
        <Text style={styles.amount}>{amount}</Text>
        <MaterialIcon
          name="plus"
          size={20}
          style={styles.plus}
          color={'green'}
        />
      </View>
    </View>
  );
};

export default CartItem;
