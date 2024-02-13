import { Theme } from '../utils/theme'

export const themeUpdate = () => {
  const theme = new Theme()
  const name = theme.name

  document.querySelectorAll('.modal__close_icon').forEach(el => el.classList.toggle('invert', name === 'dark'))

  // Game
  document.querySelector('.game__reset_icon').classList.toggle('invert', name === 'dark')
  document.querySelector('.game__save_icon').classList.toggle('invert', name === 'dark')

  document.querySelector('.rss__logo').classList.toggle('invert', name !== 'dark')
  document.querySelector('.volume__sound_icon').classList.toggle('invert', name !== 'dark')
  document.querySelector('.volume__music_icon').classList.toggle('invert', name !== 'dark')
  document.querySelector('.bg').classList.toggle('bright', name !== 'dark')

  // Side menu
  document.querySelector('.icon_new').classList.toggle('invert', name === 'dark')
  document.querySelector('.icon_random').classList.toggle('invert', name === 'dark')
  document.querySelector('.icon_load').classList.toggle('invert', name === 'dark')
  document.querySelector('.icon_editor').classList.toggle('invert', name === 'dark')
  document.querySelector('.icon_records').classList.toggle('invert', name === 'dark')
  document.querySelector('.icon_about').classList.toggle('invert', name === 'dark')
}
