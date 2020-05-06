import React from 'react';
import {View} from 'react-native';
import PaymentCard from '../components/PaymentCard';
import DarkActionButton from '../../../common/components/DarkActionButton';
import styles from '../styles/PaymentSceneStyles';
import {useSelector} from 'react-redux';
import {paymentSelectors} from '../../../core/payment/stores';
import {useTranslation} from 'react-i18next';
import {useDarkModeContext} from 'react-native-dark-mode';

const PaymentScene = () => {
  const {t} = useTranslation();
  const mode = useDarkModeContext();
  const {paymentMap} = useSelector(paymentSelectors);
  return (
    <View style={styles[mode].container}>
      {Object.values(paymentMap).map((payment, index) => (
        <PaymentCard {...payment} key={index.toString()} />
      ))}
      <View style={styles[mode].actionContainer}>
        <DarkActionButton name={t('Add New Card')} />
      </View>
    </View>
  );
};

export default PaymentScene;
