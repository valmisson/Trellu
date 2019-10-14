export function UID () {
  return (Date.now().toString(36) + Math.random.toString(36)).substr(3, 5)
}

export function generateLink (name, id) {
  const boardName = name.trim().toLowerCase().replace(/ /g, '-')

  return `/b/${id}/${boardName}`
}

export function removeElement (element) {
  const fadeTime = 400
  element.style.transition = `opacity ${fadeTime}ms linear`
  element.style.opacity = 0

  setTimeout(() => element.remove(), fadeTime)
}

export function boardColorHEX (colorName) {
  const CSSvariable = `--${colorName}`

  return getComputedStyle(document.documentElement).getPropertyValue(CSSvariable)
}
