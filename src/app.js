async function gameStart() {
  const start = (await import('./module/game')).start
  const Store = (await import('./utils/store')).Store
  const Puzzles = (await import('./utils/base')).Puzzles
  const puzzles = new Puzzles()
  const store = new Store()

  const custom = store.get('puzzles')
  if (custom && custom.length > 0) {
    custom.forEach(item => puzzles.add(item.name, item.puzzle))
  }

  start(0)

  const Sound = (await import('./utils/sound')).Sound
  const sound = new Sound()
  sound.play(0, 1)
}

async function prepare() {
  const initUI = (await import('./module/ui')).default
  await initUI()
  gameStart()
}

prepare()
