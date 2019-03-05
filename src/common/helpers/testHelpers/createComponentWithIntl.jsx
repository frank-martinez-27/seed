// https://github.com/yahoo/react-intl/blob/master/examples/jest-snapshot-testing/src/utils/createComponentWithIntl.js

import React from 'react';
import renderer from 'react-test-renderer'; // eslint-disable-line
import { IntlProvider } from 'react-intl';
import MESSAGES from '../../i18n/messages.json';
import { getMessagesForLanguage } from '../../../modules/Localization';
import { LANGUAGES } from '../../i18n/languages';

const createComponentWithIntl = (children, props = { locale: LANGUAGES.ENGLISH, messages: {} }) => {
  const translation = getMessagesForLanguage(props.locale, MESSAGES);
  return renderer.create(
    <IntlProvider {...props} messages={translation}>
      {children}
    </IntlProvider>
  );
};

export default createComponentWithIntl;
