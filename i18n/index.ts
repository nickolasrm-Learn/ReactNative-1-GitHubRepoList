import * as Localization from 'expo-localization'
import i18n from 'i18n-js'

/*
i18n is a translation module used to show different
texts in different system languages.
*/

import en from './en.json'
import pt from './pt.json'

/*
First we have to load the .json(s) files
containing the app contents.
Check out en.json structure for example
*/

i18n.translations = {
	en,
	pt,
}

/*
Second, load it into i18n
*/

i18n.locale = Localization.locale // <- Tells i18n to use system language
i18n.fallbacks = true // <- Tells i18n to go back to the right language is system language not available

/*
Third, configure it
*/

export default i18n

/*
After configuring it, you can call it wherever you want, and translate its contents.
For example let's say we want to add a 'appTitle' entry in our application.

Instead of doing:
component.jsx
----------------------------------
<Text>GitHub Repositories</Text>


You should do:
language_code.json
----------------------------------
{
	"appTitle": "GitHub Repositories"
}

component.jsx
----------------------------------
import i18n from 'this_file_path'

<Text>{t('appTitle')}</Text>

This way when a app runs in a system with a different language configured in this file
and defined in a .json, it will loads it json instead of en.json
*/