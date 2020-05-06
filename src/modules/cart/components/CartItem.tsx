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
import {useTranslation} from 'react-i18next';
import {useDarkModeContext} from 'react-native-dark-mode';

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
  const {t} = useTranslation();
  const mode = useDarkModeContext();
  return (
    <View style={styles[mode].container}>
      <View style={styles[mode].productContainer}>
        <View style={styles[mode].imageContainer}>
          <Image source={imageSource} style={styles[mode].image} />
        </View>
        <View style={styles[mode].textContainer}>
          <Text style={styles[mode].productName}>{t(productName)}</Text>
          <Text style={styles[mode].price}>{`${unitPrice} ${t('$')}`}</Text>
        </View>
      </View>
      <View style={styles[mode].amountContainer}>
        <TouchableOpacity>
          <MaterialIcon
            name="minus"
            size={20}
            style={styles[mode].minus}
            color={'red'}
          />
        </TouchableOpacity>
        <Text style={styles[mode].amount}>{amount}</Text>
        <TouchableOpacity>
          <MaterialIcon
            name="plus"
            size={20}
            style={styles[mode].plus}
            color={'green'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
