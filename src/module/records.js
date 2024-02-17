import { State } from '../utils/state'
import { Store } from '../utils/store'
import { formatTime, formatDate } from '../utils/format'
import Loc from '../data/loc.json' assert { type: 'json' }

const store = new Store()

export const updateGameRecords = () => {
  const records = store.get('records')
  const component = document.querySelector('.modal__records_list')
  component.innerHTML = ''
  records
    .sort((a, b) => parseInt(new Date(b.date).getTime() - new Date(a.date).getTime()))
    .forEach(record => {
      const line = document.createElement('li')
      line.className = 'modal__records_item'
      const date = document.createElement('span')
      date.textContent = formatDate(record.date)
      const name = document.createElement('span')
      name.textContent = record.name
      const time = document.createElement('span')
      time.textContent = formatTime(record.time)
      const turns = document.createElement('span')
      turns.textContent = record.turns
      const score = document.createElement('span')
      score.textContent = record.score
      line.append(date, name, time, turns, score)
      component.append(line)
    })
}

export const createModalRecords = () => {
  const state = new State()
  const lang = state.lang

  const modal = document.createElement('div')
  modal.className = 'modal__records hidden'
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
  title.textContent = Loc[lang].recordsTitle

  const wrap = document.createElement('div')
  wrap.className = 'modal__scroll_wrap'
  const records = document.createElement('ul')
  records.className = 'modal__records_list scrolled'
  wrap.append(records)

  const btn = document.createElement('div')
  btn.className = 'button'
  btn.textContent = 'OK'
  btn.addEventListener('click', () => modal.classList.add('hidden'))

  inner.append(left, right, bott, close, title, wrap, btn)
  modal.append(inner)
  modal.addEventListener('click', event => {
    if (event.target === event.currentTarget) {
      event.target.classList.add('hidden')
    }
  })
  return modal
}
