import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/HistoryCardStyles';
import {AddressType} from '../../../core/address/stores/addressTypes';
import {useTranslation} from 'react-i18next';
import {useDarkModeContext} from 'react-native-dark-mode';

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
  const mode = useDarkModeContext();
  return (
    <View style={styles[mode].container}>
      <View style={styles[mode].detailContainer}>
        <MaterialIcon
          name={
            addressType === AddressType.work ? 'office-building' : 'home-city'
          }
          size={30}
          style={styles[mode].typeIcon}
        />
        <View>
          <Text style={styles[mode].date}>{date}</Text>
          <Text style={styles[mode].amount}>{`${skuAmount} ${t(
            'products'
          )}`}</Text>
        </View>
      </View>
      <View style={styles[mode].actionContainer}>
        <TouchableOpacity style={styles[mode].amountContainer}>
          <View style={styles[mode].basketContainer}>
            <MaterialIcon name="basket" size={25} color={'#A2CD37'} />
          </View>
          <View style={styles[mode].priceContainer}>
            <Text style={styles[mode].price}>{`${cartPrice} ${t('$')}`}</Text>
          </View>
        </TouchableOpacity>
        <MaterialIcon name="chevron-right" size={35} color={'orange'} />
      </View>
    </View>
  );
};

export default HistoryCard;
