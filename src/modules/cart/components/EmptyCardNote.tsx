import React from 'react';
import {Text, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/EmptyCardNoteStyles';
import {useTranslation} from 'react-i18next';

const EmptyCardNote = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialIcon name="cart-arrow-down" color={'orange'} size={80} />
      </View>
      <Text style={styles.note}>
        You can fill your cart by adding products ranging from fruits,
        vegetables, meat, and much more!
      </Text>
    </View>
  );
};

export default EmptyCardNote;
