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
  /* 
  const last = store.get('last')
  if (last.game) start(last.game.mode, last.game.puzzle, last.game)
  else if (last.editor) editor(last.editor)
  else start()
 */
  (0,_module_game__WEBPACK_IMPORTED_MODULE_1__.start)(0)

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
  close.className = 'modal__close hex-btn'
  const closeInner = document.createElement('div')
  const closeImg = document.createElement('div')
  closeImg.className = 'modal__close_icon'
  closeInner.append(closeImg)
  close.append(closeInner)
  close.addEventListener('click', () => modal.classList.add('hidden'))

  const title = document.createElement('h2')
  title.className = 'modal__title'
  title.textContent = _data_loc_json__WEBPACK_IMPORTED_MODULE_2__[lang].aboutTitle

  const wrap = document.createElement('div')
  wrap.className = 'modal__scroll_wrap'
  const descr = document.createElement('div')
  descr.className = 'modal__about_descr scrolled'
  wrap.append(descr)

  _data_loc_json__WEBPACK_IMPORTED_MODULE_2__[lang].description.forEach((block, i) => {
    const article = document.createElement('article')
    const left = document.createElement('div')
    const right = document.createElement('div')
    right.className = `modal__about_img0${i + 1}`
    block.forEach(text => left.append((0,_parser__WEBPACK_IMPORTED_MODULE_1__.parse)(text)))
    article.append(left, right)
    descr.append(article)
  })

  const btn = document.createElement('div')
  btn.className = 'button'
  btn.textContent = 'OK'
  btn.addEventListener('click', () => modal.classList.add('hidden'))

  inner.append(left, right, close, title, wrap, btn)

  const bott = document.createElement('div')
  bott.className = 'modal__bott'

  modal.append(bott, inner)
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
  languages: ['en', 'ru'],
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
/* harmony export */   numbersMatchX: () => (/* binding */ numbersMatchX),
/* harmony export */   numbersMatchY: () => (/* binding */ numbersMatchY),
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

const numbersMatchX = (game, x, match) => {
  const font = 14
  const space = 3
  game.ctx.font = `${font}px arial`
  game.ctx.strokeStyle = match ? 'yellow' : 'gray'
  const st = game.start
  game.ctx.clearRect(st + x * S, st - 1, S, -S * 4)

  let nms = []
  let n = 0
  for (let i = 0; i < game.rows; i += 1) {
    if (game.puzzle[i][x] === 1) n += 1
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

const numbersMatchY = (game, y, match) => {
  const font = 14
  const space = 3
  game.ctx.font = `${font}px arial`
  game.ctx.strokeStyle = match ? 'yellow' : 'gray'
  const st = game.start
  game.ctx.clearRect(st - 1, st + y * S, -S * 4, S)

  let nms = []
  let n = 0
  for (let i = 0; i < game.rows; i += 1) {
    if (game.puzzle[y][i] === 1) n += 1
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
  const bigField = game.status === 'game' && game.rows === 15 ? S : 0
  game.start = m - Math.floor(game.rows / 2) * S - shift + bigField
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

const linesCheck = (x, y) => {
  let matchX = 0
  for (let i = 0; i < game.rows; i += 1) {
    if (game.puzzle[i][x] === (game.arr[i][x] === 1 ? 1 : 0)) matchX += 1
  }
  let matchY = 0
  for (let i = 0; i < game.rows; i += 1) {
    if (game.puzzle[y][i] === (game.arr[y][i] === 1 ? 1 : 0)) matchY += 1
  }

  if (matchX) console.log('Matched: ', x)
  _draw__WEBPACK_IMPORTED_MODULE_5__.numbersMatchX(game, x, matchX === game.rows)
  _draw__WEBPACK_IMPORTED_MODULE_5__.numbersMatchY(game, y, matchY === game.rows)
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
}

const timerUpdate = () => {
  if (game.time) {
    const timer = document.querySelector('.stats__timer')
    const time = ~~((new Date() - game.time) / 1000)
    // const delta = game.pointsTotal * 10 - time
    timer.textContent = (0,_utils_format__WEBPACK_IMPORTED_MODULE_10__.formatTime)(time)

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
      if (point === 2) _draw__WEBPACK_IMPORTED_MODULE_5__.block(game, rx, ry, 0)
      else _draw__WEBPACK_IMPORTED_MODULE_5__.block(game, rx, ry, point)

      if (game.arr[y][x] === 1) sound.use('dot')
      game.current.turns += 1
      if (game.status === 'game') linesCheck(x, y)
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
    game.arr = puzzles.blank(game.mode)
    _draw__WEBPACK_IMPORTED_MODULE_5__.field(game)
    field.classList.remove('flip1')
    field.classList.add('flip2')
    setTimeout(flip2, 300)
  }
  const flip2 = () => {
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
        ;(0,_utils_message__WEBPACK_IMPORTED_MODULE_7__.message)('bulldog', text)
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
      if (mouseOverEl === event.target) (0,_utils_message__WEBPACK_IMPORTED_MODULE_7__.message)('bulldog', 'save')
    }, 250)
  })

  game.init.events = true
}

const editor = fresh => {
  console.log('Start editor')
  document.querySelector('.game').classList.remove('disabled')
  const last = fresh ? null : store.get('last.editor')
  game.status = 'editor'

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
  document.querySelector('.game').classList.remove('disabled')

  game.status = 'game'
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
/* harmony export */   createSideMenu: () => (/* binding */ createSideMenu),
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
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/theme */ "./src/utils/theme.js");
/* harmony import */ var _records__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./records */ "./src/module/records.js");
/* harmony import */ var _data_loc_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/loc.json */ "./src/data/loc.json");











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

const LoadGame = () => {
  const last = store.get('last.game')
  if (last) (0,_game__WEBPACK_IMPORTED_MODULE_0__.start)(last.mode, last.puzzle, last)
  else (0,_utils_message__WEBPACK_IMPORTED_MODULE_4__.message)('bulldog', 'noSavedGame')
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
  ;(0,_records__WEBPACK_IMPORTED_MODULE_8__.updateGameRecords)()
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
  const state = new _utils_state__WEBPACK_IMPORTED_MODULE_1__.State()
  const lang = state.lang
  const component = document.createElement('div')
  component.className = 'modal__puzzle'

  // Left
  const left = document.createElement('div')
  left.className = 'modal__puzzle_left'

  const label1 = document.createElement('span')
  label1.textContent = _data_loc_json__WEBPACK_IMPORTED_MODULE_9__[lang].selectPuzzle

  const wrap = document.createElement('div')
  wrap.className = 'modal__scroll_wrap'

  const select = document.createElement('select')
  select.className = 'modal__puzzle_select scrolled'
  select.size = 10
  select.addEventListener('click', handlePuzzleChange)

  wrap.append(select)
  left.append(label1, wrap)

  // Right
  const right = document.createElement('div')
  right.className = 'modal__puzzle_right'

  const label2 = document.createElement('span')
  label2.textContent = _data_loc_json__WEBPACK_IMPORTED_MODULE_9__[lang].preview

  const preview = document.createElement('div')
  preview.className = 'modal__puzzle_preview-wrap'
  const field = document.createElement('canvas')
  field.className = 'modal__puzzle_preview'
  field.width = 75
  field.height = 75
  field.textContent = 'Preview field'
  preview.append(field)
  right.append(label2, preview)

  component.append(left, right)
  return component
}

const handlePuzzleChange = event => {
  document.querySelector('.modal__game_btn').classList.remove('disabled')
  selectedPuzzle = Number(event.currentTarget.value)
  sound.use('step')
  drawPreview()
}

const drawPreview = () => {
  const theme = new _utils_theme__WEBPACK_IMPORTED_MODULE_7__.Theme()
  const canvas = document.querySelector('.modal__puzzle_preview')
  const ctx = canvas.getContext('2d')
  const arr = puzzles.get(selectedMode, selectedPuzzle).data
  const SIZE = 75
  const S = SIZE / 5 / (selectedMode + 1)
  const rows = arr.length

  ctx.clearRect(0, 0, SIZE, SIZE)
  ctx.fillStyle = theme.color100
  for (let y = 0; y < rows; y += 1) {
    for (let x = 0; x < rows; x += 1) {
      if (arr[y][x]) {
        ctx.fillRect(x * S, y * S, S, S)
      }
    }
  }
}

const handleModeChange = event => {
  const state = new _utils_state__WEBPACK_IMPORTED_MODULE_1__.State()
  // console.log(event.target.value)
  selectedMode = Number(event.target.value)
  sound.use('step')
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
  const bott = document.createElement('div')
  bott.className = 'modal__bott'

  const close = document.createElement('div')
  close.className = 'modal__close hex-btn'
  const closeInner = document.createElement('div')
  const closeImg = document.createElement('div')
  closeImg.className = 'modal__close_icon'
  closeInner.append(closeImg)
  close.append(closeInner)
  close.addEventListener('click', () => modal.classList.add('hidden'))

  const title = document.createElement('h2')
  title.className = 'modal__title'
  title.textContent = _data_loc_json__WEBPACK_IMPORTED_MODULE_9__[lang].startNewGame

  const buttons = document.createElement('div')
  buttons.className = 'modal__buttons'
  const btn = document.createElement('div')
  btn.className = 'modal__game_btn button'
  btn.textContent = _data_loc_json__WEBPACK_IMPORTED_MODULE_9__[lang].start
  btn.addEventListener('click', handleStartClick)
  const rnd = document.createElement('div')
  rnd.className = 'button'
  rnd.textContent = _data_loc_json__WEBPACK_IMPORTED_MODULE_9__[lang].randomGame
  rnd.addEventListener('click', startRandomGame)
  buttons.append(btn, rnd)

  inner.append(left, right, bott, close, title, createModeSelector(), createPuzzleSelector(), buttons)

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
  const bott = document.createElement('div')
  bott.className = 'modal__bott'

  const close = document.createElement('div')
  close.className = 'modal__close hex-btn'
  const closeInner = document.createElement('div')
  const closeImg = document.createElement('div')
  closeImg.className = 'modal__close_icon'
  closeInner.append(closeImg)
  close.append(closeInner)
  close.addEventListener('click', () => modal.classList.add('hidden'))

  const title = document.createElement('h2')
  title.className = 'modal__title'
  title.textContent = _data_loc_json__WEBPACK_IMPORTED_MODULE_9__[lang].win

  const descr = document.createElement('p')
  descr.className = 'modal__reslt_descr'

  const p1 = document.createElement('p')
  p1.className = 'modal__reslt_descr'
  const time = document.createElement('span')
  time.className = 'modal__time'
  time.textContent = '00:00'
  p1.append(document.createTextNode(`${_data_loc_json__WEBPACK_IMPORTED_MODULE_9__[lang].timeUsed}:`), time)

  const p2 = document.createElement('p')
  p2.className = 'modal__reslt_descr'
  const turns = document.createElement('span')
  turns.className = 'modal__turns'
  turns.textContent = '0'
  p2.append(document.createTextNode(`${_data_loc_json__WEBPACK_IMPORTED_MODULE_9__[lang].turnsUsed}:`), turns)

  const p3 = document.createElement('p')
  p3.className = 'modal__reslt_descr'
  const score = document.createElement('span')
  score.className = 'modal__score'
  score.textContent = '0'
  p3.append(document.createTextNode(`${_data_loc_json__WEBPACK_IMPORTED_MODULE_9__[lang].score}:`), score)
  const solution = document.createElement('div')
  solution.className = 'modal__solution'
  solution.textContent = `(${_data_loc_json__WEBPACK_IMPORTED_MODULE_9__[lang].solutionUsed})`

  const shrike = document.createElement('div')
  shrike.className = 'modal__reslt_shrike'

  const btn = document.createElement('div')
  btn.className = 'button'
  btn.textContent = 'OK'
  btn.addEventListener('click', () => modal.classList.add('hidden'))

  inner.append(left, right, bott, close, title, descr, p1, p2, p3, solution, shrike, btn)
  modal.reslt = { title, descr, time, turns, score, shrike, solution }

  modal.append(inner)
  modal.addEventListener('click', handleModalClick)
  return modal
}

const createSideMenu = () => {
  const state = new _utils_state__WEBPACK_IMPORTED_MODULE_1__.State()
  const lang = state.lang
  const items = ['newGame', 'randomGame', 'loadGame', 'editor', 'records', 'about']

  const menu = document.createElement('div')
  menu.className = 'menu__side'
  const right = document.createElement('div')
  right.className = 'menu__side_right'

  const nav = document.createElement('nav')
  nav.className = 'menu__side_nav'
  const list = document.createElement('ul')
  list.className = 'menu__list'

  items.forEach(name => {
    const id = name.match(/^[a-z]+/)[0]
    const item = document.createElement('li')
    item.className = 'menu__list_item'
    item.addEventListener('mouseenter', () => sound.use('step'))

    const btn = document.createElement('div')
    btn.className = 'hex-btn'
    const btnBg = document.createElement('div')
    const btnImg = document.createElement('div')
    btnImg.className = `icon_${id}`
    btnBg.append(btnImg)
    btn.append(btnBg)

    item.append(document.createTextNode(_data_loc_json__WEBPACK_IMPORTED_MODULE_9__[lang][name]), btn)
    list.append(item)
  })

  nav.append(list)
  menu.append(right, nav)
  return menu
}

const initMenu = () => {
  const state = new _utils_state__WEBPACK_IMPORTED_MODULE_1__.State()
  const lang = state.lang

  const menuItems = document.querySelectorAll('.menu__list_item')
  menuItems[0].addEventListener('click', startNewGame)
  menuItems[1].addEventListener('click', startRandomGame)
  menuItems[2].addEventListener('click', LoadGame)
  menuItems[3].addEventListener('click', openEditor)
  menuItems[4].addEventListener('click', showRecords)
  menuItems[5].addEventListener('click', showAbout)

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
  if (text.startsWith('### ')) {
    const h = document.createElement('h3')
    h.textContent = text.substring(4)
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
  player.className = 'player__audio'
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
  // DODO: slice was added to pass a task criteria about "last 5 records". Remove it after the cross-check.
  records
    .sort((a, b) => parseInt(new Date(b.date).getTime() - new Date(a.date).getTime()))
    .slice(0, 5)
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
  const bott = document.createElement('div')
  bott.className = 'modal__bott'

  const close = document.createElement('div')
  close.className = 'modal__close hex-btn'
  const closeInner = document.createElement('div')
  const closeImg = document.createElement('div')
  closeImg.className = 'modal__close_icon'
  closeInner.append(closeImg)
  close.append(closeInner)
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

  inner.append(left, right, bott, close, title, wrap, btn)
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

  document.querySelectorAll('.modal__close_icon').forEach(el => el.classList.toggle('invert', name === 'dark'))

  // Game
  document.querySelector('.game__reset_icon').classList.toggle('invert', name === 'dark')
  document.querySelector('.game__save_icon').classList.toggle('invert', name === 'dark')

  document.querySelector('.rss__logo').classList.toggle('invert', name !== 'dark')
  document.querySelector('.volume__sound_icon').classList.toggle('invert', name !== 'dark')
  document.querySelector('.volume__music_icon').classList.toggle('invert', name !== 'dark')
  document.querySelector('.bg').classList.toggle('bright', name !== 'dark')

  // Side menu
  document.querySelector('.icon_new').classList.toggle('invert', name === 'dark')
  document.querySelector('.icon_random').classList.toggle('invert', name === 'dark')
  document.querySelector('.icon_load').classList.toggle('invert', name === 'dark')
  document.querySelector('.icon_editor').classList.toggle('invert', name === 'dark')
  document.querySelector('.icon_records').classList.toggle('invert', name === 'dark')
  document.querySelector('.icon_about').classList.toggle('invert', name === 'dark')
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
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/theme */ "./src/utils/theme.js");
/* harmony import */ var _module_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../module/constants */ "./src/module/constants.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/module/player.js");
/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mode */ "./src/module/mode.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/module/menu.js");
/* harmony import */ var _records__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./records */ "./src/module/records.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about */ "./src/module/about.js");
/* harmony import */ var _themeUpdate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./themeUpdate */ "./src/module/themeUpdate.js");
/* harmony import */ var _utils_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/state */ "./src/utils/state.js");
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/store */ "./src/utils/store.js");
/* harmony import */ var _data_loc_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data/loc.json */ "./src/data/loc.json");












const theme = new _utils_theme__WEBPACK_IMPORTED_MODULE_0__.Theme()
const store = new _utils_store__WEBPACK_IMPORTED_MODULE_9__.Store()
const state = new _utils_state__WEBPACK_IMPORTED_MODULE_8__.State()
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

  const turns = document.createElement('span')
  turns.className = 'stats__turns'
  turns.textContent = '0/0'

  const pos = document.createElement('span')
  pos.className = 'stats__pos'
  pos.textContent = '0:0'

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

  stats.append(turns, wrap, pos)
  return stats
}

function createGameField() {
  const game = document.createElement('div')
  game.className = 'game'

  const field = document.createElement('canvas')
  field.className = 'game__field'
  field.width = _module_constants__WEBPACK_IMPORTED_MODULE_1__.GAME.size
  field.height = _module_constants__WEBPACK_IMPORTED_MODULE_1__.GAME.size
  field.textContent = 'Game field'

  const hover = document.createElement('canvas')
  hover.className = 'game__hover'
  hover.width = _module_constants__WEBPACK_IMPORTED_MODULE_1__.GAME.size
  hover.height = _module_constants__WEBPACK_IMPORTED_MODULE_1__.GAME.size

  const reset = document.createElement('div')
  reset.className = 'game__reset hex-btn'
  const resetInner = document.createElement('div')
  const resetImg = document.createElement('div')
  resetImg.className = 'game__reset_icon'
  resetInner.append(resetImg)
  reset.append(resetInner)

  const solution = document.createElement('div')
  solution.className = 'game__solution hex-btn'
  const solutionInner = document.createElement('div')
  solutionInner.textContent = '!'
  solution.append(solutionInner)

  const save = document.createElement('div')
  save.className = 'game__save hex-btn'
  const saveInner = document.createElement('div')
  const saveImg = document.createElement('div')
  saveImg.className = 'game__save_icon'
  saveInner.append(saveImg)
  save.append(saveInner)

  const header = document.createElement('div')
  header.className = 'game__header'
  const headerText = document.createElement('p')
  headerText.className = 'game__header_text hidden'
  header.append(headerText, (0,_mode__WEBPACK_IMPORTED_MODULE_3__.createModeSelector)())

  const left = document.createElement('div')
  left.className = 'game__left'
  const right = document.createElement('div')
  right.className = 'game__right'
  const top = document.createElement('div')
  top.className = 'game__top'
  const bott = document.createElement('div')
  bott.className = 'game__bott'

  game.append(header, field, hover, left, right, top, bott, reset, solution, save, createStats(), createSaveForm())
  return game
}

function createSaveForm() {
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
  label.textContent = _data_loc_json__WEBPACK_IMPORTED_MODULE_10__[lang].puzzleName

  name.append(input, label)

  const btn = document.createElement('button')
  btn.type = 'submit'
  btn.className = 'editor__save_btn button'
  btn.textContent = _data_loc_json__WEBPACK_IMPORTED_MODULE_10__[lang].save

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

  main.append(bg, (0,_menu__WEBPACK_IMPORTED_MODULE_4__.createSideMenu)(), (0,_player__WEBPACK_IMPORTED_MODULE_2__.createPlayer)(), base, createChars())
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
  const lang = store.get('lang')
  state.lang = lang
  console.log('lanuage:', lang)
  const themeName = store.get('theme')
  document.body.classList.toggle('theme__dark', themeName === 'dark')

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
      ;(0,_themeUpdate__WEBPACK_IMPORTED_MODULE_7__.themeUpdate)()
    })
  }

  const initLanguageSwitcher = () => {
    const icon = document.querySelector('.language__icon')
    const switcher = document.querySelector('.language__select')
    switcher.value = lang
    icon.className = `language__icon ${lang}`

    switcher.addEventListener('change', event => {
      event.preventDefault()
      store.set('lang', event.target.value)
      location.replace('/')
    })
  }

  const initPendingComponents = () => {
    initThemeSwitcher()
    ;(0,_themeUpdate__WEBPACK_IMPORTED_MODULE_7__.themeUpdate)()
    initLanguageSwitcher()
  }

  document.body.append(
    createFromTemplate('header', initPendingComponents),
    createMain(),
    createFromTemplate('footer', initPendingComponents),
    (0,_menu__WEBPACK_IMPORTED_MODULE_4__.createModalGame)(),
    (0,_menu__WEBPACK_IMPORTED_MODULE_4__.createModalResults)(),
    (0,_records__WEBPACK_IMPORTED_MODULE_5__.createModalRecords)(),
    (0,_about__WEBPACK_IMPORTED_MODULE_6__.createModalAbout)()
  )

  ;(0,_menu__WEBPACK_IMPORTED_MODULE_4__.initMenu)()
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
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/utils/state.js");



const state = new _state__WEBPACK_IMPORTED_MODULE_1__.State()

const timer = {
  shrike: null,
  bulldog: null,
}

const message = (character, id = null, delay = 3000) => {
  const lang = state.lang
  const el = document.querySelector(`.speech__${character}`) // shrike / bulldog
  if (!id) {
    el.classList.add('hidden')
    return
  }
  if (!_data_messages_json__WEBPACK_IMPORTED_MODULE_0__[lang] || !_data_messages_json__WEBPACK_IMPORTED_MODULE_0__[lang][id]) throw new Error('No such message')

  const msg = _data_messages_json__WEBPACK_IMPORTED_MODULE_0__[lang][id]
  const text = Array.isArray(msg) ? msg[~~(Math.random() * msg.length)] : msg
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
    ctx: null,
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
/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system */ "./src/utils/system.js");


const initialState = {
  theme: (0,_system__WEBPACK_IMPORTED_MODULE_0__.getSystemTheme)(),
  lang: (0,_system__WEBPACK_IMPORTED_MODULE_0__.getSystemLanguage)(),
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
/* harmony import */ var _module_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../module/constants */ "./src/module/constants.js");


const getSystemTheme = () => {
  let theme = 'light'
  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) theme = 'dark'
  return theme
}

const getSystemLanguage = () => {
  let language = 'en'
  if (navigator?.language) language = navigator.language.slice(0, 2)
  if (!_module_constants__WEBPACK_IMPORTED_MODULE_0__.GAME.languages.includes(language)) language = 'en'
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

module.exports = JSON.parse('{"en":{"newGame":"New game","randomGame":"Random","loadGame":"Load game","editor":"Editor","records":"Records","about":"About","startNewGame":"Start new game","selectPuzzle":"Select puzzle","preview":"Preview","start":"Start","win":"Win!","loose":"Loose!","timeUsed":"Time","turnsUsed":"Turns","score":"Total score","solutionUsed":"solution used","puzzleName":"Puzzle name","save":"Save","turnsOut":"Your turns is out.","timeOut":"Your time is out.","recordsTitle":"Game records:","aboutTitle":"About:","description":[["In this game your goal is to solve nonograms with Shrike and Bulldog.","Nonograms is a picture logic puzzles in which cells in a grid must be colored or left blank according to numbers at the edges of the grid to reveal a hidden picture."],["### Characters:","Shrike: Have ability to instantly solve current puzzle.","Bulldog: Able to clear field and reset turns count."],["### How to solve:","In this puzzle, the numbers are a form of discrete tomography that measures how many unbroken lines of filled-in squares there are in any given row or column. For example, a clue of \\"4 8 3\\" would mean there are sets of four, eight, and three filled squares, in that order, with at least one blank square between successive sets."],["### Author:","Game was developed by [mrHoft](https://github.com/mrHoft) in 2024 as an educational project of [RSSchool](https://rs.school/) Front-end-s1 course.","Inspirated by [Zeurel](https://www.youtube.com/@Zeurel) \\"[Monkey Wrench](https://www.youtube.com/@MonkeyWrenchSeries)\\".","No TypeScript, React or any other library used (by task rules): only core JS, only hardcore!"]]},"ru":{"newGame":"Новая игра","randomGame":"Случайная","loadGame":"Загрузить","editor":"Редактор","records":"Рекорды","about":"Об игре","startNewGame":"Начать игру","selectPuzzle":"Выбор пазла","preview":"Картинка","start":"Начать","win":"Победа!","loose":"Поражение!","timeUsed":"Время","turnsUsed":"Ходы","score":"Всего набрано","solutionUsed":"использована подсказка","puzzleName":"Название","save":"Сохранить","turnsOut":"Закончились ходы.","timeOut":"Закончилось время.","recordsTitle":"Рекорды:","aboutTitle":"Об игре:","description":[["Суть игры в решении нонограм вместе со Шрайком и Буллдогом.","Нонограммы это логическая игра - пазл, в которой нужно закрасить клетки в соответствии с цифрами на полях чтобы получить скрытую картинку."],["### Персонажи:","Шрайк: Обладает способностью мгновенно решить пазл.","Буллдог: Может очистить поле и сбросить счётчик ходов."],["### Как решать пазлы:","В этой головоломке числа показывают сколько непрерывных линий заполненных ячеек имеется в любой строке или столбце. Например, подсказка «4 8 3» будет означать, что существуют наборы из четырех, восьми и трех заполненных ячеек в этом порядке, и по крайней мере с одниой пустой ячейкой между ними."],["### Автор:","Игру создал [mrHoft](https://github.com/mrHoft) в 2024 году в рамках образовательного проекта курса [RSSchool](https://rs.school/) Front-end-s1.","Вдохновлено анимационным сериалом \\"[Monkey Wrench](https://www.youtube.com/@MonkeyWrenchSeries)\\" от [Zeurel](https://www.youtube.com/@Zeurel).","Не использованы ни TypeScript, ни React или какие-либо вообще библиотеки (по условиям задачи): только core JS, только хардкор!"]]}}');

/***/ }),

