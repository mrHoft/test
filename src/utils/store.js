import { getSystemTheme, getSystemLanguage } from './system'

const initialState = {
  theme: getSystemTheme(),
  lang: getSystemLanguage(),
  sound: { volume: 0.5, muted: false },
  music: { volume: 0.3, muted: true },
  records: [],
  puzzles: [],
  last: {
    game: null,
    editor: null,
  },
}

// localStorage.getItem('Nonograms')

export class Store {
  static STORE_NAME = 'Nonograms'
  static _instance
  _state = {}

  constructor() {
    if (Store._instance) return Store._instance
    const savedState = localStorage.getItem(Store.STORE_NAME)
    this._state = JSON.parse(savedState) ?? initialState
    Store._instance = this
  }

  getState() {
    return this._state
  }

  removeState() {
    this._state = {}
    this.emit()
  }

  get(id) {
    return getValue(this._state, id)
  }

  set(id, value) {
    setValue(this._state, id, value)
    this.emit()
  }

  add(id, value) {
    const arr = getValue(this._state, id)
    if (arr === undefined) setValue(this._state, id, [value])
    else if (!Array.isArray(arr)) throw new Error(`Can not add to ${id}`)
    else arr.push(value)
    this.emit()
  }

  emit() {
    localStorage.setItem(Store.STORE_NAME, JSON.stringify(this._state))
    // console.log('state', this._state)
  }
}

function setValue(object, path, value) {
  if (object !== Object(object)) return object
  if (typeof path !== 'string' || path === '') throw new Error('App store. Path must be type of string.')
  let obj = object
  const arr = path.split('.')
  const last = arr.pop()
  arr.forEach(key => {
    if (!obj[key]) obj[key] = {}
    obj = obj[key]
  })
  if (last) obj[last] = value
  return object
}

function getValue(object, path) {
  if (object !== Object(object) || typeof path !== 'string' || path === '') {
    console.warn('App store. Wrong:', path)
    return undefined
  }
  return path.split('.').reduce((obj, key) => (obj[key] !== undefined ? obj[key] : undefined), object)
}
