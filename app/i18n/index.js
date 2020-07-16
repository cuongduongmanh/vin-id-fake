import i18n from 'i18n-js';
import { I18nManager } from 'react-native';
import * as RNLocalize from 'react-native-localize';

import en from './locales/en';
import vi from './locales/vi';
import jp from './locales/jp';

i18n.translations = {
	en,
	vi,
	jp
};
i18n.fallbacks = true;

const defaultLanguage = { languageTag: 'en', isRTL: false };
const availableLanguages = Object.keys(i18n.translations);
const { languageTag, isRTL } = RNLocalize.findBestAvailableLanguage(availableLanguages) || defaultLanguage;

I18nManager.forceRTL(isRTL);
i18n.locale = languageTag;

export default i18n;
