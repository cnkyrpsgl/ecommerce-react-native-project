import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const masterCardIcon = require('../assets/mastercard.png');

const PaymentCard = ({
  cardName,
  cardNumber
}: {
  cardName: string;
  cardNumber: string;
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: '3%',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          flex: 0.7
        }}>
        <MaterialIcon name="check-circle" size={25} color={'#A2CD37'} />
        <Image source={masterCardIcon} style={{width: 35, height: 35}} />
        <View>
          <Text style={{fontWeight: 'bold'}}>{cardName}</Text>
          <Text style={{fontSize: 12, opacity: 0.5}}>{cardNumber}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Text style={{color: 'orange'}}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentCard;