/***/ "./src/data/messages.json":
/*!********************************!*\
  !*** ./src/data/messages.json ***!
  \********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"en":{"reset":["Yep! Let\'s clear this field.","Clearing field also resets your turns."],"solution":["Using solution make you impossible to score this puzzle.","It is solution option. Using it prevent you to score your result!"],"save":["Want to save this game?","Wanna save your state?","Saves current game."],"blank-filed":["...this field is still empty.","There is still nothing in the field."],"adequateName":"...consider to use adequate name for a new puzzle.","duplicateName":["This name is already used.","Come up with something new."],"editorNew":["Let\'s create own puzzle!","Show your creative skills!","OK, let\'s get creative."],"gameNew":["Wanna play?","OK, let\'s do this!","Time to solve this puzzle!","What we have here?","It will be easy!","Ready for action?","Let\'s solve this puzzle!"],"attemtsHalf":["Used half of maximum turns!","Keep track of the attempts used."],"unknown":["What are you trying to do?","What are you trying to achieve with this?","Hm-m-m... What?"],"noSavedGame":["No saved games.","Need to save something first.","No saved records."],"lastGameRecovered":["Recovered last attempt.","Welcome back!","We have uncomplete task here."]},"ru":{"reset":["Да! Давай очистим.","Очистка поля также сбрасывает ходы."],"solution":["Активация подсказки сделает невозможным завершить головоломку.","Показать решение? Использование не позволит продолжить!"],"save":["Сохранить эту игру?","Сохранить текущее состояние?","Сохраняет текущую игру."],"blank-filed":["...это поле все еще пусто.","На поле ещё ничего нет."],"adequateName":"...стоит придумать адекватное название для новой головоломки.","duulateName":["Это имя уже используется.","Придумай что-нибудь новое."],"editorNew":["Давай создадим собственную головоломку!","Прояви творческие способности!","Давай проявим творческий подход."],"gameNew":["Хочешь сыграть?","Ладно, давай сделаем это!","Время решить эту головоломку!","Что у нас здесь?","Это будет легко!","Готов к действию?","Давай разгадаем эту головоломку!"],"attemtsHalf":["Использована половина максимального количества ходов!","Следи за использованными ходами."],"unknown":["Что ты пытаешься сделать?","Чего ты пытаешься этим добиться?","Хм-м-м... Чего?"],"noSavedGame":["Нет сохраненных игр.","Сначала нужно что-то сохранить.","Нет сохраненных записей."],"lastGameRecovered":["Восстановлена последняя попытка.","С возвращением!","У нас есть невыполненная задача."]}}');

/***/ }),

/***/ "./src/data/puzzle.json":
/*!******************************!*\
  !*** ./src/data/puzzle.json ***!
  \******************************/
