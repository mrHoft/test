import { State } from '../utils/state'
import { Sound } from '../utils/sound'
import { GAME } from './constants'
import { Theme } from '../utils/theme'
import { Puzzles } from '../utils/base'
import * as draw from './draw'
import { updatePuzzleList } from './menu'
import { message } from '../utils/message'
import { showResults } from './results'
import { Store } from '../utils/store'
import { formatTime } from '../utils/format'

const puzzles = new Puzzles()
const sound = new Sound()
const store = new Store()
const S = GAME.blockSize
const timer = {}
let mouseOverEl = null

const game = {
  current: {
    mode: 0,
    puzzle: 0,
    solution: 0,
    turns: 0,
  },
  init: {
    events: false,
    base: false,
    editor: false,
  },
  pointer: null,
  field: {
    el: null,
    size: 600,
    k: 1,
  },
  start: 0,
  rows: 0,
  c: {
    x: -1,
    y: -1,
    down: -1,
  },
  stats: {
    pos: null,
    turns: null,
    progress: null,
  },
  arr: [],
  puzzle: [],
  puzzleName: null,
  pointsTotal: 0,
  turnsMax: 0,
  timer: 0,
  time: 0,
  status: null,
}

const prepareColors = () => {
  const theme = new Theme()
  game.color00 = theme.color00
  game.color50 = theme.color50
  game.color80 = theme.color80
  game.color90 = theme.color90
  game.color100 = theme.color100
}

const prepare = () => {
  prepareColors()
  const state = new State()
  game.ctx = state.ctx
  game.grid = state.grid
  game.pointer = state.pointer
  game.mode = state.mode
  const m = ~~(GAME.size / 2)
  game.rows = (state.mode + 1) * 5
  const shift = game.rows % 2 ? S / 2 : 0
  const bigField = game.status === 'game' && game.rows === 15 ? S : 0
  game.start = m - Math.floor(game.rows / 2) * S - shift + bigField
  game.stats.pos = document.querySelector('.stats__pos')
  game.stats.turns = document.querySelector('.stats__turns')
  game.stats.progress = document.querySelector('.stats__progress_bar')
  game.stats.progress.removeAttribute('style')
  game.field.el = state.hover
  game.field.size = GAME.size20deg
  game.arr = puzzles.blank(game.mode)

  game.stats.progress.removeAttribute('style')
  document.querySelector('.game__solution').removeAttribute('style')
}

const gameEnd = (msg, descr) => {
  game.status = 'end'
  document.querySelector('.base').classList.add('disabled')
  game.c.down = -1
  draw.pointer(game, -1, -1)
  clearInterval(game.timer)

  const time = ~~((new Date() - game.time) / 1000)
  const timeScore = Math.max(game.pointsTotal * 3 - time, 0) * 5
  const turnsScore = Math.max(game.turnsMax - game.current.turns, 0) * 5
  // console.log(descr, timeScore / 5, turnsScore / 5)
  showResults({ time, turns: game.current.turns, score: { timeScore, turnsScore }, msg, solution: game.current.solution, descr })
  if (msg !== 'win') setTimeout(() => draw.solution(game), (GAME.spf * S) / 4)

  if (msg === 'win') {
    const record = {
      name: game.puzzleName,
      mode: game.current.mode,
      time,
      turns: game.current.turns,
      solution: game.current.solution,
      score: game.current.solution ? 0 : timeScore + turnsScore,
      date: new Date(),
    }
    const arr = store.get('records')
    let newRecord = true
    if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; i += 1) {
        if (arr[i].name === game.puzzleName) {
          store.set(`records.${i}`, record)
          newRecord = false
          break
        }
      }
    }
    if (newRecord) store.add('records', record)
  }

  // store.set('last.game', null)
}

const linesCheck = (x, y) => {
  if (!GAME.clues) return

  let matchX = 0
  for (let i = 0; i < game.rows; i += 1) {
    if (game.puzzle[i][x] === (game.arr[i][x] === 1 ? 1 : 0)) matchX += 1
  }
  let matchY = 0
  for (let i = 0; i < game.rows; i += 1) {
    if (game.puzzle[y][i] === (game.arr[y][i] === 1 ? 1 : 0)) matchY += 1
  }

  draw.numbersMatchX(game, x, matchX === game.rows)
  draw.numbersMatchY(game, y, matchY === game.rows)
}

