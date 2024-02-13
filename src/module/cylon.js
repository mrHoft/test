export const createCylonEye = () => {
  const component = document.createElement('div')
  component.className = 'cylon'
  const message = document.createElement('div')
  message.className = 'cylon__message'
  const eye = document.createElement('div')
  eye.className = 'cylon__eye'
  component.append(message, eye)
  return component
}
