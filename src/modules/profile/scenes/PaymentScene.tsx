import React from 'react';
import {View} from 'react-native';
import PaymentCard from '../components/PaymentCard';
import DarkActionButton from '../../../common/components/DarkActionButton';
import styles from '../styles/PaymentSceneStyles';
import {useSelector} from 'react-redux';
import {paymentSelectors} from '../../../core/payment/stores';

const PaymentScene = () => {
  const {paymentMap} = useSelector(paymentSelectors);
  return (
    <View style={styles.container}>
      {Object.values(paymentMap).map((payment, index) => (
        <PaymentCard {...payment} key={index.toString()} />
      ))}
      <View style={styles.actionContainer}>
        <DarkActionButton name={'Add New Card'} />
      </View>
    </View>
  );
};

export default PaymentScene;
