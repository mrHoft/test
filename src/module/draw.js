import { GAME } from './constants'

const S = GAME.blockSize
const spf = GAME.spf

export const grid = game => {
  const grid = game.grid
  const st = game.start
  const rows = game.rows
  game.ctx.clearRect(0, 0, GAME.size, GAME.size)
  game.pointer.clearRect(0, 0, GAME.size, GAME.size)
  grid.clearRect(0, 0, GAME.size, GAME.size)

  grid.strokeStyle = game.color80
  grid.beginPath()
  for (let i = 0; i <= rows; i += 1) {
    grid.moveTo(st + i * S, st)
    grid.lineTo(st + i * S, st + rows * S)
    grid.moveTo(st, st + i * S)
    grid.lineTo(st + rows * S, st + i * S)
  }
  grid.stroke()

  grid.strokeStyle = game.color100
  const isGame = game.status === 'game' || game.status === 'end'
  grid.beginPath()
  for (let i = 0; i <= rows; i += 5) {
    const clue = isGame && i !== 0 && i !== rows ? S * (rows / 5) : 0
    grid.moveTo(st + i * S, st - clue)
    grid.lineTo(st + i * S, st + rows * S)
    grid.moveTo(st - clue, st + i * S)
    grid.lineTo(st + rows * S, st + i * S)
  }
  grid.stroke()
}

export const fill = game => {
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

export const solution = game => {
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

export const pointer = (game, x, y) => {
  game.pointer.clearRect(0, 0, GAME.size, GAME.size)
  if (x !== -1 && y !== -1) {
    const st = game.start
    const rx = st + x * S
    const ry = st + y * S
    game.pointer.fillStyle = game.color100
    game.pointer.fillRect(rx, st, S, game.rows * S)
    game.pointer.fillRect(st, ry, game.rows * S, S)
  }
}

export const block = (game, x, y, point) => {
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

export const cross = (game, x, y, point = 0) => {
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

export const crossRed = (game, x, y) => {
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

export const numbers = game => {
  const font = 14
  const space = 3
  game.ctx.font = `${font}px arial`
  const st = game.start

  for (let x = 0; x < game.rows; x += 1) {
    let nms = []
    let n = 0
    let matchY = 0
    for (let y = 0; y < game.rows; y += 1) {
      if (game.puzzle[y][x] === 1) n += 1
      else if (n > 0) {
        nms.push(n)
        n = 0
      }
      if (game.puzzle[y][x] === (game.arr[y][x] === 1 ? 1 : 0)) matchY += 1
    }
    if (n > 0) nms.push(n)

    game.ctx.strokeStyle = GAME.clues && matchY === game.rows ? '#bb5' : 'gray' //game.color50
    nms.reverse().forEach((n, i) => {
      const rx = st + x * S + (S - font) / 2
      game.ctx.strokeText(n, rx, st - S / 2 - i * (font + space))
    })
  }

  for (let y = 0; y < game.rows; y += 1) {
    let nms = []
    let n = 0
    let matchX = 0
    for (let x = 0; x < game.rows; x += 1) {
      if (game.puzzle[y][x] === 1) n += 1
      else if (n > 0) {
        nms.push(n)
        n = 0
      }
      if (game.puzzle[y][x] === (game.arr[y][x] === 1 ? 1 : 0)) matchX += 1
    }
    if (n > 0) nms.push(n)

    game.ctx.strokeStyle = GAME.clues && matchX === game.rows ? '#bb5' : 'gray' //game.color50
    nms.reverse().forEach((n, i) => {
      const ry = st + y * S + (S - font) / 2 + font
      game.ctx.strokeText(n, st - S / 2 - font / 2 - i * (font + space), ry)
    })
  }
}

export const numbersMatchX = (game, x, match) => {
  const font = 14
  const space = 3
  game.ctx.font = `${font}px arial`
  game.ctx.strokeStyle = match ? '#bb5' : 'gray'
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

export const numbersMatchY = (game, y, match) => {
  const font = 14
  const space = 3
  game.ctx.font = `${font}px arial`
  game.ctx.strokeStyle = match ? '#bb5' : 'gray'
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
