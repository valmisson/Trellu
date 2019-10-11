export function UID () {
  return (Date.now().toString(36) + Math.random.toString(36)).substr(3, 5)
}

export function generateLink (name, id) {
  const boardName = name.trim().toLowerCase().replace(/ /g, '-')

  return `/board/${id}/${boardName}`
}

export function boardColorHEX (colorName) {
  const CSSvariable = `--${colorName}`

  return getComputedStyle(document.documentElement).getPropertyValue(CSSvariable)
}
