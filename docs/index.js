"use strict";
(self["webpackChunknonograms"] = self["webpackChunknonograms"] || []).push([["index"],{

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/ui */ "./src/module/ui.js");
/* harmony import */ var _module_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/game */ "./src/module/game.js");
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/store */ "./src/utils/store.js");
/* harmony import */ var _utils_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/base */ "./src/utils/base.js");
/* harmony import */ var _utils_sound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/sound */ "./src/utils/sound.js");






const sound = new _utils_sound__WEBPACK_IMPORTED_MODULE_4__.Sound()
const puzzles = new _utils_base__WEBPACK_IMPORTED_MODULE_3__.Puzzles()
const store = new _utils_store__WEBPACK_IMPORTED_MODULE_2__.Store()

function gameStart() {
  const custom = store.get('puzzles')
  if (custom && custom.length > 0) {
    custom.forEach(item => puzzles.add(item.name, item.puzzle))
  }

  const last = store.get('last')
  if (last.game) (0,_module_game__WEBPACK_IMPORTED_MODULE_1__.start)(last.game.mode, last.game.puzzle, last.game)
  else if (last.editor) (0,_module_game__WEBPACK_IMPORTED_MODULE_1__.editor)(last.editor)
  else (0,_module_game__WEBPACK_IMPORTED_MODULE_1__.start)()

  sound.play(0, 1)
}

function prepare() {
  (0,_module_ui__WEBPACK_IMPORTED_MODULE_0__.initUI)()
  window.addEventListener('load', gameStart)
}

prepare()


/***/ }),

/***/ "./src/module/about.js":
/*!*****************************!*\
  !*** ./src/module/about.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createModalAbout: () => (/* binding */ createModalAbout)
/* harmony export */ });
/* harmony import */ var _utils_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/state */ "./src/utils/state.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser */ "./src/module/parser.js");
/* harmony import */ var _data_loc_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/loc.json */ "./src/data/loc.json");




const createModalAbout = () => {
  const state = new _utils_state__WEBPACK_IMPORTED_MODULE_0__.State()
  const lang = state.lang

  const modal = document.createElement('div')
  modal.className = 'modal__about hidden'
  const inner = document.createElement('div')
  inner.className = 'modal__inner'
  const left = document.createElement('div')
  left.className = 'modal__left'
  const right = document.createElement('div')
  right.className = 'modal__right'

  const close = document.createElement('div')
  close.className = 'modal__close'
  const closeImg = document.createElement('div')
  close.append(closeImg)
  close.addEventListener('click', () => modal.classList.add('hidden'))

  const title = document.createElement('h2')
  title.className = 'modal__title'
  title.textContent = _data_loc_json__WEBPACK_IMPORTED_MODULE_2__[lang].aboutTitle

  const wrap = document.createElement('div')
  wrap.className = 'modal__scroll_wrap'
  const descr = document.createElement('div')
  descr.className = 'modal__about_descr scrolled'
  wrap.append(descr)

  _data_loc_json__WEBPACK_IMPORTED_MODULE_2__[lang].description.forEach(text => descr.append((0,_parser__WEBPACK_IMPORTED_MODULE_1__.parse)(text)))

  const btn = document.createElement('div')
  btn.className = 'button'
  btn.textContent = 'OK'
  btn.addEventListener('click', () => modal.classList.add('hidden'))

  inner.append(close, title, wrap, btn, left, right)
  modal.append(inner)
  modal.addEventListener('click', event => {
    if (event.target === event.currentTarget) {
      event.target.classList.add('hidden')
    }
  })
  return modal
}


/***/ }),

/***/ "./src/module/constants.js":
/*!*********************************!*\
  !*** ./src/module/constants.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GAME: () => (/* binding */ GAME)
/* harmony export */ });
const GAME = {
  size: 600,
  size20deg: 723.7723388671875,
  blockSize: 30,
  spf: ~~(1000 / 60),
  modes: ['5x5', '10x10', '15x15'],
  languages: ['en'],
}


/***/ }),

/***/ "./src/module/draw.js":
/*!****************************!*\
  !*** ./src/module/draw.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   block: () => (/* binding */ block),
/* harmony export */   cross: () => (/* binding */ cross),
/* harmony export */   crossRed: () => (/* binding */ crossRed),
/* harmony export */   field: () => (/* binding */ field),
/* harmony export */   fieldFill: () => (/* binding */ fieldFill),
/* harmony export */   numbers: () => (/* binding */ numbers),
/* harmony export */   pointer: () => (/* binding */ pointer),
/* harmony export */   solution: () => (/* binding */ solution)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/module/constants.js");


const S = _constants__WEBPACK_IMPORTED_MODULE_0__.GAME.blockSize
const spf = _constants__WEBPACK_IMPORTED_MODULE_0__.GAME.spf

const field = game => {
  game.ctx.clearRect(0, 0, _constants__WEBPACK_IMPORTED_MODULE_0__.GAME.size, _constants__WEBPACK_IMPORTED_MODULE_0__.GAME.size)
  game.ctx.strokeStyle = game.color80
  game.ctx.beginPath()
  for (let i = 0; i <= game.rows; i += 1) {
    game.ctx.moveTo(game.start + i * S, game.start)
    game.ctx.lineTo(game.start + i * S, game.start + game.rows * S)
    game.ctx.moveTo(game.start, game.start + i * S)
    game.ctx.lineTo(game.start + game.rows * S, game.start + i * S)
  }
  game.ctx.stroke()

  game.ctx.strokeStyle = game.color100
  game.ctx.beginPath()
  for (let i = 0; i <= game.rows; i += 5) {
    game.ctx.moveTo(game.start + i * S, game.start)
    game.ctx.lineTo(game.start + i * S, game.start + game.rows * S)
    game.ctx.moveTo(game.start, game.start + i * S)
    game.ctx.lineTo(game.start + game.rows * S, game.start + i * S)
  }
  game.ctx.stroke()
}

const fieldFill = game => {
  const st = game.start
  for (let y = 0; y < game.rows; y += 1) {
    for (let x = 0; x < game.rows; x += 1) {
      const rx = st + x * S
      const ry = st + y * S
      if (game.arr[y][x] === 1) {
        game.ctx.fillStyle = game.color100
        game.ctx.fillRect(rx + 1, ry + 1, S - 2, S - 2)
      }
      if (game.arr[y][x] === 2) cross(game, rx, ry)
    }
  }
}

const solution = game => {
  const st = game.start
  for (let y = 0; y < game.rows; y += 1) {
    for (let x = 0; x < game.rows; x += 1) {
      const rx = st + x * S
      const ry = st + y * S
      if (game.puzzle[y][x] === 0 && game.arr[y][x] === 1) {
        crossRed(game, rx, ry)
      }
      if (game.puzzle[y][x] === 1 && game.arr[y][x] !== 1) {
        game.ctx.fillStyle = 'yellow'
        game.ctx.fillRect(rx + 1, ry + 1, S - 2, S - 2)
      }
    }
  }
}

const pointer = (game, x, y) => {
  game.pointer.clearRect(0, 0, _constants__WEBPACK_IMPORTED_MODULE_0__.GAME.size, _constants__WEBPACK_IMPORTED_MODULE_0__.GAME.size)
  if (x !== -1 && y !== -1) {
    const st = game.start
    const rx = st + x * S
    const ry = st + y * S
    game.pointer.fillStyle = game.color100
    game.pointer.fillRect(rx, st, S, game.rows * S)
    game.pointer.fillRect(st, ry, game.rows * S, S)
  }
}

const block = (game, x, y, point) => {
  let size = point * (S - 4)
  const draw = () => {
    game.ctx.clearRect(x + 1, y + 1, S - 2, S - 2)
    game.ctx.fillStyle = game.color100
    game.ctx.fillRect(x + S / 2 - size / 2, y + S / 2 - size / 2, size, size)
    size += point ? -4 : 4
    if (size > 0 && size < S) setTimeout(draw, spf)
    else {
      if (point !== 1) game.ctx.fillRect(x + 1, y + 1, S - 2, S - 2)
      else game.ctx.clearRect(x + 1, y + 1, S - 2, S - 2)
    }
  }
  draw()
}

const cross = (game, x, y, point = 0) => {
  game.ctx.clearRect(x + 1, y + 1, S - 2, S - 2)
  if (point === 2) return
  const d = S / 4
  game.ctx.strokeStyle = game.color100
  game.ctx.beginPath()
  game.ctx.moveTo(x + d, y + d)
  game.ctx.lineTo(x + S - d, y + S - d)
  game.ctx.moveTo(x + S - d, y + d)
  game.ctx.lineTo(x + d, y + S - d)
  game.ctx.stroke()
}

const crossRed = (game, x, y) => {
  game.ctx.clearRect(x + 1, y + 1, S - 2, S - 2)
  const d = S / 4
  game.ctx.strokeStyle = 'red'
  game.ctx.beginPath()
  game.ctx.moveTo(x + d, y + d)
  game.ctx.lineTo(x + S - d, y + S - d)
  game.ctx.moveTo(x + S - d, y + d)
  game.ctx.lineTo(x + d, y + S - d)
  game.ctx.stroke()
}

const numbers = game => {
  const font = 14
  const space = 3
  game.ctx.font = `${font}px arial`
  game.ctx.strokeStyle = 'gray' //game.color50
  const st = game.start

  for (let x = 0; x < game.rows; x += 1) {
    let nms = []
    let n = 0
    for (let y = 0; y < game.rows; y += 1) {
      if (game.puzzle[y][x] === 1) n += 1
      else if (n > 0) {
        nms.push(n)
        n = 0
      }
    }
    if (n > 0) nms.push(n)

    nms.reverse().forEach((n, i) => {
      const rx = st + x * S + (S - font) / 2
      game.ctx.strokeText(n, rx, st - S / 2 - i * (font + space))
    })
  }

  for (let y = 0; y < game.rows; y += 1) {
    let nms = []
    let n = 0
    for (let x = 0; x < game.rows; x += 1) {
      if (game.puzzle[y][x] === 1) n += 1
      else if (n > 0) {
        nms.push(n)
        n = 0
      }
    }
    if (n > 0) nms.push(n)

    nms.reverse().forEach((n, i) => {
      const ry = st + y * S + (S - font) / 2 + font
      game.ctx.strokeText(n, st - S / 2 - font / 2 - i * (font + space), ry)
    })
  }
}


/***/ }),

/***/ "./src/module/game.js":
/*!****************************!*\
  !*** ./src/module/game.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editor: () => (/* binding */ editor),
/* harmony export */   start: () => (/* binding */ start)
/* harmony export */ });
/* harmony import */ var _utils_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/state */ "./src/utils/state.js");
/* harmony import */ var _utils_sound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/sound */ "./src/utils/sound.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/module/constants.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/theme */ "./src/utils/theme.js");
/* harmony import */ var _utils_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/base */ "./src/utils/base.js");
/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./draw */ "./src/module/draw.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu */ "./src/module/menu.js");
/* harmony import */ var _utils_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/message */ "./src/utils/message.js");
/* harmony import */ var _results__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./results */ "./src/module/results.js");
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/store */ "./src/utils/store.js");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/format */ "./src/utils/format.js");












const puzzles = new _utils_base__WEBPACK_IMPORTED_MODULE_4__.Puzzles()
const sound = new _utils_sound__WEBPACK_IMPORTED_MODULE_1__.Sound()
const store = new _utils_store__WEBPACK_IMPORTED_MODULE_9__.Store()
const S = _constants__WEBPACK_IMPORTED_MODULE_2__.GAME.blockSize
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
  const theme = new _utils_theme__WEBPACK_IMPORTED_MODULE_3__.Theme()
  game.color00 = theme.color00
  game.color50 = theme.color50
  game.color80 = theme.color80
  game.color90 = theme.color90
  game.color100 = theme.color100
}

const prepare = () => {
  prepareColors()
  const state = new _utils_state__WEBPACK_IMPORTED_MODULE_0__.State()
  game.ctx = state.ctx
  game.pointer = state.pointer
  game.mode = state.mode
  const m = ~~(_constants__WEBPACK_IMPORTED_MODULE_2__.GAME.size / 2)
  game.rows = (state.mode + 1) * 5
  const shift = game.rows % 2 ? S / 2 : 0
  game.start = m - Math.floor(game.rows / 2) * S - shift
  game.stats.pos = document.querySelector('.stats__pos')
  game.stats.turns = document.querySelector('.stats__turns')
  game.stats.progress = document.querySelector('.stats__progress_bar')
  game.stats.progress.removeAttribute('style')
  game.field.el = state.hover
  game.field.size = _constants__WEBPACK_IMPORTED_MODULE_2__.GAME.size20deg
  game.arr = puzzles.blank(game.mode)

  game.stats.progress.removeAttribute('style')
  document.querySelector('.game__solution').removeAttribute('style')
}

const gameEnd = (msg, descr) => {
  game.status = 'end'
  document.querySelector('.base').classList.add('disabled')
  game.c.down = -1
  _draw__WEBPACK_IMPORTED_MODULE_5__.pointer(game, -1, -1)
  clearInterval(game.timer)

  const time = ~~((new Date() - game.time) / 1000)
  const timeScore = Math.max(game.pointsTotal * 3 - time, 0) * 5
  const turnsScore = Math.max(game.turnsMax - game.current.turns, 0) * 5
  // console.log(descr, timeScore / 5, turnsScore / 5)
  ;(0,_results__WEBPACK_IMPORTED_MODULE_8__.showResults)({ time, turns: game.current.turns, score: { timeScore, turnsScore }, msg, solution: game.current.solution, descr })
  if (msg !== 'win') setTimeout(() => _draw__WEBPACK_IMPORTED_MODULE_5__.solution(game), (_constants__WEBPACK_IMPORTED_MODULE_2__.GAME.spf * S) / 4)

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

  store.set('last.game', null)
}

const progressCheck = () => {
  if (game.status !== 'game') return
  game.stats.turns.textContent = `${game.current.turns}/${game.turnsMax}`

  if (game.current.turns === ~~(game.turnsMax / 2)) (0,_utils_message__WEBPACK_IMPORTED_MODULE_7__.message)('shrike', 'attemtsHalf')

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

  if (game.current.turns > game.turnsMax) gameEnd('loose', 'turnsOut')
  else if (match === game.pointsTotal) gameEnd('win')
  else currentGameUpdate()
}

const timerUpdate = () => {
  if (game.time) {
    const timer = document.querySelector('.stats__timer')
    const time = ~~((new Date() - game.time) / 1000)
    const delta = game.pointsTotal * 10 - time
    timer.textContent = (0,_utils_format__WEBPACK_IMPORTED_MODULE_10__.formatTime)(delta)

    if (time >= game.pointsTotal * 10) gameEnd('loose', 'timeOut')
  }
}

const currentGameUpdate = () => {
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
      if (point === 2) _draw__WEBPACK_IMPORTED_MODULE_5__.block(game, rx, ry, 0)
      else _draw__WEBPACK_IMPORTED_MODULE_5__.block(game, rx, ry, point)

      if (game.arr[y][x] === 1) sound.use('dot')
      game.current.turns += 1
      if (game.status === 'game') progressCheck()
      if (game.status === 'editor') currentEditorUpdate()
    }

    if (game.c.down === 2) {
      game.arr[y][x] = point === 2 ? 0 : 2
      _draw__WEBPACK_IMPORTED_MODULE_5__.cross(game, rx, ry, point)
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
      _draw__WEBPACK_IMPORTED_MODULE_5__.pointer(game, x, y)
      game.stats.pos.textContent = `${x + 1}:${y + 1}`
      if (game.c.down != -1) cellEvent()
      else sound.use('step')
    }
  } else {
    if (game.c.x !== -1 || game.c.y !== -1) {
      _draw__WEBPACK_IMPORTED_MODULE_5__.pointer(game, -1, -1)
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
    _draw__WEBPACK_IMPORTED_MODULE_5__.field(game)
    if (game.status === 'game' || game.status === 'end') _draw__WEBPACK_IMPORTED_MODULE_5__.numbers(game)
    field.classList.remove('flip0')
    field.classList.remove('disabled')
  }
  const flip1 = () => {
    field.classList.remove('flip1')
    field.classList.add('flip2')
    setTimeout(flip2, 300)
  }
  const flip2 = () => {
    game.arr = puzzles.blank(game.mode)
    _draw__WEBPACK_IMPORTED_MODULE_5__.field(game)
    if (game.status === 'game' || game.status === 'end') _draw__WEBPACK_IMPORTED_MODULE_5__.numbers(game)
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
  if (game.status === 'game') currentGameUpdate()
  if (game.status === 'editor') store.set('last.editor', null)
}

const resizeHandler = () => {
  const size = ~~game.field.el.getBoundingClientRect().width
  if (size !== game.field.size) {
    // console.log('resize:', size)
    game.field.size = size
    game.field.k = size >= 723 ? 1 : size / _constants__WEBPACK_IMPORTED_MODULE_2__.GAME.size
  }
}

const editorSave = event => {
  if (event) {
    event.preventDefault()
    const summ = game.arr.flat().reduce((acc, v) => (acc += v), 0)
    if (summ === 0) {
      (0,_utils_message__WEBPACK_IMPORTED_MODULE_7__.message)('bulldog', 'blank-filed')
      return
    }

    const form = new FormData(event.target)
    const name = form.get('name')
    if (name.length < 3 || name.length > 18) {
      (0,_utils_message__WEBPACK_IMPORTED_MODULE_7__.message)('shrike', 'adequateName')
      return
    }

    const list = puzzles.list(game.current.mode)
    if (list.includes(name)) {
      (0,_utils_message__WEBPACK_IMPORTED_MODULE_7__.message)('shrike', 'duplicateName')
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
    if (!(res instanceof Error)) {
      (0,_menu__WEBPACK_IMPORTED_MODULE_6__.updatePuzzleList)()
      store.add('puzzles', { name, puzzle: dataString })
      store.set('last.editor', null)
    }
  }
}

const registerEvents = () => {
  window.addEventListener('resize', resizeHandler)
  resizeHandler()

  const state = new _utils_state__WEBPACK_IMPORTED_MODULE_0__.State()
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

  const theme = new _utils_theme__WEBPACK_IMPORTED_MODULE_3__.Theme()
  const themeUpdateHandler = () => {
    prepareColors()
    _draw__WEBPACK_IMPORTED_MODULE_5__.field(game)
    _draw__WEBPACK_IMPORTED_MODULE_5__.fieldFill(game)
    if (game.status === 'game' || game.status === 'end') _draw__WEBPACK_IMPORTED_MODULE_5__.numbers(game)
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
        const text = summ > 0 ? 'reset' : 'blank-filed'
        ;(0,_utils_message__WEBPACK_IMPORTED_MODULE_7__.message)('shrike', (0,_utils_message__WEBPACK_IMPORTED_MODULE_7__.message)('bulldog', text), 4000)
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
      if (mouseOverEl === event.target) (0,_utils_message__WEBPACK_IMPORTED_MODULE_7__.message)('shrike', 'solution', 4000)
    }, 250)
  })
  solution.addEventListener('click', () => {
    game.current.solution += 1
    _draw__WEBPACK_IMPORTED_MODULE_5__.solution(game)
    solution.style.backgroundColor = '#800b'
    currentGameUpdate()
  })

  game.init.events = true
}

const editor = last => {
  console.log('Start editor')
  store.set('last.game', null)

  const state = new _utils_state__WEBPACK_IMPORTED_MODULE_0__.State()
  state.setModeUpdateCallback(() => {})
  if (last) state.mode = last.mode ?? 2
  else if (!game.init.editor) state.mode = 2
  game.current.mode = state.mode

  clearInterval(game.timer)
  prepare()
  _draw__WEBPACK_IMPORTED_MODULE_5__.field(game)
  if (!game.init.events) registerEvents()
  game.init.editor = true
  game.status = 'editor'
  state.setModeUpdateCallback(editor)

  document.querySelector('.base').classList.remove('disabled')
  document.querySelector('.editor__mode').classList.remove('hidden')
  document.querySelector('.editor__save_form').classList.remove('hidden')
  document.querySelector('.game__solution').classList.add('hidden')
  document.querySelector('.game__header_text').classList.add('hidden')
  document.querySelector('.stats__progress').classList.add('hidden')
  document.querySelector('.stats__turns').classList.add('hidden')
  const modeSelectors = document.querySelectorAll('.editor__mode_select')
  modeSelectors[state.mode].checked = true

  if (last) {
    game.arr = puzzles.parse(last.arr)
    _draw__WEBPACK_IMPORTED_MODULE_5__.fieldFill(game)
    document.querySelector('.editor__save_name-text').value = last.name ?? ''
    // console.log(last)
  }

  (0,_utils_message__WEBPACK_IMPORTED_MODULE_7__.message)(Math.random() > 0.5 ? 'bulldog' : 'shrike', 'editorNew')
}

const start = (mode, puzzle, last) => {
  if (mode === undefined) mode = ~~(Math.random() * 3)
  if (puzzle === undefined) puzzle = ~~(Math.random() * puzzles.list(mode).length)
  console.log(`Start game: ${mode}-${puzzle}${!!last ? ' (recovered)' : ''}`)
  store.set('last.editor', null)

  const state = new _utils_state__WEBPACK_IMPORTED_MODULE_0__.State()
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
  game.status = 'game'
  game.init.start = true

  document.querySelector('.base').classList.remove('disabled')
  document.querySelector('.editor__mode').classList.add('hidden')
  document.querySelector('.editor__save_form').classList.add('hidden')
  document.querySelector('.game__solution').classList.remove('hidden')
  document.querySelector('.stats__progress').classList.remove('hidden')
  document.querySelector('.stats__turns').classList.remove('hidden')
  const headerText = document.querySelector('.game__header_text')
  headerText.classList.remove('hidden')
  headerText.textContent = name

  document.querySelector('.stats__timer').textContent = '00:00'
  game.time = 0
  clearInterval(game.timer)
  game.timer = setInterval(timerUpdate, 1000)

  _draw__WEBPACK_IMPORTED_MODULE_5__.field(game)
  _draw__WEBPACK_IMPORTED_MODULE_5__.numbers(game)
  if (last && last.time + 10 < game.pointsTotal * 10) {
    game.arr = puzzles.parse(last.arr)
    game.current.solution = last.solution
    game.current.turns = last.turns
    game.time = new Date() - last.time * 1000
    if (last.solution) document.querySelector('.game__solution').style.backgroundColor = '#800b'
    _draw__WEBPACK_IMPORTED_MODULE_5__.fieldFill(game)
  }

  (0,_utils_message__WEBPACK_IMPORTED_MODULE_7__.message)(Math.random() > 0.5 ? 'bulldog' : 'shrike', last ? 'lastGameRecovered' : 'gameNew')
}


/***/ }),

/***/ "./src/module/menu.js":
/*!****************************!*\
  !*** ./src/module/menu.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createModalGame: () => (/* binding */ createModalGame),
/* harmony export */   createModalResults: () => (/* binding */ createModalResults),
/* harmony export */   initMenu: () => (/* binding */ initMenu),
/* harmony export */   updatePuzzleList: () => (/* binding */ updatePuzzleList)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/module/game.js");
/* harmony import */ var _utils_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/state */ "./src/utils/state.js");
/* harmony import */ var _utils_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/base */ "./src/utils/base.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/module/constants.js");
/* harmony import */ var _utils_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/message */ "./src/utils/message.js");
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/store */ "./src/utils/store.js");
/* harmony import */ var _utils_sound__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/sound */ "./src/utils/sound.js");
/* harmony import */ var _records__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./records */ "./src/module/records.js");
/* harmony import */ var _data_loc_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/loc.json */ "./src/data/loc.json");










const store = new _utils_store__WEBPACK_IMPORTED_MODULE_5__.Store()
const sound = new _utils_sound__WEBPACK_IMPORTED_MODULE_6__.Sound()
const puzzles = new _utils_base__WEBPACK_IMPORTED_MODULE_2__.Puzzles()
let selectedMode = 0
let selectedPuzzle = 0

const startNewGame = () => {
  sound.use('slide')
  const modal = document.querySelector('.modal__game')
  modal.classList.remove('hidden')
  document.querySelector('.modal__game_btn').classList.add('disabled')
  document.querySelector('.modal__puzzle_select').value = ''
  updatePuzzleList()
}

const handleStartClick = () => {
  document.querySelector('.modal__game').classList.add('hidden')
  ;(0,_game__WEBPACK_IMPORTED_MODULE_0__.start)(selectedMode, selectedPuzzle)
}

const startRandomGame = () => {
  document.querySelector('.modal__game').classList.add('hidden')
  ;(0,_game__WEBPACK_IMPORTED_MODULE_0__.start)()
}

const openEditor = () => {
  const state = new _utils_state__WEBPACK_IMPORTED_MODULE_1__.State()
  if (state.status === 'editor') {
    (0,_utils_message__WEBPACK_IMPORTED_MODULE_4__.message)('bulldog', 'unknown')
    return
  }
  state.mode = 2
  ;(0,_game__WEBPACK_IMPORTED_MODULE_0__.editor)()
}

const showRecords = () => {
  sound.use('slide')
  document.querySelector('.modal__records').classList.remove('hidden')
  ;(0,_records__WEBPACK_IMPORTED_MODULE_7__.updateGameRecords)()
}

const showAbout = () => {
  sound.use('slide')
  document.querySelector('.modal__about').classList.remove('hidden')
}

const updatePuzzleList = () => {
  const list = puzzles.list(selectedMode)
  const select = document.querySelector('.modal__puzzle_select')
  const records = store.get('records')
  select.innerHTML = ''
  list.forEach((text, i) => {
    let passed = records.some(record => record.mode === selectedMode && record.score > 0 && record.name === text)
    const el = document.createElement('option')
    el.value = i
    el.textContent = `${i < 9 ? `\u00A0${i + 1}` : i + 1}. ${text}${passed ? ' \u2714' : ''}`
    select.append(el)
  })
}

function createPuzzleSelector() {
  const component = document.createElement('div')
  component.className = 'modal__puzzle'

  const label = document.createElement('span')
  label.textContent = 'Select puzzle'

  const wrap = document.createElement('div')
  wrap.className = 'modal__scroll_wrap'

  const select = document.createElement('select')
  select.className = 'modal__puzzle_select scrolled'
  select.size = 10
  select.addEventListener('click', handlePuzzleChange)

  wrap.append(select)
  component.append(label, wrap)
  return component
}

