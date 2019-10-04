import db from './Connection'

const { boards } = db

const create = async board => {
  await boards.add(board)
}

const get = async boardID => {
  const board = await boards.get(boardID)

  return board
}

const getAll = async () => {
  const all = await boards.toArray()

  return all
}

export default {
  create,
  get,
  getAll
}