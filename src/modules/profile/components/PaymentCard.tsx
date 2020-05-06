import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/PaymentCardStyles';
import {useTranslation} from 'react-i18next';
import {useDarkModeContext} from 'react-native-dark-mode';

const masterCardIcon = require('../assets/mastercard.png');

const PaymentCard = ({
  cardName,
  cardNumber
}: {
  cardName: string;
  cardNumber: string;
}) => {
  const {t} = useTranslation();
  const mode = useDarkModeContext();
  return (
    <View style={styles[mode].container}>
      <View style={styles[mode].detailContainer}>
        <MaterialIcon name="check-circle" size={25} color={'#A2CD37'} />
        <Image source={masterCardIcon} style={styles[mode].mastercard} />
        <View>
          <Text style={styles[mode].cardName}>{cardName}</Text>
          <Text style={styles[mode].cardNumber}>{cardNumber}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Text style={styles[mode].delete}>{t('Delete')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentCard;