const handlePuzzleChange = event => {
  document.querySelector('.modal__game_btn').classList.remove('disabled')
  selectedPuzzle = Number(event.currentTarget.value)
}

const handleModeChange = event => {
  const state = new _utils_state__WEBPACK_IMPORTED_MODULE_1__.State()
  // console.log(event.target.value)
  selectedMode = Number(event.target.value)
  updatePuzzleList()
}

function createModeSelector() {
  const mode = document.createElement('div')
  mode.className = 'modal__mode mode'
  _constants__WEBPACK_IMPORTED_MODULE_3__.GAME.modes.forEach((name, i) => {
    const input = document.createElement('input')
    input.className = 'modal__mode_select mode-select'
    input.type = 'radio'
    input.value = i
    input.name = 'm_mode'
    input.id = `m_mode${i}`
    input.addEventListener('change', handleModeChange)
    const label = document.createElement('label')
    label.textContent = name
    label.htmlFor = `m_mode${i}`
    mode.append(input, label)
  })
  return mode
}

const handleModalClick = event => {
  if (event.target === event.currentTarget) {
    event.target.classList.add('hidden')
  }
}

const createModalGame = () => {
  const state = new _utils_state__WEBPACK_IMPORTED_MODULE_1__.State()
  const lang = state.lang

  const modal = document.createElement('div')
  modal.className = 'modal__game hidden'
  const inner = document.createElement('div')
  inner.className = 'modal__inner'
  const left = document.createElement('div')
  left.className = 'modal__left'
  const right = document.createElement('div')
  right.className = 'modal__right'

  const close = document.createElement('div')
  close.className = 'modal__close'
  const closeImg = document.createElement('div')
  close.append(closeImg)
  close.addEventListener('click', () => modal.classList.add('hidden'))

  const title = document.createElement('h2')
  title.className = 'modal__title'
  title.textContent = _data_loc_json__WEBPACK_IMPORTED_MODULE_8__[lang].startNewGame

  const buttons = document.createElement('div')
  buttons.className = 'modal__buttons'
  const btn = document.createElement('div')
  btn.className = 'modal__game_btn button'
  btn.textContent = _data_loc_json__WEBPACK_IMPORTED_MODULE_8__[lang].start
  btn.addEventListener('click', handleStartClick)
  const rnd = document.createElement('div')
  rnd.className = 'button'
  rnd.textContent = _data_loc_json__WEBPACK_IMPORTED_MODULE_8__[lang].randomGame
  rnd.addEventListener('click', startRandomGame)
  buttons.append(btn, rnd)

  inner.append(close, title, createModeSelector(), createPuzzleSelector(), buttons, left, right)
  modal.append(inner)
  modal.addEventListener('click', handleModalClick)
  return modal
}

const createModalResults = () => {
  const state = new _utils_state__WEBPACK_IMPORTED_MODULE_1__.State()
  const lang = state.lang

  const modal = document.createElement('div')
  modal.className = 'modal__reslt hidden'
  const inner = document.createElement('div')
  inner.className = 'modal__inner'
  const left = document.createElement('div')
  left.className = 'modal__left'
  const right = document.createElement('div')
  right.className = 'modal__right'

  const close = document.createElement('div')
  close.className = 'modal__close'
  const closeImg = document.createElement('div')
  close.append(closeImg)
  close.addEventListener('click', () => modal.classList.add('hidden'))

  const title = document.createElement('h2')
  title.className = 'modal__title'
  title.textContent = _data_loc_json__WEBPACK_IMPORTED_MODULE_8__[lang].win

  const descr = document.createElement('p')
  descr.className = 'modal__reslt_descr'

  const p1 = document.createElement('p')
  p1.className = 'modal__reslt_descr'
  const time = document.createElement('span')
  time.className = 'modal__time'
  time.textContent = '00:00'
  p1.append(document.createTextNode(`${_data_loc_json__WEBPACK_IMPORTED_MODULE_8__[lang].timeUsed}:`), time)

  const p2 = document.createElement('p')
  p2.className = 'modal__reslt_descr'
  const turns = document.createElement('span')
  turns.className = 'modal__turns'
  turns.textContent = '0'
  p2.append(document.createTextNode(`${_data_loc_json__WEBPACK_IMPORTED_MODULE_8__[lang].turnsUsed}:`), turns)

  const p3 = document.createElement('p')
  p3.className = 'modal__reslt_descr'
  const score = document.createElement('span')
  score.className = 'modal__score'
  score.textContent = '0'
  p3.append(document.createTextNode(`${_data_loc_json__WEBPACK_IMPORTED_MODULE_8__[lang].score}:`), score)
  const solution = document.createElement('div')
  solution.className = 'modal__solution'
  solution.textContent = `(${_data_loc_json__WEBPACK_IMPORTED_MODULE_8__[lang].solutionUsed})`

  const shrike = document.createElement('div')
  shrike.className = 'modal__reslt_shrike'

  const btn = document.createElement('div')
  btn.className = 'button'
  btn.textContent = 'OK'
  btn.addEventListener('click', () => modal.classList.add('hidden'))

  inner.append(close, title, descr, p1, p2, p3, solution, shrike, btn, left, right)
  modal.reslt = { title, descr, time, turns, score, shrike, solution }
  modal.append(inner)
  modal.addEventListener('click', handleModalClick)
  return modal
}

const initMenu = () => {
  const state = new _utils_state__WEBPACK_IMPORTED_MODULE_1__.State()
  const lang = state.lang

  const menuItems = document.querySelectorAll('.menu__item')
  menuItems[0].addEventListener('click', startNewGame)
  menuItems[0].textContent = _data_loc_json__WEBPACK_IMPORTED_MODULE_8__[lang].newGame
  menuItems[1].addEventListener('click', openEditor)
  menuItems[1].textContent = _data_loc_json__WEBPACK_IMPORTED_MODULE_8__[lang].editor
  menuItems[2].addEventListener('click', showRecords)
  menuItems[2].textContent = _data_loc_json__WEBPACK_IMPORTED_MODULE_8__[lang].records
  menuItems[3].addEventListener('click', showAbout)
  menuItems[3].textContent = _data_loc_json__WEBPACK_IMPORTED_MODULE_8__[lang].about

  selectedMode = state.mode

  const modeSelectors = document.querySelectorAll('.modal__mode_select')
  modeSelectors[selectedMode].checked = true
}


/***/ }),

/***/ "./src/module/mode.js":
/*!****************************!*\
  !*** ./src/module/mode.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createModeSelector: () => (/* binding */ createModeSelector)
/* harmony export */ });
/* harmony import */ var _utils_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/state */ "./src/utils/state.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/module/constants.js");



const state = new _utils_state__WEBPACK_IMPORTED_MODULE_0__.State()

function handleModeChange() {
  // console.log('Mode:',this.value)
  state.mode = this.value
}

function createModeSelector() {
  const mode = document.createElement('div')
  mode.className = 'editor__mode mode hidden'
  _constants__WEBPACK_IMPORTED_MODULE_1__.GAME.modes.forEach((name, i) => {
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


/***/ }),

/***/ "./src/module/parser.js":
/*!******************************!*\
  !*** ./src/module/parser.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parse: () => (/* binding */ parse)
/* harmony export */ });
function checkLink(text) {
  const arr = []
  function checker(str) {
    const match = str.match(/\[([\w\s\d]+)\]\((https?:\/\/[\w\d./?=#@]+)\)/)
    if (match) {
      const id = match[1]
      const url = match[2]
      arr.push({ text: str.slice(0, match.index), id, url })
      checker(str.substring(match.index + id.length + url.length + 4))
    } else if (arr.length) arr.push({ text: str })
  }
  checker(text)
  return arr.length ? arr : null
}

function parse(text) {
  if (text.startsWith('###')) {
    const h = document.createElement('h3')
    h.textContent = text.substring(3)
    return h
  }

  const links = checkLink(text)
  if (links) {
    const p = document.createElement('p')
    links.forEach(({ text, id, url }) => {
      p.append(document.createTextNode(text))
      if (id) {
        const a = document.createElement('a')
        a.href = url
        a.textContent = id
        p.append(a)
      }
    })
    return p
  }

  const p = document.createElement('p')
  p.textContent = text
  return p
}


/***/ }),

/***/ "./src/module/player.js":
/*!******************************!*\
  !*** ./src/module/player.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPlayer: () => (/* binding */ createPlayer)
/* harmony export */ });
/* harmony import */ var _volume__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./volume */ "./src/module/volume.js");
/* harmony import */ var _utils_sound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/sound */ "./src/utils/sound.js");



const sound = new _utils_sound__WEBPACK_IMPORTED_MODULE_1__.Sound()
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

function createPlayer() {
  const player = document.createElement('div')
  player.className = 'player'
  const field = document.createElement('p')
  field.className = 'player__title'
  title = field

  sound.readyCallback = readyCallback
  sound.startPlayCallback = startPlayCallback
  sound.exceptionCallback = exceptionCallback

  player.append((0,_volume__WEBPACK_IMPORTED_MODULE_0__.createVolumeControl)(), title)
  return player
}


/***/ }),

/***/ "./src/module/records.js":
/*!*******************************!*\
  !*** ./src/module/records.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createModalRecords: () => (/* binding */ createModalRecords),
/* harmony export */   updateGameRecords: () => (/* binding */ updateGameRecords)
/* harmony export */ });
/* harmony import */ var _utils_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/state */ "./src/utils/state.js");
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/store */ "./src/utils/store.js");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/format */ "./src/utils/format.js");
/* harmony import */ var _data_loc_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/loc.json */ "./src/data/loc.json");





const store = new _utils_store__WEBPACK_IMPORTED_MODULE_1__.Store()

const updateGameRecords = () => {
  const records = store.get('records')
  const component = document.querySelector('.modal__records_list')
  component.innerHTML = ''
  records
    .sort((a, b) => parseInt(new Date(b.date).getTime() - new Date(a.date).getTime()))
    .forEach(record => {
      const line = document.createElement('li')
      line.className = 'modal__records_item'
      const date = document.createElement('span')
      date.textContent = (0,_utils_format__WEBPACK_IMPORTED_MODULE_2__.formatDate)(record.date)
      const name = document.createElement('span')
      name.textContent = record.name
      const time = document.createElement('span')
      time.textContent = (0,_utils_format__WEBPACK_IMPORTED_MODULE_2__.formatTime)(record.time)
      const turns = document.createElement('span')
      turns.textContent = record.turns
      const score = document.createElement('span')
      score.textContent = record.score
      line.append(date, name, time, turns, score)
      component.append(line)
    })
}

const createModalRecords = () => {
  const state = new _utils_state__WEBPACK_IMPORTED_MODULE_0__.State()
  const lang = state.lang

  const modal = document.createElement('div')
  modal.className = 'modal__records hidden'
  const inner = document.createElement('div')
  inner.className = 'modal__inner'
  const left = document.createElement('div')
  left.className = 'modal__left'
  const right = document.createElement('div')
  right.className = 'modal__right'

  const close = document.createElement('div')
  close.className = 'modal__close'
  const closeImg = document.createElement('div')
  close.append(closeImg)
  close.addEventListener('click', () => modal.classList.add('hidden'))

  const title = document.createElement('h2')
  title.className = 'modal__title'
  title.textContent = _data_loc_json__WEBPACK_IMPORTED_MODULE_3__[lang].recordsTitle

  const wrap = document.createElement('div')
  wrap.className = 'modal__scroll_wrap'
  const records = document.createElement('ul')
  records.className = 'modal__records_list scrolled'
  wrap.append(records)

  const btn = document.createElement('div')
  btn.className = 'button'
  btn.textContent = 'OK'
  btn.addEventListener('click', () => modal.classList.add('hidden'))

  inner.append(close, title, wrap, btn, left, right)
  modal.append(inner)
  modal.addEventListener('click', event => {
    if (event.target === event.currentTarget) {
      event.target.classList.add('hidden')
    }
  })
  return modal
}


/***/ }),

/***/ "./src/module/results.js":
/*!*******************************!*\
  !*** ./src/module/results.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showResults: () => (/* binding */ showResults)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/module/constants.js");
/* harmony import */ var _utils_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/state */ "./src/utils/state.js");
/* harmony import */ var _utils_sound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/sound */ "./src/utils/sound.js");
/* harmony import */ var _data_loc_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/loc.json */ "./src/data/loc.json");





const sound = new _utils_sound__WEBPACK_IMPORTED_MODULE_2__.Sound()

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
      setTimeout(rize, _constants__WEBPACK_IMPORTED_MODULE_0__.GAME.spf * 2)
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
      setTimeout(rize, _constants__WEBPACK_IMPORTED_MODULE_0__.GAME.spf * 2)
    }
    rize()
  })
}

const showResults = async ({ time, turns, score, msg = 'win', solution = false, descr = null }) => {
  const state = new _utils_state__WEBPACK_IMPORTED_MODULE_1__.State()
  const lang = state.lang
  const { timeScore, turnsScore } = score

  sound.say(msg)
  const modal = document.querySelector('.modal__reslt')
  modal.classList.add('disabled')
  modal.classList.remove('hidden')
  modal.reslt.solution.classList.remove('visible')
  modal.reslt.score.removeAttribute('style')
  modal.reslt.shrike.classList.toggle('loose', msg !== 'win')
  modal.reslt.title.textContent = _data_loc_json__WEBPACK_IMPORTED_MODULE_3__[lang][msg]
  modal.reslt.descr.textContent = descr ? _data_loc_json__WEBPACK_IMPORTED_MODULE_3__[lang][descr] : ''
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


/***/ }),

/***/ "./src/module/themeUpdate.js":
/*!***********************************!*\
  !*** ./src/module/themeUpdate.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   themeUpdate: () => (/* binding */ themeUpdate)
/* harmony export */ });
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/theme */ "./src/utils/theme.js");


const themeUpdate = () => {
  const theme = new _utils_theme__WEBPACK_IMPORTED_MODULE_0__.Theme()
  const name = theme.name

  document.querySelectorAll('.modal__close').forEach(el => el.firstElementChild.classList.toggle('invert', name === 'dark'))
  document.querySelector('.game__reset').firstElementChild.classList.toggle('invert', name === 'dark')
  document.querySelector('.rss__logo').classList.toggle('invert', name !== 'dark')
  document.querySelector('.volume__sound_icon').classList.toggle('invert', name !== 'dark')
  document.querySelector('.volume__music_icon').classList.toggle('invert', name !== 'dark')
  document.querySelector('.bg').classList.toggle('bright', name !== 'dark')
}


/***/ }),

/***/ "./src/module/ui.js":
/*!**************************!*\
  !*** ./src/module/ui.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initUI: () => (/* binding */ initUI)
/* harmony export */ });
/* harmony import */ var _utils_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/system */ "./src/utils/system.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/theme */ "./src/utils/theme.js");
/* harmony import */ var _module_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../module/constants */ "./src/module/constants.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/module/player.js");
/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mode */ "./src/module/mode.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu */ "./src/module/menu.js");
/* harmony import */ var _records__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./records */ "./src/module/records.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about */ "./src/module/about.js");
/* harmony import */ var _themeUpdate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./themeUpdate */ "./src/module/themeUpdate.js");
/* harmony import */ var _utils_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/state */ "./src/utils/state.js");
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/store */ "./src/utils/store.js");
/* harmony import */ var _data_loc_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/loc.json */ "./src/data/loc.json");













const theme = new _utils_theme__WEBPACK_IMPORTED_MODULE_1__.Theme()
const store = new _utils_store__WEBPACK_IMPORTED_MODULE_10__.Store()
let pending = 2

function createChars() {
  const chars = document.createElement('div')
  chars.className = 'chars'
  const left = document.createElement('div')
  left.className = 'chars__shrike'
  const right = document.createElement('div')
  right.className = 'chars__bulldog'

  const shrike = document.createElement('blockquote')
  shrike.className = 'speech__shrike hidden'
  left.append(shrike)
  const bulldog = document.createElement('blockquote')
  bulldog.className = 'speech__bulldog hidden'
  right.append(bulldog)

  chars.append(left, right)
  return chars
}

function createStats() {
  const stats = document.createElement('div')
  stats.className = 'game__stats'

  const pos = document.createElement('span')
  pos.className = 'stats__pos'
  pos.textContent = '0:0'

  const turns = document.createElement('span')
  turns.className = 'stats__turns'
  turns.textContent = '0/0'

  const wrap = document.createElement('div')
  wrap.className = 'stats__progress'

  const timer = document.createElement('p')
  timer.className = 'stats__timer'
  timer.textContent = '00:00'

  const progress = document.createElement('div')
  progress.className = 'stats__progress_wrap'
  const progressbar = document.createElement('div')
  progressbar.className = 'stats__progress_bar'
  progress.append(progressbar)

  wrap.append(timer, progress)

  stats.append(pos, wrap, turns)
  return stats
}

function createGameField() {
  const game = document.createElement('div')
  game.className = 'game'

  const field = document.createElement('canvas')
  field.className = 'game__field'
  field.width = _module_constants__WEBPACK_IMPORTED_MODULE_2__.GAME.size
  field.height = _module_constants__WEBPACK_IMPORTED_MODULE_2__.GAME.size
  field.textContent = 'Game field'

  const hover = document.createElement('canvas')
  hover.className = 'game__hover'
  hover.width = _module_constants__WEBPACK_IMPORTED_MODULE_2__.GAME.size
  hover.height = _module_constants__WEBPACK_IMPORTED_MODULE_2__.GAME.size

  const reset = document.createElement('div')
  reset.className = 'game__reset'
  const resetImg = document.createElement('div')
  reset.append(resetImg)

  const solution = document.createElement('div')
  solution.className = 'game__solution hidden'
  solution.textContent = '!'

  const header = document.createElement('div')
  header.className = 'game__header'
  const headerText = document.createElement('p')
  headerText.className = 'game__header_text hidden'
  header.append(headerText, (0,_mode__WEBPACK_IMPORTED_MODULE_4__.createModeSelector)())

  const left = document.createElement('div')
  left.className = 'game__left'
  const right = document.createElement('div')
  right.className = 'game__right'
  const top = document.createElement('div')
  top.className = 'game__top'
  const bott = document.createElement('div')
  bott.className = 'game__bott'

  game.append(header, field, hover, reset, solution, createStats(), createSaveForm(), left, right, top, bott)
  return game
}

function createSaveForm() {
  const state = new _utils_state__WEBPACK_IMPORTED_MODULE_9__.State()
  const lang = state.lang

  const save = document.createElement('form')
  save.className = 'editor__save_form hidden'

  const name = document.createElement('div')
  name.className = 'editor__save_name'

  const input = document.createElement('input')
  input.name = 'name'
  input.type = 'text'
  input.autocomplete = 'off'
  input.placeholder = ''
  input.className = 'editor__save_name-text'

  const label = document.createElement('label')
  label.className = 'editor__save_name-label'
  label.textContent = _data_loc_json__WEBPACK_IMPORTED_MODULE_11__[lang].puzzleName

  name.append(input, label)

  const btn = document.createElement('button')
  btn.type = 'submit'
  btn.className = 'editor__save_btn button'
  btn.textContent = _data_loc_json__WEBPACK_IMPORTED_MODULE_11__[lang].save

  const message = document.createElement('div')
  message.className = 'editor__save_message hidden'

  save.append(name, btn, message)
  return save
}

function createMain() {
  const main = document.createElement('main')
  main.className = 'main'

  const base = document.createElement('div')
  base.className = 'base'

  base.append(createGameField())

  const bg = document.createElement('div')
  bg.className = 'bg'

  main.append(bg, (0,_player__WEBPACK_IMPORTED_MODULE_3__.createPlayer)(), base, createChars())
  return main
}

function createFromTemplate(name, callback = () => {}) {
  const el = document.createElement(name)
  el.className = name
  const xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        el.innerHTML = this.responseText
        pending -= 1
        if (pending <= 0) callback()
      }
      if (this.status === 404) {
        el.innerHTML = 'Page not found.'
      }
    }
  }
  xhttp.open('GET', `./template/${name}.tmpl`, true)
  xhttp.send()
  return el
}

function initUI() {
  const themeName = store.get('theme') ?? (0,_utils_system__WEBPACK_IMPORTED_MODULE_0__.getSystemTheme)()

  const getThemeColors = name => {
    theme.color00 = getComputedStyle(document.body).getPropertyValue('--color00')
    theme.color50 = getComputedStyle(document.body).getPropertyValue('--color50')
    theme.color80 = getComputedStyle(document.body).getPropertyValue('--color80')
    theme.color90 = getComputedStyle(document.body).getPropertyValue('--color90')
    theme.color100 = getComputedStyle(document.body).getPropertyValue('--color100')
    theme.name = name
  }

  const initThemeSwitcher = () => {
    const switcher = document.querySelector('.theme__switcher')
    switcher.checked = themeName === 'dark'
    getThemeColors(themeName)

    switcher.addEventListener('change', event => {
      event.preventDefault()
      const darkTheme = event.currentTarget.checked
      document.body.classList.toggle('theme__dark', darkTheme)
      getThemeColors(darkTheme ? 'dark' : 'light')
      store.set('theme', darkTheme ? 'dark' : 'light')
      ;(0,_themeUpdate__WEBPACK_IMPORTED_MODULE_8__.themeUpdate)()
    })
  }

  const initPendingComponents = () => {
    initThemeSwitcher()
    ;(0,_themeUpdate__WEBPACK_IMPORTED_MODULE_8__.themeUpdate)()
    ;(0,_menu__WEBPACK_IMPORTED_MODULE_5__.initMenu)()
  }

  document.body.classList.toggle('theme__dark', themeName === 'dark')
  document.body.append(
    createFromTemplate('header', initPendingComponents),
    createMain(),
    createFromTemplate('footer', initPendingComponents),
    (0,_menu__WEBPACK_IMPORTED_MODULE_5__.createModalGame)(),
    (0,_menu__WEBPACK_IMPORTED_MODULE_5__.createModalResults)(),
    (0,_records__WEBPACK_IMPORTED_MODULE_6__.createModalRecords)(),
    (0,_about__WEBPACK_IMPORTED_MODULE_7__.createModalAbout)()
  )
}


/***/ }),

/***/ "./src/module/volume.js":
/*!******************************!*\
  !*** ./src/module/volume.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createVolumeControl: () => (/* binding */ createVolumeControl)
/* harmony export */ });
/* harmony import */ var _utils_sound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/sound */ "./src/utils/sound.js");
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/store */ "./src/utils/store.js");



const snd = new _utils_sound__WEBPACK_IMPORTED_MODULE_0__.Sound()
const store = new _utils_store__WEBPACK_IMPORTED_MODULE_1__.Store()

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

function createVolumeControl() {
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


/***/ }),

/***/ "./src/utils/base.js":
/*!***************************!*\
  !*** ./src/utils/base.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Puzzles: () => (/* binding */ Puzzles)
/* harmony export */ });
/* harmony import */ var _data_puzzle_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/puzzle.json */ "./src/data/puzzle.json");


class Puzzles {
  static _instance
  base = [[], [], []]

  constructor() {
    if (Puzzles._instance) return Puzzles._instance
    Puzzles._instance = this
    this.base = _data_puzzle_json__WEBPACK_IMPORTED_MODULE_0__
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


/***/ }),

/***/ "./src/utils/format.js":
/*!*****************************!*\
  !*** ./src/utils/format.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   formatTime: () => (/* binding */ formatTime)
/* harmony export */ });
const formatTime = num => {
  return `${('0' + ~~(num / 60)).slice(-2)}:${('0' + (num % 60)).slice(-2)}`
}

const formatDate = num => {
  const date = new Date(num)
  const year = date.getFullYear().toString().slice(-2)
  const month = `0${date.getMonth() + 1}`.slice(-2)
  const day = `0${date.getDate()}`.slice(-2)
  const hour = `0${date.getHours()}`.slice(-2)
  const min = `${date.getMinutes()}`.slice(-2)
  return `${day}.${month}.${year} ${hour}:${min}`
}


/***/ }),

/***/ "./src/utils/message.js":
/*!******************************!*\
  !*** ./src/utils/message.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   message: () => (/* binding */ message)
/* harmony export */ });
/* harmony import */ var _data_messages_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/messages.json */ "./src/data/messages.json");


const timer = {
  shrike: null,
  bulldog: null,
}

const message = (character, id = null, delay = 3000) => {
  const el = document.querySelector(`.speech__${character}`) // shrike / bulldog
  if (!id) {
    el.classList.add('hidden')
    return
  }
  if (!_data_messages_json__WEBPACK_IMPORTED_MODULE_0__[id]) return Error('No such message')
  const text = Array.isArray(_data_messages_json__WEBPACK_IMPORTED_MODULE_0__[id]) ? _data_messages_json__WEBPACK_IMPORTED_MODULE_0__[id][~~(Math.random() * _data_messages_json__WEBPACK_IMPORTED_MODULE_0__[id].length)] : _data_messages_json__WEBPACK_IMPORTED_MODULE_0__[id]
  el.textContent = text
  el.classList.remove('hidden')
  clearTimeout(timer[character])
  timer[character] = setTimeout(() => el.classList.add('hidden'), delay)
}


/***/ }),

/***/ "./src/utils/sound.js":
/*!****************************!*\
  !*** ./src/utils/sound.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sound: () => (/* binding */ Sound)
/* harmony export */ });
const sounds = {
  dot: { url: './public/dot.ogg', type: 'multiple' },
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

class Sound {
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

  set musicVolume(value) {
    this.music.volume = value
    if (this._playing) this._playing.audio.volume = value
  }

  set musicMuted(value) {
    this.music.muted = value
    if (this._playing) this._playing.audio.muted = value
    this.play(0, 1)
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
      console.warn(`No sound: ${name}`)
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


/***/ }),

/***/ "./src/utils/state.js":
/*!****************************!*\
  !*** ./src/utils/state.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   State: () => (/* binding */ State)
/* harmony export */ });
class State {
  static _instance
  static _current = {
    stx: null,
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


/***/ }),

