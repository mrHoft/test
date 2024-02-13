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

export function parse(text) {
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
