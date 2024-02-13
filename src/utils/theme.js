export class Theme {
  static _instance
  themeName = 'light'
  colors = {
    color00: ' #fff',
    color20: '#c8c8c8',
    color100: '#000',
  }
  callback = () => {}

  constructor() {
    if (Theme._instance) return Theme._instance
    Theme._instance = this
  }

  addCallback(callback = () => {}) {
    this.callback = callback
  }

  emit() {
    // console.log(this.themeName, 'color00:', this.colors.color00, 'color100:', this.colors.color100)
    this.callback()
  }

  get name() {
    return this.themeName
  }
  set name(value) {
    this.themeName = value
    this.emit()
  }

  get color00() {
    return this.colors.color00
  }
  get color100() {
    return this.colors.color100
  }
  set color00(value) {
    this.colors.color00 = value
  }
  set color100(value) {
    this.colors.color100 = value
  }
}
