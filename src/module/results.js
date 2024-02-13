import { GAME } from './constants'
import { State } from '../utils/state'
import { Sound } from '../utils/sound'
import Loc from '../data/loc.json' assert { type: 'json' }

const sound = new Sound()

const showTime = (el, n) => {
  return new Promise(resolve => {
    let num = 0
    function rize() {
      num += Math.max(~~((n - num) / 10) * 2, 1)
      const m = ~~(num / 60)
      const s = num % 60
      el.textContent = `${('0' + m).slice(-2)}:${('0' + s).slice(-2)}`
      sound.use('step')
      if (num >= n) return resolve()
      setTimeout(rize, GAME.spf * 2)
    }
    rize()
  })
}

const showNumber = (el, from, n) => {
  return new Promise(resolve => {
    let num = from
    function rize() {
      num += Math.max(~~((n - num) / 10) * 2, 1)
      el.textContent = num
      sound.use('step')
      if (num >= n) return resolve()
      setTimeout(rize, GAME.spf * 2)
    }
    rize()
  })
}

export const showResults = async ({ time, turns, score, msg = 'win', solution = false, descr = null }) => {
  const state = new State()
  const lang = state.lang
  const { timeScore, turnsScore } = score

  sound.say(msg)
  const modal = document.querySelector('.modal__reslt')
  modal.classList.add('disabled')
  modal.classList.remove('hidden')
  modal.reslt.solution.classList.remove('visible')
  modal.reslt.score.removeAttribute('style')
  modal.reslt.shrike.classList.toggle('loose', msg !== 'win')
  modal.reslt.title.textContent = Loc[lang][msg]
  modal.reslt.descr.textContent = descr ? Loc[lang][descr] ?? descr : ''
  modal.reslt.score.textContent = '0'

  await showTime(modal.reslt.time, time)
  await showNumber(modal.reslt.score, 0, timeScore)
  await new Promise(resolve => setTimeout(() => resolve(), 500))
  await showNumber(modal.reslt.turns, 0, turns)
  await showNumber(modal.reslt.score, timeScore, timeScore + turnsScore)

  if (msg === 'win' && solution) {
    modal.reslt.solution.classList.add('visible')
  }
  if (solution || msg !== 'win') {
    modal.reslt.score.style.textDecoration = 'line-through'
  }

  modal.classList.remove('disabled')
}
