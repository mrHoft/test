const sounds = {
  dot: { url: './public/dot.ogg', type: 'multiple' },
  tod: { url: './public/tod.ogg', type: 'multiple' },
  cross: { url: './public/cross.ogg', type: 'multiple' },
  whoosh: { url: './public/whoosh01.ogg' },
  slide: { url: './public/whoosh02.ogg' },
  step: { url: './public/step.ogg', type: 'multiple' },
}

const music = [
  {
    name: 'Intro',
    url: './public/track01.ogg',
  },
  {
    name: 'Tool In Space',
    url: './public/track02.ogg',
  },
  {
    name: 'Inside The Bucket',
    url: './public/track03.ogg',
  },
]

const speech = {
  win: ['./public/win01.ogg'],
  loose: ['./public/loose01.ogg', './public/loose02.ogg', './public/loose03.ogg', './public/loose04.ogg', './public/loose05.ogg'],
}

const countTotal = Object.keys(sounds).length + music.length * 2 + Object.values(speech).reduce((acc, item) => acc + item.length, 0)

export class Sound {
  static _instance
  sound = { volume: 0.5, muted: false }
  music = { volume: 0.25, muted: true }
  sounds = {}
  tracks = []
  speech = { win: [], loose: [] }
  _loaded = 0
  ready = 0
  _pending = null
  _playing = null
  readyCallback = () => {}
  startPlayCallback = () => {}
  exceptionCallback = () => {}

  constructor() {
    if (Sound._instance) return Sound._instance
    Sound._instance = this
    Object.keys(speech).forEach(name => speech[name].forEach(url => this._getSound(url, name, 'speech')))
    Object.keys(sounds).forEach(name => this._getSound(sounds[name].url, name, sounds[name].type))
    music.forEach(item => this._getSound(item.url, item.name, 'music'))

    this._canplay = this._canplay.bind(this)
    this._ended = this._ended.bind(this)
  }

  /** Change music.volume and currently playing audio volume.
   * @param {number} value
   */
  set musicVolume(value) {
    this.music.volume = value
    if (this._playing) this._playing.audio.volume = value
  }

  /** Change music.muted and mute/unmute currently playing audio.
   * @param {boolean} value
   */
  set musicMuted(value) {
    this.music.muted = value
    if (this._playing) this._playing.audio.muted = value
    else this.play(0, 1)
  }

  play(track, loop) {
    if (this.music.muted) return

    if (!this.tracks[track] || !this.tracks[track].ready) {
      console.log(`Pending music: ${track}. ${this.tracks[track] ? this.tracks[track].name : ''}`)
      this._pending = track
      return
    }

    const audio = this.tracks[track].audio
    audio.volume = this.music.volume
    audio.muted = this.music.muted
    audio
      .play()
      .then(() => {
        if (loop) audio.addEventListener('ended', this._ended)
        this._playing = { track, audio }
        this.startPlayCallback(this.tracks[track].name)
      })
      .catch(error => {
        console.warn(error)
        this.music.muted = true
        this.exceptionCallback()
      })
  }

  use(name) {
    if (this.sound.muted) return
    if (!this.sounds[name]) {
      // console.warn(`No sound: ${name}`)
      return
    }
    for (let i = 0; i < 10; i += 1) {
      const audio = this.sounds[name][i]
      if (audio.currentTime === 0 || audio.ended) {
        audio.volume = this.sound.volume
        audio.play().catch(error => console.log(error))
        return
      }
    }
  }

  say(name) {
    if (this.sound.muted) return
    if (!this.speech[name]) {
      console.warn(`No speech: ${name}`)
      return
    }
    const audio = this.speech[name][~~(Math.random() * this.speech[name].length)]
    audio.volume = this.sound.volume
    audio.play().catch(error => console.log(error))
  }

  _getSound(path, name, type = 0) {
    const self = this
    const requestObj = new Request(path, {
      method: 'GET',
      headers: {
        'Accept-Ranges': '1000000000',
      },
      referrerPolicy: 'no-referrer',
    })

    fetch(requestObj)
      .then(response => response)
      .then(async function (outcome) {
        const blob = await outcome.blob()
        const url = window.URL.createObjectURL(blob)

        self._loaded += 1
        self.ready = ~~((self._loaded / countTotal) * 100)

        if (type === 'speech') {
          const audio = new Audio()
          audio.src = url
          self.speech[name].push(audio)
        } else if (type === 'music') {
          const audio = new Audio()
          audio.src = url
          audio.localInfo = { name, track: self.tracks.length }
          audio.addEventListener('canplay', self._canplay)
          self.tracks.push({ audio, name })
        } else {
          self.sounds[name] = Array.from({ length: type === 'multiple' ? 10 : 1 }, () => {
            const audio = new Audio()
            audio.src = url
            return audio
          })
        }

        self.readyCallback(self.ready, name)
      })
  }

  _canplay(event) {
    event.target.removeEventListener('canplay', this._canplay)
    const { name, track } = event.target.localInfo
    this._loaded += 1
    this.ready = ~~((this._loaded / countTotal) * 100)
    this.tracks[track].ready = true
    // console.log(`${track}. Can play '${name}'. Pending: ${this._pending}`)

    if (this._pending === track) {
      this.play(this._pending, 1)
      this._pending = null
    }
    this.readyCallback(this.ready, name)
  }

  _ended() {
    if (!this._playing) return
    let next = (this._playing.track ?? 0) + 1
    if (next >= this.tracks.length) next = 0
    this._playing = null
    this.play(next, 1)
  }
}
