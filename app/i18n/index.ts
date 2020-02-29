import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

const english = require('./english.json');
const chinese = require('./chinese.json');

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: english,
  },
  zh: {
    translation: chinese,
  },
};

const locale = RNLocalize.getLocales()[0];

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: locale.languageCode,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
