import React from 'react';
import {
  ImageSourcePropType,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/CartItemStyles';

const CartItem = ({
  productName,
  unitPrice,
  amount,
  imageSource
}: {
  productName: string;
  unitPrice: number;
  amount: number;
  imageSource: ImageSourcePropType;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text>{productName}</Text>
          <Text style={styles.price}>{`${unitPrice} $`}</Text>
        </View>
      </View>
      <View style={styles.amountContainer}>
        <TouchableOpacity>
          <MaterialIcon
            name="minus"
            size={20}
            style={styles.minus}
            color={'red'}
          />
        </TouchableOpacity>
        <Text style={styles.amount}>{amount}</Text>
        <TouchableOpacity>
          <MaterialIcon
            name="plus"
            size={20}
            style={styles.plus}
            color={'green'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
