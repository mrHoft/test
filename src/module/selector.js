export function createSelector(name, nodes) {
  const n = name.toLowerCase()
  const component = document.createElement('div')
  component.className = n

  const label = document.createElement('span')
  label.textContent = name

  const select = document.createElement('select')
  select.className = `${n}__select`
  nodes.forEach((text, i) => {
    const el = document.createElement('option')
    el.value = i
    el.textContent = text
    select.append(el)
  })

  component.append(label, select)
  return { component, select }
}
