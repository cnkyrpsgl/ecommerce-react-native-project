import React from 'react';
import {View} from 'react-native';
import {paymentData} from '../constants';
import PaymentCard from '../components/PaymentCard';
import BoldActionButton from '../../../common/components/BoldActionButton';
import styles from '../styles/PaymentSceneStyles';

const PaymentScene = () => {
  return (
    <View style={styles.container}>
      {paymentData.map((payment, index) => (
        <PaymentCard {...payment} key={index.toString()} />
      ))}
      <View style={styles.actionContainer}>
        <BoldActionButton name={'Add New Card'} />
      </View>
    </View>
  );
};

export default PaymentScene;
