import { createVolumeControl } from './volume'
import { Sound } from '../utils/sound'

const sound = new Sound()
let title = null
let progress = 0

const readyCallback = loaded => {
  if (loaded === 100 && title.textContent.includes('loading')) title.textContent = ''
  if (title && !sound._playing && !sound.music.muted) {
    progress += 1
    if (progress > 3) progress = 1
    const dots = '.'.repeat(progress - 1)
    title.textContent = `${dots}loading${dots}`
  }
}

const startPlayCallback = name => {
  if (title) {
    title.textContent = name
  }
}

const exceptionCallback = () => {
  document.querySelector('.volume__music_icon').classList.add('volume-off')
  title.textContent = ''
}

export function createPlayer() {
  const player = document.createElement('div')
  player.className = 'player__audio'
  const field = document.createElement('p')
  field.className = 'player__title'
  title = field

  sound.readyCallback = readyCallback
  sound.startPlayCallback = startPlayCallback
  sound.exceptionCallback = exceptionCallback

  player.append(createVolumeControl(), title)
  return player
}
