import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import styles from '../styles/LanguageOptionsStyles';
import {useDarkModeContext} from 'react-native-dark-mode';

const LanguageOptions = ({action}: {action: Function}) => {
  const {t, i18n} = useTranslation();
  const mode = useDarkModeContext();
  const changeLanguage = (lang: string) =>
    requestAnimationFrame(() => {
      i18n.changeLanguage(lang).catch();
      action();
    });

  return (
    <>
      <TouchableOpacity
        key={'en'}
        onPress={() => changeLanguage('en')}
        style={styles[mode].container}>
        <Text style={styles[mode].actionText}>{t('en')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        key={'tr'}
        onPress={() => changeLanguage('tr')}
        style={styles[mode].container}>
        <Text style={styles[mode].actionText}>{t('tr')}</Text>
      </TouchableOpacity>
    </>
  );
};

export default LanguageOptions;
