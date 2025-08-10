import {configureLocalization} from '@lit/localize';
import {sourceLocale, targetLocales} from '../generated/locale-codes.js';
import {LOCALES, EVENT_NAMES} from '../constants/constants.js';

export const {setLocale} = configureLocalization({
  sourceLocale,
  targetLocales,
  loadLocale: (locale) => import(`../generated/locales/${locale}.js`),
});

const savedLocale = localStorage.getItem('app-locale') || LOCALES.EN;
const initialLocale = targetLocales.includes(savedLocale)
  ? savedLocale
  : LOCALES.EN;

export const setLocaleWithStorage = async (locale) => {
  localStorage.setItem('app-locale', locale);
  await setLocale(locale);

  document.dispatchEvent(
    new CustomEvent(EVENT_NAMES.LOCALE_CHANGED, {
      detail: {locale},
      bubbles: true,
      composed: true,
    })
  );
};

export const initializeLocalization = async () => {
  await setLocaleWithStorage(initialLocale);
};

window.setLocale = setLocaleWithStorage;
