# lang-selector

`lang-selector` can help you select the most suitable language based on the IETF language tag.

## Installation

```
npm i --save lang-selector
```

## Usage
```
const { selectLanguage } = require('lang-selector');
// import { selectLanguage } from 'lang-selector'

// define `languages`
const languages = {
  default: 'ja',
  supported: [
    'ja',
    'fr',
    'es',
    'wal',
    'tr',
    'tr-CY',
    'en-GB',
    'ru-RU',
    'pt-PT',
    'zh-Hans'
  ]
}

for (const tag of [
  null,             // ja
  'wal',            // wal
  'af-ZA',          // en-GB
  'zh-Hant',        // zh-Hans
  'pt',             // pt-PT
  'pt-PT',          // pt-PT
  'pt-BR',          // pt-PT
  'it',             // ja
  'it-CH',          // fr
  'tr',             // tr
  'tur-CY',         // tr-CY
  'uk',             // ru-RU
  'ro',             // ja
  'ro-MD',          // ru-RU
  'ru',             // ru-RU
  'rus',            // ru-RU
  'cu-RU',          // ru-RU
  'kk-KZ',          // ru-RU
  'fr',             // fr
  'ar',             // ja
  'ar-EG',          // ja
  'ar-MA',          // fr
  'en',             // en-GB
  'ca',             // es
  'ca-ES-VALENCIA'  // es
]) console.log(`${tag} => ${selectLanguage(tag, languages)}`)
```

## Contributing
Contributions are only allowed in TON:
```
UQCYqT9-ycmXE3o57Cac1sM5ntIKdjqIwP3kzWmiZik0VU_b
```