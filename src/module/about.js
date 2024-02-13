import { State } from '../utils/state'
import { parse } from './parser'
import Loc from '../data/loc.json' assert { type: 'json' }

export const createModalAbout = () => {
  const state = new State()
  const lang = state.lang

  const modal = document.createElement('div')
  modal.className = 'modal__about hidden'
  const inner = document.createElement('div')
  inner.className = 'modal__inner'
  const left = document.createElement('div')
  left.className = 'modal__left'
  const right = document.createElement('div')
  right.className = 'modal__right'

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
  title.textContent = Loc[lang].aboutTitle

  const wrap = document.createElement('div')
  wrap.className = 'modal__scroll_wrap'
  const descr = document.createElement('div')
  descr.className = 'modal__about_descr scrolled'
  wrap.append(descr)

  Loc[lang].description.forEach((block, i) => {
    const article = document.createElement('article')
    const left = document.createElement('div')
    const right = document.createElement('div')
    right.className = `modal__about_img0${i + 1}`
    block.forEach(text => left.append(parse(text)))
    article.append(left, right)
    descr.append(article)
  })

  const btn = document.createElement('div')
  btn.className = 'button'
  btn.textContent = 'OK'
  btn.addEventListener('click', () => modal.classList.add('hidden'))

  inner.append(left, right, close, title, wrap, btn)

  const bott = document.createElement('div')
  bott.className = 'modal__bott'

  modal.append(bott, inner)
  modal.addEventListener('click', event => {
    if (event.target === event.currentTarget) {
      event.target.classList.add('hidden')
    }
  })
  return modal
}
