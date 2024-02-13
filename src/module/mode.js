import { State } from '../utils/state'
import { GAME } from './constants'

const state = new State()

function handleModeChange() {
  // console.log('Mode:',this.value)
  state.mode = this.value
}

export function createModeSelector() {
  const mode = document.createElement('div')
  mode.className = 'editor__mode mode hidden'
  GAME.modes.forEach((name, i) => {
    const input = document.createElement('input')
    input.className = 'editor__mode_select mode-select'
    input.type = 'radio'
    input.value = i
    input.name = 'e_mode'
    input.id = `e_mode${i}`
    input.addEventListener('change', handleModeChange)
    const label = document.createElement('label')
    label.textContent = name
    label.htmlFor = `e_mode${i}`
    mode.append(input, label)
  })
  return mode
}
