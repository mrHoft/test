export const formatTime = num => {
  return `${('0' + ~~(num / 60)).slice(-2)}:${('0' + (num % 60)).slice(-2)}`
}

export const formatDate = num => {
  const date = new Date(num)
  const year = date.getFullYear().toString().slice(-2)
  const month = `0${date.getMonth() + 1}`.slice(-2)
  const day = `0${date.getDate()}`.slice(-2)
  const hour = `0${date.getHours()}`.slice(-2)
  const min = `0${date.getMinutes()}`.slice(-2)
  return `${day}.${month}.${year} ${hour}:${min}`
}
