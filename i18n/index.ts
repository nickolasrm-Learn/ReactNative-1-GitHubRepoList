import * as Localization from 'expo-localization'
import i18n from 'i18n-js'

import en from './en.json'
import pt from './pt.json'

i18n.translations = {
	en: en,
	ja: pt,
}

i18n.locale = Localization.locale
i18n.fallbacks = true

export default i18n