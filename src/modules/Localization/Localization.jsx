import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import { LANGUAGES } from '../../common/i18n/languages';
import localeData from '../../common/i18n/messages.json'; // translated strings

addLocaleData([...en]);

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
export function getLanguageForUser() {
  // language that user has set in their browser
  return (
    (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage
  );
}

// parse supported languages from json
function getSupportedLanguages() {
  return Object.keys(localeData);
}

export function fallbackToEnglish(language) {
  return !getSupportedLanguages().includes(language) ? LANGUAGES.ENGLISH : language;
}

// Split locales with a region code
export function getLanguageWithoutRegionCode(language) {
  let languageWithoutRegionCode = '';
  if (language && typeof language === 'string') {
    languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
  }
  return languageWithoutRegionCode;
}

// Try full locale, try locale without region code, fallback to 'en'
export function getMessagesForLanguage(language, messages) {
  return messages[language] || messages[getLanguageWithoutRegionCode(language)] || messages.en;
}

function Localization({ children }) {
  const language = fallbackToEnglish(getLanguageForUser());
  const messages = getMessagesForLanguage(language, localeData);
  return (
    <IntlProvider locale={language} messages={messages} textComponent={React.Fragment}>
      {children}
    </IntlProvider>
  );
}

Localization.propTypes = {
  children: PropTypes.node,
};

export default Localization;
