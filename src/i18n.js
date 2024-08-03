import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      header: { btnDownload: 'Download' },
      home: {
        title: {
          first: 'The simplest way to build a',
          second: 'Professional CV',
        },
        description:
          'Quickly build a customizable CV with our easy-to-use editing features, inspired by the Harvard College Bullet Point Resume Template.',
        button: 'Get Started',
      },
      footer: {
        by: 'Made with ♡ by ',
      },
    },
  },

  es: {
    translation: {
      header: { btnDownload: 'Descargar' },
      home: {
        title: {
          first: 'La manera más fácil de construir un',
          second: 'CV profesional',
        },
        description:
          'Construye rápidamente un CV a medida con nuestras funciones de edición fáciles de usar, inspiradas en la plantilla Harvard College Bullet Point Resume.',
        button: 'Empieza ahora',
      },
      footer: {
        by: 'Hecho con ♡ por ',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
