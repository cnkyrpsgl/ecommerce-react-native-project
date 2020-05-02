import React from 'react';
import {Text, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AddressType} from '../constants';
import styles from '../styles/HistoryCardStyles';

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
          <Text style={styles.amount}>{`${skuAmount} products`}</Text>
        </View>
      </View>
      <View style={styles.actionContainer}>
        <View style={styles.amountContainer}>
          <View style={styles.basketContainer}>
            <MaterialIcon name="basket" size={25} color={'#A2CD37'} />
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{`$${cartPrice}`}</Text>
          </View>
        </View>
        <MaterialIcon name="chevron-right" size={35} color={'orange'} />
      </View>
    </View>
  );
};

export default HistoryCard;
