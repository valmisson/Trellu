import db from '../Connection'

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

const update = async (id, name, background) => {
  await boards.update(id, { name, background })
}

const remove = async boardID => {
  await boards.delete(boardID)
}

export default {
  create,
  get,
  getAll,
  update,
  remove
}
