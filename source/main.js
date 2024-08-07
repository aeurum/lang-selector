import { iso639 } from './iso639'
import { ties } from './ties'
import { official } from './official'

export { selectLanguage }

function normalize(subtags) {
  return [ iso639[subtags[0]] ?? subtags[0], ...subtags.slice(1) ].join('-')
}
function lower(array) {
  return array.map(value => value.toLowerCase())
}
function primarize(array) {
  return array.map(value => primary(value))
}
function crack(tag) {
  return tag.split('-')
}
function primary(tag) {
  return crack(tag)[0]
}
function fetch(subtags, outof = official) {
  for (const subtag of subtags) if (outof[subtag]) return outof[subtag]
}

function tagByCountry(subtags, suptags, supsubs, languages) {
  const tags = fetch(subtags.slice(1))
  if (!tags) return; else for (const tag of tags)
    if (suptags.includes(tag)) return languages.supported[suptags.indexOf(tag)]
  const subs = primarize(tags)
  if (!subs) return; else for (const sub of subs) {
    if (supsubs.includes(sub)) return languages.supported[supsubs.indexOf(sub)]
  }
}

function selectLanguage(tag, languages) {
  if (!tag) return languages.default
  const subtags = lower(crack(tag))
  const suptags = lower(languages.supported)
  const supsubs = primarize(suptags)
  tag = normalize(subtags)
  if (suptags.includes(tag))
    return languages.supported[suptags.indexOf(tag)]
  const sub = primary(tag)
  if (supsubs.includes(sub))
    return languages.supported[supsubs.indexOf(sub)]
  const tieByTag = ties[tag]
  if (supsubs.includes(tieByTag))
    return languages.supported[supsubs.indexOf(tieByTag)]
  const tieBySub = ties[sub]
  if (supsubs.includes(tieBySub))
    return languages.supported[supsubs.indexOf(tieBySub)]
  return tagByCountry(subtags, suptags, supsubs, languages) ?? languages.default
}