import React from 'react';
import { shallow } from 'enzyme';
import Localization, {
  getLanguageForUser,
  getLanguageWithoutRegionCode,
  getMessagesForLanguage,
  fallbackToEnglish,
} from './Localization';

describe('<Localization />', () => {
  let navigatorLanguages, navigatorLanguage;

  beforeEach(() => {
    // list of languages
    navigatorLanguages = jest.spyOn(window.navigator, 'languages', 'get');
    // single language
    navigatorLanguage = jest.spyOn(window.navigator, 'language', 'get');
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders without crashing', () => {
    shallow(
      <Localization>
        <div>child content</div>
      </Localization>
    );
  });

  it('get first language from list of languages in browser', () => {
    navigatorLanguages.mockReturnValue(['de', 'fa']);

    const locale = getLanguageForUser();
    expect(locale).toEqual('de');
    expect(locale).not.toEqual('fa');
  });

  it('get single language from browser', () => {
    navigatorLanguage.mockReturnValue('ja');
    navigatorLanguages.mockReturnValue([]);

    const locale = getLanguageForUser();
    expect(locale).toEqual('ja');
  });

  it('get userLanguage from browser', () => {
    navigatorLanguages.mockReturnValue([]);
    navigatorLanguage.mockReturnValue('');
    navigator.userLanguage = 'sp';

    const locale = getLanguageForUser();
    expect(locale).toEqual('sp');
  });

  it('get locale without region code', () => {
    let locale = getLanguageWithoutRegionCode('en-US');
    expect(locale).toEqual('en');

    locale = getLanguageWithoutRegionCode('fr-CA');
    expect(locale).toEqual('fr');

    locale = getLanguageWithoutRegionCode('es-MX');
    expect(locale).toEqual('es');

    locale = getLanguageWithoutRegionCode('kp');
    expect(locale).toEqual('kp');

    locale = getLanguageWithoutRegionCode(null);
    expect(locale).toEqual('');

    locale = getLanguageWithoutRegionCode(3);
    expect(locale).toEqual('');
  });

  it('get translated message content by locale', () => {
    const messages = {
      en: {
        hello: 'hello world',
      },
    };
    const localeEn = getMessagesForLanguage('en-UK', messages);
    expect(localeEn.hello).toEqual(messages.en.hello);

    // default to en of locale doesn't exist
    const localeDe = getMessagesForLanguage('de', messages);
    expect(localeDe.hello).toEqual(messages.en.hello);
  });

  it('return valid locale of translated content in messages', () => {
    const language = fallbackToEnglish('en'); // valid locale
    expect(language).toEqual('en');
  });
});
