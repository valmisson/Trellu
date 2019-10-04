function UniqueID () {
  return (Date.now().toString(36) + Math.random.toString(36)).substr(3, 5)
}

export default UniqueID
