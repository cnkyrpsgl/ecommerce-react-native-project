import React from 'react';
import {Text, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/EmptyCardNoteStyles';
import {useTranslation} from 'react-i18next';
import {useDarkModeContext} from 'react-native-dark-mode';

const EmptyCardNote = () => {
  const {t} = useTranslation();
  const mode = useDarkModeContext();
  return (
    <View style={styles[mode].container}>
      <View style={styles[mode].iconContainer}>
        <MaterialIcon name="cart-arrow-down" color={'orange'} size={80} />
      </View>
      <Text style={styles[mode].note}>
        {t(
          'You can fill your cart by adding products ranging from fruits, vegetables, meat, and much more!'
        )}
      </Text>
    </View>
  );
};

export default EmptyCardNote;
