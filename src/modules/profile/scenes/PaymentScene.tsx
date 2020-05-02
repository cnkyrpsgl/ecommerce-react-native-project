import React from 'react';
import {View} from 'react-native';
import {paymentData} from '../constants';
import PaymentCard from '../components/PaymentCard';
import BoldActionButton from '../../../common/components/BoldActionButton';

const PaymentScene = () => {
  return (
    <View style={{margin: '3%'}}>
      {paymentData.map((payment, index) => (
        <PaymentCard {...payment} key={index.toString()} />
      ))}
      <View style={{marginVertical: '5%'}}>
        <BoldActionButton name={'Add New Card'} />
      </View>
    </View>
  );
};

export default PaymentScene;
