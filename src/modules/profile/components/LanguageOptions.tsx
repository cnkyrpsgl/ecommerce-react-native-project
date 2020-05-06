import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import styles from '../styles/LanguageOptionsStyles';
import {useDarkModeContext} from 'react-native-dark-mode';

const LanguageOptions = ({action}: {action: Function}) => {
  const {t, i18n} = useTranslation();
  const mode = useDarkModeContext();
  return (
    <>
      <TouchableOpacity
        key={'en'}
        onPress={() => {
          i18n.changeLanguage('en');
          action();
        }}
        style={styles[mode].container}>
        <Text style={styles[mode].actionText}>{t('en')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        key={'tr'}
        onPress={() => {
          i18n.changeLanguage('tr');
          action();
        }}
        style={styles[mode].container}>
        <Text style={styles[mode].actionText}>{t('tr')}</Text>
      </TouchableOpacity>
    </>
  );
};

export default LanguageOptions;
