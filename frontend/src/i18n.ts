import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './app/locales/en.json';
import ru from './app/locales/ru.json';

const resources = {
  en: { translation: en },
  ru: { translation: ru },
};

const savedLanguage = localStorage.getItem("i18nextLng") || "ru";

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ru',
    lng: savedLanguage,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
