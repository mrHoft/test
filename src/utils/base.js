import puzzleData from '../data/puzzle.json' assert { type: 'json' }

export class Puzzles {
  static _instance
  base = [[], [], []]

  constructor() {
    if (Puzzles._instance) return Puzzles._instance
    Puzzles._instance = this
    this.base = puzzleData
  }

  blank(mode) {
    const rows = (mode + 1) * 5
    return Array.from({ length: rows }, () => Array.from({ length: rows }, () => 0))
  }

  stringify(data) {
    const arr = data.map(a => a.map(v => (v === 1 ? 1 : 0)))
    const dataString = arr.flat(1).join('')
    return dataString
  }

  add(name, data) {
    if (!name || name.length < 2) return new Error('Invalid name')
    if (!data || (!Array.isArray(data) && typeof data !== 'string')) return new Error('Invalid puzzle data')
    const dataString = typeof data === 'string' ? data : this.stringify(data)
    const rows = Math.sqrt(dataString.length)
    const mode = rows / 5 - 1
    const list = this.list(mode)
    if (list.includes(name)) return new Error(`${name} already exist`)
    this.base[mode].unshift({ name, data: dataString })
    return 'Puzzle was saved'
  }

  parse(dataString) {
    const rows = Math.sqrt(dataString.length)
    if (rows !== ~~rows) return null
    return Array.from({ length: rows }, (_, y) => Array.from({ length: rows }, (_, x) => Number(dataString.charAt(y * rows + x))))
  }

  get(mode, puzzle) {
    if (!this.base[mode]) {
      console.warn(`Game mode ${mode} not found!`)
      return this.blank(mode)
    }
    if (!this.base[mode][puzzle]) {
      console.warn(`Game puzzle ${puzzle} not found!`)
      return this.blank(mode)
    }

    const { name, data: dataString } = this.base[mode][puzzle]
    const data = this.parse(dataString)

    if (!data) {
      console.warn(`Game puzzle ${name} is corrupted!`)
      return this.blank(mode)
    }

    return { name, data }
  }

  list(mode) {
    const arr = this.base[mode]
    if (!arr) {
      console.warn(`Game mode ${mode} not found!`)
      return []
    }

    return Array.from({ length: arr.length }, (_, i) => arr[i].name)
  }
}