const progressCheck = () => {
  if (game.status !== 'game') return
  game.stats.turns.textContent = `${game.current.turns}/${game.turnsMax}`

  if (game.current.turns === ~~(game.turnsMax / 2)) message('shrike', 'attemtsHalf')

  let match = 0
  let points = 0
  for (let y = 0; y < game.rows; y += 1) {
    for (let x = 0; x < game.rows; x += 1) {
      if (game.puzzle[y][x] === 1) {
        if (game.arr[y][x] === 1) {
          match += 1
          points += 1
        }
      } else {
        if (game.arr[y][x] === 1) {
          match -= 1
          points += 1
        }
      }
    }
  }
  match = Math.max(match, 0)
  // console.log(match, game.pointsTotal)
  game.stats.progress.style.width = `${~~(Math.min(points / game.pointsTotal, 1) * 100)}%`

  if (game.current.turns > game.turnsMax) {
    gameEnd('loose', 'turnsOut')
  } else if (match === game.pointsTotal) {
    const time = ~~((new Date() - game.time) / 1000)
    gameEnd('win', `Great! You have solved the nonogram in ${time} seconds!`)
  }
}

const timerUpdate = () => {
  if (game.time) {
    const timer = document.querySelector('.stats__timer')
    const time = ~~((new Date() - game.time) / 1000)
    // const delta = game.pointsTotal * 10 - time
    timer.textContent = formatTime(time)

    // if (time >= game.pointsTotal * 10) gameEnd('loose', 'timeOut')
  }
}

const saveCurrentGame = () => {
  store.set('last.game', {
    ...game.current,
    time: ~~((new Date() - game.time) / 1000),
    arr: puzzles.stringify(game.arr),
  })
}

const currentEditorUpdate = () => {
  store.set('last.editor', {
    mode: game.current.mode,
    arr: puzzles.stringify(game.arr),
  })
}

const cellEvent = () => {
  if (game.status === 'end') return
  const x = game.c.x
  const y = game.c.y
  if (x !== -1 && y !== -1) {
    if (!game.time) game.time = new Date()
    const point = game.arr[y][x]
    const st = game.start
    const rx = st + x * S
    const ry = st + y * S
    if (game.c.down === 0) {
      game.arr[y][x] = point === 1 ? 0 : 1
      draw.block(game, rx, ry, point === 2 ? 0 : point)

      game.current.turns += 1
      sound.use(game.arr[y][x] === 1 ? 'dot' : 'tod')

      if (game.status === 'game') {
        linesCheck(x, y)
        progressCheck()
      }
      if (game.status === 'editor') currentEditorUpdate()
    }

    if (game.c.down === 2) {
      game.arr[y][x] = point === 2 ? 0 : 2
      draw.cross(game, rx, ry, point)
      if (game.arr[y][x] === 2) sound.use('cross')
    }
  }
}

const mouseMove = event => {
  const x = Math.floor((event.offsetX / game.field.k - game.start) / S)
  const y = Math.floor((event.offsetY / game.field.k - game.start) / S)
  if (x >= 0 && y >= 0 && x < game.rows && y < game.rows) {
    if (x !== game.c.x || y !== game.c.y) {
      game.c.x = x
      game.c.y = y
      draw.pointer(game, x, y)
      game.stats.pos.textContent = `${x + 1}:${y + 1}`
      if (game.c.down != -1) cellEvent()
      else sound.use('step')
    }
  } else {
    if (game.c.x !== -1 || game.c.y !== -1) {
      draw.pointer(game, -1, -1)
      game.stats.pos.textContent = '0:0'
    }
    game.c.x = -1
    game.c.y = -1
  }
}

