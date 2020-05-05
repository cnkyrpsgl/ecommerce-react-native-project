import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import styles from '../styles/LanguageOptionsStyles';

const LanguageOptions = ({action}: {action: Function}) => {
  const {t, i18n} = useTranslation();
  return (
    <>
      <TouchableOpacity
        key={'en'}
        onPress={() => {
          i18n.changeLanguage('en');
          action();
        }}
        style={styles.container}>
        <Text style={styles.actionText}>{t('en')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        key={'tr'}
        onPress={() => {
          i18n.changeLanguage('tr');
          action();
        }}
        style={styles.container}>
        <Text style={styles.actionText}>{t('tr')}</Text>
      </TouchableOpacity>
    </>
  );
};

export default LanguageOptions;