/***/ "./src/utils/store.js":
/*!****************************!*\
  !*** ./src/utils/store.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Store: () => (/* binding */ Store)
/* harmony export */ });
const initialState = {
  theme: null,
  lang: null,
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

class Store {
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


/***/ }),

/***/ "./src/utils/system.js":
/*!*****************************!*\
  !*** ./src/utils/system.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSystemLanguage: () => (/* binding */ getSystemLanguage),
/* harmony export */   getSystemTheme: () => (/* binding */ getSystemTheme)
/* harmony export */ });
const getSystemTheme = () => {
  let theme = 'light'
  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) theme = 'dark'
  return theme
}

const getSystemLanguage = () => {
  let language = 'en'
  if (navigator?.language) language = navigator.language.slice(0, 2)
  return language
}


/***/ }),

/***/ "./src/utils/theme.js":
/*!****************************!*\
  !*** ./src/utils/theme.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Theme: () => (/* binding */ Theme)
/* harmony export */ });
class Theme {
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


/***/ }),

/***/ "./src/data/loc.json":
/*!***************************!*\
  !*** ./src/data/loc.json ***!
  \***************************/
/***/ ((module) => {

module.exports = JSON.parse('{"en":{"newGame":"New game","randomGame":"Random","editor":"Editor","records":"Records","about":"About","startNewGame":"Start new game","selectPuzzle":"Select puzzle","start":"Start","win":"Win!","loose":"Loose!","timeUsed":"Time","turnsUsed":"Turns","score":"Total score","solutionUsed":"solution used","puzzleName":"Puzzle name","save":"Save","turnsOut":"Your turns is out.","timeOut":"Your time is out.","recordsTitle":"Game records:","aboutTitle":"About:","description":["###Game:","In this game your goal is to solve nonograms with Shrike and Bulldog.","Nonograms is a picture logic puzzles in which cells in a grid must be colored or left blank according to numbers at the edges of the grid to reveal a hidden picture.","###Characters:","Shrike: Have ability to instantly solve current puzzle.","Bulldog: Able to clear field and reset turns count.","###How to solve:","In this puzzle, the numbers are a form of discrete tomography that measures how many unbroken lines of filled-in squares there are in any given row or column. For example, a clue of \\"4 8 3\\" would mean there are sets of four, eight, and three filled squares, in that order, with at least one blank square between successive sets.","###Author:","Game was developed by [mrHoft](https://github.com/mrHoft) in 2024 as an educational project of [RSSchool](https://rs.school/) Front-end-s1 course.","Inspirated by [Zeurel](https://www.youtube.com/@Zeurel) \\"Monkey Wrench\\".","No TypeScript, React or any other library used (by task rules): only core JS, only hardcore!"]}}');

/***/ }),

/***/ "./src/data/messages.json":
/*!********************************!*\
  !*** ./src/data/messages.json ***!
  \********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"solution":["Using solution make you impossible to score this puzzle.","It is solution option. Using it prevent you to score your result!"],"reset":["Yep! Let\'s clear this field.","Clearing field also resets your turns."],"blank-filed":["...this field is still empty.","There is still nothing in the field"],"adequateName":"...consider to use adequate name for a new puzzle.","duplicateName":["This name is already used.","Come up with something new."],"editorNew":["Let\'s create your own puzzle!","Show your creative skills!","OK, let\'s get creative."],"gameNew":["Wanna play?","OK, let\'s do this!","Time to solve this puzzle!","What we have here?","It will be easy!","Ready for action?","Let\'s solve this puzzle!"],"attemtsHalf":["Used half of maximum turns!","Keep track of the attempts used."],"unknown":["What are you trying to do?","What are you trying to achieve with this?","Hm-m-m... What?"],"lastGameRecovered":["Recovered last attempt.","Welcome back!","We have uncomplete task here."]}');

/***/ }),

/***/ "./src/data/puzzle.json":
/*!******************************!*\
  !*** ./src/data/puzzle.json ***!
  \******************************/
