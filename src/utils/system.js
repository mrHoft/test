import { GAME } from '../module/constants'

export const getSystemTheme = () => {
  let theme = 'light'
  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) theme = 'dark'
  return theme
}

export const getSystemLanguage = () => {
  let language = 'en'
  if (navigator?.language) language = navigator.language.slice(0, 2)
  if (!GAME.languages.includes(language)) language = 'en'
  return language
}