/***/ ((module) => {

module.exports = JSON.parse('[[{"name":"Monkey","data":"0111011111101010111000100"},{"name":"Wrench","data":"0001000111001100100010000"},{"name":"Whell","data":"0111010001101011000101110"},{"name":"Arrow","data":"0011100011001010100010000"},{"name":"Smile","data":"0000001010000001000101110"},{"name":"House","data":"0010001110111110101001110"},{"name":"Barrette","data":"0100011000001000001100010"},{"name":"Sun","data":"1010101110110110111010101"},{"name":"Gear","data":"0010001110110110111000100"},{"name":"Scratches","data":"0100010001001100100010000"},{"name":"Car","data":"0000001110111110101000000"},{"name":"Duck","data":"0011000111110110011000100"},{"name":"Lizard","data":"1010101110001000111010101"},{"name":"Clock","data":"0111011011110011111101110"},{"name":"Diskette","data":"1111011111100011010111111"},{"name":"Alien","data":"1111110101111111111101010"},{"name":"Mouse","data":"0011001111111010111101010"},{"name":"Heart","data":"0101010101100010101000100"},{"name":"Head","data":"0111011111101011111101110"},{"name":"Snail","data":"0110010010101001000101110"},{"name":"Horse","data":"0001100010111101001010010"}],[{"name":"Mail","data":"0000110000000100100000100001000100000010110000001110100001011001001001100011000110000000011111111111"},{"name":"Lamp","data":"0001111000001000010000100001000010000100000111100000000000000001111000000000000000011110000000110000"},{"name":"Key","data":"0000000000000000000000000011100000010001111111000101010100010000001110000000000000000000000000000000"},{"name":"Phone","data":"0000000100001111110000100001000010000100001111110000101011000011010100001010110000110101000011111100"},{"name":"Boobs","data":"0000000000000000000001110011101000110001100000000110100001011000110001011100111000000000000000000000"},{"name":"Boy","data":"0000110000000100100000010010000000110000111111111100111111000001111000000111100000010010000001001000"},{"name":"Bug","data":"0010000100001000010000010010000010110100011000011010100001010010000100000100100000101101000010000100"},{"name":"Ball","data":"0000110000001111110001101111100101111110110111111111111111110111111110011111111000111111000000110000"},{"name":"Vial","data":"0000110000000111100000001100000000110000000111100000111111000111111010111111110111111111110111111110"},{"name":"Copter","data":"0001111111000000100010000111101111100111100000011111110000010000100001000001111000000000000000111111"},{"name":"Scull","data":"0001111000011000011010000000011011001101101100110110010010010100000010010000001001010010100011111100"},{"name":"Smile","data":"0001111000011111111001111111101100000011110011001111111111111101111011011000011001111111100001111000"},{"name":"Booger","data":"0000000000110000001100100001000011111100001011011001111111110111111111001010101000101010100000000000"},{"name":"Duck","data":"0000000000000110000000111100000010110000111111000101111111110001111111000111111000001111000000000000"},{"name":"Bell","data":"0000110000000100100000100001000010000100001000010000111111000100110010100011000101000000100011111100"},{"name":"Coin","data":"0001111000011000011001011110101011111101101111110110111111011011111101010111101001100001100001111000"},{"name":"Cup","data":"0001000000000010000000010000001111111111100000010110000001010100001010001111000011111111000000000000"},{"name":"TV set","data":"0001001000000011000001111111101000000111100000010110000001111000000101100000011111111111110111111110"},{"name":"Dog","data":"0000000000000100000011110000011111111110001111111000111111100010000010011000011000000000000000000000"},{"name":"Cat","data":"0000000000100010000011111000001010100000011100000100100000010111100001011111111011111111100000000000"},{"name":"Bird","data":"0000000000001110000001111000001101100000011111000001111111000111111111011111110001111000000001000000"},{"name":"Skate","data":"0001100000000110000011001000000011111100000011101000001110000000111100000100001111111111000010010000"}],[{"name":"TV set","data":"000100000001000000010000010000000001000100000000000101000000111111111111111111111111111111110000000000111110000000000101110000000000111110000000000101110000000000111110000000000111111111111111111111111111111111000000000000000"},{"name":"Key","data":"000000000000000000000000000000000000000000000000000000000000011111000000000100000100000000100100111111111101110100000001100100111001001100000100110110011111000000000000000000000000000000000000000000000000000000000000000000000"},{"name":"Cart","data":"000000000000000000000000000000000000000000000110000000000000111000000000000000111111111111000100000000001000100000000001000011111111110000010000000010000001000000100000001111111100000000000000000000001100001100000001100001100"},{"name":"Fish","data":"000000000000000000000000000000000000011110000000111111110001001000001100011010000000111101100001000000001100100100000010100000100000010100001000000001100000001111111010000011000001001111111110000000000000000000000000000000000"},{"name":"Lamp","data":"000000111000000000001000100000000011111110000000010000011111110011111110001101100000000101101000000000101100000000000101010000000011101001000000000001000111000111111000001000100000000010000010000000100000001000000111111111000"},{"name":"Cat","data":"111000000000111100100000001001100010000010001100001000100001100001000100001100001111100001100000000000001010000000000010010100000001010100100000001001100000010000001100000111000001100000000000001011000000000110000111111111000"},{"name":"Gemm","data":"000000000000000000000000000000000111111111000001000000000100010000000000010100000000000001101111110000001100111110000001010011110000010001001110000100000100110001000000010010010000000001000100000000000111000000000000000000000"},{"name":"Ham","data":"000111110000000011000001000000010000000100000100110001010000100110001010000100000010010000100000100010000100001000010000010110000010000001000000001000000111111000100000000000100011000000000010001000000000001010000000000001100"},{"name":"Coffee cup","data":"000001111100000000111111111000001110000011100001100000001111001110000011101001001111100101001000000000101011000000000101101000000000110100100000001001100010000010001100001111100001011000000000110000110000011000000001111100000"},{"name":"Ball","data":"000000111000000000011000110000000100000001000001010000000100010010000000010010001000000010100001000000001100000100000001100000010000001010000001100010010000000011010001000000000100000100000001000000011000110000000000111000000"},{"name":"Cube","data":"000111111111110001000000000001010000110000011100000000000101111111111111001100000000001101100000000001101100110011001001100110011001001100000000001011100110011001011100110011001001100000000001010100000000001100011111111111000"},{"name":"Cute","data":"011100000001110111110000011111111111111111111011000000000110010000000000010100000000000001100000000000001100110000011001100110000011001100110000011001100000111000001100000000000001110000000000011111111111111111011111111111110"},{"name":"Lock","data":"000011111110000000100000001000000100000001000000100000001000001111111111100110100000001011101111111111101100000000000001100000000000001100000111000001100000010000001100000010000001100000010000001110000000000011001111111111100"},{"name":"Umbrella","data":"000000010000000000001111100000000111111111000011111111111110111111111111111000000010000000000000010000000000000010000000000000010000000000000010000000000000010000000000000010000000000000010000000000000010100000000000001000000"},{"name":"Mushroom","data":"000000000000000000001111100000000111111111000011100111111110111100111001111111111111001111001111111111100000000111000000000000111000000000000111000000000000111000000000000111000000000000111000000000000111000000000000000000000"},{"name":"Heart","data":"111111111111111111111111111111111111111111111111000111000111110000010000011100000000000001100000000000001100000000000001110000000000011111000000000111111100000001111111110000011111111111000111111111111101111111111111111111111"},{"name":"Bus","data":"000000000000000001111111111100010000000000010100000000000001100000000000001100000000000001100000000000001100000000000001100000000000001111111111111111111001111100111111001111100111111111111111111000110000011000000000000000000"},{"name":"Plain","data":"000000010000000000000111000000000000111000000000000111000000000000111000000000100111001000000100111001000000111111111000011111111111110111111111111111000000111000000000000111000000000000111000000000000111000000000001111100000"},{"name":"Rocket","data":"000000010000000000000111000000000001111100000000001101100000000001111100000000001101100000000001111100000000001111100000000001111100000000011111110000000111111111000000110000011000000100111001000000000111000000000000010000000"},{"name":"World","data":"000001111100000000110000011000001001000000100010000110000010010000001000010100000001000101111100000100101100010000100101100010000101001100100000010001010011110000010010000010000010001000010000100000110100011000000001111100000"},{"name":"Leaf","data":"000000000000001000000000000011000000000011111000000001111101000000111111011000011111110111000111111101110001111111011110001111100111100011111011111000011110111111000001101111110000001111111100000011001110000000110000000000000"},{"name":"Squirrel","data":"000000111000000000001001001100000011001010100000110000010110001100000100011011001111000101010110000010001010100000011111010100011000010010100001111100010000001100000001000011110000000101110011111111100001111111111111111000000"}]]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/app.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyI6WyJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvbW9kdWxlL2Fib3V0LmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9tb2R1bGUvY29uc3RhbnRzLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9tb2R1bGUvZHJhdy5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvbW9kdWxlL2dhbWUuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL21vZHVsZS9tZW51LmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9tb2R1bGUvbW9kZS5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvbW9kdWxlL3BhcnNlci5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvbW9kdWxlL3BsYXllci5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvbW9kdWxlL3JlY29yZHMuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL21vZHVsZS9yZXN1bHRzLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy9tb2R1bGUvdGhlbWVVcGRhdGUuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL21vZHVsZS91aS5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvbW9kdWxlL3ZvbHVtZS5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvdXRpbHMvYmFzZS5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvdXRpbHMvZm9ybWF0LmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy91dGlscy9tZXNzYWdlLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy91dGlscy9zb3VuZC5qcyIsIndlYnBhY2s6Ly9ub25vZ3JhbXMvLi9zcmMvdXRpbHMvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL3V0aWxzL3N0b3JlLmpzIiwid2VicGFjazovL25vbm9ncmFtcy8uL3NyYy91dGlscy9zeXN0ZW0uanMiLCJ3ZWJwYWNrOi8vbm9ub2dyYW1zLy4vc3JjL3V0aWxzL3RoZW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRVSSB9IGZyb20gJy4vbW9kdWxlL3VpJ1xuaW1wb3J0IHsgc3RhcnQsIGVkaXRvciB9IGZyb20gJy4vbW9kdWxlL2dhbWUnXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJy4vdXRpbHMvc3RvcmUnXG5pbXBvcnQgeyBQdXp6bGVzIH0gZnJvbSAnLi91dGlscy9iYXNlJ1xuaW1wb3J0IHsgU291bmQgfSBmcm9tICcuL3V0aWxzL3NvdW5kJ1xuXG5jb25zdCBzb3VuZCA9IG5ldyBTb3VuZCgpXG5jb25zdCBwdXp6bGVzID0gbmV3IFB1enpsZXMoKVxuY29uc3Qgc3RvcmUgPSBuZXcgU3RvcmUoKVxuXG5mdW5jdGlvbiBnYW1lU3RhcnQoKSB7XG4gIGNvbnN0IGN1c3RvbSA9IHN0b3JlLmdldCgncHV6emxlcycpXG4gIGlmIChjdXN0b20gJiYgY3VzdG9tLmxlbmd0aCA+IDApIHtcbiAgICBjdXN0b20uZm9yRWFjaChpdGVtID0+IHB1enpsZXMuYWRkKGl0ZW0ubmFtZSwgaXRlbS5wdXp6bGUpKVxuICB9XG4gIC8qIFxuICBjb25zdCBsYXN0ID0gc3RvcmUuZ2V0KCdsYXN0JylcbiAgaWYgKGxhc3QuZ2FtZSkgc3RhcnQobGFzdC5nYW1lLm1vZGUsIGxhc3QuZ2FtZS5wdXp6bGUsIGxhc3QuZ2FtZSlcbiAgZWxzZSBpZiAobGFzdC5lZGl0b3IpIGVkaXRvcihsYXN0LmVkaXRvcilcbiAgZWxzZSBzdGFydCgpXG4gKi9cbiAgc3RhcnQoMClcblxuICBzb3VuZC5wbGF5KDAsIDEpXG59XG5cbmZ1bmN0aW9uIHByZXBhcmUoKSB7XG4gIGluaXRVSSgpXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZ2FtZVN0YXJ0KVxufVxuXG5wcmVwYXJlKClcbiIsImltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vdXRpbHMvc3RhdGUnXG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJy4vcGFyc2VyJ1xuaW1wb3J0IExvYyBmcm9tICcuLi9kYXRhL2xvYy5qc29uJyBhc3NlcnQgeyB0eXBlOiAnanNvbicgfVxuXG5leHBvcnQgY29uc3QgY3JlYXRlTW9kYWxBYm91dCA9ICgpID0+IHtcbiAgY29uc3Qgc3RhdGUgPSBuZXcgU3RhdGUoKVxuICBjb25zdCBsYW5nID0gc3RhdGUubGFuZ1xuXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbW9kYWwuY2xhc3NOYW1lID0gJ21vZGFsX19hYm91dCBoaWRkZW4nXG4gIGNvbnN0IGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaW5uZXIuY2xhc3NOYW1lID0gJ21vZGFsX19pbm5lcidcbiAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGxlZnQuY2xhc3NOYW1lID0gJ21vZGFsX19sZWZ0J1xuICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHJpZ2h0LmNsYXNzTmFtZSA9ICdtb2RhbF9fcmlnaHQnXG5cbiAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjbG9zZS5jbGFzc05hbWUgPSAnbW9kYWxfX2Nsb3NlIGhleC1idG4nXG4gIGNvbnN0IGNsb3NlSW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCBjbG9zZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNsb3NlSW1nLmNsYXNzTmFtZSA9ICdtb2RhbF9fY2xvc2VfaWNvbidcbiAgY2xvc2VJbm5lci5hcHBlbmQoY2xvc2VJbWcpXG4gIGNsb3NlLmFwcGVuZChjbG9zZUlubmVyKVxuICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpKVxuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICB0aXRsZS5jbGFzc05hbWUgPSAnbW9kYWxfX3RpdGxlJ1xuICB0aXRsZS50ZXh0Q29udGVudCA9IExvY1tsYW5nXS5hYm91dFRpdGxlXG5cbiAgY29uc3Qgd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHdyYXAuY2xhc3NOYW1lID0gJ21vZGFsX19zY3JvbGxfd3JhcCdcbiAgY29uc3QgZGVzY3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBkZXNjci5jbGFzc05hbWUgPSAnbW9kYWxfX2Fib3V0X2Rlc2NyIHNjcm9sbGVkJ1xuICB3cmFwLmFwcGVuZChkZXNjcilcblxuICBMb2NbbGFuZ10uZGVzY3JpcHRpb24uZm9yRWFjaCgoYmxvY2ssIGkpID0+IHtcbiAgICBjb25zdCBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpXG4gICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHJpZ2h0LmNsYXNzTmFtZSA9IGBtb2RhbF9fYWJvdXRfaW1nMCR7aSArIDF9YFxuICAgIGJsb2NrLmZvckVhY2godGV4dCA9PiBsZWZ0LmFwcGVuZChwYXJzZSh0ZXh0KSkpXG4gICAgYXJ0aWNsZS5hcHBlbmQobGVmdCwgcmlnaHQpXG4gICAgZGVzY3IuYXBwZW5kKGFydGljbGUpXG4gIH0pXG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYnRuLmNsYXNzTmFtZSA9ICdidXR0b24nXG4gIGJ0bi50ZXh0Q29udGVudCA9ICdPSydcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJykpXG5cbiAgaW5uZXIuYXBwZW5kKGxlZnQsIHJpZ2h0LCBjbG9zZSwgdGl0bGUsIHdyYXAsIGJ0bilcblxuICBjb25zdCBib3R0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYm90dC5jbGFzc05hbWUgPSAnbW9kYWxfX2JvdHQnXG5cbiAgbW9kYWwuYXBwZW5kKGJvdHQsIGlubmVyKVxuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICB9XG4gIH0pXG4gIHJldHVybiBtb2RhbFxufVxuIiwiZXhwb3J0IGNvbnN0IEdBTUUgPSB7XG4gIHNpemU6IDYwMCxcbiAgc2l6ZTIwZGVnOiA3MjMuNzcyMzM4ODY3MTg3NSxcbiAgYmxvY2tTaXplOiAzMCxcbiAgc3BmOiB+figxMDAwIC8gNjApLFxuICBtb2RlczogWyc1eDUnLCAnMTB4MTAnLCAnMTV4MTUnXSxcbiAgbGFuZ3VhZ2VzOiBbJ2VuJywgJ3J1J10sXG59XG4iLCJpbXBvcnQgeyBHQU1FIH0gZnJvbSAnLi9jb25zdGFudHMnXG5cbmNvbnN0IFMgPSBHQU1FLmJsb2NrU2l6ZVxuY29uc3Qgc3BmID0gR0FNRS5zcGZcblxuZXhwb3J0IGNvbnN0IGZpZWxkID0gZ2FtZSA9PiB7XG4gIGdhbWUuY3R4LmNsZWFyUmVjdCgwLCAwLCBHQU1FLnNpemUsIEdBTUUuc2l6ZSlcbiAgZ2FtZS5jdHguc3Ryb2tlU3R5bGUgPSBnYW1lLmNvbG9yODBcbiAgZ2FtZS5jdHguYmVnaW5QYXRoKClcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gZ2FtZS5yb3dzOyBpICs9IDEpIHtcbiAgICBnYW1lLmN0eC5tb3ZlVG8oZ2FtZS5zdGFydCArIGkgKiBTLCBnYW1lLnN0YXJ0KVxuICAgIGdhbWUuY3R4LmxpbmVUbyhnYW1lLnN0YXJ0ICsgaSAqIFMsIGdhbWUuc3RhcnQgKyBnYW1lLnJvd3MgKiBTKVxuICAgIGdhbWUuY3R4Lm1vdmVUbyhnYW1lLnN0YXJ0LCBnYW1lLnN0YXJ0ICsgaSAqIFMpXG4gICAgZ2FtZS5jdHgubGluZVRvKGdhbWUuc3RhcnQgKyBnYW1lLnJvd3MgKiBTLCBnYW1lLnN0YXJ0ICsgaSAqIFMpXG4gIH1cbiAgZ2FtZS5jdHguc3Ryb2tlKClcblxuICBnYW1lLmN0eC5zdHJva2VTdHlsZSA9IGdhbWUuY29sb3IxMDBcbiAgZ2FtZS5jdHguYmVnaW5QYXRoKClcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gZ2FtZS5yb3dzOyBpICs9IDUpIHtcbiAgICBnYW1lLmN0eC5tb3ZlVG8oZ2FtZS5zdGFydCArIGkgKiBTLCBnYW1lLnN0YXJ0KVxuICAgIGdhbWUuY3R4LmxpbmVUbyhnYW1lLnN0YXJ0ICsgaSAqIFMsIGdhbWUuc3RhcnQgKyBnYW1lLnJvd3MgKiBTKVxuICAgIGdhbWUuY3R4Lm1vdmVUbyhnYW1lLnN0YXJ0LCBnYW1lLnN0YXJ0ICsgaSAqIFMpXG4gICAgZ2FtZS5jdHgubGluZVRvKGdhbWUuc3RhcnQgKyBnYW1lLnJvd3MgKiBTLCBnYW1lLnN0YXJ0ICsgaSAqIFMpXG4gIH1cbiAgZ2FtZS5jdHguc3Ryb2tlKClcbn1cblxuZXhwb3J0IGNvbnN0IGZpZWxkRmlsbCA9IGdhbWUgPT4ge1xuICBjb25zdCBzdCA9IGdhbWUuc3RhcnRcbiAgZm9yIChsZXQgeSA9IDA7IHkgPCBnYW1lLnJvd3M7IHkgKz0gMSkge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgZ2FtZS5yb3dzOyB4ICs9IDEpIHtcbiAgICAgIGNvbnN0IHJ4ID0gc3QgKyB4ICogU1xuICAgICAgY29uc3QgcnkgPSBzdCArIHkgKiBTXG4gICAgICBpZiAoZ2FtZS5hcnJbeV1beF0gPT09IDEpIHtcbiAgICAgICAgZ2FtZS5jdHguZmlsbFN0eWxlID0gZ2FtZS5jb2xvcjEwMFxuICAgICAgICBnYW1lLmN0eC5maWxsUmVjdChyeCArIDEsIHJ5ICsgMSwgUyAtIDIsIFMgLSAyKVxuICAgICAgfVxuICAgICAgaWYgKGdhbWUuYXJyW3ldW3hdID09PSAyKSBjcm9zcyhnYW1lLCByeCwgcnkpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzb2x1dGlvbiA9IGdhbWUgPT4ge1xuICBjb25zdCBzdCA9IGdhbWUuc3RhcnRcbiAgZm9yIChsZXQgeSA9IDA7IHkgPCBnYW1lLnJvd3M7IHkgKz0gMSkge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgZ2FtZS5yb3dzOyB4ICs9IDEpIHtcbiAgICAgIGNvbnN0IHJ4ID0gc3QgKyB4ICogU1xuICAgICAgY29uc3QgcnkgPSBzdCArIHkgKiBTXG4gICAgICBpZiAoZ2FtZS5wdXp6bGVbeV1beF0gPT09IDAgJiYgZ2FtZS5hcnJbeV1beF0gPT09IDEpIHtcbiAgICAgICAgY3Jvc3NSZWQoZ2FtZSwgcngsIHJ5KVxuICAgICAgfVxuICAgICAgaWYgKGdhbWUucHV6emxlW3ldW3hdID09PSAxICYmIGdhbWUuYXJyW3ldW3hdICE9PSAxKSB7XG4gICAgICAgIGdhbWUuY3R4LmZpbGxTdHlsZSA9ICd5ZWxsb3cnXG4gICAgICAgIGdhbWUuY3R4LmZpbGxSZWN0KHJ4ICsgMSwgcnkgKyAxLCBTIC0gMiwgUyAtIDIpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwb2ludGVyID0gKGdhbWUsIHgsIHkpID0+IHtcbiAgZ2FtZS5wb2ludGVyLmNsZWFyUmVjdCgwLCAwLCBHQU1FLnNpemUsIEdBTUUuc2l6ZSlcbiAgaWYgKHggIT09IC0xICYmIHkgIT09IC0xKSB7XG4gICAgY29uc3Qgc3QgPSBnYW1lLnN0YXJ0XG4gICAgY29uc3QgcnggPSBzdCArIHggKiBTXG4gICAgY29uc3QgcnkgPSBzdCArIHkgKiBTXG4gICAgZ2FtZS5wb2ludGVyLmZpbGxTdHlsZSA9IGdhbWUuY29sb3IxMDBcbiAgICBnYW1lLnBvaW50ZXIuZmlsbFJlY3QocngsIHN0LCBTLCBnYW1lLnJvd3MgKiBTKVxuICAgIGdhbWUucG9pbnRlci5maWxsUmVjdChzdCwgcnksIGdhbWUucm93cyAqIFMsIFMpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGJsb2NrID0gKGdhbWUsIHgsIHksIHBvaW50KSA9PiB7XG4gIGxldCBzaXplID0gcG9pbnQgKiAoUyAtIDQpXG4gIGNvbnN0IGRyYXcgPSAoKSA9PiB7XG4gICAgZ2FtZS5jdHguY2xlYXJSZWN0KHggKyAxLCB5ICsgMSwgUyAtIDIsIFMgLSAyKVxuICAgIGdhbWUuY3R4LmZpbGxTdHlsZSA9IGdhbWUuY29sb3IxMDBcbiAgICBnYW1lLmN0eC5maWxsUmVjdCh4ICsgUyAvIDIgLSBzaXplIC8gMiwgeSArIFMgLyAyIC0gc2l6ZSAvIDIsIHNpemUsIHNpemUpXG4gICAgc2l6ZSArPSBwb2ludCA/IC00IDogNFxuICAgIGlmIChzaXplID4gMCAmJiBzaXplIDwgUykgc2V0VGltZW91dChkcmF3LCBzcGYpXG4gICAgZWxzZSB7XG4gICAgICBpZiAocG9pbnQgIT09IDEpIGdhbWUuY3R4LmZpbGxSZWN0KHggKyAxLCB5ICsgMSwgUyAtIDIsIFMgLSAyKVxuICAgICAgZWxzZSBnYW1lLmN0eC5jbGVhclJlY3QoeCArIDEsIHkgKyAxLCBTIC0gMiwgUyAtIDIpXG4gICAgfVxuICB9XG4gIGRyYXcoKVxufVxuXG5leHBvcnQgY29uc3QgY3Jvc3MgPSAoZ2FtZSwgeCwgeSwgcG9pbnQgPSAwKSA9PiB7XG4gIGdhbWUuY3R4LmNsZWFyUmVjdCh4ICsgMSwgeSArIDEsIFMgLSAyLCBTIC0gMilcbiAgaWYgKHBvaW50ID09PSAyKSByZXR1cm5cbiAgY29uc3QgZCA9IFMgLyA0XG4gIGdhbWUuY3R4LnN0cm9rZVN0eWxlID0gZ2FtZS5jb2xvcjEwMFxuICBnYW1lLmN0eC5iZWdpblBhdGgoKVxuICBnYW1lLmN0eC5tb3ZlVG8oeCArIGQsIHkgKyBkKVxuICBnYW1lLmN0eC5saW5lVG8oeCArIFMgLSBkLCB5ICsgUyAtIGQpXG4gIGdhbWUuY3R4Lm1vdmVUbyh4ICsgUyAtIGQsIHkgKyBkKVxuICBnYW1lLmN0eC5saW5lVG8oeCArIGQsIHkgKyBTIC0gZClcbiAgZ2FtZS5jdHguc3Ryb2tlKClcbn1cblxuZXhwb3J0IGNvbnN0IGNyb3NzUmVkID0gKGdhbWUsIHgsIHkpID0+IHtcbiAgZ2FtZS5jdHguY2xlYXJSZWN0KHggKyAxLCB5ICsgMSwgUyAtIDIsIFMgLSAyKVxuICBjb25zdCBkID0gUyAvIDRcbiAgZ2FtZS5jdHguc3Ryb2tlU3R5bGUgPSAncmVkJ1xuICBnYW1lLmN0eC5iZWdpblBhdGgoKVxuICBnYW1lLmN0eC5tb3ZlVG8oeCArIGQsIHkgKyBkKVxuICBnYW1lLmN0eC5saW5lVG8oeCArIFMgLSBkLCB5ICsgUyAtIGQpXG4gIGdhbWUuY3R4Lm1vdmVUbyh4ICsgUyAtIGQsIHkgKyBkKVxuICBnYW1lLmN0eC5saW5lVG8oeCArIGQsIHkgKyBTIC0gZClcbiAgZ2FtZS5jdHguc3Ryb2tlKClcbn1cblxuZXhwb3J0IGNvbnN0IG51bWJlcnMgPSBnYW1lID0+IHtcbiAgY29uc3QgZm9udCA9IDE0XG4gIGNvbnN0IHNwYWNlID0gM1xuICBnYW1lLmN0eC5mb250ID0gYCR7Zm9udH1weCBhcmlhbGBcbiAgZ2FtZS5jdHguc3Ryb2tlU3R5bGUgPSAnZ3JheScgLy9nYW1lLmNvbG9yNTBcbiAgY29uc3Qgc3QgPSBnYW1lLnN0YXJ0XG5cbiAgZm9yIChsZXQgeCA9IDA7IHggPCBnYW1lLnJvd3M7IHggKz0gMSkge1xuICAgIGxldCBubXMgPSBbXVxuICAgIGxldCBuID0gMFxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgZ2FtZS5yb3dzOyB5ICs9IDEpIHtcbiAgICAgIGlmIChnYW1lLnB1enpsZVt5XVt4XSA9PT0gMSkgbiArPSAxXG4gICAgICBlbHNlIGlmIChuID4gMCkge1xuICAgICAgICBubXMucHVzaChuKVxuICAgICAgICBuID0gMFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAobiA+IDApIG5tcy5wdXNoKG4pXG5cbiAgICBubXMucmV2ZXJzZSgpLmZvckVhY2goKG4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHJ4ID0gc3QgKyB4ICogUyArIChTIC0gZm9udCkgLyAyXG4gICAgICBnYW1lLmN0eC5zdHJva2VUZXh0KG4sIHJ4LCBzdCAtIFMgLyAyIC0gaSAqIChmb250ICsgc3BhY2UpKVxuICAgIH0pXG4gIH1cblxuICBmb3IgKGxldCB5ID0gMDsgeSA8IGdhbWUucm93czsgeSArPSAxKSB7XG4gICAgbGV0IG5tcyA9IFtdXG4gICAgbGV0IG4gPSAwXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBnYW1lLnJvd3M7IHggKz0gMSkge1xuICAgICAgaWYgKGdhbWUucHV6emxlW3ldW3hdID09PSAxKSBuICs9IDFcbiAgICAgIGVsc2UgaWYgKG4gPiAwKSB7XG4gICAgICAgIG5tcy5wdXNoKG4pXG4gICAgICAgIG4gPSAwXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChuID4gMCkgbm1zLnB1c2gobilcblxuICAgIG5tcy5yZXZlcnNlKCkuZm9yRWFjaCgobiwgaSkgPT4ge1xuICAgICAgY29uc3QgcnkgPSBzdCArIHkgKiBTICsgKFMgLSBmb250KSAvIDIgKyBmb250XG4gICAgICBnYW1lLmN0eC5zdHJva2VUZXh0KG4sIHN0IC0gUyAvIDIgLSBmb250IC8gMiAtIGkgKiAoZm9udCArIHNwYWNlKSwgcnkpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbnVtYmVyc01hdGNoWCA9IChnYW1lLCB4LCBtYXRjaCkgPT4ge1xuICBjb25zdCBmb250ID0gMTRcbiAgY29uc3Qgc3BhY2UgPSAzXG4gIGdhbWUuY3R4LmZvbnQgPSBgJHtmb250fXB4IGFyaWFsYFxuICBnYW1lLmN0eC5zdHJva2VTdHlsZSA9IG1hdGNoID8gJ3llbGxvdycgOiAnZ3JheSdcbiAgY29uc3Qgc3QgPSBnYW1lLnN0YXJ0XG4gIGdhbWUuY3R4LmNsZWFyUmVjdChzdCArIHggKiBTLCBzdCAtIDEsIFMsIC1TICogNClcblxuICBsZXQgbm1zID0gW11cbiAgbGV0IG4gPSAwXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZS5yb3dzOyBpICs9IDEpIHtcbiAgICBpZiAoZ2FtZS5wdXp6bGVbaV1beF0gPT09IDEpIG4gKz0gMVxuICAgIGVsc2UgaWYgKG4gPiAwKSB7XG4gICAgICBubXMucHVzaChuKVxuICAgICAgbiA9IDBcbiAgICB9XG4gIH1cbiAgaWYgKG4gPiAwKSBubXMucHVzaChuKVxuXG4gIG5tcy5yZXZlcnNlKCkuZm9yRWFjaCgobiwgaSkgPT4ge1xuICAgIGNvbnN0IHJ4ID0gc3QgKyB4ICogUyArIChTIC0gZm9udCkgLyAyXG4gICAgZ2FtZS5jdHguc3Ryb2tlVGV4dChuLCByeCwgc3QgLSBTIC8gMiAtIGkgKiAoZm9udCArIHNwYWNlKSlcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IG51bWJlcnNNYXRjaFkgPSAoZ2FtZSwgeSwgbWF0Y2gpID0+IHtcbiAgY29uc3QgZm9udCA9IDE0XG4gIGNvbnN0IHNwYWNlID0gM1xuICBnYW1lLmN0eC5mb250ID0gYCR7Zm9udH1weCBhcmlhbGBcbiAgZ2FtZS5jdHguc3Ryb2tlU3R5bGUgPSBtYXRjaCA/ICd5ZWxsb3cnIDogJ2dyYXknXG4gIGNvbnN0IHN0ID0gZ2FtZS5zdGFydFxuICBnYW1lLmN0eC5jbGVhclJlY3Qoc3QgLSAxLCBzdCArIHkgKiBTLCAtUyAqIDQsIFMpXG5cbiAgbGV0IG5tcyA9IFtdXG4gIGxldCBuID0gMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWUucm93czsgaSArPSAxKSB7XG4gICAgaWYgKGdhbWUucHV6emxlW3ldW2ldID09PSAxKSBuICs9IDFcbiAgICBlbHNlIGlmIChuID4gMCkge1xuICAgICAgbm1zLnB1c2gobilcbiAgICAgIG4gPSAwXG4gICAgfVxuICB9XG4gIGlmIChuID4gMCkgbm1zLnB1c2gobilcblxuICBubXMucmV2ZXJzZSgpLmZvckVhY2goKG4sIGkpID0+IHtcbiAgICBjb25zdCByeSA9IHN0ICsgeSAqIFMgKyAoUyAtIGZvbnQpIC8gMiArIGZvbnRcbiAgICBnYW1lLmN0eC5zdHJva2VUZXh0KG4sIHN0IC0gUyAvIDIgLSBmb250IC8gMiAtIGkgKiAoZm9udCArIHNwYWNlKSwgcnkpXG4gIH0pXG59XG4iLCJpbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4uL3V0aWxzL3N0YXRlJ1xuaW1wb3J0IHsgU291bmQgfSBmcm9tICcuLi91dGlscy9zb3VuZCdcbmltcG9ydCB7IEdBTUUgfSBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vdXRpbHMvdGhlbWUnXG5pbXBvcnQgeyBQdXp6bGVzIH0gZnJvbSAnLi4vdXRpbHMvYmFzZSdcbmltcG9ydCAqIGFzIGRyYXcgZnJvbSAnLi9kcmF3J1xuaW1wb3J0IHsgdXBkYXRlUHV6emxlTGlzdCB9IGZyb20gJy4vbWVudSdcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICcuLi91dGlscy9tZXNzYWdlJ1xuaW1wb3J0IHsgc2hvd1Jlc3VsdHMgfSBmcm9tICcuL3Jlc3VsdHMnXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJy4uL3V0aWxzL3N0b3JlJ1xuaW1wb3J0IHsgZm9ybWF0VGltZSB9IGZyb20gJy4uL3V0aWxzL2Zvcm1hdCdcblxuY29uc3QgcHV6emxlcyA9IG5ldyBQdXp6bGVzKClcbmNvbnN0IHNvdW5kID0gbmV3IFNvdW5kKClcbmNvbnN0IHN0b3JlID0gbmV3IFN0b3JlKClcbmNvbnN0IFMgPSBHQU1FLmJsb2NrU2l6ZVxuY29uc3QgdGltZXIgPSB7fVxubGV0IG1vdXNlT3ZlckVsID0gbnVsbFxuXG5jb25zdCBnYW1lID0ge1xuICBjdXJyZW50OiB7XG4gICAgbW9kZTogMCxcbiAgICBwdXp6bGU6IDAsXG4gICAgc29sdXRpb246IDAsXG4gICAgdHVybnM6IDAsXG4gIH0sXG4gIGluaXQ6IHtcbiAgICBldmVudHM6IGZhbHNlLFxuICAgIGJhc2U6IGZhbHNlLFxuICAgIGVkaXRvcjogZmFsc2UsXG4gIH0sXG4gIHBvaW50ZXI6IG51bGwsXG4gIGZpZWxkOiB7XG4gICAgZWw6IG51bGwsXG4gICAgc2l6ZTogNjAwLFxuICAgIGs6IDEsXG4gIH0sXG4gIHN0YXJ0OiAwLFxuICByb3dzOiAwLFxuICBjOiB7XG4gICAgeDogLTEsXG4gICAgeTogLTEsXG4gICAgZG93bjogLTEsXG4gIH0sXG4gIHN0YXRzOiB7XG4gICAgcG9zOiBudWxsLFxuICAgIHR1cm5zOiBudWxsLFxuICAgIHByb2dyZXNzOiBudWxsLFxuICB9LFxuICBhcnI6IFtdLFxuICBwdXp6bGU6IFtdLFxuICBwdXp6bGVOYW1lOiBudWxsLFxuICBwb2ludHNUb3RhbDogMCxcbiAgdHVybnNNYXg6IDAsXG4gIHRpbWVyOiAwLFxuICB0aW1lOiAwLFxuICBzdGF0dXM6IG51bGwsXG59XG5cbmNvbnN0IHByZXBhcmVDb2xvcnMgPSAoKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gbmV3IFRoZW1lKClcbiAgZ2FtZS5jb2xvcjAwID0gdGhlbWUuY29sb3IwMFxuICBnYW1lLmNvbG9yNTAgPSB0aGVtZS5jb2xvcjUwXG4gIGdhbWUuY29sb3I4MCA9IHRoZW1lLmNvbG9yODBcbiAgZ2FtZS5jb2xvcjkwID0gdGhlbWUuY29sb3I5MFxuICBnYW1lLmNvbG9yMTAwID0gdGhlbWUuY29sb3IxMDBcbn1cblxuY29uc3QgcHJlcGFyZSA9ICgpID0+IHtcbiAgcHJlcGFyZUNvbG9ycygpXG4gIGNvbnN0IHN0YXRlID0gbmV3IFN0YXRlKClcbiAgZ2FtZS5jdHggPSBzdGF0ZS5jdHhcbiAgZ2FtZS5wb2ludGVyID0gc3RhdGUucG9pbnRlclxuICBnYW1lLm1vZGUgPSBzdGF0ZS5tb2RlXG4gIGNvbnN0IG0gPSB+fihHQU1FLnNpemUgLyAyKVxuICBnYW1lLnJvd3MgPSAoc3RhdGUubW9kZSArIDEpICogNVxuICBjb25zdCBzaGlmdCA9IGdhbWUucm93cyAlIDIgPyBTIC8gMiA6IDBcbiAgY29uc3QgYmlnRmllbGQgPSBnYW1lLnN0YXR1cyA9PT0gJ2dhbWUnICYmIGdhbWUucm93cyA9PT0gMTUgPyBTIDogMFxuICBnYW1lLnN0YXJ0ID0gbSAtIE1hdGguZmxvb3IoZ2FtZS5yb3dzIC8gMikgKiBTIC0gc2hpZnQgKyBiaWdGaWVsZFxuICBnYW1lLnN0YXRzLnBvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0c19fcG9zJylcbiAgZ2FtZS5zdGF0cy50dXJucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0c19fdHVybnMnKVxuICBnYW1lLnN0YXRzLnByb2dyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRzX19wcm9ncmVzc19iYXInKVxuICBnYW1lLnN0YXRzLnByb2dyZXNzLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKVxuICBnYW1lLmZpZWxkLmVsID0gc3RhdGUuaG92ZXJcbiAgZ2FtZS5maWVsZC5zaXplID0gR0FNRS5zaXplMjBkZWdcbiAgZ2FtZS5hcnIgPSBwdXp6bGVzLmJsYW5rKGdhbWUubW9kZSlcblxuICBnYW1lLnN0YXRzLnByb2dyZXNzLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9fc29sdXRpb24nKS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcbn1cblxuY29uc3QgZ2FtZUVuZCA9IChtc2csIGRlc2NyKSA9PiB7XG4gIGdhbWUuc3RhdHVzID0gJ2VuZCdcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhc2UnKS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpXG4gIGdhbWUuYy5kb3duID0gLTFcbiAgZHJhdy5wb2ludGVyKGdhbWUsIC0xLCAtMSlcbiAgY2xlYXJJbnRlcnZhbChnYW1lLnRpbWVyKVxuXG4gIGNvbnN0IHRpbWUgPSB+figobmV3IERhdGUoKSAtIGdhbWUudGltZSkgLyAxMDAwKVxuICBjb25zdCB0aW1lU2NvcmUgPSBNYXRoLm1heChnYW1lLnBvaW50c1RvdGFsICogMyAtIHRpbWUsIDApICogNVxuICBjb25zdCB0dXJuc1Njb3JlID0gTWF0aC5tYXgoZ2FtZS50dXJuc01heCAtIGdhbWUuY3VycmVudC50dXJucywgMCkgKiA1XG4gIC8vIGNvbnNvbGUubG9nKGRlc2NyLCB0aW1lU2NvcmUgLyA1LCB0dXJuc1Njb3JlIC8gNSlcbiAgc2hvd1Jlc3VsdHMoeyB0aW1lLCB0dXJuczogZ2FtZS5jdXJyZW50LnR1cm5zLCBzY29yZTogeyB0aW1lU2NvcmUsIHR1cm5zU2NvcmUgfSwgbXNnLCBzb2x1dGlvbjogZ2FtZS5jdXJyZW50LnNvbHV0aW9uLCBkZXNjciB9KVxuICBpZiAobXNnICE9PSAnd2luJykgc2V0VGltZW91dCgoKSA9PiBkcmF3LnNvbHV0aW9uKGdhbWUpLCAoR0FNRS5zcGYgKiBTKSAvIDQpXG5cbiAgaWYgKG1zZyA9PT0gJ3dpbicpIHtcbiAgICBjb25zdCByZWNvcmQgPSB7XG4gICAgICBuYW1lOiBnYW1lLnB1enpsZU5hbWUsXG4gICAgICBtb2RlOiBnYW1lLmN1cnJlbnQubW9kZSxcbiAgICAgIHRpbWUsXG4gICAgICB0dXJuczogZ2FtZS5jdXJyZW50LnR1cm5zLFxuICAgICAgc29sdXRpb246IGdhbWUuY3VycmVudC5zb2x1dGlvbixcbiAgICAgIHNjb3JlOiBnYW1lLmN1cnJlbnQuc29sdXRpb24gPyAwIDogdGltZVNjb3JlICsgdHVybnNTY29yZSxcbiAgICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgfVxuICAgIGNvbnN0IGFyciA9IHN0b3JlLmdldCgncmVjb3JkcycpXG4gICAgbGV0IG5ld1JlY29yZCA9IHRydWVcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoYXJyW2ldLm5hbWUgPT09IGdhbWUucHV6emxlTmFtZSkge1xuICAgICAgICAgIHN0b3JlLnNldChgcmVjb3Jkcy4ke2l9YCwgcmVjb3JkKVxuICAgICAgICAgIG5ld1JlY29yZCA9IGZhbHNlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAobmV3UmVjb3JkKSBzdG9yZS5hZGQoJ3JlY29yZHMnLCByZWNvcmQpXG4gIH1cblxuICBzdG9yZS5zZXQoJ2xhc3QuZ2FtZScsIG51bGwpXG59XG5cbmNvbnN0IGxpbmVzQ2hlY2sgPSAoeCwgeSkgPT4ge1xuICBsZXQgbWF0Y2hYID0gMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWUucm93czsgaSArPSAxKSB7XG4gICAgaWYgKGdhbWUucHV6emxlW2ldW3hdID09PSAoZ2FtZS5hcnJbaV1beF0gPT09IDEgPyAxIDogMCkpIG1hdGNoWCArPSAxXG4gIH1cbiAgbGV0IG1hdGNoWSA9IDBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lLnJvd3M7IGkgKz0gMSkge1xuICAgIGlmIChnYW1lLnB1enpsZVt5XVtpXSA9PT0gKGdhbWUuYXJyW3ldW2ldID09PSAxID8gMSA6IDApKSBtYXRjaFkgKz0gMVxuICB9XG5cbiAgaWYgKG1hdGNoWCkgY29uc29sZS5sb2coJ01hdGNoZWQ6ICcsIHgpXG4gIGRyYXcubnVtYmVyc01hdGNoWChnYW1lLCB4LCBtYXRjaFggPT09IGdhbWUucm93cylcbiAgZHJhdy5udW1iZXJzTWF0Y2hZKGdhbWUsIHksIG1hdGNoWSA9PT0gZ2FtZS5yb3dzKVxufVxuXG5jb25zdCBwcm9ncmVzc0NoZWNrID0gKCkgPT4ge1xuICBpZiAoZ2FtZS5zdGF0dXMgIT09ICdnYW1lJykgcmV0dXJuXG4gIGdhbWUuc3RhdHMudHVybnMudGV4dENvbnRlbnQgPSBgJHtnYW1lLmN1cnJlbnQudHVybnN9LyR7Z2FtZS50dXJuc01heH1gXG5cbiAgaWYgKGdhbWUuY3VycmVudC50dXJucyA9PT0gfn4oZ2FtZS50dXJuc01heCAvIDIpKSBtZXNzYWdlKCdzaHJpa2UnLCAnYXR0ZW10c0hhbGYnKVxuXG4gIGxldCBtYXRjaCA9IDBcbiAgbGV0IHBvaW50cyA9IDBcbiAgZm9yIChsZXQgeSA9IDA7IHkgPCBnYW1lLnJvd3M7IHkgKz0gMSkge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgZ2FtZS5yb3dzOyB4ICs9IDEpIHtcbiAgICAgIGlmIChnYW1lLnB1enpsZVt5XVt4XSA9PT0gMSkge1xuICAgICAgICBpZiAoZ2FtZS5hcnJbeV1beF0gPT09IDEpIHtcbiAgICAgICAgICBtYXRjaCArPSAxXG4gICAgICAgICAgcG9pbnRzICs9IDFcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGdhbWUuYXJyW3ldW3hdID09PSAxKSB7XG4gICAgICAgICAgbWF0Y2ggLT0gMVxuICAgICAgICAgIHBvaW50cyArPSAxXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbWF0Y2ggPSBNYXRoLm1heChtYXRjaCwgMClcbiAgLy8gY29uc29sZS5sb2cobWF0Y2gsIGdhbWUucG9pbnRzVG90YWwpXG4gIGdhbWUuc3RhdHMucHJvZ3Jlc3Muc3R5bGUud2lkdGggPSBgJHt+fihNYXRoLm1pbihwb2ludHMgLyBnYW1lLnBvaW50c1RvdGFsLCAxKSAqIDEwMCl9JWBcblxuICBpZiAoZ2FtZS5jdXJyZW50LnR1cm5zID4gZ2FtZS50dXJuc01heCkgZ2FtZUVuZCgnbG9vc2UnLCAndHVybnNPdXQnKVxuICBlbHNlIGlmIChtYXRjaCA9PT0gZ2FtZS5wb2ludHNUb3RhbCkgZ2FtZUVuZCgnd2luJylcbn1cblxuY29uc3QgdGltZXJVcGRhdGUgPSAoKSA9PiB7XG4gIGlmIChnYW1lLnRpbWUpIHtcbiAgICBjb25zdCB0aW1lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0c19fdGltZXInKVxuICAgIGNvbnN0IHRpbWUgPSB+figobmV3IERhdGUoKSAtIGdhbWUudGltZSkgLyAxMDAwKVxuICAgIC8vIGNvbnN0IGRlbHRhID0gZ2FtZS5wb2ludHNUb3RhbCAqIDEwIC0gdGltZVxuICAgIHRpbWVyLnRleHRDb250ZW50ID0gZm9ybWF0VGltZSh0aW1lKVxuXG4gICAgLy8gaWYgKHRpbWUgPj0gZ2FtZS5wb2ludHNUb3RhbCAqIDEwKSBnYW1lRW5kKCdsb29zZScsICd0aW1lT3V0JylcbiAgfVxufVxuXG5jb25zdCBzYXZlQ3VycmVudEdhbWUgPSAoKSA9PiB7XG4gIHN0b3JlLnNldCgnbGFzdC5nYW1lJywge1xuICAgIC4uLmdhbWUuY3VycmVudCxcbiAgICB0aW1lOiB+figobmV3IERhdGUoKSAtIGdhbWUudGltZSkgLyAxMDAwKSxcbiAgICBhcnI6IHB1enpsZXMuc3RyaW5naWZ5KGdhbWUuYXJyKSxcbiAgfSlcbn1cblxuY29uc3QgY3VycmVudEVkaXRvclVwZGF0ZSA9ICgpID0+IHtcbiAgc3RvcmUuc2V0KCdsYXN0LmVkaXRvcicsIHtcbiAgICBtb2RlOiBnYW1lLmN1cnJlbnQubW9kZSxcbiAgICBhcnI6IHB1enpsZXMuc3RyaW5naWZ5KGdhbWUuYXJyKSxcbiAgfSlcbn1cblxuY29uc3QgY2VsbEV2ZW50ID0gKCkgPT4ge1xuICBpZiAoZ2FtZS5zdGF0dXMgPT09ICdlbmQnKSByZXR1cm5cbiAgY29uc3QgeCA9IGdhbWUuYy54XG4gIGNvbnN0IHkgPSBnYW1lLmMueVxuICBpZiAoeCAhPT0gLTEgJiYgeSAhPT0gLTEpIHtcbiAgICBpZiAoIWdhbWUudGltZSkgZ2FtZS50aW1lID0gbmV3IERhdGUoKVxuICAgIGNvbnN0IHBvaW50ID0gZ2FtZS5hcnJbeV1beF1cbiAgICBjb25zdCBzdCA9IGdhbWUuc3RhcnRcbiAgICBjb25zdCByeCA9IHN0ICsgeCAqIFNcbiAgICBjb25zdCByeSA9IHN0ICsgeSAqIFNcbiAgICBpZiAoZ2FtZS5jLmRvd24gPT09IDApIHtcbiAgICAgIGdhbWUuYXJyW3ldW3hdID0gcG9pbnQgPT09IDEgPyAwIDogMVxuICAgICAgaWYgKHBvaW50ID09PSAyKSBkcmF3LmJsb2NrKGdhbWUsIHJ4LCByeSwgMClcbiAgICAgIGVsc2UgZHJhdy5ibG9jayhnYW1lLCByeCwgcnksIHBvaW50KVxuXG4gICAgICBpZiAoZ2FtZS5hcnJbeV1beF0gPT09IDEpIHNvdW5kLnVzZSgnZG90JylcbiAgICAgIGdhbWUuY3VycmVudC50dXJucyArPSAxXG4gICAgICBpZiAoZ2FtZS5zdGF0dXMgPT09ICdnYW1lJykgbGluZXNDaGVjayh4LCB5KVxuICAgICAgaWYgKGdhbWUuc3RhdHVzID09PSAnZ2FtZScpIHByb2dyZXNzQ2hlY2soKVxuICAgICAgaWYgKGdhbWUuc3RhdHVzID09PSAnZWRpdG9yJykgY3VycmVudEVkaXRvclVwZGF0ZSgpXG4gICAgfVxuXG4gICAgaWYgKGdhbWUuYy5kb3duID09PSAyKSB7XG4gICAgICBnYW1lLmFyclt5XVt4XSA9IHBvaW50ID09PSAyID8gMCA6IDJcbiAgICAgIGRyYXcuY3Jvc3MoZ2FtZSwgcngsIHJ5LCBwb2ludClcbiAgICAgIGlmIChnYW1lLmFyclt5XVt4XSA9PT0gMikgc291bmQudXNlKCdjcm9zcycpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG1vdXNlTW92ZSA9IGV2ZW50ID0+IHtcbiAgY29uc3QgeCA9IE1hdGguZmxvb3IoKGV2ZW50Lm9mZnNldFggLyBnYW1lLmZpZWxkLmsgLSBnYW1lLnN0YXJ0KSAvIFMpXG4gIGNvbnN0IHkgPSBNYXRoLmZsb29yKChldmVudC5vZmZzZXRZIC8gZ2FtZS5maWVsZC5rIC0gZ2FtZS5zdGFydCkgLyBTKVxuICBpZiAoeCA+PSAwICYmIHkgPj0gMCAmJiB4IDwgZ2FtZS5yb3dzICYmIHkgPCBnYW1lLnJvd3MpIHtcbiAgICBpZiAoeCAhPT0gZ2FtZS5jLnggfHwgeSAhPT0gZ2FtZS5jLnkpIHtcbiAgICAgIGdhbWUuYy54ID0geFxuICAgICAgZ2FtZS5jLnkgPSB5XG4gICAgICBkcmF3LnBvaW50ZXIoZ2FtZSwgeCwgeSlcbiAgICAgIGdhbWUuc3RhdHMucG9zLnRleHRDb250ZW50ID0gYCR7eCArIDF9OiR7eSArIDF9YFxuICAgICAgaWYgKGdhbWUuYy5kb3duICE9IC0xKSBjZWxsRXZlbnQoKVxuICAgICAgZWxzZSBzb3VuZC51c2UoJ3N0ZXAnKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoZ2FtZS5jLnggIT09IC0xIHx8IGdhbWUuYy55ICE9PSAtMSkge1xuICAgICAgZHJhdy5wb2ludGVyKGdhbWUsIC0xLCAtMSlcbiAgICAgIGdhbWUuc3RhdHMucG9zLnRleHRDb250ZW50ID0gJzA6MCdcbiAgICB9XG4gICAgZ2FtZS5jLnggPSAtMVxuICAgIGdhbWUuYy55ID0gLTFcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgY29uc3QgdGlsdGVkID0gIXdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3MjBweCknKS5tYXRjaGVzXG4gIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUnKVxuICBmaWVsZC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpXG4gIGNvbnN0IHVuZmxpcCA9ICgpID0+IHtcbiAgICBnYW1lLmFyciA9IHB1enpsZXMuYmxhbmsoZ2FtZS5tb2RlKVxuICAgIGRyYXcuZmllbGQoZ2FtZSlcbiAgICBpZiAoZ2FtZS5zdGF0dXMgPT09ICdnYW1lJyB8fCBnYW1lLnN0YXR1cyA9PT0gJ2VuZCcpIGRyYXcubnVtYmVycyhnYW1lKVxuICAgIGZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsaXAwJylcbiAgICBmaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpXG4gIH1cbiAgY29uc3QgZmxpcDEgPSAoKSA9PiB7XG4gICAgZ2FtZS5hcnIgPSBwdXp6bGVzLmJsYW5rKGdhbWUubW9kZSlcbiAgICBkcmF3LmZpZWxkKGdhbWUpXG4gICAgZmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnZmxpcDEnKVxuICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoJ2ZsaXAyJylcbiAgICBzZXRUaW1lb3V0KGZsaXAyLCAzMDApXG4gIH1cbiAgY29uc3QgZmxpcDIgPSAoKSA9PiB7XG4gICAgaWYgKGdhbWUuc3RhdHVzID09PSAnZ2FtZScgfHwgZ2FtZS5zdGF0dXMgPT09ICdlbmQnKSBkcmF3Lm51bWJlcnMoZ2FtZSlcbiAgICBmaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdmbGlwMicpXG4gICAgZmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKVxuICB9XG4gIGlmICh0aWx0ZWQpIHtcbiAgICBmaWVsZC5jbGFzc0xpc3QuYWRkKCdmbGlwMScpXG4gICAgc2V0VGltZW91dChmbGlwMSwgMzAwKVxuICB9IGVsc2Uge1xuICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoJ2ZsaXAwJylcbiAgICBzZXRUaW1lb3V0KHVuZmxpcCwgMzAwKVxuICB9XG4gIHNvdW5kLnVzZSgnd2hvb3NoJylcblxuICBnYW1lLmN1cnJlbnQudHVybnMgPSAwXG4gIGdhbWUuc3RhdHMudHVybnMudGV4dENvbnRlbnQgPSBgJHtnYW1lLmN1cnJlbnQudHVybnN9LyR7Z2FtZS50dXJuc01heH1gXG4gIGlmIChnYW1lLnN0YXR1cyA9PT0gJ2VkaXRvcicpIHN0b3JlLnNldCgnbGFzdC5lZGl0b3InLCBudWxsKVxufVxuXG5jb25zdCByZXNpemVIYW5kbGVyID0gKCkgPT4ge1xuICBjb25zdCBzaXplID0gfn5nYW1lLmZpZWxkLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXG4gIGlmIChzaXplICE9PSBnYW1lLmZpZWxkLnNpemUpIHtcbiAgICAvLyBjb25zb2xlLmxvZygncmVzaXplOicsIHNpemUpXG4gICAgZ2FtZS5maWVsZC5zaXplID0gc2l6ZVxuICAgIGdhbWUuZmllbGQuayA9IHNpemUgPj0gNzIzID8gMSA6IHNpemUgLyBHQU1FLnNpemVcbiAgfVxufVxuXG5jb25zdCBlZGl0b3JTYXZlID0gZXZlbnQgPT4ge1xuICBpZiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3Qgc3VtbSA9IGdhbWUuYXJyLmZsYXQoKS5yZWR1Y2UoKGFjYywgdikgPT4gKGFjYyArPSB2KSwgMClcbiAgICBpZiAoc3VtbSA9PT0gMCkge1xuICAgICAgbWVzc2FnZSgnYnVsbGRvZycsICdibGFuay1maWxlZCcpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldClcbiAgICBjb25zdCBuYW1lID0gZm9ybS5nZXQoJ25hbWUnKVxuICAgIGlmIChuYW1lLmxlbmd0aCA8IDMgfHwgbmFtZS5sZW5ndGggPiAxOCkge1xuICAgICAgbWVzc2FnZSgnc2hyaWtlJywgJ2FkZXF1YXRlTmFtZScpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBsaXN0ID0gcHV6emxlcy5saXN0KGdhbWUuY3VycmVudC5tb2RlKVxuICAgIGlmIChsaXN0LmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICBtZXNzYWdlKCdzaHJpa2UnLCAnZHVwbGljYXRlTmFtZScpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkYXRhU3RyaW5nID0gcHV6emxlcy5zdHJpbmdpZnkoZ2FtZS5hcnIpXG4gICAgY29uc29sZS5sb2coZGF0YVN0cmluZylcbiAgICBjb25zdCByZXMgPSBwdXp6bGVzLmFkZChuYW1lLCBnYW1lLmFycilcbiAgICBjb25zdCBtc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdG9yX19zYXZlX21lc3NhZ2UnKVxuICAgIG1zZy50ZXh0Q29udGVudCA9IHJlc1xuICAgIG1zZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgIG1zZy5zdHlsZS5hbmltYXRpb24gPSAnbm9uZSdcbiAgICBtc2cub2Zmc2V0SGVpZ2h0IC8qIHRyaWdnZXIgcmVmbG93ICovXG4gICAgbXNnLnN0eWxlLmFuaW1hdGlvbiA9IG51bGxcbiAgICBpZiAoIShyZXMgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgIHVwZGF0ZVB1enpsZUxpc3QoKVxuICAgICAgc3RvcmUuYWRkKCdwdXp6bGVzJywgeyBuYW1lLCBwdXp6bGU6IGRhdGFTdHJpbmcgfSlcbiAgICAgIHN0b3JlLnNldCgnbGFzdC5lZGl0b3InLCBudWxsKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCByZWdpc3RlckV2ZW50cyA9ICgpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUhhbmRsZXIpXG4gIHJlc2l6ZUhhbmRsZXIoKVxuXG4gIGNvbnN0IHN0YXRlID0gbmV3IFN0YXRlKClcbiAgc3RhdGUuaG92ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlKVxuICBzdGF0ZS5ob3Zlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGdhbWUuYy5kb3duID0gZXZlbnQuYnV0dG9uXG4gICAgY2VsbEV2ZW50KClcbiAgfSlcbiAgc3RhdGUuaG92ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGV2ZW50ID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZ2FtZS5jLmRvd24gPSAtMVxuICB9KVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSlcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRvcl9fc2F2ZV9mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZWRpdG9yU2F2ZSlcblxuICBjb25zdCB0aGVtZSA9IG5ldyBUaGVtZSgpXG4gIGNvbnN0IHRoZW1lVXBkYXRlSGFuZGxlciA9ICgpID0+IHtcbiAgICBwcmVwYXJlQ29sb3JzKClcbiAgICBkcmF3LmZpZWxkKGdhbWUpXG4gICAgZHJhdy5maWVsZEZpbGwoZ2FtZSlcbiAgICBpZiAoZ2FtZS5zdGF0dXMgPT09ICdnYW1lJyB8fCBnYW1lLnN0YXR1cyA9PT0gJ2VuZCcpIGRyYXcubnVtYmVycyhnYW1lKVxuICB9XG4gIHRoZW1lLmFkZENhbGxiYWNrKHRoZW1lVXBkYXRlSGFuZGxlcilcblxuICBjb25zdCByZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX19yZXNldCcpXG4gIHJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUmVzZXQpXG4gIHJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiAobW91c2VPdmVyRWwgPSBudWxsKSlcbiAgcmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGV2ZW50ID0+IHtcbiAgICBtb3VzZU92ZXJFbCA9IGV2ZW50LnRhcmdldFxuICAgIGNvbnN0IG5hbWUgPSBldmVudC50YXJnZXQuY2xhc3NMaXN0WzBdXG4gICAgaWYgKHRpbWVyW25hbWVdKSBjbGVhclRpbWVvdXQodGltZXJbbmFtZV0pXG4gICAgdGltZXJbbmFtZV0gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChtb3VzZU92ZXJFbCA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHN1bW0gPSBnYW1lLmFyci5mbGF0KCkucmVkdWNlKChhY2MsIHYpID0+IChhY2MgKz0gdiksIDApXG4gICAgICAgIGNvbnN0IHRleHQgPSBzdW1tID4gMCA/ICdyZXNldCcgOiAnYmxhbmstZmlsZWQnXG4gICAgICAgIG1lc3NhZ2UoJ2J1bGxkb2cnLCB0ZXh0KVxuICAgICAgfVxuICAgIH0sIDI1MClcbiAgfSlcblxuICBjb25zdCBzb2x1dGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX19zb2x1dGlvbicpXG4gIHNvbHV0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiAobW91c2VPdmVyRWwgPSBudWxsKSlcbiAgc29sdXRpb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGV2ZW50ID0+IHtcbiAgICBtb3VzZU92ZXJFbCA9IGV2ZW50LnRhcmdldFxuICAgIGNvbnN0IG5hbWUgPSBldmVudC50YXJnZXQuY2xhc3NMaXN0WzBdXG4gICAgaWYgKHRpbWVyW25hbWVdKSBjbGVhclRpbWVvdXQodGltZXJbbmFtZV0pXG4gICAgdGltZXJbbmFtZV0gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChtb3VzZU92ZXJFbCA9PT0gZXZlbnQudGFyZ2V0KSBtZXNzYWdlKCdzaHJpa2UnLCAnc29sdXRpb24nLCA0MDAwKVxuICAgIH0sIDI1MClcbiAgfSlcbiAgc29sdXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZ2FtZS5jdXJyZW50LnNvbHV0aW9uICs9IDFcbiAgICBkcmF3LnNvbHV0aW9uKGdhbWUpXG4gICAgc29sdXRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4MDBiJ1xuICAgIGdhbWUudGltZSA9IDBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJylcbiAgfSlcblxuICBjb25zdCBzYXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVfX3NhdmUnKVxuICBzYXZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2F2ZUN1cnJlbnRHYW1lKVxuICBzYXZlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiAobW91c2VPdmVyRWwgPSBudWxsKSlcbiAgc2F2ZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZXZlbnQgPT4ge1xuICAgIG1vdXNlT3ZlckVsID0gZXZlbnQudGFyZ2V0XG4gICAgY29uc3QgbmFtZSA9IGV2ZW50LnRhcmdldC5jbGFzc0xpc3RbMF1cbiAgICBpZiAodGltZXJbbmFtZV0pIGNsZWFyVGltZW91dCh0aW1lcltuYW1lXSlcbiAgICB0aW1lcltuYW1lXSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKG1vdXNlT3ZlckVsID09PSBldmVudC50YXJnZXQpIG1lc3NhZ2UoJ2J1bGxkb2cnLCAnc2F2ZScpXG4gICAgfSwgMjUwKVxuICB9KVxuXG4gIGdhbWUuaW5pdC5ldmVudHMgPSB0cnVlXG59XG5cbmV4cG9ydCBjb25zdCBlZGl0b3IgPSBmcmVzaCA9PiB7XG4gIGNvbnNvbGUubG9nKCdTdGFydCBlZGl0b3InKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJylcbiAgY29uc3QgbGFzdCA9IGZyZXNoID8gbnVsbCA6IHN0b3JlLmdldCgnbGFzdC5lZGl0b3InKVxuICBnYW1lLnN0YXR1cyA9ICdlZGl0b3InXG5cbiAgY29uc3Qgc3RhdGUgPSBuZXcgU3RhdGUoKVxuICBzdGF0ZS5zZXRNb2RlVXBkYXRlQ2FsbGJhY2soKCkgPT4ge30pXG4gIGlmIChsYXN0KSBzdGF0ZS5tb2RlID0gbGFzdC5tb2RlID8/IDJcbiAgZWxzZSBpZiAoIWdhbWUuaW5pdC5lZGl0b3IpIHN0YXRlLm1vZGUgPSAyXG4gIGdhbWUuY3VycmVudC5tb2RlID0gc3RhdGUubW9kZVxuXG4gIGNsZWFySW50ZXJ2YWwoZ2FtZS50aW1lcilcbiAgcHJlcGFyZSgpXG4gIGRyYXcuZmllbGQoZ2FtZSlcbiAgaWYgKCFnYW1lLmluaXQuZXZlbnRzKSByZWdpc3RlckV2ZW50cygpXG4gIGdhbWUuaW5pdC5lZGl0b3IgPSB0cnVlXG4gIHN0YXRlLnNldE1vZGVVcGRhdGVDYWxsYmFjaygoKSA9PiBlZGl0b3IodHJ1ZSkpXG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhc2UnKS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0b3JfX21vZGUnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdG9yX19zYXZlX2Zvcm0nKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9fc29sdXRpb24nKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9fc2F2ZScpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX19oZWFkZXJfdGV4dCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0c19fcHJvZ3Jlc3MnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHNfX3R1cm5zJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgY29uc3QgbW9kZVNlbGVjdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0b3JfX21vZGVfc2VsZWN0JylcbiAgbW9kZVNlbGVjdG9yc1tzdGF0ZS5tb2RlXS5jaGVja2VkID0gdHJ1ZVxuXG4gIGlmIChsYXN0KSB7XG4gICAgZ2FtZS5hcnIgPSBwdXp6bGVzLnBhcnNlKGxhc3QuYXJyKVxuICAgIGRyYXcuZmllbGRGaWxsKGdhbWUpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRvcl9fc2F2ZV9uYW1lLXRleHQnKS52YWx1ZSA9IGxhc3QubmFtZSA/PyAnJ1xuICAgIC8vIGNvbnNvbGUubG9nKGxhc3QpXG4gIH1cblxuICBtZXNzYWdlKE1hdGgucmFuZG9tKCkgPiAwLjUgPyAnYnVsbGRvZycgOiAnc2hyaWtlJywgJ2VkaXRvck5ldycpXG59XG5cbmV4cG9ydCBjb25zdCBzdGFydCA9IChtb2RlLCBwdXp6bGUsIGxhc3QpID0+IHtcbiAgaWYgKG1vZGUgPT09IHVuZGVmaW5lZCkgbW9kZSA9IH5+KE1hdGgucmFuZG9tKCkgKiAzKVxuICBpZiAocHV6emxlID09PSB1bmRlZmluZWQpIHB1enpsZSA9IH5+KE1hdGgucmFuZG9tKCkgKiBwdXp6bGVzLmxpc3QobW9kZSkubGVuZ3RoKVxuICBjb25zb2xlLmxvZyhgU3RhcnQgZ2FtZTogJHttb2RlfS0ke3B1enpsZX0keyEhbGFzdCA/ICcgKHJlY292ZXJlZCknIDogJyd9YClcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUnKS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpXG5cbiAgZ2FtZS5zdGF0dXMgPSAnZ2FtZSdcbiAgY29uc3Qgc3RhdGUgPSBuZXcgU3RhdGUoKVxuICBzdGF0ZS5zZXRNb2RlVXBkYXRlQ2FsbGJhY2soKVxuICBzdGF0ZS5tb2RlID0gbW9kZVxuICBwcmVwYXJlKClcbiAgY29uc3QgeyBuYW1lLCBkYXRhIH0gPSBwdXp6bGVzLmdldChtb2RlLCBwdXp6bGUpXG4gIGdhbWUucHV6emxlID0gZGF0YVxuICBnYW1lLnB1enpsZU5hbWUgPSBuYW1lXG4gIGdhbWUuY3VycmVudCA9IHsgbW9kZSwgcHV6emxlLCBzb2x1dGlvbjogMCwgdHVybnM6IDAgfVxuXG4gIGNvbnN0IHN1bW0gPSBkYXRhLmZsYXQoKS5yZWR1Y2UoKGFjYywgdikgPT4gKGFjYyArPSB2KSwgMClcbiAgZ2FtZS5wb2ludHNUb3RhbCA9IHN1bW1cbiAgZ2FtZS50dXJuc01heCA9IHN1bW0gKiAzXG4gIGdhbWUuc3RhdHMudHVybnMudGV4dENvbnRlbnQgPSBgJHtnYW1lLmN1cnJlbnQudHVybnN9LyR7Z2FtZS50dXJuc01heH1gXG5cbiAgaWYgKCFnYW1lLmluaXQuZXZlbnRzKSByZWdpc3RlckV2ZW50cygpXG4gIGdhbWUuaW5pdC5zdGFydCA9IHRydWVcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFzZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJylcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRvcl9fbW9kZScpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0b3JfX3NhdmVfZm9ybScpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX19zb2x1dGlvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX19zYXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRzX19wcm9ncmVzcycpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0c19fdHVybnMnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICBjb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVfX2hlYWRlcl90ZXh0JylcbiAgaGVhZGVyVGV4dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICBoZWFkZXJUZXh0LnRleHRDb250ZW50ID0gbmFtZVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0c19fdGltZXInKS50ZXh0Q29udGVudCA9ICcwMDowMCdcbiAgZ2FtZS50aW1lID0gMFxuICBjbGVhckludGVydmFsKGdhbWUudGltZXIpXG4gIGdhbWUudGltZXIgPSBzZXRJbnRlcnZhbCh0aW1lclVwZGF0ZSwgMTAwMClcblxuICBkcmF3LmZpZWxkKGdhbWUpXG4gIGRyYXcubnVtYmVycyhnYW1lKVxuICBpZiAobGFzdCAmJiBsYXN0LnRpbWUgKyAxMCA8IGdhbWUucG9pbnRzVG90YWwgKiAxMCkge1xuICAgIGdhbWUuYXJyID0gcHV6emxlcy5wYXJzZShsYXN0LmFycilcbiAgICBnYW1lLmN1cnJlbnQuc29sdXRpb24gPSBsYXN0LnNvbHV0aW9uXG4gICAgZ2FtZS5jdXJyZW50LnR1cm5zID0gbGFzdC50dXJuc1xuICAgIGdhbWUudGltZSA9IG5ldyBEYXRlKCkgLSBsYXN0LnRpbWUgKiAxMDAwXG4gICAgaWYgKGxhc3Quc29sdXRpb24pIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX19zb2x1dGlvbicpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjODAwYidcbiAgICBkcmF3LmZpZWxkRmlsbChnYW1lKVxuICB9XG5cbiAgbWVzc2FnZShNYXRoLnJhbmRvbSgpID4gMC41ID8gJ2J1bGxkb2cnIDogJ3NocmlrZScsIGxhc3QgPyAnbGFzdEdhbWVSZWNvdmVyZWQnIDogJ2dhbWVOZXcnKVxufVxuIiwiaW1wb3J0IHsgc3RhcnQsIGVkaXRvciB9IGZyb20gJy4vZ2FtZSdcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vdXRpbHMvc3RhdGUnXG5pbXBvcnQgeyBQdXp6bGVzIH0gZnJvbSAnLi4vdXRpbHMvYmFzZSdcbmltcG9ydCB7IEdBTUUgfSBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICcuLi91dGlscy9tZXNzYWdlJ1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuLi91dGlscy9zdG9yZSdcbmltcG9ydCB7IFNvdW5kIH0gZnJvbSAnLi4vdXRpbHMvc291bmQnXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uL3V0aWxzL3RoZW1lJ1xuaW1wb3J0IHsgdXBkYXRlR2FtZVJlY29yZHMgfSBmcm9tICcuL3JlY29yZHMnXG5pbXBvcnQgTG9jIGZyb20gJy4uL2RhdGEvbG9jLmpzb24nIGFzc2VydCB7IHR5cGU6ICdqc29uJyB9XG5cbmNvbnN0IHN0b3JlID0gbmV3IFN0b3JlKClcbmNvbnN0IHNvdW5kID0gbmV3IFNvdW5kKClcbmNvbnN0IHB1enpsZXMgPSBuZXcgUHV6emxlcygpXG5sZXQgc2VsZWN0ZWRNb2RlID0gMFxubGV0IHNlbGVjdGVkUHV6emxlID0gMFxuXG5jb25zdCBzdGFydE5ld0dhbWUgPSAoKSA9PiB7XG4gIHNvdW5kLnVzZSgnc2xpZGUnKVxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fZ2FtZScpXG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fZ2FtZV9idG4nKS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fcHV6emxlX3NlbGVjdCcpLnZhbHVlID0gJydcbiAgdXBkYXRlUHV6emxlTGlzdCgpXG59XG5cbmNvbnN0IGhhbmRsZVN0YXJ0Q2xpY2sgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fZ2FtZScpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gIHN0YXJ0KHNlbGVjdGVkTW9kZSwgc2VsZWN0ZWRQdXp6bGUpXG59XG5cbmNvbnN0IHN0YXJ0UmFuZG9tR2FtZSA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19nYW1lJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgc3RhcnQoKVxufVxuXG5jb25zdCBMb2FkR2FtZSA9ICgpID0+IHtcbiAgY29uc3QgbGFzdCA9IHN0b3JlLmdldCgnbGFzdC5nYW1lJylcbiAgaWYgKGxhc3QpIHN0YXJ0KGxhc3QubW9kZSwgbGFzdC5wdXp6bGUsIGxhc3QpXG4gIGVsc2UgbWVzc2FnZSgnYnVsbGRvZycsICdub1NhdmVkR2FtZScpXG59XG5cbmNvbnN0IG9wZW5FZGl0b3IgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXRlID0gbmV3IFN0YXRlKClcbiAgaWYgKHN0YXRlLnN0YXR1cyA9PT0gJ2VkaXRvcicpIHtcbiAgICBtZXNzYWdlKCdidWxsZG9nJywgJ3Vua25vd24nKVxuICAgIHJldHVyblxuICB9XG4gIHN0YXRlLm1vZGUgPSAyXG4gIGVkaXRvcigpXG59XG5cbmNvbnN0IHNob3dSZWNvcmRzID0gKCkgPT4ge1xuICBzb3VuZC51c2UoJ3NsaWRlJylcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19yZWNvcmRzJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgdXBkYXRlR2FtZVJlY29yZHMoKVxufVxuXG5jb25zdCBzaG93QWJvdXQgPSAoKSA9PiB7XG4gIHNvdW5kLnVzZSgnc2xpZGUnKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Fib3V0JykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVB1enpsZUxpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBwdXp6bGVzLmxpc3Qoc2VsZWN0ZWRNb2RlKVxuICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX3B1enpsZV9zZWxlY3QnKVxuICBjb25zdCByZWNvcmRzID0gc3RvcmUuZ2V0KCdyZWNvcmRzJylcbiAgc2VsZWN0LmlubmVySFRNTCA9ICcnXG4gIGxpc3QuZm9yRWFjaCgodGV4dCwgaSkgPT4ge1xuICAgIGxldCBwYXNzZWQgPSByZWNvcmRzLnNvbWUocmVjb3JkID0+IHJlY29yZC5tb2RlID09PSBzZWxlY3RlZE1vZGUgJiYgcmVjb3JkLnNjb3JlID4gMCAmJiByZWNvcmQubmFtZSA9PT0gdGV4dClcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgZWwudmFsdWUgPSBpXG4gICAgZWwudGV4dENvbnRlbnQgPSBgJHtpIDwgOSA/IGBcXHUwMEEwJHtpICsgMX1gIDogaSArIDF9LiAke3RleHR9JHtwYXNzZWQgPyAnIFxcdTI3MTQnIDogJyd9YFxuICAgIHNlbGVjdC5hcHBlbmQoZWwpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVB1enpsZVNlbGVjdG9yKCkge1xuICBjb25zdCBzdGF0ZSA9IG5ldyBTdGF0ZSgpXG4gIGNvbnN0IGxhbmcgPSBzdGF0ZS5sYW5nXG4gIGNvbnN0IGNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbXBvbmVudC5jbGFzc05hbWUgPSAnbW9kYWxfX3B1enpsZSdcblxuICAvLyBMZWZ0XG4gIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBsZWZ0LmNsYXNzTmFtZSA9ICdtb2RhbF9fcHV6emxlX2xlZnQnXG5cbiAgY29uc3QgbGFiZWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gIGxhYmVsMS50ZXh0Q29udGVudCA9IExvY1tsYW5nXS5zZWxlY3RQdXp6bGVcblxuICBjb25zdCB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgd3JhcC5jbGFzc05hbWUgPSAnbW9kYWxfX3Njcm9sbF93cmFwJ1xuXG4gIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gIHNlbGVjdC5jbGFzc05hbWUgPSAnbW9kYWxfX3B1enpsZV9zZWxlY3Qgc2Nyb2xsZWQnXG4gIHNlbGVjdC5zaXplID0gMTBcbiAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUHV6emxlQ2hhbmdlKVxuXG4gIHdyYXAuYXBwZW5kKHNlbGVjdClcbiAgbGVmdC5hcHBlbmQobGFiZWwxLCB3cmFwKVxuXG4gIC8vIFJpZ2h0XG4gIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgcmlnaHQuY2xhc3NOYW1lID0gJ21vZGFsX19wdXp6bGVfcmlnaHQnXG5cbiAgY29uc3QgbGFiZWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gIGxhYmVsMi50ZXh0Q29udGVudCA9IExvY1tsYW5nXS5wcmV2aWV3XG5cbiAgY29uc3QgcHJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHByZXZpZXcuY2xhc3NOYW1lID0gJ21vZGFsX19wdXp6bGVfcHJldmlldy13cmFwJ1xuICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gIGZpZWxkLmNsYXNzTmFtZSA9ICdtb2RhbF9fcHV6emxlX3ByZXZpZXcnXG4gIGZpZWxkLndpZHRoID0gNzVcbiAgZmllbGQuaGVpZ2h0ID0gNzVcbiAgZmllbGQudGV4dENvbnRlbnQgPSAnUHJldmlldyBmaWVsZCdcbiAgcHJldmlldy5hcHBlbmQoZmllbGQpXG4gIHJpZ2h0LmFwcGVuZChsYWJlbDIsIHByZXZpZXcpXG5cbiAgY29tcG9uZW50LmFwcGVuZChsZWZ0LCByaWdodClcbiAgcmV0dXJuIGNvbXBvbmVudFxufVxuXG5jb25zdCBoYW5kbGVQdXp6bGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fZ2FtZV9idG4nKS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpXG4gIHNlbGVjdGVkUHV6emxlID0gTnVtYmVyKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpXG4gIHNvdW5kLnVzZSgnc3RlcCcpXG4gIGRyYXdQcmV2aWV3KClcbn1cblxuY29uc3QgZHJhd1ByZXZpZXcgPSAoKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gbmV3IFRoZW1lKClcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19wdXp6bGVfcHJldmlldycpXG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gIGNvbnN0IGFyciA9IHB1enpsZXMuZ2V0KHNlbGVjdGVkTW9kZSwgc2VsZWN0ZWRQdXp6bGUpLmRhdGFcbiAgY29uc3QgU0laRSA9IDc1XG4gIGNvbnN0IFMgPSBTSVpFIC8gNSAvIChzZWxlY3RlZE1vZGUgKyAxKVxuICBjb25zdCByb3dzID0gYXJyLmxlbmd0aFxuXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgU0laRSwgU0laRSlcbiAgY3R4LmZpbGxTdHlsZSA9IHRoZW1lLmNvbG9yMTAwXG4gIGZvciAobGV0IHkgPSAwOyB5IDwgcm93czsgeSArPSAxKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCByb3dzOyB4ICs9IDEpIHtcbiAgICAgIGlmIChhcnJbeV1beF0pIHtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHggKiBTLCB5ICogUywgUywgUylcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuY29uc3QgaGFuZGxlTW9kZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgY29uc3Qgc3RhdGUgPSBuZXcgU3RhdGUoKVxuICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpXG4gIHNlbGVjdGVkTW9kZSA9IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpXG4gIHNvdW5kLnVzZSgnc3RlcCcpXG4gIHVwZGF0ZVB1enpsZUxpc3QoKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2RlU2VsZWN0b3IoKSB7XG4gIGNvbnN0IG1vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBtb2RlLmNsYXNzTmFtZSA9ICdtb2RhbF9fbW9kZSBtb2RlJ1xuICBHQU1FLm1vZGVzLmZvckVhY2goKG5hbWUsIGkpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC5jbGFzc05hbWUgPSAnbW9kYWxfX21vZGVfc2VsZWN0IG1vZGUtc2VsZWN0J1xuICAgIGlucHV0LnR5cGUgPSAncmFkaW8nXG4gICAgaW5wdXQudmFsdWUgPSBpXG4gICAgaW5wdXQubmFtZSA9ICdtX21vZGUnXG4gICAgaW5wdXQuaWQgPSBgbV9tb2RlJHtpfWBcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVNb2RlQ2hhbmdlKVxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbmFtZVxuICAgIGxhYmVsLmh0bWxGb3IgPSBgbV9tb2RlJHtpfWBcbiAgICBtb2RlLmFwcGVuZChpbnB1dCwgbGFiZWwpXG4gIH0pXG4gIHJldHVybiBtb2RlXG59XG5cbmNvbnN0IGhhbmRsZU1vZGFsQ2xpY2sgPSBldmVudCA9PiB7XG4gIGlmIChldmVudC50YXJnZXQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlTW9kYWxHYW1lID0gKCkgPT4ge1xuICBjb25zdCBzdGF0ZSA9IG5ldyBTdGF0ZSgpXG4gIGNvbnN0IGxhbmcgPSBzdGF0ZS5sYW5nXG5cbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBtb2RhbC5jbGFzc05hbWUgPSAnbW9kYWxfX2dhbWUgaGlkZGVuJ1xuICBjb25zdCBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGlubmVyLmNsYXNzTmFtZSA9ICdtb2RhbF9faW5uZXInXG4gIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBsZWZ0LmNsYXNzTmFtZSA9ICdtb2RhbF9fbGVmdCdcbiAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICByaWdodC5jbGFzc05hbWUgPSAnbW9kYWxfX3JpZ2h0J1xuICBjb25zdCBib3R0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYm90dC5jbGFzc05hbWUgPSAnbW9kYWxfX2JvdHQnXG5cbiAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjbG9zZS5jbGFzc05hbWUgPSAnbW9kYWxfX2Nsb3NlIGhleC1idG4nXG4gIGNvbnN0IGNsb3NlSW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCBjbG9zZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNsb3NlSW1nLmNsYXNzTmFtZSA9ICdtb2RhbF9fY2xvc2VfaWNvbidcbiAgY2xvc2VJbm5lci5hcHBlbmQoY2xvc2VJbWcpXG4gIGNsb3NlLmFwcGVuZChjbG9zZUlubmVyKVxuICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpKVxuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICB0aXRsZS5jbGFzc05hbWUgPSAnbW9kYWxfX3RpdGxlJ1xuICB0aXRsZS50ZXh0Q29udGVudCA9IExvY1tsYW5nXS5zdGFydE5ld0dhbWVcblxuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYnV0dG9ucy5jbGFzc05hbWUgPSAnbW9kYWxfX2J1dHRvbnMnXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGJ0bi5jbGFzc05hbWUgPSAnbW9kYWxfX2dhbWVfYnRuIGJ1dHRvbidcbiAgYnRuLnRleHRDb250ZW50ID0gTG9jW2xhbmddLnN0YXJ0XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVN0YXJ0Q2xpY2spXG4gIGNvbnN0IHJuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHJuZC5jbGFzc05hbWUgPSAnYnV0dG9uJ1xuICBybmQudGV4dENvbnRlbnQgPSBMb2NbbGFuZ10ucmFuZG9tR2FtZVxuICBybmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydFJhbmRvbUdhbWUpXG4gIGJ1dHRvbnMuYXBwZW5kKGJ0biwgcm5kKVxuXG4gIGlubmVyLmFwcGVuZChsZWZ0LCByaWdodCwgYm90dCwgY2xvc2UsIHRpdGxlLCBjcmVhdGVNb2RlU2VsZWN0b3IoKSwgY3JlYXRlUHV6emxlU2VsZWN0b3IoKSwgYnV0dG9ucylcblxuICBtb2RhbC5hcHBlbmQoaW5uZXIpXG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTW9kYWxDbGljaylcbiAgcmV0dXJuIG1vZGFsXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVNb2RhbFJlc3VsdHMgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXRlID0gbmV3IFN0YXRlKClcbiAgY29uc3QgbGFuZyA9IHN0YXRlLmxhbmdcblxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIG1vZGFsLmNsYXNzTmFtZSA9ICdtb2RhbF9fcmVzbHQgaGlkZGVuJ1xuICBjb25zdCBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGlubmVyLmNsYXNzTmFtZSA9ICdtb2RhbF9faW5uZXInXG4gIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBsZWZ0LmNsYXNzTmFtZSA9ICdtb2RhbF9fbGVmdCdcbiAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICByaWdodC5jbGFzc05hbWUgPSAnbW9kYWxfX3JpZ2h0J1xuICBjb25zdCBib3R0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYm90dC5jbGFzc05hbWUgPSAnbW9kYWxfX2JvdHQnXG5cbiAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjbG9zZS5jbGFzc05hbWUgPSAnbW9kYWxfX2Nsb3NlIGhleC1idG4nXG4gIGNvbnN0IGNsb3NlSW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCBjbG9zZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNsb3NlSW1nLmNsYXNzTmFtZSA9ICdtb2RhbF9fY2xvc2VfaWNvbidcbiAgY2xvc2VJbm5lci5hcHBlbmQoY2xvc2VJbWcpXG4gIGNsb3NlLmFwcGVuZChjbG9zZUlubmVyKVxuICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpKVxuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICB0aXRsZS5jbGFzc05hbWUgPSAnbW9kYWxfX3RpdGxlJ1xuICB0aXRsZS50ZXh0Q29udGVudCA9IExvY1tsYW5nXS53aW5cblxuICBjb25zdCBkZXNjciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBkZXNjci5jbGFzc05hbWUgPSAnbW9kYWxfX3Jlc2x0X2Rlc2NyJ1xuXG4gIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIHAxLmNsYXNzTmFtZSA9ICdtb2RhbF9fcmVzbHRfZGVzY3InXG4gIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgdGltZS5jbGFzc05hbWUgPSAnbW9kYWxfX3RpbWUnXG4gIHRpbWUudGV4dENvbnRlbnQgPSAnMDA6MDAnXG4gIHAxLmFwcGVuZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHtMb2NbbGFuZ10udGltZVVzZWR9OmApLCB0aW1lKVxuXG4gIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIHAyLmNsYXNzTmFtZSA9ICdtb2RhbF9fcmVzbHRfZGVzY3InXG4gIGNvbnN0IHR1cm5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gIHR1cm5zLmNsYXNzTmFtZSA9ICdtb2RhbF9fdHVybnMnXG4gIHR1cm5zLnRleHRDb250ZW50ID0gJzAnXG4gIHAyLmFwcGVuZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHtMb2NbbGFuZ10udHVybnNVc2VkfTpgKSwgdHVybnMpXG5cbiAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgcDMuY2xhc3NOYW1lID0gJ21vZGFsX19yZXNsdF9kZXNjcidcbiAgY29uc3Qgc2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgc2NvcmUuY2xhc3NOYW1lID0gJ21vZGFsX19zY29yZSdcbiAgc2NvcmUudGV4dENvbnRlbnQgPSAnMCdcbiAgcDMuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke0xvY1tsYW5nXS5zY29yZX06YCksIHNjb3JlKVxuICBjb25zdCBzb2x1dGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHNvbHV0aW9uLmNsYXNzTmFtZSA9ICdtb2RhbF9fc29sdXRpb24nXG4gIHNvbHV0aW9uLnRleHRDb250ZW50ID0gYCgke0xvY1tsYW5nXS5zb2x1dGlvblVzZWR9KWBcblxuICBjb25zdCBzaHJpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBzaHJpa2UuY2xhc3NOYW1lID0gJ21vZGFsX19yZXNsdF9zaHJpa2UnXG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYnRuLmNsYXNzTmFtZSA9ICdidXR0b24nXG4gIGJ0bi50ZXh0Q29udGVudCA9ICdPSydcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJykpXG5cbiAgaW5uZXIuYXBwZW5kKGxlZnQsIHJpZ2h0LCBib3R0LCBjbG9zZSwgdGl0bGUsIGRlc2NyLCBwMSwgcDIsIHAzLCBzb2x1dGlvbiwgc2hyaWtlLCBidG4pXG4gIG1vZGFsLnJlc2x0ID0geyB0aXRsZSwgZGVzY3IsIHRpbWUsIHR1cm5zLCBzY29yZSwgc2hyaWtlLCBzb2x1dGlvbiB9XG5cbiAgbW9kYWwuYXBwZW5kKGlubmVyKVxuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU1vZGFsQ2xpY2spXG4gIHJldHVybiBtb2RhbFxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlU2lkZU1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXRlID0gbmV3IFN0YXRlKClcbiAgY29uc3QgbGFuZyA9IHN0YXRlLmxhbmdcbiAgY29uc3QgaXRlbXMgPSBbJ25ld0dhbWUnLCAncmFuZG9tR2FtZScsICdsb2FkR2FtZScsICdlZGl0b3InLCAncmVjb3JkcycsICdhYm91dCddXG5cbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIG1lbnUuY2xhc3NOYW1lID0gJ21lbnVfX3NpZGUnXG4gIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgcmlnaHQuY2xhc3NOYW1lID0gJ21lbnVfX3NpZGVfcmlnaHQnXG5cbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JylcbiAgbmF2LmNsYXNzTmFtZSA9ICdtZW51X19zaWRlX25hdidcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgbGlzdC5jbGFzc05hbWUgPSAnbWVudV9fbGlzdCdcblxuICBpdGVtcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgIGNvbnN0IGlkID0gbmFtZS5tYXRjaCgvXlthLXpdKy8pWzBdXG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBpdGVtLmNsYXNzTmFtZSA9ICdtZW51X19saXN0X2l0ZW0nXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4gc291bmQudXNlKCdzdGVwJykpXG5cbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJ0bi5jbGFzc05hbWUgPSAnaGV4LWJ0bidcbiAgICBjb25zdCBidG5CZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYnRuSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBidG5JbWcuY2xhc3NOYW1lID0gYGljb25fJHtpZH1gXG4gICAgYnRuQmcuYXBwZW5kKGJ0bkltZylcbiAgICBidG4uYXBwZW5kKGJ0bkJnKVxuXG4gICAgaXRlbS5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoTG9jW2xhbmddW25hbWVdKSwgYnRuKVxuICAgIGxpc3QuYXBwZW5kKGl0ZW0pXG4gIH0pXG5cbiAgbmF2LmFwcGVuZChsaXN0KVxuICBtZW51LmFwcGVuZChyaWdodCwgbmF2KVxuICByZXR1cm4gbWVudVxufVxuXG5leHBvcnQgY29uc3QgaW5pdE1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXRlID0gbmV3IFN0YXRlKClcbiAgY29uc3QgbGFuZyA9IHN0YXRlLmxhbmdcblxuICBjb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudV9fbGlzdF9pdGVtJylcbiAgbWVudUl0ZW1zWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnROZXdHYW1lKVxuICBtZW51SXRlbXNbMV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydFJhbmRvbUdhbWUpXG4gIG1lbnVJdGVtc1syXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIExvYWRHYW1lKVxuICBtZW51SXRlbXNbM10uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuRWRpdG9yKVxuICBtZW51SXRlbXNbNF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93UmVjb3JkcylcbiAgbWVudUl0ZW1zWzVdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0Fib3V0KVxuXG4gIHNlbGVjdGVkTW9kZSA9IHN0YXRlLm1vZGVcblxuICBjb25zdCBtb2RlU2VsZWN0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19tb2RlX3NlbGVjdCcpXG4gIG1vZGVTZWxlY3RvcnNbc2VsZWN0ZWRNb2RlXS5jaGVja2VkID0gdHJ1ZVxufVxuIiwiaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLi91dGlscy9zdGF0ZSdcbmltcG9ydCB7IEdBTUUgfSBmcm9tICcuL2NvbnN0YW50cydcblxuY29uc3Qgc3RhdGUgPSBuZXcgU3RhdGUoKVxuXG5mdW5jdGlvbiBoYW5kbGVNb2RlQ2hhbmdlKCkge1xuICAvLyBjb25zb2xlLmxvZygnTW9kZTonLHRoaXMudmFsdWUpXG4gIHN0YXRlLm1vZGUgPSB0aGlzLnZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb2RlU2VsZWN0b3IoKSB7XG4gIGNvbnN0IG1vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBtb2RlLmNsYXNzTmFtZSA9ICdlZGl0b3JfX21vZGUgbW9kZSBoaWRkZW4nXG4gIEdBTUUubW9kZXMuZm9yRWFjaCgobmFtZSwgaSkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LmNsYXNzTmFtZSA9ICdlZGl0b3JfX21vZGVfc2VsZWN0IG1vZGUtc2VsZWN0J1xuICAgIGlucHV0LnR5cGUgPSAncmFkaW8nXG4gICAgaW5wdXQudmFsdWUgPSBpXG4gICAgaW5wdXQubmFtZSA9ICdlX21vZGUnXG4gICAgaW5wdXQuaWQgPSBgZV9tb2RlJHtpfWBcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVNb2RlQ2hhbmdlKVxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbmFtZVxuICAgIGxhYmVsLmh0bWxGb3IgPSBgZV9tb2RlJHtpfWBcbiAgICBtb2RlLmFwcGVuZChpbnB1dCwgbGFiZWwpXG4gIH0pXG4gIHJldHVybiBtb2RlXG59XG4iLCJmdW5jdGlvbiBjaGVja0xpbmsodGV4dCkge1xuICBjb25zdCBhcnIgPSBbXVxuICBmdW5jdGlvbiBjaGVja2VyKHN0cikge1xuICAgIGNvbnN0IG1hdGNoID0gc3RyLm1hdGNoKC9cXFsoW1xcd1xcc1xcZF0rKVxcXVxcKChodHRwcz86XFwvXFwvW1xcd1xcZC4vPz0jQF0rKVxcKS8pXG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBjb25zdCBpZCA9IG1hdGNoWzFdXG4gICAgICBjb25zdCB1cmwgPSBtYXRjaFsyXVxuICAgICAgYXJyLnB1c2goeyB0ZXh0OiBzdHIuc2xpY2UoMCwgbWF0Y2guaW5kZXgpLCBpZCwgdXJsIH0pXG4gICAgICBjaGVja2VyKHN0ci5zdWJzdHJpbmcobWF0Y2guaW5kZXggKyBpZC5sZW5ndGggKyB1cmwubGVuZ3RoICsgNCkpXG4gICAgfSBlbHNlIGlmIChhcnIubGVuZ3RoKSBhcnIucHVzaCh7IHRleHQ6IHN0ciB9KVxuICB9XG4gIGNoZWNrZXIodGV4dClcbiAgcmV0dXJuIGFyci5sZW5ndGggPyBhcnIgOiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZSh0ZXh0KSB7XG4gIGlmICh0ZXh0LnN0YXJ0c1dpdGgoJyMjIyAnKSkge1xuICAgIGNvbnN0IGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgaC50ZXh0Q29udGVudCA9IHRleHQuc3Vic3RyaW5nKDQpXG4gICAgcmV0dXJuIGhcbiAgfVxuXG4gIGNvbnN0IGxpbmtzID0gY2hlY2tMaW5rKHRleHQpXG4gIGlmIChsaW5rcykge1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBsaW5rcy5mb3JFYWNoKCh7IHRleHQsIGlkLCB1cmwgfSkgPT4ge1xuICAgICAgcC5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpXG4gICAgICBpZiAoaWQpIHtcbiAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgICAgICBhLmhyZWYgPSB1cmxcbiAgICAgICAgYS50ZXh0Q29udGVudCA9IGlkXG4gICAgICAgIHAuYXBwZW5kKGEpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcFxuICB9XG5cbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBwLnRleHRDb250ZW50ID0gdGV4dFxuICByZXR1cm4gcFxufVxuIiwiaW1wb3J0IHsgY3JlYXRlVm9sdW1lQ29udHJvbCB9IGZyb20gJy4vdm9sdW1lJ1xuaW1wb3J0IHsgU291bmQgfSBmcm9tICcuLi91dGlscy9zb3VuZCdcblxuY29uc3Qgc291bmQgPSBuZXcgU291bmQoKVxubGV0IHRpdGxlID0gbnVsbFxubGV0IHByb2dyZXNzID0gMFxuXG5jb25zdCByZWFkeUNhbGxiYWNrID0gbG9hZGVkID0+IHtcbiAgaWYgKGxvYWRlZCA9PT0gMTAwICYmIHRpdGxlLnRleHRDb250ZW50LmluY2x1ZGVzKCdsb2FkaW5nJykpIHRpdGxlLnRleHRDb250ZW50ID0gJydcbiAgaWYgKHRpdGxlICYmICFzb3VuZC5fcGxheWluZyAmJiAhc291bmQubXVzaWMubXV0ZWQpIHtcbiAgICBwcm9ncmVzcyArPSAxXG4gICAgaWYgKHByb2dyZXNzID4gMykgcHJvZ3Jlc3MgPSAxXG4gICAgY29uc3QgZG90cyA9ICcuJy5yZXBlYXQocHJvZ3Jlc3MgLSAxKVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7ZG90c31sb2FkaW5nJHtkb3RzfWBcbiAgfVxufVxuXG5jb25zdCBzdGFydFBsYXlDYWxsYmFjayA9IG5hbWUgPT4ge1xuICBpZiAodGl0bGUpIHtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IG5hbWVcbiAgfVxufVxuXG5jb25zdCBleGNlcHRpb25DYWxsYmFjayA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZvbHVtZV9fbXVzaWNfaWNvbicpLmNsYXNzTGlzdC5hZGQoJ3ZvbHVtZS1vZmYnKVxuICB0aXRsZS50ZXh0Q29udGVudCA9ICcnXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQbGF5ZXIoKSB7XG4gIGNvbnN0IHBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHBsYXllci5jbGFzc05hbWUgPSAncGxheWVyX19hdWRpbydcbiAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgZmllbGQuY2xhc3NOYW1lID0gJ3BsYXllcl9fdGl0bGUnXG4gIHRpdGxlID0gZmllbGRcblxuICBzb3VuZC5yZWFkeUNhbGxiYWNrID0gcmVhZHlDYWxsYmFja1xuICBzb3VuZC5zdGFydFBsYXlDYWxsYmFjayA9IHN0YXJ0UGxheUNhbGxiYWNrXG4gIHNvdW5kLmV4Y2VwdGlvbkNhbGxiYWNrID0gZXhjZXB0aW9uQ2FsbGJhY2tcblxuICBwbGF5ZXIuYXBwZW5kKGNyZWF0ZVZvbHVtZUNvbnRyb2woKSwgdGl0bGUpXG4gIHJldHVybiBwbGF5ZXJcbn1cbiIsImltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vdXRpbHMvc3RhdGUnXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJy4uL3V0aWxzL3N0b3JlJ1xuaW1wb3J0IHsgZm9ybWF0VGltZSwgZm9ybWF0RGF0ZSB9IGZyb20gJy4uL3V0aWxzL2Zvcm1hdCdcbmltcG9ydCBMb2MgZnJvbSAnLi4vZGF0YS9sb2MuanNvbicgYXNzZXJ0IHsgdHlwZTogJ2pzb24nIH1cblxuY29uc3Qgc3RvcmUgPSBuZXcgU3RvcmUoKVxuXG5leHBvcnQgY29uc3QgdXBkYXRlR2FtZVJlY29yZHMgPSAoKSA9PiB7XG4gIGNvbnN0IHJlY29yZHMgPSBzdG9yZS5nZXQoJ3JlY29yZHMnKVxuICBjb25zdCBjb21wb25lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX3JlY29yZHNfbGlzdCcpXG4gIGNvbXBvbmVudC5pbm5lckhUTUwgPSAnJ1xuICAvLyBET0RPOiBzbGljZSB3YXMgYWRkZWQgdG8gcGFzcyBhIHRhc2sgY3JpdGVyaWEgYWJvdXQgXCJsYXN0IDUgcmVjb3Jkc1wiLiBSZW1vdmUgaXQgYWZ0ZXIgdGhlIGNyb3NzLWNoZWNrLlxuICByZWNvcmRzXG4gICAgLnNvcnQoKGEsIGIpID0+IHBhcnNlSW50KG5ldyBEYXRlKGIuZGF0ZSkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYS5kYXRlKS5nZXRUaW1lKCkpKVxuICAgIC5zbGljZSgwLCA1KVxuICAgIC5mb3JFYWNoKHJlY29yZCA9PiB7XG4gICAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgbGluZS5jbGFzc05hbWUgPSAnbW9kYWxfX3JlY29yZHNfaXRlbSdcbiAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBmb3JtYXREYXRlKHJlY29yZC5kYXRlKVxuICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgbmFtZS50ZXh0Q29udGVudCA9IHJlY29yZC5uYW1lXG4gICAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICB0aW1lLnRleHRDb250ZW50ID0gZm9ybWF0VGltZShyZWNvcmQudGltZSlcbiAgICAgIGNvbnN0IHR1cm5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICB0dXJucy50ZXh0Q29udGVudCA9IHJlY29yZC50dXJuc1xuICAgICAgY29uc3Qgc2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIHNjb3JlLnRleHRDb250ZW50ID0gcmVjb3JkLnNjb3JlXG4gICAgICBsaW5lLmFwcGVuZChkYXRlLCBuYW1lLCB0aW1lLCB0dXJucywgc2NvcmUpXG4gICAgICBjb21wb25lbnQuYXBwZW5kKGxpbmUpXG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU1vZGFsUmVjb3JkcyA9ICgpID0+IHtcbiAgY29uc3Qgc3RhdGUgPSBuZXcgU3RhdGUoKVxuICBjb25zdCBsYW5nID0gc3RhdGUubGFuZ1xuXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbW9kYWwuY2xhc3NOYW1lID0gJ21vZGFsX19yZWNvcmRzIGhpZGRlbidcbiAgY29uc3QgaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBpbm5lci5jbGFzc05hbWUgPSAnbW9kYWxfX2lubmVyJ1xuICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbGVmdC5jbGFzc05hbWUgPSAnbW9kYWxfX2xlZnQnXG4gIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgcmlnaHQuY2xhc3NOYW1lID0gJ21vZGFsX19yaWdodCdcbiAgY29uc3QgYm90dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGJvdHQuY2xhc3NOYW1lID0gJ21vZGFsX19ib3R0J1xuXG4gIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY2xvc2UuY2xhc3NOYW1lID0gJ21vZGFsX19jbG9zZSBoZXgtYnRuJ1xuICBjb25zdCBjbG9zZUlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgY2xvc2VJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjbG9zZUltZy5jbGFzc05hbWUgPSAnbW9kYWxfX2Nsb3NlX2ljb24nXG4gIGNsb3NlSW5uZXIuYXBwZW5kKGNsb3NlSW1nKVxuICBjbG9zZS5hcHBlbmQoY2xvc2VJbm5lcilcbiAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKSlcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgdGl0bGUuY2xhc3NOYW1lID0gJ21vZGFsX190aXRsZSdcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBMb2NbbGFuZ10ucmVjb3Jkc1RpdGxlXG5cbiAgY29uc3Qgd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHdyYXAuY2xhc3NOYW1lID0gJ21vZGFsX19zY3JvbGxfd3JhcCdcbiAgY29uc3QgcmVjb3JkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgcmVjb3Jkcy5jbGFzc05hbWUgPSAnbW9kYWxfX3JlY29yZHNfbGlzdCBzY3JvbGxlZCdcbiAgd3JhcC5hcHBlbmQocmVjb3JkcylcblxuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBidG4uY2xhc3NOYW1lID0gJ2J1dHRvbidcbiAgYnRuLnRleHRDb250ZW50ID0gJ09LJ1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKSlcblxuICBpbm5lci5hcHBlbmQobGVmdCwgcmlnaHQsIGJvdHQsIGNsb3NlLCB0aXRsZSwgd3JhcCwgYnRuKVxuICBtb2RhbC5hcHBlbmQoaW5uZXIpXG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIG1vZGFsXG59XG4iLCJpbXBvcnQgeyBHQU1FIH0gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4uL3V0aWxzL3N0YXRlJ1xuaW1wb3J0IHsgU291bmQgfSBmcm9tICcuLi91dGlscy9zb3VuZCdcbmltcG9ydCBMb2MgZnJvbSAnLi4vZGF0YS9sb2MuanNvbicgYXNzZXJ0IHsgdHlwZTogJ2pzb24nIH1cblxuY29uc3Qgc291bmQgPSBuZXcgU291bmQoKVxuXG5jb25zdCBzaG93VGltZSA9IChlbCwgbikgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgbGV0IG51bSA9IDBcbiAgICBmdW5jdGlvbiByaXplKCkge1xuICAgICAgbnVtICs9IE1hdGgubWF4KH5+KChuIC0gbnVtKSAvIDEwKSAqIDIsIDEpXG4gICAgICBjb25zdCBtID0gfn4obnVtIC8gNjApXG4gICAgICBjb25zdCBzID0gbnVtICUgNjBcbiAgICAgIGVsLnRleHRDb250ZW50ID0gYCR7KCcwJyArIG0pLnNsaWNlKC0yKX06JHsoJzAnICsgcykuc2xpY2UoLTIpfWBcbiAgICAgIHNvdW5kLnVzZSgnc3RlcCcpXG4gICAgICBpZiAobnVtID49IG4pIHJldHVybiByZXNvbHZlKClcbiAgICAgIHNldFRpbWVvdXQocml6ZSwgR0FNRS5zcGYgKiAyKVxuICAgIH1cbiAgICByaXplKClcbiAgfSlcbn1cblxuY29uc3Qgc2hvd051bWJlciA9IChlbCwgZnJvbSwgbikgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgbGV0IG51bSA9IGZyb21cbiAgICBmdW5jdGlvbiByaXplKCkge1xuICAgICAgbnVtICs9IE1hdGgubWF4KH5+KChuIC0gbnVtKSAvIDEwKSAqIDIsIDEpXG4gICAgICBlbC50ZXh0Q29udGVudCA9IG51bVxuICAgICAgc291bmQudXNlKCdzdGVwJylcbiAgICAgIGlmIChudW0gPj0gbikgcmV0dXJuIHJlc29sdmUoKVxuICAgICAgc2V0VGltZW91dChyaXplLCBHQU1FLnNwZiAqIDIpXG4gICAgfVxuICAgIHJpemUoKVxuICB9KVxufVxuXG5leHBvcnQgY29uc3Qgc2hvd1Jlc3VsdHMgPSBhc3luYyAoeyB0aW1lLCB0dXJucywgc2NvcmUsIG1zZyA9ICd3aW4nLCBzb2x1dGlvbiA9IGZhbHNlLCBkZXNjciA9IG51bGwgfSkgPT4ge1xuICBjb25zdCBzdGF0ZSA9IG5ldyBTdGF0ZSgpXG4gIGNvbnN0IGxhbmcgPSBzdGF0ZS5sYW5nXG4gIGNvbnN0IHsgdGltZVNjb3JlLCB0dXJuc1Njb3JlIH0gPSBzY29yZVxuXG4gIHNvdW5kLnNheShtc2cpXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19yZXNsdCcpXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJylcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgbW9kYWwucmVzbHQuc29sdXRpb24uY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpXG4gIG1vZGFsLnJlc2x0LnNjb3JlLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKVxuICBtb2RhbC5yZXNsdC5zaHJpa2UuY2xhc3NMaXN0LnRvZ2dsZSgnbG9vc2UnLCBtc2cgIT09ICd3aW4nKVxuICBtb2RhbC5yZXNsdC50aXRsZS50ZXh0Q29udGVudCA9IExvY1tsYW5nXVttc2ddXG4gIG1vZGFsLnJlc2x0LmRlc2NyLnRleHRDb250ZW50ID0gZGVzY3IgPyBMb2NbbGFuZ11bZGVzY3JdIDogJydcbiAgbW9kYWwucmVzbHQuc2NvcmUudGV4dENvbnRlbnQgPSAnMCdcblxuICBhd2FpdCBzaG93VGltZShtb2RhbC5yZXNsdC50aW1lLCB0aW1lKVxuICBhd2FpdCBzaG93TnVtYmVyKG1vZGFsLnJlc2x0LnNjb3JlLCAwLCB0aW1lU2NvcmUpXG4gIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCksIDUwMCkpXG4gIGF3YWl0IHNob3dOdW1iZXIobW9kYWwucmVzbHQudHVybnMsIDAsIHR1cm5zKVxuICBhd2FpdCBzaG93TnVtYmVyKG1vZGFsLnJlc2x0LnNjb3JlLCB0aW1lU2NvcmUsIHRpbWVTY29yZSArIHR1cm5zU2NvcmUpXG5cbiAgaWYgKG1zZyA9PT0gJ3dpbicgJiYgc29sdXRpb24pIHtcbiAgICBtb2RhbC5yZXNsdC5zb2x1dGlvbi5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJylcbiAgfVxuICBpZiAoc29sdXRpb24gfHwgbXNnICE9PSAnd2luJykge1xuICAgIG1vZGFsLnJlc2x0LnNjb3JlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCdcbiAgfVxuXG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJylcbn1cbiIsImltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vdXRpbHMvdGhlbWUnXG5cbmV4cG9ydCBjb25zdCB0aGVtZVVwZGF0ZSA9ICgpID0+IHtcbiAgY29uc3QgdGhlbWUgPSBuZXcgVGhlbWUoKVxuICBjb25zdCBuYW1lID0gdGhlbWUubmFtZVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9fY2xvc2VfaWNvbicpLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaW52ZXJ0JywgbmFtZSA9PT0gJ2RhcmsnKSlcblxuICAvLyBHYW1lXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX19yZXNldF9pY29uJykuY2xhc3NMaXN0LnRvZ2dsZSgnaW52ZXJ0JywgbmFtZSA9PT0gJ2RhcmsnKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9fc2F2ZV9pY29uJykuY2xhc3NMaXN0LnRvZ2dsZSgnaW52ZXJ0JywgbmFtZSA9PT0gJ2RhcmsnKVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yc3NfX2xvZ28nKS5jbGFzc0xpc3QudG9nZ2xlKCdpbnZlcnQnLCBuYW1lICE9PSAnZGFyaycpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52b2x1bWVfX3NvdW5kX2ljb24nKS5jbGFzc0xpc3QudG9nZ2xlKCdpbnZlcnQnLCBuYW1lICE9PSAnZGFyaycpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52b2x1bWVfX211c2ljX2ljb24nKS5jbGFzc0xpc3QudG9nZ2xlKCdpbnZlcnQnLCBuYW1lICE9PSAnZGFyaycpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZycpLmNsYXNzTGlzdC50b2dnbGUoJ2JyaWdodCcsIG5hbWUgIT09ICdkYXJrJylcblxuICAvLyBTaWRlIG1lbnVcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb25fbmV3JykuY2xhc3NMaXN0LnRvZ2dsZSgnaW52ZXJ0JywgbmFtZSA9PT0gJ2RhcmsnKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWNvbl9yYW5kb20nKS5jbGFzc0xpc3QudG9nZ2xlKCdpbnZlcnQnLCBuYW1lID09PSAnZGFyaycpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29uX2xvYWQnKS5jbGFzc0xpc3QudG9nZ2xlKCdpbnZlcnQnLCBuYW1lID09PSAnZGFyaycpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29uX2VkaXRvcicpLmNsYXNzTGlzdC50b2dnbGUoJ2ludmVydCcsIG5hbWUgPT09ICdkYXJrJylcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb25fcmVjb3JkcycpLmNsYXNzTGlzdC50b2dnbGUoJ2ludmVydCcsIG5hbWUgPT09ICdkYXJrJylcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb25fYWJvdXQnKS5jbGFzc0xpc3QudG9nZ2xlKCdpbnZlcnQnLCBuYW1lID09PSAnZGFyaycpXG59XG4iLCJpbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uL3V0aWxzL3RoZW1lJ1xuaW1wb3J0IHsgR0FNRSB9IGZyb20gJy4uL21vZHVsZS9jb25zdGFudHMnXG5pbXBvcnQgeyBjcmVhdGVQbGF5ZXIgfSBmcm9tICcuL3BsYXllcidcbmltcG9ydCB7IGNyZWF0ZU1vZGVTZWxlY3RvciB9IGZyb20gJy4vbW9kZSdcbmltcG9ydCB7IGluaXRNZW51LCBjcmVhdGVNb2RhbEdhbWUsIGNyZWF0ZU1vZGFsUmVzdWx0cywgY3JlYXRlU2lkZU1lbnUgfSBmcm9tICcuL21lbnUnXG5pbXBvcnQgeyBjcmVhdGVNb2RhbFJlY29yZHMgfSBmcm9tICcuL3JlY29yZHMnXG5pbXBvcnQgeyBjcmVhdGVNb2RhbEFib3V0IH0gZnJvbSAnLi9hYm91dCdcbmltcG9ydCB7IHRoZW1lVXBkYXRlIH0gZnJvbSAnLi90aGVtZVVwZGF0ZSdcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vdXRpbHMvc3RhdGUnXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJy4uL3V0aWxzL3N0b3JlJ1xuaW1wb3J0IExvYyBmcm9tICcuLi9kYXRhL2xvYy5qc29uJyBhc3NlcnQgeyB0eXBlOiAnanNvbicgfVxuXG5jb25zdCB0aGVtZSA9IG5ldyBUaGVtZSgpXG5jb25zdCBzdG9yZSA9IG5ldyBTdG9yZSgpXG5jb25zdCBzdGF0ZSA9IG5ldyBTdGF0ZSgpXG5sZXQgcGVuZGluZyA9IDJcblxuZnVuY3Rpb24gY3JlYXRlQ2hhcnMoKSB7XG4gIGNvbnN0IGNoYXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY2hhcnMuY2xhc3NOYW1lID0gJ2NoYXJzJ1xuICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbGVmdC5jbGFzc05hbWUgPSAnY2hhcnNfX3NocmlrZSdcbiAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICByaWdodC5jbGFzc05hbWUgPSAnY2hhcnNfX2J1bGxkb2cnXG5cbiAgY29uc3Qgc2hyaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYmxvY2txdW90ZScpXG4gIHNocmlrZS5jbGFzc05hbWUgPSAnc3BlZWNoX19zaHJpa2UgaGlkZGVuJ1xuICBsZWZ0LmFwcGVuZChzaHJpa2UpXG4gIGNvbnN0IGJ1bGxkb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdibG9ja3F1b3RlJylcbiAgYnVsbGRvZy5jbGFzc05hbWUgPSAnc3BlZWNoX19idWxsZG9nIGhpZGRlbidcbiAgcmlnaHQuYXBwZW5kKGJ1bGxkb2cpXG5cbiAgY2hhcnMuYXBwZW5kKGxlZnQsIHJpZ2h0KVxuICByZXR1cm4gY2hhcnNcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3RhdHMoKSB7XG4gIGNvbnN0IHN0YXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgc3RhdHMuY2xhc3NOYW1lID0gJ2dhbWVfX3N0YXRzJ1xuXG4gIGNvbnN0IHR1cm5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gIHR1cm5zLmNsYXNzTmFtZSA9ICdzdGF0c19fdHVybnMnXG4gIHR1cm5zLnRleHRDb250ZW50ID0gJzAvMCdcblxuICBjb25zdCBwb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgcG9zLmNsYXNzTmFtZSA9ICdzdGF0c19fcG9zJ1xuICBwb3MudGV4dENvbnRlbnQgPSAnMDowJ1xuXG4gIGNvbnN0IHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB3cmFwLmNsYXNzTmFtZSA9ICdzdGF0c19fcHJvZ3Jlc3MnXG5cbiAgY29uc3QgdGltZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgdGltZXIuY2xhc3NOYW1lID0gJ3N0YXRzX190aW1lcidcbiAgdGltZXIudGV4dENvbnRlbnQgPSAnMDA6MDAnXG5cbiAgY29uc3QgcHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBwcm9ncmVzcy5jbGFzc05hbWUgPSAnc3RhdHNfX3Byb2dyZXNzX3dyYXAnXG4gIGNvbnN0IHByb2dyZXNzYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgcHJvZ3Jlc3NiYXIuY2xhc3NOYW1lID0gJ3N0YXRzX19wcm9ncmVzc19iYXInXG4gIHByb2dyZXNzLmFwcGVuZChwcm9ncmVzc2JhcilcblxuICB3cmFwLmFwcGVuZCh0aW1lciwgcHJvZ3Jlc3MpXG5cbiAgc3RhdHMuYXBwZW5kKHR1cm5zLCB3cmFwLCBwb3MpXG4gIHJldHVybiBzdGF0c1xufVxuXG5mdW5jdGlvbiBjcmVhdGVHYW1lRmllbGQoKSB7XG4gIGNvbnN0IGdhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBnYW1lLmNsYXNzTmFtZSA9ICdnYW1lJ1xuXG4gIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgZmllbGQuY2xhc3NOYW1lID0gJ2dhbWVfX2ZpZWxkJ1xuICBmaWVsZC53aWR0aCA9IEdBTUUuc2l6ZVxuICBmaWVsZC5oZWlnaHQgPSBHQU1FLnNpemVcbiAgZmllbGQudGV4dENvbnRlbnQgPSAnR2FtZSBmaWVsZCdcblxuICBjb25zdCBob3ZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gIGhvdmVyLmNsYXNzTmFtZSA9ICdnYW1lX19ob3ZlcidcbiAgaG92ZXIud2lkdGggPSBHQU1FLnNpemVcbiAgaG92ZXIuaGVpZ2h0ID0gR0FNRS5zaXplXG5cbiAgY29uc3QgcmVzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICByZXNldC5jbGFzc05hbWUgPSAnZ2FtZV9fcmVzZXQgaGV4LWJ0bidcbiAgY29uc3QgcmVzZXRJbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IHJlc2V0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgcmVzZXRJbWcuY2xhc3NOYW1lID0gJ2dhbWVfX3Jlc2V0X2ljb24nXG4gIHJlc2V0SW5uZXIuYXBwZW5kKHJlc2V0SW1nKVxuICByZXNldC5hcHBlbmQocmVzZXRJbm5lcilcblxuICBjb25zdCBzb2x1dGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHNvbHV0aW9uLmNsYXNzTmFtZSA9ICdnYW1lX19zb2x1dGlvbiBoZXgtYnRuJ1xuICBjb25zdCBzb2x1dGlvbklubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgc29sdXRpb25Jbm5lci50ZXh0Q29udGVudCA9ICchJ1xuICBzb2x1dGlvbi5hcHBlbmQoc29sdXRpb25Jbm5lcilcblxuICBjb25zdCBzYXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgc2F2ZS5jbGFzc05hbWUgPSAnZ2FtZV9fc2F2ZSBoZXgtYnRuJ1xuICBjb25zdCBzYXZlSW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCBzYXZlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgc2F2ZUltZy5jbGFzc05hbWUgPSAnZ2FtZV9fc2F2ZV9pY29uJ1xuICBzYXZlSW5uZXIuYXBwZW5kKHNhdmVJbWcpXG4gIHNhdmUuYXBwZW5kKHNhdmVJbm5lcilcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBoZWFkZXIuY2xhc3NOYW1lID0gJ2dhbWVfX2hlYWRlcidcbiAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBoZWFkZXJUZXh0LmNsYXNzTmFtZSA9ICdnYW1lX19oZWFkZXJfdGV4dCBoaWRkZW4nXG4gIGhlYWRlci5hcHBlbmQoaGVhZGVyVGV4dCwgY3JlYXRlTW9kZVNlbGVjdG9yKCkpXG5cbiAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGxlZnQuY2xhc3NOYW1lID0gJ2dhbWVfX2xlZnQnXG4gIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgcmlnaHQuY2xhc3NOYW1lID0gJ2dhbWVfX3JpZ2h0J1xuICBjb25zdCB0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB0b3AuY2xhc3NOYW1lID0gJ2dhbWVfX3RvcCdcbiAgY29uc3QgYm90dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGJvdHQuY2xhc3NOYW1lID0gJ2dhbWVfX2JvdHQnXG5cbiAgZ2FtZS5hcHBlbmQoaGVhZGVyLCBmaWVsZCwgaG92ZXIsIGxlZnQsIHJpZ2h0LCB0b3AsIGJvdHQsIHJlc2V0LCBzb2x1dGlvbiwgc2F2ZSwgY3JlYXRlU3RhdHMoKSwgY3JlYXRlU2F2ZUZvcm0oKSlcbiAgcmV0dXJuIGdhbWVcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2F2ZUZvcm0oKSB7XG4gIGNvbnN0IGxhbmcgPSBzdGF0ZS5sYW5nXG5cbiAgY29uc3Qgc2F2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICBzYXZlLmNsYXNzTmFtZSA9ICdlZGl0b3JfX3NhdmVfZm9ybSBoaWRkZW4nXG5cbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIG5hbWUuY2xhc3NOYW1lID0gJ2VkaXRvcl9fc2F2ZV9uYW1lJ1xuXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBpbnB1dC5uYW1lID0gJ25hbWUnXG4gIGlucHV0LnR5cGUgPSAndGV4dCdcbiAgaW5wdXQuYXV0b2NvbXBsZXRlID0gJ29mZidcbiAgaW5wdXQucGxhY2Vob2xkZXIgPSAnJ1xuICBpbnB1dC5jbGFzc05hbWUgPSAnZWRpdG9yX19zYXZlX25hbWUtdGV4dCdcblxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgbGFiZWwuY2xhc3NOYW1lID0gJ2VkaXRvcl9fc2F2ZV9uYW1lLWxhYmVsJ1xuICBsYWJlbC50ZXh0Q29udGVudCA9IExvY1tsYW5nXS5wdXp6bGVOYW1lXG5cbiAgbmFtZS5hcHBlbmQoaW5wdXQsIGxhYmVsKVxuXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGJ0bi50eXBlID0gJ3N1Ym1pdCdcbiAgYnRuLmNsYXNzTmFtZSA9ICdlZGl0b3JfX3NhdmVfYnRuIGJ1dHRvbidcbiAgYnRuLnRleHRDb250ZW50ID0gTG9jW2xhbmddLnNhdmVcblxuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbWVzc2FnZS5jbGFzc05hbWUgPSAnZWRpdG9yX19zYXZlX21lc3NhZ2UgaGlkZGVuJ1xuXG4gIHNhdmUuYXBwZW5kKG5hbWUsIGJ0biwgbWVzc2FnZSlcbiAgcmV0dXJuIHNhdmVcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxuICBtYWluLmNsYXNzTmFtZSA9ICdtYWluJ1xuXG4gIGNvbnN0IGJhc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBiYXNlLmNsYXNzTmFtZSA9ICdiYXNlJ1xuXG4gIGJhc2UuYXBwZW5kKGNyZWF0ZUdhbWVGaWVsZCgpKVxuXG4gIGNvbnN0IGJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYmcuY2xhc3NOYW1lID0gJ2JnJ1xuXG4gIG1haW4uYXBwZW5kKGJnLCBjcmVhdGVTaWRlTWVudSgpLCBjcmVhdGVQbGF5ZXIoKSwgYmFzZSwgY3JlYXRlQ2hhcnMoKSlcbiAgcmV0dXJuIG1haW5cbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJvbVRlbXBsYXRlKG5hbWUsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpXG4gIGVsLmNsYXNzTmFtZSA9IG5hbWVcbiAgY29uc3QgeGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuICB4aHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gdGhpcy5yZXNwb25zZVRleHRcbiAgICAgICAgcGVuZGluZyAtPSAxXG4gICAgICAgIGlmIChwZW5kaW5nIDw9IDApIGNhbGxiYWNrKClcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIGVsLmlubmVySFRNTCA9ICdQYWdlIG5vdCBmb3VuZC4nXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHhodHRwLm9wZW4oJ0dFVCcsIGAuL3RlbXBsYXRlLyR7bmFtZX0udG1wbGAsIHRydWUpXG4gIHhodHRwLnNlbmQoKVxuICByZXR1cm4gZWxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRVSSgpIHtcbiAgY29uc3QgbGFuZyA9IHN0b3JlLmdldCgnbGFuZycpXG4gIHN0YXRlLmxhbmcgPSBsYW5nXG4gIGNvbnNvbGUubG9nKCdsYW51YWdlOicsIGxhbmcpXG4gIGNvbnN0IHRoZW1lTmFtZSA9IHN0b3JlLmdldCgndGhlbWUnKVxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ3RoZW1lX19kYXJrJywgdGhlbWVOYW1lID09PSAnZGFyaycpXG5cbiAgY29uc3QgZ2V0VGhlbWVDb2xvcnMgPSBuYW1lID0+IHtcbiAgICB0aGVtZS5jb2xvcjAwID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWNvbG9yMDAnKVxuICAgIHRoZW1lLmNvbG9yNTAgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJy0tY29sb3I1MCcpXG4gICAgdGhlbWUuY29sb3I4MCA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1jb2xvcjgwJylcbiAgICB0aGVtZS5jb2xvcjkwID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWNvbG9yOTAnKVxuICAgIHRoZW1lLmNvbG9yMTAwID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWNvbG9yMTAwJylcbiAgICB0aGVtZS5uYW1lID0gbmFtZVxuICB9XG5cbiAgY29uc3QgaW5pdFRoZW1lU3dpdGNoZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3dpdGNoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhlbWVfX3N3aXRjaGVyJylcbiAgICBzd2l0Y2hlci5jaGVja2VkID0gdGhlbWVOYW1lID09PSAnZGFyaydcbiAgICBnZXRUaGVtZUNvbG9ycyh0aGVtZU5hbWUpXG5cbiAgICBzd2l0Y2hlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCBkYXJrVGhlbWUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWRcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgndGhlbWVfX2RhcmsnLCBkYXJrVGhlbWUpXG4gICAgICBnZXRUaGVtZUNvbG9ycyhkYXJrVGhlbWUgPyAnZGFyaycgOiAnbGlnaHQnKVxuICAgICAgc3RvcmUuc2V0KCd0aGVtZScsIGRhcmtUaGVtZSA/ICdkYXJrJyA6ICdsaWdodCcpXG4gICAgICB0aGVtZVVwZGF0ZSgpXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGluaXRMYW5ndWFnZVN3aXRjaGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZ3VhZ2VfX2ljb24nKVxuICAgIGNvbnN0IHN3aXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhbmd1YWdlX19zZWxlY3QnKVxuICAgIHN3aXRjaGVyLnZhbHVlID0gbGFuZ1xuICAgIGljb24uY2xhc3NOYW1lID0gYGxhbmd1YWdlX19pY29uICR7bGFuZ31gXG5cbiAgICBzd2l0Y2hlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBzdG9yZS5zZXQoJ2xhbmcnLCBldmVudC50YXJnZXQudmFsdWUpXG4gICAgICBsb2NhdGlvbi5yZXBsYWNlKCcvJylcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgaW5pdFBlbmRpbmdDb21wb25lbnRzID0gKCkgPT4ge1xuICAgIGluaXRUaGVtZVN3aXRjaGVyKClcbiAgICB0aGVtZVVwZGF0ZSgpXG4gICAgaW5pdExhbmd1YWdlU3dpdGNoZXIoKVxuICB9XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoXG4gICAgY3JlYXRlRnJvbVRlbXBsYXRlKCdoZWFkZXInLCBpbml0UGVuZGluZ0NvbXBvbmVudHMpLFxuICAgIGNyZWF0ZU1haW4oKSxcbiAgICBjcmVhdGVGcm9tVGVtcGxhdGUoJ2Zvb3RlcicsIGluaXRQZW5kaW5nQ29tcG9uZW50cyksXG4gICAgY3JlYXRlTW9kYWxHYW1lKCksXG4gICAgY3JlYXRlTW9kYWxSZXN1bHRzKCksXG4gICAgY3JlYXRlTW9kYWxSZWNvcmRzKCksXG4gICAgY3JlYXRlTW9kYWxBYm91dCgpXG4gIClcblxuICBpbml0TWVudSgpXG59XG4iLCJpbXBvcnQgeyBTb3VuZCB9IGZyb20gJy4uL3V0aWxzL3NvdW5kJ1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuLi91dGlscy9zdG9yZSdcblxuY29uc3Qgc25kID0gbmV3IFNvdW5kKClcbmNvbnN0IHN0b3JlID0gbmV3IFN0b3JlKClcblxuZnVuY3Rpb24gY2hhbmdlU291bmRWb2x1bWUoaWNvbiwgdmFsdWUsIGluaXQpIHtcbiAgaWYgKCFpbml0KSBzbmQuc291bmQubXV0ZWQgPSBmYWxzZVxuICBpZiAodmFsdWUpIHNuZC5zb3VuZC52b2x1bWUgPSBOdW1iZXIodmFsdWUpXG4gIGlmIChzbmQuc291bmQudm9sdW1lID4gMC42KSB7XG4gICAgaWNvbi5jbGFzc05hbWUgPSAndm9sdW1lX19zb3VuZF9pY29uIHZvbHVtZS0zJ1xuICB9IGVsc2UgaWYgKHNuZC5zb3VuZC52b2x1bWUgPiAwLjMpIHtcbiAgICBpY29uLmNsYXNzTmFtZSA9ICd2b2x1bWVfX3NvdW5kX2ljb24gdm9sdW1lLTInXG4gIH0gZWxzZSBpZiAoc25kLnNvdW5kLnZvbHVtZSA+IDApIHtcbiAgICBpY29uLmNsYXNzTmFtZSA9ICd2b2x1bWVfX3NvdW5kX2ljb24gdm9sdW1lLTEnXG4gIH0gZWxzZSB7XG4gICAgaWNvbi5jbGFzc05hbWUgPSAndm9sdW1lX19zb3VuZF9pY29uIHZvbHVtZS1vZmYnXG4gIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlU291bmRWb2x1bWVFbmQoKSB7XG4gIHNuZC5wbGF5KCdkb3QnKVxuICBzdG9yZS5zZXQoJ3NvdW5kJywgeyB2b2x1bWU6IHNuZC5zb3VuZC52b2x1bWUsIG11dGVkOiBmYWxzZSB9KVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VNdXNpY1ZvbHVtZUVuZCgpIHtcbiAgc3RvcmUuc2V0KCdtdXNpYycsIHsgdm9sdW1lOiBzbmQubXVzaWMudm9sdW1lLCBtdXRlZDogZmFsc2UgfSlcbn1cblxuZnVuY3Rpb24gY2hhbmdlTXVzaWNWb2x1bWUoaWNvbiwgdmFsdWUpIHtcbiAgaWYgKHNuZC5tdXNpYy5tdXRlZCkgc25kLm11c2ljTXV0ZWQgPSBmYWxzZVxuICBpZiAodmFsdWUpIHNuZC5tdXNpY1ZvbHVtZSA9IE51bWJlcih2YWx1ZSlcbiAgaWNvbi5jbGFzc0xpc3QudG9nZ2xlKCd2b2x1bWUtb2ZmJywgc25kLm11c2ljLnZvbHVtZSA9PT0gMClcbn1cblxuZnVuY3Rpb24gbXV0ZVNvdW5kKGljb24pIHtcbiAgc25kLnNvdW5kLm11dGVkID0gIXNuZC5zb3VuZC5tdXRlZFxuICBpZiAoc25kLnNvdW5kLm11dGVkKSBpY29uLmNsYXNzTmFtZSA9ICd2b2x1bWVfX3NvdW5kX2ljb24gdm9sdW1lLW9mZidcbiAgZWxzZSBjaGFuZ2VTb3VuZFZvbHVtZShpY29uKVxuICBzdG9yZS5zZXQoJ3NvdW5kLm11dGVkJywgc25kLnNvdW5kLm11dGVkKVxufVxuXG5mdW5jdGlvbiBtdXRlTXVzaWMoaWNvbikge1xuICBzbmQubXVzaWNNdXRlZCA9ICFzbmQubXVzaWMubXV0ZWRcbiAgaWNvbi5jbGFzc0xpc3QudG9nZ2xlKCd2b2x1bWUtb2ZmJywgc25kLm11c2ljLm11dGVkKVxuICBzdG9yZS5zZXQoJ211c2ljLm11dGVkJywgc25kLm11c2ljLm11dGVkKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVm9sdW1lQ29udHJvbCgpIHtcbiAgY29uc3QgcyA9IHN0b3JlLmdldCgnc291bmQnKVxuICBjb25zdCBtID0gc3RvcmUuZ2V0KCdtdXNpYycpXG4gIGlmIChzKSB7XG4gICAgaWYgKE51bWJlci5pc0Zpbml0ZShzLnZvbHVtZSkpIHNuZC5zb3VuZC52b2x1bWUgPSBzLnZvbHVtZVxuICAgIGlmICh0eXBlb2Ygcy5tdXRlZCA9PT0gJ2Jvb2xlYW4nKSBzbmQuc291bmQubXV0ZWQgPSBzLm11dGVkXG4gIH1cbiAgaWYgKG0pIHtcbiAgICBpZiAoTnVtYmVyLmlzRmluaXRlKG0udm9sdW1lKSkgc25kLm11c2ljLnZvbHVtZSA9IG0udm9sdW1lXG4gICAgaWYgKHR5cGVvZiBtLm11dGVkID09PSAnYm9vbGVhbicpIHNuZC5tdXNpYy5tdXRlZCA9IG0ubXV0ZWRcbiAgfVxuXG4gIGNvbnN0IHZvbHVtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHZvbHVtZS5jbGFzc05hbWUgPSAndm9sdW1lJ1xuXG4gIGNvbnN0IHNvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgc291bmQuY2xhc3NOYW1lID0gJ3ZvbHVtZV9fc291bmQnXG4gIGNvbnN0IHNuZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBzbmRJY29uLmNsYXNzTmFtZSA9ICd2b2x1bWVfX3NvdW5kX2ljb24nXG4gIGNvbnN0IHNuZFJhbmdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBzbmRSYW5nZS5jbGFzc05hbWUgPSAndm9sdW1lX19yYW5nZSdcbiAgc25kUmFuZ2UudHlwZSA9ICdyYW5nZSdcbiAgc25kUmFuZ2Uuc3RlcCA9ICcwLjA1J1xuICBzbmRSYW5nZS52YWx1ZSA9IHNuZC5zb3VuZC52b2x1bWVcbiAgc25kUmFuZ2UubWF4ID0gJzEnXG4gIHNuZFJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gY2hhbmdlU291bmRWb2x1bWUoc25kSWNvbiwgc25kUmFuZ2UudmFsdWUpKVxuICBzbmRSYW5nZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgY2hhbmdlU291bmRWb2x1bWVFbmQpXG4gIHNuZEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtdXRlU291bmQoc25kSWNvbikpXG4gIHNvdW5kLmFwcGVuZChzbmRJY29uLCBzbmRSYW5nZSlcblxuICBjb25zdCBtdXNpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIG11c2ljLmNsYXNzTmFtZSA9ICd2b2x1bWVfX211c2ljJ1xuICBjb25zdCBtdXNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbXVzSWNvbi5jbGFzc05hbWUgPSAndm9sdW1lX19tdXNpY19pY29uJ1xuICBjb25zdCBtdXNSYW5nZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgbXVzUmFuZ2UuY2xhc3NOYW1lID0gJ3ZvbHVtZV9fcmFuZ2UnXG4gIG11c1JhbmdlLnR5cGUgPSAncmFuZ2UnXG4gIG11c1JhbmdlLnN0ZXAgPSAnMC4wNSdcbiAgbXVzUmFuZ2UudmFsdWUgPSBzbmQubXVzaWMudm9sdW1lXG4gIG11c1JhbmdlLm1heCA9ICcxJ1xuICBtdXNSYW5nZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IGNoYW5nZU11c2ljVm9sdW1lKG11c0ljb24sIG11c1JhbmdlLnZhbHVlKSlcbiAgbXVzUmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGNoYW5nZU11c2ljVm9sdW1lRW5kKVxuICBtdXNJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbXV0ZU11c2ljKG11c0ljb24pKVxuICBtdXNpYy5hcHBlbmQobXVzSWNvbiwgbXVzUmFuZ2UpXG5cbiAgdm9sdW1lLmFwcGVuZChzb3VuZCwgbXVzaWMpXG5cbiAgY2hhbmdlU291bmRWb2x1bWUoc25kSWNvbiwgc25kLnNvdW5kLnZvbHVtZSwgdHJ1ZSlcbiAgaWYgKHNuZC5zb3VuZC5tdXRlZCkgc25kSWNvbi5jbGFzc05hbWUgPSAndm9sdW1lX19zb3VuZF9pY29uIHZvbHVtZS1vZmYnXG4gIG11c0ljb24uY2xhc3NMaXN0LnRvZ2dsZSgndm9sdW1lLW9mZicsIHNuZC5tdXNpYy52b2x1bWUgPT09IDAgfHwgc25kLm11c2ljLm11dGVkKVxuXG4gIHJldHVybiB2b2x1bWVcbn1cbiIsImltcG9ydCBwdXp6bGVEYXRhIGZyb20gJy4uL2RhdGEvcHV6emxlLmpzb24nIGFzc2VydCB7IHR5cGU6ICdqc29uJyB9XG5cbmV4cG9ydCBjbGFzcyBQdXp6bGVzIHtcbiAgc3RhdGljIF9pbnN0YW5jZVxuICBiYXNlID0gW1tdLCBbXSwgW11dXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKFB1enpsZXMuX2luc3RhbmNlKSByZXR1cm4gUHV6emxlcy5faW5zdGFuY2VcbiAgICBQdXp6bGVzLl9pbnN0YW5jZSA9IHRoaXNcbiAgICB0aGlzLmJhc2UgPSBwdXp6bGVEYXRhXG4gIH1cblxuICBibGFuayhtb2RlKSB7XG4gICAgY29uc3Qgcm93cyA9IChtb2RlICsgMSkgKiA1XG4gICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IHJvd3MgfSwgKCkgPT4gQXJyYXkuZnJvbSh7IGxlbmd0aDogcm93cyB9LCAoKSA9PiAwKSlcbiAgfVxuXG4gIHN0cmluZ2lmeShkYXRhKSB7XG4gICAgY29uc3QgYXJyID0gZGF0YS5tYXAoYSA9PiBhLm1hcCh2ID0+ICh2ID09PSAxID8gMSA6IDApKSlcbiAgICBjb25zdCBkYXRhU3RyaW5nID0gYXJyLmZsYXQoMSkuam9pbignJylcbiAgICByZXR1cm4gZGF0YVN0cmluZ1xuICB9XG5cbiAgYWRkKG5hbWUsIGRhdGEpIHtcbiAgICBpZiAoIW5hbWUgfHwgbmFtZS5sZW5ndGggPCAyKSByZXR1cm4gbmV3IEVycm9yKCdJbnZhbGlkIG5hbWUnKVxuICAgIGlmICghZGF0YSB8fCAoIUFycmF5LmlzQXJyYXkoZGF0YSkgJiYgdHlwZW9mIGRhdGEgIT09ICdzdHJpbmcnKSkgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCBwdXp6bGUgZGF0YScpXG4gICAgY29uc3QgZGF0YVN0cmluZyA9IHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJyA/IGRhdGEgOiB0aGlzLnN0cmluZ2lmeShkYXRhKVxuICAgIGNvbnN0IHJvd3MgPSBNYXRoLnNxcnQoZGF0YVN0cmluZy5sZW5ndGgpXG4gICAgY29uc3QgbW9kZSA9IHJvd3MgLyA1IC0gMVxuICAgIGNvbnN0IGxpc3QgPSB0aGlzLmxpc3QobW9kZSlcbiAgICBpZiAobGlzdC5pbmNsdWRlcyhuYW1lKSkgcmV0dXJuIG5ldyBFcnJvcihgJHtuYW1lfSBhbHJlYWR5IGV4aXN0YClcbiAgICB0aGlzLmJhc2VbbW9kZV0udW5zaGlmdCh7IG5hbWUsIGRhdGE6IGRhdGFTdHJpbmcgfSlcbiAgICByZXR1cm4gJ1B1enpsZSB3YXMgc2F2ZWQnXG4gIH1cblxuICBwYXJzZShkYXRhU3RyaW5nKSB7XG4gICAgY29uc3Qgcm93cyA9IE1hdGguc3FydChkYXRhU3RyaW5nLmxlbmd0aClcbiAgICBpZiAocm93cyAhPT0gfn5yb3dzKSByZXR1cm4gbnVsbFxuICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiByb3dzIH0sIChfLCB5KSA9PiBBcnJheS5mcm9tKHsgbGVuZ3RoOiByb3dzIH0sIChfLCB4KSA9PiBOdW1iZXIoZGF0YVN0cmluZy5jaGFyQXQoeSAqIHJvd3MgKyB4KSkpKVxuICB9XG5cbiAgZ2V0KG1vZGUsIHB1enpsZSkge1xuICAgIGlmICghdGhpcy5iYXNlW21vZGVdKSB7XG4gICAgICBjb25zb2xlLndhcm4oYEdhbWUgbW9kZSAke21vZGV9IG5vdCBmb3VuZCFgKVxuICAgICAgcmV0dXJuIHRoaXMuYmxhbmsobW9kZSlcbiAgICB9XG4gICAgaWYgKCF0aGlzLmJhc2VbbW9kZV1bcHV6emxlXSkge1xuICAgICAgY29uc29sZS53YXJuKGBHYW1lIHB1enpsZSAke3B1enpsZX0gbm90IGZvdW5kIWApXG4gICAgICByZXR1cm4gdGhpcy5ibGFuayhtb2RlKVxuICAgIH1cblxuICAgIGNvbnN0IHsgbmFtZSwgZGF0YTogZGF0YVN0cmluZyB9ID0gdGhpcy5iYXNlW21vZGVdW3B1enpsZV1cbiAgICBjb25zdCBkYXRhID0gdGhpcy5wYXJzZShkYXRhU3RyaW5nKVxuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICBjb25zb2xlLndhcm4oYEdhbWUgcHV6emxlICR7bmFtZX0gaXMgY29ycnVwdGVkIWApXG4gICAgICByZXR1cm4gdGhpcy5ibGFuayhtb2RlKVxuICAgIH1cblxuICAgIHJldHVybiB7IG5hbWUsIGRhdGEgfVxuICB9XG5cbiAgbGlzdChtb2RlKSB7XG4gICAgY29uc3QgYXJyID0gdGhpcy5iYXNlW21vZGVdXG4gICAgaWYgKCFhcnIpIHtcbiAgICAgIGNvbnNvbGUud2FybihgR2FtZSBtb2RlICR7bW9kZX0gbm90IGZvdW5kIWApXG4gICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogYXJyLmxlbmd0aCB9LCAoXywgaSkgPT4gYXJyW2ldLm5hbWUpXG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBmb3JtYXRUaW1lID0gbnVtID0+IHtcbiAgcmV0dXJuIGAkeygnMCcgKyB+fihudW0gLyA2MCkpLnNsaWNlKC0yKX06JHsoJzAnICsgKG51bSAlIDYwKSkuc2xpY2UoLTIpfWBcbn1cblxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGUgPSBudW0gPT4ge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUobnVtKVxuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkuc2xpY2UoLTIpXG4gIGNvbnN0IG1vbnRoID0gYDAke2RhdGUuZ2V0TW9udGgoKSArIDF9YC5zbGljZSgtMilcbiAgY29uc3QgZGF5ID0gYDAke2RhdGUuZ2V0RGF0ZSgpfWAuc2xpY2UoLTIpXG4gIGNvbnN0IGhvdXIgPSBgMCR7ZGF0ZS5nZXRIb3VycygpfWAuc2xpY2UoLTIpXG4gIGNvbnN0IG1pbiA9IGAke2RhdGUuZ2V0TWludXRlcygpfWAuc2xpY2UoLTIpXG4gIHJldHVybiBgJHtkYXl9LiR7bW9udGh9LiR7eWVhcn0gJHtob3VyfToke21pbn1gXG59XG4iLCJpbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vZGF0YS9tZXNzYWdlcy5qc29uJyBhc3NlcnQgeyB0eXBlOiAnanNvbicgfVxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL3N0YXRlJ1xuXG5jb25zdCBzdGF0ZSA9IG5ldyBTdGF0ZSgpXG5cbmNvbnN0IHRpbWVyID0ge1xuICBzaHJpa2U6IG51bGwsXG4gIGJ1bGxkb2c6IG51bGwsXG59XG5cbmV4cG9ydCBjb25zdCBtZXNzYWdlID0gKGNoYXJhY3RlciwgaWQgPSBudWxsLCBkZWxheSA9IDMwMDApID0+IHtcbiAgY29uc3QgbGFuZyA9IHN0YXRlLmxhbmdcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc3BlZWNoX18ke2NoYXJhY3Rlcn1gKSAvLyBzaHJpa2UgLyBidWxsZG9nXG4gIGlmICghaWQpIHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIHJldHVyblxuICB9XG4gIGlmICghbWVzc2FnZXNbbGFuZ10gfHwgIW1lc3NhZ2VzW2xhbmddW2lkXSkgdGhyb3cgbmV3IEVycm9yKCdObyBzdWNoIG1lc3NhZ2UnKVxuXG4gIGNvbnN0IG1zZyA9IG1lc3NhZ2VzW2xhbmddW2lkXVxuICBjb25zdCB0ZXh0ID0gQXJyYXkuaXNBcnJheShtc2cpID8gbXNnW35+KE1hdGgucmFuZG9tKCkgKiBtc2cubGVuZ3RoKV0gOiBtc2dcbiAgZWwudGV4dENvbnRlbnQgPSB0ZXh0XG4gIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gIGNsZWFyVGltZW91dCh0aW1lcltjaGFyYWN0ZXJdKVxuICB0aW1lcltjaGFyYWN0ZXJdID0gc2V0VGltZW91dCgoKSA9PiBlbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKSwgZGVsYXkpXG59XG4iLCJjb25zdCBzb3VuZHMgPSB7XG4gIGRvdDogeyB1cmw6ICcuL3B1YmxpYy9kb3Qub2dnJywgdHlwZTogJ211bHRpcGxlJyB9LFxuICBjcm9zczogeyB1cmw6ICcuL3B1YmxpYy9jcm9zcy5vZ2cnLCB0eXBlOiAnbXVsdGlwbGUnIH0sXG4gIHdob29zaDogeyB1cmw6ICcuL3B1YmxpYy93aG9vc2gwMS5vZ2cnIH0sXG4gIHNsaWRlOiB7IHVybDogJy4vcHVibGljL3dob29zaDAyLm9nZycgfSxcbiAgc3RlcDogeyB1cmw6ICcuL3B1YmxpYy9zdGVwLm9nZycsIHR5cGU6ICdtdWx0aXBsZScgfSxcbn1cblxuY29uc3QgbXVzaWMgPSBbXG4gIHtcbiAgICBuYW1lOiAnSW50cm8nLFxuICAgIHVybDogJy4vcHVibGljL3RyYWNrMDEub2dnJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdUb29sIEluIFNwYWNlJyxcbiAgICB1cmw6ICcuL3B1YmxpYy90cmFjazAyLm9nZycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnSW5zaWRlIFRoZSBCdWNrZXQnLFxuICAgIHVybDogJy4vcHVibGljL3RyYWNrMDMub2dnJyxcbiAgfSxcbl1cblxuY29uc3Qgc3BlZWNoID0ge1xuICB3aW46IFsnLi9wdWJsaWMvd2luMDEub2dnJ10sXG4gIGxvb3NlOiBbJy4vcHVibGljL2xvb3NlMDEub2dnJywgJy4vcHVibGljL2xvb3NlMDIub2dnJywgJy4vcHVibGljL2xvb3NlMDMub2dnJywgJy4vcHVibGljL2xvb3NlMDQub2dnJywgJy4vcHVibGljL2xvb3NlMDUub2dnJ10sXG59XG5cbmNvbnN0IGNvdW50VG90YWwgPSBPYmplY3Qua2V5cyhzb3VuZHMpLmxlbmd0aCArIG11c2ljLmxlbmd0aCAqIDIgKyBPYmplY3QudmFsdWVzKHNwZWVjaCkucmVkdWNlKChhY2MsIGl0ZW0pID0+IGFjYyArIGl0ZW0ubGVuZ3RoLCAwKVxuXG5leHBvcnQgY2xhc3MgU291bmQge1xuICBzdGF0aWMgX2luc3RhbmNlXG4gIHNvdW5kID0geyB2b2x1bWU6IDAuNSwgbXV0ZWQ6IGZhbHNlIH1cbiAgbXVzaWMgPSB7IHZvbHVtZTogMC4yNSwgbXV0ZWQ6IHRydWUgfVxuICBzb3VuZHMgPSB7fVxuICB0cmFja3MgPSBbXVxuICBzcGVlY2ggPSB7IHdpbjogW10sIGxvb3NlOiBbXSB9XG4gIF9sb2FkZWQgPSAwXG4gIHJlYWR5ID0gMFxuICBfcGVuZGluZyA9IG51bGxcbiAgX3BsYXlpbmcgPSBudWxsXG4gIHJlYWR5Q2FsbGJhY2sgPSAoKSA9PiB7fVxuICBzdGFydFBsYXlDYWxsYmFjayA9ICgpID0+IHt9XG4gIGV4Y2VwdGlvbkNhbGxiYWNrID0gKCkgPT4ge31cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoU291bmQuX2luc3RhbmNlKSByZXR1cm4gU291bmQuX2luc3RhbmNlXG4gICAgU291bmQuX2luc3RhbmNlID0gdGhpc1xuICAgIE9iamVjdC5rZXlzKHNwZWVjaCkuZm9yRWFjaChuYW1lID0+IHNwZWVjaFtuYW1lXS5mb3JFYWNoKHVybCA9PiB0aGlzLl9nZXRTb3VuZCh1cmwsIG5hbWUsICdzcGVlY2gnKSkpXG4gICAgT2JqZWN0LmtleXMoc291bmRzKS5mb3JFYWNoKG5hbWUgPT4gdGhpcy5fZ2V0U291bmQoc291bmRzW25hbWVdLnVybCwgbmFtZSwgc291bmRzW25hbWVdLnR5cGUpKVxuICAgIG11c2ljLmZvckVhY2goaXRlbSA9PiB0aGlzLl9nZXRTb3VuZChpdGVtLnVybCwgaXRlbS5uYW1lLCAnbXVzaWMnKSlcblxuICAgIHRoaXMuX2NhbnBsYXkgPSB0aGlzLl9jYW5wbGF5LmJpbmQodGhpcylcbiAgICB0aGlzLl9lbmRlZCA9IHRoaXMuX2VuZGVkLmJpbmQodGhpcylcbiAgfVxuXG4gIC8qKiBDaGFuZ2UgbXVzaWMudm9sdW1lIGFuZCBjdXJyZW50bHkgcGxheWluZyBhdWRpbyB2b2x1bWUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAgKi9cbiAgc2V0IG11c2ljVm9sdW1lKHZhbHVlKSB7XG4gICAgdGhpcy5tdXNpYy52b2x1bWUgPSB2YWx1ZVxuICAgIGlmICh0aGlzLl9wbGF5aW5nKSB0aGlzLl9wbGF5aW5nLmF1ZGlvLnZvbHVtZSA9IHZhbHVlXG4gIH1cblxuICAvKiogQ2hhbmdlIG11c2ljLm11dGVkIGFuZCBtdXRlL3VubXV0ZSBjdXJyZW50bHkgcGxheWluZyBhdWRpby5cbiAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZVxuICAgKi9cbiAgc2V0IG11c2ljTXV0ZWQodmFsdWUpIHtcbiAgICB0aGlzLm11c2ljLm11dGVkID0gdmFsdWVcbiAgICBpZiAodGhpcy5fcGxheWluZykgdGhpcy5fcGxheWluZy5hdWRpby5tdXRlZCA9IHZhbHVlXG4gICAgZWxzZSB0aGlzLnBsYXkoMCwgMSlcbiAgfVxuXG4gIHBsYXkodHJhY2ssIGxvb3ApIHtcbiAgICBpZiAodGhpcy5tdXNpYy5tdXRlZCkgcmV0dXJuXG5cbiAgICBpZiAoIXRoaXMudHJhY2tzW3RyYWNrXSB8fCAhdGhpcy50cmFja3NbdHJhY2tdLnJlYWR5KSB7XG4gICAgICBjb25zb2xlLmxvZyhgUGVuZGluZyBtdXNpYzogJHt0cmFja30uICR7dGhpcy50cmFja3NbdHJhY2tdID8gdGhpcy50cmFja3NbdHJhY2tdLm5hbWUgOiAnJ31gKVxuICAgICAgdGhpcy5fcGVuZGluZyA9IHRyYWNrXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBhdWRpbyA9IHRoaXMudHJhY2tzW3RyYWNrXS5hdWRpb1xuICAgIGF1ZGlvLnZvbHVtZSA9IHRoaXMubXVzaWMudm9sdW1lXG4gICAgYXVkaW8ubXV0ZWQgPSB0aGlzLm11c2ljLm11dGVkXG4gICAgYXVkaW9cbiAgICAgIC5wbGF5KClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKGxvb3ApIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgdGhpcy5fZW5kZWQpXG4gICAgICAgIHRoaXMuX3BsYXlpbmcgPSB7IHRyYWNrLCBhdWRpbyB9XG4gICAgICAgIHRoaXMuc3RhcnRQbGF5Q2FsbGJhY2sodGhpcy50cmFja3NbdHJhY2tdLm5hbWUpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS53YXJuKGVycm9yKVxuICAgICAgICB0aGlzLm11c2ljLm11dGVkID0gdHJ1ZVxuICAgICAgICB0aGlzLmV4Y2VwdGlvbkNhbGxiYWNrKClcbiAgICAgIH0pXG4gIH1cblxuICB1c2UobmFtZSkge1xuICAgIGlmICh0aGlzLnNvdW5kLm11dGVkKSByZXR1cm5cbiAgICBpZiAoIXRoaXMuc291bmRzW25hbWVdKSB7XG4gICAgICBjb25zb2xlLndhcm4oYE5vIHNvdW5kOiAke25hbWV9YClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGF1ZGlvID0gdGhpcy5zb3VuZHNbbmFtZV1baV1cbiAgICAgIGlmIChhdWRpby5jdXJyZW50VGltZSA9PT0gMCB8fCBhdWRpby5lbmRlZCkge1xuICAgICAgICBhdWRpby52b2x1bWUgPSB0aGlzLnNvdW5kLnZvbHVtZVxuICAgICAgICBhdWRpby5wbGF5KCkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzYXkobmFtZSkge1xuICAgIGlmICh0aGlzLnNvdW5kLm11dGVkKSByZXR1cm5cbiAgICBpZiAoIXRoaXMuc3BlZWNoW25hbWVdKSB7XG4gICAgICBjb25zb2xlLndhcm4oYE5vIHNwZWVjaDogJHtuYW1lfWApXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgYXVkaW8gPSB0aGlzLnNwZWVjaFtuYW1lXVt+fihNYXRoLnJhbmRvbSgpICogdGhpcy5zcGVlY2hbbmFtZV0ubGVuZ3RoKV1cbiAgICBhdWRpby52b2x1bWUgPSB0aGlzLnNvdW5kLnZvbHVtZVxuICAgIGF1ZGlvLnBsYXkoKS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIH1cblxuICBfZ2V0U291bmQocGF0aCwgbmFtZSwgdHlwZSA9IDApIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnN0IHJlcXVlc3RPYmogPSBuZXcgUmVxdWVzdChwYXRoLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQWNjZXB0LVJhbmdlcyc6ICcxMDAwMDAwMDAwJyxcbiAgICAgIH0sXG4gICAgICByZWZlcnJlclBvbGljeTogJ25vLXJlZmVycmVyJyxcbiAgICB9KVxuXG4gICAgZmV0Y2gocmVxdWVzdE9iailcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlKVxuICAgICAgLnRoZW4oYXN5bmMgZnVuY3Rpb24gKG91dGNvbWUpIHtcbiAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IG91dGNvbWUuYmxvYigpXG4gICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpXG5cbiAgICAgICAgc2VsZi5fbG9hZGVkICs9IDFcbiAgICAgICAgc2VsZi5yZWFkeSA9IH5+KChzZWxmLl9sb2FkZWQgLyBjb3VudFRvdGFsKSAqIDEwMClcblxuICAgICAgICBpZiAodHlwZSA9PT0gJ3NwZWVjaCcpIHtcbiAgICAgICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbygpXG4gICAgICAgICAgYXVkaW8uc3JjID0gdXJsXG4gICAgICAgICAgc2VsZi5zcGVlY2hbbmFtZV0ucHVzaChhdWRpbylcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbXVzaWMnKSB7XG4gICAgICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oKVxuICAgICAgICAgIGF1ZGlvLnNyYyA9IHVybFxuICAgICAgICAgIGF1ZGlvLmxvY2FsSW5mbyA9IHsgbmFtZSwgdHJhY2s6IHNlbGYudHJhY2tzLmxlbmd0aCB9XG4gICAgICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheScsIHNlbGYuX2NhbnBsYXkpXG4gICAgICAgICAgc2VsZi50cmFja3MucHVzaCh7IGF1ZGlvLCBuYW1lIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5zb3VuZHNbbmFtZV0gPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0eXBlID09PSAnbXVsdGlwbGUnID8gMTAgOiAxIH0sICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKClcbiAgICAgICAgICAgIGF1ZGlvLnNyYyA9IHVybFxuICAgICAgICAgICAgcmV0dXJuIGF1ZGlvXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYucmVhZHlDYWxsYmFjayhzZWxmLnJlYWR5LCBuYW1lKVxuICAgICAgfSlcbiAgfVxuXG4gIF9jYW5wbGF5KGV2ZW50KSB7XG4gICAgZXZlbnQudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NhbnBsYXknLCB0aGlzLl9jYW5wbGF5KVxuICAgIGNvbnN0IHsgbmFtZSwgdHJhY2sgfSA9IGV2ZW50LnRhcmdldC5sb2NhbEluZm9cbiAgICB0aGlzLl9sb2FkZWQgKz0gMVxuICAgIHRoaXMucmVhZHkgPSB+figodGhpcy5fbG9hZGVkIC8gY291bnRUb3RhbCkgKiAxMDApXG4gICAgdGhpcy50cmFja3NbdHJhY2tdLnJlYWR5ID0gdHJ1ZVxuICAgIC8vIGNvbnNvbGUubG9nKGAke3RyYWNrfS4gQ2FuIHBsYXkgJyR7bmFtZX0nLiBQZW5kaW5nOiAke3RoaXMuX3BlbmRpbmd9YClcblxuICAgIGlmICh0aGlzLl9wZW5kaW5nID09PSB0cmFjaykge1xuICAgICAgdGhpcy5wbGF5KHRoaXMuX3BlbmRpbmcsIDEpXG4gICAgICB0aGlzLl9wZW5kaW5nID0gbnVsbFxuICAgIH1cbiAgICB0aGlzLnJlYWR5Q2FsbGJhY2sodGhpcy5yZWFkeSwgbmFtZSlcbiAgfVxuXG4gIF9lbmRlZCgpIHtcbiAgICBpZiAoIXRoaXMuX3BsYXlpbmcpIHJldHVyblxuICAgIGxldCBuZXh0ID0gKHRoaXMuX3BsYXlpbmcudHJhY2sgPz8gMCkgKyAxXG4gICAgaWYgKG5leHQgPj0gdGhpcy50cmFja3MubGVuZ3RoKSBuZXh0ID0gMFxuICAgIHRoaXMuX3BsYXlpbmcgPSBudWxsXG4gICAgdGhpcy5wbGF5KG5leHQsIDEpXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTdGF0ZSB7XG4gIHN0YXRpYyBfaW5zdGFuY2VcbiAgc3RhdGljIF9jdXJyZW50ID0ge1xuICAgIGN0eDogbnVsbCxcbiAgICBwb2ludGVyOiBudWxsLFxuICAgIGhvdmVyOiBudWxsLFxuICAgIG1vZGU6IDAsXG4gIH1cbiAgc3RhdHVzID0gbnVsbFxuICBsYW5nID0gJ2VuJ1xuICBtb2RlVXBkYXRlQ2FsbGJhY2sgPSAoKSA9PiB7fVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmICghU3RhdGUuX2N1cnJlbnQuY3R4KSB0aGlzLnByZXBhcmUoKVxuICAgIGlmIChTdGF0ZS5faW5zdGFuY2UpIHJldHVybiBTdGF0ZS5faW5zdGFuY2VcbiAgICBTdGF0ZS5faW5zdGFuY2UgPSB0aGlzXG4gIH1cblxuICBwcmVwYXJlKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX19maWVsZCcpXG4gICAgaWYgKGNhbnZhcyAmJiBjYW52YXMuZ2V0Q29udGV4dCkge1xuICAgICAgU3RhdGUuX2N1cnJlbnQuY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICB9XG4gICAgY29uc3QgaG92ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9faG92ZXInKVxuICAgIGlmIChob3ZlciAmJiBob3Zlci5nZXRDb250ZXh0KSB7XG4gICAgICBTdGF0ZS5fY3VycmVudC5ob3ZlciA9IGhvdmVyXG4gICAgICBTdGF0ZS5fY3VycmVudC5wb2ludGVyID0gaG92ZXIuZ2V0Q29udGV4dCgnMmQnKVxuICAgIH1cbiAgfVxuXG4gIHNldE1vZGVVcGRhdGVDYWxsYmFjayhjYWxsYmFjayA9ICgpID0+IHt9KSB7XG4gICAgdGhpcy5tb2RlVXBkYXRlQ2FsbGJhY2sgPSBjYWxsYmFja1xuICB9XG5cbiAgZ2V0IGN0eCgpIHtcbiAgICByZXR1cm4gU3RhdGUuX2N1cnJlbnQuY3R4XG4gIH1cbiAgZ2V0IG1vZGUoKSB7XG4gICAgcmV0dXJuIFN0YXRlLl9jdXJyZW50Lm1vZGVcbiAgfVxuICBzZXQgbW9kZSh2YWx1ZSkge1xuICAgIGNvbnN0IG9sZFZhbHVlID0gU3RhdGUuX2N1cnJlbnQubW9kZVxuICAgIFN0YXRlLl9jdXJyZW50Lm1vZGUgPSBOdW1iZXIodmFsdWUpXG4gICAgaWYgKHZhbHVlICE9PSBvbGRWYWx1ZSkgdGhpcy5tb2RlVXBkYXRlQ2FsbGJhY2soKVxuICB9XG4gIGdldCBwb2ludGVyKCkge1xuICAgIHJldHVybiBTdGF0ZS5fY3VycmVudC5wb2ludGVyXG4gIH1cbiAgZ2V0IGhvdmVyKCkge1xuICAgIHJldHVybiBTdGF0ZS5fY3VycmVudC5ob3ZlclxuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRTeXN0ZW1UaGVtZSwgZ2V0U3lzdGVtTGFuZ3VhZ2UgfSBmcm9tICcuL3N5c3RlbSdcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB0aGVtZTogZ2V0U3lzdGVtVGhlbWUoKSxcbiAgbGFuZzogZ2V0U3lzdGVtTGFuZ3VhZ2UoKSxcbiAgc291bmQ6IHsgdm9sdW1lOiAwLjUsIG11dGVkOiBmYWxzZSB9LFxuICBtdXNpYzogeyB2b2x1bWU6IDAuMywgbXV0ZWQ6IHRydWUgfSxcbiAgcmVjb3JkczogW10sXG4gIHB1enpsZXM6IFtdLFxuICBsYXN0OiB7XG4gICAgZ2FtZTogbnVsbCxcbiAgICBlZGl0b3I6IG51bGwsXG4gIH0sXG59XG5cbi8vIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdOb25vZ3JhbXMnKVxuXG5leHBvcnQgY2xhc3MgU3RvcmUge1xuICBzdGF0aWMgU1RPUkVfTkFNRSA9ICdOb25vZ3JhbXMnXG4gIHN0YXRpYyBfaW5zdGFuY2VcbiAgX3N0YXRlID0ge31cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoU3RvcmUuX2luc3RhbmNlKSByZXR1cm4gU3RvcmUuX2luc3RhbmNlXG4gICAgY29uc3Qgc2F2ZWRTdGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JlLlNUT1JFX05BTUUpXG4gICAgdGhpcy5fc3RhdGUgPSBKU09OLnBhcnNlKHNhdmVkU3RhdGUpID8/IGluaXRpYWxTdGF0ZVxuICAgIFN0b3JlLl9pbnN0YW5jZSA9IHRoaXNcbiAgfVxuXG4gIGdldFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZVxuICB9XG5cbiAgcmVtb3ZlU3RhdGUoKSB7XG4gICAgdGhpcy5fc3RhdGUgPSB7fVxuICAgIHRoaXMuZW1pdCgpXG4gIH1cblxuICBnZXQoaWQpIHtcbiAgICByZXR1cm4gZ2V0VmFsdWUodGhpcy5fc3RhdGUsIGlkKVxuICB9XG5cbiAgc2V0KGlkLCB2YWx1ZSkge1xuICAgIHNldFZhbHVlKHRoaXMuX3N0YXRlLCBpZCwgdmFsdWUpXG4gICAgdGhpcy5lbWl0KClcbiAgfVxuXG4gIGFkZChpZCwgdmFsdWUpIHtcbiAgICBjb25zdCBhcnIgPSBnZXRWYWx1ZSh0aGlzLl9zdGF0ZSwgaWQpXG4gICAgaWYgKGFyciA9PT0gdW5kZWZpbmVkKSBzZXRWYWx1ZSh0aGlzLl9zdGF0ZSwgaWQsIFt2YWx1ZV0pXG4gICAgZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkgdGhyb3cgbmV3IEVycm9yKGBDYW4gbm90IGFkZCB0byAke2lkfWApXG4gICAgZWxzZSBhcnIucHVzaCh2YWx1ZSlcbiAgICB0aGlzLmVtaXQoKVxuICB9XG5cbiAgZW1pdCgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yZS5TVE9SRV9OQU1FLCBKU09OLnN0cmluZ2lmeSh0aGlzLl9zdGF0ZSkpXG4gICAgLy8gY29uc29sZS5sb2coJ3N0YXRlJywgdGhpcy5fc3RhdGUpXG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0VmFsdWUob2JqZWN0LCBwYXRoLCB2YWx1ZSkge1xuICBpZiAob2JqZWN0ICE9PSBPYmplY3Qob2JqZWN0KSkgcmV0dXJuIG9iamVjdFxuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnIHx8IHBhdGggPT09ICcnKSB0aHJvdyBuZXcgRXJyb3IoJ0FwcCBzdG9yZS4gUGF0aCBtdXN0IGJlIHR5cGUgb2Ygc3RyaW5nLicpXG4gIGxldCBvYmogPSBvYmplY3RcbiAgY29uc3QgYXJyID0gcGF0aC5zcGxpdCgnLicpXG4gIGNvbnN0IGxhc3QgPSBhcnIucG9wKClcbiAgYXJyLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAoIW9ialtrZXldKSBvYmpba2V5XSA9IHt9XG4gICAgb2JqID0gb2JqW2tleV1cbiAgfSlcbiAgaWYgKGxhc3QpIG9ialtsYXN0XSA9IHZhbHVlXG4gIHJldHVybiBvYmplY3Rcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBwYXRoKSB7XG4gIGlmIChvYmplY3QgIT09IE9iamVjdChvYmplY3QpIHx8IHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJyB8fCBwYXRoID09PSAnJykge1xuICAgIGNvbnNvbGUud2FybignQXBwIHN0b3JlLiBXcm9uZzonLCBwYXRoKVxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuICByZXR1cm4gcGF0aC5zcGxpdCgnLicpLnJlZHVjZSgob2JqLCBrZXkpID0+IChvYmpba2V5XSAhPT0gdW5kZWZpbmVkID8gb2JqW2tleV0gOiB1bmRlZmluZWQpLCBvYmplY3QpXG59XG4iLCJpbXBvcnQgeyBHQU1FIH0gZnJvbSAnLi4vbW9kdWxlL2NvbnN0YW50cydcblxuZXhwb3J0IGNvbnN0IGdldFN5c3RlbVRoZW1lID0gKCkgPT4ge1xuICBsZXQgdGhlbWUgPSAnbGlnaHQnXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubWF0Y2hNZWRpYSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMpIHRoZW1lID0gJ2RhcmsnXG4gIHJldHVybiB0aGVtZVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3lzdGVtTGFuZ3VhZ2UgPSAoKSA9PiB7XG4gIGxldCBsYW5ndWFnZSA9ICdlbidcbiAgaWYgKG5hdmlnYXRvcj8ubGFuZ3VhZ2UpIGxhbmd1YWdlID0gbmF2aWdhdG9yLmxhbmd1YWdlLnNsaWNlKDAsIDIpXG4gIGlmICghR0FNRS5sYW5ndWFnZXMuaW5jbHVkZXMobGFuZ3VhZ2UpKSBsYW5ndWFnZSA9ICdlbidcbiAgcmV0dXJuIGxhbmd1YWdlXG59XG4iLCJleHBvcnQgY2xhc3MgVGhlbWUge1xuICBzdGF0aWMgX2luc3RhbmNlXG4gIHRoZW1lTmFtZSA9ICdsaWdodCdcbiAgY29sb3JzID0ge1xuICAgIGNvbG9yMDA6ICcgI2ZmZicsXG4gICAgY29sb3IyMDogJyNjOGM4YzgnLFxuICAgIGNvbG9yMTAwOiAnIzAwMCcsXG4gIH1cbiAgY2FsbGJhY2sgPSAoKSA9PiB7fVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmIChUaGVtZS5faW5zdGFuY2UpIHJldHVybiBUaGVtZS5faW5zdGFuY2VcbiAgICBUaGVtZS5faW5zdGFuY2UgPSB0aGlzXG4gIH1cblxuICBhZGRDYWxsYmFjayhjYWxsYmFjayA9ICgpID0+IHt9KSB7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrXG4gIH1cblxuICBlbWl0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudGhlbWVOYW1lLCAnY29sb3IwMDonLCB0aGlzLmNvbG9ycy5jb2xvcjAwLCAnY29sb3IxMDA6JywgdGhpcy5jb2xvcnMuY29sb3IxMDApXG4gICAgdGhpcy5jYWxsYmFjaygpXG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZU5hbWVcbiAgfVxuICBzZXQgbmFtZSh2YWx1ZSkge1xuICAgIHRoaXMudGhlbWVOYW1lID0gdmFsdWVcbiAgICB0aGlzLmVtaXQoKVxuICB9XG5cbiAgZ2V0IGNvbG9yMDAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3JzLmNvbG9yMDBcbiAgfVxuICBnZXQgY29sb3IxMDAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3JzLmNvbG9yMTAwXG4gIH1cbiAgc2V0IGNvbG9yMDAodmFsdWUpIHtcbiAgICB0aGlzLmNvbG9ycy5jb2xvcjAwID0gdmFsdWVcbiAgfVxuICBzZXQgY29sb3IxMDAodmFsdWUpIHtcbiAgICB0aGlzLmNvbG9ycy5jb2xvcjEwMCA9IHZhbHVlXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==