const handleReset = () => {
  const tilted = !window.matchMedia('(max-width: 720px)').matches
  const field = document.querySelector('.game')
  field.classList.add('disabled')
  const unflip = () => {
    game.arr = puzzles.blank(game.mode)
    draw.grid(game)
    if (game.status === 'game' || game.status === 'end') draw.numbers(game)
    field.classList.remove('flip0')
    field.classList.remove('disabled')
  }
  const flip1 = () => {
    game.arr = puzzles.blank(game.mode)
    draw.grid(game)
    field.classList.remove('flip1')
    field.classList.add('flip2')
    setTimeout(flip2, 300)
  }
  const flip2 = () => {
    if (game.status === 'game' || game.status === 'end') draw.numbers(game)
    field.classList.remove('flip2')
    field.classList.remove('disabled')
  }
  if (tilted) {
    field.classList.add('flip1')
    setTimeout(flip1, 300)
  } else {
    field.classList.add('flip0')
    setTimeout(unflip, 300)
  }
  sound.use('whoosh')

  game.current.turns = 0
  game.stats.turns.textContent = `${game.current.turns}/${game.turnsMax}`
  if (game.status === 'editor') store.set('last.editor', null)
}

const resizeHandler = () => {
  const size = ~~game.field.el.getBoundingClientRect().width
  if (size !== game.field.size) {
    // console.log('resize:', size)
    game.field.size = size
    game.field.k = size >= 723 ? 1 : size / GAME.size
  }
}

const editorSave = event => {
  if (event) {
    event.preventDefault()
    const summ = game.arr.flat().reduce((acc, v) => (acc += v), 0)
    if (summ === 0) {
      message('bulldog', 'blankFiled')
      return
    }

    const form = new FormData(event.target)
    const name = form.get('name')
    if (name.length < 3 || name.length > 18) {
      message('shrike', 'adequateName')
      return
    }

    const list = puzzles.list(game.current.mode)
    if (list.includes(name)) {
      message('shrike', 'duplicateName')
      return
    }

    const dataString = puzzles.stringify(game.arr)
    console.log(dataString)
    const res = puzzles.add(name, game.arr)
    const msg = document.querySelector('.editor__save_message')
    msg.textContent = res
    msg.classList.remove('hidden')
    msg.style.animation = 'none'
    msg.offsetHeight /* trigger reflow */
    msg.style.animation = null
    setTimeout(() => msg.classList.add('hidden'), 3000)
    if (!(res instanceof Error)) {
      updatePuzzleList()
      store.add('puzzles', { name, puzzle: dataString })
      store.set('last.editor', null)
    }
  }
}

const registerEvents = () => {
  window.addEventListener('resize', resizeHandler)
  resizeHandler()

  const state = new State()
  state.hover.addEventListener('mousemove', mouseMove)
  state.hover.addEventListener('mousedown', event => {
    event.preventDefault()
    game.c.down = event.button
    cellEvent()
  })
  state.hover.addEventListener('mouseup', event => {
    event.preventDefault()
    game.c.down = -1
  })
  document.querySelector('.game').addEventListener('contextmenu', event => event.preventDefault())
  document.querySelector('.editor__save_form').addEventListener('submit', editorSave)

  const theme = new Theme()
  const themeUpdateHandler = () => {
    prepareColors()
    draw.grid(game)
    draw.fill(game)
    if (game.status === 'game' || game.status === 'end') draw.numbers(game)
  }
  theme.addCallback(themeUpdateHandler)

  const reset = document.querySelector('.game__reset')
  reset.addEventListener('click', handleReset)
  reset.addEventListener('mouseleave', () => (mouseOverEl = null))
  reset.addEventListener('mouseenter', event => {
    mouseOverEl = event.target
    const name = event.target.classList[0]
    if (timer[name]) clearTimeout(timer[name])
    timer[name] = setTimeout(() => {
      if (mouseOverEl === event.target) {
        const summ = game.arr.flat().reduce((acc, v) => (acc += v), 0)
        const text = summ > 0 ? 'reset' : 'blankFiled'
        message('bulldog', text)
      }
    }, 250)
  })

  const solution = document.querySelector('.game__solution')
  solution.addEventListener('mouseleave', () => (mouseOverEl = null))
  solution.addEventListener('mouseenter', event => {
    mouseOverEl = event.target
    const name = event.target.classList[0]
    if (timer[name]) clearTimeout(timer[name])
    timer[name] = setTimeout(() => {
      if (mouseOverEl === event.target) message('shrike', 'solution', 4000)
    }, 250)
  })
  solution.addEventListener('click', () => {
    game.current.solution += 1
    draw.solution(game)
    solution.style.backgroundColor = '#800b'
    game.time = 0
    document.querySelector('.game').classList.add('disabled')
  })

  const save = document.querySelector('.game__save')
  save.addEventListener('click', saveCurrentGame)
  save.addEventListener('mouseleave', () => (mouseOverEl = null))
  save.addEventListener('mouseenter', event => {
    mouseOverEl = event.target
    const name = event.target.classList[0]
    if (timer[name]) clearTimeout(timer[name])
    timer[name] = setTimeout(() => {
      if (mouseOverEl === event.target) message('bulldog', 'save')
    }, 250)
  })

  game.init.events = true
}

