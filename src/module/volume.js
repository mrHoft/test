import { Sound } from '../utils/sound'
import { Store } from '../utils/store'

const snd = new Sound()
const store = new Store()

function changeSoundVolume(icon, value, init) {
  if (!init) snd.sound.muted = false
  if (value) snd.sound.volume = Number(value)
  if (snd.sound.volume > 0.6) {
    icon.className = 'volume__sound_icon volume-3'
  } else if (snd.sound.volume > 0.3) {
    icon.className = 'volume__sound_icon volume-2'
  } else if (snd.sound.volume > 0) {
    icon.className = 'volume__sound_icon volume-1'
  } else {
    icon.className = 'volume__sound_icon volume-off'
  }
}

function changeSoundVolumeEnd() {
  snd.play('dot')
  store.set('sound', { volume: snd.sound.volume, muted: false })
}

function changeMusicVolumeEnd() {
  store.set('music', { volume: snd.music.volume, muted: false })
}

function changeMusicVolume(icon, value) {
  if (snd.music.muted) snd.musicMuted = false
  if (value) snd.musicVolume = Number(value)
  icon.classList.toggle('volume-off', snd.music.volume === 0)
}

function muteSound(icon) {
  snd.sound.muted = !snd.sound.muted
  if (snd.sound.muted) icon.className = 'volume__sound_icon volume-off'
  else changeSoundVolume(icon)
  store.set('sound.muted', snd.sound.muted)
}

function muteMusic(icon) {
  snd.musicMuted = !snd.music.muted
  icon.classList.toggle('volume-off', snd.music.muted)
  store.set('music.muted', snd.music.muted)
}

export function createVolumeControl() {
  const s = store.get('sound')
  const m = store.get('music')
  if (s) {
    if (Number.isFinite(s.volume)) snd.sound.volume = s.volume
    if (typeof s.muted === 'boolean') snd.sound.muted = s.muted
  }
  if (m) {
    if (Number.isFinite(m.volume)) snd.music.volume = m.volume
    if (typeof m.muted === 'boolean') snd.music.muted = m.muted
  }

  const volume = document.createElement('div')
  volume.className = 'volume'

  const sound = document.createElement('div')
  sound.className = 'volume__sound'
  const sndIcon = document.createElement('div')
  sndIcon.className = 'volume__sound_icon'
  const sndRange = document.createElement('input')
  sndRange.className = 'volume__range'
  sndRange.type = 'range'
  sndRange.step = '0.05'
  sndRange.value = snd.sound.volume
  sndRange.max = '1'
  sndRange.addEventListener('input', () => changeSoundVolume(sndIcon, sndRange.value))
  sndRange.addEventListener('mouseup', changeSoundVolumeEnd)
  sndIcon.addEventListener('click', () => muteSound(sndIcon))
  sound.append(sndIcon, sndRange)

  const music = document.createElement('div')
  music.className = 'volume__music'
  const musIcon = document.createElement('div')
  musIcon.className = 'volume__music_icon'
  const musRange = document.createElement('input')
  musRange.className = 'volume__range'
  musRange.type = 'range'
  musRange.step = '0.05'
  musRange.value = snd.music.volume
  musRange.max = '1'
  musRange.addEventListener('input', () => changeMusicVolume(musIcon, musRange.value))
  musRange.addEventListener('mouseup', changeMusicVolumeEnd)
  musIcon.addEventListener('click', () => muteMusic(musIcon))
  music.append(musIcon, musRange)

  volume.append(sound, music)

  changeSoundVolume(sndIcon, snd.sound.volume, true)
  if (snd.sound.muted) sndIcon.className = 'volume__sound_icon volume-off'
  musIcon.classList.toggle('volume-off', snd.music.volume === 0 || snd.music.muted)

  return volume
}
