import { Theme } from '../utils/theme'
import { GAME } from '../module/constants'
import { createPlayer } from './player'
import { createModeSelector } from './mode'
import { initMenu, createModalGame, createModalResults, createSideMenu } from './menu'
import { createModalRecords } from './records'
import { createModalAbout } from './about'
import { themeUpdate } from './themeUpdate'
import { State } from '../utils/state'
import { Store } from '../utils/store'
import Loc from '../data/loc.json' assert { type: 'json' }

const theme = new Theme()
const store = new Store()
const state = new State()
let pending = 2

function createChars() {
  const chars = document.createElement('div')
  chars.className = 'chars'
  const left = document.createElement('div')
  left.className = 'chars__shrike'
  const right = document.createElement('div')
  right.className = 'chars__bulldog'

  const shrike = document.createElement('blockquote')
  shrike.className = 'speech__shrike hidden'
  left.append(shrike)
  const bulldog = document.createElement('blockquote')
  bulldog.className = 'speech__bulldog hidden'
  right.append(bulldog)

  chars.append(left, right)
  return chars
}

function createStats() {
  const stats = document.createElement('div')
  stats.className = 'game__stats'

  const turns = document.createElement('span')
  turns.className = 'stats__turns'
  turns.textContent = '0/0'

  const pos = document.createElement('span')
  pos.className = 'stats__pos'
  pos.textContent = '0:0'

  const wrap = document.createElement('div')
  wrap.className = 'stats__progress'

  const timer = document.createElement('p')
  timer.className = 'stats__timer'
  timer.textContent = '00:00'

  const progress = document.createElement('div')
  progress.className = 'stats__progress_wrap'
  const progressbar = document.createElement('div')
  progressbar.className = 'stats__progress_bar'
  progress.append(progressbar)

  wrap.append(timer, progress)

  stats.append(turns, wrap, pos)
  return stats
}

function createGameField() {
  const game = document.createElement('div')
  game.className = 'game hidden'

  const field = document.createElement('canvas')
  field.className = 'game__field'
  field.width = GAME.size
  field.height = GAME.size
  field.textContent = 'Game field'

  const grid = document.createElement('canvas')
  grid.className = 'game__grid'
  grid.width = GAME.size
  grid.height = GAME.size

  const hover = document.createElement('canvas')
  hover.className = 'game__hover'
  hover.width = GAME.size
  hover.height = GAME.size

  const reset = document.createElement('div')
  reset.className = 'game__reset hex-btn'
  const resetInner = document.createElement('div')
  const resetImg = document.createElement('div')
  resetImg.className = 'game__reset_icon'
  resetInner.append(resetImg)
  reset.append(resetInner)

  const solution = document.createElement('div')
  solution.className = 'game__solution hex-btn'
  const solutionInner = document.createElement('div')
  solutionInner.textContent = '!'
  solution.append(solutionInner)

  const save = document.createElement('div')
  save.className = 'game__save hex-btn'
  const saveInner = document.createElement('div')
  const saveImg = document.createElement('div')
  saveImg.className = 'game__save_icon'
  saveInner.append(saveImg)
  save.append(saveInner)

  const header = document.createElement('div')
  header.className = 'game__header'
  const headerText = document.createElement('p')
  headerText.className = 'game__header_text hidden'
  header.append(headerText, createModeSelector())

  const left = document.createElement('div')
  left.className = 'game__left'
  const right = document.createElement('div')
  right.className = 'game__right'
  const top = document.createElement('div')
  top.className = 'game__top'
  const bott = document.createElement('div')
  bott.className = 'game__bott'

  game.append(header, field, grid, hover, left, right, top, bott, reset, solution, save, createStats(), createSaveForm())
  return game
}

function createSaveForm() {
  const lang = state.lang

  const save = document.createElement('form')
  save.className = 'editor__save_form hidden'

  const name = document.createElement('div')
  name.className = 'editor__save_name'

  const input = document.createElement('input')
  input.name = 'name'
  input.type = 'text'
  input.autocomplete = 'off'
  input.placeholder = ''
  input.className = 'editor__save_name-text'

  const label = document.createElement('label')
  label.className = 'editor__save_name-label'
  label.textContent = Loc[lang].puzzleName

  name.append(input, label)

  const btn = document.createElement('button')
  btn.type = 'submit'
  btn.className = 'editor__save_btn button'
  btn.textContent = Loc[lang].save

  const message = document.createElement('div')
  message.className = 'editor__save_message hidden'

  save.append(name, btn, message)
  return save
}

function createMain() {
  const main = document.createElement('main')
  main.className = 'main'

  const base = document.createElement('div')
  base.className = 'base'

  base.append(createGameField())

  const bg = document.createElement('div')
  bg.className = 'bg'

  main.append(bg, createSideMenu(), createPlayer(), base, createChars())
  return main
}

function createFromTemplate(name, callback = () => {}) {
  const el = document.createElement(name)
  el.className = name
  const xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        el.innerHTML = this.responseText
        pending -= 1
        if (pending <= 0) callback()
      }
      if (this.status === 404) {
        el.innerHTML = 'Page not found.'
      }
    }
  }
  xhttp.open('GET', `./template/${name}.tmpl`, true)
  xhttp.send()
  return el
}

export default async function initUI() {
  const lang = store.get('lang') ?? 'en'
  state.lang = lang
  // console.log('lanuage:', lang)
  const themeName = store.get('theme')
  document.body.classList.toggle('theme__dark', themeName === 'dark')

  const getThemeColors = name => {
    theme.color00 = getComputedStyle(document.body).getPropertyValue('--color00')
    theme.color50 = getComputedStyle(document.body).getPropertyValue('--color50')
    theme.color80 = getComputedStyle(document.body).getPropertyValue('--color80')
    theme.color90 = getComputedStyle(document.body).getPropertyValue('--color90')
    theme.color100 = getComputedStyle(document.body).getPropertyValue('--color100')
    theme.name = name
  }

  const initThemeSwitcher = () => {
    const switcher = document.querySelector('.theme__switcher')
    switcher.checked = themeName === 'dark'
    getThemeColors(themeName)

    switcher.addEventListener('change', event => {
      event.preventDefault()
      const darkTheme = event.currentTarget.checked
      document.body.classList.toggle('theme__dark', darkTheme)
      getThemeColors(darkTheme ? 'dark' : 'light')
      store.set('theme', darkTheme ? 'dark' : 'light')
      themeUpdate()
    })
  }

  const initLanguageSwitcher = () => {
    const icon = document.querySelector('.language__icon')
    const switcher = document.querySelector('.language__select')
    switcher.value = lang
    icon.className = `language__icon ${lang}`

    switcher.addEventListener('change', event => {
      event.preventDefault()
      store.set('lang', event.target.value)
      location.replace(location.href)
    })
  }

  return new Promise(resolve => {
    const initPendingComponents = () => {
      initThemeSwitcher()
      themeUpdate()
      initLanguageSwitcher()
      resolve()
    }

    document.body.append(
      createFromTemplate('header', initPendingComponents),
      createMain(),
      createFromTemplate('footer', initPendingComponents),
      createModalGame(),
      createModalResults(),
      createModalRecords(),
      createModalAbout()
    )

    initMenu()
  })
}
