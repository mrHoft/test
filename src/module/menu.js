import { start, editor } from './game'
import { State } from '../utils/state'
import { Puzzles } from '../utils/base'
import { GAME } from './constants'
import { message } from '../utils/message'
import { Store } from '../utils/store'
import { Sound } from '../utils/sound'
import { Theme } from '../utils/theme'
import { updateGameRecords } from './records'
import Loc from '../data/loc.json' assert { type: 'json' }

const store = new Store()
const sound = new Sound()
const puzzles = new Puzzles()
let selectedMode = 0
let selectedPuzzle = 0

const startNewGame = () => {
  sound.use('slide')
  const modal = document.querySelector('.modal__game')
  modal.classList.remove('hidden')
  document.querySelector('.modal__game_btn').classList.add('disabled')
  document.querySelector('.modal__puzzle_select').value = ''
  updatePuzzleList()
  drawPreview(true)
}

const handleStartClick = () => {
  document.querySelector('.modal__game').classList.add('hidden')
  start(selectedMode, selectedPuzzle)
}

const startRandomGame = () => {
  document.querySelector('.modal__game').classList.add('hidden')
  start()
}

const LoadGame = () => {
  const last = store.get('last.game')
  if (last) start(last.mode, last.puzzle, last)
  else message('bulldog', 'noSavedGame')
}

const openEditor = () => {
  const state = new State()
  if (state.status === 'editor') {
    message('bulldog', 'unknown')
    return
  }
  state.mode = 2
  editor()
}

const showRecords = () => {
  sound.use('slide')
  document.querySelector('.modal__records').classList.remove('hidden')
  updateGameRecords()
}

const showAbout = () => {
  sound.use('slide')
  document.querySelector('.modal__about').classList.remove('hidden')
}

export const updatePuzzleList = () => {
  const list = puzzles.list(selectedMode)
  const select = document.querySelector('.modal__puzzle_select')
  const records = store.get('records')
  select.innerHTML = ''
  list.forEach((text, i) => {
    let passed = records.some(record => record.mode === selectedMode && record.score > 0 && record.name === text)
    const el = document.createElement('option')
    el.value = i
    el.textContent = `${i < 9 ? `\u00A0${i + 1}` : i + 1}. ${text}${passed ? ' \u2714' : ''}`
    select.append(el)
  })
}

function createPuzzleSelector() {
  const state = new State()
  const lang = state.lang
  const component = document.createElement('div')
  component.className = 'modal__puzzle'

  // Left
  const left = document.createElement('div')
  left.className = 'modal__puzzle_left'

  const label1 = document.createElement('span')
  label1.textContent = Loc[lang].selectPuzzle

  const wrap = document.createElement('div')
  wrap.className = 'modal__scroll_wrap'

  const select = document.createElement('select')
  select.className = 'modal__puzzle_select scrolled'
  select.size = 10
  select.addEventListener('click', handlePuzzleChange)

  wrap.append(select)
  left.append(label1, wrap)

  // Right
  const right = document.createElement('div')
  right.className = 'modal__puzzle_right'

  const label2 = document.createElement('span')
  label2.textContent = Loc[lang].preview

  const preview = document.createElement('div')
  preview.className = 'modal__puzzle_preview-wrap'
  const field = document.createElement('canvas')
  field.className = 'modal__puzzle_preview'
  field.width = 75
  field.height = 75
  field.textContent = 'Preview field'
  preview.append(field)
  right.append(label2, preview)

  component.append(left, right)
  return component
}

const handlePuzzleChange = event => {
  document.querySelector('.modal__game_btn').classList.remove('disabled')
  selectedPuzzle = Number(event.currentTarget.value)
  sound.use('step')
  drawPreview()
}

const drawPreview = clearOnly => {
  const theme = new Theme()
  const canvas = document.querySelector('.modal__puzzle_preview')
  const ctx = canvas.getContext('2d')
  const SIZE = 75
  ctx.clearRect(0, 0, SIZE, SIZE)
  if (clearOnly) return
  const arr = puzzles.get(selectedMode, selectedPuzzle).data
  const S = SIZE / 5 / (selectedMode + 1)
  const rows = arr.length

  ctx.clearRect(0, 0, SIZE, SIZE)
  ctx.fillStyle = theme.color100
  for (let y = 0; y < rows; y += 1) {
    for (let x = 0; x < rows; x += 1) {
      if (arr[y][x]) {
        ctx.fillRect(x * S, y * S, S, S)
      }
    }
  }
}

const handleModeChange = event => {
  const state = new State()
  // console.log(event.target.value)
  selectedMode = Number(event.target.value)
  sound.use('step')
  updatePuzzleList()
}

function createModeSelector() {
  const mode = document.createElement('div')
  mode.className = 'modal__mode mode'
  GAME.modes.forEach((name, i) => {
    const input = document.createElement('input')
    input.className = 'modal__mode_select mode-select'
    input.type = 'radio'
    input.value = i
    input.name = 'm_mode'
    input.id = `m_mode${i}`
    input.addEventListener('change', handleModeChange)
    const label = document.createElement('label')
    label.textContent = name
    label.htmlFor = `m_mode${i}`
    mode.append(input, label)
  })
  return mode
}

const handleModalClick = event => {
  if (event.target === event.currentTarget) {
    event.target.classList.add('hidden')
  }
}

