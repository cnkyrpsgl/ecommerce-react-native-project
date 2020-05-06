import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './src/core/lang/en.json';
import tr from './src/core/lang/tr.json';

const resources = {
  en,
  tr
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
