import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/HistoryCardStyles';
import {AddressType} from '../../../core/address/stores/addressTypes';
import {useTranslation} from 'react-i18next';

const HistoryCard = ({
  date,
  skuAmount,
  cartPrice,
  addressType
}: {
  date: string;
  skuAmount: number;
  cartPrice: number;
  addressType: AddressType;
}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <MaterialIcon
          name={
            addressType === AddressType.work ? 'office-building' : 'home-city'
          }
          size={30}
          color={'#f08a5d'}
          style={styles.typeIcon}
        />
        <View>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.amount}>{`${skuAmount} ${t('products')}`}</Text>
        </View>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.amountContainer}>
          <View style={styles.basketContainer}>
            <MaterialIcon name="basket" size={25} color={'#A2CD37'} />
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{`${cartPrice} ${t('$')}`}</Text>
          </View>
        </TouchableOpacity>
        <MaterialIcon name="chevron-right" size={35} color={'orange'} />
      </View>
    </View>
  );
};

export default HistoryCard;
