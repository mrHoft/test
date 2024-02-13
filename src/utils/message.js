import messages from '../data/messages.json' assert { type: 'json' }
import { State } from './state'

const state = new State()

const timer = {
  shrike: null,
  bulldog: null,
}

export const message = (character, id = null, delay = 3000) => {
  const lang = state.lang
  const el = document.querySelector(`.speech__${character}`) // shrike / bulldog
  if (!id) {
    el.classList.add('hidden')
    return
  }
  if (!messages[lang] || !messages[lang][id]) throw new Error('No such message:', id)

  const msg = messages[lang][id]
  const text = Array.isArray(msg) ? msg[~~(Math.random() * msg.length)] : msg
  el.textContent = text
  el.classList.remove('hidden')
  clearTimeout(timer[character])
  timer[character] = setTimeout(() => el.classList.add('hidden'), delay)
}
