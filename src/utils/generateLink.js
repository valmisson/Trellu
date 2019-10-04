function generateLink (name, id) {
  const boardName = name.trim().toLowerCase().replace(/ /g, '-')

  return `/board/${id}/${boardName}`
}

export default generateLink