export const editor = fresh => {
  console.log('Start editor')
  const field = document.querySelector('.game')
  field.classList.remove('disabled')
  field.classList.remove('hidden')
  const last = fresh ? null : store.get('last.editor')
  game.status = 'editor'

  const state = new State()
  state.setModeUpdateCallback(() => {})
  if (last) state.mode = last.mode ?? 2
  else if (!game.init.editor) state.mode = 2
  game.current.mode = state.mode

  clearInterval(game.timer)
  prepare()
  draw.grid(game)
  if (!game.init.events) registerEvents()
  game.init.editor = true
  state.setModeUpdateCallback(() => editor(true))

  document.querySelector('.base').classList.remove('disabled')
  document.querySelector('.editor__mode').classList.remove('hidden')
  document.querySelector('.editor__save_form').classList.remove('hidden')
  document.querySelector('.game__solution').classList.add('hidden')
  document.querySelector('.game__save').classList.add('hidden')
  document.querySelector('.game__header_text').classList.add('hidden')
  document.querySelector('.stats__progress').classList.add('hidden')
  document.querySelector('.stats__turns').classList.add('hidden')
  const modeSelectors = document.querySelectorAll('.editor__mode_select')
  modeSelectors[state.mode].checked = true

  if (last) {
    game.arr = puzzles.parse(last.arr)
    draw.fill(game)
    document.querySelector('.editor__save_name-text').value = last.name ?? ''
    // console.log(last)
  }

  message(Math.random() > 0.5 ? 'bulldog' : 'shrike', 'editorNew')
}

export const start = (mode, puzzle, last) => {
  if (mode === undefined) mode = ~~(Math.random() * 3)
  if (puzzle === undefined) puzzle = ~~(Math.random() * puzzles.list(mode).length)
  console.log(`Start game: ${mode}-${puzzle}${!!last ? ' (recovered)' : ''}`)
  const field = document.querySelector('.game')
  field.classList.remove('disabled')
  field.classList.remove('hidden')

  game.status = 'game'
  const state = new State()
  state.setModeUpdateCallback()
  state.mode = mode
  prepare()
  const { name, data } = puzzles.get(mode, puzzle)
  game.puzzle = data
  game.puzzleName = name
  game.current = { mode, puzzle, solution: 0, turns: 0 }

  const summ = data.flat().reduce((acc, v) => (acc += v), 0)
  game.pointsTotal = summ
  game.turnsMax = summ * 3
  game.stats.turns.textContent = `${game.current.turns}/${game.turnsMax}`

  if (!game.init.events) registerEvents()
  game.init.start = true

  document.querySelector('.base').classList.remove('disabled')
  document.querySelector('.editor__mode').classList.add('hidden')
  document.querySelector('.editor__save_form').classList.add('hidden')
  document.querySelector('.game__solution').classList.remove('hidden')
  document.querySelector('.game__save').classList.remove('hidden')
  document.querySelector('.stats__progress').classList.remove('hidden')
  document.querySelector('.stats__turns').classList.remove('hidden')
  const headerText = document.querySelector('.game__header_text')
  headerText.classList.remove('hidden')
  headerText.textContent = name

  document.querySelector('.stats__timer').textContent = '00:00'
  game.time = 0
  clearInterval(game.timer)
  game.timer = setInterval(timerUpdate, 1000)

  if (last && last.time + 10 < game.pointsTotal * 10) {
    game.arr = puzzles.parse(last.arr)
    game.current.solution = last.solution
    game.current.turns = last.turns
    game.time = new Date() - last.time * 1000
    if (last.solution) document.querySelector('.game__solution').style.backgroundColor = '#800b'
    draw.grid(game)
    draw.fill(game)
    draw.numbers(game)
  } else handleReset()

  message(Math.random() > 0.5 ? 'bulldog' : 'shrike', last ? 'lastGameRecovered' : 'gameNew')
}