export const createModalGame = () => {
  const state = new State()
  const lang = state.lang

  const modal = document.createElement('div')
  modal.className = 'modal__game hidden'
  const inner = document.createElement('div')
  inner.className = 'modal__inner'
  const left = document.createElement('div')
  left.className = 'modal__left'
  const right = document.createElement('div')
  right.className = 'modal__right'
  const bott = document.createElement('div')
  bott.className = 'modal__bott'

  const close = document.createElement('div')
  close.className = 'modal__close hex-btn'
  const closeInner = document.createElement('div')
  const closeImg = document.createElement('div')
  closeImg.className = 'modal__close_icon'
  closeInner.append(closeImg)
  close.append(closeInner)
  close.addEventListener('click', () => modal.classList.add('hidden'))

  const title = document.createElement('h2')
  title.className = 'modal__title'
  title.textContent = Loc[lang].startNewGame

  const buttons = document.createElement('div')
  buttons.className = 'modal__buttons'
  const btn = document.createElement('div')
  btn.className = 'modal__game_btn button'
  btn.textContent = Loc[lang].start
  btn.addEventListener('click', handleStartClick)
  const rnd = document.createElement('div')
  rnd.className = 'button'
  rnd.textContent = Loc[lang].randomGame
  rnd.addEventListener('click', startRandomGame)
  buttons.append(btn, rnd)

  inner.append(left, right, bott, close, title, createModeSelector(), createPuzzleSelector(), buttons)

  modal.append(inner)
  modal.addEventListener('click', handleModalClick)
  return modal
}

export const createModalResults = () => {
  const state = new State()
  const lang = state.lang

  const modal = document.createElement('div')
  modal.className = 'modal__reslt hidden'
  const inner = document.createElement('div')
  inner.className = 'modal__inner'
  const left = document.createElement('div')
  left.className = 'modal__left'
  const right = document.createElement('div')
  right.className = 'modal__right'
  const bott = document.createElement('div')
  bott.className = 'modal__bott'

  const close = document.createElement('div')
  close.className = 'modal__close hex-btn'
  const closeInner = document.createElement('div')
  const closeImg = document.createElement('div')
  closeImg.className = 'modal__close_icon'
  closeInner.append(closeImg)
  close.append(closeInner)
  close.addEventListener('click', () => modal.classList.add('hidden'))

  const title = document.createElement('h2')
  title.className = 'modal__title'
  title.textContent = Loc[lang].win

  const descr = document.createElement('p')
  descr.className = 'modal__reslt_descr'

  const p1 = document.createElement('p')
  p1.className = 'modal__reslt_descr'
  const time = document.createElement('span')
  time.className = 'modal__time'
  time.textContent = '00:00'
  p1.append(document.createTextNode(`${Loc[lang].timeUsed}:`), time)

  const p2 = document.createElement('p')
  p2.className = 'modal__reslt_descr'
  const turns = document.createElement('span')
  turns.className = 'modal__turns'
  turns.textContent = '0'
  p2.append(document.createTextNode(`${Loc[lang].turnsUsed}:`), turns)

  const p3 = document.createElement('p')
  p3.className = 'modal__reslt_descr'
  const score = document.createElement('span')
  score.className = 'modal__score'
  score.textContent = '0'
  p3.append(document.createTextNode(`${Loc[lang].score}:`), score)
  const solution = document.createElement('div')
  solution.className = 'modal__solution'
  solution.textContent = `(${Loc[lang].solutionUsed})`

  const shrike = document.createElement('div')
  shrike.className = 'modal__reslt_shrike'

  const btn = document.createElement('div')
  btn.className = 'button'
  btn.textContent = 'OK'
  btn.addEventListener('click', () => modal.classList.add('hidden'))

  inner.append(left, right, bott, close, title, descr, p1, p2, p3, solution, shrike, btn)
  modal.reslt = { title, descr, time, turns, score, shrike, solution }

  modal.append(inner)
  modal.addEventListener('click', handleModalClick)
  return modal
}

export const createSideMenu = () => {
  const state = new State()
  const lang = state.lang
  const items = ['newGame', 'randomGame', 'loadGame', 'editor', 'records', 'about']

  const menu = document.createElement('div')
  menu.className = 'menu__side'
  const right = document.createElement('div')
  right.className = 'menu__side_right'

  const nav = document.createElement('nav')
  nav.className = 'menu__side_nav'
  const list = document.createElement('ul')
  list.className = 'menu__list'

  items.forEach(name => {
    const id = name.match(/^[a-z]+/)[0]
    const item = document.createElement('li')
    item.className = 'menu__list_item'
    item.addEventListener('mouseenter', () => sound.use('step'))

    const btn = document.createElement('div')
    btn.className = 'hex-btn'
    const btnBg = document.createElement('div')
    const btnImg = document.createElement('div')
    btnImg.className = `icon_${id}`
    btnBg.append(btnImg)
    btn.append(btnBg)

    item.append(document.createTextNode(Loc[lang][name]), btn)
    list.append(item)
  })

  nav.append(list)
  menu.append(right, nav)
  return menu
}

export const initMenu = () => {
  const state = new State()
  const lang = state.lang

  const menuItems = document.querySelectorAll('.menu__list_item')
  menuItems[0].addEventListener('click', startNewGame)
  menuItems[1].addEventListener('click', startRandomGame)
  menuItems[2].addEventListener('click', LoadGame)
  menuItems[3].addEventListener('click', openEditor)
  menuItems[4].addEventListener('click', showRecords)
  menuItems[5].addEventListener('click', showAbout)

  selectedMode = state.mode

  const modeSelectors = document.querySelectorAll('.modal__mode_select')
  modeSelectors[selectedMode].checked = true
}