/***/ ((module) => {

module.exports = JSON.parse('[[{"name":"Monkey","data":"0111011111101010111000100"},{"name":"Wrench","data":"0001000111001100100010000"},{"name":"Whell","data":"0111010001101011000101110"},{"name":"Arrow","data":"0011100011001010100010000"},{"name":"Smile","data":"0000001010000001000101110"},{"name":"House","data":"0010001110111110101001110"},{"name":"Barrette","data":"0100011000001000001100010"},{"name":"Sun","data":"1010101110110110111010101"},{"name":"Gear","data":"0010001110110110111000100"},{"name":"Scratches","data":"0100010001001100100010000"},{"name":"Car","data":"0000001110111110101000000"},{"name":"Duck","data":"0011000111110110011000100"},{"name":"Lizard","data":"1010101110001000111010101"},{"name":"Clock","data":"0111011011110011111101110"},{"name":"Diskette","data":"1111011111100011010111111"},{"name":"Alien","data":"1111110101111111111101010"},{"name":"Mouse","data":"0011001111111010111101010"},{"name":"Heart","data":"0101010101100010101000100"},{"name":"Head","data":"0111011111101011111101110"},{"name":"Snail","data":"0110010010101001000101110"}],[{"name":"Mail","data":"0000110000000100100000100001000100000010110000001110100001011001001001100011000110000000011111111111"},{"name":"Lamp","data":"0001111000001000010000100001000010000100000111100000000000000001111000000000000000011110000000110000"},{"name":"Key","data":"0000000000000000000000000011100000010001111111000101010100010000001110000000000000000000000000000000"},{"name":"Phone","data":"0000000100001111110000100001000010000100001111110000101011000011010100001010110000110101000011111100"},{"name":"Boobs","data":"0000000000000000000001110011101000110001100000000110100001011000110001011100111000000000000000000000"},{"name":"Boy","data":"0000110000000100100000010010000000110000111111111100111111000001111000000111100000010010000001001000"},{"name":"Bug","data":"0010000100001000010000010010000010110100011000011010100001010010000100000100100000101101000010000100"},{"name":"Ball","data":"0000110000001111110001101111100101111110110111111111111111110111111110011111111000111111000000110000"},{"name":"Vial","data":"0000110000000111100000001100000000110000000111100000111111000111111010111111110111111111110111111110"},{"name":"Copter","data":"0001111111000000100010000111101111100111100000011111110000010000100001000001111000000000000000111111"},{"name":"Scull","data":"0001111000011000011010000000011011001101101100110110010010010100000010010000001001010010100011111100"},{"name":"Smile","data":"0001111000011111111001111111101100000011110011001111111111111101111011011000011001111111100001111000"},{"name":"Booger","data":"0000000000110000001100100001000011111100001011011001111111110111111111001010101000101010100000000000"},{"name":"Duck","data":"0000000000000110000000111100000010110000111111000101111111110001111111000111111000001111000000000000"},{"name":"Bell","data":"0000110000000100100000100001000010000100001000010000111111000100110010100011000101000000100011111100"},{"name":"Coin","data":"0001111000011000011001011110101011111101101111110110111111011011111101010111101001100001100001111000"},{"name":"Cup","data":"0001000000000010000000010000001111111111100000010110000001010100001010001111000011111111000000000000"},{"name":"TV set","data":"0001001000000011000001111111101000000111100000010110000001111000000101100000011111111111110111111110"},{"name":"Dog","data":"0000000000000100000011110000011111111110001111111000111111100010000010011000011000000000000000000000"},{"name":"Cat","data":"0000000000100010000011111000001010100000011100000100100000010111100001011111111011111111100000000000"},{"name":"Bird","data":"0000000000001110000001111000001101100000011111000001111111000111111111011111110001111000000001000000"},{"name":"Skate","data":"0001100000000110000011001000000011111100000011101000001110000000111100000100001111111111000010010000"}],[{"name":"TV set","data":"000100000001000000010000010000000001000100000000000101000000111111111111111111111111111111110000000000111110000000000101110000000000111110000000000101110000000000111110000000000111111111111111111111111111111111000000000000000"},{"name":"Key","data":"000000000000000000000000000000000000000000000000000000000000011111000000000100000100000000100100111111111101110100000001100100111001001100000100110110011111000000000000000000000000000000000000000000000000000000000000000000000"},{"name":"Cart","data":"000000000000000000000000000000000000000000000110000000000000111000000000000000111111111111000100000000001000100000000001000011111111110000010000000010000001000000100000001111111100000000000000000000001100001100000001100001100"},{"name":"Fish","data":"000000000000000000000000000000000000011110000000111111110001001000001100011010000000111101100001000000001100100100000010100000100000010100001000000001100000001111111010000011000001001111111110000000000000000000000000000000000"},{"name":"Lamp","data":"000000111000000000001000100000000011111110000000010000011111110011111110001101100000000101101000000000101100000000000101010000000011101001000000000001000111000111111000001000100000000010000010000000100000001000000111111111000"},{"name":"Cat","data":"111000000000111100100000001001100010000010001100001000100001100001000100001100001111100001100000000000001010000000000010010100000001010100100000001001100000010000001100000111000001100000000000001011000000000110000111111111000"},{"name":"Gemm","data":"000000000000000000000000000000000111111111000001000000000100010000000000010100000000000001101111110000001100111110000001010011110000010001001110000100000100110001000000010010010000000001000100000000000111000000000000000000000"},{"name":"Ham","data":"000111110000000011000001000000010000000100000100110001010000100110001010000100000010010000100000100010000100001000010000010110000010000001000000001000000111111000100000000000100011000000000010001000000000001010000000000001100"},{"name":"Coffee cup","data":"000001111100000000111111111000001110000011100001100000001111001110000011101001001111100101001000000000101011000000000101101000000000110100100000001001100010000010001100001111100001011000000000110000110000011000000001111100000"},{"name":"Ball","data":"000000111000000000011000110000000100000001000001010000000100010010000000010010001000000010100001000000001100000100000001100000010000001010000001100010010000000011010001000000000100000100000001000000011000110000000000111000000"},{"name":"Cube","data":"000111111111110001000000000001010000110000011100000000000101111111111111001100000000001101100000000001101100110011001001100110011001001100000000001011100110011001011100110011001001100000000001010100000000001100011111111111000"},{"name":"Cute","data":"011100000001110111110000011111111111111111111011000000000110010000000000010100000000000001100000000000001100110000011001100110000011001100110000011001100000111000001100000000000001110000000000011111111111111111011111111111110"},{"name":"Lock","data":"000011111110000000100000001000000100000001000000100000001000001111111111100110100000001011101111111111101100000000000001100000000000001100000111000001100000010000001100000010000001100000010000001110000000000011001111111111100"},{"name":"Umbrella","data":"000000010000000000001111100000000111111111000011111111111110111111111111111000000010000000000000010000000000000010000000000000010000000000000010000000000000010000000000000010000000000000010000000000000010100000000000001000000"},{"name":"Mushroom","data":"000000000000000000001111100000000111111111000011100111111110111100111001111111111111001111001111111111100000000111000000000000111000000000000111000000000000111000000000000111000000000000111000000000000111000000000000000000000"},{"name":"Heart","data":"111111111111111111111111111111111111111111111111000111000111110000010000011100000000000001100000000000001100000000000001110000000000011111000000000111111100000001111111110000011111111111000111111111111101111111111111111111111"},{"name":"Bus","data":"000000000000000001111111111100010000000000010100000000000001100000000000001100000000000001100000000000001100000000000001100000000000001111111111111111111001111100111111001111100111111111111111111000110000011000000000000000000"},{"name":"Plain","data":"000000010000000000000111000000000000111000000000000111000000000000111000000000100111001000000100111001000000111111111000011111111111110111111111111111000000111000000000000111000000000000111000000000000111000000000001111100000"},{"name":"Rocket","data":"000000010000000000000111000000000001111100000000001101100000000001111100000000001101100000000001111100000000001111100000000001111100000000011111110000000111111111000000110000011000000100111001000000000111000000000000010000000"},{"name":"World","data":"000001111100000000110000011000001001000000100010000110000010010000001000010100000001000101111100000100101100010000100101100010000101001100100000010001010011110000010010000010000010001000010000100000110100011000000001111100000"},{"name":"Leaf","data":"000000000000001000000000000011000000000011111000000001111101000000111111011000011111110111000111111101110001111111011110001111100111100011111011111000011110111111000001101111110000001111111100000011001110000000110000000000000"}]]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/app.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9FTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1ZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUM7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL21vZHVsZS9hYm91dC5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvbW9kdWxlL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvbW9kdWxlL2RyYXcuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL21vZHVsZS9nYW1lLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9tb2R1bGUvbWVudS5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvbW9kdWxlL21vZGUuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL21vZHVsZS9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL21vZHVsZS9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL21vZHVsZS9yZWNvcmRzLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9tb2R1bGUvcmVzdWx0cy5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvbW9kdWxlL3RoZW1lVXBkYXRlLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9tb2R1bGUvdWkuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL21vZHVsZS92b2x1bWUuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL3V0aWxzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL3V0aWxzL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvdXRpbHMvbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvdXRpbHMvc291bmQuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL3V0aWxzL3N0YXRlLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy91dGlscy9zdG9yZS5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvdXRpbHMvc3lzdGVtLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy91dGlscy90aGVtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0VUkgfSBmcm9tICcuL21vZHVsZS91aSdcbmltcG9ydCB7IHN0YXJ0LCBlZGl0b3IgfSBmcm9tICcuL21vZHVsZS9nYW1lJ1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuL3V0aWxzL3N0b3JlJ1xuaW1wb3J0IHsgUHV6emxlcyB9IGZyb20gJy4vdXRpbHMvYmFzZSdcbmltcG9ydCB7IFNvdW5kIH0gZnJvbSAnLi91dGlscy9zb3VuZCdcblxuY29uc3Qgc291bmQgPSBuZXcgU291bmQoKVxuY29uc3QgcHV6emxlcyA9IG5ldyBQdXp6bGVzKClcbmNvbnN0IHN0b3JlID0gbmV3IFN0b3JlKClcblxuZnVuY3Rpb24gZ2FtZVN0YXJ0KCkge1xuICBjb25zdCBjdXN0b20gPSBzdG9yZS5nZXQoJ3B1enpsZXMnKVxuICBpZiAoY3VzdG9tICYmIGN1c3RvbS5sZW5ndGggPiAwKSB7XG4gICAgY3VzdG9tLmZvckVhY2goaXRlbSA9PiBwdXp6bGVzLmFkZChpdGVtLm5hbWUsIGl0ZW0ucHV6emxlKSlcbiAgfVxuXG4gIGNvbnN0IGxhc3QgPSBzdG9yZS5nZXQoJ2xhc3QnKVxuICBpZiAobGFzdC5nYW1lKSBzdGFydChsYXN0LmdhbWUubW9kZSwgbGFzdC5nYW1lLnB1enpsZSwgbGFzdC5nYW1lKVxuICBlbHNlIGlmIChsYXN0LmVkaXRvcikgZWRpdG9yKGxhc3QuZWRpdG9yKVxuICBlbHNlIHN0YXJ0KClcblxuICBzb3VuZC5wbGF5KDAsIDEpXG59XG5cbmZ1bmN0aW9uIHByZXBhcmUoKSB7XG4gIGluaXRVSSgpXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZ2FtZVN0YXJ0KVxufVxuXG5wcmVwYXJlKClcbiIsImltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vdXRpbHMvc3RhdGUnXG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJy4vcGFyc2VyJ1xuaW1wb3J0IExvYyBmcm9tICcuLi9kYXRhL2xvYy5qc29uJyBhc3NlcnQgeyB0eXBlOiAnanNvbicgfVxuXG5leHBvcnQgY29uc3QgY3JlYXRlTW9kYWxBYm91dCA9ICgpID0+IHtcbiAgY29uc3Qgc3RhdGUgPSBuZXcgU3RhdGUoKVxuICBjb25zdCBsYW5nID0gc3RhdGUubGFuZ1xuXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbW9kYWwuY2xhc3NOYW1lID0gJ21vZGFsX19hYm91dCBoaWRkZW4nXG4gIGNvbnN0IGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaW5uZXIuY2xhc3NOYW1lID0gJ21vZGFsX19pbm5lcidcbiAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGxlZnQuY2xhc3NOYW1lID0gJ21vZGFsX19sZWZ0J1xuICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHJpZ2h0LmNsYXNzTmFtZSA9ICdtb2RhbF9fcmlnaHQnXG5cbiAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjbG9zZS5jbGFzc05hbWUgPSAnbW9kYWxfX2Nsb3NlJ1xuICBjb25zdCBjbG9zZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNsb3NlLmFwcGVuZChjbG9zZUltZylcbiAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKSlcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgdGl0bGUuY2xhc3NOYW1lID0gJ21vZGFsX190aXRsZSdcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBMb2NbbGFuZ10uYWJvdXRUaXRsZVxuXG4gIGNvbnN0IHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB3cmFwLmNsYXNzTmFtZSA9ICdtb2RhbF9fc2Nyb2xsX3dyYXAnXG4gIGNvbnN0IGRlc2NyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZGVzY3IuY2xhc3NOYW1lID0gJ21vZGFsX19hYm91dF9kZXNjciBzY3JvbGxlZCdcbiAgd3JhcC5hcHBlbmQoZGVzY3IpXG5cbiAgTG9jW2xhbmddLmRlc2NyaXB0aW9uLmZvckVhY2godGV4dCA9PiBkZXNjci5hcHBlbmQocGFyc2UodGV4dCkpKVxuXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGJ0bi5jbGFzc05hbWUgPSAnYnV0dG9uJ1xuICBidG4udGV4dENvbnRlbnQgPSAnT0snXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpKVxuXG4gIGlubmVyLmFwcGVuZChjbG9zZSwgdGl0bGUsIHdyYXAsIGJ0biwgbGVmdCwgcmlnaHQpXG4gIG1vZGFsLmFwcGVuZChpbm5lcilcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgfVxuICB9KVxuICByZXR1cm4gbW9kYWxcbn1cbiIsImV4cG9ydCBjb25zdCBHQU1FID0ge1xuICBzaXplOiA2MDAsXG4gIHNpemUyMGRlZzogNzIzLjc3MjMzODg2NzE4NzUsXG4gIGJsb2NrU2l6ZTogMzAsXG4gIHNwZjogfn4oMTAwMCAvIDYwKSxcbiAgbW9kZXM6IFsnNXg1JywgJzEweDEwJywgJzE1eDE1J10sXG4gIGxhbmd1YWdlczogWydlbiddLFxufVxuIiwiaW1wb3J0IHsgR0FNRSB9IGZyb20gJy4vY29uc3RhbnRzJ1xuXG5jb25zdCBTID0gR0FNRS5ibG9ja1NpemVcbmNvbnN0IHNwZiA9IEdBTUUuc3BmXG5cbmV4cG9ydCBjb25zdCBmaWVsZCA9IGdhbWUgPT4ge1xuICBnYW1lLmN0eC5jbGVhclJlY3QoMCwgMCwgR0FNRS5zaXplLCBHQU1FLnNpemUpXG4gIGdhbWUuY3R4LnN0cm9rZVN0eWxlID0gZ2FtZS5jb2xvcjgwXG4gIGdhbWUuY3R4LmJlZ2luUGF0aCgpXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IGdhbWUucm93czsgaSArPSAxKSB7XG4gICAgZ2FtZS5jdHgubW92ZVRvKGdhbWUuc3RhcnQgKyBpICogUywgZ2FtZS5zdGFydClcbiAgICBnYW1lLmN0eC5saW5lVG8oZ2FtZS5zdGFydCArIGkgKiBTLCBnYW1lLnN0YXJ0ICsgZ2FtZS5yb3dzICogUylcbiAgICBnYW1lLmN0eC5tb3ZlVG8oZ2FtZS5zdGFydCwgZ2FtZS5zdGFydCArIGkgKiBTKVxuICAgIGdhbWUuY3R4LmxpbmVUbyhnYW1lLnN0YXJ0ICsgZ2FtZS5yb3dzICogUywgZ2FtZS5zdGFydCArIGkgKiBTKVxuICB9XG4gIGdhbWUuY3R4LnN0cm9rZSgpXG5cbiAgZ2FtZS5jdHguc3Ryb2tlU3R5bGUgPSBnYW1lLmNvbG9yMTAwXG4gIGdhbWUuY3R4LmJlZ2luUGF0aCgpXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IGdhbWUucm93czsgaSArPSA1KSB7XG4gICAgZ2FtZS5jdHgubW92ZVRvKGdhbWUuc3RhcnQgKyBpICogUywgZ2FtZS5zdGFydClcbiAgICBnYW1lLmN0eC5saW5lVG8oZ2FtZS5zdGFydCArIGkgKiBTLCBnYW1lLnN0YXJ0ICsgZ2FtZS5yb3dzICogUylcbiAgICBnYW1lLmN0eC5tb3ZlVG8oZ2FtZS5zdGFydCwgZ2FtZS5zdGFydCArIGkgKiBTKVxuICAgIGdhbWUuY3R4LmxpbmVUbyhnYW1lLnN0YXJ0ICsgZ2FtZS5yb3dzICogUywgZ2FtZS5zdGFydCArIGkgKiBTKVxuICB9XG4gIGdhbWUuY3R4LnN0cm9rZSgpXG59XG5cbmV4cG9ydCBjb25zdCBmaWVsZEZpbGwgPSBnYW1lID0+IHtcbiAgY29uc3Qgc3QgPSBnYW1lLnN0YXJ0XG4gIGZvciAobGV0IHkgPSAwOyB5IDwgZ2FtZS5yb3dzOyB5ICs9IDEpIHtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGdhbWUucm93czsgeCArPSAxKSB7XG4gICAgICBjb25zdCByeCA9IHN0ICsgeCAqIFNcbiAgICAgIGNvbnN0IHJ5ID0gc3QgKyB5ICogU1xuICAgICAgaWYgKGdhbWUuYXJyW3ldW3hdID09PSAxKSB7XG4gICAgICAgIGdhbWUuY3R4LmZpbGxTdHlsZSA9IGdhbWUuY29sb3IxMDBcbiAgICAgICAgZ2FtZS5jdHguZmlsbFJlY3QocnggKyAxLCByeSArIDEsIFMgLSAyLCBTIC0gMilcbiAgICAgIH1cbiAgICAgIGlmIChnYW1lLmFyclt5XVt4XSA9PT0gMikgY3Jvc3MoZ2FtZSwgcngsIHJ5KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc29sdXRpb24gPSBnYW1lID0+IHtcbiAgY29uc3Qgc3QgPSBnYW1lLnN0YXJ0XG4gIGZvciAobGV0IHkgPSAwOyB5IDwgZ2FtZS5yb3dzOyB5ICs9IDEpIHtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGdhbWUucm93czsgeCArPSAxKSB7XG4gICAgICBjb25zdCByeCA9IHN0ICsgeCAqIFNcbiAgICAgIGNvbnN0IHJ5ID0gc3QgKyB5ICogU1xuICAgICAgaWYgKGdhbWUucHV6emxlW3ldW3hdID09PSAwICYmIGdhbWUuYXJyW3ldW3hdID09PSAxKSB7XG4gICAgICAgIGNyb3NzUmVkKGdhbWUsIHJ4LCByeSlcbiAgICAgIH1cbiAgICAgIGlmIChnYW1lLnB1enpsZVt5XVt4XSA9PT0gMSAmJiBnYW1lLmFyclt5XVt4XSAhPT0gMSkge1xuICAgICAgICBnYW1lLmN0eC5maWxsU3R5bGUgPSAneWVsbG93J1xuICAgICAgICBnYW1lLmN0eC5maWxsUmVjdChyeCArIDEsIHJ5ICsgMSwgUyAtIDIsIFMgLSAyKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcG9pbnRlciA9IChnYW1lLCB4LCB5KSA9PiB7XG4gIGdhbWUucG9pbnRlci5jbGVhclJlY3QoMCwgMCwgR0FNRS5zaXplLCBHQU1FLnNpemUpXG4gIGlmICh4ICE9PSAtMSAmJiB5ICE9PSAtMSkge1xuICAgIGNvbnN0IHN0ID0gZ2FtZS5zdGFydFxuICAgIGNvbnN0IHJ4ID0gc3QgKyB4ICogU1xuICAgIGNvbnN0IHJ5ID0gc3QgKyB5ICogU1xuICAgIGdhbWUucG9pbnRlci5maWxsU3R5bGUgPSBnYW1lLmNvbG9yMTAwXG4gICAgZ2FtZS5wb2ludGVyLmZpbGxSZWN0KHJ4LCBzdCwgUywgZ2FtZS5yb3dzICogUylcbiAgICBnYW1lLnBvaW50ZXIuZmlsbFJlY3Qoc3QsIHJ5LCBnYW1lLnJvd3MgKiBTLCBTKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBibG9jayA9IChnYW1lLCB4LCB5LCBwb2ludCkgPT4ge1xuICBsZXQgc2l6ZSA9IHBvaW50ICogKFMgLSA0KVxuICBjb25zdCBkcmF3ID0gKCkgPT4ge1xuICAgIGdhbWUuY3R4LmNsZWFyUmVjdCh4ICsgMSwgeSArIDEsIFMgLSAyLCBTIC0gMilcbiAgICBnYW1lLmN0eC5maWxsU3R5bGUgPSBnYW1lLmNvbG9yMTAwXG4gICAgZ2FtZS5jdHguZmlsbFJlY3QoeCArIFMgLyAyIC0gc2l6ZSAvIDIsIHkgKyBTIC8gMiAtIHNpemUgLyAyLCBzaXplLCBzaXplKVxuICAgIHNpemUgKz0gcG9pbnQgPyAtNCA6IDRcbiAgICBpZiAoc2l6ZSA+IDAgJiYgc2l6ZSA8IFMpIHNldFRpbWVvdXQoZHJhdywgc3BmKVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHBvaW50ICE9PSAxKSBnYW1lLmN0eC5maWxsUmVjdCh4ICsgMSwgeSArIDEsIFMgLSAyLCBTIC0gMilcbiAgICAgIGVsc2UgZ2FtZS5jdHguY2xlYXJSZWN0KHggKyAxLCB5ICsgMSwgUyAtIDIsIFMgLSAyKVxuICAgIH1cbiAgfVxuICBkcmF3KClcbn1cblxuZXhwb3J0IGNvbnN0IGNyb3NzID0gKGdhbWUsIHgsIHksIHBvaW50ID0gMCkgPT4ge1xuICBnYW1lLmN0eC5jbGVhclJlY3QoeCArIDEsIHkgKyAxLCBTIC0gMiwgUyAtIDIpXG4gIGlmIChwb2ludCA9PT0gMikgcmV0dXJuXG4gIGNvbnN0IGQgPSBTIC8gNFxuICBnYW1lLmN0eC5zdHJva2VTdHlsZSA9IGdhbWUuY29sb3IxMDBcbiAgZ2FtZS5jdHguYmVnaW5QYXRoKClcbiAgZ2FtZS5jdHgubW92ZVRvKHggKyBkLCB5ICsgZClcbiAgZ2FtZS5jdHgubGluZVRvKHggKyBTIC0gZCwgeSArIFMgLSBkKVxuICBnYW1lLmN0eC5tb3ZlVG8oeCArIFMgLSBkLCB5ICsgZClcbiAgZ2FtZS5jdHgubGluZVRvKHggKyBkLCB5ICsgUyAtIGQpXG4gIGdhbWUuY3R4LnN0cm9rZSgpXG59XG5cbmV4cG9ydCBjb25zdCBjcm9zc1JlZCA9IChnYW1lLCB4LCB5KSA9PiB7XG4gIGdhbWUuY3R4LmNsZWFyUmVjdCh4ICsgMSwgeSArIDEsIFMgLSAyLCBTIC0gMilcbiAgY29uc3QgZCA9IFMgLyA0XG4gIGdhbWUuY3R4LnN0cm9rZVN0eWxlID0gJ3JlZCdcbiAgZ2FtZS5jdHguYmVnaW5QYXRoKClcbiAgZ2FtZS5jdHgubW92ZVRvKHggKyBkLCB5ICsgZClcbiAgZ2FtZS5jdHgubGluZVRvKHggKyBTIC0gZCwgeSArIFMgLSBkKVxuICBnYW1lLmN0eC5tb3ZlVG8oeCArIFMgLSBkLCB5ICsgZClcbiAgZ2FtZS5jdHgubGluZVRvKHggKyBkLCB5ICsgUyAtIGQpXG4gIGdhbWUuY3R4LnN0cm9rZSgpXG59XG5cbmV4cG9ydCBjb25zdCBudW1iZXJzID0gZ2FtZSA9PiB7XG4gIGNvbnN0IGZvbnQgPSAxNFxuICBjb25zdCBzcGFjZSA9IDNcbiAgZ2FtZS5jdHguZm9udCA9IGAke2ZvbnR9cHggYXJpYWxgXG4gIGdhbWUuY3R4LnN0cm9rZVN0eWxlID0gJ2dyYXknIC8vZ2FtZS5jb2xvcjUwXG4gIGNvbnN0IHN0ID0gZ2FtZS5zdGFydFxuXG4gIGZvciAobGV0IHggPSAwOyB4IDwgZ2FtZS5yb3dzOyB4ICs9IDEpIHtcbiAgICBsZXQgbm1zID0gW11cbiAgICBsZXQgbiA9IDBcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGdhbWUucm93czsgeSArPSAxKSB7XG4gICAgICBpZiAoZ2FtZS5wdXp6bGVbeV1beF0gPT09IDEpIG4gKz0gMVxuICAgICAgZWxzZSBpZiAobiA+IDApIHtcbiAgICAgICAgbm1zLnB1c2gobilcbiAgICAgICAgbiA9IDBcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG4gPiAwKSBubXMucHVzaChuKVxuXG4gICAgbm1zLnJldmVyc2UoKS5mb3JFYWNoKChuLCBpKSA9PiB7XG4gICAgICBjb25zdCByeCA9IHN0ICsgeCAqIFMgKyAoUyAtIGZvbnQpIC8gMlxuICAgICAgZ2FtZS5jdHguc3Ryb2tlVGV4dChuLCByeCwgc3QgLSBTIC8gMiAtIGkgKiAoZm9udCArIHNwYWNlKSlcbiAgICB9KVxuICB9XG5cbiAgZm9yIChsZXQgeSA9IDA7IHkgPCBnYW1lLnJvd3M7IHkgKz0gMSkge1xuICAgIGxldCBubXMgPSBbXVxuICAgIGxldCBuID0gMFxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgZ2FtZS5yb3dzOyB4ICs9IDEpIHtcbiAgICAgIGlmIChnYW1lLnB1enpsZVt5XVt4XSA9PT0gMSkgbiArPSAxXG4gICAgICBlbHNlIGlmIChuID4gMCkge1xuICAgICAgICBubXMucHVzaChuKVxuICAgICAgICBuID0gMFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAobiA+IDApIG5tcy5wdXNoKG4pXG5cbiAgICBubXMucmV2ZXJzZSgpLmZvckVhY2goKG4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHJ5ID0gc3QgKyB5ICogUyArIChTIC0gZm9udCkgLyAyICsgZm9udFxuICAgICAgZ2FtZS5jdHguc3Ryb2tlVGV4dChuLCBzdCAtIFMgLyAyIC0gZm9udCAvIDIgLSBpICogKGZvbnQgKyBzcGFjZSksIHJ5KVxuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vdXRpbHMvc3RhdGUnXG5pbXBvcnQgeyBTb3VuZCB9IGZyb20gJy4uL3V0aWxzL3NvdW5kJ1xuaW1wb3J0IHsgR0FNRSB9IGZyb20gJy4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi91dGlscy90aGVtZSdcbmltcG9ydCB7IFB1enpsZXMgfSBmcm9tICcuLi91dGlscy9iYXNlJ1xuaW1wb3J0ICogYXMgZHJhdyBmcm9tICcuL2RyYXcnXG5pbXBvcnQgeyB1cGRhdGVQdXp6bGVMaXN0IH0gZnJvbSAnLi9tZW51J1xuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJy4uL3V0aWxzL21lc3NhZ2UnXG5pbXBvcnQgeyBzaG93UmVzdWx0cyB9IGZyb20gJy4vcmVzdWx0cydcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi4vdXRpbHMvc3RvcmUnXG5pbXBvcnQgeyBmb3JtYXRUaW1lIH0gZnJvbSAnLi4vdXRpbHMvZm9ybWF0J1xuXG5jb25zdCBwdXp6bGVzID0gbmV3IFB1enpsZXMoKVxuY29uc3Qgc291bmQgPSBuZXcgU291bmQoKVxuY29uc3Qgc3RvcmUgPSBuZXcgU3RvcmUoKVxuY29uc3QgUyA9IEdBTUUuYmxvY2tTaXplXG5jb25zdCB0aW1lciA9IHt9XG5sZXQgbW91c2VPdmVyRWwgPSBudWxsXG5cbmNvbnN0IGdhbWUgPSB7XG4gIGN1cnJlbnQ6IHtcbiAgICBtb2RlOiAwLFxuICAgIHB1enpsZTogMCxcbiAgICBzb2x1dGlvbjogMCxcbiAgICB0dXJuczogMCxcbiAgfSxcbiAgaW5pdDoge1xuICAgIGV2ZW50czogZmFsc2UsXG4gICAgYmFzZTogZmFsc2UsXG4gICAgZWRpdG9yOiBmYWxzZSxcbiAgfSxcbiAgcG9pbnRlcjogbnVsbCxcbiAgZmllbGQ6IHtcbiAgICBlbDogbnVsbCxcbiAgICBzaXplOiA2MDAsXG4gICAgazogMSxcbiAgfSxcbiAgc3RhcnQ6IDAsXG4gIHJvd3M6IDAsXG4gIGM6IHtcbiAgICB4OiAtMSxcbiAgICB5OiAtMSxcbiAgICBkb3duOiAtMSxcbiAgfSxcbiAgc3RhdHM6IHtcbiAgICBwb3M6IG51bGwsXG4gICAgdHVybnM6IG51bGwsXG4gICAgcHJvZ3Jlc3M6IG51bGwsXG4gIH0sXG4gIGFycjogW10sXG4gIHB1enpsZTogW10sXG4gIHB1enpsZU5hbWU6IG51bGwsXG4gIHBvaW50c1RvdGFsOiAwLFxuICB0dXJuc01heDogMCxcbiAgdGltZXI6IDAsXG4gIHRpbWU6IDAsXG4gIHN0YXR1czogbnVsbCxcbn1cblxuY29uc3QgcHJlcGFyZUNvbG9ycyA9ICgpID0+IHtcbiAgY29uc3QgdGhlbWUgPSBuZXcgVGhlbWUoKVxuICBnYW1lLmNvbG9yMDAgPSB0aGVtZS5jb2xvcjAwXG4gIGdhbWUuY29sb3I1MCA9IHRoZW1lLmNvbG9yNTBcbiAgZ2FtZS5jb2xvcjgwID0gdGhlbWUuY29sb3I4MFxuICBnYW1lLmNvbG9yOTAgPSB0aGVtZS5jb2xvcjkwXG4gIGdhbWUuY29sb3IxMDAgPSB0aGVtZS5jb2xvcjEwMFxufVxuXG5jb25zdCBwcmVwYXJlID0gKCkgPT4ge1xuICBwcmVwYXJlQ29sb3JzKClcbiAgY29uc3Qgc3RhdGUgPSBuZXcgU3RhdGUoKVxuICBnYW1lLmN0eCA9IHN0YXRlLmN0eFxuICBnYW1lLnBvaW50ZXIgPSBzdGF0ZS5wb2ludGVyXG4gIGdhbWUubW9kZSA9IHN0YXRlLm1vZGVcbiAgY29uc3QgbSA9IH5+KEdBTUUuc2l6ZSAvIDIpXG4gIGdhbWUucm93cyA9IChzdGF0ZS5tb2RlICsgMSkgKiA1XG4gIGNvbnN0IHNoaWZ0ID0gZ2FtZS5yb3dzICUgMiA/IFMgLyAyIDogMFxuICBnYW1lLnN0YXJ0ID0gbSAtIE1hdGguZmxvb3IoZ2FtZS5yb3dzIC8gMikgKiBTIC0gc2hpZnRcbiAgZ2FtZS5zdGF0cy5wb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHNfX3BvcycpXG4gIGdhbWUuc3RhdHMudHVybnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHNfX3R1cm5zJylcbiAgZ2FtZS5zdGF0cy5wcm9ncmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0c19fcHJvZ3Jlc3NfYmFyJylcbiAgZ2FtZS5zdGF0cy5wcm9ncmVzcy5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcbiAgZ2FtZS5maWVsZC5lbCA9IHN0YXRlLmhvdmVyXG4gIGdhbWUuZmllbGQuc2l6ZSA9IEdBTUUuc2l6ZTIwZGVnXG4gIGdhbWUuYXJyID0gcHV6emxlcy5ibGFuayhnYW1lLm1vZGUpXG5cbiAgZ2FtZS5zdGF0cy5wcm9ncmVzcy5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVfX3NvbHV0aW9uJykucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXG59XG5cbmNvbnN0IGdhbWVFbmQgPSAobXNnLCBkZXNjcikgPT4ge1xuICBnYW1lLnN0YXR1cyA9ICdlbmQnXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXNlJykuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKVxuICBnYW1lLmMuZG93biA9IC0xXG4gIGRyYXcucG9pbnRlcihnYW1lLCAtMSwgLTEpXG4gIGNsZWFySW50ZXJ2YWwoZ2FtZS50aW1lcilcblxuICBjb25zdCB0aW1lID0gfn4oKG5ldyBEYXRlKCkgLSBnYW1lLnRpbWUpIC8gMTAwMClcbiAgY29uc3QgdGltZVNjb3JlID0gTWF0aC5tYXgoZ2FtZS5wb2ludHNUb3RhbCAqIDMgLSB0aW1lLCAwKSAqIDVcbiAgY29uc3QgdHVybnNTY29yZSA9IE1hdGgubWF4KGdhbWUudHVybnNNYXggLSBnYW1lLmN1cnJlbnQudHVybnMsIDApICogNVxuICAvLyBjb25zb2xlLmxvZyhkZXNjciwgdGltZVNjb3JlIC8gNSwgdHVybnNTY29yZSAvIDUpXG4gIHNob3dSZXN1bHRzKHsgdGltZSwgdHVybnM6IGdhbWUuY3VycmVudC50dXJucywgc2NvcmU6IHsgdGltZVNjb3JlLCB0dXJuc1Njb3JlIH0sIG1zZywgc29sdXRpb246IGdhbWUuY3VycmVudC5zb2x1dGlvbiwgZGVzY3IgfSlcbiAgaWYgKG1zZyAhPT0gJ3dpbicpIHNldFRpbWVvdXQoKCkgPT4gZHJhdy5zb2x1dGlvbihnYW1lKSwgKEdBTUUuc3BmICogUykgLyA0KVxuXG4gIGlmIChtc2cgPT09ICd3aW4nKSB7XG4gICAgY29uc3QgcmVjb3JkID0ge1xuICAgICAgbmFtZTogZ2FtZS5wdXp6bGVOYW1lLFxuICAgICAgbW9kZTogZ2FtZS5jdXJyZW50Lm1vZGUsXG4gICAgICB0aW1lLFxuICAgICAgdHVybnM6IGdhbWUuY3VycmVudC50dXJucyxcbiAgICAgIHNvbHV0aW9uOiBnYW1lLmN1cnJlbnQuc29sdXRpb24sXG4gICAgICBzY29yZTogZ2FtZS5jdXJyZW50LnNvbHV0aW9uID8gMCA6IHRpbWVTY29yZSArIHR1cm5zU2NvcmUsXG4gICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxuICAgIH1cbiAgICBjb25zdCBhcnIgPSBzdG9yZS5nZXQoJ3JlY29yZHMnKVxuICAgIGxldCBuZXdSZWNvcmQgPSB0cnVlXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGFycltpXS5uYW1lID09PSBnYW1lLnB1enpsZU5hbWUpIHtcbiAgICAgICAgICBzdG9yZS5zZXQoYHJlY29yZHMuJHtpfWAsIHJlY29yZClcbiAgICAgICAgICBuZXdSZWNvcmQgPSBmYWxzZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5ld1JlY29yZCkgc3RvcmUuYWRkKCdyZWNvcmRzJywgcmVjb3JkKVxuICB9XG5cbiAgc3RvcmUuc2V0KCdsYXN0LmdhbWUnLCBudWxsKVxufVxuXG5jb25zdCBwcm9ncmVzc0NoZWNrID0gKCkgPT4ge1xuICBpZiAoZ2FtZS5zdGF0dXMgIT09ICdnYW1lJykgcmV0dXJuXG4gIGdhbWUuc3RhdHMudHVybnMudGV4dENvbnRlbnQgPSBgJHtnYW1lLmN1cnJlbnQudHVybnN9LyR7Z2FtZS50dXJuc01heH1gXG5cbiAgaWYgKGdhbWUuY3VycmVudC50dXJucyA9PT0gfn4oZ2FtZS50dXJuc01heCAvIDIpKSBtZXNzYWdlKCdzaHJpa2UnLCAnYXR0ZW10c0hhbGYnKVxuXG4gIGxldCBtYXRjaCA9IDBcbiAgbGV0IHBvaW50cyA9IDBcbiAgZm9yIChsZXQgeSA9IDA7IHkgPCBnYW1lLnJvd3M7IHkgKz0gMSkge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgZ2FtZS5yb3dzOyB4ICs9IDEpIHtcbiAgICAgIGlmIChnYW1lLnB1enpsZVt5XVt4XSA9PT0gMSkge1xuICAgICAgICBpZiAoZ2FtZS5hcnJbeV1beF0gPT09IDEpIHtcbiAgICAgICAgICBtYXRjaCArPSAxXG4gICAgICAgICAgcG9pbnRzICs9IDFcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGdhbWUuYXJyW3ldW3hdID09PSAxKSB7XG4gICAgICAgICAgbWF0Y2ggLT0gMVxuICAgICAgICAgIHBvaW50cyArPSAxXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbWF0Y2ggPSBNYXRoLm1heChtYXRjaCwgMClcbiAgLy8gY29uc29sZS5sb2cobWF0Y2gsIGdhbWUucG9pbnRzVG90YWwpXG4gIGdhbWUuc3RhdHMucHJvZ3Jlc3Muc3R5bGUud2lkdGggPSBgJHt+fihNYXRoLm1pbihwb2ludHMgLyBnYW1lLnBvaW50c1RvdGFsLCAxKSAqIDEwMCl9JWBcblxuICBpZiAoZ2FtZS5jdXJyZW50LnR1cm5zID4gZ2FtZS50dXJuc01heCkgZ2FtZUVuZCgnbG9vc2UnLCAndHVybnNPdXQnKVxuICBlbHNlIGlmIChtYXRjaCA9PT0gZ2FtZS5wb2ludHNUb3RhbCkgZ2FtZUVuZCgnd2luJylcbiAgZWxzZSBjdXJyZW50R2FtZVVwZGF0ZSgpXG59XG5cbmNvbnN0IHRpbWVyVXBkYXRlID0gKCkgPT4ge1xuICBpZiAoZ2FtZS50aW1lKSB7XG4gICAgY29uc3QgdGltZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHNfX3RpbWVyJylcbiAgICBjb25zdCB0aW1lID0gfn4oKG5ldyBEYXRlKCkgLSBnYW1lLnRpbWUpIC8gMTAwMClcbiAgICBjb25zdCBkZWx0YSA9IGdhbWUucG9pbnRzVG90YWwgKiAxMCAtIHRpbWVcbiAgICB0aW1lci50ZXh0Q29udGVudCA9IGZvcm1hdFRpbWUoZGVsdGEpXG5cbiAgICBpZiAodGltZSA+PSBnYW1lLnBvaW50c1RvdGFsICogMTApIGdhbWVFbmQoJ2xvb3NlJywgJ3RpbWVPdXQnKVxuICB9XG59XG5cbmNvbnN0IGN1cnJlbnRHYW1lVXBkYXRlID0gKCkgPT4ge1xuICBzdG9yZS5zZXQoJ2xhc3QuZ2FtZScsIHtcbiAgICAuLi5nYW1lLmN1cnJlbnQsXG4gICAgdGltZTogfn4oKG5ldyBEYXRlKCkgLSBnYW1lLnRpbWUpIC8gMTAwMCksXG4gICAgYXJyOiBwdXp6bGVzLnN0cmluZ2lmeShnYW1lLmFyciksXG4gIH0pXG59XG5cbmNvbnN0IGN1cnJlbnRFZGl0b3JVcGRhdGUgPSAoKSA9PiB7XG4gIHN0b3JlLnNldCgnbGFzdC5lZGl0b3InLCB7XG4gICAgbW9kZTogZ2FtZS5jdXJyZW50Lm1vZGUsXG4gICAgYXJyOiBwdXp6bGVzLnN0cmluZ2lmeShnYW1lLmFyciksXG4gIH0pXG59XG5cbmNvbnN0IGNlbGxFdmVudCA9ICgpID0+IHtcbiAgaWYgKGdhbWUuc3RhdHVzID09PSAnZW5kJykgcmV0dXJuXG4gIGNvbnN0IHggPSBnYW1lLmMueFxuICBjb25zdCB5ID0gZ2FtZS5jLnlcbiAgaWYgKHggIT09IC0xICYmIHkgIT09IC0xKSB7XG4gICAgaWYgKCFnYW1lLnRpbWUpIGdhbWUudGltZSA9IG5ldyBEYXRlKClcbiAgICBjb25zdCBwb2ludCA9IGdhbWUuYXJyW3ldW3hdXG4gICAgY29uc3Qgc3QgPSBnYW1lLnN0YXJ0XG4gICAgY29uc3QgcnggPSBzdCArIHggKiBTXG4gICAgY29uc3QgcnkgPSBzdCArIHkgKiBTXG4gICAgaWYgKGdhbWUuYy5kb3duID09PSAwKSB7XG4gICAgICBnYW1lLmFyclt5XVt4XSA9IHBvaW50ID09PSAxID8gMCA6IDFcbiAgICAgIGlmIChwb2ludCA9PT0gMikgZHJhdy5ibG9jayhnYW1lLCByeCwgcnksIDApXG4gICAgICBlbHNlIGRyYXcuYmxvY2soZ2FtZSwgcngsIHJ5LCBwb2ludClcblxuICAgICAgaWYgKGdhbWUuYXJyW3ldW3hdID09PSAxKSBzb3VuZC51c2UoJ2RvdCcpXG4gICAgICBnYW1lLmN1cnJlbnQudHVybnMgKz0gMVxuICAgICAgaWYgKGdhbWUuc3RhdHVzID09PSAnZ2FtZScpIHByb2dyZXNzQ2hlY2soKVxuICAgICAgaWYgKGdhbWUuc3RhdHVzID09PSAnZWRpdG9yJykgY3VycmVudEVkaXRvclVwZGF0ZSgpXG4gICAgfVxuXG4gICAgaWYgKGdhbWUuYy5kb3duID09PSAyKSB7XG4gICAgICBnYW1lLmFyclt5XVt4XSA9IHBvaW50ID09PSAyID8gMCA6IDJcbiAgICAgIGRyYXcuY3Jvc3MoZ2FtZSwgcngsIHJ5LCBwb2ludClcbiAgICAgIGlmIChnYW1lLmFyclt5XVt4XSA9PT0gMikgc291bmQudXNlKCdjcm9zcycpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG1vdXNlTW92ZSA9IGV2ZW50ID0+IHtcbiAgY29uc3QgeCA9IE1hdGguZmxvb3IoKGV2ZW50Lm9mZnNldFggLyBnYW1lLmZpZWxkLmsgLSBnYW1lLnN0YXJ0KSAvIFMpXG4gIGNvbnN0IHkgPSBNYXRoLmZsb29yKChldmVudC5vZmZzZXRZIC8gZ2FtZS5maWVsZC5rIC0gZ2FtZS5zdGFydCkgLyBTKVxuICBpZiAoeCA+PSAwICYmIHkgPj0gMCAmJiB4IDwgZ2FtZS5yb3dzICYmIHkgPCBnYW1lLnJvd3MpIHtcbiAgICBpZiAoeCAhPT0gZ2FtZS5jLnggfHwgeSAhPT0gZ2FtZS5jLnkpIHtcbiAgICAgIGdhbWUuYy54ID0geFxuICAgICAgZ2FtZS5jLnkgPSB5XG4gICAgICBkcmF3LnBvaW50ZXIoZ2FtZSwgeCwgeSlcbiAgICAgIGdhbWUuc3RhdHMucG9zLnRleHRDb250ZW50ID0gYCR7eCArIDF9OiR7eSArIDF9YFxuICAgICAgaWYgKGdhbWUuYy5kb3duICE9IC0xKSBjZWxsRXZlbnQoKVxuICAgICAgZWxzZSBzb3VuZC51c2UoJ3N0ZXAnKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoZ2FtZS5jLnggIT09IC0xIHx8IGdhbWUuYy55ICE9PSAtMSkge1xuICAgICAgZHJhdy5wb2ludGVyKGdhbWUsIC0xLCAtMSlcbiAgICAgIGdhbWUuc3RhdHMucG9zLnRleHRDb250ZW50ID0gJzA6MCdcbiAgICB9XG4gICAgZ2FtZS5jLnggPSAtMVxuICAgIGdhbWUuYy55ID0gLTFcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgY29uc3QgdGlsdGVkID0gIXdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3MjBweCknKS5tYXRjaGVzXG4gIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUnKVxuICBmaWVsZC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpXG4gIGNvbnN0IHVuZmxpcCA9ICgpID0+IHtcbiAgICBnYW1lLmFyciA9IHB1enpsZXMuYmxhbmsoZ2FtZS5tb2RlKVxuICAgIGRyYXcuZmllbGQoZ2FtZSlcbiAgICBpZiAoZ2FtZS5zdGF0dXMgPT09ICdnYW1lJyB8fCBnYW1lLnN0YXR1cyA9PT0gJ2VuZCcpIGRyYXcubnVtYmVycyhnYW1lKVxuICAgIGZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsaXAwJylcbiAgICBmaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpXG4gIH1cbiAgY29uc3QgZmxpcDEgPSAoKSA9PiB7XG4gICAgZmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnZmxpcDEnKVxuICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoJ2ZsaXAyJylcbiAgICBzZXRUaW1lb3V0KGZsaXAyLCAzMDApXG4gIH1cbiAgY29uc3QgZmxpcDIgPSAoKSA9PiB7XG4gICAgZ2FtZS5hcnIgPSBwdXp6bGVzLmJsYW5rKGdhbWUubW9kZSlcbiAgICBkcmF3LmZpZWxkKGdhbWUpXG4gICAgaWYgKGdhbWUuc3RhdHVzID09PSAnZ2FtZScgfHwgZ2FtZS5zdGF0dXMgPT09ICdlbmQnKSBkcmF3Lm51bWJlcnMoZ2FtZSlcbiAgICBmaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdmbGlwMicpXG4gICAgZmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKVxuICB9XG4gIGlmICh0aWx0ZWQpIHtcbiAgICBmaWVsZC5jbGFzc0xpc3QuYWRkKCdmbGlwMScpXG4gICAgc2V0VGltZW91dChmbGlwMSwgMzAwKVxuICB9IGVsc2Uge1xuICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoJ2ZsaXAwJylcbiAgICBzZXRUaW1lb3V0KHVuZmxpcCwgMzAwKVxuICB9XG4gIHNvdW5kLnVzZSgnd2hvb3NoJylcblxuICBnYW1lLmN1cnJlbnQudHVybnMgPSAwXG4gIGdhbWUuc3RhdHMudHVybnMudGV4dENvbnRlbnQgPSBgJHtnYW1lLmN1cnJlbnQudHVybnN9LyR7Z2FtZS50dXJuc01heH1gXG4gIGlmIChnYW1lLnN0YXR1cyA9PT0gJ2dhbWUnKSBjdXJyZW50R2FtZVVwZGF0ZSgpXG4gIGlmIChnYW1lLnN0YXR1cyA9PT0gJ2VkaXRvcicpIHN0b3JlLnNldCgnbGFzdC5lZGl0b3InLCBudWxsKVxufVxuXG5jb25zdCByZXNpemVIYW5kbGVyID0gKCkgPT4ge1xuICBjb25zdCBzaXplID0gfn5nYW1lLmZpZWxkLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXG4gIGlmIChzaXplICE9PSBnYW1lLmZpZWxkLnNpemUpIHtcbiAgICAvLyBjb25zb2xlLmxvZygncmVzaXplOicsIHNpemUpXG4gICAgZ2FtZS5maWVsZC5zaXplID0gc2l6ZVxuICAgIGdhbWUuZmllbGQuayA9IHNpemUgPj0gNzIzID8gMSA6IHNpemUgLyBHQU1FLnNpemVcbiAgfVxufVxuXG5jb25zdCBlZGl0b3JTYXZlID0gZXZlbnQgPT4ge1xuICBpZiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3Qgc3VtbSA9IGdhbWUuYXJyLmZsYXQoKS5yZWR1Y2UoKGFjYywgdikgPT4gKGFjYyArPSB2KSwgMClcbiAgICBpZiAoc3VtbSA9PT0gMCkge1xuICAgICAgbWVzc2FnZSgnYnVsbGRvZycsICdibGFuay1maWxlZCcpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldClcbiAgICBjb25zdCBuYW1lID0gZm9ybS5nZXQoJ25hbWUnKVxuICAgIGlmIChuYW1lLmxlbmd0aCA8IDMgfHwgbmFtZS5sZW5ndGggPiAxOCkge1xuICAgICAgbWVzc2FnZSgnc2hyaWtlJywgJ2FkZXF1YXRlTmFtZScpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBsaXN0ID0gcHV6emxlcy5saXN0KGdhbWUuY3VycmVudC5tb2RlKVxuICAgIGlmIChsaXN0LmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICBtZXNzYWdlKCdzaHJpa2UnLCAnZHVwbGljYXRlTmFtZScpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkYXRhU3RyaW5nID0gcHV6emxlcy5zdHJpbmdpZnkoZ2FtZS5hcnIpXG4gICAgY29uc29sZS5sb2coZGF0YVN0cmluZylcbiAgICBjb25zdCByZXMgPSBwdXp6bGVzLmFkZChuYW1lLCBnYW1lLmFycilcbiAgICBjb25zdCBtc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdG9yX19zYXZlX21lc3NhZ2UnKVxuICAgIG1zZy50ZXh0Q29udGVudCA9IHJlc1xuICAgIG1zZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgIG1zZy5zdHlsZS5hbmltYXRpb24gPSAnbm9uZSdcbiAgICBtc2cub2Zmc2V0SGVpZ2h0IC8qIHRyaWdnZXIgcmVmbG93ICovXG4gICAgbXNnLnN0eWxlLmFuaW1hdGlvbiA9IG51bGxcbiAgICBpZiAoIShyZXMgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgIHVwZGF0ZVB1enpsZUxpc3QoKVxuICAgICAgc3RvcmUuYWRkKCdwdXp6bGVzJywgeyBuYW1lLCBwdXp6bGU6IGRhdGFTdHJpbmcgfSlcbiAgICAgIHN0b3JlLnNldCgnbGFzdC5lZGl0b3InLCBudWxsKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCByZWdpc3RlckV2ZW50cyA9ICgpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUhhbmRsZXIpXG4gIHJlc2l6ZUhhbmRsZXIoKVxuXG4gIGNvbnN0IHN0YXRlID0gbmV3IFN0YXRlKClcbiAgc3RhdGUuaG92ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlKVxuICBzdGF0ZS5ob3Zlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGdhbWUuYy5kb3duID0gZXZlbnQuYnV0dG9uXG4gICAgY2VsbEV2ZW50KClcbiAgfSlcbiAgc3RhdGUuaG92ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGV2ZW50ID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZ2FtZS5jLmRvd24gPSAtMVxuICB9KVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSlcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRvcl9fc2F2ZV9mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZWRpdG9yU2F2ZSlcblxuICBjb25zdCB0aGVtZSA9IG5ldyBUaGVtZSgpXG4gIGNvbnN0IHRoZW1lVXBkYXRlSGFuZGxlciA9ICgpID0+IHtcbiAgICBwcmVwYXJlQ29sb3JzKClcbiAgICBkcmF3LmZpZWxkKGdhbWUpXG4gICAgZHJhdy5maWVsZEZpbGwoZ2FtZSlcbiAgICBpZiAoZ2FtZS5zdGF0dXMgPT09ICdnYW1lJyB8fCBnYW1lLnN0YXR1cyA9PT0gJ2VuZCcpIGRyYXcubnVtYmVycyhnYW1lKVxuICB9XG4gIHRoZW1lLmFkZENhbGxiYWNrKHRoZW1lVXBkYXRlSGFuZGxlcilcblxuICBjb25zdCByZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX19yZXNldCcpXG4gIHJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUmVzZXQpXG4gIHJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiAobW91c2VPdmVyRWwgPSBudWxsKSlcbiAgcmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGV2ZW50ID0+IHtcbiAgICBtb3VzZU92ZXJFbCA9IGV2ZW50LnRhcmdldFxuICAgIGNvbnN0IG5hbWUgPSBldmVudC50YXJnZXQuY2xhc3NMaXN0WzBdXG4gICAgaWYgKHRpbWVyW25hbWVdKSBjbGVhclRpbWVvdXQodGltZXJbbmFtZV0pXG4gICAgdGltZXJbbmFtZV0gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChtb3VzZU92ZXJFbCA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHN1bW0gPSBnYW1lLmFyci5mbGF0KCkucmVkdWNlKChhY2MsIHYpID0+IChhY2MgKz0gdiksIDApXG4gICAgICAgIGNvbnN0IHRleHQgPSBzdW1tID4gMCA/ICdyZXNldCcgOiAnYmxhbmstZmlsZWQnXG4gICAgICAgIG1lc3NhZ2UoJ3NocmlrZScsIG1lc3NhZ2UoJ2J1bGxkb2cnLCB0ZXh0KSwgNDAwMClcbiAgICAgIH1cbiAgICB9LCAyNTApXG4gIH0pXG5cbiAgY29uc3Qgc29sdXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9fc29sdXRpb24nKVxuICBzb2x1dGlvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4gKG1vdXNlT3ZlckVsID0gbnVsbCkpXG4gIHNvbHV0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBldmVudCA9PiB7XG4gICAgbW91c2VPdmVyRWwgPSBldmVudC50YXJnZXRcbiAgICBjb25zdCBuYW1lID0gZXZlbnQudGFyZ2V0LmNsYXNzTGlzdFswXVxuICAgIGlmICh0aW1lcltuYW1lXSkgY2xlYXJUaW1lb3V0KHRpbWVyW25hbWVdKVxuICAgIHRpbWVyW25hbWVdID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAobW91c2VPdmVyRWwgPT09IGV2ZW50LnRhcmdldCkgbWVzc2FnZSgnc2hyaWtlJywgJ3NvbHV0aW9uJywgNDAwMClcbiAgICB9LCAyNTApXG4gIH0pXG4gIHNvbHV0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGdhbWUuY3VycmVudC5zb2x1dGlvbiArPSAxXG4gICAgZHJhdy5zb2x1dGlvbihnYW1lKVxuICAgIHNvbHV0aW9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjODAwYidcbiAgICBjdXJyZW50R2FtZVVwZGF0ZSgpXG4gIH0pXG5cbiAgZ2FtZS5pbml0LmV2ZW50cyA9IHRydWVcbn1cblxuZXhwb3J0IGNvbnN0IGVkaXRvciA9IGxhc3QgPT4ge1xuICBjb25zb2xlLmxvZygnU3RhcnQgZWRpdG9yJylcbiAgc3RvcmUuc2V0KCdsYXN0LmdhbWUnLCBudWxsKVxuXG4gIGNvbnN0IHN0YXRlID0gbmV3IFN0YXRlKClcbiAgc3RhdGUuc2V0TW9kZVVwZGF0ZUNhbGxiYWNrKCgpID0+IHt9KVxuICBpZiAobGFzdCkgc3RhdGUubW9kZSA9IGxhc3QubW9kZSA/PyAyXG4gIGVsc2UgaWYgKCFnYW1lLmluaXQuZWRpdG9yKSBzdGF0ZS5tb2RlID0gMlxuICBnYW1lLmN1cnJlbnQubW9kZSA9IHN0YXRlLm1vZGVcblxuICBjbGVhckludGVydmFsKGdhbWUudGltZXIpXG4gIHByZXBhcmUoKVxuICBkcmF3LmZpZWxkKGdhbWUpXG4gIGlmICghZ2FtZS5pbml0LmV2ZW50cykgcmVnaXN0ZXJFdmVudHMoKVxuICBnYW1lLmluaXQuZWRpdG9yID0gdHJ1ZVxuICBnYW1lLnN0YXR1cyA9ICdlZGl0b3InXG4gIHN0YXRlLnNldE1vZGVVcGRhdGVDYWxsYmFjayhlZGl0b3IpXG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhc2UnKS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0b3JfX21vZGUnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdG9yX19zYXZlX2Zvcm0nKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9fc29sdXRpb24nKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9faGVhZGVyX3RleHQnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHNfX3Byb2dyZXNzJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRzX190dXJucycpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gIGNvbnN0IG1vZGVTZWxlY3RvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdG9yX19tb2RlX3NlbGVjdCcpXG4gIG1vZGVTZWxlY3RvcnNbc3RhdGUubW9kZV0uY2hlY2tlZCA9IHRydWVcblxuICBpZiAobGFzdCkge1xuICAgIGdhbWUuYXJyID0gcHV6emxlcy5wYXJzZShsYXN0LmFycilcbiAgICBkcmF3LmZpZWxkRmlsbChnYW1lKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0b3JfX3NhdmVfbmFtZS10ZXh0JykudmFsdWUgPSBsYXN0Lm5hbWUgPz8gJydcbiAgICAvLyBjb25zb2xlLmxvZyhsYXN0KVxuICB9XG5cbiAgbWVzc2FnZShNYXRoLnJhbmRvbSgpID4gMC41ID8gJ2J1bGxkb2cnIDogJ3NocmlrZScsICdlZGl0b3JOZXcnKVxufVxuXG5leHBvcnQgY29uc3Qgc3RhcnQgPSAobW9kZSwgcHV6emxlLCBsYXN0KSA9PiB7XG4gIGlmIChtb2RlID09PSB1bmRlZmluZWQpIG1vZGUgPSB+fihNYXRoLnJhbmRvbSgpICogMylcbiAgaWYgKHB1enpsZSA9PT0gdW5kZWZpbmVkKSBwdXp6bGUgPSB+fihNYXRoLnJhbmRvbSgpICogcHV6emxlcy5saXN0KG1vZGUpLmxlbmd0aClcbiAgY29uc29sZS5sb2coYFN0YXJ0IGdhbWU6ICR7bW9kZX0tJHtwdXp6bGV9JHshIWxhc3QgPyAnIChyZWNvdmVyZWQpJyA6ICcnfWApXG4gIHN0b3JlLnNldCgnbGFzdC5lZGl0b3InLCBudWxsKVxuXG4gIGNvbnN0IHN0YXRlID0gbmV3IFN0YXRlKClcbiAgc3RhdGUuc2V0TW9kZVVwZGF0ZUNhbGxiYWNrKClcbiAgc3RhdGUubW9kZSA9IG1vZGVcbiAgcHJlcGFyZSgpXG4gIGNvbnN0IHsgbmFtZSwgZGF0YSB9ID0gcHV6emxlcy5nZXQobW9kZSwgcHV6emxlKVxuICBnYW1lLnB1enpsZSA9IGRhdGFcbiAgZ2FtZS5wdXp6bGVOYW1lID0gbmFtZVxuICBnYW1lLmN1cnJlbnQgPSB7IG1vZGUsIHB1enpsZSwgc29sdXRpb246IDAsIHR1cm5zOiAwIH1cblxuICBjb25zdCBzdW1tID0gZGF0YS5mbGF0KCkucmVkdWNlKChhY2MsIHYpID0+IChhY2MgKz0gdiksIDApXG4gIGdhbWUucG9pbnRzVG90YWwgPSBzdW1tXG4gIGdhbWUudHVybnNNYXggPSBzdW1tICogM1xuICBnYW1lLnN0YXRzLnR1cm5zLnRleHRDb250ZW50ID0gYCR7Z2FtZS5jdXJyZW50LnR1cm5zfS8ke2dhbWUudHVybnNNYXh9YFxuXG4gIGlmICghZ2FtZS5pbml0LmV2ZW50cykgcmVnaXN0ZXJFdmVudHMoKVxuICBnYW1lLnN0YXR1cyA9ICdnYW1lJ1xuICBnYW1lLmluaXQuc3RhcnQgPSB0cnVlXG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhc2UnKS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0b3JfX21vZGUnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdG9yX19zYXZlX2Zvcm0nKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9fc29sdXRpb24nKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHNfX3Byb2dyZXNzJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRzX190dXJucycpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9faGVhZGVyX3RleHQnKVxuICBoZWFkZXJUZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gIGhlYWRlclRleHQudGV4dENvbnRlbnQgPSBuYW1lXG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRzX190aW1lcicpLnRleHRDb250ZW50ID0gJzAwOjAwJ1xuICBnYW1lLnRpbWUgPSAwXG4gIGNsZWFySW50ZXJ2YWwoZ2FtZS50aW1lcilcbiAgZ2FtZS50aW1lciA9IHNldEludGVydmFsKHRpbWVyVXBkYXRlLCAxMDAwKVxuXG4gIGRyYXcuZmllbGQoZ2FtZSlcbiAgZHJhdy5udW1iZXJzKGdhbWUpXG4gIGlmIChsYXN0ICYmIGxhc3QudGltZSArIDEwIDwgZ2FtZS5wb2ludHNUb3RhbCAqIDEwKSB7XG4gICAgZ2FtZS5hcnIgPSBwdXp6bGVzLnBhcnNlKGxhc3QuYXJyKVxuICAgIGdhbWUuY3VycmVudC5zb2x1dGlvbiA9IGxhc3Quc29sdXRpb25cbiAgICBnYW1lLmN1cnJlbnQudHVybnMgPSBsYXN0LnR1cm5zXG4gICAgZ2FtZS50aW1lID0gbmV3IERhdGUoKSAtIGxhc3QudGltZSAqIDEwMDBcbiAgICBpZiAobGFzdC5zb2x1dGlvbikgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVfX3NvbHV0aW9uJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4MDBiJ1xuICAgIGRyYXcuZmllbGRGaWxsKGdhbWUpXG4gIH1cblxuICBtZXNzYWdlKE1hdGgucmFuZG9tKCkgPiAwLjUgPyAnYnVsbGRvZycgOiAnc2hyaWtlJywgbGFzdCA/ICdsYXN0R2FtZVJlY292ZXJlZCcgOiAnZ2FtZU5ldycpXG59XG4iLCJpbXBvcnQgeyBzdGFydCwgZWRpdG9yIH0gZnJvbSAnLi9nYW1lJ1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLi91dGlscy9zdGF0ZSdcbmltcG9ydCB7IFB1enpsZXMgfSBmcm9tICcuLi91dGlscy9iYXNlJ1xuaW1wb3J0IHsgR0FNRSB9IGZyb20gJy4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJy4uL3V0aWxzL21lc3NhZ2UnXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJy4uL3V0aWxzL3N0b3JlJ1xuaW1wb3J0IHsgU291bmQgfSBmcm9tICcuLi91dGlscy9zb3VuZCdcbmltcG9ydCB7IHVwZGF0ZUdhbWVSZWNvcmRzIH0gZnJvbSAnLi9yZWNvcmRzJ1xuaW1wb3J0IExvYyBmcm9tICcuLi9kYXRhL2xvYy5qc29uJyBhc3NlcnQgeyB0eXBlOiAnanNvbicgfVxuXG5jb25zdCBzdG9yZSA9IG5ldyBTdG9yZSgpXG5jb25zdCBzb3VuZCA9IG5ldyBTb3VuZCgpXG5jb25zdCBwdXp6bGVzID0gbmV3IFB1enpsZXMoKVxubGV0IHNlbGVjdGVkTW9kZSA9IDBcbmxldCBzZWxlY3RlZFB1enpsZSA9IDBcblxuY29uc3Qgc3RhcnROZXdHYW1lID0gKCkgPT4ge1xuICBzb3VuZC51c2UoJ3NsaWRlJylcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2dhbWUnKVxuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2dhbWVfYnRuJykuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX3B1enpsZV9zZWxlY3QnKS52YWx1ZSA9ICcnXG4gIHVwZGF0ZVB1enpsZUxpc3QoKVxufVxuXG5jb25zdCBoYW5kbGVTdGFydENsaWNrID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2dhbWUnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICBzdGFydChzZWxlY3RlZE1vZGUsIHNlbGVjdGVkUHV6emxlKVxufVxuXG5jb25zdCBzdGFydFJhbmRvbUdhbWUgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fZ2FtZScpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gIHN0YXJ0KClcbn1cblxuY29uc3Qgb3BlbkVkaXRvciA9ICgpID0+IHtcbiAgY29uc3Qgc3RhdGUgPSBuZXcgU3RhdGUoKVxuICBpZiAoc3RhdGUuc3RhdHVzID09PSAnZWRpdG9yJykge1xuICAgIG1lc3NhZ2UoJ2J1bGxkb2cnLCAndW5rbm93bicpXG4gICAgcmV0dXJuXG4gIH1cbiAgc3RhdGUubW9kZSA9IDJcbiAgZWRpdG9yKClcbn1cblxuY29uc3Qgc2hvd1JlY29yZHMgPSAoKSA9PiB7XG4gIHNvdW5kLnVzZSgnc2xpZGUnKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX3JlY29yZHMnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICB1cGRhdGVHYW1lUmVjb3JkcygpXG59XG5cbmNvbnN0IHNob3dBYm91dCA9ICgpID0+IHtcbiAgc291bmQudXNlKCdzbGlkZScpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fYWJvdXQnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlUHV6emxlTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgbGlzdCA9IHB1enpsZXMubGlzdChzZWxlY3RlZE1vZGUpXG4gIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fcHV6emxlX3NlbGVjdCcpXG4gIGNvbnN0IHJlY29yZHMgPSBzdG9yZS5nZXQoJ3JlY29yZHMnKVxuICBzZWxlY3QuaW5uZXJIVE1MID0gJydcbiAgbGlzdC5mb3JFYWNoKCh0ZXh0LCBpKSA9PiB7XG4gICAgbGV0IHBhc3NlZCA9IHJlY29yZHMuc29tZShyZWNvcmQgPT4gcmVjb3JkLm1vZGUgPT09IHNlbGVjdGVkTW9kZSAmJiByZWNvcmQuc2NvcmUgPiAwICYmIHJlY29yZC5uYW1lID09PSB0ZXh0KVxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICBlbC52YWx1ZSA9IGlcbiAgICBlbC50ZXh0Q29udGVudCA9IGAke2kgPCA5ID8gYFxcdTAwQTAke2kgKyAxfWAgOiBpICsgMX0uICR7dGV4dH0ke3Bhc3NlZCA/ICcgXFx1MjcxNCcgOiAnJ31gXG4gICAgc2VsZWN0LmFwcGVuZChlbClcbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHV6emxlU2VsZWN0b3IoKSB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbXBvbmVudC5jbGFzc05hbWUgPSAnbW9kYWxfX3B1enpsZSdcblxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICBsYWJlbC50ZXh0Q29udGVudCA9ICdTZWxlY3QgcHV6emxlJ1xuXG4gIGNvbnN0IHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB3cmFwLmNsYXNzTmFtZSA9ICdtb2RhbF9fc2Nyb2xsX3dyYXAnXG5cbiAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgc2VsZWN0LmNsYXNzTmFtZSA9ICdtb2RhbF9fcHV6emxlX3NlbGVjdCBzY3JvbGxlZCdcbiAgc2VsZWN0LnNpemUgPSAxMFxuICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQdXp6bGVDaGFuZ2UpXG5cbiAgd3JhcC5hcHBlbmQoc2VsZWN0KVxuICBjb21wb25lbnQuYXBwZW5kKGxhYmVsLCB3cmFwKVxuICByZXR1cm4gY29tcG9uZW50XG59XG5cbmNvbnN0IGhhbmRsZVB1enpsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19nYW1lX2J0bicpLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJylcbiAgc2VsZWN0ZWRQdXp6bGUgPSBOdW1iZXIoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSlcbn1cblxuY29uc3QgaGFuZGxlTW9kZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgY29uc3Qgc3RhdGUgPSBuZXcgU3RhdGUoKVxuICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpXG4gIHNlbGVjdGVkTW9kZSA9IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpXG4gIHVwZGF0ZVB1enpsZUxpc3QoKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2RlU2VsZWN0b3IoKSB7XG4gIGNvbnN0IG1vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBtb2RlLmNsYXNzTmFtZSA9ICdtb2RhbF9fbW9kZSBtb2RlJ1xuICBHQU1FLm1vZGVzLmZvckVhY2goKG5hbWUsIGkpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5jbGFzc05hbWUgPSAnbW9kYWxfX21vZGVfc2VsZWN0IG1vZGUtc2VsZWN0J1xuICAgIGlucHV0LnR5cGUgPSAncmFkaW8nXG4gICAgaW5wdXQudmFsdWUgPSBpXG4gICAgaW5wdXQubmFtZSA9ICdtX21vZGUnXG4gICAgaW5wdXQuaWQgPSBgbV9tb2RlJHtpfWBcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVNb2RlQ2hhbmdlKVxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbmFtZVxuICAgIGxhYmVsLmh0bWxGb3IgPSBgbV9tb2RlJHtpfWBcbiAgICBtb2RlLmFwcGVuZChpbnB1dCwgbGFiZWwpXG4gIH0pXG4gIHJldHVybiBtb2RlXG59XG5cbmNvbnN0IGhhbmRsZU1vZGFsQ2xpY2sgPSBldmVudCA9PiB7XG4gIGlmIChldmVudC50YXJnZXQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlTW9kYWxHYW1lID0gKCkgPT4ge1xuICBjb25zdCBzdGF0ZSA9IG5ldyBTdGF0ZSgpXG4gIGNvbnN0IGxhbmcgPSBzdGF0ZS5sYW5nXG5cbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBtb2RhbC5jbGFzc05hbWUgPSAnbW9kYWxfX2dhbWUgaGlkZGVuJ1xuICBjb25zdCBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGlubmVyLmNsYXNzTmFtZSA9ICdtb2RhbF9faW5uZXInXG4gIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBsZWZ0LmNsYXNzTmFtZSA9ICdtb2RhbF9fbGVmdCdcbiAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICByaWdodC5jbGFzc05hbWUgPSAnbW9kYWxfX3JpZ2h0J1xuXG4gIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY2xvc2UuY2xhc3NOYW1lID0gJ21vZGFsX19jbG9zZSdcbiAgY29uc3QgY2xvc2VJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjbG9zZS5hcHBlbmQoY2xvc2VJbWcpXG4gIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJykpXG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gIHRpdGxlLmNsYXNzTmFtZSA9ICdtb2RhbF9fdGl0bGUnXG4gIHRpdGxlLnRleHRDb250ZW50ID0gTG9jW2xhbmddLnN0YXJ0TmV3R2FtZVxuXG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBidXR0b25zLmNsYXNzTmFtZSA9ICdtb2RhbF9fYnV0dG9ucydcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYnRuLmNsYXNzTmFtZSA9ICdtb2RhbF9fZ2FtZV9idG4gYnV0dG9uJ1xuICBidG4udGV4dENvbnRlbnQgPSBMb2NbbGFuZ10uc3RhcnRcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlU3RhcnRDbGljaylcbiAgY29uc3Qgcm5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgcm5kLmNsYXNzTmFtZSA9ICdidXR0b24nXG4gIHJuZC50ZXh0Q29udGVudCA9IExvY1tsYW5nXS5yYW5kb21HYW1lXG4gIHJuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0UmFuZG9tR2FtZSlcbiAgYnV0dG9ucy5hcHBlbmQoYnRuLCBybmQpXG5cbiAgaW5uZXIuYXBwZW5kKGNsb3NlLCB0aXRsZSwgY3JlYXRlTW9kZVNlbGVjdG9yKCksIGNyZWF0ZVB1enpsZVNlbGVjdG9yKCksIGJ1dHRvbnMsIGxlZnQsIHJpZ2h0KVxuICBtb2RhbC5hcHBlbmQoaW5uZXIpXG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTW9kYWxDbGljaylcbiAgcmV0dXJuIG1vZGFsXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVNb2RhbFJlc3VsdHMgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXRlID0gbmV3IFN0YXRlKClcbiAgY29uc3QgbGFuZyA9IHN0YXRlLmxhbmdcblxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIG1vZGFsLmNsYXNzTmFtZSA9ICdtb2RhbF9fcmVzbHQgaGlkZGVuJ1xuICBjb25zdCBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGlubmVyLmNsYXNzTmFtZSA9ICdtb2RhbF9faW5uZXInXG4gIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBsZWZ0LmNsYXNzTmFtZSA9ICdtb2RhbF9fbGVmdCdcbiAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICByaWdodC5jbGFzc05hbWUgPSAnbW9kYWxfX3JpZ2h0J1xuXG4gIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY2xvc2UuY2xhc3NOYW1lID0gJ21vZGFsX19jbG9zZSdcbiAgY29uc3QgY2xvc2VJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjbG9zZS5hcHBlbmQoY2xvc2VJbWcpXG4gIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJykpXG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gIHRpdGxlLmNsYXNzTmFtZSA9ICdtb2RhbF9fdGl0bGUnXG4gIHRpdGxlLnRleHRDb250ZW50ID0gTG9jW2xhbmddLndpblxuXG4gIGNvbnN0IGRlc2NyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIGRlc2NyLmNsYXNzTmFtZSA9ICdtb2RhbF9fcmVzbHRfZGVzY3InXG5cbiAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgcDEuY2xhc3NOYW1lID0gJ21vZGFsX19yZXNsdF9kZXNjcidcbiAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICB0aW1lLmNsYXNzTmFtZSA9ICdtb2RhbF9fdGltZSdcbiAgdGltZS50ZXh0Q29udGVudCA9ICcwMDowMCdcbiAgcDEuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke0xvY1tsYW5nXS50aW1lVXNlZH06YCksIHRpbWUpXG5cbiAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgcDIuY2xhc3NOYW1lID0gJ21vZGFsX19yZXNsdF9kZXNjcidcbiAgY29uc3QgdHVybnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgdHVybnMuY2xhc3NOYW1lID0gJ21vZGFsX190dXJucydcbiAgdHVybnMudGV4dENvbnRlbnQgPSAnMCdcbiAgcDIuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke0xvY1tsYW5nXS50dXJuc1VzZWR9OmApLCB0dXJucylcblxuICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBwMy5jbGFzc05hbWUgPSAnbW9kYWxfX3Jlc2x0X2Rlc2NyJ1xuICBjb25zdCBzY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICBzY29yZS5jbGFzc05hbWUgPSAnbW9kYWxfX3Njb3JlJ1xuICBzY29yZS50ZXh0Q29udGVudCA9ICcwJ1xuICBwMy5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7TG9jW2xhbmddLnNjb3JlfTpgKSwgc2NvcmUpXG4gIGNvbnN0IHNvbHV0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgc29sdXRpb24uY2xhc3NOYW1lID0gJ21vZGFsX19zb2x1dGlvbidcbiAgc29sdXRpb24udGV4dENvbnRlbnQgPSBgKCR7TG9jW2xhbmddLnNvbHV0aW9uVXNlZH0pYFxuXG4gIGNvbnN0IHNocmlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHNocmlrZS5jbGFzc05hbWUgPSAnbW9kYWxfX3Jlc2x0X3NocmlrZSdcblxuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBidG4uY2xhc3NOYW1lID0gJ2J1dHRvbidcbiAgYnRuLnRleHRDb250ZW50ID0gJ09LJ1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKSlcblxuICBpbm5lci5hcHBlbmQoY2xvc2UsIHRpdGxlLCBkZXNjciwgcDEsIHAyLCBwMywgc29sdXRpb24sIHNocmlrZSwgYnRuLCBsZWZ0LCByaWdodClcbiAgbW9kYWwucmVzbHQgPSB7IHRpdGxlLCBkZXNjciwgdGltZSwgdHVybnMsIHNjb3JlLCBzaHJpa2UsIHNvbHV0aW9uIH1cbiAgbW9kYWwuYXBwZW5kKGlubmVyKVxuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU1vZGFsQ2xpY2spXG4gIHJldHVybiBtb2RhbFxufVxuXG5leHBvcnQgY29uc3QgaW5pdE1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXRlID0gbmV3IFN0YXRlKClcbiAgY29uc3QgbGFuZyA9IHN0YXRlLmxhbmdcblxuICBjb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudV9faXRlbScpXG4gIG1lbnVJdGVtc1swXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0TmV3R2FtZSlcbiAgbWVudUl0ZW1zWzBdLnRleHRDb250ZW50ID0gTG9jW2xhbmddLm5ld0dhbWVcbiAgbWVudUl0ZW1zWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkVkaXRvcilcbiAgbWVudUl0ZW1zWzFdLnRleHRDb250ZW50ID0gTG9jW2xhbmddLmVkaXRvclxuICBtZW51SXRlbXNbMl0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93UmVjb3JkcylcbiAgbWVudUl0ZW1zWzJdLnRleHRDb250ZW50ID0gTG9jW2xhbmddLnJlY29yZHNcbiAgbWVudUl0ZW1zWzNdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0Fib3V0KVxuICBtZW51SXRlbXNbM10udGV4dENvbnRlbnQgPSBMb2NbbGFuZ10uYWJvdXRcblxuICBzZWxlY3RlZE1vZGUgPSBzdGF0ZS5tb2RlXG5cbiAgY29uc3QgbW9kZVNlbGVjdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9fbW9kZV9zZWxlY3QnKVxuICBtb2RlU2VsZWN0b3JzW3NlbGVjdGVkTW9kZV0uY2hlY2tlZCA9IHRydWVcbn1cbiIsImltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vdXRpbHMvc3RhdGUnXG5pbXBvcnQgeyBHQU1FIH0gZnJvbSAnLi9jb25zdGFudHMnXG5cbmNvbnN0IHN0YXRlID0gbmV3IFN0YXRlKClcblxuZnVuY3Rpb24gaGFuZGxlTW9kZUNoYW5nZSgpIHtcbiAgLy8gY29uc29sZS5sb2coJ01vZGU6Jyx0aGlzLnZhbHVlKVxuICBzdGF0ZS5tb2RlID0gdGhpcy52YWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9kZVNlbGVjdG9yKCkge1xuICBjb25zdCBtb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbW9kZS5jbGFzc05hbWUgPSAnZWRpdG9yX19tb2RlIG1vZGUgaGlkZGVuJ1xuICBHQU1FLm1vZGVzLmZvckVhY2goKG5hbWUsIGkpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5jbGFzc05hbWUgPSAnZWRpdG9yX19tb2RlX3NlbGVjdCBtb2RlLXNlbGVjdCdcbiAgICBpbnB1dC50eXBlID0gJ3JhZGlvJ1xuICAgIGlucHV0LnZhbHVlID0gaVxuICAgIGlucHV0Lm5hbWUgPSAnZV9tb2RlJ1xuICAgIGlucHV0LmlkID0gYGVfbW9kZSR7aX1gXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlTW9kZUNoYW5nZSlcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IG5hbWVcbiAgICBsYWJlbC5odG1sRm9yID0gYGVfbW9kZSR7aX1gXG4gICAgbW9kZS5hcHBlbmQoaW5wdXQsIGxhYmVsKVxuICB9KVxuICByZXR1cm4gbW9kZVxufVxuIiwiZnVuY3Rpb24gY2hlY2tMaW5rKHRleHQpIHtcbiAgY29uc3QgYXJyID0gW11cbiAgZnVuY3Rpb24gY2hlY2tlcihzdHIpIHtcbiAgICBjb25zdCBtYXRjaCA9IHN0ci5tYXRjaCgvXFxbKFtcXHdcXHNcXGRdKylcXF1cXCgoaHR0cHM/OlxcL1xcL1tcXHdcXGQuLz89I0BdKylcXCkvKVxuICAgIGlmIChtYXRjaCkge1xuICAgICAgY29uc3QgaWQgPSBtYXRjaFsxXVxuICAgICAgY29uc3QgdXJsID0gbWF0Y2hbMl1cbiAgICAgIGFyci5wdXNoKHsgdGV4dDogc3RyLnNsaWNlKDAsIG1hdGNoLmluZGV4KSwgaWQsIHVybCB9KVxuICAgICAgY2hlY2tlcihzdHIuc3Vic3RyaW5nKG1hdGNoLmluZGV4ICsgaWQubGVuZ3RoICsgdXJsLmxlbmd0aCArIDQpKVxuICAgIH0gZWxzZSBpZiAoYXJyLmxlbmd0aCkgYXJyLnB1c2goeyB0ZXh0OiBzdHIgfSlcbiAgfVxuICBjaGVja2VyKHRleHQpXG4gIHJldHVybiBhcnIubGVuZ3RoID8gYXJyIDogbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UodGV4dCkge1xuICBpZiAodGV4dC5zdGFydHNXaXRoKCcjIyMnKSkge1xuICAgIGNvbnN0IGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgaC50ZXh0Q29udGVudCA9IHRleHQuc3Vic3RyaW5nKDMpXG4gICAgcmV0dXJuIGhcbiAgfVxuXG4gIGNvbnN0IGxpbmtzID0gY2hlY2tMaW5rKHRleHQpXG4gIGlmIChsaW5rcykge1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBsaW5rcy5mb3JFYWNoKCh7IHRleHQsIGlkLCB1cmwgfSkgPT4ge1xuICAgICAgcC5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpXG4gICAgICBpZiAoaWQpIHtcbiAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgICAgICBhLmhyZWYgPSB1cmxcbiAgICAgICAgYS50ZXh0Q29udGVudCA9IGlkXG4gICAgICAgIHAuYXBwZW5kKGEpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcFxuICB9XG5cbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBwLnRleHRDb250ZW50ID0gdGV4dFxuICByZXR1cm4gcFxufVxuIiwiaW1wb3J0IHsgY3JlYXRlVm9sdW1lQ29udHJvbCB9IGZyb20gJy4vdm9sdW1lJ1xuaW1wb3J0IHsgU291bmQgfSBmcm9tICcuLi91dGlscy9zb3VuZCdcblxuY29uc3Qgc291bmQgPSBuZXcgU291bmQoKVxubGV0IHRpdGxlID0gbnVsbFxubGV0IHByb2dyZXNzID0gMFxuXG5jb25zdCByZWFkeUNhbGxiYWNrID0gbG9hZGVkID0+IHtcbiAgaWYgKGxvYWRlZCA9PT0gMTAwICYmIHRpdGxlLnRleHRDb250ZW50LmluY2x1ZGVzKCdsb2FkaW5nJykpIHRpdGxlLnRleHRDb250ZW50ID0gJydcbiAgaWYgKHRpdGxlICYmICFzb3VuZC5fcGxheWluZyAmJiAhc291bmQubXVzaWMubXV0ZWQpIHtcbiAgICBwcm9ncmVzcyArPSAxXG4gICAgaWYgKHByb2dyZXNzID4gMykgcHJvZ3Jlc3MgPSAxXG4gICAgY29uc3QgZG90cyA9ICcuJy5yZXBlYXQocHJvZ3Jlc3MgLSAxKVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7ZG90c31sb2FkaW5nJHtkb3RzfWBcbiAgfVxufVxuXG5jb25zdCBzdGFydFBsYXlDYWxsYmFjayA9IG5hbWUgPT4ge1xuICBpZiAodGl0bGUpIHtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IG5hbWVcbiAgfVxufVxuXG5jb25zdCBleGNlcHRpb25DYWxsYmFjayA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZvbHVtZV9fbXVzaWNfaWNvbicpLmNsYXNzTGlzdC5hZGQoJ3ZvbHVtZS1vZmYnKVxuICB0aXRsZS50ZXh0Q29udGVudCA9ICcnXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQbGF5ZXIoKSB7XG4gIGNvbnN0IHBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHBsYXllci5jbGFzc05hbWUgPSAncGxheWVyJ1xuICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBmaWVsZC5jbGFzc05hbWUgPSAncGxheWVyX190aXRsZSdcbiAgdGl0bGUgPSBmaWVsZFxuXG4gIHNvdW5kLnJlYWR5Q2FsbGJhY2sgPSByZWFkeUNhbGxiYWNrXG4gIHNvdW5kLnN0YXJ0UGxheUNhbGxiYWNrID0gc3RhcnRQbGF5Q2FsbGJhY2tcbiAgc291bmQuZXhjZXB0aW9uQ2FsbGJhY2sgPSBleGNlcHRpb25DYWxsYmFja1xuXG4gIHBsYXllci5hcHBlbmQoY3JlYXRlVm9sdW1lQ29udHJvbCgpLCB0aXRsZSlcbiAgcmV0dXJuIHBsYXllclxufVxuIiwiaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLi91dGlscy9zdGF0ZSdcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi4vdXRpbHMvc3RvcmUnXG5pbXBvcnQgeyBmb3JtYXRUaW1lLCBmb3JtYXREYXRlIH0gZnJvbSAnLi4vdXRpbHMvZm9ybWF0J1xuaW1wb3J0IExvYyBmcm9tICcuLi9kYXRhL2xvYy5qc29uJyBhc3NlcnQgeyB0eXBlOiAnanNvbicgfVxuXG5jb25zdCBzdG9yZSA9IG5ldyBTdG9yZSgpXG5cbmV4cG9ydCBjb25zdCB1cGRhdGVHYW1lUmVjb3JkcyA9ICgpID0+IHtcbiAgY29uc3QgcmVjb3JkcyA9IHN0b3JlLmdldCgncmVjb3JkcycpXG4gIGNvbnN0IGNvbXBvbmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fcmVjb3Jkc19saXN0JylcbiAgY29tcG9uZW50LmlubmVySFRNTCA9ICcnXG4gIHJlY29yZHNcbiAgICAuc29ydCgoYSwgYikgPT4gcGFyc2VJbnQobmV3IERhdGUoYi5kYXRlKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShhLmRhdGUpLmdldFRpbWUoKSkpXG4gICAgLmZvckVhY2gocmVjb3JkID0+IHtcbiAgICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICBsaW5lLmNsYXNzTmFtZSA9ICdtb2RhbF9fcmVjb3Jkc19pdGVtJ1xuICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGZvcm1hdERhdGUocmVjb3JkLmRhdGUpXG4gICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBuYW1lLnRleHRDb250ZW50ID0gcmVjb3JkLm5hbWVcbiAgICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIHRpbWUudGV4dENvbnRlbnQgPSBmb3JtYXRUaW1lKHJlY29yZC50aW1lKVxuICAgICAgY29uc3QgdHVybnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIHR1cm5zLnRleHRDb250ZW50ID0gcmVjb3JkLnR1cm5zXG4gICAgICBjb25zdCBzY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgc2NvcmUudGV4dENvbnRlbnQgPSByZWNvcmQuc2NvcmVcbiAgICAgIGxpbmUuYXBwZW5kKGRhdGUsIG5hbWUsIHRpbWUsIHR1cm5zLCBzY29yZSlcbiAgICAgIGNvbXBvbmVudC5hcHBlbmQobGluZSlcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlTW9kYWxSZWNvcmRzID0gKCkgPT4ge1xuICBjb25zdCBzdGF0ZSA9IG5ldyBTdGF0ZSgpXG4gIGNvbnN0IGxhbmcgPSBzdGF0ZS5sYW5nXG5cbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBtb2RhbC5jbGFzc05hbWUgPSAnbW9kYWxfX3JlY29yZHMgaGlkZGVuJ1xuICBjb25zdCBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGlubmVyLmNsYXNzTmFtZSA9ICdtb2RhbF9faW5uZXInXG4gIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBsZWZ0LmNsYXNzTmFtZSA9ICdtb2RhbF9fbGVmdCdcbiAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICByaWdodC5jbGFzc05hbWUgPSAnbW9kYWxfX3JpZ2h0J1xuXG4gIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY2xvc2UuY2xhc3NOYW1lID0gJ21vZGFsX19jbG9zZSdcbiAgY29uc3QgY2xvc2VJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjbG9zZS5hcHBlbmQoY2xvc2VJbWcpXG4gIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJykpXG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gIHRpdGxlLmNsYXNzTmFtZSA9ICdtb2RhbF9fdGl0bGUnXG4gIHRpdGxlLnRleHRDb250ZW50ID0gTG9jW2xhbmddLnJlY29yZHNUaXRsZVxuXG4gIGNvbnN0IHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB3cmFwLmNsYXNzTmFtZSA9ICdtb2RhbF9fc2Nyb2xsX3dyYXAnXG4gIGNvbnN0IHJlY29yZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gIHJlY29yZHMuY2xhc3NOYW1lID0gJ21vZGFsX19yZWNvcmRzX2xpc3Qgc2Nyb2xsZWQnXG4gIHdyYXAuYXBwZW5kKHJlY29yZHMpXG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYnRuLmNsYXNzTmFtZSA9ICdidXR0b24nXG4gIGJ0bi50ZXh0Q29udGVudCA9ICdPSydcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJykpXG5cbiAgaW5uZXIuYXBwZW5kKGNsb3NlLCB0aXRsZSwgd3JhcCwgYnRuLCBsZWZ0LCByaWdodClcbiAgbW9kYWwuYXBwZW5kKGlubmVyKVxuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICB9XG4gIH0pXG4gIHJldHVybiBtb2RhbFxufVxuIiwiaW1wb3J0IHsgR0FNRSB9IGZyb20gJy4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLi91dGlscy9zdGF0ZSdcbmltcG9ydCB7IFNvdW5kIH0gZnJvbSAnLi4vdXRpbHMvc291bmQnXG5pbXBvcnQgTG9jIGZyb20gJy4uL2RhdGEvbG9jLmpzb24nIGFzc2VydCB7IHR5cGU6ICdqc29uJyB9XG5cbmNvbnN0IHNvdW5kID0gbmV3IFNvdW5kKClcblxuY29uc3Qgc2hvd1RpbWUgPSAoZWwsIG4pID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIGxldCBudW0gPSAwXG4gICAgZnVuY3Rpb24gcml6ZSgpIHtcbiAgICAgIG51bSArPSBNYXRoLm1heCh+figobiAtIG51bSkgLyAxMCkgKiAyLCAxKVxuICAgICAgY29uc3QgbSA9IH5+KG51bSAvIDYwKVxuICAgICAgY29uc3QgcyA9IG51bSAlIDYwXG4gICAgICBlbC50ZXh0Q29udGVudCA9IGAkeygnMCcgKyBtKS5zbGljZSgtMil9OiR7KCcwJyArIHMpLnNsaWNlKC0yKX1gXG4gICAgICBzb3VuZC51c2UoJ3N0ZXAnKVxuICAgICAgaWYgKG51bSA+PSBuKSByZXR1cm4gcmVzb2x2ZSgpXG4gICAgICBzZXRUaW1lb3V0KHJpemUsIEdBTUUuc3BmICogMilcbiAgICB9XG4gICAgcml6ZSgpXG4gIH0pXG59XG5cbmNvbnN0IHNob3dOdW1iZXIgPSAoZWwsIGZyb20sIG4pID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIGxldCBudW0gPSBmcm9tXG4gICAgZnVuY3Rpb24gcml6ZSgpIHtcbiAgICAgIG51bSArPSBNYXRoLm1heCh+figobiAtIG51bSkgLyAxMCkgKiAyLCAxKVxuICAgICAgZWwudGV4dENvbnRlbnQgPSBudW1cbiAgICAgIHNvdW5kLnVzZSgnc3RlcCcpXG4gICAgICBpZiAobnVtID49IG4pIHJldHVybiByZXNvbHZlKClcbiAgICAgIHNldFRpbWVvdXQocml6ZSwgR0FNRS5zcGYgKiAyKVxuICAgIH1cbiAgICByaXplKClcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHNob3dSZXN1bHRzID0gYXN5bmMgKHsgdGltZSwgdHVybnMsIHNjb3JlLCBtc2cgPSAnd2luJywgc29sdXRpb24gPSBmYWxzZSwgZGVzY3IgPSBudWxsIH0pID0+IHtcbiAgY29uc3Qgc3RhdGUgPSBuZXcgU3RhdGUoKVxuICBjb25zdCBsYW5nID0gc3RhdGUubGFuZ1xuICBjb25zdCB7IHRpbWVTY29yZSwgdHVybnNTY29yZSB9ID0gc2NvcmVcblxuICBzb3VuZC5zYXkobXNnKVxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fcmVzbHQnKVxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpXG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gIG1vZGFsLnJlc2x0LnNvbHV0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKVxuICBtb2RhbC5yZXNsdC5zY29yZS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcbiAgbW9kYWwucmVzbHQuc2hyaWtlLmNsYXNzTGlzdC50b2dnbGUoJ2xvb3NlJywgbXNnICE9PSAnd2luJylcbiAgbW9kYWwucmVzbHQudGl0bGUudGV4dENvbnRlbnQgPSBMb2NbbGFuZ11bbXNnXVxuICBtb2RhbC5yZXNsdC5kZXNjci50ZXh0Q29udGVudCA9IGRlc2NyID8gTG9jW2xhbmddW2Rlc2NyXSA6ICcnXG4gIG1vZGFsLnJlc2x0LnNjb3JlLnRleHRDb250ZW50ID0gJzAnXG5cbiAgYXdhaXQgc2hvd1RpbWUobW9kYWwucmVzbHQudGltZSwgdGltZSlcbiAgYXdhaXQgc2hvd051bWJlcihtb2RhbC5yZXNsdC5zY29yZSwgMCwgdGltZVNjb3JlKVxuICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgpLCA1MDApKVxuICBhd2FpdCBzaG93TnVtYmVyKG1vZGFsLnJlc2x0LnR1cm5zLCAwLCB0dXJucylcbiAgYXdhaXQgc2hvd051bWJlcihtb2RhbC5yZXNsdC5zY29yZSwgdGltZVNjb3JlLCB0aW1lU2NvcmUgKyB0dXJuc1Njb3JlKVxuXG4gIGlmIChtc2cgPT09ICd3aW4nICYmIHNvbHV0aW9uKSB7XG4gICAgbW9kYWwucmVzbHQuc29sdXRpb24uY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpXG4gIH1cbiAgaWYgKHNvbHV0aW9uIHx8IG1zZyAhPT0gJ3dpbicpIHtcbiAgICBtb2RhbC5yZXNsdC5zY29yZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnXG4gIH1cblxuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpXG59XG4iLCJpbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uL3V0aWxzL3RoZW1lJ1xuXG5leHBvcnQgY29uc3QgdGhlbWVVcGRhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gbmV3IFRoZW1lKClcbiAgY29uc3QgbmFtZSA9IHRoZW1lLm5hbWVcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWxfX2Nsb3NlJykuZm9yRWFjaChlbCA9PiBlbC5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QudG9nZ2xlKCdpbnZlcnQnLCBuYW1lID09PSAnZGFyaycpKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9fcmVzZXQnKS5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QudG9nZ2xlKCdpbnZlcnQnLCBuYW1lID09PSAnZGFyaycpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yc3NfX2xvZ28nKS5jbGFzc0xpc3QudG9nZ2xlKCdpbnZlcnQnLCBuYW1lICE9PSAnZGFyaycpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52b2x1bWVfX3NvdW5kX2ljb24nKS5jbGFzc0xpc3QudG9nZ2xlKCdpbnZlcnQnLCBuYW1lICE9PSAnZGFyaycpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52b2x1bWVfX211c2ljX2ljb24nKS5jbGFzc0xpc3QudG9nZ2xlKCdpbnZlcnQnLCBuYW1lICE9PSAnZGFyaycpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZycpLmNsYXNzTGlzdC50b2dnbGUoJ2JyaWdodCcsIG5hbWUgIT09ICdkYXJrJylcbn1cbiIsImltcG9ydCB7IGdldFN5c3RlbVRoZW1lIH0gZnJvbSAnLi4vdXRpbHMvc3lzdGVtJ1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi91dGlscy90aGVtZSdcbmltcG9ydCB7IEdBTUUgfSBmcm9tICcuLi9tb2R1bGUvY29uc3RhbnRzJ1xuaW1wb3J0IHsgY3JlYXRlUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInXG5pbXBvcnQgeyBjcmVhdGVNb2RlU2VsZWN0b3IgfSBmcm9tICcuL21vZGUnXG5pbXBvcnQgeyBpbml0TWVudSwgY3JlYXRlTW9kYWxHYW1lLCBjcmVhdGVNb2RhbFJlc3VsdHMgfSBmcm9tICcuL21lbnUnXG5pbXBvcnQgeyBjcmVhdGVNb2RhbFJlY29yZHMgfSBmcm9tICcuL3JlY29yZHMnXG5pbXBvcnQgeyBjcmVhdGVNb2RhbEFib3V0IH0gZnJvbSAnLi9hYm91dCdcbmltcG9ydCB7IHRoZW1lVXBkYXRlIH0gZnJvbSAnLi90aGVtZVVwZGF0ZSdcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vdXRpbHMvc3RhdGUnXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJy4uL3V0aWxzL3N0b3JlJ1xuaW1wb3J0IExvYyBmcm9tICcuLi9kYXRhL2xvYy5qc29uJyBhc3NlcnQgeyB0eXBlOiAnanNvbicgfVxuXG5jb25zdCB0aGVtZSA9IG5ldyBUaGVtZSgpXG5jb25zdCBzdG9yZSA9IG5ldyBTdG9yZSgpXG5sZXQgcGVuZGluZyA9IDJcblxuZnVuY3Rpb24gY3JlYXRlQ2hhcnMoKSB7XG4gIGNvbnN0IGNoYXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY2hhcnMuY2xhc3NOYW1lID0gJ2NoYXJzJ1xuICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbGVmdC5jbGFzc05hbWUgPSAnY2hhcnNfX3NocmlrZSdcbiAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICByaWdodC5jbGFzc05hbWUgPSAnY2hhcnNfX2J1bGxkb2cnXG5cbiAgY29uc3Qgc2hyaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYmxvY2txdW90ZScpXG4gIHNocmlrZS5jbGFzc05hbWUgPSAnc3BlZWNoX19zaHJpa2UgaGlkZGVuJ1xuICBsZWZ0LmFwcGVuZChzaHJpa2UpXG4gIGNvbnN0IGJ1bGxkb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdibG9ja3F1b3RlJylcbiAgYnVsbGRvZy5jbGFzc05hbWUgPSAnc3BlZWNoX19idWxsZG9nIGhpZGRlbidcbiAgcmlnaHQuYXBwZW5kKGJ1bGxkb2cpXG5cbiAgY2hhcnMuYXBwZW5kKGxlZnQsIHJpZ2h0KVxuICByZXR1cm4gY2hhcnNcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3RhdHMoKSB7XG4gIGNvbnN0IHN0YXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgc3RhdHMuY2xhc3NOYW1lID0gJ2dhbWVfX3N0YXRzJ1xuXG4gIGNvbnN0IHBvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICBwb3MuY2xhc3NOYW1lID0gJ3N0YXRzX19wb3MnXG4gIHBvcy50ZXh0Q29udGVudCA9ICcwOjAnXG5cbiAgY29uc3QgdHVybnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgdHVybnMuY2xhc3NOYW1lID0gJ3N0YXRzX190dXJucydcbiAgdHVybnMudGV4dENvbnRlbnQgPSAnMC8wJ1xuXG4gIGNvbnN0IHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB3cmFwLmNsYXNzTmFtZSA9ICdzdGF0c19fcHJvZ3Jlc3MnXG5cbiAgY29uc3QgdGltZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgdGltZXIuY2xhc3NOYW1lID0gJ3N0YXRzX190aW1lcidcbiAgdGltZXIudGV4dENvbnRlbnQgPSAnMDA6MDAnXG5cbiAgY29uc3QgcHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBwcm9ncmVzcy5jbGFzc05hbWUgPSAnc3RhdHNfX3Byb2dyZXNzX3dyYXAnXG4gIGNvbnN0IHByb2dyZXNzYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgcHJvZ3Jlc3NiYXIuY2xhc3NOYW1lID0gJ3N0YXRzX19wcm9ncmVzc19iYXInXG4gIHByb2dyZXNzLmFwcGVuZChwcm9ncmVzc2JhcilcblxuICB3cmFwLmFwcGVuZCh0aW1lciwgcHJvZ3Jlc3MpXG5cbiAgc3RhdHMuYXBwZW5kKHBvcywgd3JhcCwgdHVybnMpXG4gIHJldHVybiBzdGF0c1xufVxuXG5mdW5jdGlvbiBjcmVhdGVHYW1lRmllbGQoKSB7XG4gIGNvbnN0IGdhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBnYW1lLmNsYXNzTmFtZSA9ICdnYW1lJ1xuXG4gIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgZmllbGQuY2xhc3NOYW1lID0gJ2dhbWVfX2ZpZWxkJ1xuICBmaWVsZC53aWR0aCA9IEdBTUUuc2l6ZVxuICBmaWVsZC5oZWlnaHQgPSBHQU1FLnNpemVcbiAgZmllbGQudGV4dENvbnRlbnQgPSAnR2FtZSBmaWVsZCdcblxuICBjb25zdCBob3ZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gIGhvdmVyLmNsYXNzTmFtZSA9ICdnYW1lX19ob3ZlcidcbiAgaG92ZXIud2lkdGggPSBHQU1FLnNpemVcbiAgaG92ZXIuaGVpZ2h0ID0gR0FNRS5zaXplXG5cbiAgY29uc3QgcmVzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICByZXNldC5jbGFzc05hbWUgPSAnZ2FtZV9fcmVzZXQnXG4gIGNvbnN0IHJlc2V0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgcmVzZXQuYXBwZW5kKHJlc2V0SW1nKVxuXG4gIGNvbnN0IHNvbHV0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgc29sdXRpb24uY2xhc3NOYW1lID0gJ2dhbWVfX3NvbHV0aW9uIGhpZGRlbidcbiAgc29sdXRpb24udGV4dENvbnRlbnQgPSAnISdcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBoZWFkZXIuY2xhc3NOYW1lID0gJ2dhbWVfX2hlYWRlcidcbiAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBoZWFkZXJUZXh0LmNsYXNzTmFtZSA9ICdnYW1lX19oZWFkZXJfdGV4dCBoaWRkZW4nXG4gIGhlYWRlci5hcHBlbmQoaGVhZGVyVGV4dCwgY3JlYXRlTW9kZVNlbGVjdG9yKCkpXG5cbiAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGxlZnQuY2xhc3NOYW1lID0gJ2dhbWVfX2xlZnQnXG4gIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgcmlnaHQuY2xhc3NOYW1lID0gJ2dhbWVfX3JpZ2h0J1xuICBjb25zdCB0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB0b3AuY2xhc3NOYW1lID0gJ2dhbWVfX3RvcCdcbiAgY29uc3QgYm90dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGJvdHQuY2xhc3NOYW1lID0gJ2dhbWVfX2JvdHQnXG5cbiAgZ2FtZS5hcHBlbmQoaGVhZGVyLCBmaWVsZCwgaG92ZXIsIHJlc2V0LCBzb2x1dGlvbiwgY3JlYXRlU3RhdHMoKSwgY3JlYXRlU2F2ZUZvcm0oKSwgbGVmdCwgcmlnaHQsIHRvcCwgYm90dClcbiAgcmV0dXJuIGdhbWVcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2F2ZUZvcm0oKSB7XG4gIGNvbnN0IHN0YXRlID0gbmV3IFN0YXRlKClcbiAgY29uc3QgbGFuZyA9IHN0YXRlLmxhbmdcblxuICBjb25zdCBzYXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gIHNhdmUuY2xhc3NOYW1lID0gJ2VkaXRvcl9fc2F2ZV9mb3JtIGhpZGRlbidcblxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbmFtZS5jbGFzc05hbWUgPSAnZWRpdG9yX19zYXZlX25hbWUnXG5cbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gIGlucHV0Lm5hbWUgPSAnbmFtZSdcbiAgaW5wdXQudHlwZSA9ICd0ZXh0J1xuICBpbnB1dC5hdXRvY29tcGxldGUgPSAnb2ZmJ1xuICBpbnB1dC5wbGFjZWhvbGRlciA9ICcnXG4gIGlucHV0LmNsYXNzTmFtZSA9ICdlZGl0b3JfX3NhdmVfbmFtZS10ZXh0J1xuXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICBsYWJlbC5jbGFzc05hbWUgPSAnZWRpdG9yX19zYXZlX25hbWUtbGFiZWwnXG4gIGxhYmVsLnRleHRDb250ZW50ID0gTG9jW2xhbmddLnB1enpsZU5hbWVcblxuICBuYW1lLmFwcGVuZChpbnB1dCwgbGFiZWwpXG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgYnRuLnR5cGUgPSAnc3VibWl0J1xuICBidG4uY2xhc3NOYW1lID0gJ2VkaXRvcl9fc2F2ZV9idG4gYnV0dG9uJ1xuICBidG4udGV4dENvbnRlbnQgPSBMb2NbbGFuZ10uc2F2ZVxuXG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBtZXNzYWdlLmNsYXNzTmFtZSA9ICdlZGl0b3JfX3NhdmVfbWVzc2FnZSBoaWRkZW4nXG5cbiAgc2F2ZS5hcHBlbmQobmFtZSwgYnRuLCBtZXNzYWdlKVxuICByZXR1cm4gc2F2ZVxufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG4gIG1haW4uY2xhc3NOYW1lID0gJ21haW4nXG5cbiAgY29uc3QgYmFzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGJhc2UuY2xhc3NOYW1lID0gJ2Jhc2UnXG5cbiAgYmFzZS5hcHBlbmQoY3JlYXRlR2FtZUZpZWxkKCkpXG5cbiAgY29uc3QgYmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBiZy5jbGFzc05hbWUgPSAnYmcnXG5cbiAgbWFpbi5hcHBlbmQoYmcsIGNyZWF0ZVBsYXllcigpLCBiYXNlLCBjcmVhdGVDaGFycygpKVxuICByZXR1cm4gbWFpblxufVxuXG5mdW5jdGlvbiBjcmVhdGVGcm9tVGVtcGxhdGUobmFtZSwgY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSlcbiAgZWwuY2xhc3NOYW1lID0gbmFtZVxuICBjb25zdCB4aHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG4gIHhodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICBlbC5pbm5lckhUTUwgPSB0aGlzLnJlc3BvbnNlVGV4dFxuICAgICAgICBwZW5kaW5nIC09IDFcbiAgICAgICAgaWYgKHBlbmRpbmcgPD0gMCkgY2FsbGJhY2soKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gJ1BhZ2Ugbm90IGZvdW5kLidcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgeGh0dHAub3BlbignR0VUJywgYC4vdGVtcGxhdGUvJHtuYW1lfS50bXBsYCwgdHJ1ZSlcbiAgeGh0dHAuc2VuZCgpXG4gIHJldHVybiBlbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFVJKCkge1xuICBjb25zdCB0aGVtZU5hbWUgPSBzdG9yZS5nZXQoJ3RoZW1lJykgPz8gZ2V0U3lzdGVtVGhlbWUoKVxuXG4gIGNvbnN0IGdldFRoZW1lQ29sb3JzID0gbmFtZSA9PiB7XG4gICAgdGhlbWUuY29sb3IwMCA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1jb2xvcjAwJylcbiAgICB0aGVtZS5jb2xvcjUwID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWNvbG9yNTAnKVxuICAgIHRoZW1lLmNvbG9yODAgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJy0tY29sb3I4MCcpXG4gICAgdGhlbWUuY29sb3I5MCA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1jb2xvcjkwJylcbiAgICB0aGVtZS5jb2xvcjEwMCA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1jb2xvcjEwMCcpXG4gICAgdGhlbWUubmFtZSA9IG5hbWVcbiAgfVxuXG4gIGNvbnN0IGluaXRUaGVtZVN3aXRjaGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHN3aXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRoZW1lX19zd2l0Y2hlcicpXG4gICAgc3dpdGNoZXIuY2hlY2tlZCA9IHRoZW1lTmFtZSA9PT0gJ2RhcmsnXG4gICAgZ2V0VGhlbWVDb2xvcnModGhlbWVOYW1lKVxuXG4gICAgc3dpdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgY29uc3QgZGFya1RoZW1lID0gZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ3RoZW1lX19kYXJrJywgZGFya1RoZW1lKVxuICAgICAgZ2V0VGhlbWVDb2xvcnMoZGFya1RoZW1lID8gJ2RhcmsnIDogJ2xpZ2h0JylcbiAgICAgIHN0b3JlLnNldCgndGhlbWUnLCBkYXJrVGhlbWUgPyAnZGFyaycgOiAnbGlnaHQnKVxuICAgICAgdGhlbWVVcGRhdGUoKVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBpbml0UGVuZGluZ0NvbXBvbmVudHMgPSAoKSA9PiB7XG4gICAgaW5pdFRoZW1lU3dpdGNoZXIoKVxuICAgIHRoZW1lVXBkYXRlKClcbiAgICBpbml0TWVudSgpXG4gIH1cblxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ3RoZW1lX19kYXJrJywgdGhlbWVOYW1lID09PSAnZGFyaycpXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKFxuICAgIGNyZWF0ZUZyb21UZW1wbGF0ZSgnaGVhZGVyJywgaW5pdFBlbmRpbmdDb21wb25lbnRzKSxcbiAgICBjcmVhdGVNYWluKCksXG4gICAgY3JlYXRlRnJvbVRlbXBsYXRlKCdmb290ZXInLCBpbml0UGVuZGluZ0NvbXBvbmVudHMpLFxuICAgIGNyZWF0ZU1vZGFsR2FtZSgpLFxuICAgIGNyZWF0ZU1vZGFsUmVzdWx0cygpLFxuICAgIGNyZWF0ZU1vZGFsUmVjb3JkcygpLFxuICAgIGNyZWF0ZU1vZGFsQWJvdXQoKVxuICApXG59XG4iLCJpbXBvcnQgeyBTb3VuZCB9IGZyb20gJy4uL3V0aWxzL3NvdW5kJ1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuLi91dGlscy9zdG9yZSdcblxuY29uc3Qgc25kID0gbmV3IFNvdW5kKClcbmNvbnN0IHN0b3JlID0gbmV3IFN0b3JlKClcblxuZnVuY3Rpb24gY2hhbmdlU291bmRWb2x1bWUoaWNvbiwgdmFsdWUsIGluaXQpIHtcbiAgaWYgKCFpbml0KSBzbmQuc291bmQubXV0ZWQgPSBmYWxzZVxuICBpZiAodmFsdWUpIHNuZC5zb3VuZC52b2x1bWUgPSBOdW1iZXIodmFsdWUpXG4gIGlmIChzbmQuc291bmQudm9sdW1lID4gMC42KSB7XG4gICAgaWNvbi5jbGFzc05hbWUgPSAndm9sdW1lX19zb3VuZF9pY29uIHZvbHVtZS0zJ1xuICB9IGVsc2UgaWYgKHNuZC5zb3VuZC52b2x1bWUgPiAwLjMpIHtcbiAgICBpY29uLmNsYXNzTmFtZSA9ICd2b2x1bWVfX3NvdW5kX2ljb24gdm9sdW1lLTInXG4gIH0gZWxzZSBpZiAoc25kLnNvdW5kLnZvbHVtZSA+IDApIHtcbiAgICBpY29uLmNsYXNzTmFtZSA9ICd2b2x1bWVfX3NvdW5kX2ljb24gdm9sdW1lLTEnXG4gIH0gZWxzZSB7XG4gICAgaWNvbi5jbGFzc05hbWUgPSAndm9sdW1lX19zb3VuZF9pY29uIHZvbHVtZS1vZmYnXG4gIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlU291bmRWb2x1bWVFbmQoKSB7XG4gIHNuZC5wbGF5KCdkb3QnKVxuICBzdG9yZS5zZXQoJ3NvdW5kJywgeyB2b2x1bWU6IHNuZC5zb3VuZC52b2x1bWUsIG11dGVkOiBmYWxzZSB9KVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VNdXNpY1ZvbHVtZUVuZCgpIHtcbiAgc3RvcmUuc2V0KCdtdXNpYycsIHsgdm9sdW1lOiBzbmQubXVzaWMudm9sdW1lLCBtdXRlZDogZmFsc2UgfSlcbn1cblxuZnVuY3Rpb24gY2hhbmdlTXVzaWNWb2x1bWUoaWNvbiwgdmFsdWUpIHtcbiAgaWYgKHNuZC5tdXNpYy5tdXRlZCkgc25kLm11c2ljTXV0ZWQgPSBmYWxzZVxuICBpZiAodmFsdWUpIHNuZC5tdXNpY1ZvbHVtZSA9IE51bWJlcih2YWx1ZSlcbiAgaWNvbi5jbGFzc0xpc3QudG9nZ2xlKCd2b2x1bWUtb2ZmJywgc25kLm11c2ljLnZvbHVtZSA9PT0gMClcbn1cblxuZnVuY3Rpb24gbXV0ZVNvdW5kKGljb24pIHtcbiAgc25kLnNvdW5kLm11dGVkID0gIXNuZC5zb3VuZC5tdXRlZFxuICBpZiAoc25kLnNvdW5kLm11dGVkKSBpY29uLmNsYXNzTmFtZSA9ICd2b2x1bWVfX3NvdW5kX2ljb24gdm9sdW1lLW9mZidcbiAgZWxzZSBjaGFuZ2VTb3VuZFZvbHVtZShpY29uKVxuICBzdG9yZS5zZXQoJ3NvdW5kLm11dGVkJywgc25kLnNvdW5kLm11dGVkKVxufVxuXG5mdW5jdGlvbiBtdXRlTXVzaWMoaWNvbikge1xuICBzbmQubXVzaWNNdXRlZCA9ICFzbmQubXVzaWMubXV0ZWRcbiAgaWNvbi5jbGFzc0xpc3QudG9nZ2xlKCd2b2x1bWUtb2ZmJywgc25kLm11c2ljLm11dGVkKVxuICBzdG9yZS5zZXQoJ211c2ljLm11dGVkJywgc25kLm11c2ljLm11dGVkKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVm9sdW1lQ29udHJvbCgpIHtcbiAgY29uc3QgcyA9IHN0b3JlLmdldCgnc291bmQnKVxuICBjb25zdCBtID0gc3RvcmUuZ2V0KCdtdXNpYycpXG4gIGlmIChzKSB7XG4gICAgaWYgKE51bWJlci5pc0Zpbml0ZShzLnZvbHVtZSkpIHNuZC5zb3VuZC52b2x1bWUgPSBzLnZvbHVtZVxuICAgIGlmICh0eXBlb2Ygcy5tdXRlZCA9PT0gJ2Jvb2xlYW4nKSBzbmQuc291bmQubXV0ZWQgPSBzLm11dGVkXG4gIH1cbiAgaWYgKG0pIHtcbiAgICBpZiAoTnVtYmVyLmlzRmluaXRlKG0udm9sdW1lKSkgc25kLm11c2ljLnZvbHVtZSA9IG0udm9sdW1lXG4gICAgaWYgKHR5cGVvZiBtLm11dGVkID09PSAnYm9vbGVhbicpIHNuZC5tdXNpYy5tdXRlZCA9IG0ubXV0ZWRcbiAgfVxuXG4gIGNvbnN0IHZvbHVtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHZvbHVtZS5jbGFzc05hbWUgPSAndm9sdW1lJ1xuXG4gIGNvbnN0IHNvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgc291bmQuY2xhc3NOYW1lID0gJ3ZvbHVtZV9fc291bmQnXG4gIGNvbnN0IHNuZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBzbmRJY29uLmNsYXNzTmFtZSA9ICd2b2x1bWVfX3NvdW5kX2ljb24nXG4gIGNvbnN0IHNuZFJhbmdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBzbmRSYW5nZS5jbGFzc05hbWUgPSAndm9sdW1lX19yYW5nZSdcbiAgc25kUmFuZ2UudHlwZSA9ICdyYW5nZSdcbiAgc25kUmFuZ2Uuc3RlcCA9ICcwLjA1J1xuICBzbmRSYW5nZS52YWx1ZSA9IHNuZC5zb3VuZC52b2x1bWVcbiAgc25kUmFuZ2UubWF4ID0gJzEnXG4gIHNuZFJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gY2hhbmdlU291bmRWb2x1bWUoc25kSWNvbiwgc25kUmFuZ2UudmFsdWUpKVxuICBzbmRSYW5nZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgY2hhbmdlU291bmRWb2x1bWVFbmQpXG4gIHNuZEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtdXRlU291bmQoc25kSWNvbikpXG4gIHNvdW5kLmFwcGVuZChzbmRJY29uLCBzbmRSYW5nZSlcblxuICBjb25zdCBtdXNpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIG11c2ljLmNsYXNzTmFtZSA9ICd2b2x1bWVfX211c2ljJ1xuICBjb25zdCBtdXNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbXVzSWNvbi5jbGFzc05hbWUgPSAndm9sdW1lX19tdXNpY19pY29uJ1xuICBjb25zdCBtdXNSYW5nZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgbXVzUmFuZ2UuY2xhc3NOYW1lID0gJ3ZvbHVtZV9fcmFuZ2UnXG4gIG11c1JhbmdlLnR5cGUgPSAncmFuZ2UnXG4gIG11c1JhbmdlLnN0ZXAgPSAnMC4wNSdcbiAgbXVzUmFuZ2UudmFsdWUgPSBzbmQubXVzaWMudm9sdW1lXG4gIG11c1JhbmdlLm1heCA9ICcxJ1xuICBtdXNSYW5nZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IGNoYW5nZU11c2ljVm9sdW1lKG11c0ljb24sIG11c1JhbmdlLnZhbHVlKSlcbiAgbXVzUmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGNoYW5nZU11c2ljVm9sdW1lRW5kKVxuICBtdXNJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbXV0ZU11c2ljKG11c0ljb24pKVxuICBtdXNpYy5hcHBlbmQobXVzSWNvbiwgbXVzUmFuZ2UpXG5cbiAgdm9sdW1lLmFwcGVuZChzb3VuZCwgbXVzaWMpXG5cbiAgY2hhbmdlU291bmRWb2x1bWUoc25kSWNvbiwgc25kLnNvdW5kLnZvbHVtZSwgdHJ1ZSlcbiAgaWYgKHNuZC5zb3VuZC5tdXRlZCkgc25kSWNvbi5jbGFzc05hbWUgPSAndm9sdW1lX19zb3VuZF9pY29uIHZvbHVtZS1vZmYnXG4gIG11c0ljb24uY2xhc3NMaXN0LnRvZ2dsZSgndm9sdW1lLW9mZicsIHNuZC5tdXNpYy52b2x1bWUgPT09IDAgfHwgc25kLm11c2ljLm11dGVkKVxuXG4gIHJldHVybiB2b2x1bWVcbn1cbiIsImltcG9ydCBwdXp6bGVEYXRhIGZyb20gJy4uL2RhdGEvcHV6emxlLmpzb24nIGFzc2VydCB7IHR5cGU6ICdqc29uJyB9XG5cbmV4cG9ydCBjbGFzcyBQdXp6bGVzIHtcbiAgc3RhdGljIF9pbnN0YW5jZVxuICBiYXNlID0gW1tdLCBbXSwgW11dXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKFB1enpsZXMuX2luc3RhbmNlKSByZXR1cm4gUHV6emxlcy5faW5zdGFuY2VcbiAgICBQdXp6bGVzLl9pbnN0YW5jZSA9IHRoaXNcbiAgICB0aGlzLmJhc2UgPSBwdXp6bGVEYXRhXG4gIH1cblxuICBibGFuayhtb2RlKSB7XG4gICAgY29uc3Qgcm93cyA9IChtb2RlICsgMSkgKiA1XG4gICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IHJvd3MgfSwgKCkgPT4gQXJyYXkuZnJvbSh7IGxlbmd0aDogcm93cyB9LCAoKSA9PiAwKSlcbiAgfVxuXG4gIHN0cmluZ2lmeShkYXRhKSB7XG4gICAgY29uc3QgYXJyID0gZGF0YS5tYXAoYSA9PiBhLm1hcCh2ID0+ICh2ID09PSAxID8gMSA6IDApKSlcbiAgICBjb25zdCBkYXRhU3RyaW5nID0gYXJyLmZsYXQoMSkuam9pbignJylcbiAgICByZXR1cm4gZGF0YVN0cmluZ1xuICB9XG5cbiAgYWRkKG5hbWUsIGRhdGEpIHtcbiAgICBpZiAoIW5hbWUgfHwgbmFtZS5sZW5ndGggPCAyKSByZXR1cm4gbmV3IEVycm9yKCdJbnZhbGlkIG5hbWUnKVxuICAgIGlmICghZGF0YSB8fCAoIUFycmF5LmlzQXJyYXkoZGF0YSkgJiYgdHlwZW9mIGRhdGEgIT09ICdzdHJpbmcnKSkgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCBwdXp6bGUgZGF0YScpXG4gICAgY29uc3QgZGF0YVN0cmluZyA9IHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJyA/IGRhdGEgOiB0aGlzLnN0cmluZ2lmeShkYXRhKVxuICAgIGNvbnN0IHJvd3MgPSBNYXRoLnNxcnQoZGF0YVN0cmluZy5sZW5ndGgpXG4gICAgY29uc3QgbW9kZSA9IHJvd3MgLyA1IC0gMVxuICAgIGNvbnN0IGxpc3QgPSB0aGlzLmxpc3QobW9kZSlcbiAgICBpZiAobGlzdC5pbmNsdWRlcyhuYW1lKSkgcmV0dXJuIG5ldyBFcnJvcihgJHtuYW1lfSBhbHJlYWR5IGV4aXN0YClcbiAgICB0aGlzLmJhc2VbbW9kZV0udW5zaGlmdCh7IG5hbWUsIGRhdGE6IGRhdGFTdHJpbmcgfSlcbiAgICByZXR1cm4gJ1B1enpsZSB3YXMgc2F2ZWQnXG4gIH1cblxuICBwYXJzZShkYXRhU3RyaW5nKSB7XG4gICAgY29uc3Qgcm93cyA9IE1hdGguc3FydChkYXRhU3RyaW5nLmxlbmd0aClcbiAgICBpZiAocm93cyAhPT0gfn5yb3dzKSByZXR1cm4gbnVsbFxuICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiByb3dzIH0sIChfLCB5KSA9PiBBcnJheS5mcm9tKHsgbGVuZ3RoOiByb3dzIH0sIChfLCB4KSA9PiBOdW1iZXIoZGF0YVN0cmluZy5jaGFyQXQoeSAqIHJvd3MgKyB4KSkpKVxuICB9XG5cbiAgZ2V0KG1vZGUsIHB1enpsZSkge1xuICAgIGlmICghdGhpcy5iYXNlW21vZGVdKSB7XG4gICAgICBjb25zb2xlLndhcm4oYEdhbWUgbW9kZSAke21vZGV9IG5vdCBmb3VuZCFgKVxuICAgICAgcmV0dXJuIHRoaXMuYmxhbmsobW9kZSlcbiAgICB9XG4gICAgaWYgKCF0aGlzLmJhc2VbbW9kZV1bcHV6emxlXSkge1xuICAgICAgY29uc29sZS53YXJuKGBHYW1lIHB1enpsZSAke3B1enpsZX0gbm90IGZvdW5kIWApXG4gICAgICByZXR1cm4gdGhpcy5ibGFuayhtb2RlKVxuICAgIH1cblxuICAgIGNvbnN0IHsgbmFtZSwgZGF0YTogZGF0YVN0cmluZyB9ID0gdGhpcy5iYXNlW21vZGVdW3B1enpsZV1cbiAgICBjb25zdCBkYXRhID0gdGhpcy5wYXJzZShkYXRhU3RyaW5nKVxuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICBjb25zb2xlLndhcm4oYEdhbWUgcHV6emxlICR7bmFtZX0gaXMgY29ycnVwdGVkIWApXG4gICAgICByZXR1cm4gdGhpcy5ibGFuayhtb2RlKVxuICAgIH1cblxuICAgIHJldHVybiB7IG5hbWUsIGRhdGEgfVxuICB9XG5cbiAgbGlzdChtb2RlKSB7XG4gICAgY29uc3QgYXJyID0gdGhpcy5iYXNlW21vZGVdXG4gICAgaWYgKCFhcnIpIHtcbiAgICAgIGNvbnNvbGUud2FybihgR2FtZSBtb2RlICR7bW9kZX0gbm90IGZvdW5kIWApXG4gICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogYXJyLmxlbmd0aCB9LCAoXywgaSkgPT4gYXJyW2ldLm5hbWUpXG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBmb3JtYXRUaW1lID0gbnVtID0+IHtcbiAgcmV0dXJuIGAkeygnMCcgKyB+fihudW0gLyA2MCkpLnNsaWNlKC0yKX06JHsoJzAnICsgKG51bSAlIDYwKSkuc2xpY2UoLTIpfWBcbn1cblxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGUgPSBudW0gPT4ge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUobnVtKVxuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkuc2xpY2UoLTIpXG4gIGNvbnN0IG1vbnRoID0gYDAke2RhdGUuZ2V0TW9udGgoKSArIDF9YC5zbGljZSgtMilcbiAgY29uc3QgZGF5ID0gYDAke2RhdGUuZ2V0RGF0ZSgpfWAuc2xpY2UoLTIpXG4gIGNvbnN0IGhvdXIgPSBgMCR7ZGF0ZS5nZXRIb3VycygpfWAuc2xpY2UoLTIpXG4gIGNvbnN0IG1pbiA9IGAke2RhdGUuZ2V0TWludXRlcygpfWAuc2xpY2UoLTIpXG4gIHJldHVybiBgJHtkYXl9LiR7bW9udGh9LiR7eWVhcn0gJHtob3VyfToke21pbn1gXG59XG4iLCJpbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vZGF0YS9tZXNzYWdlcy5qc29uJyBhc3NlcnQgeyB0eXBlOiAnanNvbicgfVxuXG5jb25zdCB0aW1lciA9IHtcbiAgc2hyaWtlOiBudWxsLFxuICBidWxsZG9nOiBudWxsLFxufVxuXG5leHBvcnQgY29uc3QgbWVzc2FnZSA9IChjaGFyYWN0ZXIsIGlkID0gbnVsbCwgZGVsYXkgPSAzMDAwKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNwZWVjaF9fJHtjaGFyYWN0ZXJ9YCkgLy8gc2hyaWtlIC8gYnVsbGRvZ1xuICBpZiAoIWlkKSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoIW1lc3NhZ2VzW2lkXSkgcmV0dXJuIEVycm9yKCdObyBzdWNoIG1lc3NhZ2UnKVxuICBjb25zdCB0ZXh0ID0gQXJyYXkuaXNBcnJheShtZXNzYWdlc1tpZF0pID8gbWVzc2FnZXNbaWRdW35+KE1hdGgucmFuZG9tKCkgKiBtZXNzYWdlc1tpZF0ubGVuZ3RoKV0gOiBtZXNzYWdlc1tpZF1cbiAgZWwudGV4dENvbnRlbnQgPSB0ZXh0XG4gIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gIGNsZWFyVGltZW91dCh0aW1lcltjaGFyYWN0ZXJdKVxuICB0aW1lcltjaGFyYWN0ZXJdID0gc2V0VGltZW91dCgoKSA9PiBlbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKSwgZGVsYXkpXG59XG4iLCJjb25zdCBzb3VuZHMgPSB7XG4gIGRvdDogeyB1cmw6ICcuL3B1YmxpYy9kb3Qub2dnJywgdHlwZTogJ211bHRpcGxlJyB9LFxuICBjcm9zczogeyB1cmw6ICcuL3B1YmxpYy9jcm9zcy5vZ2cnLCB0eXBlOiAnbXVsdGlwbGUnIH0sXG4gIHdob29zaDogeyB1cmw6ICcuL3B1YmxpYy93aG9vc2gwMS5vZ2cnIH0sXG4gIHNsaWRlOiB7IHVybDogJy4vcHVibGljL3dob29zaDAyLm9nZycgfSxcbiAgc3RlcDogeyB1cmw6ICcuL3B1YmxpYy9zdGVwLm9nZycsIHR5cGU6ICdtdWx0aXBsZScgfSxcbn1cblxuY29uc3QgbXVzaWMgPSBbXG4gIHtcbiAgICBuYW1lOiAnSW50cm8nLFxuICAgIHVybDogJy4vcHVibGljL3RyYWNrMDEub2dnJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdUb29sIEluIFNwYWNlJyxcbiAgICB1cmw6ICcuL3B1YmxpYy90cmFjazAyLm9nZycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnSW5zaWRlIFRoZSBCdWNrZXQnLFxuICAgIHVybDogJy4vcHVibGljL3RyYWNrMDMub2dnJyxcbiAgfSxcbl1cblxuY29uc3Qgc3BlZWNoID0ge1xuICB3aW46IFsnLi9wdWJsaWMvd2luMDEub2dnJ10sXG4gIGxvb3NlOiBbJy4vcHVibGljL2xvb3NlMDEub2dnJywgJy4vcHVibGljL2xvb3NlMDIub2dnJywgJy4vcHVibGljL2xvb3NlMDMub2dnJywgJy4vcHVibGljL2xvb3NlMDQub2dnJywgJy4vcHVibGljL2xvb3NlMDUub2dnJ10sXG59XG5cbmNvbnN0IGNvdW50VG90YWwgPSBPYmplY3Qua2V5cyhzb3VuZHMpLmxlbmd0aCArIG11c2ljLmxlbmd0aCAqIDIgKyBPYmplY3QudmFsdWVzKHNwZWVjaCkucmVkdWNlKChhY2MsIGl0ZW0pID0+IGFjYyArIGl0ZW0ubGVuZ3RoLCAwKVxuXG5leHBvcnQgY2xhc3MgU291bmQge1xuICBzdGF0aWMgX2luc3RhbmNlXG4gIHNvdW5kID0geyB2b2x1bWU6IDAuNSwgbXV0ZWQ6IGZhbHNlIH1cbiAgbXVzaWMgPSB7IHZvbHVtZTogMC4yNSwgbXV0ZWQ6IHRydWUgfVxuICBzb3VuZHMgPSB7fVxuICB0cmFja3MgPSBbXVxuICBzcGVlY2ggPSB7IHdpbjogW10sIGxvb3NlOiBbXSB9XG4gIF9sb2FkZWQgPSAwXG4gIHJlYWR5ID0gMFxuICBfcGVuZGluZyA9IG51bGxcbiAgX3BsYXlpbmcgPSBudWxsXG4gIHJlYWR5Q2FsbGJhY2sgPSAoKSA9PiB7fVxuICBzdGFydFBsYXlDYWxsYmFjayA9ICgpID0+IHt9XG4gIGV4Y2VwdGlvbkNhbGxiYWNrID0gKCkgPT4ge31cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoU291bmQuX2luc3RhbmNlKSByZXR1cm4gU291bmQuX2luc3RhbmNlXG4gICAgU291bmQuX2luc3RhbmNlID0gdGhpc1xuICAgIE9iamVjdC5rZXlzKHNwZWVjaCkuZm9yRWFjaChuYW1lID0+IHNwZWVjaFtuYW1lXS5mb3JFYWNoKHVybCA9PiB0aGlzLl9nZXRTb3VuZCh1cmwsIG5hbWUsICdzcGVlY2gnKSkpXG4gICAgT2JqZWN0LmtleXMoc291bmRzKS5mb3JFYWNoKG5hbWUgPT4gdGhpcy5fZ2V0U291bmQoc291bmRzW25hbWVdLnVybCwgbmFtZSwgc291bmRzW25hbWVdLnR5cGUpKVxuICAgIG11c2ljLmZvckVhY2goaXRlbSA9PiB0aGlzLl9nZXRTb3VuZChpdGVtLnVybCwgaXRlbS5uYW1lLCAnbXVzaWMnKSlcblxuICAgIHRoaXMuX2NhbnBsYXkgPSB0aGlzLl9jYW5wbGF5LmJpbmQodGhpcylcbiAgICB0aGlzLl9lbmRlZCA9IHRoaXMuX2VuZGVkLmJpbmQodGhpcylcbiAgfVxuXG4gIHNldCBtdXNpY1ZvbHVtZSh2YWx1ZSkge1xuICAgIHRoaXMubXVzaWMudm9sdW1lID0gdmFsdWVcbiAgICBpZiAodGhpcy5fcGxheWluZykgdGhpcy5fcGxheWluZy5hdWRpby52b2x1bWUgPSB2YWx1ZVxuICB9XG5cbiAgc2V0IG11c2ljTXV0ZWQodmFsdWUpIHtcbiAgICB0aGlzLm11c2ljLm11dGVkID0gdmFsdWVcbiAgICBpZiAodGhpcy5fcGxheWluZykgdGhpcy5fcGxheWluZy5hdWRpby5tdXRlZCA9IHZhbHVlXG4gICAgdGhpcy5wbGF5KDAsIDEpXG4gIH1cblxuICBwbGF5KHRyYWNrLCBsb29wKSB7XG4gICAgaWYgKHRoaXMubXVzaWMubXV0ZWQpIHJldHVyblxuXG4gICAgaWYgKCF0aGlzLnRyYWNrc1t0cmFja10gfHwgIXRoaXMudHJhY2tzW3RyYWNrXS5yZWFkeSkge1xuICAgICAgY29uc29sZS5sb2coYFBlbmRpbmcgbXVzaWM6ICR7dHJhY2t9LiAke3RoaXMudHJhY2tzW3RyYWNrXSA/IHRoaXMudHJhY2tzW3RyYWNrXS5uYW1lIDogJyd9YClcbiAgICAgIHRoaXMuX3BlbmRpbmcgPSB0cmFja1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYXVkaW8gPSB0aGlzLnRyYWNrc1t0cmFja10uYXVkaW9cbiAgICBhdWRpby52b2x1bWUgPSB0aGlzLm11c2ljLnZvbHVtZVxuICAgIGF1ZGlvLm11dGVkID0gdGhpcy5tdXNpYy5tdXRlZFxuICAgIGF1ZGlvXG4gICAgICAucGxheSgpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGlmIChsb29wKSBhdWRpby5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIHRoaXMuX2VuZGVkKVxuICAgICAgICB0aGlzLl9wbGF5aW5nID0geyB0cmFjaywgYXVkaW8gfVxuICAgICAgICB0aGlzLnN0YXJ0UGxheUNhbGxiYWNrKHRoaXMudHJhY2tzW3RyYWNrXS5uYW1lKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUud2FybihlcnJvcilcbiAgICAgICAgdGhpcy5tdXNpYy5tdXRlZCA9IHRydWVcbiAgICAgICAgdGhpcy5leGNlcHRpb25DYWxsYmFjaygpXG4gICAgICB9KVxuICB9XG5cbiAgdXNlKG5hbWUpIHtcbiAgICBpZiAodGhpcy5zb3VuZC5tdXRlZCkgcmV0dXJuXG4gICAgaWYgKCF0aGlzLnNvdW5kc1tuYW1lXSkge1xuICAgICAgY29uc29sZS53YXJuKGBObyBzb3VuZDogJHtuYW1lfWApXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBhdWRpbyA9IHRoaXMuc291bmRzW25hbWVdW2ldXG4gICAgICBpZiAoYXVkaW8uY3VycmVudFRpbWUgPT09IDAgfHwgYXVkaW8uZW5kZWQpIHtcbiAgICAgICAgYXVkaW8udm9sdW1lID0gdGhpcy5zb3VuZC52b2x1bWVcbiAgICAgICAgYXVkaW8ucGxheSgpLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2F5KG5hbWUpIHtcbiAgICBpZiAodGhpcy5zb3VuZC5tdXRlZCkgcmV0dXJuXG4gICAgaWYgKCF0aGlzLnNwZWVjaFtuYW1lXSkge1xuICAgICAgY29uc29sZS53YXJuKGBObyBzcGVlY2g6ICR7bmFtZX1gKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGF1ZGlvID0gdGhpcy5zcGVlY2hbbmFtZV1bfn4oTWF0aC5yYW5kb20oKSAqIHRoaXMuc3BlZWNoW25hbWVdLmxlbmd0aCldXG4gICAgYXVkaW8udm9sdW1lID0gdGhpcy5zb3VuZC52b2x1bWVcbiAgICBhdWRpby5wbGF5KCkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICB9XG5cbiAgX2dldFNvdW5kKHBhdGgsIG5hbWUsIHR5cGUgPSAwKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBjb25zdCByZXF1ZXN0T2JqID0gbmV3IFJlcXVlc3QocGF0aCwge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0FjY2VwdC1SYW5nZXMnOiAnMTAwMDAwMDAwMCcsXG4gICAgICB9LFxuICAgICAgcmVmZXJyZXJQb2xpY3k6ICduby1yZWZlcnJlcicsXG4gICAgfSlcblxuICAgIGZldGNoKHJlcXVlc3RPYmopXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZSlcbiAgICAgIC50aGVuKGFzeW5jIGZ1bmN0aW9uIChvdXRjb21lKSB7XG4gICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBvdXRjb21lLmJsb2IoKVxuICAgICAgICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKVxuXG4gICAgICAgIHNlbGYuX2xvYWRlZCArPSAxXG4gICAgICAgIHNlbGYucmVhZHkgPSB+figoc2VsZi5fbG9hZGVkIC8gY291bnRUb3RhbCkgKiAxMDApXG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdzcGVlY2gnKSB7XG4gICAgICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oKVxuICAgICAgICAgIGF1ZGlvLnNyYyA9IHVybFxuICAgICAgICAgIHNlbGYuc3BlZWNoW25hbWVdLnB1c2goYXVkaW8pXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ211c2ljJykge1xuICAgICAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKClcbiAgICAgICAgICBhdWRpby5zcmMgPSB1cmxcbiAgICAgICAgICBhdWRpby5sb2NhbEluZm8gPSB7IG5hbWUsIHRyYWNrOiBzZWxmLnRyYWNrcy5sZW5ndGggfVxuICAgICAgICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXknLCBzZWxmLl9jYW5wbGF5KVxuICAgICAgICAgIHNlbGYudHJhY2tzLnB1c2goeyBhdWRpbywgbmFtZSB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYuc291bmRzW25hbWVdID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogdHlwZSA9PT0gJ211bHRpcGxlJyA/IDEwIDogMSB9LCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbygpXG4gICAgICAgICAgICBhdWRpby5zcmMgPSB1cmxcbiAgICAgICAgICAgIHJldHVybiBhdWRpb1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLnJlYWR5Q2FsbGJhY2soc2VsZi5yZWFkeSwgbmFtZSlcbiAgICAgIH0pXG4gIH1cblxuICBfY2FucGxheShldmVudCkge1xuICAgIGV2ZW50LnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdjYW5wbGF5JywgdGhpcy5fY2FucGxheSlcbiAgICBjb25zdCB7IG5hbWUsIHRyYWNrIH0gPSBldmVudC50YXJnZXQubG9jYWxJbmZvXG4gICAgdGhpcy5fbG9hZGVkICs9IDFcbiAgICB0aGlzLnJlYWR5ID0gfn4oKHRoaXMuX2xvYWRlZCAvIGNvdW50VG90YWwpICogMTAwKVxuICAgIHRoaXMudHJhY2tzW3RyYWNrXS5yZWFkeSA9IHRydWVcbiAgICAvLyBjb25zb2xlLmxvZyhgJHt0cmFja30uIENhbiBwbGF5ICcke25hbWV9Jy4gUGVuZGluZzogJHt0aGlzLl9wZW5kaW5nfWApXG5cbiAgICBpZiAodGhpcy5fcGVuZGluZyA9PT0gdHJhY2spIHtcbiAgICAgIHRoaXMucGxheSh0aGlzLl9wZW5kaW5nLCAxKVxuICAgICAgdGhpcy5fcGVuZGluZyA9IG51bGxcbiAgICB9XG4gICAgdGhpcy5yZWFkeUNhbGxiYWNrKHRoaXMucmVhZHksIG5hbWUpXG4gIH1cblxuICBfZW5kZWQoKSB7XG4gICAgaWYgKCF0aGlzLl9wbGF5aW5nKSByZXR1cm5cbiAgICBsZXQgbmV4dCA9ICh0aGlzLl9wbGF5aW5nLnRyYWNrID8/IDApICsgMVxuICAgIGlmIChuZXh0ID49IHRoaXMudHJhY2tzLmxlbmd0aCkgbmV4dCA9IDBcbiAgICB0aGlzLl9wbGF5aW5nID0gbnVsbFxuICAgIHRoaXMucGxheShuZXh0LCAxKVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU3RhdGUge1xuICBzdGF0aWMgX2luc3RhbmNlXG4gIHN0YXRpYyBfY3VycmVudCA9IHtcbiAgICBzdHg6IG51bGwsXG4gICAgcG9pbnRlcjogbnVsbCxcbiAgICBob3ZlcjogbnVsbCxcbiAgICBtb2RlOiAwLFxuICB9XG4gIHN0YXR1cyA9IG51bGxcbiAgbGFuZyA9ICdlbidcbiAgbW9kZVVwZGF0ZUNhbGxiYWNrID0gKCkgPT4ge31cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoIVN0YXRlLl9jdXJyZW50LmN0eCkgdGhpcy5wcmVwYXJlKClcbiAgICBpZiAoU3RhdGUuX2luc3RhbmNlKSByZXR1cm4gU3RhdGUuX2luc3RhbmNlXG4gICAgU3RhdGUuX2luc3RhbmNlID0gdGhpc1xuICB9XG5cbiAgcHJlcGFyZSgpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9fZmllbGQnKVxuICAgIGlmIChjYW52YXMgJiYgY2FudmFzLmdldENvbnRleHQpIHtcbiAgICAgIFN0YXRlLl9jdXJyZW50LmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgfVxuICAgIGNvbnN0IGhvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVfX2hvdmVyJylcbiAgICBpZiAoaG92ZXIgJiYgaG92ZXIuZ2V0Q29udGV4dCkge1xuICAgICAgU3RhdGUuX2N1cnJlbnQuaG92ZXIgPSBob3ZlclxuICAgICAgU3RhdGUuX2N1cnJlbnQucG9pbnRlciA9IGhvdmVyLmdldENvbnRleHQoJzJkJylcbiAgICB9XG4gIH1cblxuICBzZXRNb2RlVXBkYXRlQ2FsbGJhY2soY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xuICAgIHRoaXMubW9kZVVwZGF0ZUNhbGxiYWNrID0gY2FsbGJhY2tcbiAgfVxuXG4gIGdldCBjdHgoKSB7XG4gICAgcmV0dXJuIFN0YXRlLl9jdXJyZW50LmN0eFxuICB9XG4gIGdldCBtb2RlKCkge1xuICAgIHJldHVybiBTdGF0ZS5fY3VycmVudC5tb2RlXG4gIH1cbiAgc2V0IG1vZGUodmFsdWUpIHtcbiAgICBjb25zdCBvbGRWYWx1ZSA9IFN0YXRlLl9jdXJyZW50Lm1vZGVcbiAgICBTdGF0ZS5fY3VycmVudC5tb2RlID0gTnVtYmVyKHZhbHVlKVxuICAgIGlmICh2YWx1ZSAhPT0gb2xkVmFsdWUpIHRoaXMubW9kZVVwZGF0ZUNhbGxiYWNrKClcbiAgfVxuICBnZXQgcG9pbnRlcigpIHtcbiAgICByZXR1cm4gU3RhdGUuX2N1cnJlbnQucG9pbnRlclxuICB9XG4gIGdldCBob3ZlcigpIHtcbiAgICByZXR1cm4gU3RhdGUuX2N1cnJlbnQuaG92ZXJcbiAgfVxufVxuIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB0aGVtZTogbnVsbCxcbiAgbGFuZzogbnVsbCxcbiAgc291bmQ6IHsgdm9sdW1lOiAwLjUsIG11dGVkOiBmYWxzZSB9LFxuICBtdXNpYzogeyB2b2x1bWU6IDAuMywgbXV0ZWQ6IHRydWUgfSxcbiAgcmVjb3JkczogW10sXG4gIHB1enpsZXM6IFtdLFxuICBsYXN0OiB7XG4gICAgZ2FtZTogbnVsbCxcbiAgICBlZGl0b3I6IG51bGwsXG4gIH0sXG59XG5cbi8vIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdOb25vZ3JhbXMnKVxuXG5leHBvcnQgY2xhc3MgU3RvcmUge1xuICBzdGF0aWMgU1RPUkVfTkFNRSA9ICdOb25vZ3JhbXMnXG4gIHN0YXRpYyBfaW5zdGFuY2VcbiAgX3N0YXRlID0ge31cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoU3RvcmUuX2luc3RhbmNlKSByZXR1cm4gU3RvcmUuX2luc3RhbmNlXG4gICAgY29uc3Qgc2F2ZWRTdGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JlLlNUT1JFX05BTUUpXG4gICAgdGhpcy5fc3RhdGUgPSBKU09OLnBhcnNlKHNhdmVkU3RhdGUpID8/IGluaXRpYWxTdGF0ZVxuICAgIFN0b3JlLl9pbnN0YW5jZSA9IHRoaXNcbiAgfVxuXG4gIGdldFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZVxuICB9XG5cbiAgcmVtb3ZlU3RhdGUoKSB7XG4gICAgdGhpcy5fc3RhdGUgPSB7fVxuICAgIHRoaXMuZW1pdCgpXG4gIH1cblxuICBnZXQoaWQpIHtcbiAgICByZXR1cm4gZ2V0VmFsdWUodGhpcy5fc3RhdGUsIGlkKVxuICB9XG5cbiAgc2V0KGlkLCB2YWx1ZSkge1xuICAgIHNldFZhbHVlKHRoaXMuX3N0YXRlLCBpZCwgdmFsdWUpXG4gICAgdGhpcy5lbWl0KClcbiAgfVxuXG4gIGFkZChpZCwgdmFsdWUpIHtcbiAgICBjb25zdCBhcnIgPSBnZXRWYWx1ZSh0aGlzLl9zdGF0ZSwgaWQpXG4gICAgaWYgKGFyciA9PT0gdW5kZWZpbmVkKSBzZXRWYWx1ZSh0aGlzLl9zdGF0ZSwgaWQsIFt2YWx1ZV0pXG4gICAgZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkgdGhyb3cgbmV3IEVycm9yKGBDYW4gbm90IGFkZCB0byAke2lkfWApXG4gICAgZWxzZSBhcnIucHVzaCh2YWx1ZSlcbiAgICB0aGlzLmVtaXQoKVxuICB9XG5cbiAgZW1pdCgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yZS5TVE9SRV9OQU1FLCBKU09OLnN0cmluZ2lmeSh0aGlzLl9zdGF0ZSkpXG4gICAgLy8gY29uc29sZS5sb2coJ3N0YXRlJywgdGhpcy5fc3RhdGUpXG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0VmFsdWUob2JqZWN0LCBwYXRoLCB2YWx1ZSkge1xuICBpZiAob2JqZWN0ICE9PSBPYmplY3Qob2JqZWN0KSkgcmV0dXJuIG9iamVjdFxuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnIHx8IHBhdGggPT09ICcnKSB0aHJvdyBuZXcgRXJyb3IoJ0FwcCBzdG9yZS4gUGF0aCBtdXN0IGJlIHR5cGUgb2Ygc3RyaW5nLicpXG4gIGxldCBvYmogPSBvYmplY3RcbiAgY29uc3QgYXJyID0gcGF0aC5zcGxpdCgnLicpXG4gIGNvbnN0IGxhc3QgPSBhcnIucG9wKClcbiAgYXJyLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAoIW9ialtrZXldKSBvYmpba2V5XSA9IHt9XG4gICAgb2JqID0gb2JqW2tleV1cbiAgfSlcbiAgaWYgKGxhc3QpIG9ialtsYXN0XSA9IHZhbHVlXG4gIHJldHVybiBvYmplY3Rcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBwYXRoKSB7XG4gIGlmIChvYmplY3QgIT09IE9iamVjdChvYmplY3QpIHx8IHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJyB8fCBwYXRoID09PSAnJykge1xuICAgIGNvbnNvbGUud2FybignQXBwIHN0b3JlLiBXcm9uZzonLCBwYXRoKVxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuICByZXR1cm4gcGF0aC5zcGxpdCgnLicpLnJlZHVjZSgob2JqLCBrZXkpID0+IChvYmpba2V5XSAhPT0gdW5kZWZpbmVkID8gb2JqW2tleV0gOiB1bmRlZmluZWQpLCBvYmplY3QpXG59XG4iLCJleHBvcnQgY29uc3QgZ2V0U3lzdGVtVGhlbWUgPSAoKSA9PiB7XG4gIGxldCB0aGVtZSA9ICdsaWdodCdcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5tYXRjaE1lZGlhICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcykgdGhlbWUgPSAnZGFyaydcbiAgcmV0dXJuIHRoZW1lXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTeXN0ZW1MYW5ndWFnZSA9ICgpID0+IHtcbiAgbGV0IGxhbmd1YWdlID0gJ2VuJ1xuICBpZiAobmF2aWdhdG9yPy5sYW5ndWFnZSkgbGFuZ3VhZ2UgPSBuYXZpZ2F0b3IubGFuZ3VhZ2Uuc2xpY2UoMCwgMilcbiAgcmV0dXJuIGxhbmd1YWdlXG59XG4iLCJleHBvcnQgY2xhc3MgVGhlbWUge1xuICBzdGF0aWMgX2luc3RhbmNlXG4gIHRoZW1lTmFtZSA9ICdsaWdodCdcbiAgY29sb3JzID0ge1xuICAgIGNvbG9yMDA6ICcgI2ZmZicsXG4gICAgY29sb3IyMDogJyNjOGM4YzgnLFxuICAgIGNvbG9yMTAwOiAnIzAwMCcsXG4gIH1cbiAgY2FsbGJhY2sgPSAoKSA9PiB7fVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmIChUaGVtZS5faW5zdGFuY2UpIHJldHVybiBUaGVtZS5faW5zdGFuY2VcbiAgICBUaGVtZS5faW5zdGFuY2UgPSB0aGlzXG4gIH1cblxuICBhZGRDYWxsYmFjayhjYWxsYmFjayA9ICgpID0+IHt9KSB7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrXG4gIH1cblxuICBlbWl0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudGhlbWVOYW1lLCAnY29sb3IwMDonLCB0aGlzLmNvbG9ycy5jb2xvcjAwLCAnY29sb3IxMDA6JywgdGhpcy5jb2xvcnMuY29sb3IxMDApXG4gICAgdGhpcy5jYWxsYmFjaygpXG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZU5hbWVcbiAgfVxuICBzZXQgbmFtZSh2YWx1ZSkge1xuICAgIHRoaXMudGhlbWVOYW1lID0gdmFsdWVcbiAgICB0aGlzLmVtaXQoKVxuICB9XG5cbiAgZ2V0IGNvbG9yMDAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3JzLmNvbG9yMDBcbiAgfVxuICBnZXQgY29sb3IxMDAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3JzLmNvbG9yMTAwXG4gIH1cbiAgc2V0IGNvbG9yMDAodmFsdWUpIHtcbiAgICB0aGlzLmNvbG9ycy5jb2xvcjAwID0gdmFsdWVcbiAgfVxuICBzZXQgY29sb3IxMDAodmFsdWUpIHtcbiAgICB0aGlzLmNvbG9ycy5jb2xvcjEwMCA9IHZhbHVlXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==