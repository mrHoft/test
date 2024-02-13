export class State {
  static _instance
  static _current = {
    ctx: null,
    grid: null,
    pointer: null,
    hover: null,
    mode: 0,
  }
  status = null
  lang = 'en'
  modeUpdateCallback = () => {}

  constructor() {
    if (!State._current.ctx) this.prepare()
    if (State._instance) return State._instance
    State._instance = this
  }

  prepare() {
    const canvas = document.querySelector('.game__field')
    if (canvas && canvas.getContext) {
      State._current.ctx = canvas.getContext('2d')
    }
    const grid = document.querySelector('.game__grid')
    if (grid && grid.getContext) {
      State._current.grid = grid.getContext('2d')
    }
    const hover = document.querySelector('.game__hover')
    if (hover && hover.getContext) {
      State._current.hover = hover
      State._current.pointer = hover.getContext('2d')
    }
  }

  setModeUpdateCallback(callback = () => {}) {
    this.modeUpdateCallback = callback
  }

  get ctx() {
    return State._current.ctx
  }
  get grid() {
    return State._current.grid
  }
  get mode() {
    return State._current.mode
  }
  set mode(value) {
    const oldValue = State._current.mode
    State._current.mode = Number(value)
    if (value !== oldValue) this.modeUpdateCallback()
  }
  get pointer() {
    return State._current.pointer
  }
  get hover() {
    return State._current.hover
  }
}
