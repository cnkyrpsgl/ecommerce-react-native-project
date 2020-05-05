import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/PaymentCardStyles';
import {useTranslation} from 'react-i18next';

const masterCardIcon = require('../assets/mastercard.png');

const PaymentCard = ({
  cardName,
  cardNumber
}: {
  cardName: string;
  cardNumber: string;
}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <MaterialIcon name="check-circle" size={25} color={'#A2CD37'} />
        <Image source={masterCardIcon} style={styles.mastercard} />
        <View>
          <Text style={styles.cardName}>{cardName}</Text>
          <Text style={styles.cardNumber}>{cardNumber}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Text style={styles.delete}>{t('Delete')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentCard;
